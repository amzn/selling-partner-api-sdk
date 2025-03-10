/*
 * Selling Partner API for Direct Fulfillment Orders
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
 *
 * OpenAPI spec version: 2021-12-28
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.api.vendor.df.orders.v2021_12_28;

import software.amazon.spapi.ApiResponse;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import software.amazon.spapi.models.vendor.df.orders.v2021_12_28.ErrorList;
import org.threeten.bp.OffsetDateTime;
import software.amazon.spapi.models.vendor.df.orders.v2021_12_28.Order;
import software.amazon.spapi.models.vendor.df.orders.v2021_12_28.OrderList;
import software.amazon.spapi.models.vendor.df.orders.v2021_12_28.SubmitAcknowledgementRequest;
import software.amazon.spapi.models.vendor.df.orders.v2021_12_28.TransactionId;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

public class VendorOrdersApiTest {

   private static String endpoint = "http://localhost:3000";
   private static String authEndpoint = "http://localhost:3000/auth/o2/token";
   private static LWAAuthorizationCredentials credentials = LWAAuthorizationCredentials.builder()
        .clientId("clientId")
        .clientSecret("clientSecret")
        .refreshToken("refreshToken")
        .endpoint(authEndpoint)
        .build();

   private final VendorOrdersApi api = new VendorOrdersApi.Builder()
        .lwaAuthorizationCredentials(credentials)
        .endpoint(endpoint)
        .build();

    @Test
    public void getOrderTest() throws Exception {
        instructBackendMock("getOrder", "200");
        String purchaseOrderNumber = "";

        ApiResponse<Order> response = api.getOrderWithHttpInfo(purchaseOrderNumber);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getOrdersTest() throws Exception {
        instructBackendMock("getOrders", "200");
        OffsetDateTime createdAfter = OffsetDateTime.now();
        OffsetDateTime createdBefore = OffsetDateTime.now();

        ApiResponse<OrderList> response = api.getOrdersWithHttpInfo(createdAfter, createdBefore, null, null, null, null, null, null);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void submitAcknowledgementTest() throws Exception {
        instructBackendMock("submitAcknowledgement", "202");
        SubmitAcknowledgementRequest body = new SubmitAcknowledgementRequest();

        ApiResponse<TransactionId> response = api.submitAcknowledgementWithHttpInfo(body);

        assertEquals(202, response.getStatusCode());
        assertValidResponsePayload(202, response.getData());
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
