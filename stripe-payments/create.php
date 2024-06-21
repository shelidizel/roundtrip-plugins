<?php

require_once plugin_dir_path(__FILE__) . 'vendor/autoload.php';
define('STRIPE_SECRET_KEY', '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');

$stripe = new \Stripe\StripeClient(STRIPE_SECRET_KEY);


function calculateOrderAmount(array $items): int {
    // Replace this constant with a calculation of the order's amount
    // Calculate the order total on the server to prevent
    // people from directly manipulating the amount on the client
    return 1400;
}

header('Content-Type: application/json');



try {
    // retrieve JSON from POST body
    $jsonStr = file_get_contents('php://input');
    $jsonObj = json_decode($jsonStr);

    
    // Create a PaymentIntent with amount and currency
    $paymentIntent = $stripe->paymentIntents->create([
        'amount' => 10,
        'currency' => 'usd',
        // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
        'automatic_payment_methods' => [
            'enabled' => true,
        ],
    ]);

    $output = [
        'clientSecret' => $paymentIntent->client_secret,
    ];

    echo json_encode($output);
} catch (Error $e) {
    http_response_code(500);
    echo json_encode(['error' => $e->getMessage()]);
}