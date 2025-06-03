# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.fulfillment_inbound_v2024_03_20.fba_inbound_api import FbaInboundApi

import spapi.models.fulfillment_inbound_v2024_03_20 as models

class TestFbaInboundApi(unittest.TestCase):
    """FbaInboundApi unit test stubs"""

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
        self.api = FbaInboundApi(client.api_client)

    def tearDown(self):
        pass

    def test_cancel_inbound_plan(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("cancel_inbound_plan"), "202")
        response = self.api.cancel_inbound_plan_with_http_info(inbound_plan_id, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_cancel_self_ship_appointment(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        body = self._get_random_value("CancelSelfShipAppointmentRequest", None)
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("cancel_self_ship_appointment"), "202")
        response = self.api.cancel_self_ship_appointment_with_http_info(inbound_plan_id, shipment_id, body, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_confirm_delivery_window_options(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        delivery_window_option_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "36,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("confirm_delivery_window_options"), "202")
        response = self.api.confirm_delivery_window_options_with_http_info(inbound_plan_id, shipment_id, delivery_window_option_id, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_confirm_packing_option(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        packing_option_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("confirm_packing_option"), "202")
        response = self.api.confirm_packing_option_with_http_info(inbound_plan_id, packing_option_id, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_confirm_placement_option(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        placement_option_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("confirm_placement_option"), "202")
        response = self.api.confirm_placement_option_with_http_info(inbound_plan_id, placement_option_id, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_confirm_shipment_content_update_preview(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        content_update_preview_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("confirm_shipment_content_update_preview"), "202")
        response = self.api.confirm_shipment_content_update_preview_with_http_info(inbound_plan_id, shipment_id, content_update_preview_id, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_confirm_transportation_options(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        body = self._get_random_value("ConfirmTransportationOptionsRequest", None)
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("confirm_transportation_options"), "202")
        response = self.api.confirm_transportation_options_with_http_info(inbound_plan_id, body, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_create_inbound_plan(self):
        body = self._get_random_value("CreateInboundPlanRequest", None)
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("create_inbound_plan"), "202")
        response = self.api.create_inbound_plan_with_http_info(body, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_create_marketplace_item_labels(self):
        body = self._get_random_value("CreateMarketplaceItemLabelsRequest", None)
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("create_marketplace_item_labels"), "200")
        response = self.api.create_marketplace_item_labels_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_generate_delivery_window_options(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("generate_delivery_window_options"), "202")
        response = self.api.generate_delivery_window_options_with_http_info(inbound_plan_id, shipment_id, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_generate_packing_options(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("generate_packing_options"), "202")
        response = self.api.generate_packing_options_with_http_info(inbound_plan_id, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_generate_placement_options(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        body = self._get_random_value("GeneratePlacementOptionsRequest", None)
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("generate_placement_options"), "202")
        response = self.api.generate_placement_options_with_http_info(inbound_plan_id, body, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_generate_self_ship_appointment_slots(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        body = self._get_random_value("GenerateSelfShipAppointmentSlotsRequest", None)
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("generate_self_ship_appointment_slots"), "201")
        response = self.api.generate_self_ship_appointment_slots_with_http_info(inbound_plan_id, shipment_id, body, )
        self.assertEqual(201, response[1])
        self.assert_valid_response_payload(201, response[0])
        pass

    def test_generate_shipment_content_update_previews(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        body = self._get_random_value("GenerateShipmentContentUpdatePreviewsRequest", None)
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("generate_shipment_content_update_previews"), "202")
        response = self.api.generate_shipment_content_update_previews_with_http_info(inbound_plan_id, shipment_id, body, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_generate_transportation_options(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        body = self._get_random_value("GenerateTransportationOptionsRequest", None)
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("generate_transportation_options"), "202")
        response = self.api.generate_transportation_options_with_http_info(inbound_plan_id, body, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_get_delivery_challan_document(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("get_delivery_challan_document"), "200")
        response = self.api.get_delivery_challan_document_with_http_info(inbound_plan_id, shipment_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_inbound_operation_status(self):
        operation_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "36,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("get_inbound_operation_status"), "200")
        response = self.api.get_inbound_operation_status_with_http_info(operation_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_inbound_plan(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("get_inbound_plan"), "200")
        response = self.api.get_inbound_plan_with_http_info(inbound_plan_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_self_ship_appointment_slots(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("get_self_ship_appointment_slots"), "200")
        response = self.api.get_self_ship_appointment_slots_with_http_info(inbound_plan_id, shipment_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_shipment(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("get_shipment"), "200")
        response = self.api.get_shipment_with_http_info(inbound_plan_id, shipment_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_shipment_content_update_preview(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        content_update_preview_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("get_shipment_content_update_preview"), "200")
        response = self.api.get_shipment_content_update_preview_with_http_info(inbound_plan_id, shipment_id, content_update_preview_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_delivery_window_options(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("list_delivery_window_options"), "200")
        response = self.api.list_delivery_window_options_with_http_info(inbound_plan_id, shipment_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_inbound_plan_boxes(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("list_inbound_plan_boxes"), "200")
        response = self.api.list_inbound_plan_boxes_with_http_info(inbound_plan_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_inbound_plan_items(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("list_inbound_plan_items"), "200")
        response = self.api.list_inbound_plan_items_with_http_info(inbound_plan_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_inbound_plan_pallets(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("list_inbound_plan_pallets"), "200")
        response = self.api.list_inbound_plan_pallets_with_http_info(inbound_plan_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_inbound_plans(self):
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("list_inbound_plans"), "200")
        response = self.api.list_inbound_plans_with_http_info()
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_item_compliance_details(self):
        mskus = [self._get_random_value("List[str]") for _ in range(1)]
        marketplace_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("list_item_compliance_details"), "200")
        response = self.api.list_item_compliance_details_with_http_info(mskus, marketplace_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_packing_group_boxes(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        packing_group_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("list_packing_group_boxes"), "200")
        response = self.api.list_packing_group_boxes_with_http_info(inbound_plan_id, packing_group_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_packing_group_items(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        packing_group_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("list_packing_group_items"), "200")
        response = self.api.list_packing_group_items_with_http_info(inbound_plan_id, packing_group_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_packing_options(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("list_packing_options"), "200")
        response = self.api.list_packing_options_with_http_info(inbound_plan_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_placement_options(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("list_placement_options"), "200")
        response = self.api.list_placement_options_with_http_info(inbound_plan_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_prep_details(self):
        marketplace_id = self._get_random_value("str", None)
        mskus = [self._get_random_value("List[str]") for _ in range(1)]
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("list_prep_details"), "200")
        response = self.api.list_prep_details_with_http_info(marketplace_id, mskus, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_shipment_boxes(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("list_shipment_boxes"), "200")
        response = self.api.list_shipment_boxes_with_http_info(inbound_plan_id, shipment_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_shipment_content_update_previews(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("list_shipment_content_update_previews"), "200")
        response = self.api.list_shipment_content_update_previews_with_http_info(inbound_plan_id, shipment_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_shipment_items(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("list_shipment_items"), "200")
        response = self.api.list_shipment_items_with_http_info(inbound_plan_id, shipment_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_shipment_pallets(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("list_shipment_pallets"), "200")
        response = self.api.list_shipment_pallets_with_http_info(inbound_plan_id, shipment_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_list_transportation_options(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("list_transportation_options"), "200")
        response = self.api.list_transportation_options_with_http_info(inbound_plan_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_schedule_self_ship_appointment(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        slot_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        body = self._get_random_value("ScheduleSelfShipAppointmentRequest", None)
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("schedule_self_ship_appointment"), "200")
        response = self.api.schedule_self_ship_appointment_with_http_info(inbound_plan_id, shipment_id, slot_id, body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_set_packing_information(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        body = self._get_random_value("SetPackingInformationRequest", None)
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("set_packing_information"), "202")
        response = self.api.set_packing_information_with_http_info(inbound_plan_id, body, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_set_prep_details(self):
        body = self._get_random_value("SetPrepDetailsRequest", None)
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("set_prep_details"), "202")
        response = self.api.set_prep_details_with_http_info(body, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_update_inbound_plan_name(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        body = self._get_random_value("UpdateInboundPlanNameRequest", None)
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("update_inbound_plan_name"), "204")
        response = self.api.update_inbound_plan_name_with_http_info(inbound_plan_id, body, )
        pass

    def test_update_item_compliance_details(self):
        marketplace_id = self._get_random_value("str", None)
        body = self._get_random_value("UpdateItemComplianceDetailsRequest", None)
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("update_item_compliance_details"), "202")
        response = self.api.update_item_compliance_details_with_http_info(marketplace_id, body, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_update_shipment_name(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        body = self._get_random_value("UpdateShipmentNameRequest", None)
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("update_shipment_name"), "204")
        response = self.api.update_shipment_name_with_http_info(inbound_plan_id, shipment_id, body, )
        pass

    def test_update_shipment_source_address(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        body = self._get_random_value("UpdateShipmentSourceAddressRequest", None)
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("update_shipment_source_address"), "202")
        response = self.api.update_shipment_source_address_with_http_info(inbound_plan_id, shipment_id, body, )
        self.assertEqual(202, response[1])
        self.assert_valid_response_payload(202, response[0])
        pass

    def test_update_shipment_tracking_details(self):
        inbound_plan_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        shipment_id = self._get_random_value("str", "^[a-zA-Z0-9-]*$".replace("*$", "{"+ "38,38" + "}$"))
        body = self._get_random_value("UpdateShipmentTrackingDetailsRequest", None)
        
        self.instruct_backend_mock("fbaInbound".casefold().replace(' ', ''), self.to_camel_case("update_shipment_tracking_details"), "202")
        response = self.api.update_shipment_tracking_details_with_http_info(inbound_plan_id, shipment_id, body, )
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