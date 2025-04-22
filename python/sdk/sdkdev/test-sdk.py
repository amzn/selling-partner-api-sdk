if __name__ == "__main__":
    print("Starting the Script...")

    from src.sp_api.auth.credentials import SPAPIConfig
    # User inputs their credentials in the config
    config = SPAPIConfig(
        client_id="",
        client_secret="",
        refresh_token="",
        region="NA",
        scope = None
    )

    from src.spapiclient import SPAPIClient

    # Create the API Client
    print("Config and client initialized...")
    spapi_client = SPAPIClient(config)

    marketplace_ids = ["ATVPDKIKX0DER"]

    from src import SellersApi

    sellers_api = SellersApi(spapi_client.api_client)
    response = sellers_api.get_marketplace_participations()


    print("Sellers API Response:")
    print(response)

