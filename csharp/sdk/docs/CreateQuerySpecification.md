# software.amzn.spapi.Model.datakiosk.v2023_11_15.CreateQuerySpecification
Information required to create the query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Query** | **string** | The GraphQL query to submit. A query must be at most 8000 characters after unnecessary whitespace is removed. | 
**PaginationToken** | **string** | A token to fetch a certain page of query results when there are multiple pages of query results available. The value of this token must be fetched from the &#x60;pagination.nextToken&#x60; field of the &#x60;Query&#x60; object, and the &#x60;query&#x60; field for this object must also be set to the &#x60;query&#x60; field of the same &#x60;Query&#x60; object. A &#x60;Query&#x60; object can be retrieved from either the &#x60;getQueries&#x60; or &#x60;getQuery&#x60; operation. In the absence of this token value, the first page of query results will be requested. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

