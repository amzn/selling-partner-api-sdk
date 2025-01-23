/*
 * Selling Partner API for Solicitations
 * With the Solicitations API you can build applications that send non-critical solicitations to buyers. You can get a list of solicitation types that are available for an order that you specify, then call an operation that sends a solicitation to the buyer for that order. Buyers cannot respond to solicitations sent by this API, and these solicitations do not appear in the Messaging section of Seller Central or in the recipient's Message Center. The Solicitations API returns responses that are formed according to the <a href=https://tools.ietf.org/html/draft-kelly-json-hal-08>JSON Hypertext Application Language</a> (HAL) standard.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.api.solicitations.v1;

import com.amazon.SellingPartnerAPI.ApiResponse;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import com.amazon.SellingPartnerAPI.models.solicitations.v1.CreateProductReviewAndSellerFeedbackSolicitationResponse;
import com.amazon.SellingPartnerAPI.models.solicitations.v1.GetSolicitationActionsForOrderResponse;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

public class SolicitationsApiTest {

   private static String endpoint = "http://localhost:3000";
   private static String authEndpoint = "http://localhost:3000/auth/o2/token";
   private static LWAAuthorizationCredentials credentials = LWAAuthorizationCredentials.builder()
        .clientId("clientId")
        .clientSecret("clientSecret")
        .refreshToken("refreshToken")
        .endpoint(authEndpoint)
        .build();

   private final SolicitationsApi api = new SolicitationsApi.Builder()
        .lwaAuthorizationCredentials(credentials)
        .endpoint(endpoint)
        .build();

    @Test
    public void createProductReviewAndSellerFeedbackSolicitationTest() throws Exception {
        instructBackendMock("createProductReviewAndSellerFeedbackSolicitation", "201");
        String amazonOrderId = "";List<String> marketplaceIds = new ArrayList<>();

        ApiResponse<CreateProductReviewAndSellerFeedbackSolicitationResponse> response = api.createProductReviewAndSellerFeedbackSolicitationWithHttpInfo(amazonOrderId, marketplaceIds);

        assertEquals(201, response.getStatusCode());
        if(201 != 204) assertNotNull(response.getData());
    }

    @Test
    public void getSolicitationActionsForOrderTest() throws Exception {
        instructBackendMock("getSolicitationActionsForOrder", "200");
        String amazonOrderId = "";List<String> marketplaceIds = new ArrayList<>();

        ApiResponse<GetSolicitationActionsForOrderResponse> response = api.getSolicitationActionsForOrderWithHttpInfo(amazonOrderId, marketplaceIds);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }


    private void instructBackendMock(String response, String code) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
              .uri(new URI(endpoint + "/response/" + response + "/code/" + code))
              .POST(HttpRequest.BodyPublishers.noBody())
              .build();

        HttpClient.newHttpClient().send(request, BodyHandlers.discarding());
    }
}