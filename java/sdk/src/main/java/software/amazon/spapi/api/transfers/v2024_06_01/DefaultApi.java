/*
 * The Selling Partner API for Transfers.
 * The Selling Partner API for Transfers enables selling partners to retrieve payment methods and initiate payouts for their seller accounts. This API supports the following marketplaces: DE, FR, IT, ES, SE, NL, PL, and BE.
 *
 * OpenAPI spec version: 2024-06-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.api.transfers.v2024_06_01;

import com.amazon.SellingPartnerAPIAA.LWAAccessTokenCache;
import com.amazon.SellingPartnerAPIAA.LWAAccessTokenCacheImpl;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationSigner;
import com.amazon.SellingPartnerAPIAA.LWAException;
import com.google.gson.reflect.TypeToken;
import io.github.bucket4j.Bucket;
import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import software.amazon.spapi.ApiCallback;
import software.amazon.spapi.ApiClient;
import software.amazon.spapi.ApiException;
import software.amazon.spapi.ApiResponse;
import software.amazon.spapi.Configuration;
import software.amazon.spapi.Pair;
import software.amazon.spapi.ProgressRequestBody;
import software.amazon.spapi.ProgressResponseBody;
import software.amazon.spapi.StringUtil;
import software.amazon.spapi.models.transfers.v2024_06_01.GetPaymentMethodsResponse;
import software.amazon.spapi.models.transfers.v2024_06_01.InitiatePayoutRequest;
import software.amazon.spapi.models.transfers.v2024_06_01.InitiatePayoutResponse;

public class DefaultApi {
    private ApiClient apiClient;

    public DefaultApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    private final Configuration config = Configuration.get();

    private final Bucket getPaymentMethodsBucket = Bucket.builder()
            .addLimit(config.getLimit("DefaultApi-getPaymentMethods"))
            .build();

    private final Bucket initiatePayoutBucket = Bucket.builder()
            .addLimit(config.getLimit("DefaultApi-initiatePayout"))
            .build();

    private okhttp3.Call getPaymentMethodsCall(
            String marketplaceId,
            List<String> paymentMethodTypes,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/finances/transfers/2024-06-01/paymentMethods";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (marketplaceId != null)
            localVarQueryParams.addAll(apiClient.parameterToPair("marketplaceId", marketplaceId));
        if (paymentMethodTypes != null)
            localVarCollectionQueryParams.addAll(
                    apiClient.parameterToPairs("csv", "paymentMethodTypes", paymentMethodTypes));

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {"application/json"};
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {};

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
                "GET",
                localVarQueryParams,
                localVarCollectionQueryParams,
                localVarPostBody,
                localVarHeaderParams,
                localVarFormParams,
                localVarAuthNames,
                progressRequestListener);
    }

    private okhttp3.Call getPaymentMethodsValidateBeforeCall(
            String marketplaceId,
            List<String> paymentMethodTypes,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        // verify the required parameter 'marketplaceId' is set
        if (marketplaceId == null) {
            throw new ApiException(
                    "Missing the required parameter 'marketplaceId' when calling getPaymentMethods(Async)");
        }

        return getPaymentMethodsCall(marketplaceId, paymentMethodTypes, progressListener, progressRequestListener);
    }

    /**
     * Returns the list of payment methods for the seller, which can be filtered by method type. **Usage Plan:** | Rate
     * (requests per second) | Burst | | ---- | ---- | | .5 | 30 | The &#x60;x-amzn-RateLimit-Limit&#x60; response
     * header contains the usage plan rate limits for the operation, when available. The preceding table contains the
     * default rate and burst values for this operation. Selling partners whose business demands require higher
     * throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage
     * Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param marketplaceId The identifier of the marketplace from which you want to retrieve payment methods. For the
     *     list of possible marketplace identifiers, refer to [Marketplace
     *     IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). (required)
     * @param paymentMethodTypes A comma-separated list of the payment method types you want to include in the response.
     *     (optional)
     * @return GetPaymentMethodsResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public GetPaymentMethodsResponse getPaymentMethods(String marketplaceId, List<String> paymentMethodTypes)
            throws ApiException, LWAException {
        ApiResponse<GetPaymentMethodsResponse> resp = getPaymentMethodsWithHttpInfo(marketplaceId, paymentMethodTypes);
        return resp.getData();
    }

    /**
     * Returns the list of payment methods for the seller, which can be filtered by method type. **Usage Plan:** | Rate
     * (requests per second) | Burst | | ---- | ---- | | .5 | 30 | The &#x60;x-amzn-RateLimit-Limit&#x60; response
     * header contains the usage plan rate limits for the operation, when available. The preceding table contains the
     * default rate and burst values for this operation. Selling partners whose business demands require higher
     * throughput might have higher rate and burst values than those shown here. For more information, refer to [Usage
     * Plans and Rate Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param marketplaceId The identifier of the marketplace from which you want to retrieve payment methods. For the
     *     list of possible marketplace identifiers, refer to [Marketplace
     *     IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). (required)
     * @param paymentMethodTypes A comma-separated list of the payment method types you want to include in the response.
     *     (optional)
     * @return ApiResponse&lt;GetPaymentMethodsResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ApiResponse<GetPaymentMethodsResponse> getPaymentMethodsWithHttpInfo(
            String marketplaceId, List<String> paymentMethodTypes) throws ApiException, LWAException {
        okhttp3.Call call = getPaymentMethodsValidateBeforeCall(marketplaceId, paymentMethodTypes, null, null);
        if (getPaymentMethodsBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<GetPaymentMethodsResponse>() {}.getType();
            return apiClient.execute(call, localVarReturnType);
        } else throw new ApiException.RateLimitExceeded("getPaymentMethods operation exceeds rate limit");
    }

    /**
     * (asynchronously) Returns the list of payment methods for the seller, which can be filtered by method type.
     * **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | .5 | 30 | The
     * &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when
     * available. The preceding table contains the default rate and burst values for this operation. Selling partners
     * whose business demands require higher throughput might have higher rate and burst values than those shown here.
     * For more information, refer to [Usage Plans and Rate
     * Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param marketplaceId The identifier of the marketplace from which you want to retrieve payment methods. For the
     *     list of possible marketplace identifiers, refer to [Marketplace
     *     IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids). (required)
     * @param paymentMethodTypes A comma-separated list of the payment method types you want to include in the response.
     *     (optional)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call getPaymentMethodsAsync(
            String marketplaceId,
            List<String> paymentMethodTypes,
            final ApiCallback<GetPaymentMethodsResponse> callback)
            throws ApiException, LWAException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = callback::onDownloadProgress;
            progressRequestListener = callback::onUploadProgress;
        }

        okhttp3.Call call = getPaymentMethodsValidateBeforeCall(
                marketplaceId, paymentMethodTypes, progressListener, progressRequestListener);
        if (getPaymentMethodsBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<GetPaymentMethodsResponse>() {}.getType();
            apiClient.executeAsync(call, localVarReturnType, callback);
            return call;
        } else throw new ApiException.RateLimitExceeded("getPaymentMethods operation exceeds rate limit");
    }

    private okhttp3.Call initiatePayoutCall(
            InitiatePayoutRequest body,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/finances/transfers/2024-06-01/payouts";

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

    private okhttp3.Call initiatePayoutValidateBeforeCall(
            InitiatePayoutRequest body,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling initiatePayout(Async)");
        }

        return initiatePayoutCall(body, progressListener, progressRequestListener);
    }

    /**
     * Initiates an on-demand payout to the seller&#x27;s default deposit method in Seller Central for the given
     * &#x60;marketplaceId&#x60; and &#x60;accountType&#x60;, if eligible. You can only initiate one on-demand payout
     * for each marketplace and account type within a 24-hour period. **Usage Plan:** | Rate (requests per second) |
     * Burst | | ---- | ---- | | 0.017 | 2 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage
     * plan rate limits for the operation, when available. The preceding table contains the default rate and burst
     * values for this operation. Selling partners whose business demands require higher throughput might have higher
     * rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate
     * Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body The request body for the &#x60;initiatePayout&#x60; operation. (required)
     * @return InitiatePayoutResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public InitiatePayoutResponse initiatePayout(InitiatePayoutRequest body) throws ApiException, LWAException {
        ApiResponse<InitiatePayoutResponse> resp = initiatePayoutWithHttpInfo(body);
        return resp.getData();
    }

    /**
     * Initiates an on-demand payout to the seller&#x27;s default deposit method in Seller Central for the given
     * &#x60;marketplaceId&#x60; and &#x60;accountType&#x60;, if eligible. You can only initiate one on-demand payout
     * for each marketplace and account type within a 24-hour period. **Usage Plan:** | Rate (requests per second) |
     * Burst | | ---- | ---- | | 0.017 | 2 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage
     * plan rate limits for the operation, when available. The preceding table contains the default rate and burst
     * values for this operation. Selling partners whose business demands require higher throughput might have higher
     * rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate
     * Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body The request body for the &#x60;initiatePayout&#x60; operation. (required)
     * @return ApiResponse&lt;InitiatePayoutResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ApiResponse<InitiatePayoutResponse> initiatePayoutWithHttpInfo(InitiatePayoutRequest body)
            throws ApiException, LWAException {
        okhttp3.Call call = initiatePayoutValidateBeforeCall(body, null, null);
        if (initiatePayoutBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<InitiatePayoutResponse>() {}.getType();
            return apiClient.execute(call, localVarReturnType);
        } else throw new ApiException.RateLimitExceeded("initiatePayout operation exceeds rate limit");
    }

    /**
     * (asynchronously) Initiates an on-demand payout to the seller&#x27;s default deposit method in Seller Central for
     * the given &#x60;marketplaceId&#x60; and &#x60;accountType&#x60;, if eligible. You can only initiate one on-demand
     * payout for each marketplace and account type within a 24-hour period. **Usage Plan:** | Rate (requests per
     * second) | Burst | | ---- | ---- | | 0.017 | 2 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains
     * the usage plan rate limits for the operation, when available. The preceding table contains the default rate and
     * burst values for this operation. Selling partners whose business demands require higher throughput might have
     * higher rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate
     * Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body The request body for the &#x60;initiatePayout&#x60; operation. (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call initiatePayoutAsync(
            InitiatePayoutRequest body, final ApiCallback<InitiatePayoutResponse> callback)
            throws ApiException, LWAException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = callback::onDownloadProgress;
            progressRequestListener = callback::onUploadProgress;
        }

        okhttp3.Call call = initiatePayoutValidateBeforeCall(body, progressListener, progressRequestListener);
        if (initiatePayoutBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<InitiatePayoutResponse>() {}.getType();
            apiClient.executeAsync(call, localVarReturnType, callback);
            return call;
        } else throw new ApiException.RateLimitExceeded("initiatePayout operation exceeds rate limit");
    }

    public static class Builder {
        private LWAAuthorizationCredentials lwaAuthorizationCredentials;
        private String endpoint;
        private LWAAccessTokenCache lwaAccessTokenCache;
        private Boolean disableAccessTokenCache = false;

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

        public DefaultApi build() {
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

            return new DefaultApi(new ApiClient()
                    .setLWAAuthorizationSigner(lwaAuthorizationSigner)
                    .setBasePath(endpoint));
        }
    }
}
