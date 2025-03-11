/*
 * Selling Partner API for FBA Inventory
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.api.fba.inventory.v1;

import software.amazon.spapi.ApiResponse;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import org.jeasy.random.EasyRandom;
import org.jeasy.random.EasyRandomParameters;
import org.threeten.bp.LocalDate;
import org.threeten.bp.OffsetDateTime;
import software.amazon.spapi.models.fba.inventory.v1.AddInventoryRequest;
import software.amazon.spapi.models.fba.inventory.v1.AddInventoryResponse;
import software.amazon.spapi.models.fba.inventory.v1.CreateInventoryItemRequest;
import software.amazon.spapi.models.fba.inventory.v1.CreateInventoryItemResponse;
import software.amazon.spapi.models.fba.inventory.v1.DeleteInventoryItemResponse;
import software.amazon.spapi.models.fba.inventory.v1.GetInventorySummariesResponse;
import org.threeten.bp.OffsetDateTime;
import org.junit.jupiter.api.Test;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse.BodyHandlers;
import java.util.*;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;

public class FbaInventoryApiTest {

    private static String endpoint = "http://localhost:3000";
    private static String authEndpoint = "http://localhost:3000/auth/o2/token";
    private static LWAAuthorizationCredentials credentials = LWAAuthorizationCredentials.builder()
        .clientId("clientId")
        .clientSecret("clientSecret")
        .refreshToken("refreshToken")
        .endpoint(authEndpoint)
        .build();

    private final FbaInventoryApi api = new FbaInventoryApi.Builder()
        .lwaAuthorizationCredentials(credentials)
        .endpoint(endpoint)
        .build();

    private final EasyRandom easyRandom = new EasyRandom(
        new EasyRandomParameters().randomize(OffsetDateTime.class, OffsetDateTime::now)
                .randomize(LocalDate.class, LocalDate::now)
                .collectionSizeRange(1, 2)
    );

    @Test
    public void addInventoryTest() throws Exception {
        instructBackendMock("addInventory", "200");
        AddInventoryRequest body = easyRandom.nextObject(AddInventoryRequest.class);
        String xAmznIdempotencyToken = easyRandom.nextObject(String.class);

        ApiResponse<AddInventoryResponse> response = api.addInventoryWithHttpInfo(body, xAmznIdempotencyToken);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void createInventoryItemTest() throws Exception {
        instructBackendMock("createInventoryItem", "200");
        CreateInventoryItemRequest body = easyRandom.nextObject(CreateInventoryItemRequest.class);

        ApiResponse<CreateInventoryItemResponse> response = api.createInventoryItemWithHttpInfo(body);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void deleteInventoryItemTest() throws Exception {
        instructBackendMock("deleteInventoryItem", "200");
        String sellerSku = easyRandom.nextObject(String.class);
        String marketplaceId = easyRandom.nextObject(String.class);

        ApiResponse<DeleteInventoryItemResponse> response = api.deleteInventoryItemWithHttpInfo(sellerSku, marketplaceId);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getInventorySummariesTest() throws Exception {
        instructBackendMock("getInventorySummaries", "200");
        String granularityType = easyRandom.nextObject(String.class);
        String granularityId = easyRandom.nextObject(String.class);
        List<String> marketplaceIds = easyRandom.objects(String.class, 2).collect(Collectors.toList());

        ApiResponse<GetInventorySummariesResponse> response = api.getInventorySummariesWithHttpInfo(granularityType, granularityId, marketplaceIds, null, null, null, null, null);

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
