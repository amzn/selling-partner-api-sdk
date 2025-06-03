# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.orders_v0.orders_v0_api import OrdersV0Api

import spapi.models.orders_v0 as models

class TestOrdersV0Api(unittest.TestCase):
    """OrdersV0Api unit test stubs"""

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
        self.api = OrdersV0Api(client.api_client)

    def tearDown(self):
        pass

    def test_confirm_shipment(self):
        order_id = self._get_random_value("str", None)
        payload = self._get_random_value("ConfirmShipmentRequest", None)
        
        self.instruct_backend_mock("ordersV0".casefold(), self.to_camel_case("confirm_shipment"), "204")
        response = self.api.confirm_shipment_with_http_info(order_id, payload, )
        pass

    def test_get_order(self):
        order_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("ordersV0".casefold(), self.to_camel_case("get_order"), "200")
        response = self.api.get_order_with_http_info(order_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_order_address(self):
        order_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("ordersV0".casefold(), self.to_camel_case("get_order_address"), "200")
        response = self.api.get_order_address_with_http_info(order_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_order_buyer_info(self):
        order_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("ordersV0".casefold(), self.to_camel_case("get_order_buyer_info"), "200")
        response = self.api.get_order_buyer_info_with_http_info(order_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_order_items(self):
        order_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("ordersV0".casefold(), self.to_camel_case("get_order_items"), "200")
        response = self.api.get_order_items_with_http_info(order_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_order_items_buyer_info(self):
        order_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("ordersV0".casefold(), self.to_camel_case("get_order_items_buyer_info"), "200")
        response = self.api.get_order_items_buyer_info_with_http_info(order_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_order_regulated_info(self):
        order_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("ordersV0".casefold(), self.to_camel_case("get_order_regulated_info"), "200")
        response = self.api.get_order_regulated_info_with_http_info(order_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_orders(self):
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        
        self.instruct_backend_mock("ordersV0".casefold(), self.to_camel_case("get_orders"), "200")
        response = self.api.get_orders_with_http_info(marketplace_ids, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_update_verification_status(self):
        order_id = self._get_random_value("str", None)
        payload = self._get_random_value("UpdateVerificationStatusRequest", None)
        
        self.instruct_backend_mock("ordersV0".casefold(), self.to_camel_case("update_verification_status"), "204")
        response = self.api.update_verification_status_with_http_info(order_id, payload, )
        pass


    def instruct_backend_mock(self, api: str, response: str, code: str) -> None:
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