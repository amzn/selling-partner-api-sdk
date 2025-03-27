# SellingPartnerApiForProductTypeDefinitions.DefinitionsApi

All URIs are relative to *https://sellingpartnerapi-na.amazon.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getDefinitionsProductType**](DefinitionsApi.md#getDefinitionsProductType) | **GET** /definitions/2020-09-01/productTypes/{productType} | 
[**searchDefinitionsProductTypes**](DefinitionsApi.md#searchDefinitionsProductTypes) | **GET** /definitions/2020-09-01/productTypes | 



## getDefinitionsProductType

> ProductTypeDefinition getDefinitionsProductType(productType, marketplaceIds, opts)



Retrieve an Amazon product type definition.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForProductTypeDefinitions from 'selling_partner_api_for_product_type_definitions';

let apiInstance = new SellingPartnerApiForProductTypeDefinitions.DefinitionsApi();
let productType = "LUGGAGE"; // String | The Amazon product type name.
let marketplaceIds = ["null"]; // [String] | A comma-delimited list of Amazon marketplace identifiers for the request. Note: This parameter is limited to one marketplaceId at this time.
let opts = {
  'sellerId': "sellerId_example", // String | A selling partner identifier. When provided, seller-specific requirements and values are populated within the product type definition schema, such as brand names associated with the selling partner.
  'productTypeVersion': "LATEST", // String | The version of the Amazon product type to retrieve. Defaults to \"LATEST\",. Prerelease versions of product type definitions may be retrieved with \"RELEASE_CANDIDATE\". If no prerelease version is currently available, the \"LATEST\" live version will be provided.
  'requirements': "LISTING", // String | The name of the requirements set to retrieve requirements for.
  'requirementsEnforced': "ENFORCED", // String | Identifies if the required attributes for a requirements set are enforced by the product type definition schema. Non-enforced requirements enable structural validation of individual attributes without all the required attributes being present (such as for partial updates).
  'locale': "DEFAULT" // String | Locale for retrieving display labels and other presentation details. Defaults to the default language of the first marketplace in the request.
};
apiInstance.getDefinitionsProductType(productType, marketplaceIds, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **productType** | **String**| The Amazon product type name. | 
 **marketplaceIds** | [**[String]**](String.md)| A comma-delimited list of Amazon marketplace identifiers for the request. Note: This parameter is limited to one marketplaceId at this time. | 
 **sellerId** | **String**| A selling partner identifier. When provided, seller-specific requirements and values are populated within the product type definition schema, such as brand names associated with the selling partner. | [optional] 
 **productTypeVersion** | **String**| The version of the Amazon product type to retrieve. Defaults to \&quot;LATEST\&quot;,. Prerelease versions of product type definitions may be retrieved with \&quot;RELEASE_CANDIDATE\&quot;. If no prerelease version is currently available, the \&quot;LATEST\&quot; live version will be provided. | [optional] [default to &#39;LATEST&#39;]
 **requirements** | **String**| The name of the requirements set to retrieve requirements for. | [optional] [default to &#39;LISTING&#39;]
 **requirementsEnforced** | **String**| Identifies if the required attributes for a requirements set are enforced by the product type definition schema. Non-enforced requirements enable structural validation of individual attributes without all the required attributes being present (such as for partial updates). | [optional] [default to &#39;ENFORCED&#39;]
 **locale** | **String**| Locale for retrieving display labels and other presentation details. Defaults to the default language of the first marketplace in the request. | [optional] [default to &#39;DEFAULT&#39;]

### Return type

[**ProductTypeDefinition**](ProductTypeDefinition.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## searchDefinitionsProductTypes

> ProductTypeList searchDefinitionsProductTypes(marketplaceIds, opts)



Search for and return a list of Amazon product types that have definitions available.  **Usage Plans:**  | Plan type | Rate (requests per second) | Burst | | ---- | ---- | ---- | |Default| 5 | 10 | |Selling partner specific| Variable | Variable |  The x-amzn-RateLimit-Limit response header returns the usage plan rate limits that were applied to the requested operation. Rate limits for some selling partners will vary from the default rate and burst shown in the table above. For more information, see [Usage Plans and Rate Limits in the Selling Partner API](doc:usage-plans-and-rate-limits-in-the-sp-api).

### Example

```javascript
import SellingPartnerApiForProductTypeDefinitions from 'selling_partner_api_for_product_type_definitions';

let apiInstance = new SellingPartnerApiForProductTypeDefinitions.DefinitionsApi();
let marketplaceIds = ["null"]; // [String] | A comma-delimited list of Amazon marketplace identifiers for the request.
let opts = {
  'keywords': ["null"], // [String] | A comma-delimited list of keywords to search product types. **Note:** Cannot be used with `itemName`.
  'itemName': "Running shoes", // String | The title of the ASIN to get the product type recommendation. **Note:** Cannot be used with `keywords`.
  'locale': "en_US", // String | The locale for the display names in the response. Defaults to the primary locale of the marketplace.
  'searchLocale': "en_US" // String | The locale used for the `keywords` and `itemName` parameters. Defaults to the primary locale of the marketplace.
};
apiInstance.searchDefinitionsProductTypes(marketplaceIds, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplaceIds** | [**[String]**](String.md)| A comma-delimited list of Amazon marketplace identifiers for the request. | 
 **keywords** | [**[String]**](String.md)| A comma-delimited list of keywords to search product types. **Note:** Cannot be used with &#x60;itemName&#x60;. | [optional] 
 **itemName** | **String**| The title of the ASIN to get the product type recommendation. **Note:** Cannot be used with &#x60;keywords&#x60;. | [optional] 
 **locale** | **String**| The locale for the display names in the response. Defaults to the primary locale of the marketplace. | [optional] 
 **searchLocale** | **String**| The locale used for the &#x60;keywords&#x60; and &#x60;itemName&#x60; parameters. Defaults to the primary locale of the marketplace. | [optional] 

### Return type

[**ProductTypeList**](ProductTypeList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

