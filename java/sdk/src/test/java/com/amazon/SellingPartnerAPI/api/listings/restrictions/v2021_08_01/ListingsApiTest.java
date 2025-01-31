/*
 * Selling Partner API for Listings Restrictions
 * The Selling Partner API for Listings Restrictions provides programmatic access to restrictions on Amazon catalog listings.  For more information, see the [Listings Restrictions API Use Case Guide](doc:listings-restrictions-api-v2021-08-01-use-case-guide).
 *
 * OpenAPI spec version: 2021-08-01
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.api.listings.restrictions.v2021_08_01;

import com.amazon.SellingPartnerAPI.ApiResponse;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import com.amazon.SellingPartnerAPI.models.listings.restrictions.v2021_08_01.ErrorList;
import com.amazon.SellingPartnerAPI.models.listings.restrictions.v2021_08_01.RestrictionList;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

public class ListingsApiTest {

   private static String endpoint = "http://localhost:3000";
   private static String authEndpoint = "http://localhost:3000/auth/o2/token";
   private static LWAAuthorizationCredentials credentials = LWAAuthorizationCredentials.builder()
        .clientId("clientId")
        .clientSecret("clientSecret")
        .refreshToken("refreshToken")
        .endpoint(authEndpoint)
        .build();

   private final ListingsApi api = new ListingsApi.Builder()
        .lwaAuthorizationCredentials(credentials)
        .endpoint(endpoint)
        .build();

    @Test
    public void getListingsRestrictionsTest() throws Exception {
        instructBackendMock("getListingsRestrictions", "200");
        String asin = "";
        String sellerId = "";
        List<String> marketplaceIds = new ArrayList<>();

        ApiResponse<RestrictionList> response = api.getListingsRestrictionsWithHttpInfo(asin, sellerId, marketplaceIds, null, null);

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
