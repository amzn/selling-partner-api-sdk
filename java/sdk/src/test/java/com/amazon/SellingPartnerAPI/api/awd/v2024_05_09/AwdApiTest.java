/*
 * The Selling Partner API for Amazon Warehousing and Distribution
 * The Selling Partner API for Amazon Warehousing and Distribution (AWD) provides programmatic access to information about AWD shipments and inventory. 
 *
 * OpenAPI spec version: 2024-05-09
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.api.awd.v2024_05_09;

import com.amazon.SellingPartnerAPI.ApiResponse;
import com.amazon.SellingPartnerAPI.api.commons.ApiTest;
import com.amazon.SellingPartnerAPI.models.awd.v2024_05_09.ErrorList;
import com.amazon.SellingPartnerAPI.models.awd.v2024_05_09.InboundShipment;
import com.amazon.SellingPartnerAPI.models.awd.v2024_05_09.InventoryListing;
import org.threeten.bp.OffsetDateTime;
import com.amazon.SellingPartnerAPI.models.awd.v2024_05_09.ShipmentListing;
import org.junit.jupiter.api.Test;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

public class AwdApiTest extends ApiTest {

private final AwdApi api = new AwdApi.Builder()
    .lwaAuthorizationCredentials(credentials)
    .endpoint(endpoint)
    .build();

    @Test
    public void getInboundShipmentTest() throws Exception {
        instructBackendMock("getInboundShipment", "200");
        String shipmentId = "";

        ApiResponse<InboundShipment> response = api.getInboundShipmentWithHttpInfo(shipmentId, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listInboundShipmentsTest() throws Exception {
        instructBackendMock("listInboundShipments", "200");
        

        ApiResponse<ShipmentListing> response = api.listInboundShipmentsWithHttpInfo(null, null, null, null, null, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void listInventoryTest() throws Exception {
        instructBackendMock("listInventory", "200");
        

        ApiResponse<InventoryListing> response = api.listInventoryWithHttpInfo(null, null, null, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

}