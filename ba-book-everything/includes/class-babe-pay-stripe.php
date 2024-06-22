<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * BABE_Pay_cash Class.
 * Get general settings
 * @class 		BABE_Pay_cash
 * @version		1.0.0
 * @author 		Booking Algorithms
 */

class BABE_Pay_stripe {
    
    // payment method name
    private static $payment_method = 'stripe';


    
    
//////////////////////////////
    /**
	 * Hook in tabs.
	 */
    public static function init() {

      require_once plugin_dir_path(__FILE__) . 'vendor/autoload.php';;
      define('STRIPE_SECRET_KEY', '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');

      function stripe_payments_scripts() {
         wp_enqueue_script( 'stripe-checkout-js', 'https://js.stripe.com/v3/', [], '3.0', true );
         wp_enqueue_script( 'checkout-js', plugin_dir_url( __FILE__ ) . './js/checkout.js', array( 'stripe-checkout-js' ), '1.0', true );
         wp_enqueue_style(  'checkout-css', plugin_dir_url( __FILE__ ) . './css/checkout.css', array(), '1.0' );
       }
       add_action( 'wp_enqueue_scripts', 'stripe_payments_scripts' );


        
        add_filter('babe_checkout_payment_title_'.self::$payment_method, array( __CLASS__, 'payment_method_title'), 10, 3);
        
        add_filter('babe_checkout_payment_fields_'.self::$payment_method, array( __CLASS__, 'payment_method_fields_html'), 10, 3);
        
        add_action( 'babe_payment_methods_init', array( __CLASS__, 'init_payment_method'));
        
        add_action( 'babe_order_to_pay_by_'.self::$payment_method, array( __CLASS__, 'order_to_pay'), 10, 4);
	}

////////////////////////
     /**
	 * Init payment method
     * @param array $payment_methods
     * @return void
	 */
     public static function init_payment_method($payment_methods){
        
        if (!isset($payment_methods[self::$payment_method])){
            BABE_Payments::add_payment_method(self::$payment_method, __('Pay With Stripe', 'ba-book-everything'));
        }
     }

////////////////////////
     /**
	 * Output payment method title for checkout form
     * @param string $method_title
     * @param array $args
     * @param string $input_fields_name
     * @return string
	 */
     public static function payment_method_title($method_title, $args, $input_fields_name){
        
        return $method_title;
     } 
         
////////////////////////
     /**
	 * Output payment method fields html for checkout form
     * @param string $fields
     * @param array $args
     * @param string $input_fields_name
     * @return string
	 */
   public static function payment_method_fields_html($stripe_form_html) {
      $stripe_form_html = '
        <form id="payment-form">
          <div id="payment-element">
            </div>
          <button id="submit">
            <div class="spinner hidden" id="spinner"></div>
            <span id="button-text">Pay now</span>
          </button>
          <div id="payment-message" class="hidden"></div>
        </form>
      ';
    
      return $stripe_form_html;
    }
     
////////////////////////
     /**
	 * Init payment method
     * @param int $order_id
     * @param array $args
     * @param string $current_url
     * @param string $success_url
     * @return void
	 */
     public static function order_to_pay($order_id, $args, $current_url, $success_url){
        
        BABE_Order::update_order_status($order_id, 'payment_deferred');
        
        do_action('babe_order_completed', $order_id);
                  
        wp_safe_redirect($success_url);
     }                
        
////////////////////    
}

BABE_Pay_stripe::init(); 