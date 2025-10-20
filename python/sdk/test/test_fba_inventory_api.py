# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.fba_inventory_v1.fba_inventory_api import FbaInventoryApi

import spapi.models.fba_inventory_v1 as models

class TestFbaInventoryApi(unittest.TestCase):
    """FbaInventoryApi unit test stubs"""

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
        self.api = FbaInventoryApi(client.api_client)

    def tearDown(self):
        pass

    def test_add_inventory(self):
        x_amzn_idempotency_token = self._get_random_value("str", None)
        add_inventory_request_body = self._get_random_value("AddInventoryRequest", None)
        
        self.instruct_backend_mock("fbaInventory".casefold().replace(' ', ''), self.to_camel_case("add_inventory"), "200")
        response = self.api.add_inventory_with_http_info(x_amzn_idempotency_token, add_inventory_request_body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_create_inventory_item(self):
        create_inventory_item_request_body = self._get_random_value("CreateInventoryItemRequest", None)
        
        self.instruct_backend_mock("fbaInventory".casefold().replace(' ', ''), self.to_camel_case("create_inventory_item"), "200")
        response = self.api.create_inventory_item_with_http_info(create_inventory_item_request_body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_delete_inventory_item(self):
        seller_sku = self._get_random_value("str", None)
        marketplace_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("fbaInventory".casefold().replace(' ', ''), self.to_camel_case("delete_inventory_item"), "200")
        response = self.api.delete_inventory_item_with_http_info(seller_sku, marketplace_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_inventory_summaries(self):
        granularity_type = self._get_random_value("str", None)
        granularity_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        
        self.instruct_backend_mock("fbaInventory".casefold().replace(' ', ''), self.to_camel_case("get_inventory_summaries"), "200")
        response = self.api.get_inventory_summaries_with_http_info(granularity_type, granularity_id, marketplace_ids, )
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