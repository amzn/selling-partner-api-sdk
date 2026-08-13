## PHP SDK for Selling Partner API
[![Packagist](https://img.shields.io/packagist/v/amzn-spapi/sdk?label=Packagist)](https://packagist.org/packages/amzn-spapi/sdk)

[![Video Thumbnail](https://raw.githubusercontent.com/amzn/selling-partner-api-sdk/refs/heads/main/php/docs/video-thumbnail.png)](https://www.youtube.com/watch?v=ZxG7wvmelj0)

*Click on the image to watch the video.*

The Selling Partner API SDK for PHP enables you to easily connect your PHP application to Amazon's REST-based SP-API.

This SDK helps developers:
- Authenticate with Amazon's Selling Partner API (SP-API)
- Send and receive data using RESTful endpoints
- Manage Amazon marketplace operations programmatically

* [Learn more about SP-API](https://developer.amazonservices.com/)
* [API Documentation](https://developer-docs.amazon.com/sp-api/)

### Getting started

#### Credentials

Before you can use the SDK, you need to be registered as a Selling Partner API developer. If you haven't done that yet, please follow the instructions in the [documentation](https://developer-docs.amazon.com/sp-api/docs/sp-api-registration-overview).
You also need to register your application to get valid credentials to call SP-API. If you haven't done that yet, please follow the instructions in the [documentation](https://developer-docs.amazon.com/sp-api/docs/registering-your-application).
If you are already registered successfully, you can find instructions on how to view your credentials in the [documentation](https://developer-docs.amazon.com/sp-api/docs/viewing-your-application-information-and-credentials).

## Installation & Usage

### Minimum Requirements

To run the SDK you need PHP 8.3 or higher.


### Installation
Install the SDK via Composer:
```command
composer require amzn-spapi/sdk
```
### Manual Installation
By using the download files, composer dependencies are already installed. You only need to include `autoload.php`:

```php
<?php
require_once('/path/to/OpenAPIClient-php/vendor/autoload.php');
```

### Use the SDK

In order to call one of the APIs included in the Selling Partner API, you need to:
* Configure credentials and marketplace ids. We provided a .env file to test the SDK in php/sdk/.env
* Create an instance for a specific API (e.g. Orders API)
* Call an operation

```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

use SpApi\AuthAndAuth\LWAAuthorizationCredentials;
use SpApi\Configuration;
use SpApi\Api\orders\v0\OrdersV0Api;


// Set up LWA credentials
$lwaAuthorizationCredentials = new LWAAuthorizationCredentials([
"clientId" => "amzn1.application-**************",
"clientSecret" => "***********",
"refreshToken" => "***********",
"endpoint" => "https://api.amazon.com/auth/o2/token"
]);

//Initialize config
$config = new Configuration([], $lwaAuthorizationCredentials);

// Setting SP-API endpoint region
$config->setHost('https://sellingpartnerapi-na.amazon.com');

// Create a new HTTP client
$client = new GuzzleHttp\Client();

// Create an instance of the Orders Api
$api = new OrdersV0Api($config, $client);

try {
    // Call getOrders
    $result = $api->getOrders(
        $marketplace_ids = ['ATVPDKIKX0DER'],
        $created_after = '2025-01-01'
    );
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling OrderApi->getOrders: ', $e->getMessage(), PHP_EOL;
}
```

### Restricted Data Token (RDT) Support

The SDK provides built-in support for working with Restricted Data Tokens (RDTs), which are required to access personally identifiable information (PII) in [certain API operations](https://developer-docs.amazon.com/sp-api/docs/tokens-api-use-case-guide#restricted-operations).

To use Restricted Data Token with the SDK:

1. **Request an RDT token** using the Tokens API.

```php
// Create a restricted resource
$resource = new RestrictedResource();
$resource->setMethod('GET');
$resource->setPath('/orders/v0/orders');
$resource->setDataElements([
    'buyerInfo',
    'shippingAddress'
]);

// Get a Restricted Data Token
$tokensApi = new TokensApi($config);
$request = new CreateRestrictedDataTokenRequest();
$request->setRestrictedResources([$resource]);
$response = $tokensApi->createRestrictedDataToken($request);
$rdtToken = $response->getRestrictedDataToken();
```
2. Use the token when calling restricted operations:

```php
// Pass the RDT token to the API call
$response = $ordersApi->getOrders(
    ['ATVPDKIKX0DER'],  // marketplace_ids
    '2023-01-01T00:00:00Z',  // createdAfter
    null,  // createdBefore
    null,  // lastUpdatedAfter
    null,  // lastUpdatedBefore
    ['Shipped'],  // orderStatuses
    restrictedDataToken: $rdtToken  // Pass RDT token
);
```
Check the full implementation [example](https://github.com/amzn/selling-partner-api-sdk/tree/main/php/examples/getOrdersWithRestrictedDataToken.php). If you pass the Restricted Data Token to operations which does not require it, the SDK will return an exception error. `Operation does not require a Restricted Data Token (RDT). Remove the RDT parameter for non-restricted operations.`

### Rate Limit Protection

The SDK includes built-in rate limit protection that automatically handles HTTP 429 (Too Many Requests) responses from the Selling Partner API. This feature is enabled by default and requires no additional configuration.

#### How it works

When rate limit protection is enabled, the SDK applies three complementary mechanisms:

1. **Exponential backoff retry** — When a 429 response is received, the SDK automatically retries the request with exponentially increasing delays (1s, 2s, 4s) plus random jitter (0-25%). Up to 3 retries are attempted before propagating the error.

2. **Dynamic rate tracking** — On every successful response, the SDK reads the `x-amzn-RateLimit-Limit` header and enforces minimum spacing between consecutive requests to the same operation (1/rate seconds apart).

3. **Per-operation circuit breaker** — If retries are exhausted for an operation, the circuit breaker opens and immediately rejects subsequent requests to that operation for a cooldown period (starting at 4s, doubling up to 120s). After cooldown, one probe request is allowed through. If it succeeds, the circuit closes and normal traffic resumes.

#### Disabling rate limit protection

Rate limit protection is enabled by default. To disable it, pass `rate_limit_enabled` as `false` in the configuration array:

```php
$config = new Configuration([
    'clientId' => 'amzn1.application-***',
    'clientSecret' => '***',
    'refreshToken' => '***',
    'endpoint' => 'https://api.amazon.com/auth/o2/token',
    'rate_limit_enabled' => false,  // Disable rate limit protection
]);
```

#### Configuration

The rate limiter uses fixed parameters that are consistent across all SP-API SDK languages:

| Parameter | Value | Description |
|-----------|-------|-------------|
| Max retries | 3 | Maximum retry attempts on 429 |
| Base delay | 1 second | Initial backoff delay |
| Backoff multiplier | 2x | Delay doubles each retry |
| Jitter | 0-25% | Random jitter added to delay |
| Max cooldown | 120 seconds | Maximum circuit breaker cooldown |

These parameters are not user-configurable. The only toggle available is enabling or disabling the feature entirely via `rate_limit_enabled`.

### Giving Feedback

### Feedback and Contributions

Your feedback is invaluable in improving this SDK! You can contribute by:

- Reporting issues: [Submit an issue](https://github.com/amzn/selling-partner-api-sdk/issues/new/choose)


## Disclaimer

- [FBA Inbound V0 API](https://developer-docs.amazon.com/sp-api/docs/fulfillment-inbound-api-v0-reference) is named as FBAInboundApi.php
- [FBA Inbound v2024-03-20 API](https://developer-docs.amazon.com/sp-api/docs/fulfillment-inbound-api-v2024-03-20-reference) is named as FulfillmentInboundApi.php
- [FBA Eligibility API](https://developer-docs.amazon.com/sp-api/docs/fbainboundeligibility-api-v1-model) and [PricingV0 API](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v0-reference) operations are still not supported.
- [Finances API](https://developer-docs.amazon.com/sp-api/docs/finances-api-v2024-06-19-reference) is named as DefaultApi.php.