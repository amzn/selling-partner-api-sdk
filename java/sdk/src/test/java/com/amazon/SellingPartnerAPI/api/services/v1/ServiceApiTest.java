/*
 * Selling Partner API for Services
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.api.services.v1;

import com.amazon.SellingPartnerAPI.ApiResponse;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import com.amazon.SellingPartnerAPI.models.services.v1.AddAppointmentRequest;
import com.amazon.SellingPartnerAPI.models.services.v1.AssignAppointmentResourcesRequest;
import com.amazon.SellingPartnerAPI.models.services.v1.AssignAppointmentResourcesResponse;
import com.amazon.SellingPartnerAPI.models.services.v1.CancelReservationResponse;
import com.amazon.SellingPartnerAPI.models.services.v1.CancelServiceJobByServiceJobIdResponse;
import com.amazon.SellingPartnerAPI.models.services.v1.CompleteServiceJobByServiceJobIdResponse;
import com.amazon.SellingPartnerAPI.models.services.v1.CreateReservationRequest;
import com.amazon.SellingPartnerAPI.models.services.v1.CreateReservationResponse;
import com.amazon.SellingPartnerAPI.models.services.v1.CreateServiceDocumentUploadDestination;
import com.amazon.SellingPartnerAPI.models.services.v1.ErrorList;
import com.amazon.SellingPartnerAPI.models.services.v1.FixedSlotCapacity;
import com.amazon.SellingPartnerAPI.models.services.v1.FixedSlotCapacityErrors;
import com.amazon.SellingPartnerAPI.models.services.v1.FixedSlotCapacityQuery;
import com.amazon.SellingPartnerAPI.models.services.v1.GetAppointmentSlotsResponse;
import com.amazon.SellingPartnerAPI.models.services.v1.GetServiceJobByServiceJobIdResponse;
import com.amazon.SellingPartnerAPI.models.services.v1.GetServiceJobsResponse;
import com.amazon.SellingPartnerAPI.models.services.v1.RangeSlotCapacity;
import com.amazon.SellingPartnerAPI.models.services.v1.RangeSlotCapacityErrors;
import com.amazon.SellingPartnerAPI.models.services.v1.RangeSlotCapacityQuery;
import com.amazon.SellingPartnerAPI.models.services.v1.RescheduleAppointmentRequest;
import com.amazon.SellingPartnerAPI.models.services.v1.ServiceUploadDocument;
import com.amazon.SellingPartnerAPI.models.services.v1.SetAppointmentFulfillmentDataRequest;
import com.amazon.SellingPartnerAPI.models.services.v1.SetAppointmentResponse;
import com.amazon.SellingPartnerAPI.models.services.v1.UpdateReservationRequest;
import com.amazon.SellingPartnerAPI.models.services.v1.UpdateReservationResponse;
import com.amazon.SellingPartnerAPI.models.services.v1.UpdateScheduleRequest;
import com.amazon.SellingPartnerAPI.models.services.v1.UpdateScheduleResponse;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

public class ServiceApiTest {

   private static String endpoint = "http://localhost:3000";
   private static String authEndpoint = "http://localhost:3000/auth/o2/token";
   private static LWAAuthorizationCredentials credentials = LWAAuthorizationCredentials.builder()
        .clientId("clientId")
        .clientSecret("clientSecret")
        .refreshToken("refreshToken")
        .endpoint(authEndpoint)
        .build();

   private final ServiceApi api = new ServiceApi.Builder()
        .lwaAuthorizationCredentials(credentials)
        .endpoint(endpoint)
        .build();

    @Test
    public void addAppointmentForServiceJobByServiceJobIdTest() throws Exception {
        instructBackendMock("addAppointmentForServiceJobByServiceJobId", "200");
        AddAppointmentRequest body = new AddAppointmentRequest();
        String serviceJobId = "";

        ApiResponse<SetAppointmentResponse> response = api.addAppointmentForServiceJobByServiceJobIdWithHttpInfo(body, serviceJobId);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void assignAppointmentResourcesTest() throws Exception {
        instructBackendMock("assignAppointmentResources", "200");
        AssignAppointmentResourcesRequest body = new AssignAppointmentResourcesRequest();
        String serviceJobId = "";
        String appointmentId = "";

        ApiResponse<AssignAppointmentResourcesResponse> response = api.assignAppointmentResourcesWithHttpInfo(body, serviceJobId, appointmentId);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void cancelReservationTest() throws Exception {
        instructBackendMock("cancelReservation", "204");
        String reservationId = "";
        List<String> marketplaceIds = new ArrayList<>();

        ApiResponse<CancelReservationResponse> response = api.cancelReservationWithHttpInfo(reservationId, marketplaceIds);

        assertEquals(204, response.getStatusCode());
        assertValidResponsePayload(204, response.getData());
    }

    @Test
    public void cancelServiceJobByServiceJobIdTest() throws Exception {
        instructBackendMock("cancelServiceJobByServiceJobId", "200");
        String serviceJobId = "";
        String cancellationReasonCode = "";

        ApiResponse<CancelServiceJobByServiceJobIdResponse> response = api.cancelServiceJobByServiceJobIdWithHttpInfo(serviceJobId, cancellationReasonCode);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void completeServiceJobByServiceJobIdTest() throws Exception {
        instructBackendMock("completeServiceJobByServiceJobId", "200");
        String serviceJobId = "";

        ApiResponse<CompleteServiceJobByServiceJobIdResponse> response = api.completeServiceJobByServiceJobIdWithHttpInfo(serviceJobId);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void createReservationTest() throws Exception {
        instructBackendMock("createReservation", "200");
        CreateReservationRequest body = new CreateReservationRequest();
        List<String> marketplaceIds = new ArrayList<>();

        ApiResponse<CreateReservationResponse> response = api.createReservationWithHttpInfo(body, marketplaceIds);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void createServiceDocumentUploadDestinationTest() throws Exception {
        instructBackendMock("createServiceDocumentUploadDestination", "200");
        ServiceUploadDocument body = new ServiceUploadDocument();

        ApiResponse<CreateServiceDocumentUploadDestination> response = api.createServiceDocumentUploadDestinationWithHttpInfo(body);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getAppointmentSlotsTest() throws Exception {
        instructBackendMock("getAppointmentSlots", "200");
        String asin = "";
        String storeId = "";
        List<String> marketplaceIds = new ArrayList<>();

        ApiResponse<GetAppointmentSlotsResponse> response = api.getAppointmentSlotsWithHttpInfo(asin, storeId, marketplaceIds, null, null);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getAppointmmentSlotsByJobIdTest() throws Exception {
        instructBackendMock("getAppointmmentSlotsByJobId", "200");
        String serviceJobId = "";
        List<String> marketplaceIds = new ArrayList<>();

        ApiResponse<GetAppointmentSlotsResponse> response = api.getAppointmmentSlotsByJobIdWithHttpInfo(serviceJobId, marketplaceIds, null, null);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getFixedSlotCapacityTest() throws Exception {
        instructBackendMock("getFixedSlotCapacity", "200");
        FixedSlotCapacityQuery body = new FixedSlotCapacityQuery();
        String resourceId = "";
        List<String> marketplaceIds = new ArrayList<>();

        ApiResponse<FixedSlotCapacity> response = api.getFixedSlotCapacityWithHttpInfo(body, resourceId, marketplaceIds, null);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getRangeSlotCapacityTest() throws Exception {
        instructBackendMock("getRangeSlotCapacity", "200");
        RangeSlotCapacityQuery body = new RangeSlotCapacityQuery();
        String resourceId = "";
        List<String> marketplaceIds = new ArrayList<>();

        ApiResponse<RangeSlotCapacity> response = api.getRangeSlotCapacityWithHttpInfo(body, resourceId, marketplaceIds, null);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getServiceJobByServiceJobIdTest() throws Exception {
        instructBackendMock("getServiceJobByServiceJobId", "200");
        String serviceJobId = "";

        ApiResponse<GetServiceJobByServiceJobIdResponse> response = api.getServiceJobByServiceJobIdWithHttpInfo(serviceJobId);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getServiceJobsTest() throws Exception {
        instructBackendMock("getServiceJobs", "200");
        List<String> marketplaceIds = new ArrayList<>();

        ApiResponse<GetServiceJobsResponse> response = api.getServiceJobsWithHttpInfo(marketplaceIds, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void rescheduleAppointmentForServiceJobByServiceJobIdTest() throws Exception {
        instructBackendMock("rescheduleAppointmentForServiceJobByServiceJobId", "200");
        RescheduleAppointmentRequest body = new RescheduleAppointmentRequest();
        String serviceJobId = "";
        String appointmentId = "";

        ApiResponse<SetAppointmentResponse> response = api.rescheduleAppointmentForServiceJobByServiceJobIdWithHttpInfo(body, serviceJobId, appointmentId);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void setAppointmentFulfillmentDataTest() throws Exception {
        instructBackendMock("setAppointmentFulfillmentData", "204");
        SetAppointmentFulfillmentDataRequest body = new SetAppointmentFulfillmentDataRequest();
        String serviceJobId = "";
        String appointmentId = "";

        ApiResponse<String> response = api.setAppointmentFulfillmentDataWithHttpInfo(body, serviceJobId, appointmentId);

        assertEquals(204, response.getStatusCode());
        assertValidResponsePayload(204, response.getData());
    }

    @Test
    public void updateReservationTest() throws Exception {
        instructBackendMock("updateReservation", "200");
        UpdateReservationRequest body = new UpdateReservationRequest();
        String reservationId = "";
        List<String> marketplaceIds = new ArrayList<>();

        ApiResponse<UpdateReservationResponse> response = api.updateReservationWithHttpInfo(body, reservationId, marketplaceIds);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void updateScheduleTest() throws Exception {
        instructBackendMock("updateSchedule", "200");
        UpdateScheduleRequest body = new UpdateScheduleRequest();
        String resourceId = "";
        List<String> marketplaceIds = new ArrayList<>();

        ApiResponse<UpdateScheduleResponse> response = api.updateScheduleWithHttpInfo(body, resourceId, marketplaceIds);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }


    private void instructBackendMock(String response, String code) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
              .uri(new URI(endpoint + "/response/" + response + "/code/" + code))
              .POST(HttpRequest.BodyPublishers.noBody())
              .build();

        HttpClient.newHttpClient().send(request, BodyHandlers.discarding());
    }

    private static void assertValidResponsePayload(int statusCode, Object body) {
        if(statusCode != 204) assertNotNull(body);
    }
}
