from spapi import SellersApi, SPAPIConfig, SPAPIClient, ApiException
from spapi.models.sellers_v1 import GetMarketplaceParticipationsResponse

if __name__ == "__main__":
    print("Starting the Script...")

    # User inputs their credentials in the config
    config = SPAPIConfig(
        client_id="",
        client_secret="",
        refresh_token="",
        region="NA",
        scope = None
    )


    # Create the API Client
    spapi_client = SPAPIClient(config)

    sellers_api = SellersApi(spapi_client.api_client)

    response = None
    try:
        response = sellers_api.get_marketplace_participations()
    except ApiException as e:
        print(f"API Exception occurred: {str(e)}")
        print(f"Error status code: {e.status}")
        print(f"Error reason: {e.reason}")
        print(f"Error body: {e.body}")



    print("Sellers API Response:")
    if response is not None:
        for marketplaceParticipation in GetMarketplaceParticipationsResponse(response).payload.payload:
            print(marketplaceParticipation.marketplace.id)

