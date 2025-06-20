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
//Initialize config and set SP-API endpoint region
$config = new Configuration([], $lwaAuthorizationCredentials);
$config->setHost("https://sellingpartnerapi-na.amazon.com");

// Create an instance of the Orders Api
$ordersApi = new OrdersV0Api($config);

try {
    // Call getOrders
    $response = $ordersApi
    ->getOrders(
        ['ATVPDKIKX0DER'], // MarketplaceIds
        '2023-01-01T00:00:00Z' // CreatedAfter
    );

    // Process Orders API response
    echo "Order API Response:\n";
    print_r($response);

} catch (Exception $e) {
    echo 'Exception when calling OrderApi->getOrders: ', $e->getMessage(), PHP_EOL;
}

