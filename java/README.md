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

### Built-in rate limiter

The SDK comes with a built-in rate limiter. In case you hit a certain rate limit, calling an operation will throw `ApiException.RateLimitExceeded`. Catch this exception and handle it appropriately.
By default, a standard rate limit configuration is applied. You can find the current rate limit configuration for each API on a dedicated page in the documention (e.g. for [Listings Items API](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-rate-limits)).

It is possible to disable the built-in rate limiter by calling `disableRateLimiting` when building a API instance:
```java
SellersApi sellersApi = new SellersApi.Builder()
    .disableRateLimiting()
    .build();
```

It is also possible to override the default rate limit configuration. This has to be done after the API instance has been created and for each operation separately:
```java
BucketConfiguration newConfiguration = BucketConfiguration.builder()
        // Capacity: Overall number of tokens, refill: Number of tokens refilled per second
        .addLimit(limit -> limit.capacity(10).refillGreedy(1, Duration.ofSeconds(1)))
        .build();

// Each API exposes a bucket for each operation
sellersApi.getMarketplaceParticipationsBucket.replaceConfiguration(newConfiguration, TokensInheritanceStrategy.RESET);
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

### Giving Feedback

We need your help in making this SDK great. Please participate in the community and contribute to this effort by submitting issues, participating in discussion forums and submitting pull requests through the following channels:

Submit [issues](https://github.com/amzn/selling-partner-api-sdk/issues/new/choose) - this is the preferred channel to interact with our team
Articulate your feature request or upvote existing ones on our [Issues][sdk-issues] page

[sdk-issues]: https://github.com/amzn/selling-partner-api-sdk/issues






