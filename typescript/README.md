## TypeScript SDK for Selling Partner API
[![npm version](https://badge.fury.io/js/@amazon-sp-api-release%2Famazon-sp-api-sdk-ts.svg)](https://www.npmjs.com/package/@amazon-sp-api-release/amazon-sp-api-sdk-ts)

The Selling Partner API SDK for TypeScript enables you to easily connect your TypeScript/Node.js application to Amazon's REST-based Selling Partner API.

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
2. Add the dependency to your project (see instructions for [npm](#using-npm), [yarn](#using-yarn) and [Add as a package dependency](#add-as-a-package-dependency) below).


##### Using npm:
```bash
npm install @amazon-sp-api-release/amazon-sp-api-sdk-ts
```

##### Using yarn:
```bash
yarn add @amazon-sp-api-release/amazon-sp-api-sdk-ts
```

##### Add as a package dependency
Add the following line to the `dependencies` in your `package.json` file:
```bash
"@amazon-sp-api-release/amazon-sp-api-sdk-ts": "^1.0.0"
```

### Use the SDK

The TypeScript SDK exposes one namespace per Selling Partner API (e.g. `SellersSpApi`, `OrdersSpApi`) plus the hand-written LWA helpers `LwaAuthClient` and `ScopeConstants`.

In order to call one of the APIs included in the Selling Partner API, you need to:
1. Configure credentials (Note: Use your individual credentials for `clientId`, `clientSecret` and `refreshToken`).
2. Retrieve an `accessToken` using the `LwaAuthClient` helper (Be aware for some APIs, you will need an extra step to get an `RDT Token`).
3. Create a configuration for a specific API, then apply the `accessToken` to your requests.
4. Call an API operation.

For an example, refer to the following sample code for connecting to the Sellers API:

```typescript
import { SellersSpApi, LwaAuthClient } from '@amazon-sp-api-release/amazon-sp-api-sdk-ts';

async function getMarketplaceParticipations() {
  try {
    // Retrieve an LWA access token
    const lwaAuthClient = new LwaAuthClient(
      '<YOUR_CLIENT_ID>',
      '<YOUR_CLIENT_SECRET>',
      '<YOUR_REFRESH_TOKEN>',
      null
    );
    const accessToken = await lwaAuthClient.getAccessToken();

    // Configure the Sellers API client
    const configuration = SellersSpApi.createConfiguration({
      authMethods: {
        // apply the x-amz-access-token header to every request
      },
    });

    const sellersApi = new SellersSpApi.SellersApi(configuration);

    // Call the getMarketplaceParticipations API
    const participations = await sellersApi.getMarketplaceParticipations({
      headers: { 'x-amz-access-token': accessToken },
    });
    console.log(JSON.stringify(participations, null, ' '));
  } catch (error) {
    console.error('Exception when calling getMarketplaceParticipations API', error);
  }
}

getMarketplaceParticipations();
```

Because the SDK ships with TypeScript type declarations, you get full editor autocompletion and compile-time type checking for every API request and response model.

### Rate Limit Protection

The SDK includes built-in rate limit protection that automatically handles HTTP 429 (Too Many Requests) responses from the Selling Partner API. This feature is enabled by default and requires no additional configuration.

#### How it works

When rate limit protection is enabled, the SDK applies three complementary mechanisms:

1. **Exponential backoff retry** — When a 429 response is received, the SDK automatically retries the request with exponentially increasing delays (1s, 2s, 4s) plus random jitter (0-25%). Up to 3 retries are attempted before propagating the error.

2. **Dynamic rate tracking** — On every successful response, the SDK reads the `x-amzn-RateLimit-Limit` header and enforces minimum spacing between consecutive requests to the same operation (1/rate seconds apart).

3. **Per-operation circuit breaker** — If retries are exhausted for an operation, the circuit breaker opens and immediately rejects subsequent requests to that operation for a cooldown period (starting at 4s, doubling up to 120s). After cooldown, one probe request is allowed through. If it succeeds, the circuit closes and normal traffic resumes.

#### Configuration

The rate limiter uses fixed parameters that are consistent across all SP-API SDK languages:

| Parameter | Value | Description |
|-----------|-------|-------------|
| Max retries | 3 | Maximum retry attempts on 429 |
| Base delay | 1 second | Initial backoff delay |
| Backoff multiplier | 2x | Delay doubles each retry |
| Jitter | 0-25% | Random jitter added to delay |
| Max cooldown | 120 seconds | Maximum circuit breaker cooldown |

These parameters are not user-configurable. The only toggle available is enabling or disabling the feature entirely via `rateLimitEnabled` when constructing a `RateLimiter`.

### Giving Feedback

We need your help in making this SDK great. Please participate in the community and contribute to this effort by submitting issues, participating in discussion forums and submitting pull requests through the following channels:

Submit [issues](https://github.com/amzn/selling-partner-api-sdk/issues/new/choose) - this is the preferred channel to interact with our team
Articulate your feature request or upvote existing ones on our [Issues][sdk-issues] page

[sdk-issues]: https://github.com/amzn/selling-partner-api-sdk/issues
