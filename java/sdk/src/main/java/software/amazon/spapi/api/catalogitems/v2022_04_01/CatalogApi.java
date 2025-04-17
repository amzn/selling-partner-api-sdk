/*
 * Selling Partner API for Catalog Items
 * Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * OpenAPI spec version: 2022-04-01
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

package software.amazon.spapi.api.catalogitems.v2022_04_01;

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
import software.amazon.spapi.models.catalogitems.v2022_04_01.Item;
import software.amazon.spapi.models.catalogitems.v2022_04_01.ItemSearchResults;

public class CatalogApi {
    private ApiClient apiClient;

    public CatalogApi(ApiClient apiClient, String disableRateLimiting) {
        this.apiClient = apiClient;
    }

    private final Configuration config = Configuration.get();

    public final Bucket getCatalogItemBucket = Bucket.builder()
            .addLimit(config.getLimit("CatalogApi-getCatalogItem"))
            .build();

    public final Bucket searchCatalogItemsBucket = Bucket.builder()
            .addLimit(config.getLimit("CatalogApi-searchCatalogItems"))
            .build();

    private okhttp3.Call getCatalogItemCall(
            String asin,
            List<String> marketplaceIds,
            List<String> includedData,
            String locale,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/catalog/2022-04-01/items/{asin}"
                .replaceAll("\\{" + "asin" + "\\}", apiClient.escapeString(asin.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (marketplaceIds != null)
            localVarCollectionQueryParams.addAll(apiClient.parameterToPairs("csv", "marketplaceIds", marketplaceIds));
        if (includedData != null)
            localVarCollectionQueryParams.addAll(apiClient.parameterToPairs("csv", "includedData", includedData));
        if (locale != null) localVarQueryParams.addAll(apiClient.parameterToPair("locale", locale));

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

    private okhttp3.Call getCatalogItemValidateBeforeCall(
            String asin,
            List<String> marketplaceIds,
            List<String> includedData,
            String locale,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        // verify the required parameter 'asin' is set
        if (asin == null) {
            throw new ApiException("Missing the required parameter 'asin' when calling getCatalogItem(Async)");
        }
        // verify the required parameter 'marketplaceIds' is set
        if (marketplaceIds == null) {
            throw new ApiException(
                    "Missing the required parameter 'marketplaceIds' when calling getCatalogItem(Async)");
        }

        return getCatalogItemCall(
                asin, marketplaceIds, includedData, locale, progressListener, progressRequestListener);
    }

    /**
     * Retrieves details for an item in the Amazon catalog. **Usage Plan:** | Rate (requests per second) | Burst | |
     * ---- | ---- | | 5 | 5 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate
     * limits for the operation, when available. The preceding table contains the default rate and burst values for this
     * operation. Selling partners whose business demands require higher throughput might have higher rate and burst
     * values than those shown here. For more information, refer to [Usage Plans and Rate
     * Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param asin The Amazon Standard Identification Number (ASIN) of the item. (required)
     * @param marketplaceIds A comma-delimited list of Amazon marketplace identifiers. To find the ID for your
     *     marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     *     (required)
     * @param includedData A comma-delimited list of datasets to include in the response. (optional)
     * @param locale The locale for which you want to retrieve localized summaries. Defaults to the primary locale of
     *     the marketplace. (optional)
     * @return Item
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public Item getCatalogItem(String asin, List<String> marketplaceIds, List<String> includedData, String locale)
            throws ApiException, LWAException {
        ApiResponse<Item> resp = getCatalogItemWithHttpInfo(asin, marketplaceIds, includedData, locale);
        return resp.getData();
    }

    /**
     * Retrieves details for an item in the Amazon catalog. **Usage Plan:** | Rate (requests per second) | Burst | |
     * ---- | ---- | | 5 | 5 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate
     * limits for the operation, when available. The preceding table contains the default rate and burst values for this
     * operation. Selling partners whose business demands require higher throughput might have higher rate and burst
     * values than those shown here. For more information, refer to [Usage Plans and Rate
     * Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param asin The Amazon Standard Identification Number (ASIN) of the item. (required)
     * @param marketplaceIds A comma-delimited list of Amazon marketplace identifiers. To find the ID for your
     *     marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     *     (required)
     * @param includedData A comma-delimited list of datasets to include in the response. (optional)
     * @param locale The locale for which you want to retrieve localized summaries. Defaults to the primary locale of
     *     the marketplace. (optional)
     * @return ApiResponse&lt;Item&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ApiResponse<Item> getCatalogItemWithHttpInfo(
            String asin, List<String> marketplaceIds, List<String> includedData, String locale)
            throws ApiException, LWAException {
        okhttp3.Call call = getCatalogItemValidateBeforeCall(asin, marketplaceIds, includedData, locale, null, null);
        if (disableRateLimiting || getCatalogItemBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<Item>() {}.getType();
            return apiClient.execute(call, localVarReturnType);
        } else throw new ApiException.RateLimitExceeded("getCatalogItem operation exceeds rate limit");
    }

    /**
     * (asynchronously) Retrieves details for an item in the Amazon catalog. **Usage Plan:** | Rate (requests per
     * second) | Burst | | ---- | ---- | | 5 | 5 | The &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the
     * usage plan rate limits for the operation, when available. The preceding table contains the default rate and burst
     * values for this operation. Selling partners whose business demands require higher throughput might have higher
     * rate and burst values than those shown here. For more information, refer to [Usage Plans and Rate
     * Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param asin The Amazon Standard Identification Number (ASIN) of the item. (required)
     * @param marketplaceIds A comma-delimited list of Amazon marketplace identifiers. To find the ID for your
     *     marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     *     (required)
     * @param includedData A comma-delimited list of datasets to include in the response. (optional)
     * @param locale The locale for which you want to retrieve localized summaries. Defaults to the primary locale of
     *     the marketplace. (optional)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call getCatalogItemAsync(
            String asin,
            List<String> marketplaceIds,
            List<String> includedData,
            String locale,
            final ApiCallback<Item> callback)
            throws ApiException, LWAException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = callback::onDownloadProgress;
            progressRequestListener = callback::onUploadProgress;
        }

        okhttp3.Call call = getCatalogItemValidateBeforeCall(
                asin, marketplaceIds, includedData, locale, progressListener, progressRequestListener);
        if (disableRateLimiting || getCatalogItemBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<Item>() {}.getType();
            apiClient.executeAsync(call, localVarReturnType, callback);
            return call;
        } else throw new ApiException.RateLimitExceeded("getCatalogItem operation exceeds rate limit");
    }

    private okhttp3.Call searchCatalogItemsCall(
            List<String> marketplaceIds,
            List<String> identifiers,
            String identifiersType,
            List<String> includedData,
            String locale,
            String sellerId,
            List<String> keywords,
            List<String> brandNames,
            List<String> classificationIds,
            Integer pageSize,
            String pageToken,
            String keywordsLocale,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/catalog/2022-04-01/items";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();
        if (identifiers != null)
            localVarCollectionQueryParams.addAll(apiClient.parameterToPairs("csv", "identifiers", identifiers));
        if (identifiersType != null)
            localVarQueryParams.addAll(apiClient.parameterToPair("identifiersType", identifiersType));
        if (marketplaceIds != null)
            localVarCollectionQueryParams.addAll(apiClient.parameterToPairs("csv", "marketplaceIds", marketplaceIds));
        if (includedData != null)
            localVarCollectionQueryParams.addAll(apiClient.parameterToPairs("csv", "includedData", includedData));
        if (locale != null) localVarQueryParams.addAll(apiClient.parameterToPair("locale", locale));
        if (sellerId != null) localVarQueryParams.addAll(apiClient.parameterToPair("sellerId", sellerId));
        if (keywords != null)
            localVarCollectionQueryParams.addAll(apiClient.parameterToPairs("csv", "keywords", keywords));
        if (brandNames != null)
            localVarCollectionQueryParams.addAll(apiClient.parameterToPairs("csv", "brandNames", brandNames));
        if (classificationIds != null)
            localVarCollectionQueryParams.addAll(
                    apiClient.parameterToPairs("csv", "classificationIds", classificationIds));
        if (pageSize != null) localVarQueryParams.addAll(apiClient.parameterToPair("pageSize", pageSize));
        if (pageToken != null) localVarQueryParams.addAll(apiClient.parameterToPair("pageToken", pageToken));
        if (keywordsLocale != null)
            localVarQueryParams.addAll(apiClient.parameterToPair("keywordsLocale", keywordsLocale));

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

    private okhttp3.Call searchCatalogItemsValidateBeforeCall(
            List<String> marketplaceIds,
            List<String> identifiers,
            String identifiersType,
            List<String> includedData,
            String locale,
            String sellerId,
            List<String> keywords,
            List<String> brandNames,
            List<String> classificationIds,
            Integer pageSize,
            String pageToken,
            String keywordsLocale,
            final ProgressResponseBody.ProgressListener progressListener,
            final ProgressRequestBody.ProgressRequestListener progressRequestListener)
            throws ApiException, LWAException {
        // verify the required parameter 'marketplaceIds' is set
        if (marketplaceIds == null) {
            throw new ApiException(
                    "Missing the required parameter 'marketplaceIds' when calling searchCatalogItems(Async)");
        }

        return searchCatalogItemsCall(
                marketplaceIds,
                identifiers,
                identifiersType,
                includedData,
                locale,
                sellerId,
                keywords,
                brandNames,
                classificationIds,
                pageSize,
                pageToken,
                keywordsLocale,
                progressListener,
                progressRequestListener);
    }

    /**
     * Search for a list of Amazon catalog items and item-related information. You can search by identifier or by
     * keywords. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 | The
     * &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when
     * available. The preceding table contains the default rate and burst values for this operation. Selling partners
     * whose business demands require higher throughput might have higher rate and burst values than those shown here.
     * For more information, refer to [Usage Plans and Rate
     * Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param marketplaceIds A comma-delimited list of Amazon marketplace identifiers. To find the ID for your
     *     marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     *     (required)
     * @param identifiers A comma-delimited list of product identifiers that you can use to search the Amazon catalog.
     *     **Note:** You cannot include &#x60;identifiers&#x60; and &#x60;keywords&#x60; in the same request. (optional)
     * @param identifiersType The type of product identifiers that you can use to search the Amazon catalog. **Note:**
     *     &#x60;identifiersType&#x60; is required when &#x60;identifiers&#x60; is in the request. (optional)
     * @param includedData A comma-delimited list of datasets to include in the response. (optional)
     * @param locale The locale for which you want to retrieve localized summaries. Defaults to the primary locale of
     *     the marketplace. (optional)
     * @param sellerId A selling partner identifier, such as a seller account or vendor code. **Note:** Required when
     *     &#x60;identifiersType&#x60; is &#x60;SKU&#x60;. (optional)
     * @param keywords A comma-delimited list of keywords that you can use to search the Amazon catalog. **Note:** You
     *     cannot include &#x60;keywords&#x60; and &#x60;identifiers&#x60; in the same request. (optional)
     * @param brandNames A comma-delimited list of brand names that you can use to limit the search in queries based on
     *     &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;. (optional)
     * @param classificationIds A comma-delimited list of classification identifiers that you can use to limit the
     *     search in queries based on &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;.
     *     (optional)
     * @param pageSize The number of results to include on each page. (optional, default to 10)
     * @param pageToken A token that you can use to fetch a specific page when there are multiple pages of results.
     *     (optional)
     * @param keywordsLocale The language of the keywords that are included in queries based on &#x60;keywords&#x60;.
     *     Defaults to the primary locale of the marketplace. **Note:** Cannot be used with &#x60;identifiers&#x60;.
     *     (optional)
     * @return ItemSearchResults
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ItemSearchResults searchCatalogItems(
            List<String> marketplaceIds,
            List<String> identifiers,
            String identifiersType,
            List<String> includedData,
            String locale,
            String sellerId,
            List<String> keywords,
            List<String> brandNames,
            List<String> classificationIds,
            Integer pageSize,
            String pageToken,
            String keywordsLocale)
            throws ApiException, LWAException {
        ApiResponse<ItemSearchResults> resp = searchCatalogItemsWithHttpInfo(
                marketplaceIds,
                identifiers,
                identifiersType,
                includedData,
                locale,
                sellerId,
                keywords,
                brandNames,
                classificationIds,
                pageSize,
                pageToken,
                keywordsLocale);
        return resp.getData();
    }

    /**
     * Search for a list of Amazon catalog items and item-related information. You can search by identifier or by
     * keywords. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 | The
     * &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when
     * available. The preceding table contains the default rate and burst values for this operation. Selling partners
     * whose business demands require higher throughput might have higher rate and burst values than those shown here.
     * For more information, refer to [Usage Plans and Rate
     * Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param marketplaceIds A comma-delimited list of Amazon marketplace identifiers. To find the ID for your
     *     marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     *     (required)
     * @param identifiers A comma-delimited list of product identifiers that you can use to search the Amazon catalog.
     *     **Note:** You cannot include &#x60;identifiers&#x60; and &#x60;keywords&#x60; in the same request. (optional)
     * @param identifiersType The type of product identifiers that you can use to search the Amazon catalog. **Note:**
     *     &#x60;identifiersType&#x60; is required when &#x60;identifiers&#x60; is in the request. (optional)
     * @param includedData A comma-delimited list of datasets to include in the response. (optional)
     * @param locale The locale for which you want to retrieve localized summaries. Defaults to the primary locale of
     *     the marketplace. (optional)
     * @param sellerId A selling partner identifier, such as a seller account or vendor code. **Note:** Required when
     *     &#x60;identifiersType&#x60; is &#x60;SKU&#x60;. (optional)
     * @param keywords A comma-delimited list of keywords that you can use to search the Amazon catalog. **Note:** You
     *     cannot include &#x60;keywords&#x60; and &#x60;identifiers&#x60; in the same request. (optional)
     * @param brandNames A comma-delimited list of brand names that you can use to limit the search in queries based on
     *     &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;. (optional)
     * @param classificationIds A comma-delimited list of classification identifiers that you can use to limit the
     *     search in queries based on &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;.
     *     (optional)
     * @param pageSize The number of results to include on each page. (optional, default to 10)
     * @param pageToken A token that you can use to fetch a specific page when there are multiple pages of results.
     *     (optional)
     * @param keywordsLocale The language of the keywords that are included in queries based on &#x60;keywords&#x60;.
     *     Defaults to the primary locale of the marketplace. **Note:** Cannot be used with &#x60;identifiers&#x60;.
     *     (optional)
     * @return ApiResponse&lt;ItemSearchResults&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public ApiResponse<ItemSearchResults> searchCatalogItemsWithHttpInfo(
            List<String> marketplaceIds,
            List<String> identifiers,
            String identifiersType,
            List<String> includedData,
            String locale,
            String sellerId,
            List<String> keywords,
            List<String> brandNames,
            List<String> classificationIds,
            Integer pageSize,
            String pageToken,
            String keywordsLocale)
            throws ApiException, LWAException {
        okhttp3.Call call = searchCatalogItemsValidateBeforeCall(
                marketplaceIds,
                identifiers,
                identifiersType,
                includedData,
                locale,
                sellerId,
                keywords,
                brandNames,
                classificationIds,
                pageSize,
                pageToken,
                keywordsLocale,
                null,
                null);
        if (disableRateLimiting || searchCatalogItemsBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<ItemSearchResults>() {}.getType();
            return apiClient.execute(call, localVarReturnType);
        } else throw new ApiException.RateLimitExceeded("searchCatalogItems operation exceeds rate limit");
    }

    /**
     * (asynchronously) Search for a list of Amazon catalog items and item-related information. You can search by
     * identifier or by keywords. **Usage Plan:** | Rate (requests per second) | Burst | | ---- | ---- | | 5 | 5 | The
     * &#x60;x-amzn-RateLimit-Limit&#x60; response header contains the usage plan rate limits for the operation, when
     * available. The preceding table contains the default rate and burst values for this operation. Selling partners
     * whose business demands require higher throughput might have higher rate and burst values than those shown here.
     * For more information, refer to [Usage Plans and Rate
     * Limits](https://developer-docs.amazon.com/sp-api/docs/usage-plans-and-rate-limits-in-the-sp-api).
     *
     * @param marketplaceIds A comma-delimited list of Amazon marketplace identifiers. To find the ID for your
     *     marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
     *     (required)
     * @param identifiers A comma-delimited list of product identifiers that you can use to search the Amazon catalog.
     *     **Note:** You cannot include &#x60;identifiers&#x60; and &#x60;keywords&#x60; in the same request. (optional)
     * @param identifiersType The type of product identifiers that you can use to search the Amazon catalog. **Note:**
     *     &#x60;identifiersType&#x60; is required when &#x60;identifiers&#x60; is in the request. (optional)
     * @param includedData A comma-delimited list of datasets to include in the response. (optional)
     * @param locale The locale for which you want to retrieve localized summaries. Defaults to the primary locale of
     *     the marketplace. (optional)
     * @param sellerId A selling partner identifier, such as a seller account or vendor code. **Note:** Required when
     *     &#x60;identifiersType&#x60; is &#x60;SKU&#x60;. (optional)
     * @param keywords A comma-delimited list of keywords that you can use to search the Amazon catalog. **Note:** You
     *     cannot include &#x60;keywords&#x60; and &#x60;identifiers&#x60; in the same request. (optional)
     * @param brandNames A comma-delimited list of brand names that you can use to limit the search in queries based on
     *     &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;. (optional)
     * @param classificationIds A comma-delimited list of classification identifiers that you can use to limit the
     *     search in queries based on &#x60;keywords&#x60;. **Note:** Cannot be used with &#x60;identifiers&#x60;.
     *     (optional)
     * @param pageSize The number of results to include on each page. (optional, default to 10)
     * @param pageToken A token that you can use to fetch a specific page when there are multiple pages of results.
     *     (optional)
     * @param keywordsLocale The language of the keywords that are included in queries based on &#x60;keywords&#x60;.
     *     Defaults to the primary locale of the marketplace. **Note:** Cannot be used with &#x60;identifiers&#x60;.
     *     (optional)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     * @throws LWAException If calls to fetch LWA access token fails
     */
    public okhttp3.Call searchCatalogItemsAsync(
            List<String> marketplaceIds,
            List<String> identifiers,
            String identifiersType,
            List<String> includedData,
            String locale,
            String sellerId,
            List<String> keywords,
            List<String> brandNames,
            List<String> classificationIds,
            Integer pageSize,
            String pageToken,
            String keywordsLocale,
            final ApiCallback<ItemSearchResults> callback)
            throws ApiException, LWAException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = callback::onDownloadProgress;
            progressRequestListener = callback::onUploadProgress;
        }

        okhttp3.Call call = searchCatalogItemsValidateBeforeCall(
                marketplaceIds,
                identifiers,
                identifiersType,
                includedData,
                locale,
                sellerId,
                keywords,
                brandNames,
                classificationIds,
                pageSize,
                pageToken,
                keywordsLocale,
                progressListener,
                progressRequestListener);
        if (disableRateLimiting || searchCatalogItemsBucket.tryConsume(1)) {
            Type localVarReturnType = new TypeToken<ItemSearchResults>() {}.getType();
            apiClient.executeAsync(call, localVarReturnType, callback);
            return call;
        } else throw new ApiException.RateLimitExceeded("searchCatalogItems operation exceeds rate limit");
    }

    public static class Builder {
        private LWAAuthorizationCredentials lwaAuthorizationCredentials;
        private String endpoint;
        private LWAAccessTokenCache lwaAccessTokenCache;
        private Boolean disableAccessTokenCache = false;
        private Boolean disableRateLimiting = false;

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

        public Builder disableRateLimiting() {
            this.disableRateLimiting = true;
        }

        public CatalogApi build() {
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

            return new CatalogApi(
                    new ApiClient()
                            .setLWAAuthorizationSigner(lwaAuthorizationSigner)
                            .setBasePath(endpoint),
                    disableRateLimiting);
        }
    }
}
