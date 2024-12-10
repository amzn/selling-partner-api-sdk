## PHP SDK for Selling Partner API

The Selling Partner API SDK for PHP enables you to easily connect your PHP application to Amazon's REST-based SP-API.

* [Learn more about SP-API](https://developer.amazonservices.com/)
* [API Documentation](https://developer-docs.amazon.com/sp-api/)

### Getting started

#### Credentials

Before you can use the SDK, you need to be registered as a Selling Partner API developer. If you haven't done that yet, please follow the instructions in the [documentation](https://developer-docs.amazon.com/sp-api/docs/sp-api-registration-overview).
You also need to register your application to get valid credentials to call SP-API. If you haven't done that yet, please follow the instructions in the [documentation](https://developer-docs.amazon.com/sp-api/docs/registering-your-application).
If you are already registered successfully, you can find instructions on how to view your credentials in the [documentation](https://developer-docs.amazon.com/sp-api/docs/viewing-your-application-information-and-credentials).

#### Minimum requirements

To run the SDK you need PHP XX or higher.

#### Integrate the SDK

Download the latest version [here](https://github.com/amzn/selling-partner-api-sdk/releases).


##### Composer

Run the following command to install the dependencies in your php root directory:

```sh
composer install
```
A vendor folder will be created, adding all the dependencies to use the code.

### Use the SDK

In order to call one of the APIs included in the Selling Partner API, you need to:
* Configure credentials (Note: Use your individual credentials for `clientId`, `clientSecret` and `refreshToken`)
* Create an instance for a specific API (e.g. Sellers API)
* Call an operation

TODO

### Giving Feedback

We need your help in making this SDK great. Please participate in the community and contribute to this effort by submitting issues, participating in discussion forums and submitting pull requests through the following channels:

Submit [issues][sdk-issues] - this is the preferred channel to interact with our team
Articulate your feature request or upvote existing ones on our [Issues][sdk-issues] page

[sdk-issues]: https://github.com/amzn/selling-partner-api-sdk/issues






