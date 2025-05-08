## Python SDK for Selling Partner API
[![PyPI version](https://img.shields.io/pypi/v/amzn-sp-api)](https://pypi.org/project/amzn-sp-api/)

<!-- youtube video is under creating -->
<!-- [![Video Thumbnail](docs/video-thumbnail.png)]()

*Click on the image to watch the video.* -->

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

### Giving Feedback

We need your help in making this SDK great. Please participate in the community and contribute to this effort by submitting issues, participating in discussion forums and submitting pull requests through the following channels:

Submit [issues](https://github.com/amzn/selling-partner-api-sdk/issues/new/choose) - this is the preferred channel to interact with our team
Articulate your feature request or upvote existing ones on our [Issues][sdk-issues] page

[sdk-issues]: https://github.com/amzn/selling-partner-api-sdk/issues

