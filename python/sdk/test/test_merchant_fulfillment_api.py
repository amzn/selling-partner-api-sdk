# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.merchant_fulfillment_v0.merchant_fulfillment_api import MerchantFulfillmentApi

import spapi.models.merchant_fulfillment_v0 as models

class TestMerchantFulfillmentApi(unittest.TestCase):
    """MerchantFulfillmentApi unit test stubs"""

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
        self.api = MerchantFulfillmentApi(client.api_client)

    def tearDown(self):
        pass

    def test_cancel_shipment(self):
        shipment_id = self._get_random_value("str", "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}".replace("*$", "{"+ "0" + "}$"))
        
        self.instruct_backend_mock("merchantFulfillment".casefold().replace(' ', ''), self.to_camel_case("cancel_shipment"), "200")
        response = self.api.cancel_shipment_with_http_info(shipment_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_create_shipment(self):
        body = self._get_random_value("CreateShipmentRequest", None)
        
        self.instruct_backend_mock("merchantFulfillment".casefold().replace(' ', ''), self.to_camel_case("create_shipment"), "200")
        response = self.api.create_shipment_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_additional_seller_inputs(self):
        body = self._get_random_value("GetAdditionalSellerInputsRequest", None)
        
        self.instruct_backend_mock("merchantFulfillment".casefold().replace(' ', ''), self.to_camel_case("get_additional_seller_inputs"), "200")
        response = self.api.get_additional_seller_inputs_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_eligible_shipment_services(self):
        body = self._get_random_value("GetEligibleShipmentServicesRequest", None)
        
        self.instruct_backend_mock("merchantFulfillment".casefold().replace(' ', ''), self.to_camel_case("get_eligible_shipment_services"), "200")
        response = self.api.get_eligible_shipment_services_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_shipment(self):
        shipment_id = self._get_random_value("str", "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}".replace("*$", "{"+ "0" + "}$"))
        
        self.instruct_backend_mock("merchantFulfillment".casefold().replace(' ', ''), self.to_camel_case("get_shipment"), "200")
        response = self.api.get_shipment_with_http_info(shipment_id, )
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