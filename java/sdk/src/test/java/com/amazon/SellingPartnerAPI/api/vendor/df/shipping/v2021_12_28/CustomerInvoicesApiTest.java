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
import com.amazon.SellingPartnerAPI.models.vendor.df.shipping.v2021_12_28.CustomerInvoice;
import com.amazon.SellingPartnerAPI.models.vendor.df.shipping.v2021_12_28.CustomerInvoiceList;
import com.amazon.SellingPartnerAPI.models.vendor.df.shipping.v2021_12_28.ErrorList;
import org.threeten.bp.OffsetDateTime;
import org.junit.jupiter.api.Test;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

public class CustomerInvoicesApiTest extends ApiTest {

private final CustomerInvoicesApi api = new CustomerInvoicesApi.Builder()
    .lwaAuthorizationCredentials(credentials)
    .endpoint(endpoint)
    .build();

    @Test
    public void getCustomerInvoiceTest() throws Exception {
        instructBackendMock("getCustomerInvoice", "200");
        String purchaseOrderNumber = "";

        ApiResponse<CustomerInvoice> response = api.getCustomerInvoiceWithHttpInfo(purchaseOrderNumber);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void getCustomerInvoicesTest() throws Exception {
        instructBackendMock("getCustomerInvoices", "200");
        OffsetDateTime createdAfter = OffsetDateTime.now();OffsetDateTime createdBefore = OffsetDateTime.now();

        ApiResponse<CustomerInvoiceList> response = api.getCustomerInvoicesWithHttpInfo(createdAfter, createdBefore, null, null, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

}