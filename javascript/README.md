## JavaScript SDK for Selling Partner API
[![npm version](https://badge.fury.io/js/@amazon-sp-api-release%2Famazon-sp-api-sdk-js.svg)](https://www.npmjs.com/package/@amazon-sp-api-release/amazon-sp-api-sdk-js)

[![Video Thumbnail](https://github.com/amzn/selling-partner-api-sdk/blob/main/javascript/docs/video-thumbnail.png?raw=true)](https://www.youtube.com/watch?v=5pRZXYhjNIQ)

*Click on the image to watch the video.*

The Selling Partner API SDK for JavaScript enables you to easily connect your JavaScript/Node.js application to Amazon's REST-based Selling Partner API.

* [Learn more about Selling Partner API](https://developer.amazonservices.com/)
* [Selling Partner API Documentation](https://developer-docs.amazon.com/sp-api/)

### Getting started

#### Credentials

Before you can use the SDK, you need to be registered as a Selling Partner API developer. If you haven't done that yet, please follow the instructions in the [SP-API Registration Overview](https://developer-docs.amazon.com/sp-api/docs/sp-api-registration-overview).
You also need to register your application to get valid credentials to call SP-API. If you haven't done that yet, please follow the instructions in [Registering your Application](https://developer-docs.amazon.com/sp-api/docs/registering-your-application).
If you are already registered successfully, you can find instructions on how to view your credentials in [Viewing your Application Information and Credentials](https://developer-docs.amazon.com/sp-api/docs/viewing-your-application-information-and-credentials).

#### Minimum requirements

To run the SDK you need Node version 14 or higher.

#### Install the SDK

1. Find the latest version number [here](https://github.com/amzn/selling-partner-api-sdk/releases).
2. Add the dependency to your project (see instructions for [npm](#using-npm), [yarn](#using-yarn) and [Add as an package dependency](#add-as-an-package-dependency) below).


##### Using npm:
```bash
npm install @amazon-sp-api-release/amazon-sp-api-sdk-js
```

##### Using yarn:
```bash
yarn add @amazon-sp-api-release/amazon-sp-api-sdk-js
```

##### Add as a package dependency
Add the following line to the `dependencies` in your `package.json` file:
```bash
"@amazon-sp-api-release/amazon-sp-api-sdk-js": "^1.0.0"
```

### Use the SDK

In order to call one of the APIs included in the Selling Partner API, you need to:
1. Configure credentials (Note: Use your individual credentials for `clientId`, `clientSecret` and `refreshToken`)
2. Enable auto `accessToken` retrievel using our built in ApiClient function OR retrieve `accessToken` using our `LwaAuthClient` helper (Be aware for some APIs, you will need extra step to get `RDT Token`)
2. Create an instance for a specific API and API client, then apply `accessToken` to it.
3. Call an API operation

For an example, refer to the following sample code for connecting to Sellers API:

```javascript
import {
  SellersSpApi
} from '@amazon-sp-api-release/amazon-sp-api-sdk-js';

async function getMarketplaceParticipations() {
  try {
      //Configure Sellers ApiClient
      const sellersApiClient = new SellersSpApi.ApiClient(AppConfig.spApiNAEndpoint);
      sellersApiClient.enableAutoRetrievalAccessToken('<YOUR_CLIENT_ID>','<YOUR_CLIENT_SECRET>', '<YOUR_REFRESH_TOKEN>', null);
      const sellersApi = new SellersSpApi.SellersApi(sellersApiClient);
      
      //Call GetMarkerplaceParticipations API
      const participations = await sellersApi.getMarketplaceParticipations();
      console.log(
        JSON.stringify(participations, null, ' ') + 
          '\n**********************************'
      )
  } catch (error) {
      console.error('Exception when calling getMarketplaceParticipations API', error.message);
  }
}

getMarketplaceParticipations();
```

Alternatively, you can go to `@amazon-sp-api-release/amazon-sp-api-sdk-js/sample-node-app` and copy over and modify `index.js` and `app.config.mjs` files and give them a try. You can see multiple API operation call samples with various way of retrieving token, as well how to set up rate limiter and retry logic when making API calls. Note that the rate limiter is turned on by default to protect your API calls from 429 errors.

##### Additional Note: 
This Amazon Selling Partner API JavaScript SDK is fully compatible with ECMAScript modules (ESM). You can use modern ES6+ import/export syntax as demonstrated in the example code:

```javascript
import {
  SellersSpApi,
} from '@amazon-sp-api-release/amazon-sp-api-sdk-js';
```

### Giving Feedback

We need your help in making this SDK great. Please participate in the community and contribute to this effort by submitting issues, participating in discussion forums and submitting pull requests through the following channels:

Submit [issues](https://github.com/amzn/selling-partner-api-sdk/issues/new/choose) - this is the preferred channel to interact with our team
Articulate your feature request or upvote existing ones on our [Issues][sdk-issues] page

[sdk-issues]: https://github.com/amzn/selling-partner-api-sdk/issues


