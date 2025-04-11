## JavaScript SDK for Selling Partner API
[![npm version](https://badge.fury.io/js/@amazon-sp-api-release%2Famazon-sp-api-sdk-js.svg)](https://www.npmjs.com/package/@amazon-sp-api-release/amazon-sp-api-sdk-js)

<!-- youtube video is under creating -->
<!-- [![Video Thumbnail](docs/video-thumbnail.png)](https://www.youtube.com/watch?v=OmYTAA80V_4)

*Click on the image to watch the video.* -->

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
2. Retrieve `accessToken` using our `LwaAuthClient` helper (Be aware for some APIs, you will need extra step to get `RDT Token`)
2. Create an instance for a specific API and API client, then apply `accessToken` to it.
3. Call an operation

For an example, refer to the following sample code for connecting to Sellers API:

```javascript
import { LwaAuthClient } from '@amazon-sp-api-release/amazon-sp-api-sdk-js';

import {
  SellersSpApi
} from '@amazon-sp-api-release/amazon-sp-api-sdk-js';

(async () => {
  const lwaClient = new LwaAuthClient(
    '<YOUR_CLIENT_ID>',
    '<YOUR_CLIENT_SECRET>',
    '<YOUR_REFRESH_TOKEN>'
  );
  const sellerApiClient = new SellersSpApi.ApiClient(
    'https://sellingpartnerapi-na.amazon.com'
  );

  const sellerApi = new SellersSpApi.SellersApi(sellerApiClient);
  sellerApiClient.applyXAmzAccessTokenToRequest(
    await lwaClient.getAccessToken()
  );
  const participations = await sellerApi.getMarketplaceParticipations();
  console.log(
    JSON.stringify(participations, null, '  ') +
      '\n**********************************'
  );
})();
```

Alternatively, you can go to `@amazon-sp-api-release/amazon-sp-api-sdk-js/sample-node-app` and copy over and modify `index.js` and `app.config.mjs` files and give them a try.

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


