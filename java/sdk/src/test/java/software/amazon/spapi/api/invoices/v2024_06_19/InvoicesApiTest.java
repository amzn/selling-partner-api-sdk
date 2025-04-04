/*
 * The Selling Partner API for Invoices.
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
 *
 * OpenAPI spec version: 2024-06-19
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.api.invoices.v2024_06_19;

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
import software.amazon.spapi.models.invoices.v2024_06_19.ExportInvoicesRequest;
import software.amazon.spapi.models.invoices.v2024_06_19.ExportInvoicesResponse;
import software.amazon.spapi.models.invoices.v2024_06_19.GetInvoiceResponse;
import software.amazon.spapi.models.invoices.v2024_06_19.GetInvoicesAttributesResponse;
import software.amazon.spapi.models.invoices.v2024_06_19.GetInvoicesDocumentResponse;
import software.amazon.spapi.models.invoices.v2024_06_19.GetInvoicesExportResponse;
import software.amazon.spapi.models.invoices.v2024_06_19.GetInvoicesExportsResponse;
import software.amazon.spapi.models.invoices.v2024_06_19.GetInvoicesResponse;

public class InvoicesApiTest {

    private static final String endpoint = "http://localhost:3000";
    private static final String authEndpoint = "http://localhost:3000/auth/o2/token";
    private static final LWAAuthorizationCredentials credentials = LWAAuthorizationCredentials.builder()
            .clientId("clientId")
            .clientSecret("clientSecret")
            .refreshToken("refreshToken")
            .endpoint(authEndpoint)
            .build();

    private final InvoicesApi api = new InvoicesApi.Builder()
            .lwaAuthorizationCredentials(credentials)
            .endpoint(endpoint)
            .build();

    private final EasyRandom easyRandom = new EasyRandom(new EasyRandomParameters()
            .randomize(OffsetDateTime.class, OffsetDateTime::now)
            .randomize(LocalDate.class, LocalDate::now)
            .collectionSizeRange(1, 2));

    @Test
    public void createInvoicesExportTest() throws Exception {
        instructBackendMock("createInvoicesExport", "202");
        ExportInvoicesRequest body = easyRandom.nextObject(ExportInvoicesRequest.class);

        ApiResponse<ExportInvoicesResponse> response = api.createInvoicesExportWithHttpInfo(body);

        assertEquals(202, response.getStatusCode());
        assertValidResponsePayload(202, response.getData());
    }

    @Test
    public void getInvoiceTest() throws Exception {
        instructBackendMock("getInvoice", "200");
        String marketplaceId = easyRandom.nextObject(String.class);
        String invoiceId = easyRandom.nextObject(String.class);

        ApiResponse<GetInvoiceResponse> response = api.getInvoiceWithHttpInfo(marketplaceId, invoiceId);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getInvoicesTest() throws Exception {
        instructBackendMock("getInvoices", "200");
        String marketplaceId = easyRandom.nextObject(String.class);

        ApiResponse<GetInvoicesResponse> response = api.getInvoicesWithHttpInfo(
                marketplaceId, null, null, null, null, null, null, null, null, null, null, null, null, null);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getInvoicesAttributesTest() throws Exception {
        instructBackendMock("getInvoicesAttributes", "200");
        String marketplaceId = easyRandom.nextObject(String.class);

        ApiResponse<GetInvoicesAttributesResponse> response = api.getInvoicesAttributesWithHttpInfo(marketplaceId);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getInvoicesDocumentTest() throws Exception {
        instructBackendMock("getInvoicesDocument", "200");
        String invoicesDocumentId = easyRandom.nextObject(String.class);

        ApiResponse<GetInvoicesDocumentResponse> response = api.getInvoicesDocumentWithHttpInfo(invoicesDocumentId);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getInvoicesExportTest() throws Exception {
        instructBackendMock("getInvoicesExport", "200");
        String exportId = easyRandom.nextObject(String.class);

        ApiResponse<GetInvoicesExportResponse> response = api.getInvoicesExportWithHttpInfo(exportId);

        assertEquals(200, response.getStatusCode());
        assertValidResponsePayload(200, response.getData());
    }

    @Test
    public void getInvoicesExportsTest() throws Exception {
        instructBackendMock("getInvoicesExports", "200");
        String marketplaceId = easyRandom.nextObject(String.class);

        ApiResponse<GetInvoicesExportsResponse> response =
                api.getInvoicesExportsWithHttpInfo(marketplaceId, null, null, null, null, null);

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
