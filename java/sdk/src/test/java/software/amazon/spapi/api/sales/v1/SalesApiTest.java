/*
 * Selling Partner API for Sales
 * The Selling Partner API for Sales provides APIs related to sales performance.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.api.sales.v1;

import software.amazon.spapi.ApiResponse;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import org.jeasy.random.EasyRandom;
import org.jeasy.random.EasyRandomParameters;
import org.threeten.bp.LocalDate;
import org.threeten.bp.OffsetDateTime;
import software.amazon.spapi.models.sales.v1.GetOrderMetricsResponse;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.*;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;

public class SalesApiTest {

    private static String endpoint = "http://localhost:3000";
    private static String authEndpoint = "http://localhost:3000/auth/o2/token";
    private static LWAAuthorizationCredentials credentials = LWAAuthorizationCredentials.builder()
        .clientId("clientId")
        .clientSecret("clientSecret")
        .refreshToken("refreshToken")
        .endpoint(authEndpoint)
        .build();

    private final SalesApi api = new SalesApi.Builder()
        .lwaAuthorizationCredentials(credentials)
        .endpoint(endpoint)
        .build();

    private final EasyRandom easyRandom = new EasyRandom(
        new EasyRandomParameters().randomize(OffsetDateTime.class, OffsetDateTime::now)
                .randomize(LocalDate.class, LocalDate::now)
                .collectionSizeRange(1, 2)
    );

    @Test
    public void getOrderMetricsTest() throws Exception {
        instructBackendMock("getOrderMetrics", "200");
        List<String> marketplaceIds = easyRandom.objects(String.class, 2).collect(Collectors.toList());
        String interval = easyRandom.nextObject(String.class);
        String granularity = easyRandom.nextObject(String.class);

        ApiResponse<GetOrderMetricsResponse> response = api.getOrderMetricsWithHttpInfo(marketplaceIds, interval, granularity, null, null, null, null, null, null);

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
