# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.action_items_v2026_06_01.items_api import ItemsApi

import spapi.models.action_items_v2026_06_01 as models

class TestItemsApi(unittest.TestCase):
    """ItemsApi unit test stubs"""

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
        self.api = ItemsApi(client.api_client)

    def tearDown(self):
        pass

    def test_dismiss_action_item(self):
        action_item_id = self._get_random_value("str", None)
        body = self._get_random_value("DismissActionItemRequest", None)
        
        self.instruct_backend_mock("items".casefold().replace(' ', ''), self.to_camel_case("dismiss_action_item"), "200")
        response = self.api.dismiss_action_item_with_http_info(action_item_id, body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_action_item(self):
        action_item_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("items".casefold().replace(' ', ''), self.to_camel_case("get_action_item"), "200")
        response = self.api.get_action_item_with_http_info(action_item_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_action_items(self):
        
        self.instruct_backend_mock("items".casefold().replace(' ', ''), self.to_camel_case("list_action_items"), "200")
        response = self.api.list_action_items_with_http_info()
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass


    def instruct_backend_mock(self, api: str, response: str, code: str) -> None:
        if api == "financesv0" or api == "financesv2024" or api == "transfers":
            api = "default"
        if api == "vendordforders":
            api = "vendororders"
        if api == "replenishment":
            if response == "get_selling_partner_metrics":
                api = "sellingpartners"
            else:
                api = "offers"
        if api == "productpricingv2022":
            api = "productpricing"
        if api == "vendordftransaction":
            api = "vendortransaction"
        if api == "vendorshipment":
            api = "vendorshipping"
        if api == "fbainboundv0" or api == "fbainboundeligibility":
            api = "fbainbound"
        if api == "listingsrestrictions":
            api = "listings"
        url = f"{self.mock_server_endpoint}/response/{api}-{response}/code/{code}"
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