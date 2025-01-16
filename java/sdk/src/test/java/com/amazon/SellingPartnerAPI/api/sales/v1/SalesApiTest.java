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

package com.amazon.SellingPartnerAPI.api.sales.v1;

import com.amazon.SellingPartnerAPI.ApiResponse;
import com.amazon.SellingPartnerAPI.api.commons.ApiTest;
import com.amazon.SellingPartnerAPI.models.sales.v1.GetOrderMetricsResponse;
import org.junit.jupiter.api.Test;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

public class SalesApiTest extends ApiTest {

private final SalesApi api = new SalesApi.Builder()
    .lwaAuthorizationCredentials(credentials)
    .endpoint(endpoint)
    .build();

    @Test
    public void getOrderMetricsTest() throws Exception {
        instructBackendMock("getOrderMetrics", "200");
        List<String> marketplaceIds = new ArrayList<>();String interval = "";String granularity = "";

        ApiResponse<GetOrderMetricsResponse> response = api.getOrderMetricsWithHttpInfo(marketplaceIds, interval, granularity, null, null, null, null, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

}