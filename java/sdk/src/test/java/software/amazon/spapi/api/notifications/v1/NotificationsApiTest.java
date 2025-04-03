/*
 * Selling Partner API for Notifications
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
 *
 * OpenAPI spec version: v1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.api.notifications.v1;

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
import software.amazon.spapi.models.notifications.v1.CreateDestinationRequest;
import software.amazon.spapi.models.notifications.v1.CreateDestinationResponse;
import software.amazon.spapi.models.notifications.v1.CreateSubscriptionRequest;
import software.amazon.spapi.models.notifications.v1.CreateSubscriptionResponse;
import software.amazon.spapi.models.notifications.v1.DeleteDestinationResponse;
import software.amazon.spapi.models.notifications.v1.DeleteSubscriptionByIdResponse;
import software.amazon.spapi.models.notifications.v1.GetDestinationResponse;
import software.amazon.spapi.models.notifications.v1.GetDestinationsResponse;
import software.amazon.spapi.models.notifications.v1.GetSubscriptionByIdResponse;
import software.amazon.spapi.models.notifications.v1.GetSubscriptionResponse;

public class NotificationsApiTest {

    private static final String endpoint = "http://localhost:3000";
    private static final String authEndpoint = "http://localhost:3000/auth/o2/token";
    private static final LWAAuthorizationCredentials credentials = LWAAuthorizationCredentials.builder()
            .clientId("clientId")
            .clientSecret("clientSecret")
            .refreshToken("refreshToken")
            .endpoint(authEndpoint)
            .build();

    private final NotificationsApi api = new NotificationsApi.Builder()
            .lwaAuthorizationCredentials(credentials)
            .endpoint(endpoint)
            .build();

    private final EasyRandom easyRandom = new EasyRandom(new EasyRandomParameters()
            .randomize(OffsetDateTime.class, OffsetDateTime::now)
            .randomize(LocalDate.class, LocalDate::now)
            .collectionSizeRange(1, 2));

    @Test
    public void createDestinationTest() throws Exception {
        instructBackendMock("createDestination", "200");
        CreateDestinationRequest body = easyRandom.nextObject(CreateDestinationRequest.class);

        ApiResponse<CreateDestinationResponse> response = api.createDestinationWithHttpInfo(body);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void createSubscriptionTest() throws Exception {
        instructBackendMock("createSubscription", "200");
        CreateSubscriptionRequest body = easyRandom.nextObject(CreateSubscriptionRequest.class);
        String notificationType = easyRandom.nextObject(String.class);

        ApiResponse<CreateSubscriptionResponse> response = api.createSubscriptionWithHttpInfo(body, notificationType);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void deleteDestinationTest() throws Exception {
        instructBackendMock("deleteDestination", "200");
        String destinationId = easyRandom.nextObject(String.class);

        ApiResponse<DeleteDestinationResponse> response = api.deleteDestinationWithHttpInfo(destinationId);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void deleteSubscriptionByIdTest() throws Exception {
        instructBackendMock("deleteSubscriptionById", "200");
        String subscriptionId = easyRandom.nextObject(String.class);
        String notificationType = easyRandom.nextObject(String.class);

        ApiResponse<DeleteSubscriptionByIdResponse> response =
                api.deleteSubscriptionByIdWithHttpInfo(subscriptionId, notificationType);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getDestinationTest() throws Exception {
        instructBackendMock("getDestination", "200");
        String destinationId = easyRandom.nextObject(String.class);

        ApiResponse<GetDestinationResponse> response = api.getDestinationWithHttpInfo(destinationId);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getDestinationsTest() throws Exception {
        instructBackendMock("getDestinations", "200");

        ApiResponse<GetDestinationsResponse> response = api.getDestinationsWithHttpInfo();

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getSubscriptionTest() throws Exception {
        instructBackendMock("getSubscription", "200");
        String notificationType = easyRandom.nextObject(String.class);

        ApiResponse<GetSubscriptionResponse> response = api.getSubscriptionWithHttpInfo(notificationType, null);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getSubscriptionByIdTest() throws Exception {
        instructBackendMock("getSubscriptionById", "200");
        String subscriptionId = easyRandom.nextObject(String.class);
        String notificationType = easyRandom.nextObject(String.class);

        ApiResponse<GetSubscriptionByIdResponse> response =
                api.getSubscriptionByIdWithHttpInfo(subscriptionId, notificationType);

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
