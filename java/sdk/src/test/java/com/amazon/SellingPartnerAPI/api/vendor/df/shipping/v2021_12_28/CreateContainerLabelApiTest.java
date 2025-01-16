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

package com.amazon.SellingPartnerAPI.api.vendor.df.shipping.v2021_12_28;

import com.amazon.SellingPartnerAPI.ApiResponse;
import com.amazon.SellingPartnerAPI.api.commons.ApiTest;
import com.amazon.SellingPartnerAPI.models.vendor.df.shipping.v2021_12_28.CreateContainerLabelRequest;
import com.amazon.SellingPartnerAPI.models.vendor.df.shipping.v2021_12_28.CreateContainerLabelResponse;
import com.amazon.SellingPartnerAPI.models.vendor.df.shipping.v2021_12_28.ErrorList;
import org.junit.jupiter.api.Test;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

public class CreateContainerLabelApiTest extends ApiTest {

private final CreateContainerLabelApi api = new CreateContainerLabelApi.Builder()
    .lwaAuthorizationCredentials(credentials)
    .endpoint(endpoint)
    .build();

    @Test
    public void createContainerLabelTest() throws Exception {
        instructBackendMock("createContainerLabel", "200");
        CreateContainerLabelRequest body = new CreateContainerLabelRequest();

        ApiResponse<CreateContainerLabelResponse> response = api.createContainerLabelWithHttpInfo(body);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

}