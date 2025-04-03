/*
 * Selling Partner API for Uploads
 * The Uploads API lets you upload files that you can programmatically access using other Selling Partner APIs, such as the A+ Content API and the Messaging API.
 *
 * OpenAPI spec version: 2020-11-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.api.uploads.v2020_11_01;

import com.amazon.SellingPartnerAPIAA.LWAAccessTokenCache;
import com.amazon.SellingPartnerAPIAA.LWAAccessTokenCacheImpl;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationCredentials;
import com.amazon.SellingPartnerAPIAA.LWAAuthorizationSigner;
import com.amazon.SellingPartnerAPIAA.LWAException;
import com.amazon.SellingPartnerAPIAA.RateLimitConfiguration;
import com.google.gson.reflect.TypeToken;
import java.lang.reflect.Type;
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
import software.amazon.spapi.models.uploads.v2020_11_01.CreateUploadDestinationResponse;

public class UploadsApi {
    private ApiClient apiClient;

    public UploadsApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for createUploadDestinationForResource
     *
     * @param marketplaceIds The marketplace ID is the globally unique identifier of a marketplace. To find the ID for
     *     your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     *     (required)
     * @param contentMD5 An MD5 hash of the content to be submitted to the upload destination. This value is used to
     *     determine if the data has been corrupted or tampered with during transit. (required)
     * @param resource The upload destination for your resource. For example, if you create an upload destination for
     *     the &#x60;createLegalDisclosure&#x60; operation of the Messaging API, the &#x60;{resource}&#x60; would be
     *     &#x60;/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure&#x60;, and the entire path would be
     *     &#x60;/uploads/2020-11-01/uploadDestinations/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure&#x60;.
     *     If you create an upload destination for an Aplus content document, the &#x60;{resource}&#x60; would be
     *     &#x60;aplus/2020-11-01/contentDocuments&#x60; and the path would be
     *     &#x60;/uploads/2020-11-01/uploadDestinations/aplus/2020-11-01/contentDocuments&#x60;. (required)
     * @param contentType The content type of the file you upload. (optional)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call createUploadDestinationForResourceCall(
            List<String> marketplaceIds,
            String contentMD5,
            String resource,
            String contentType,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/uploads/2020-11-01/uploadDestinations/{resource}"
                .replaceAll("\\{" + "resource" + "\\}", apiClient.escapeString(resource.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (marketplaceIds != null)
            localVarCollectionQueryParams.addAll(apiClient.parameterToPairs("csv", "marketplaceIds", marketplaceIds));
        if (contentMD5 != null) localVarQueryParams.addAll(apiClient.parameterToPair("contentMD5", contentMD5));
        if (contentType != null) localVarQueryParams.addAll(apiClient.parameterToPair("contentType", contentType));

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
                "POST",
                localVarQueryParams,
                localVarCollectionQueryParams,
                localVarPostBody,
                localVarHeaderParams,
                localVarFormParams,
                localVarAuthNames,
                progressRequestListener);
    }

    private okhttp3.Call createUploadDestinationForResourceValidateBeforeCall(
            List<String> marketplaceIds,
            String contentMD5,
            String resource,
            String contentType,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        // verify the required parameter 'marketplaceIds' is set
        if (marketplaceIds == null) {
            throw new ApiException(
                    "Missing the required parameter 'marketplaceIds' when calling createUploadDestinationForResource(Async)");
        }
        // verify the required parameter 'contentMD5' is set
        if (contentMD5 == null) {
            throw new ApiException(
                    "Missing the required parameter 'contentMD5' when calling createUploadDestinationForResource(Async)");
        }
        // verify the required parameter 'resource' is set
        if (resource == null) {
            throw new ApiException(
                    "Missing the required parameter 'resource' when calling createUploadDestinationForResource(Async)");
        }

        return createUploadDestinationForResourceCall(
                marketplaceIds, contentMD5, resource, contentType, progressListener, progressRequestListener);
    }

    /**
     * Creates an upload destination, returning the information required to upload a file to the destination and to
     * programmatically access the file. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 |
     * 10 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied
     * to the requested operation, when available. The table above indicates the default rate and burst values for this
     * operation. Selling partners whose business demands require higher throughput may see higher rate and burst values
     * than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner
     * API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param marketplaceIds The marketplace ID is the globally unique identifier of a marketplace. To find the ID for
     *     your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     *     (required)
     * @param contentMD5 An MD5 hash of the content to be submitted to the upload destination. This value is used to
     *     determine if the data has been corrupted or tampered with during transit. (required)
     * @param resource The upload destination for your resource. For example, if you create an upload destination for
     *     the &#x60;createLegalDisclosure&#x60; operation of the Messaging API, the &#x60;{resource}&#x60; would be
     *     &#x60;/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure&#x60;, and the entire path would be
     *     &#x60;/uploads/2020-11-01/uploadDestinations/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure&#x60;.
     *     If you create an upload destination for an Aplus content document, the &#x60;{resource}&#x60; would be
     *     &#x60;aplus/2020-11-01/contentDocuments&#x60; and the path would be
     *     &#x60;/uploads/2020-11-01/uploadDestinations/aplus/2020-11-01/contentDocuments&#x60;. (required)
     * @param contentType The content type of the file you upload. (optional)
     * @return CreateUploadDestinationResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public CreateUploadDestinationResponse createUploadDestinationForResource(
            List<String> marketplaceIds, String contentMD5, String resource, String contentType)
            throws ApiException, LWAException {
        ApiResponse<CreateUploadDestinationResponse> resp =
                createUploadDestinationForResourceWithHttpInfo(marketplaceIds, contentMD5, resource, contentType);
        return resp.getData();
    }

    /**
     * Creates an upload destination, returning the information required to upload a file to the destination and to
     * programmatically access the file. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 10 |
     * 10 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied
     * to the requested operation, when available. The table above indicates the default rate and burst values for this
     * operation. Selling partners whose business demands require higher throughput may see higher rate and burst values
     * than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner
     * API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param marketplaceIds The marketplace ID is the globally unique identifier of a marketplace. To find the ID for
     *     your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     *     (required)
     * @param contentMD5 An MD5 hash of the content to be submitted to the upload destination. This value is used to
     *     determine if the data has been corrupted or tampered with during transit. (required)
     * @param resource The upload destination for your resource. For example, if you create an upload destination for
     *     the &#x60;createLegalDisclosure&#x60; operation of the Messaging API, the &#x60;{resource}&#x60; would be
     *     &#x60;/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure&#x60;, and the entire path would be
     *     &#x60;/uploads/2020-11-01/uploadDestinations/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure&#x60;.
     *     If you create an upload destination for an Aplus content document, the &#x60;{resource}&#x60; would be
     *     &#x60;aplus/2020-11-01/contentDocuments&#x60; and the path would be
     *     &#x60;/uploads/2020-11-01/uploadDestinations/aplus/2020-11-01/contentDocuments&#x60;. (required)
     * @param contentType The content type of the file you upload. (optional)
     * @return ApiResponse&lt;CreateUploadDestinationResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ApiResponse<CreateUploadDestinationResponse> createUploadDestinationForResourceWithHttpInfo(
            List<String> marketplaceIds, String contentMD5, String resource, String contentType)
            throws ApiException, LWAException {
        okhttp3.Call call = createUploadDestinationForResourceValidateBeforeCall(
                marketplaceIds, contentMD5, resource, contentType, null, null);
        Type localVarReturnType = new TypeToken<CreateUploadDestinationResponse>() {}.getType();
        return apiClient.execute(call, localVarReturnType);
    }

    /**
     * (asynchronously) Creates an upload destination, returning the information required to upload a file to the
     * destination and to programmatically access the file. **Usage Plan:** | Rate (requests per second) | Burst | |
     * ---- | ---- | | 10 | 10 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate
     * limits that were applied to the requested operation, when available. The table above indicates the default rate
     * and burst values for this operation. Selling partners whose business demands require higher throughput may see
     * higher rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the
     * Selling Partner API](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param marketplaceIds The marketplace ID is the globally unique identifier of a marketplace. To find the ID for
     *     your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     *     (required)
     * @param contentMD5 An MD5 hash of the content to be submitted to the upload destination. This value is used to
     *     determine if the data has been corrupted or tampered with during transit. (required)
     * @param resource The upload destination for your resource. For example, if you create an upload destination for
     *     the &#x60;createLegalDisclosure&#x60; operation of the Messaging API, the &#x60;{resource}&#x60; would be
     *     &#x60;/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure&#x60;, and the entire path would be
     *     &#x60;/uploads/2020-11-01/uploadDestinations/messaging/v1/orders/{amazonOrderId}/messages/legalDisclosure&#x60;.
     *     If you create an upload destination for an Aplus content document, the &#x60;{resource}&#x60; would be
     *     &#x60;aplus/2020-11-01/contentDocuments&#x60; and the path would be
     *     &#x60;/uploads/2020-11-01/uploadDestinations/aplus/2020-11-01/contentDocuments&#x60;. (required)
     * @param contentType The content type of the file you upload. (optional)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call createUploadDestinationForResourceAsync(
            List<String> marketplaceIds,
            String contentMD5,
            String resource,
            String contentType,
            final ApiCallback<CreateUploadDestinationResponse> callback)
            throws ApiException, LWAException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = callback::onDownloadProgress;
            progressRequestListener = callback::onUploadProgress;
        }

        okhttp3.Call call = createUploadDestinationForResourceValidateBeforeCall(
                marketplaceIds, contentMD5, resource, contentType, progressListener, progressRequestListener);
        Type localVarReturnType = new TypeToken<CreateUploadDestinationResponse>() {}.getType();
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

        public UploadsApi build() {
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

            return new UploadsApi(new ApiClient()
                    .setLWAAuthorizationSigner(lwaAuthorizationSigner)
                    .setBasePath(endpoint)
                    .setRateLimiter(rateLimitConfiguration));
        }
    }
}
