# coding: utf-8

from __future__ import absolute_import

import unittest
import requests

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.sellers_v1.sellers_api import SellersApi

import spapi.models.sellers_v1 as models

class TestSellersApi(unittest.TestCase):
    """SellersApi unit test stubs"""

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
        self.api = SellersApi(client.api_client)

    def tearDown(self):
        pass

    def test_get_account(self):
        self.instruct_backend_mock("get_account", "200")
        response = self.api.get_account_with_http_info()
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass
    def test_get_marketplace_participations(self):
        self.instruct_backend_mock("get_marketplace_participations", "200")
        response = self.api.get_marketplace_participations_with_http_info()
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def instruct_backend_mock(self, response: str, code: str) -> None:
        url = f"{self.mock_server_endpoint}/response/{response}/code/{code}"
        requests.post(url)

    def assert_valid_response_payload(self, status_code: int, body: any) -> None:
        if status_code != 204:
            self.assertIsNotNone(body)

if __name__ == '__main__':
    unittest.main()