import logging

from spapi import Configuration
from spapi import ApiClient

from spapi.auth.lwa_request import AccessTokenCache

logging.basicConfig(level=logging.INFO)

class SPAPIClient:
    region_to_endpoint = {
        "NA": "https://sellingpartnerapi-na.amazon.com",
        "EU": "https://sellingpartnerapi-eu.amazon.com",
        "FE": "https://sellingpartnerapi-fe.amazon.com",
        "SANDBOX": "https://sandbox.sellingpartnerapi-na.amazon.com"
    }

    oauth_endpoint = "https://api.amazon.com/auth/o2/token"

    def __init__(self, config, oauth_endpoint=None, endpoint=None):
        self.config = config
        if oauth_endpoint is not None: self.oauth_endpoint=oauth_endpoint
        if endpoint is not None:
            self.api_base_url = endpoint
        else:
            self.api_base_url = self.region_to_endpoint.get(config.region)
        self.access_token_cache = AccessTokenCache(
            client_id=self.config.client_id,
            client_secret=self.config.client_secret,
            refresh_token=self.config.refresh_token,
            oauth_endpoint=self.oauth_endpoint
        )
        self.api_client = None
        self._initialize_client()

    def _initialize_client(self):
        logging.debug("Initializing API Client...")

        configuration = Configuration()
        configuration.host = self.api_base_url
        configuration.access_token_cache = self.access_token_cache

        self.api_client = ApiClient(configuration=configuration)