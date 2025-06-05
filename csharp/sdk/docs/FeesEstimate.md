# software.amzn.spapi.Model.productFees.v0.FeesEstimate
The total estimated fees for an item and a list of details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TimeOfFeesEstimation** | **DateTime** | The time at which the fees were estimated. This defaults to the time the request is made. | 
**TotalFeesEstimate** | [**MoneyType**](MoneyType.md) |  | [optional] 
**FeeDetailList** | [**List&lt;FeeDetail&gt;**](FeeDetail.md) | A list of other fees that contribute to a given fee. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

