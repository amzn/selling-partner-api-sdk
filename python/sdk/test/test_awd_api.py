# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.awd_v2024_05_09.awd_api import AwdApi

import spapi.models.awd_v2024_05_09 as models

class TestAwdApi(unittest.TestCase):
    """AwdApi unit test stubs"""

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
        self.api = AwdApi(client.api_client)

    def tearDown(self):
        pass

    def test_cancel_inbound(self):
        order_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("awd".casefold(), self.to_camel_case("cancel_inbound"), "204")
        response = self.api.cancel_inbound_with_http_info(order_id, )
        pass

    def test_check_inbound_eligibility(self):
        body = self._get_random_value("InboundPackages", None)
        
        self.instruct_backend_mock("awd".casefold(), self.to_camel_case("check_inbound_eligibility"), "200")
        response = self.api.check_inbound_eligibility_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_confirm_inbound(self):
        order_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("awd".casefold(), self.to_camel_case("confirm_inbound"), "204")
        response = self.api.confirm_inbound_with_http_info(order_id, )
        pass

    def test_create_inbound(self):
        body = self._get_random_value("InboundOrderCreationData", None)
        
        self.instruct_backend_mock("awd".casefold(), self.to_camel_case("create_inbound"), "201")
        response = self.api.create_inbound_with_http_info(body, )
        self.assertEqual(201, response[1])
        self.assert_valid_response_payload(201, response[0])
        pass

    def test_get_inbound(self):
        order_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("awd".casefold(), self.to_camel_case("get_inbound"), "200")
        response = self.api.get_inbound_with_http_info(order_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_inbound_shipment(self):
        shipment_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("awd".casefold(), self.to_camel_case("get_inbound_shipment"), "200")
        response = self.api.get_inbound_shipment_with_http_info(shipment_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_inbound_shipment_labels(self):
        shipment_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("awd".casefold(), self.to_camel_case("get_inbound_shipment_labels"), "200")
        response = self.api.get_inbound_shipment_labels_with_http_info(shipment_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_inbound_shipments(self):
        
        self.instruct_backend_mock("awd".casefold(), self.to_camel_case("list_inbound_shipments"), "200")
        response = self.api.list_inbound_shipments_with_http_info()
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_inventory(self):
        
        self.instruct_backend_mock("awd".casefold(), self.to_camel_case("list_inventory"), "200")
        response = self.api.list_inventory_with_http_info()
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_update_inbound(self):
        order_id = self._get_random_value("str", None)
        body = self._get_random_value("InboundOrder", None)
        
        self.instruct_backend_mock("awd".casefold(), self.to_camel_case("update_inbound"), "204")
        response = self.api.update_inbound_with_http_info(order_id, body, )
        pass

    def test_update_inbound_shipment_transport_details(self):
        shipment_id = self._get_random_value("str", None)
        body = self._get_random_value("TransportationDetails", None)
        
        self.instruct_backend_mock("awd".casefold(), self.to_camel_case("update_inbound_shipment_transport_details"), "204")
        response = self.api.update_inbound_shipment_transport_details_with_http_info(shipment_id, body, )
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