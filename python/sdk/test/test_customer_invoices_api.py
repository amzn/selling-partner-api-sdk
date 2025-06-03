# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.vendor_direct_fulfillment_shipping_v2021_12_28.customer_invoices_api import CustomerInvoicesApi

import spapi.models.vendor_direct_fulfillment_shipping_v2021_12_28 as models

class TestCustomerInvoicesApi(unittest.TestCase):
    """CustomerInvoicesApi unit test stubs"""

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
        self.api = CustomerInvoicesApi(client.api_client)

    def tearDown(self):
        pass

    def test_get_customer_invoice(self):
        purchase_order_number = self._get_random_value("str", "^[a-zA-Z0-9]+$".replace("*$", "{"+ "0" + "}$"))
        
        self.instruct_backend_mock("customerInvoices".casefold().replace(' ', ''), self.to_camel_case("get_customer_invoice"), "200")
        response = self.api.get_customer_invoice_with_http_info(purchase_order_number, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_customer_invoices(self):
        created_after = self._get_random_value("datetime", None)
        created_before = self._get_random_value("datetime", None)
        
        self.instruct_backend_mock("customerInvoices".casefold().replace(' ', ''), self.to_camel_case("get_customer_invoices"), "200")
        response = self.api.get_customer_invoices_with_http_info(created_after, created_before, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
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