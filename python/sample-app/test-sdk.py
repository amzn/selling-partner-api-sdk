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