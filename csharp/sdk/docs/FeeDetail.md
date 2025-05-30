# software.amzn.spapi.Model.productFees.v0.FeeDetail
The type of fee, fee amount, and other details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FeeType** | **string** | The type of fee charged to a seller. | 
**FeeAmount** | [**MoneyType**](MoneyType.md) |  | 
**FeePromotion** | [**MoneyType**](MoneyType.md) |  | [optional] 
**TaxAmount** | [**MoneyType**](MoneyType.md) |  | [optional] 
**FinalFee** | [**MoneyType**](MoneyType.md) |  | 
**IncludedFeeDetailList** | [**List&lt;IncludedFeeDetail&gt;**](IncludedFeeDetail.md) | A list of other fees that contribute to a given fee. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

