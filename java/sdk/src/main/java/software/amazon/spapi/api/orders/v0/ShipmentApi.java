/*
 * Selling Partner API for Orders
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.api.orders.v0;

import com.amazon.SellingPartnerAPIAA.LWAAccessTokenCache;
import com.amazon.SellingPartnerAPIAA.LWAAccessTokenCacheImpl;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationSigner;
import com.amazon.SellingPartnerAPIAA.LWAException;
import com.amazon.SellingPartnerAPIAA.RateLimitConfiguration;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import software.amazon.spapi.ApiCallback;
import software.amazon.spapi.ApiClient;
import software.amazon.spapi.ApiException;
import software.amazon.spapi.ApiResponse;
import software.amazon.spapi.Pair;
import software.amazon.spapi.ProgressRequestBody;
import software.amazon.spapi.ProgressResponseBody;
import software.amazon.spapi.StringUtil;
import software.amazon.spapi.models.orders.v0.UpdateShipmentStatusRequest;

public class ShipmentApi {
    private ApiClient apiClient;

    public ShipmentApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for updateShipmentStatus
     *
     * @param body The request body for the &#x60;updateShipmentStatus&#x60; operation. (required)
     * @param orderId An Amazon-defined order identifier, in 3-7-7 format. (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call updateShipmentStatusCall(
            UpdateShipmentStatusRequest body,
            String orderId,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/orders/v0/orders/{orderId}/shipment"
                .replaceAll("\\{" + "orderId" + "\\}", apiClient.escapeString(orderId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {"application/json"};
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {"application/json"};
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if (progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(chain -> {
                okhttp3.Response originalResponse = chain.proceed(chain.request());
                return originalResponse
                        .newBuilder()
                        .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                        .build();
            });
        }

        String[] localVarAuthNames = new String[] {};
        return apiClient.buildCall(
                localVarPath,
                "POST",
                localVarQueryParams,
                localVarCollectionQueryParams,
                localVarPostBody,
                localVarHeaderParams,
                localVarFormParams,
                localVarAuthNames,
                progressRequestListener);
    }

    private okhttp3.Call updateShipmentStatusValidateBeforeCall(
            UpdateShipmentStatusRequest body,
            String orderId,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling updateShipmentStatus(Async)");
        }
        // verify the required parameter 'orderId' is set
        if (orderId == null) {
            throw new ApiException("Missing the required parameter 'orderId' when calling updateShipmentStatus(Async)");
        }

        return updateShipmentStatusCall(body, orderId, progressListener, progressRequestListener);
    }

    /**
     * Update the shipment status for an order that you specify. **Usage Plan:** | Rate (requests per second) | Burst |
     * | ---- | ---- | | 5 | 15 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate
     * limits that were applied to the requested operation, when available. The preceding table contains the default
     * rate and burst values for this operation. Selling partners whose business demands require higher throughput may
     * receive higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate
     * Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body The request body for the &#x60;updateShipmentStatus&#x60; operation. (required)
     * @param orderId An Amazon-defined order identifier, in 3-7-7 format. (required)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public void updateShipmentStatus(UpdateShipmentStatusRequest body, String orderId)
            throws ApiException, LWAException {
        updateShipmentStatusWithHttpInfo(body, orderId);
    }

    /**
     * Update the shipment status for an order that you specify. **Usage Plan:** | Rate (requests per second) | Burst |
     * | ---- | ---- | | 5 | 15 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate
     * limits that were applied to the requested operation, when available. The preceding table contains the default
     * rate and burst values for this operation. Selling partners whose business demands require higher throughput may
     * receive higher rate and burst values then those shown here. For more information, refer to [Usage Plans and Rate
     * Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body The request body for the &#x60;updateShipmentStatus&#x60; operation. (required)
     * @param orderId An Amazon-defined order identifier, in 3-7-7 format. (required)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ApiResponse<Void> updateShipmentStatusWithHttpInfo(UpdateShipmentStatusRequest body, String orderId)
            throws ApiException, LWAException {
        okhttp3.Call call = updateShipmentStatusValidateBeforeCall(body, orderId, null, null);
        return apiClient.execute(call);
    }

    /**
     * (asynchronously) Update the shipment status for an order that you specify. **Usage Plan:** | Rate (requests per
     * second) | Burst | | ---- | ---- | | 5 | 15 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the
     * usage plan rate limits that were applied to the requested operation, when available. The preceding table contains
     * the default rate and burst values for this operation. Selling partners whose business demands require higher
     * throughput may receive higher rate and burst values then those shown here. For more information, refer to [Usage
     * Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body The request body for the &#x60;updateShipmentStatus&#x60; operation. (required)
     * @param orderId An Amazon-defined order identifier, in 3-7-7 format. (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call updateShipmentStatusAsync(
            UpdateShipmentStatusRequest body, String orderId, final ApiCallback<Void> callback)
            throws ApiException, LWAException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = callback::onDownloadProgress;
            progressRequestListener = callback::onUploadProgress;
        }

        okhttp3.Call call =
                updateShipmentStatusValidateBeforeCall(body, orderId, progressListener, progressRequestListener);
        apiClient.executeAsync(call, callback);
        return call;
    }

    public static class Builder {
        private LWAAuthorizationCredentials lwaAuthorizationCredentials;
        private String endpoint;
        private LWAAccessTokenCache lwaAccessTokenCache;
        private Boolean disableAccessTokenCache = false;
        private RateLimitConfiguration rateLimitConfiguration;

        public Builder lwaAuthorizationCredentials(LWAAuthorizationCredentials lwaAuthorizationCredentials) {
            this.lwaAuthorizationCredentials = lwaAuthorizationCredentials;
            return this;
        }

        public Builder endpoint(String endpoint) {
            this.endpoint = endpoint;
            return this;
        }

        public Builder lwaAccessTokenCache(LWAAccessTokenCache lwaAccessTokenCache) {
            this.lwaAccessTokenCache = lwaAccessTokenCache;
            return this;
        }

        public Builder disableAccessTokenCache() {
            this.disableAccessTokenCache = true;
            return this;
        }

        public Builder rateLimitConfigurationOnRequests(RateLimitConfiguration rateLimitConfiguration) {
            this.rateLimitConfiguration = rateLimitConfiguration;
            return this;
        }

        public Builder disableRateLimitOnRequests() {
            this.rateLimitConfiguration = null;
            return this;
        }

        public ShipmentApi build() {
            if (lwaAuthorizationCredentials == null) {
                throw new RuntimeException("LWAAuthorizationCredentials not set");
            }

            if (StringUtil.isEmpty(endpoint)) {
                throw new RuntimeException("Endpoint not set");
            }

            LWAAuthorizationSigner lwaAuthorizationSigner = null;
            if (disableAccessTokenCache) {
                lwaAuthorizationSigner = new LWAAuthorizationSigner(lwaAuthorizationCredentials);
            } else {
                if (lwaAccessTokenCache == null) {
                    lwaAccessTokenCache = new LWAAccessTokenCacheImpl();
                }
                lwaAuthorizationSigner = new LWAAuthorizationSigner(lwaAuthorizationCredentials, lwaAccessTokenCache);
            }

            return new ShipmentApi(new ApiClient()
                    .setLWAAuthorizationSigner(lwaAuthorizationSigner)
                    .setBasePath(endpoint)
                    .setRateLimiter(rateLimitConfiguration));
        }
    }
}
