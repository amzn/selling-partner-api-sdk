# software.amzn.spapi.Model.finances.v0.DebtRecoveryEvent
A debt payment or debt adjustment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DebtRecoveryType** | **string** | The debt recovery type.  Possible values:  * DebtPayment  * DebtPaymentFailure  * DebtAdjustment | [optional] 
**RecoveryAmount** | [**Currency**](Currency.md) |  | [optional] 
**OverPaymentCredit** | [**Currency**](Currency.md) |  | [optional] 
**DebtRecoveryItemList** | [**List&lt;DebtRecoveryItem&gt;**](DebtRecoveryItem.md) | A list of debt recovery item information. | [optional] 
**ChargeInstrumentList** | [**List&lt;ChargeInstrument&gt;**](ChargeInstrument.md) | A list of payment instruments. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

