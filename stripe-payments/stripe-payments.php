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

if(!defined('STRIPE_BASE_URL')) {
	define('STRIPE_BASE_URL', plugin_dir_url(__FILE__));
}
if(!defined('STRIPE_BASE_DIR')) {
	define('STRIPE_BASE_DIR', dirname(__FILE__));

}

require_once plugin_dir_path(__FILE__) . 'vendor/autoload.php';
define('STRIPE_SECRET_KEY', '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');



function stripe_payments_scripts() {
	wp_enqueue_script( 'stripe-checkout-js', 'https://js.stripe.com/v3/', [], '3.0', true );
	wp_enqueue_script( 'checkout-js', plugin_dir_url( __FILE__ ) . 'includes/js/checkout.js', array( 'stripe-checkout-js' ), '1.0', true );
	wp_enqueue_style(  'checkout-css', plugin_dir_url( __FILE__ ) . 'includes/css/checkout.css', array(), '1.0' );
  }
  add_action( 'wp_enqueue_scripts', 'stripe_payments_scripts' );


  
function my_custom_endpoint_callback($request) {
	$data = $request->get_json_params();

  $stripe = new \Stripe\StripeClient(STRIPE_SECRET_KEY);

  $paymentIntent = $stripe->paymentIntents->create([
    'amount' => 60,
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
  
  add_action('wp_head', 'render_stripe_checkout'); 




