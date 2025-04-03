/*
 * Selling Partner API for Direct Fulfillment Shipping
 * Use the Selling Partner API for Direct Fulfillment Shipping to access a direct fulfillment vendor's shipping data.
 *
 * OpenAPI spec version: 2021-12-28
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.api.vendor.df.shipping.v2021_12_28;

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
import software.amazon.spapi.models.vendor.df.shipping.v2021_12_28.CreateContainerLabelRequest;
import software.amazon.spapi.models.vendor.df.shipping.v2021_12_28.CreateContainerLabelResponse;

public class CreateContainerLabelApiTest {

    private static final String endpoint = "http://localhost:3000";
    private static final String authEndpoint = "http://localhost:3000/auth/o2/token";
    private static final LWAAuthorizationCredentials credentials = LWAAuthorizationCredentials.builder()
            .clientId("clientId")
            .clientSecret("clientSecret")
            .refreshToken("refreshToken")
            .endpoint(authEndpoint)
            .build();

    private final CreateContainerLabelApi api = new CreateContainerLabelApi.Builder()
            .lwaAuthorizationCredentials(credentials)
            .endpoint(endpoint)
            .build();

    private final EasyRandom easyRandom = new EasyRandom(new EasyRandomParameters()
            .randomize(OffsetDateTime.class, OffsetDateTime::now)
            .randomize(LocalDate.class, LocalDate::now)
            .collectionSizeRange(1, 2));

    @Test
    public void createContainerLabelTest() throws Exception {
        instructBackendMock("createContainerLabel", "200");
        CreateContainerLabelRequest body = easyRandom.nextObject(CreateContainerLabelRequest.class);

        ApiResponse<CreateContainerLabelResponse> response = api.createContainerLabelWithHttpInfo(body);

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
