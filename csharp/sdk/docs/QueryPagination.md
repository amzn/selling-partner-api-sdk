# software.amzn.spapi.Model.datakiosk.v2023_11_15.QueryPagination
When a query produces results that are not included in the data document, pagination occurs. This means the results are divided into pages. To retrieve the next page, you must pass a `CreateQuerySpecification` object with `paginationToken` set to this object's `nextToken` and with `query` set to this object's `query` in the subsequent `createQuery` request. When there are no more pages to fetch, the `nextToken` field will be absent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NextToken** | **string** | A token that can be used to fetch the next page of results. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

