# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.shipping_v2.shipping_api import ShippingApi

import spapi.models.shipping_v2 as models

class TestShippingApi(unittest.TestCase):
    """ShippingApi unit test stubs"""

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
        self.api = ShippingApi(client.api_client)

    def tearDown(self):
        pass

    def test_cancel_shipment(self):
        shipment_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("cancel_shipment"), "200")
        response = self.api.cancel_shipment_with_http_info(shipment_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_create_claim(self):
        body = self._get_random_value("CreateClaimRequest", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("create_claim"), "201")
        response = self.api.create_claim_with_http_info(body, )
        self.assertEqual(201, response[1])
        self.assert_valid_response_payload(201, response[0])
        pass

    def test_direct_purchase_shipment(self):
        body = self._get_random_value("DirectPurchaseRequest", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("direct_purchase_shipment"), "200")
        response = self.api.direct_purchase_shipment_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_generate_collection_form(self):
        body = self._get_random_value("GenerateCollectionFormRequest", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("generate_collection_form"), "200")
        response = self.api.generate_collection_form_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_access_points(self):
        access_point_types = [self._get_random_value("List[str]") for _ in range(1)]
        country_code = self._get_random_value("str", None)
        postal_code = self._get_random_value("str", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("get_access_points"), "200")
        response = self.api.get_access_points_with_http_info(access_point_types, country_code, postal_code, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_additional_inputs(self):
        request_token = self._get_random_value("str", None)
        rate_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("get_additional_inputs"), "200")
        response = self.api.get_additional_inputs_with_http_info(request_token, rate_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_carrier_account_form_inputs(self):
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("get_carrier_account_form_inputs"), "200")
        response = self.api.get_carrier_account_form_inputs_with_http_info()
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_carrier_accounts(self):
        body = self._get_random_value("GetCarrierAccountsRequest", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("get_carrier_accounts"), "200")
        response = self.api.get_carrier_accounts_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_collection_form(self):
        collection_form_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("get_collection_form"), "200")
        response = self.api.get_collection_form_with_http_info(collection_form_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_collection_form_history(self):
        body = self._get_random_value("GetCollectionFormHistoryRequest", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("get_collection_form_history"), "200")
        response = self.api.get_collection_form_history_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_rates(self):
        body = self._get_random_value("GetRatesRequest", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("get_rates"), "200")
        response = self.api.get_rates_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_shipment_documents(self):
        shipment_id = self._get_random_value("str", None)
        package_client_reference_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("get_shipment_documents"), "200")
        response = self.api.get_shipment_documents_with_http_info(shipment_id, package_client_reference_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_tracking(self):
        tracking_id = self._get_random_value("str", None)
        carrier_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("get_tracking"), "200")
        response = self.api.get_tracking_with_http_info(tracking_id, carrier_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_unmanifested_shipments(self):
        body = self._get_random_value("GetUnmanifestedShipmentsRequest", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("get_unmanifested_shipments"), "200")
        response = self.api.get_unmanifested_shipments_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_link_carrier_account(self):
        carrier_id = self._get_random_value("str", None)
        body = self._get_random_value("LinkCarrierAccountRequest", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("link_carrier_account"), "200")
        response = self.api.link_carrier_account_with_http_info(carrier_id, body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_link_carrier_account_0(self):
        carrier_id = self._get_random_value("str", None)
        body = self._get_random_value("LinkCarrierAccountRequest", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("link_carrier_account_0"), "200")
        response = self.api.link_carrier_account_0_with_http_info(carrier_id, body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_one_click_shipment(self):
        body = self._get_random_value("OneClickShipmentRequest", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("one_click_shipment"), "200")
        response = self.api.one_click_shipment_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_purchase_shipment(self):
        body = self._get_random_value("PurchaseShipmentRequest", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("purchase_shipment"), "200")
        response = self.api.purchase_shipment_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_submit_ndr_feedback(self):
        body = self._get_random_value("SubmitNdrFeedbackRequest", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("submit_ndr_feedback"), "204")
        response = self.api.submit_ndr_feedback_with_http_info(body, )
        pass

    def test_unlink_carrier_account(self):
        carrier_id = self._get_random_value("str", None)
        body = self._get_random_value("UnlinkCarrierAccountRequest", None)
        
        self.instruct_backend_mock("shipping".casefold().replace(' ', ''), self.to_camel_case("unlink_carrier_account"), "200")
        response = self.api.unlink_carrier_account_with_http_info(carrier_id, body, )
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