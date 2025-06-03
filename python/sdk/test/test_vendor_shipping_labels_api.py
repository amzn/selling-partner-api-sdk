# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.vendor_direct_fulfillment_shipping_v2021_12_28.vendor_shipping_labels_api import VendorShippingLabelsApi

import spapi.models.vendor_direct_fulfillment_shipping_v2021_12_28 as models

class TestVendorShippingLabelsApi(unittest.TestCase):
    """VendorShippingLabelsApi unit test stubs"""

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
        self.api = VendorShippingLabelsApi(client.api_client)

    def tearDown(self):
        pass

    def test_create_shipping_labels(self):
        purchase_order_number = self._get_random_value("str", "^[a-zA-Z0-9]+$".replace("*$", "{"+ "0" + "}$"))
        body = self._get_random_value("CreateShippingLabelsRequest", None)
        
        self.instruct_backend_mock("vendorShippingLabels".casefold().replace(' ', ''), self.to_camel_case("create_shipping_labels"), "200")
        response = self.api.create_shipping_labels_with_http_info(purchase_order_number, body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_shipping_label(self):
        purchase_order_number = self._get_random_value("str", "^[a-zA-Z0-9]+$".replace("*$", "{"+ "0" + "}$"))
        
        self.instruct_backend_mock("vendorShippingLabels".casefold().replace(' ', ''), self.to_camel_case("get_shipping_label"), "200")
        response = self.api.get_shipping_label_with_http_info(purchase_order_number, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_shipping_labels(self):
        created_after = self._get_random_value("datetime", None)
        created_before = self._get_random_value("datetime", None)
        
        self.instruct_backend_mock("vendorShippingLabels".casefold().replace(' ', ''), self.to_camel_case("get_shipping_labels"), "200")
        response = self.api.get_shipping_labels_with_http_info(created_after, created_before, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_submit_shipping_label_request(self):
        body = self._get_random_value("SubmitShippingLabelsRequest", None)
        
        self.instruct_backend_mock("vendorShippingLabels".casefold().replace(' ', ''), self.to_camel_case("submit_shipping_label_request"), "202")
        response = self.api.submit_shipping_label_request_with_http_info(body, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
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