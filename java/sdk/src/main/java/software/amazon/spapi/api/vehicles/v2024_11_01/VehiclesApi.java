/*
 * The Selling Partner API for Automotive.
 * The Selling Partner API for Automotive provides programmatic access to information needed by selling partners to provide compatibility information about their listed products.
 *
 * OpenAPI spec version: 2024-11-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.api.vehicles.v2024_11_01;

import com.amazon.SellingPartnerAPIAA.LWAAccessTokenCache;
import com.amazon.SellingPartnerAPIAA.LWAAccessTokenCacheImpl;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationSigner;
import com.amazon.SellingPartnerAPIAA.LWAException;
import com.amazon.SellingPartnerAPIAA.RateLimitConfiguration;
import com.google.gson.reflect.TypeToken;
import java.io.IOException;
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
import software.amazon.spapi.models.vehicles.v2024_11_01.VehiclesResponse;

public class VehiclesApi {
    private ApiClient apiClient;

    VehiclesApi() {
        this(Configuration.getDefaultApiClient());
    }

    public VehiclesApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for getVehicles
     *
     * @param marketplaceId An identifier for the marketplace in which the resource operates. (required)
     * @param vehicleType An identifier for vehicle type. (required)
     * @param pageToken A token to fetch a certain page when there are multiple pages worth of results. (optional)
     * @param updatedAfter Date in ISO 8601 format, if provided only vehicles which are modified/added to Amazon&#x27;s
     *     catalog after this date will be returned. (optional)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call getVehiclesCall(
            String marketplaceId,
            String vehicleType,
            String pageToken,
            String updatedAfter,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/catalog/2024-11-01/automotive/vehicles";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (pageToken != null) localVarQueryParams.addAll(apiClient.parameterToPair("pageToken", pageToken));
        if (marketplaceId != null)
            localVarQueryParams.addAll(apiClient.parameterToPair("marketplaceId", marketplaceId));
        if (vehicleType != null) localVarQueryParams.addAll(apiClient.parameterToPair("vehicleType", vehicleType));
        if (updatedAfter != null) localVarQueryParams.addAll(apiClient.parameterToPair("updatedAfter", updatedAfter));

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {"application/json"};
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {};

        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if (progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new okhttp3.Interceptor() {
                @Override
                public okhttp3.Response intercept(okhttp3.Interceptor.Chain chain) throws IOException {
                    okhttp3.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse
                            .newBuilder()
                            .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                            .build();
                }
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

    @SuppressWarnings("rawtypes")
    private okhttp3.Call getVehiclesValidateBeforeCall(
            String marketplaceId,
            String vehicleType,
            String pageToken,
            String updatedAfter,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        // verify the required parameter 'marketplaceId' is set
        if (marketplaceId == null) {
            throw new ApiException("Missing the required parameter 'marketplaceId' when calling getVehicles(Async)");
        }
        // verify the required parameter 'vehicleType' is set
        if (vehicleType == null) {
            throw new ApiException("Missing the required parameter 'vehicleType' when calling getVehicles(Async)");
        }

        okhttp3.Call call = getVehiclesCall(
                marketplaceId, vehicleType, pageToken, updatedAfter, progressListener, progressRequestListener);
        return call;
    }

    /**
     * Get the latest collection of vehicles
     *
     * @param marketplaceId An identifier for the marketplace in which the resource operates. (required)
     * @param vehicleType An identifier for vehicle type. (required)
     * @param pageToken A token to fetch a certain page when there are multiple pages worth of results. (optional)
     * @param updatedAfter Date in ISO 8601 format, if provided only vehicles which are modified/added to Amazon&#x27;s
     *     catalog after this date will be returned. (optional)
     * @return VehiclesResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public VehiclesResponse getVehicles(String marketplaceId, String vehicleType, String pageToken, String updatedAfter)
            throws ApiException, LWAException {
        ApiResponse<VehiclesResponse> resp =
                getVehiclesWithHttpInfo(marketplaceId, vehicleType, pageToken, updatedAfter);
        return resp.getData();
    }

    /**
     * Get the latest collection of vehicles
     *
     * @param marketplaceId An identifier for the marketplace in which the resource operates. (required)
     * @param vehicleType An identifier for vehicle type. (required)
     * @param pageToken A token to fetch a certain page when there are multiple pages worth of results. (optional)
     * @param updatedAfter Date in ISO 8601 format, if provided only vehicles which are modified/added to Amazon&#x27;s
     *     catalog after this date will be returned. (optional)
     * @return ApiResponse&lt;VehiclesResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ApiResponse<VehiclesResponse> getVehiclesWithHttpInfo(
            String marketplaceId, String vehicleType, String pageToken, String updatedAfter)
            throws ApiException, LWAException {
        okhttp3.Call call =
                getVehiclesValidateBeforeCall(marketplaceId, vehicleType, pageToken, updatedAfter, null, null);
        Type localVarReturnType = new TypeToken<VehiclesResponse>() {}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * (asynchronously) Get the latest collection of vehicles
     *
     * @param marketplaceId An identifier for the marketplace in which the resource operates. (required)
     * @param vehicleType An identifier for vehicle type. (required)
     * @param pageToken A token to fetch a certain page when there are multiple pages worth of results. (optional)
     * @param updatedAfter Date in ISO 8601 format, if provided only vehicles which are modified/added to Amazon&#x27;s
     *     catalog after this date will be returned. (optional)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call getVehiclesAsync(
            String marketplaceId,
            String vehicleType,
            String pageToken,
            String updatedAfter,
            final ApiCallback<VehiclesResponse> callback)
            throws ApiException, LWAException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        okhttp3.Call call = getVehiclesValidateBeforeCall(
                marketplaceId, vehicleType, pageToken, updatedAfter, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<VehiclesResponse>() {}.getType();
        apiClient.executeAsync(call, localVarReturnType, callback);
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

        public VehiclesApi build() {
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

            return new VehiclesApi(new ApiClient()
                    .setLWAAuthorizationSigner(lwaAuthorizationSigner)
                    .setBasePath(endpoint)
                    .setRateLimiter(rateLimitConfiguration));
        }
    }
}
