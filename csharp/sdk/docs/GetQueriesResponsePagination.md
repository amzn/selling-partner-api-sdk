# software.amzn.spapi.Model.datakiosk.v2023_11_15.GetQueriesResponsePagination
When a request has results that are not included in this response, pagination occurs. This means the results are divided into pages. To retrieve the next page, you must pass the `nextToken` as the `paginationToken` query parameter in the subsequent `getQueries` request. All other parameters must be provided with the same values that were provided with the request that generated this token, with the exception of `pageSize` which can be modified between calls to `getQueries`. When there are no more pages to fetch, the `nextToken` field will be absent.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**NextToken** | **string** | A token that can be used to fetch the next page of results. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

