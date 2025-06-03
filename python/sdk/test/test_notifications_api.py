# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.notifications_v1.notifications_api import NotificationsApi

import spapi.models.notifications_v1 as models

class TestNotificationsApi(unittest.TestCase):
    """NotificationsApi unit test stubs"""

    def setUp(self):
        # Tests Mock Server
        self.mock_server_endpoint = "http://localhost:3000"
        self.mock_server_endpoint_oauth = "http://localhost:3000/auth/o2/token"
        config = SPAPIConfig(
            client_id="clientId",
            client_secret="clientSecret",
            refresh_token="refreshToken",
            region="NA",
            scope = None
        )
        client = SPAPIClient(config, self.mock_server_endpoint_oauth, self.mock_server_endpoint)
        self.api = NotificationsApi(client.api_client)

    def tearDown(self):
        pass

    def test_create_destination(self):
        body = self._get_random_value("CreateDestinationRequest", None)
        
        self.instruct_backend_mock("notifications".casefold(), self.to_camel_case("create_destination"), "200")
        response = self.api.create_destination_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_create_subscription(self):
        notification_type = self._get_random_value("str", None)
        body = self._get_random_value("CreateSubscriptionRequest", None)
        
        self.instruct_backend_mock("notifications".casefold(), self.to_camel_case("create_subscription"), "200")
        response = self.api.create_subscription_with_http_info(notification_type, body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_delete_destination(self):
        destination_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("notifications".casefold(), self.to_camel_case("delete_destination"), "200")
        response = self.api.delete_destination_with_http_info(destination_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_delete_subscription_by_id(self):
        subscription_id = self._get_random_value("str", None)
        notification_type = self._get_random_value("str", None)
        
        self.instruct_backend_mock("notifications".casefold(), self.to_camel_case("delete_subscription_by_id"), "200")
        response = self.api.delete_subscription_by_id_with_http_info(subscription_id, notification_type, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_destination(self):
        destination_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("notifications".casefold(), self.to_camel_case("get_destination"), "200")
        response = self.api.get_destination_with_http_info(destination_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_destinations(self):
        
        self.instruct_backend_mock("notifications".casefold(), self.to_camel_case("get_destinations"), "200")
        response = self.api.get_destinations_with_http_info()
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_subscription(self):
        notification_type = self._get_random_value("str", None)
        
        self.instruct_backend_mock("notifications".casefold(), self.to_camel_case("get_subscription"), "200")
        response = self.api.get_subscription_with_http_info(notification_type, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_subscription_by_id(self):
        subscription_id = self._get_random_value("str", None)
        notification_type = self._get_random_value("str", None)
        
        self.instruct_backend_mock("notifications".casefold(), self.to_camel_case("get_subscription_by_id"), "200")
        response = self.api.get_subscription_by_id_with_http_info(subscription_id, notification_type, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass


    def instruct_backend_mock(self, api: str, response: str, code: str) -> None:
        url = f"{self.mock_server_endpoint}/response/{api}-{response}/code/{code}"
        ## handle same api operation name exceptions
        if "vendor" in "api.notifications_v1" and response == "getOrder":
            url += f"?qualifier=Vendor"
        if "fulfillment_inbound" in "api.notifications_v1" and response == "getShipment":
            url += f"?qualifier=FbaInbound"
        if "seller_wallet" in "api.notifications_v1" and response == "getAccount":
            url += f"?qualifier=SellerWallet"
        if "seller_wallet" in "api.notifications_v1" and response == "getTransaction":
            url += f"?qualifier=SellerWallet"
        requests.post(url)

    def _get_random_value(self, data_type, pattern=None):
        if pattern:
            return rstr.xeger(pattern)

        basic_types = {
            'str': "test_string",
            'string': "test_string",
            'int': 123,
            'integer': 123,
            'float': 123.45,
            'bool': True,
            'boolean': True
        }

        return basic_types.get(data_type.lower(), {})

    def assert_valid_response_payload(self, status_code: int, body: any) -> None:
        if status_code != 204:
            self.assertIsNotNone(body)

    def to_camel_case(self, snake_str):
        components = snake_str.split('_')
        return components[0] + ''.join(x.title() for x in components[1:])

if __name__ == '__main__':
    unittest.main()