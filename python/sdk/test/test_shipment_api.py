# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.orders_v0.shipment_api import ShipmentApi

import spapi.models.orders_v0 as models

class TestShipmentApi(unittest.TestCase):
    """ShipmentApi unit test stubs"""

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
        self.api = ShipmentApi(client.api_client)

    def tearDown(self):
        pass

    def test_update_shipment_status(self):
        order_id = self._get_random_value("str", None)
        payload = self._get_random_value("UpdateShipmentStatusRequest", None)
        
        self.instruct_backend_mock("shipment".casefold().replace(' ', ''), self.to_camel_case("update_shipment_status"), "204")
        response = self.api.update_shipment_status_with_http_info(order_id, payload, )
        pass


    def instruct_backend_mock(self, api: str, response: str, code: str) -> None:
        if api is "financesv0" or api is "financesv2024" or api is "transfers":
            api = "default"
        if api is "vendordforders":
            api = "vendororders"
        if api is "replenishment":
            if response is "get_selling_partner_metrics":
                api = "sellingpartners"
            else:
                api = "offers"
        if api is "productpricingv2022":
            api = "productpricing"
        if api is "vendordftransaction":
            api = "vendortransaction"
        if api is "vendorshipment":
            api = "vendorshipping"
        if api is "fbainboundv0" or api is "fbainboundeligibility":
            api = "fbainbound"
        if api is "listingsrestrictions":
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