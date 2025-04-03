/*
 * Selling Partner API for Finances
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.api.finances.v0;

import static org.junit.jupiter.api.Assertions.*;

import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.*;
import org.jeasy.random.EasyRandom;
import org.jeasy.random.EasyRandomParameters;
import org.junit.jupiter.api.Test;
import org.threeten.bp.LocalDate;
import org.threeten.bp.OffsetDateTime;
import software.amazon.spapi.ApiResponse;
import software.amazon.spapi.models.finances.v0.ListFinancialEventGroupsResponse;
import software.amazon.spapi.models.finances.v0.ListFinancialEventsResponse;

public class DefaultApiTest {

    private static final String endpoint = "http://localhost:3000";
    private static final String authEndpoint = "http://localhost:3000/auth/o2/token";
    private static final LWAAuthorizationCredentials credentials = LWAAuthorizationCredentials.builder()
            .clientId("clientId")
            .clientSecret("clientSecret")
            .refreshToken("refreshToken")
            .endpoint(authEndpoint)
            .build();

    private final DefaultApi api = new DefaultApi.Builder()
            .lwaAuthorizationCredentials(credentials)
            .endpoint(endpoint)
            .build();

    private final EasyRandom easyRandom = new EasyRandom(new EasyRandomParameters()
            .randomize(OffsetDateTime.class, OffsetDateTime::now)
            .randomize(LocalDate.class, LocalDate::now)
            .collectionSizeRange(1, 2));

    @Test
    public void listFinancialEventGroupsTest() throws Exception {
        instructBackendMock("listFinancialEventGroups", "200");

        ApiResponse<ListFinancialEventGroupsResponse> response =
                api.listFinancialEventGroupsWithHttpInfo(null, null, null, null);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void listFinancialEventsTest() throws Exception {
        instructBackendMock("listFinancialEvents", "200");

        ApiResponse<ListFinancialEventsResponse> response = api.listFinancialEventsWithHttpInfo(null, null, null, null);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void listFinancialEventsByGroupIdTest() throws Exception {
        instructBackendMock("listFinancialEventsByGroupId", "200");
        String eventGroupId = easyRandom.nextObject(String.class);

        ApiResponse<ListFinancialEventsResponse> response =
                api.listFinancialEventsByGroupIdWithHttpInfo(eventGroupId, null, null, null, null);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void listFinancialEventsByOrderIdTest() throws Exception {
        instructBackendMock("listFinancialEventsByOrderId", "200");
        String orderId = easyRandom.nextObject(String.class);

        ApiResponse<ListFinancialEventsResponse> response =
                api.listFinancialEventsByOrderIdWithHttpInfo(orderId, null, null);

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
        if (statusCode != 204) assertNotNull(body);
    }
}
