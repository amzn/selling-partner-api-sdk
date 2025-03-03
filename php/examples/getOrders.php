<?php

require_once '../sdk/vendor/autoload.php';

use SpApi\AuthAndAuth\LWAAuthorizationCredentials;
use SpApi\Api\orders\v0\OrdersV0Api;
use SpApi\Configuration;
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
$config = new Configuration([], $lwaAuthorizationCredentials);

// Setting SP-API endpoint region
$config->setHost($_ENV['SP_API_ENDPOINT_HOST']);

// Create a new HTTP client
$client = new GuzzleHttp\Client();

// Create an instance of the Orders Api
$api = new OrdersV0Api($config, null, $client);

try {
    // Call getOrders
    $result = $api->getOrders(
        $marketplace_ids = ['ATVPDKIKX0DER'],
        $created_after = '2024-01-01'
    );
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrderApi->getOrders: ', $e->getMessage(), PHP_EOL;
}

