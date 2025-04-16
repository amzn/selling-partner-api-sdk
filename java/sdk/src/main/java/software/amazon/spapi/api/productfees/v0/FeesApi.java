/*
 * Selling Partner API for Product Fees
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
 *
 * OpenAPI spec version: v0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.api.productfees.v0;

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
import software.amazon.spapi.models.productfees.v0.FeesEstimateByIdRequest;
import software.amazon.spapi.models.productfees.v0.GetMyFeesEstimateRequest;
import software.amazon.spapi.models.productfees.v0.GetMyFeesEstimateResponse;
import software.amazon.spapi.models.productfees.v0.GetMyFeesEstimatesResponse;

public class FeesApi {
    private ApiClient apiClient;

    public FeesApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    private final Configuration config = Configuration.get();

    private final Bucket getMyFeesEstimateForASINBucket = Bucket.builder()
            .addLimit(config.getLimit("FeesApi-getMyFeesEstimateForASIN"))
            .build();

    private final Bucket getMyFeesEstimateForSKUBucket = Bucket.builder()
            .addLimit(config.getLimit("FeesApi-getMyFeesEstimateForSKU"))
            .build();

    private final Bucket getMyFeesEstimatesBucket = Bucket.builder()
            .addLimit(config.getLimit("FeesApi-getMyFeesEstimates"))
            .build();

    private okhttp3.Call getMyFeesEstimateForASINCall(
            GetMyFeesEstimateRequest body,
            String asin,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/products/fees/v0/items/{Asin}/feesEstimate"
                .replaceAll("\\{" + "Asin" + "\\}", apiClient.escapeString(asin.toString()));

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

    private okhttp3.Call getMyFeesEstimateForASINValidateBeforeCall(
            GetMyFeesEstimateRequest body,
            String asin,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException(
                    "Missing the required parameter 'body' when calling getMyFeesEstimateForASIN(Async)");
        }
        // verify the required parameter 'asin' is set
        if (asin == null) {
            throw new ApiException(
                    "Missing the required parameter 'asin' when calling getMyFeesEstimateForASIN(Async)");
        }

        return getMyFeesEstimateForASINCall(body, asin, progressListener, progressRequestListener);
    }

    /**
     * Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the
     * request body. You can call &#x60;getMyFeesEstimateForASIN&#x60; for an item on behalf of a selling partner before
     * the selling partner sets the item&#x27;s price. The selling partner can then take estimated fees into account.
     * Each fees request must include an original identifier. This identifier is included in the fees estimate so you
     * can correlate a fees estimate with the original request. **Note:** This identifier value is used to identify an
     * estimate. Actual costs may vary. Search \&quot;fees\&quot; in [Seller Central](https://sellercentral.amazon.com/)
     * and consult the store-specific fee schedule for the most up-to-date information. **Note:** When using the
     * &#x60;getMyFeesEstimateForASIN&#x60; operation with an ASIN, the fee estimates might be different. This is
     * because these estimates use the item&#x27;s catalog size, which might not always match the actual size of the
     * item sent to Amazon. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 | The
     * &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the
     * requested operation, when available. The table above indicates the default rate and burst values for this
     * operation. Selling partners whose business demands require higher throughput may see higher rate and burst values
     * than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner
     * API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body (required)
     * @param asin The Amazon Standard Identification Number (ASIN) of the item. (required)
     * @return GetMyFeesEstimateResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public GetMyFeesEstimateResponse getMyFeesEstimateForASIN(GetMyFeesEstimateRequest body, String asin)
            throws ApiException, LWAException {
        ApiResponse<GetMyFeesEstimateResponse> resp = getMyFeesEstimateForASINWithHttpInfo(body, asin);
        return resp.getData();
    }

    /**
     * Returns the estimated fees for the item indicated by the specified ASIN in the marketplace specified in the
     * request body. You can call &#x60;getMyFeesEstimateForASIN&#x60; for an item on behalf of a selling partner before
     * the selling partner sets the item&#x27;s price. The selling partner can then take estimated fees into account.
     * Each fees request must include an original identifier. This identifier is included in the fees estimate so you
     * can correlate a fees estimate with the original request. **Note:** This identifier value is used to identify an
     * estimate. Actual costs may vary. Search \&quot;fees\&quot; in [Seller Central](https://sellercentral.amazon.com/)
     * and consult the store-specific fee schedule for the most up-to-date information. **Note:** When using the
     * &#x60;getMyFeesEstimateForASIN&#x60; operation with an ASIN, the fee estimates might be different. This is
     * because these estimates use the item&#x27;s catalog size, which might not always match the actual size of the
     * item sent to Amazon. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 1 | 2 | The
     * &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits that were applied to the
     * requested operation, when available. The table above indicates the default rate and burst values for this
     * operation. Selling partners whose business demands require higher throughput may see higher rate and burst values
     * than those shown here. For more information, see [Usage Plans and Rate Limits in the Selling Partner
     * API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body (required)
     * @param asin The Amazon Standard Identification Number (ASIN) of the item. (required)
     * @return ApiResponse&lt;GetMyFeesEstimateResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ApiResponse<GetMyFeesEstimateResponse> getMyFeesEstimateForASINWithHttpInfo(
            GetMyFeesEstimateRequest body, String asin) throws ApiException, LWAException {
        okhttp3.Call call = getMyFeesEstimateForASINValidateBeforeCall(body, asin, null, null);
        if (getMyFeesEstimateForASINBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<GetMyFeesEstimateResponse>() {}.getType();
            return apiClient.execute(call, localVarReturnType);
        } else throw new ApiException.RateLimitExceeded("getMyFeesEstimateForASIN operation exceeds rate limit");
    }

    /**
     * (asynchronously) Returns the estimated fees for the item indicated by the specified ASIN in the marketplace
     * specified in the request body. You can call &#x60;getMyFeesEstimateForASIN&#x60; for an item on behalf of a
     * selling partner before the selling partner sets the item&#x27;s price. The selling partner can then take
     * estimated fees into account. Each fees request must include an original identifier. This identifier is included
     * in the fees estimate so you can correlate a fees estimate with the original request. **Note:** This identifier
     * value is used to identify an estimate. Actual costs may vary. Search \&quot;fees\&quot; in [Seller
     * Central](https://sellercentral.amazon.com/) and consult the store-specific fee schedule for the most up-to-date
     * information. **Note:** When using the &#x60;getMyFeesEstimateForASIN&#x60; operation with an ASIN, the fee
     * estimates might be different. This is because these estimates use the item&#x27;s catalog size, which might not
     * always match the actual size of the item sent to Amazon. **Usage Plan:** | Rate (requests per second) | Burst | |
     * ---- | ---- | | 1 | 2 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits
     * that were applied to the requested operation, when available. The table above indicates the default rate and
     * burst values for this operation. Selling partners whose business demands require higher throughput may see higher
     * rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the
     * Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body (required)
     * @param asin The Amazon Standard Identification Number (ASIN) of the item. (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call getMyFeesEstimateForASINAsync(
            GetMyFeesEstimateRequest body, String asin, final ApiCallback<GetMyFeesEstimateResponse> callback)
            throws ApiException, LWAException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = callback::onDownloadProgress;
            progressRequestListener = callback::onUploadProgress;
        }

        okhttp3.Call call =
                getMyFeesEstimateForASINValidateBeforeCall(body, asin, progressListener, progressRequestListener);
        if (getMyFeesEstimateForASINBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<GetMyFeesEstimateResponse>() {}.getType();
            apiClient.executeAsync(call, localVarReturnType, callback);
            return call;
        } else throw new ApiException.RateLimitExceeded("getMyFeesEstimateForASIN operation exceeds rate limit");
    }

    private okhttp3.Call getMyFeesEstimateForSKUCall(
            GetMyFeesEstimateRequest body,
            String sellerSKU,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/products/fees/v0/listings/{SellerSKU}/feesEstimate"
                .replaceAll("\\{" + "SellerSKU" + "\\}", apiClient.escapeString(sellerSKU.toString()));

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

    private okhttp3.Call getMyFeesEstimateForSKUValidateBeforeCall(
            GetMyFeesEstimateRequest body,
            String sellerSKU,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling getMyFeesEstimateForSKU(Async)");
        }
        // verify the required parameter 'sellerSKU' is set
        if (sellerSKU == null) {
            throw new ApiException(
                    "Missing the required parameter 'sellerSKU' when calling getMyFeesEstimateForSKU(Async)");
        }

        return getMyFeesEstimateForSKUCall(body, sellerSKU, progressListener, progressRequestListener);
    }

    /**
     * Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the
     * request body. **Note:** The parameters associated with this operation may contain special characters that require
     * URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL
     * Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding). You can call
     * &#x60;getMyFeesEstimateForSKU&#x60; for an item on behalf of a selling partner before the selling partner sets
     * the item&#x27;s price. The selling partner can then take any estimated fees into account. Each fees estimate
     * request must include an original identifier. This identifier is included in the fees estimate so that you can
     * correlate a fees estimate with the original request. **Note:** This identifier value is used to identify an
     * estimate. Actual costs may vary. Search \&quot;fees\&quot; in [Seller Central](https://sellercentral.amazon.com/)
     * and consult the store-specific fee schedule for the most up-to-date information. **Note:** When sellers use the
     * &#x60;getMyFeesEstimateForSKU&#x60; operation with their &#x60;SellerSKU&#x60;, they get accurate fees based on
     * real item measurements, but only after they&#x27;ve sent their items to Amazon. **Usage Plan:** | Rate (requests
     * per second) | Burst | | ---- | ---- | | 1 | 2 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns
     * the usage plan rate limits that were applied to the requested operation, when available. The table above
     * indicates the default rate and burst values for this operation. Selling partners whose business demands require
     * higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage
     * Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body (required)
     * @param sellerSKU Used to identify an item in the given marketplace. SellerSKU is qualified by the seller&#x27;s
     *     SellerId, which is included with every operation that you submit. (required)
     * @return GetMyFeesEstimateResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public GetMyFeesEstimateResponse getMyFeesEstimateForSKU(GetMyFeesEstimateRequest body, String sellerSKU)
            throws ApiException, LWAException {
        ApiResponse<GetMyFeesEstimateResponse> resp = getMyFeesEstimateForSKUWithHttpInfo(body, sellerSKU);
        return resp.getData();
    }

    /**
     * Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace specified in the
     * request body. **Note:** The parameters associated with this operation may contain special characters that require
     * URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL
     * Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding). You can call
     * &#x60;getMyFeesEstimateForSKU&#x60; for an item on behalf of a selling partner before the selling partner sets
     * the item&#x27;s price. The selling partner can then take any estimated fees into account. Each fees estimate
     * request must include an original identifier. This identifier is included in the fees estimate so that you can
     * correlate a fees estimate with the original request. **Note:** This identifier value is used to identify an
     * estimate. Actual costs may vary. Search \&quot;fees\&quot; in [Seller Central](https://sellercentral.amazon.com/)
     * and consult the store-specific fee schedule for the most up-to-date information. **Note:** When sellers use the
     * &#x60;getMyFeesEstimateForSKU&#x60; operation with their &#x60;SellerSKU&#x60;, they get accurate fees based on
     * real item measurements, but only after they&#x27;ve sent their items to Amazon. **Usage Plan:** | Rate (requests
     * per second) | Burst | | ---- | ---- | | 1 | 2 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns
     * the usage plan rate limits that were applied to the requested operation, when available. The table above
     * indicates the default rate and burst values for this operation. Selling partners whose business demands require
     * higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage
     * Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body (required)
     * @param sellerSKU Used to identify an item in the given marketplace. SellerSKU is qualified by the seller&#x27;s
     *     SellerId, which is included with every operation that you submit. (required)
     * @return ApiResponse&lt;GetMyFeesEstimateResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ApiResponse<GetMyFeesEstimateResponse> getMyFeesEstimateForSKUWithHttpInfo(
            GetMyFeesEstimateRequest body, String sellerSKU) throws ApiException, LWAException {
        okhttp3.Call call = getMyFeesEstimateForSKUValidateBeforeCall(body, sellerSKU, null, null);
        if (getMyFeesEstimateForSKUBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<GetMyFeesEstimateResponse>() {}.getType();
            return apiClient.execute(call, localVarReturnType);
        } else throw new ApiException.RateLimitExceeded("getMyFeesEstimateForSKU operation exceeds rate limit");
    }

    /**
     * (asynchronously) Returns the estimated fees for the item indicated by the specified seller SKU in the marketplace
     * specified in the request body. **Note:** The parameters associated with this operation may contain special
     * characters that require URL encoding to call the API. To avoid errors with SKUs when encoding URLs, refer to [URL
     * Encoding](https://developer-docs.amazon.com/sp-api/docs/url-encoding). You can call
     * &#x60;getMyFeesEstimateForSKU&#x60; for an item on behalf of a selling partner before the selling partner sets
     * the item&#x27;s price. The selling partner can then take any estimated fees into account. Each fees estimate
     * request must include an original identifier. This identifier is included in the fees estimate so that you can
     * correlate a fees estimate with the original request. **Note:** This identifier value is used to identify an
     * estimate. Actual costs may vary. Search \&quot;fees\&quot; in [Seller Central](https://sellercentral.amazon.com/)
     * and consult the store-specific fee schedule for the most up-to-date information. **Note:** When sellers use the
     * &#x60;getMyFeesEstimateForSKU&#x60; operation with their &#x60;SellerSKU&#x60;, they get accurate fees based on
     * real item measurements, but only after they&#x27;ve sent their items to Amazon. **Usage Plan:** | Rate (requests
     * per second) | Burst | | ---- | ---- | | 1 | 2 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns
     * the usage plan rate limits that were applied to the requested operation, when available. The table above
     * indicates the default rate and burst values for this operation. Selling partners whose business demands require
     * higher throughput may see higher rate and burst values than those shown here. For more information, see [Usage
     * Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body (required)
     * @param sellerSKU Used to identify an item in the given marketplace. SellerSKU is qualified by the seller&#x27;s
     *     SellerId, which is included with every operation that you submit. (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call getMyFeesEstimateForSKUAsync(
            GetMyFeesEstimateRequest body, String sellerSKU, final ApiCallback<GetMyFeesEstimateResponse> callback)
            throws ApiException, LWAException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = callback::onDownloadProgress;
            progressRequestListener = callback::onUploadProgress;
        }

        okhttp3.Call call =
                getMyFeesEstimateForSKUValidateBeforeCall(body, sellerSKU, progressListener, progressRequestListener);
        if (getMyFeesEstimateForSKUBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<GetMyFeesEstimateResponse>() {}.getType();
            apiClient.executeAsync(call, localVarReturnType, callback);
            return call;
        } else throw new ApiException.RateLimitExceeded("getMyFeesEstimateForSKU operation exceeds rate limit");
    }

    private okhttp3.Call getMyFeesEstimatesCall(
            List<FeesEstimateByIdRequest> body,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/products/fees/v0/feesEstimate";

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

    private okhttp3.Call getMyFeesEstimatesValidateBeforeCall(
            List<FeesEstimateByIdRequest> body,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling getMyFeesEstimates(Async)");
        }

        return getMyFeesEstimatesCall(body, progressListener, progressRequestListener);
    }

    /**
     * Returns the estimated fees for a list of products. **Usage Plan:** | Rate (requests per second) | Burst | | ----
     * | ---- | | 0.5 | 1 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits
     * that were applied to the requested operation, when available. The table above indicates the default rate and
     * burst values for this operation. Selling partners whose business demands require higher throughput may see higher
     * rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the
     * Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body (required)
     * @return GetMyFeesEstimatesResponse
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public GetMyFeesEstimatesResponse getMyFeesEstimates(List<FeesEstimateByIdRequest> body)
            throws ApiException, LWAException {
        ApiResponse<GetMyFeesEstimatesResponse> resp = getMyFeesEstimatesWithHttpInfo(body);
        return resp.getData();
    }

    /**
     * Returns the estimated fees for a list of products. **Usage Plan:** | Rate (requests per second) | Burst | | ----
     * | ---- | | 0.5 | 1 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage plan rate limits
     * that were applied to the requested operation, when available. The table above indicates the default rate and
     * burst values for this operation. Selling partners whose business demands require higher throughput may see higher
     * rate and burst values than those shown here. For more information, see [Usage Plans and Rate Limits in the
     * Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body (required)
     * @return ApiResponse&lt;GetMyFeesEstimatesResponse&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ApiResponse<GetMyFeesEstimatesResponse> getMyFeesEstimatesWithHttpInfo(List<FeesEstimateByIdRequest> body)
            throws ApiException, LWAException {
        okhttp3.Call call = getMyFeesEstimatesValidateBeforeCall(body, null, null);
        if (getMyFeesEstimatesBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<GetMyFeesEstimatesResponse>() {}.getType();
            return apiClient.execute(call, localVarReturnType);
        } else throw new ApiException.RateLimitExceeded("getMyFeesEstimates operation exceeds rate limit");
    }

    /**
     * (asynchronously) Returns the estimated fees for a list of products. **Usage Plan:** | Rate (requests per second)
     * | Burst | | ---- | ---- | | 0.5 | 1 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header returns the usage
     * plan rate limits that were applied to the requested operation, when available. The table above indicates the
     * default rate and burst values for this operation. Selling partners whose business demands require higher
     * throughput may see higher rate and burst values than those shown here. For more information, see [Usage Plans and
     * Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param body (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call getMyFeesEstimatesAsync(
            List<FeesEstimateByIdRequest> body, final ApiCallback<GetMyFeesEstimatesResponse> callback)
            throws ApiException, LWAException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = callback::onDownloadProgress;
            progressRequestListener = callback::onUploadProgress;
        }

        okhttp3.Call call = getMyFeesEstimatesValidateBeforeCall(body, progressListener, progressRequestListener);
        if (getMyFeesEstimatesBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<GetMyFeesEstimatesResponse>() {}.getType();
            apiClient.executeAsync(call, localVarReturnType, callback);
            return call;
        } else throw new ApiException.RateLimitExceeded("getMyFeesEstimates operation exceeds rate limit");
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

        public FeesApi build() {
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

            return new FeesApi(new ApiClient()
                    .setLWAAuthorizationSigner(lwaAuthorizationSigner)
                    .setBasePath(endpoint));
        }
    }
}
