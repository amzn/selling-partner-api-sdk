<?php

require_once '../sdk/vendor/autoload.php';

use SpApi\AuthAndAuth\LWAAuthorizationCredentials;
use SpApi\Configuration;
use SpApi\Api\Orders\v0\OrdersV0Api;
use SpApi\Api\tokens\v2021_03_01\TokensApi;
use SpApi\Model\tokens\v2021_03_01\CreateRestrictedDataTokenRequest;
use SpApi\Model\tokens\v2021_03_01\RestrictedResource;
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
    // Create a restricted resource specifying the API endpoint and required data elements
    $resource = new RestrictedResource();
    $resource->setMethod('GET');
    $resource->setPath('/orders/v0/orders');
    $resource->setDataElements([
        'buyerInfo',
        'shippingAddress'
    ]);

    // Get a Restricted Data Token for accessing PII data
    $tokensApi = new TokensApi($config);
    $request = new CreateRestrictedDataTokenRequest();
    $request->setRestrictedResources([$resource]);
    $response = $tokensApi->createRestrictedDataToken($request);
    $rdtToken = $response->getRestrictedDataToken();

    // Create Orders API client
    $ordersApi = new OrdersV0Api($config);

    // Make the API call with RDT token
    $response = $ordersApi
        ->getOrders(
            ['ATVPDKIKX0DER'],  // marketplace_ids
            '2023-01-01T00:00:00Z',  // createdAfter
            null,  // createdBefore
            null,  // lastUpdatedAfter
            null,  // lastUpdatedBefore
            ['Shipped'],  // Only Unshipped or Shipped orderStatuses contain PII data
            restrictedDataToken: $rdtToken // Pass RDT token to access PII data
        );

    // Process Orders API response
    echo "Order API Response:\n";
    print_r($response);

} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "\n";
}