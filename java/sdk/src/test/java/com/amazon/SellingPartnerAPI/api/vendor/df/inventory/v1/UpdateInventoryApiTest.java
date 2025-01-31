/*
 * Selling Partner API for Direct Fulfillment Inventory Updates
 * The Selling Partner API for Direct Fulfillment Inventory Updates provides programmatic access to a direct fulfillment vendor's inventory updates.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.api.vendor.df.inventory.v1;

import com.amazon.SellingPartnerAPI.ApiResponse;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import com.amazon.SellingPartnerAPI.models.vendor.df.inventory.v1.SubmitInventoryUpdateRequest;
import com.amazon.SellingPartnerAPI.models.vendor.df.inventory.v1.SubmitInventoryUpdateResponse;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

public class UpdateInventoryApiTest {

   private static String endpoint = "http://localhost:3000";
   private static String authEndpoint = "http://localhost:3000/auth/o2/token";
   private static LWAAuthorizationCredentials credentials = LWAAuthorizationCredentials.builder()
        .clientId("clientId")
        .clientSecret("clientSecret")
        .refreshToken("refreshToken")
        .endpoint(authEndpoint)
        .build();

   private final UpdateInventoryApi api = new UpdateInventoryApi.Builder()
        .lwaAuthorizationCredentials(credentials)
        .endpoint(endpoint)
        .build();

    @Test
    public void submitInventoryUpdateTest() throws Exception {
        instructBackendMock("submitInventoryUpdate", "202");
        SubmitInventoryUpdateRequest body = new SubmitInventoryUpdateRequest();
        String warehouseId = "";

        ApiResponse<SubmitInventoryUpdateResponse> response = api.submitInventoryUpdateWithHttpInfo(body, warehouseId);

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
