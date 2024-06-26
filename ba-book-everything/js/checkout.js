// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripe = Stripe("pk_live_51OyyrRP1EsANvFjocizTvQIFZWb1cothszDmvqUPdddXs0zBtW0M4nuC9YaitSRzHQ0TX5NvBm6xrZedxkzZ7R8j006uVyHnmP");

// The items the customer wants to buy
const items = [{ amount: php_vars.my_variable }];

let elements;


initialize();
checkStatus();


document
  .querySelector("#submit")
  .addEventListener("click", handleSubmit);

// Fetches a payment intent and captures the client secret
async function initialize() { 

    setLoading(true);
  
    console.log('+++++++++++++++');
    console.log(JSON.stringify({ items }));
    try {
      const baseUrl = window.location.origin;
      console.log(baseUrl);
      const response = await fetch("http://localhost/roundtrip/wp-json/stripe-payments/v1/initialize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items }),
      });

      console.log(response);

      
      if (!response.ok) {
        throw new Error(`Error fetching payment intent: ${response.statusText}`);
      }

      setLoading(false);

  
      const data = await response.json();

      console.log('++++');
      console.log(data);
      const { clientSecret } = data;
  
      elements = stripe.elements({ clientSecret });
  
      const paymentElementOptions = {
        layout: "tabs",
      };
  
      const paymentElement = elements.create("payment", paymentElementOptions);
      paymentElement.mount("#payment-element");
    } catch (error) {
      console.error("Error initializing payment:", error);
    }
  }

async function handleSubmit(e) {
  e.preventDefault();
  setLoading(true);

  const { error } = await stripe.confirmPayment({
    elements,
    confirmParams: {
      // Make sure to change this to your payment completion page
      return_url: "http://localhost:4242/checkout.html",
    },
  });

  // This point will only be reached if there is an immediate error when
  // confirming the payment. Otherwise, your customer will be redirected to
  // your `return_url`. For some payment methods like iDEAL, your customer will
  // be redirected to an intermediate site first to authorize the payment, then
  // redirected to the `return_url`.
  if (error.type === "card_error" || error.type === "validation_error") {
    showMessage(error.message);
  } else {
    showMessage("An unexpected error occurred.");
  }

  setLoading(false);
}

// Fetches the payment intent status after payment submission
async function checkStatus() {
  const clientSecret = new URLSearchParams(window.location.search).get(
    "payment_intent_client_secret"
  );

  if (!clientSecret) {
    return;
  }

  const { paymentIntent } = await stripe.retrievePaymentIntent(clientSecret);

  switch (paymentIntent.status) {
    case "succeeded":
      showMessage("Payment succeeded!");
      break;
    case "processing":
      showMessage("Your payment is processing.");
      break;
    case "requires_payment_method":
      showMessage("Your payment was not successful, please try again.");
      break;
    default:
      showMessage("Something went wrong.");
      break;
  }
}

// ------- UI helpers -------

function showMessage(messageText) {
  const messageContainer = document.querySelector("#payment-message");

  messageContainer.classList.remove("hidden");
  messageContainer.textContent = messageText;

  setTimeout(function () {
    messageContainer.classList.add("hidden");
    messageContainer.textContent = "";
  }, 4000);
}

// Show a spinner on payment submission
function setLoading(isLoading) {
  if (isLoading) {
    // Disable the button and show a spinner
    document.querySelector("#submit").disabled = true;
    document.querySelector("#spinner").classList.remove("hidden");
    document.querySelector("#button-text").classList.add("hidden");
  } else {
    document.querySelector("#submit").disabled = false;
    document.querySelector("#spinner").classList.add("hidden");
    document.querySelector("#button-text").classList.remove("hidden");
  }
}