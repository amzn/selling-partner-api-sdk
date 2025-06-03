# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.fulfillment_outbound_v2020_07_01.fba_outbound_api import FbaOutboundApi

import spapi.models.fulfillment_outbound_v2020_07_01 as models

class TestFbaOutboundApi(unittest.TestCase):
    """FbaOutboundApi unit test stubs"""

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
        self.api = FbaOutboundApi(client.api_client)

    def tearDown(self):
        pass

    def test_cancel_fulfillment_order(self):
        seller_fulfillment_order_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("fbaOutbound".casefold().replace(' ', ''), self.to_camel_case("cancel_fulfillment_order"), "200")
        response = self.api.cancel_fulfillment_order_with_http_info(seller_fulfillment_order_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_create_fulfillment_order(self):
        body = self._get_random_value("CreateFulfillmentOrderRequest", None)
        
        self.instruct_backend_mock("fbaOutbound".casefold().replace(' ', ''), self.to_camel_case("create_fulfillment_order"), "200")
        response = self.api.create_fulfillment_order_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_create_fulfillment_return(self):
        seller_fulfillment_order_id = self._get_random_value("str", None)
        body = self._get_random_value("CreateFulfillmentReturnRequest", None)
        
        self.instruct_backend_mock("fbaOutbound".casefold().replace(' ', ''), self.to_camel_case("create_fulfillment_return"), "200")
        response = self.api.create_fulfillment_return_with_http_info(seller_fulfillment_order_id, body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_delivery_offers(self):
        body = self._get_random_value("GetDeliveryOffersRequest", None)
        
        self.instruct_backend_mock("fbaOutbound".casefold().replace(' ', ''), self.to_camel_case("delivery_offers"), "200")
        response = self.api.delivery_offers_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_feature_inventory(self):
        marketplace_id = self._get_random_value("str", None)
        feature_name = self._get_random_value("str", None)
        
        self.instruct_backend_mock("fbaOutbound".casefold().replace(' ', ''), self.to_camel_case("get_feature_inventory"), "200")
        response = self.api.get_feature_inventory_with_http_info(marketplace_id, feature_name, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_feature_sku(self):
        marketplace_id = self._get_random_value("str", None)
        feature_name = self._get_random_value("str", None)
        seller_sku = self._get_random_value("str", None)
        
        self.instruct_backend_mock("fbaOutbound".casefold().replace(' ', ''), self.to_camel_case("get_feature_sku"), "200")
        response = self.api.get_feature_sku_with_http_info(marketplace_id, feature_name, seller_sku, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_features(self):
        marketplace_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("fbaOutbound".casefold().replace(' ', ''), self.to_camel_case("get_features"), "200")
        response = self.api.get_features_with_http_info(marketplace_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_fulfillment_order(self):
        seller_fulfillment_order_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("fbaOutbound".casefold().replace(' ', ''), self.to_camel_case("get_fulfillment_order"), "200")
        response = self.api.get_fulfillment_order_with_http_info(seller_fulfillment_order_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_fulfillment_preview(self):
        body = self._get_random_value("GetFulfillmentPreviewRequest", None)
        
        self.instruct_backend_mock("fbaOutbound".casefold().replace(' ', ''), self.to_camel_case("get_fulfillment_preview"), "200")
        response = self.api.get_fulfillment_preview_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_package_tracking_details(self):
        package_number = self._get_random_value("int", None)
        
        self.instruct_backend_mock("fbaOutbound".casefold().replace(' ', ''), self.to_camel_case("get_package_tracking_details"), "200")
        response = self.api.get_package_tracking_details_with_http_info(package_number, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_all_fulfillment_orders(self):
        
        self.instruct_backend_mock("fbaOutbound".casefold().replace(' ', ''), self.to_camel_case("list_all_fulfillment_orders"), "200")
        response = self.api.list_all_fulfillment_orders_with_http_info()
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_return_reason_codes(self):
        seller_sku = self._get_random_value("str", None)
        
        self.instruct_backend_mock("fbaOutbound".casefold().replace(' ', ''), self.to_camel_case("list_return_reason_codes"), "200")
        response = self.api.list_return_reason_codes_with_http_info(seller_sku, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_submit_fulfillment_order_status_update(self):
        seller_fulfillment_order_id = self._get_random_value("str", None)
        body = self._get_random_value("SubmitFulfillmentOrderStatusUpdateRequest", None)
        
        self.instruct_backend_mock("fbaOutbound".casefold().replace(' ', ''), self.to_camel_case("submit_fulfillment_order_status_update"), "200")
        response = self.api.submit_fulfillment_order_status_update_with_http_info(seller_fulfillment_order_id, body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_update_fulfillment_order(self):
        seller_fulfillment_order_id = self._get_random_value("str", None)
        body = self._get_random_value("UpdateFulfillmentOrderRequest", None)
        
        self.instruct_backend_mock("fbaOutbound".casefold().replace(' ', ''), self.to_camel_case("update_fulfillment_order"), "200")
        response = self.api.update_fulfillment_order_with_http_info(seller_fulfillment_order_id, body, )
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