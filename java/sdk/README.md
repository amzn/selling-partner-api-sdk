## Java SDK for Selling Partner API

The Selling Partner API SDK for Java enables you to easily connect your Java application to Amazon's REST-based SP-API.

* [Learn more about SP-API](https://developer.amazonservices.com/)
* [API Documentation](https://developer-docs.amazon.com/sp-api/)

### Getting started

#### Credentials

Before you can use the SDK, you need to be registered as a Selling Partner API developer. If you haven't done that yet, please follow the instructions in the [documentation](https://developer-docs.amazon.com/sp-api/docs/sp-api-registration-overview).
You also need to register your application to get valid credentials to call SP-API. If you haven't done that yet, please follow the instructions in the [documentation](https://developer-docs.amazon.com/sp-api/docs/registering-your-application).
If you are already registered successfully, you can find instructions on how to view your credentials in the [documentation](https://developer-docs.amazon.com/sp-api/docs/viewing-your-application-information-and-credentials).

#### Minimum requirements

To run the SDK you need Java 11 or higher.

#### Integrate the SDK

Download the latest version [here](https://github.com/amzn/selling-partner-api-sdk/releases).

##### Gradle

Add the following line to the dependencies in your `build.gradle` file:

```
implementation files('path/to/selling-partner-api-java-sdk-0.1.0.jar')
```

##### Maven

Run the following command to install the `JAR` file in your local Maven repository (Note: Make sure to use the correct path to the downloaded `JAR` file):

```sh
mvn install:install-file -Dfile=[Replace with path to downloaded JAR file] -DgroupId=com.amazon.sellingpartnerapi -DartifactId=java-sdk -Dversion=0.1.0 -Dpackaging=jar
```

Add the following lines to the dependencies in your `maven.pom` file:

```xml
<dependencies>
    ...
    <dependency>
        <groupId>com.amazon.sellingpartnerapi</groupId>
        <artifactId>java-sdk</artifactId>
        <version>0.1.0</version>
    </dependency>
    ...
</dependencies>
```

### Use the SDK

In order to call one of the APIs included in the Selling Partner API, you need to:
* Configure credentials (Note: Use your individual credentials for `clientId`, `clientSecret` and `refreshToken`)
* Create an instance for a specific API (e.g. Sellers API)
* Call an operation

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

### Giving Feedback

We need your help in making this SDK great. Please participate in the community and contribute to this effort by submitting issues, participating in discussion forums and submitting pull requests through the following channels:

Submit [issues][sdk-issues] - this is the preferred channel to interact with our team
Articulate your feature request or upvote existing ones on our [Issues][sdk-issues] page

[sdk-issues]: https://github.com/amzn/selling-partner-api-sdk/issues






