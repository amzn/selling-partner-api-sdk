## Python SDK for Selling Partner API
[![PyPI version](https://img.shields.io/pypi/v/amzn-sp-api?label=PyPI)](https://pypi.org/project/amzn-sp-api/)

[![Video Thumbnail](https://github.com/amzn/selling-partner-api-sdk/blob/main/python/docs/video-thumbnail.png?raw=true)](https://www.youtube.com/watch?v=IEWTnO2L620&pp=0gcJCbEJAYcqIYzv)

*Click on the image to watch the video.*

The Selling Partner API SDK for Python enables you to easily connect your Python application to Amazon's REST-based Selling Partner API.

* [Learn more about Selling Partner API](https://developer.amazonservices.com/)
* [Selling Partner API Documentation](https://developer-docs.amazon.com/sp-api/)

### Getting started

#### Credentials

Before you can use the SDK, you need to be registered as a Selling Partner API developer. If you haven't done that yet, please follow the instructions in the [SP-API Registration Overview](https://developer-docs.amazon.com/sp-api/docs/sp-api-registration-overview).
You also need to register your application to get valid credentials to call SP-API. If you haven't done that yet, please follow the instructions in [Registering your Application](https://developer-docs.amazon.com/sp-api/docs/registering-your-application).
If you are already registered successfully, you can find instructions on how to view your credentials in [Viewing your Application Information and Credentials](https://developer-docs.amazon.com/sp-api/docs/viewing-your-application-information-and-credentials).

#### Minimum requirements

To run the SDK you need Python version 3.9 or higher.

#### Install the SDK

1. Find the latest version number [here](https://github.com/amzn/selling-partner-api-sdk/releases).
2. Add the dependency to your project


##### Using pip:
```bash
pip install amzn-sp-api
```

##### Add to your project requirements.txt
Add the following line to the `requirements.txt` file if needed:
```
amzn-sp-api >= "1.0.0"
```

### Use the SDK

In order to call one of the APIs included in the Selling Partner API, you need to:
1. Configure credentials (Note: Use your individual credentials for `clientId`, `clientSecret` and `refreshToken`). 
   You can also configure the region and the authorization scope at this level.
2. Initialize the SPAPI Client using the configuration created in the previous step 
3. Create an instance for a specific API using the API client created
4. Call an API operation

For example, refer to the following sample code for connecting to Sellers API.

```python
from spapi import SellersApi, SPAPIConfig, SPAPIClient, ApiException
from spapi.models.sellers_v1 import GetMarketplaceParticipationsResponse

if __name__ == "__main__":

    # Credentials configuration
    config = SPAPIConfig(
        client_id="",
        client_secret="",
        refresh_token="",
        region="NA",
        scope = None
    )

    # Create the API Client with configuration
    client = SPAPIClient(config)
    sellers_api = SellersApi(client.api_client)

    response = None
    try:
        response = sellers_api.get_marketplace_participations()
    except ApiException as e:
        print(f"API Exception occurred: {str(e)}")

    if response is not None:
        print("Sellers API Response:")
        get_marketplace_participations_response = GetMarketplaceParticipationsResponse(response.payload)
        for marketplaceParticipation in get_marketplace_participations_response.payload:
            print(marketplaceParticipation.marketplace.id)
```

Note: Code can be found under python/sample-app folder

### Rate Limit Protection

The SDK includes built-in rate limit protection that automatically handles HTTP 429 (Too Many Requests) responses from the Selling Partner API. This feature is enabled by default and requires no additional configuration.

#### How it works

When rate limit protection is enabled, the SDK applies three complementary mechanisms:

1. **Exponential backoff retry** — When a 429 response is received, the SDK automatically retries the request with exponentially increasing delays (1s, 2s, 4s) plus random jitter (0-25%). Up to 3 retries are attempted before propagating the error.

2. **Dynamic rate tracking** — On every successful response, the SDK reads the `x-amzn-RateLimit-Limit` header and enforces minimum spacing between consecutive requests to the same operation (1/rate seconds apart).

3. **Per-operation circuit breaker** — If retries are exhausted for an operation, the circuit breaker opens and immediately rejects subsequent requests to that operation for a cooldown period (starting at 4s, doubling up to 120s). After cooldown, one probe request is allowed through. If it succeeds, the circuit closes and normal traffic resumes.

#### Disabling rate limit protection

Rate limit protection is enabled by default. To disable it, set `rate_limit_enabled` to `False` in the configuration:

```python
from spapi import SPAPIConfig, SPAPIClient

config = SPAPIConfig(
    client_id="amzn1.application-***",
    client_secret="***",
    refresh_token="Atzr|***",
    region="NA",
    rate_limit_enabled=False  # Disable rate limit protection
)

client = SPAPIClient(config)
```

Or set it directly on the Configuration object:

```python
from spapi.configuration import Configuration

configuration = Configuration()
configuration.rate_limit_enabled = False
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

We need your help in making this SDK great. Please participate in the community and contribute to this effort by submitting issues, participating in discussion forums and submitting pull requests through the following channels:

Submit [issues](https://github.com/amzn/selling-partner-api-sdk/issues/new/choose) - this is the preferred channel to interact with our team
Articulate your feature request or upvote existing ones on our [Issues][sdk-issues] page

[sdk-issues]: https://github.com/amzn/selling-partner-api-sdk/issues

