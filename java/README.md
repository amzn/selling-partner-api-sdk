## Java SDK for Selling Partner API
[![Maven](https://img.shields.io/maven-central/v/software.amazon.spapi/spapi-sdk.svg?label=Maven)](https://central.sonatype.com/artifact/software.amazon.spapi/spapi-sdk)

[![Video Thumbnail](https://github.com/amzn/selling-partner-api-sdk/blob/main/java/docs/video-thumbnail.png?raw=true)](https://www.youtube.com/watch?v=OmYTAA80V_4)

*Click on the image to watch the video.*

The Selling Partner API SDK for Java enables you to easily connect your Java application to Amazon's REST-based Selling Partner API.

* [Learn more about Selling Partner API](https://developer.amazonservices.com/)
* [Selling Partner API Documentation](https://developer-docs.amazon.com/sp-api/)
* [JavaDoc](https://www.javadoc.io/doc/software.amazon.spapi/spapi-sdk/latest/index.html)

### Getting started

#### Credentials

Before you can use the SDK, you need to be registered as a Selling Partner API developer. If you haven't done that yet, please follow the instructions in the [SP-API Registration Overview](https://developer-docs.amazon.com/sp-api/docs/sp-api-registration-overview).
You also need to register your application to get valid credentials to call SP-API. If you haven't done that yet, please follow the instructions in [Registering your Application](https://developer-docs.amazon.com/sp-api/docs/registering-your-application).
If you are already registered successfully, you can find instructions on how to view your credentials in [Viewing your Application Information and Credentials](https://developer-docs.amazon.com/sp-api/docs/viewing-your-application-information-and-credentials).

#### Minimum requirements

To run the SDK you need Java 11 or higher.

#### Integrate the SDK

1. Find the latest version number [here](https://github.com/amzn/selling-partner-api-sdk/releases).
2. Add the dependency to your project (see instructions for [Gradle](#gradle) and [Maven](#maven) below).

##### Gradle

Add the following line to the dependencies in your `build.gradle` file:

```
implementation 'software.amazon.spapi:spapi-sdk:0.1.0'
```

##### Maven

Add the following lines to the dependencies in your `maven.pom` file:

```xml
<dependencies>
    ...
    <dependency>
        <groupId>software.amazon.spapi</groupId>
        <artifactId>spapi-sdk</artifactId>
        <version>0.1.0</version>
    </dependency>
    ...
</dependencies>
```

### Use the SDK

In order to call one of the APIs included in the Selling Partner API, you need to:
1. Configure credentials (Note: Use your individual credentials for `clientId`, `clientSecret` and `refreshToken`)
2. Create an instance for a specific API
3. Call an operation

For an example, refer to the following sample code for connecting to Sellers API:
```java
// Configure your LWA credentials
LWAAuthorizationCredentials lwaAuthorizationCredentials = LWAAuthorizationCredentials.builder()
    .clientId("amzn1.application-*********************")
    .clientSecret("***********************************")
    .refreshToken("Atzr|******************************")
    .endpoint("https://api.amazon.com/auth/o2/token")
    .build();

// Create an instance of the Sellers API
SellersApi sellersApi = new SellersApi.Builder()
    .lwaAuthorizationCredentials(lwaAuthorizationCredentials)
    .endpoint("https://sellingpartnerapi-na.amazon.com") // use Sandbox URL here if you would like to test your applications without affecting production data.
    .build();

// Call operation
GetMarketplaceParticipationsResponse result = sellersApi.getMarketplaceParticipations();
```

### Restricted Data Token (RDT) Support

The SDK provides built-in support for working with Restricted Data Tokens (RDTs), which are required to access personally identifiable information (PII) in [certain API operations](https://developer-docs.amazon.com/sp-api/docs/tokens-api-use-case-guide#restricted-operations).

To use Restricted Data Token with the SDK:

1. **Request an RDT token** using the Tokens API.

```java
// Create a restricted resource specifying the API endpoint and required data elements
RestrictedResource resource = new RestrictedResource();
            resource.setMethod(RestrictedResource.MethodEnum.GET);
            resource.setPath("/orders/v0/orders");
            resource.setDataElements(Arrays.asList("buyerInfo", "shippingAddress"));

// Get a Restricted Data Token for accessing PII data
TokensApi tokensApi = new TokensApi.Builder()
        .lwaAuthorizationCredentials(lwaCredentials)
        .endpoint("https://sellingpartnerapi-na.amazon.com")
        .build();
```
2. Use the token when calling restricted operations:

```java
// Make the API call with RDT token
List<String> marketplaceIds = Arrays.asList("ATVPDKIKX0DER");
List<String> orderStatuses = Arrays.asList("Shipped");
String createdAfter = "2023-01-01T00:00:00Z";


GetOrdersResponse response = ordersApi.getOrders(
        marketplaceIds,     // marketplaceIds
        createdAfter,       // createdAfter
        null,               // createdBefore
        null,               // lastUpdatedAfter
        null,               // lastUpdatedBefore
        orderStatuses,      // orderStatuses
        null,               // fulfillmentChannels
        null,               // paymentMethods
        null,               // buyerEmail
        null,               // sellerOrderId
        100,                // maxResultsPerPage
        null,               // easyShipShipmentStatuses
        null,               // electronicInvoiceStatuses
        null,               // nextToken
        null,               // amazonOrderIds
        null,               // actualFulfillmentSupplySourceId
        null,               // isISPU
        null,               // storeChainStoreId
        null,               // earliestDeliveryDateBefore
        null,               // earliestDeliveryDateAfter
        null,               // latestDeliveryDateBefore
        null,               // latestDeliveryDateAfter
        rdtToken            // restrictedDataToken
);
```
Check the full implementation [example](https://github.com/amzn/selling-partner-api-sdk/tree/main/java/sdk/src/main/java/examples/getOrdersWithRestrictedDataToken.java). If you pass the Restricted Data Token to operations which does not require it, the SDK will return an exception error. `Operation does not require a Restricted Data Token (RDT). Remove the RDT parameter for non-restricted operations.`



### Additional documentation

You can find the JavaDoc for the latest SDK version [here](https://www.javadoc.io/doc/software.amazon.spapi/spapi-sdk/latest/index.html).

### Rate Limit Protection

The SDK includes built-in rate limit protection that automatically handles HTTP 429 (Too Many Requests) responses from the Selling Partner API. This feature is enabled by default and requires no additional configuration.

#### How it works

When rate limit protection is enabled, the SDK applies three complementary mechanisms:

1. **Exponential backoff retry** — When a 429 response is received, the SDK automatically retries the request with exponentially increasing delays (1s, 2s, 4s) plus random jitter (0-25%). Up to 3 retries are attempted before propagating the error.

2. **Dynamic rate tracking** — On every successful response, the SDK reads the `x-amzn-RateLimit-Limit` header and enforces minimum spacing between consecutive requests to the same operation (1/rate seconds apart).

3. **Per-operation circuit breaker** — If retries are exhausted for an operation, the circuit breaker opens and immediately rejects subsequent requests to that operation for a cooldown period (starting at 4s, doubling up to 120s). After cooldown, one probe request is allowed through. If it succeeds, the circuit closes and normal traffic resumes.

#### Disabling rate limit protection

Rate limit protection is enabled by default. To disable it, pass `false` when building the API client:

```java
SellersApi sellersApi = new SellersApi.Builder()
    .lwaAuthorizationCredentials(lwaAuthorizationCredentials)
    .endpoint("https://sellingpartnerapi-na.amazon.com")
    .rateLimitEnabled(false)
    .build();
```

Or when constructing the `ApiClient` directly:

```java
ApiClient apiClient = new ApiClient.Builder()
    .rateLimitEnabled(false)
    .build();
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

These parameters are not user-configurable. The only toggle available is enabling or disabling the feature entirely via `rateLimitEnabled`.

### Giving Feedback

We need your help in making this SDK great. Please participate in the community and contribute to this effort by submitting issues, participating in discussion forums and submitting pull requests through the following channels:

Submit [issues](https://github.com/amzn/selling-partner-api-sdk/issues/new/choose) - this is the preferred channel to interact with our team
Articulate your feature request or upvote existing ones on our [Issues][sdk-issues] page

[sdk-issues]: https://github.com/amzn/selling-partner-api-sdk/issues






