from spapi.auth.lwa_exception import LwaException
from spapi.auth.lwa_exception_error_code import LwaExceptionErrorCode


class SPAPIConfig:
    def __init__(self, client_id, client_secret, refresh_token=None, region="SANDBOX", access_token=None, scope=None, grant_type=None):
        if refresh_token and scope:
            raise LwaException(
                LwaExceptionErrorCode.INVALID_REQUEST.value,
                "refresh_token and scope are mutually exclusive; provide one or the other, not both. "
                "Scopes are only applicable when using the client_credentials grant type."
            )
        self.client_id = client_id
        self.client_secret = client_secret
        self.refresh_token = refresh_token
        self.region = region
        self.scope = scope
        self.grant_type = grant_type
        self.access_token = access_token  # Initially empty, filled by LWA request method
