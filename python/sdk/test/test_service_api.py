# coding: utf-8

from __future__ import absolute_import

import unittest
import requests
import rstr

from spapi.auth.credentials import SPAPIConfig
from spapi.client import SPAPIClient
from spapi.api.services_v1.service_api import ServiceApi

import spapi.models.services_v1 as models

class TestServiceApi(unittest.TestCase):
    """ServiceApi unit test stubs"""

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
        self.api = ServiceApi(client.api_client)

    def tearDown(self):
        pass

    def test_add_appointment_for_service_job_by_service_job_id(self):
        service_job_id = self._get_random_value("str", None)
        body = self._get_random_value("AddAppointmentRequest", None)
        
        self.instruct_backend_mock("service".casefold().replace(' ', ''), self.to_camel_case("add_appointment_for_service_job_by_service_job_id"), "200")
        response = self.api.add_appointment_for_service_job_by_service_job_id_with_http_info(service_job_id, body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_assign_appointment_resources(self):
        service_job_id = self._get_random_value("str", None)
        appointment_id = self._get_random_value("str", None)
        body = self._get_random_value("AssignAppointmentResourcesRequest", None)
        
        self.instruct_backend_mock("service".casefold().replace(' ', ''), self.to_camel_case("assign_appointment_resources"), "200")
        response = self.api.assign_appointment_resources_with_http_info(service_job_id, appointment_id, body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_cancel_reservation(self):
        reservation_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        
        self.instruct_backend_mock("service".casefold().replace(' ', ''), self.to_camel_case("cancel_reservation"), "204")
        response = self.api.cancel_reservation_with_http_info(reservation_id, marketplace_ids, )
        self.assertEqual(204, response[1])
        self.assert_valid_response_payload(204, response[0])
        pass

    def test_cancel_service_job_by_service_job_id(self):
        service_job_id = self._get_random_value("str", None)
        cancellation_reason_code = self._get_random_value("str", "^[A-Z0-9_]*$".replace("*$", "{"+ "1,100" + "}$"))
        
        self.instruct_backend_mock("service".casefold().replace(' ', ''), self.to_camel_case("cancel_service_job_by_service_job_id"), "200")
        response = self.api.cancel_service_job_by_service_job_id_with_http_info(service_job_id, cancellation_reason_code, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_complete_service_job_by_service_job_id(self):
        service_job_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("service".casefold().replace(' ', ''), self.to_camel_case("complete_service_job_by_service_job_id"), "200")
        response = self.api.complete_service_job_by_service_job_id_with_http_info(service_job_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_create_reservation(self):
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        body = self._get_random_value("CreateReservationRequest", None)
        
        self.instruct_backend_mock("service".casefold().replace(' ', ''), self.to_camel_case("create_reservation"), "200")
        response = self.api.create_reservation_with_http_info(marketplace_ids, body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_create_service_document_upload_destination(self):
        body = self._get_random_value("ServiceUploadDocument", None)
        
        self.instruct_backend_mock("service".casefold().replace(' ', ''), self.to_camel_case("create_service_document_upload_destination"), "200")
        response = self.api.create_service_document_upload_destination_with_http_info(body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_appointment_slots(self):
        asin = self._get_random_value("str", None)
        store_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        
        self.instruct_backend_mock("service".casefold().replace(' ', ''), self.to_camel_case("get_appointment_slots"), "200")
        response = self.api.get_appointment_slots_with_http_info(asin, store_id, marketplace_ids, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_appointmment_slots_by_job_id(self):
        service_job_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        
        self.instruct_backend_mock("service".casefold().replace(' ', ''), self.to_camel_case("get_appointmment_slots_by_job_id"), "200")
        response = self.api.get_appointmment_slots_by_job_id_with_http_info(service_job_id, marketplace_ids, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_fixed_slot_capacity(self):
        resource_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        body = self._get_random_value("FixedSlotCapacityQuery", None)
        
        self.instruct_backend_mock("service".casefold().replace(' ', ''), self.to_camel_case("get_fixed_slot_capacity"), "200")
        response = self.api.get_fixed_slot_capacity_with_http_info(resource_id, marketplace_ids, body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_range_slot_capacity(self):
        resource_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        body = self._get_random_value("RangeSlotCapacityQuery", None)
        
        self.instruct_backend_mock("service".casefold().replace(' ', ''), self.to_camel_case("get_range_slot_capacity"), "200")
        response = self.api.get_range_slot_capacity_with_http_info(resource_id, marketplace_ids, body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_service_job_by_service_job_id(self):
        service_job_id = self._get_random_value("str", None)
        
        self.instruct_backend_mock("service".casefold().replace(' ', ''), self.to_camel_case("get_service_job_by_service_job_id"), "200")
        response = self.api.get_service_job_by_service_job_id_with_http_info(service_job_id, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_get_service_jobs(self):
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        
        self.instruct_backend_mock("service".casefold().replace(' ', ''), self.to_camel_case("get_service_jobs"), "200")
        response = self.api.get_service_jobs_with_http_info(marketplace_ids, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_reschedule_appointment_for_service_job_by_service_job_id(self):
        service_job_id = self._get_random_value("str", None)
        appointment_id = self._get_random_value("str", None)
        body = self._get_random_value("RescheduleAppointmentRequest", None)
        
        self.instruct_backend_mock("service".casefold().replace(' ', ''), self.to_camel_case("reschedule_appointment_for_service_job_by_service_job_id"), "200")
        response = self.api.reschedule_appointment_for_service_job_by_service_job_id_with_http_info(service_job_id, appointment_id, body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_set_appointment_fulfillment_data(self):
        service_job_id = self._get_random_value("str", None)
        appointment_id = self._get_random_value("str", None)
        body = self._get_random_value("SetAppointmentFulfillmentDataRequest", None)
        
        self.instruct_backend_mock("service".casefold().replace(' ', ''), self.to_camel_case("set_appointment_fulfillment_data"), "204")
        response = self.api.set_appointment_fulfillment_data_with_http_info(service_job_id, appointment_id, body, )
        self.assertEqual(204, response[1])
        self.assert_valid_response_payload(204, response[0])
        pass

    def test_update_reservation(self):
        reservation_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        body = self._get_random_value("UpdateReservationRequest", None)
        
        self.instruct_backend_mock("service".casefold().replace(' ', ''), self.to_camel_case("update_reservation"), "200")
        response = self.api.update_reservation_with_http_info(reservation_id, marketplace_ids, body, )
        self.assertEqual(200, response[1])
        self.assert_valid_response_payload(200, response[0])
        pass

    def test_update_schedule(self):
        resource_id = self._get_random_value("str", None)
        marketplace_ids = [self._get_random_value("List[str]") for _ in range(1)]
        body = self._get_random_value("UpdateScheduleRequest", None)
        
        self.instruct_backend_mock("service".casefold().replace(' ', ''), self.to_camel_case("update_schedule"), "200")
        response = self.api.update_schedule_with_http_info(resource_id, marketplace_ids, body, )
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