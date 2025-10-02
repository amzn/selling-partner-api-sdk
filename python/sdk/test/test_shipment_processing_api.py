# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.external_fulfillment_shipments_v2024_09_11.shipment_processing_api import ShipmentProcessingApi

import spapi.models.external_fulfillment_shipments_v2024_09_11 as models

class TestShipmentProcessingApi(unittest.TestCase):
    """ShipmentProcessingApi unit test stubs"""

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
        self.api = ShipmentProcessingApi(client.api_client)

    def tearDown(self):
        pass

    def test_create_packages(self):
        shipment_id = self._get_random_value("str", None)
        body = self._get_random_value("Packages", None)
        
        self.instruct_backend_mock(self.to_camel_case("create_packages"), "204")
        response = self.api.create_packages_with_http_info(shipment_id, body, )
        pass

    def test_generate_invoice(self):
        shipment_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock(self.to_camel_case("generate_invoice"), "200")
        response = self.api.generate_invoice_with_http_info(shipment_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_generate_ship_labels(self):
        shipment_id = self._get_random_value("str", None)
        operation = self._get_random_value("str", None)
        
        self.instruct_backend_mock(self.to_camel_case("generate_ship_labels"), "200")
        response = self.api.generate_ship_labels_with_http_info(shipment_id, operation, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_process_shipment(self):
        shipment_id = self._get_random_value("str", None)
        operation = self._get_random_value("str", None)
        
        self.instruct_backend_mock(self.to_camel_case("process_shipment"), "204")
        response = self.api.process_shipment_with_http_info(shipment_id, operation, )
        pass

    def test_retrieve_invoice(self):
        shipment_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock(self.to_camel_case("retrieve_invoice"), "200")
        response = self.api.retrieve_invoice_with_http_info(shipment_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_retrieve_shipping_options(self):
        shipment_id = self._get_random_value("str", None)
        package_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock(self.to_camel_case("retrieve_shipping_options"), "200")
        response = self.api.retrieve_shipping_options_with_http_info(shipment_id, package_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_update_package(self):
        shipment_id = self._get_random_value("str", None)
        package_id = self._get_random_value("str", None)
        body = self._get_random_value("Package", None)
        
        self.instruct_backend_mock(self.to_camel_case("update_package"), "204")
        response = self.api.update_package_with_http_info(shipment_id, package_id, body, )
        pass

    def test_update_package_status(self):
        shipment_id = self._get_random_value("str", None)
        package_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock(self.to_camel_case("update_package_status"), "204")
        response = self.api.update_package_status_with_http_info(shipment_id, package_id, )
        pass


    def instruct_backend_mock(self, response: str, code: str) -> None:
        url = f"{self.mock_server_endpoint}/response/{response}/code/{code}"
        ## handle same api operation name exceptions
        if "vendor" in "api.external_fulfillment_shipments_v2024_09_11" and response == "getOrder":
            url += f"?qualifier=Vendor"
        if "fulfillment_inbound" in "api.external_fulfillment_shipments_v2024_09_11" and response == "getShipment":
            url += f"?qualifier=FbaInbound"
        if "seller_wallet" in "api.external_fulfillment_shipments_v2024_09_11" and response == "getAccount":
            url += f"?qualifier=SellerWallet"
        if "seller_wallet" in "api.external_fulfillment_shipments_v2024_09_11" and response == "getTransaction":
            url += f"?qualifier=SellerWallet"
        if "external_fulfillment" in "api.external_fulfillment_shipments_v2024_09_11" and response == "getShipment":
                    url += f"?qualifier=ExternalFulfillment"
        if "external_fulfillment" in "api.external_fulfillment_shipments_v2024_09_11" and response == "getShipments":
                    url += f"?qualifier=ExternalFulfillment"
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