## Java SDK for Selling Partner API
[![Maven](https://img.shields.io/maven-central/v/software.amazon.spapi/spapi-sdk.svg?label=Maven)](https://central.sonatype.com/artifact/software.amazon.spapi/spapi-sdk)

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

### Additional documentation

You can find the JavaDoc for the latest SDK version [here](https://www.javadoc.io/doc/software.amazon.spapi/spapi-sdk/latest/index.html).

### Giving Feedback

We need your help in making this SDK great. Please participate in the community and contribute to this effort by submitting issues, participating in discussion forums and submitting pull requests through the following channels:

Submit [issues](https://github.com/amzn/selling-partner-api-sdk/issues/new/choose) - this is the preferred channel to interact with our team
Articulate your feature request or upvote existing ones on our [Issues][sdk-issues] page

[sdk-issues]: https://github.com/amzn/selling-partner-api-sdk/issues






