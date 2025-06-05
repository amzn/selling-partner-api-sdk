# software.amzn.spapi.Model.listings.items.v2021_08_01.PatchOperation
Individual JSON Patch operation for an HTTP PATCH request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Op** | **string** | Type of JSON Patch operation. Supported JSON Patch operations include &#x60;add&#x60;, &#x60;replace&#x60;, &#x60;merge&#x60; and &#x60;delete&#x60;. Refer to &lt;https://tools.ietf.org/html/rfc6902&gt;. | 
**Path** | **string** | JSON Pointer path of the element to patch. Refer to [JavaScript Object Notation (JSON) Patch](https://tools.ietf.org/html/rfc6902) for more information. | 
**Value** | **List&lt;Dictionary&lt;string, Object&gt;&gt;** | JSON value to &#x60;add&#x60;, &#x60;replace&#x60;, &#x60;merge&#x60; or &#x60;delete&#x60;. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

