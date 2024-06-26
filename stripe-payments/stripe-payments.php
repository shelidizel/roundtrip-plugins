<?php
/*
Plugin Name: WordPress Stripe Integration
Plugin URI: https://sheldonplugins.com/
Description: A plugin to integrate stipe payments to book everything
Author: Sheldon Osotsi
Author URI: https://sheldonplugins.com
COntributors: mordauk
Version: 1.0
*/



  
function my_custom_endpoint_callback($request) {
	$data = $request->get_json_params();

  $amount = $data -> amount;

  $stripe = new \Stripe\StripeClient(STRIPE_SECRET_KEY);

  $paymentIntent = $stripe->paymentIntents->create([
    'amount' => $amount,
    'currency' => 'usd',
    // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
    'automatic_payment_methods' => [
        'enabled' => true,
    ],
]);

$output = [
    'clientSecret' => $paymentIntent->client_secret,
];



  return new WP_REST_Response($output); 
  }
  
  add_action('rest_api_init', function () {
	register_rest_route('stripe-payments/v1', '/initialize', array(
	  'methods' => 'POST',
	  'callback' => 'my_custom_endpoint_callback',
	));
  });

  
function render_stripe_checkout() {
	
	?>
	 <!-- Display a payment form -->
	 <form id="payment-form">
      <div id="payment-element">
        <!--Stripe.js injects the Payment Element-->
      </div>
      <button id="submit">
        <div class="spinner hidden" id="spinner"></div>
        <span id="button-text">Pay now</span>
      </button>
      <div id="payment-message" class="hidden"></div>
    </form>
	<?php
  }
  
 add_action('add_stripe_checkout_html', 'render_stripe_checkout');




