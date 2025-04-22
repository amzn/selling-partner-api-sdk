from spapi.auth.credentials import SPAPIConfig
from spapi import SellersApi
from spapi.models.sellers_v1 import GetMarketplaceParticipationsResponse

if __name__ == "__main__":
    print("Starting the Script...")

    from spapi.auth.credentials import SPAPIConfig
    # User inputs their credentials in the config
    config = SPAPIConfig(
        client_id="",
        client_secret="",
        refresh_token="",
        region="NA",
        scope = None
    )

    from spapi.client import SPAPIClient

    # Create the API Client
    print("Config and client initialized...")
    spapi_client = SPAPIClient(config)

    marketplace_ids = ["ATVPDKIKX0DER"]

    sellers_api = SellersApi(spapi_client.api_client)
    response = sellers_api.get_marketplace_participations()


    print("Sellers API Response:")
    for marketplaceParticipation in GetMarketplaceParticipationsResponse(response).payload.payload:
        print(marketplaceParticipation.marketplace.id)

