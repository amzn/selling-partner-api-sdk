/*
 * Selling Partner API for Pricing
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * OpenAPI spec version: v0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package com.amazon.SellingPartnerAPI.api.pricing.v0;

import com.amazon.SellingPartnerAPI.ApiResponse;
import com.amazon.SellingPartnerAPI.api.commons.ApiTest;
import com.amazon.SellingPartnerAPI.models.pricing.v0.Errors;
import com.amazon.SellingPartnerAPI.models.pricing.v0.GetItemOffersBatchRequest;
import com.amazon.SellingPartnerAPI.models.pricing.v0.GetItemOffersBatchResponse;
import com.amazon.SellingPartnerAPI.models.pricing.v0.GetListingOffersBatchRequest;
import com.amazon.SellingPartnerAPI.models.pricing.v0.GetListingOffersBatchResponse;
import com.amazon.SellingPartnerAPI.models.pricing.v0.GetOffersResponse;
import com.amazon.SellingPartnerAPI.models.pricing.v0.GetPricingResponse;
import org.junit.jupiter.api.Test;

import java.util.*;

import static org.junit.jupiter.api.Assertions.*;

public class ProductPricingApiTest extends ApiTest {

private final ProductPricingApi api = new ProductPricingApi.Builder()
    .lwaAuthorizationCredentials(credentials)
    .endpoint(endpoint)
    .build();

    @Test
    public void getCompetitivePricingTest() throws Exception {
        instructBackendMock("getCompetitivePricing", "200");
        String marketplaceId = "";String itemType = "";

        ApiResponse<GetPricingResponse> response = api.getCompetitivePricingWithHttpInfo(marketplaceId, itemType, null, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void getItemOffersTest() throws Exception {
        instructBackendMock("getItemOffers", "200");
        String marketplaceId = "";String itemCondition = "";String asin = "";

        ApiResponse<GetOffersResponse> response = api.getItemOffersWithHttpInfo(marketplaceId, itemCondition, asin, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void getItemOffersBatchTest() throws Exception {
        instructBackendMock("getItemOffersBatch", "200");
        GetItemOffersBatchRequest body = new GetItemOffersBatchRequest();

        ApiResponse<GetItemOffersBatchResponse> response = api.getItemOffersBatchWithHttpInfo(body);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void getListingOffersTest() throws Exception {
        instructBackendMock("getListingOffers", "200");
        String marketplaceId = "";String itemCondition = "";String sellerSKU = "";

        ApiResponse<GetOffersResponse> response = api.getListingOffersWithHttpInfo(marketplaceId, itemCondition, sellerSKU, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void getListingOffersBatchTest() throws Exception {
        instructBackendMock("getListingOffersBatch", "200");
        GetListingOffersBatchRequest body = new GetListingOffersBatchRequest();

        ApiResponse<GetListingOffersBatchResponse> response = api.getListingOffersBatchWithHttpInfo(body);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

    @Test
    public void getPricingTest() throws Exception {
        instructBackendMock("getPricing", "200");
        String marketplaceId = "";String itemType = "";

        ApiResponse<GetPricingResponse> response = api.getPricingWithHttpInfo(marketplaceId, itemType, null, null, null, null);

        assertEquals(200, response.getStatusCode());
        if(200 != 204) assertNotNull(response.getData());
    }

}