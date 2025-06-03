<?php

require_once '../sdk/vendor/autoload.php';

use SpApi\AuthAndAuth\LWAAuthorizationCredentials;
use SpApi\Configuration;
use SpApi\Api\Orders\v0\OrdersV0Api;
use Dotenv\Dotenv;

// Set the credentials, region and marketplace in .env file
$dotenv = Dotenv::createImmutable('../');
$dotenv->load();

// Set up LWA credentials
$lwaAuthorizationCredentials = new LWAAuthorizationCredentials([
    "clientId" => $_ENV['SP_API_CLIENT_ID'],
    "clientSecret" => $_ENV['SP_API_CLIENT_SECRET'],
    "refreshToken" => $_ENV['SP_API_REFRESH_TOKEN'],
    "endpoint" => $_ENV['SP_API_ENDPOINT']
]);

// Initialize configuration
$config = new Configuration([], $lwaAuthorizationCredentials);
$config->setHost("https://sellingpartnerapi-na.amazon.com");

try {
    // Create a restricted resource using the updated method
    $resource = $config->createRestrictedResource(
        'GET',
        '/orders/v0/orders',
        ['buyerInfo', 'shippingAddress']
    );

    // Get and set the RDT token
    $rdtToken = $config->getRestrictedDataToken([$resource]);

    // Create Orders API client (Configuration will automatically use RDT token)
    $ordersApi = new OrdersV0Api($config);

    // Make the API call
    $response = $ordersApi->getOrders(
        ['ATVPDKIKX0DER'],  // marketplace_ids
        '2023-01-01T00:00:00Z',  // createdAfter
        null,  // createdBefore
        null,  // lastUpdatedAfter
        null,  // lastUpdatedBefore
        ['Shipped']  // Only Unshipped or Shipped orderStatuses contain PII data
    );

    // Process Orders API response
    echo "Order API Response:\n";
    print_r($response);

} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}