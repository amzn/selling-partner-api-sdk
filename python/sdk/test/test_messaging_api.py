# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.messaging_v1.messaging_api import MessagingApi

import spapi.models.messaging_v1 as models

class TestMessagingApi(unittest.TestCase):
    """MessagingApi unit test stubs"""

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
        self.api = MessagingApi(client.api_client)

    def tearDown(self):
        pass

    def test_confirm_customization_details(self):
        amazon_order_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        body = self._get_random_value("CreateConfirmCustomizationDetailsRequest", None)
        
        self.instruct_backend_mock("messaging".casefold(), self.to_camel_case("confirm_customization_details"), "201")
        response = self.api.confirm_customization_details_with_http_info(amazon_order_id, marketplace_ids, body, )
        self.assertEqual(201, response[1])
        self.assert_valid_response_payload(201, response[0])
        pass

    def test_create_amazon_motors(self):
        amazon_order_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        body = self._get_random_value("CreateAmazonMotorsRequest", None)
        
        self.instruct_backend_mock("messaging".casefold(), self.to_camel_case("create_amazon_motors"), "201")
        response = self.api.create_amazon_motors_with_http_info(amazon_order_id, marketplace_ids, body, )
        self.assertEqual(201, response[1])
        self.assert_valid_response_payload(201, response[0])
        pass

    def test_create_confirm_delivery_details(self):
        amazon_order_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        body = self._get_random_value("CreateConfirmDeliveryDetailsRequest", None)
        
        self.instruct_backend_mock("messaging".casefold(), self.to_camel_case("create_confirm_delivery_details"), "201")
        response = self.api.create_confirm_delivery_details_with_http_info(amazon_order_id, marketplace_ids, body, )
        self.assertEqual(201, response[1])
        self.assert_valid_response_payload(201, response[0])
        pass

    def test_create_confirm_order_details(self):
        amazon_order_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        body = self._get_random_value("CreateConfirmOrderDetailsRequest", None)
        
        self.instruct_backend_mock("messaging".casefold(), self.to_camel_case("create_confirm_order_details"), "201")
        response = self.api.create_confirm_order_details_with_http_info(amazon_order_id, marketplace_ids, body, )
        self.assertEqual(201, response[1])
        self.assert_valid_response_payload(201, response[0])
        pass

    def test_create_confirm_service_details(self):
        amazon_order_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        body = self._get_random_value("CreateConfirmServiceDetailsRequest", None)
        
        self.instruct_backend_mock("messaging".casefold(), self.to_camel_case("create_confirm_service_details"), "201")
        response = self.api.create_confirm_service_details_with_http_info(amazon_order_id, marketplace_ids, body, )
        self.assertEqual(201, response[1])
        self.assert_valid_response_payload(201, response[0])
        pass

    def test_create_digital_access_key(self):
        amazon_order_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        body = self._get_random_value("CreateDigitalAccessKeyRequest", None)
        
        self.instruct_backend_mock("messaging".casefold(), self.to_camel_case("create_digital_access_key"), "201")
        response = self.api.create_digital_access_key_with_http_info(amazon_order_id, marketplace_ids, body, )
        self.assertEqual(201, response[1])
        self.assert_valid_response_payload(201, response[0])
        pass

    def test_create_legal_disclosure(self):
        amazon_order_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        body = self._get_random_value("CreateLegalDisclosureRequest", None)
        
        self.instruct_backend_mock("messaging".casefold(), self.to_camel_case("create_legal_disclosure"), "201")
        response = self.api.create_legal_disclosure_with_http_info(amazon_order_id, marketplace_ids, body, )
        self.assertEqual(201, response[1])
        self.assert_valid_response_payload(201, response[0])
        pass

    def test_create_negative_feedback_removal(self):
        amazon_order_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        
        self.instruct_backend_mock("messaging".casefold(), self.to_camel_case("create_negative_feedback_removal"), "201")
        response = self.api.create_negative_feedback_removal_with_http_info(amazon_order_id, marketplace_ids, )
        self.assertEqual(201, response[1])
        self.assert_valid_response_payload(201, response[0])
        pass

    def test_create_unexpected_problem(self):
        amazon_order_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        body = self._get_random_value("CreateUnexpectedProblemRequest", None)
        
        self.instruct_backend_mock("messaging".casefold(), self.to_camel_case("create_unexpected_problem"), "201")
        response = self.api.create_unexpected_problem_with_http_info(amazon_order_id, marketplace_ids, body, )
        self.assertEqual(201, response[1])
        self.assert_valid_response_payload(201, response[0])
        pass

    def test_create_warranty(self):
        amazon_order_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        body = self._get_random_value("CreateWarrantyRequest", None)
        
        self.instruct_backend_mock("messaging".casefold(), self.to_camel_case("create_warranty"), "201")
        response = self.api.create_warranty_with_http_info(amazon_order_id, marketplace_ids, body, )
        self.assertEqual(201, response[1])
        self.assert_valid_response_payload(201, response[0])
        pass

    def test_get_attributes(self):
        amazon_order_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        
        self.instruct_backend_mock("messaging".casefold(), self.to_camel_case("get_attributes"), "200")
        response = self.api.get_attributes_with_http_info(amazon_order_id, marketplace_ids, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_messaging_actions_for_order(self):
        amazon_order_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        
        self.instruct_backend_mock("messaging".casefold(), self.to_camel_case("get_messaging_actions_for_order"), "200")
        response = self.api.get_messaging_actions_for_order_with_http_info(amazon_order_id, marketplace_ids, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_send_invoice(self):
        amazon_order_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        body = self._get_random_value("InvoiceRequest", None)
        
        self.instruct_backend_mock("messaging".casefold(), self.to_camel_case("send_invoice"), "201")
        response = self.api.send_invoice_with_http_info(amazon_order_id, marketplace_ids, body, )
        self.assertEqual(201, response[1])
        self.assert_valid_response_payload(201, response[0])
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