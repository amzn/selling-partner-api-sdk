package examples;

import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import software.amazon.spapi.api.orders.v0.OrdersV0Api;
import software.amazon.spapi.api.tokens.v2021_03_01.TokensApi;
import software.amazon.spapi.models.orders.v0.GetOrdersResponse;
import software.amazon.spapi.models.tokens.v2021_03_01.CreateRestrictedDataTokenRequest;
import software.amazon.spapi.models.tokens.v2021_03_01.CreateRestrictedDataTokenResponse;
import software.amazon.spapi.models.tokens.v2021_03_01.RestrictedResource;


import java.util.Arrays;
import java.util.List;

public class GetOrdersWithRestrictedDataToken {

    public static void main(String[] args) {
        try {

            // Set up LWA credentials
            LWAAuthorizationCredentials lwaCredentials = LWAAuthorizationCredentials.builder()
                    .clientId("SP_API_CLIENT_ID")
                    .clientSecret("SP_API_CLIENT_SECRET")
                    .refreshToken("SP_API_REFRESH_TOKEN")
                    .endpoint("https://api.amazon.com/auth/o2/token")
                    .build();

            // Create a restricted resource specifying the API endpoint and required data elements
            RestrictedResource resource = new RestrictedResource();
            resource.setMethod(RestrictedResource.MethodEnum.GET);
            resource.setPath("/orders/v0/orders");
            resource.setDataElements(Arrays.asList("buyerInfo", "shippingAddress"));

            // Get a Restricted Data Token for accessing PII data
            TokensApi tokensApi = new TokensApi.Builder()
                    .lwaAuthorizationCredentials(lwaCredentials)
                    .endpoint("https://sellingpartnerapi-na.amazon.com")
                    .build();

            CreateRestrictedDataTokenRequest request = new CreateRestrictedDataTokenRequest();
            request.setRestrictedResources(Arrays.asList(resource));

            CreateRestrictedDataTokenResponse tokenResponse = tokensApi.createRestrictedDataToken(request);
            String rdtToken = tokenResponse.getRestrictedDataToken();

            // Create Orders API client
            OrdersV0Api ordersApi = new OrdersV0Api.Builder()
                    .lwaAuthorizationCredentials(lwaCredentials)
                    .endpoint("https://sellingpartnerapi-na.amazon.com")
                    .build();

            // Make the API call with RDT token
            List<String> marketplaceIds = Arrays.asList("ATVPDKIKX0DER");
            List<String> orderStatuses = Arrays.asList("Shipped");
            String createdAfter = "2023-01-01T00:00:00Z";


            GetOrdersResponse response = ordersApi.getOrders(
                    marketplaceIds,     // marketplaceIds
                    createdAfter,       // createdAfter
                    null,               // createdBefore
                    null,               // lastUpdatedAfter
                    null,               // lastUpdatedBefore
                    orderStatuses,      // orderStatuses
                    null,               // fulfillmentChannels
                    null,               // paymentMethods
                    null,               // buyerEmail
                    null,               // sellerOrderId
                    100,                // maxResultsPerPage
                    null,               // easyShipShipmentStatuses
                    null,               // electronicInvoiceStatuses
                    null,               // nextToken
                    null,               // amazonOrderIds
                    null,               // actualFulfillmentSupplySourceId
                    null,               // isISPU
                    null,               // storeChainStoreId
                    null,               // earliestDeliveryDateBefore
                    null,               // earliestDeliveryDateAfter
                    null,               // latestDeliveryDateBefore
                    null,               // latestDeliveryDateAfter
                    rdtToken            // restrictedDataToken
            );

            // Process Orders API response
            System.out.println("Order API Response:");
            System.out.println(response);

        } catch (Exception e) {
            System.err.println("Error: " + e.getMessage());
            e.printStackTrace();
        }
    }
}