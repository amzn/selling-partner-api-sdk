# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.easyship_v2022_03_23.easy_ship_api import EasyShipApi

import spapi.models.easyship_v2022_03_23 as models

class TestEasyShipApi(unittest.TestCase):
    """EasyShipApi unit test stubs"""

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
        self.api = EasyShipApi(client.api_client)

    def tearDown(self):
        pass

    def test_create_scheduled_package(self):
        create_scheduled_package_request = self._get_random_value("CreateScheduledPackageRequest", None)
        
        self.instruct_backend_mock("easyShip".casefold().replace(' ', ''), self.to_camel_case("create_scheduled_package"), "200")
        response = self.api.create_scheduled_package_with_http_info(create_scheduled_package_request, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_create_scheduled_package_bulk(self):
        create_scheduled_packages_request = self._get_random_value("CreateScheduledPackagesRequest", None)
        
        self.instruct_backend_mock("easyShip".casefold().replace(' ', ''), self.to_camel_case("create_scheduled_package_bulk"), "200")
        response = self.api.create_scheduled_package_bulk_with_http_info(create_scheduled_packages_request, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_scheduled_package(self):
        amazon_order_id = self._get_random_value("str", None)
        marketplace_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("easyShip".casefold().replace(' ', ''), self.to_camel_case("get_scheduled_package"), "200")
        response = self.api.get_scheduled_package_with_http_info(amazon_order_id, marketplace_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_handover_slots(self):
        
        self.instruct_backend_mock("easyShip".casefold().replace(' ', ''), self.to_camel_case("list_handover_slots"), "200")
        response = self.api.list_handover_slots_with_http_info()
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_update_scheduled_packages(self):
        
        self.instruct_backend_mock("easyShip".casefold().replace(' ', ''), self.to_camel_case("update_scheduled_packages"), "200")
        response = self.api.update_scheduled_packages_with_http_info()
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