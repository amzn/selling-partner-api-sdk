# software.amzn.spapi.Model.services.v1.JobListing
The payload for the `getServiceJobs` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalResultSize** | **int** | Total result size of the query result. | [optional] 
**NextPageToken** | **string** | A generated string used to pass information to your next request. If &#x60;nextPageToken&#x60; is returned, pass the value of &#x60;nextPageToken&#x60; to the &#x60;pageToken&#x60; to get next results. | [optional] 
**PreviousPageToken** | **string** | A generated string used to pass information to your next request. If &#x60;previousPageToken&#x60; is returned, pass the value of &#x60;previousPageToken&#x60; to the &#x60;pageToken&#x60; to get previous page results. | [optional] 
**Jobs** | [**List&lt;ServiceJob&gt;**](ServiceJob.md) | List of job details for the given input. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

