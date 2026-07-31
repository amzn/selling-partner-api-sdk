# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.fulfillment_outbound_v2026_07_04.fulfillment_outbound_api import FulfillmentOutboundApi

import spapi.models.fulfillment_outbound_v2026_07_04 as models

class TestFulfillmentOutboundApi(unittest.TestCase):
    """FulfillmentOutboundApi unit test stubs"""

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
        self.api = FulfillmentOutboundApi(client.api_client)

    def tearDown(self):
        pass

    def test_cancel_order(self):
        order_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("fulfillmentOutbound".casefold().replace(' ', ''), self.to_camel_case("cancel_order"), "202")
        response = self.api.cancel_order_with_http_info(order_id, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_create_order(self):
        body = self._get_random_value("CreateOrderRequest", None)
        
        self.instruct_backend_mock("fulfillmentOutbound".casefold().replace(' ', ''), self.to_camel_case("create_order"), "200")
        response = self.api.create_order_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_offers(self):
        body = self._get_random_value("GetOffersRequest", None)
        
        self.instruct_backend_mock("fulfillmentOutbound".casefold().replace(' ', ''), self.to_camel_case("get_offers"), "200")
        response = self.api.get_offers_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_order(self):
        order_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("fulfillmentOutbound".casefold().replace(' ', ''), self.to_camel_case("get_order"), "200")
        response = self.api.get_order_with_http_info(order_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_order_preview(self):
        body = self._get_random_value("GetOrderPreviewRequest", None)
        
        self.instruct_backend_mock("fulfillmentOutbound".casefold().replace(' ', ''), self.to_camel_case("get_order_preview"), "200")
        response = self.api.get_order_preview_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_orders(self):
        
        self.instruct_backend_mock("fulfillmentOutbound".casefold().replace(' ', ''), self.to_camel_case("list_orders"), "200")
        response = self.api.list_orders_with_http_info()
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_update_order(self):
        order_id = self._get_random_value("str", None)
        body = self._get_random_value("UpdateOrderRequest", None)
        
        self.instruct_backend_mock("fulfillmentOutbound".casefold().replace(' ', ''), self.to_camel_case("update_order"), "202")
        response = self.api.update_order_with_http_info(order_id, body, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_update_order_status(self):
        order_id = self._get_random_value("str", None)
        body = self._get_random_value("UpdateOrderStatusRequest", None)
        
        self.instruct_backend_mock("fulfillmentOutbound".casefold().replace(' ', ''), self.to_camel_case("update_order_status"), "204")
        response = self.api.update_order_status_with_http_info(order_id, body, )
        pass

    def test_update_package(self):
        order_id = self._get_random_value("str", None)
        package_id = self._get_random_value("str", None)
        body = self._get_random_value("UpdatePackageRequest", None)
        
        self.instruct_backend_mock("fulfillmentOutbound".casefold().replace(' ', ''), self.to_camel_case("update_package"), "204")
        response = self.api.update_package_with_http_info(order_id, package_id, body, )
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