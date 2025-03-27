# SellingPartnerApiForFinances.DebtRecoveryEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debtRecoveryType** | **String** | The debt recovery type.  Possible values:  * DebtPayment  * DebtPaymentFailure  * DebtAdjustment | [optional] 
**recoveryAmount** | [**Currency**](Currency.md) |  | [optional] 
**overPaymentCredit** | [**Currency**](Currency.md) |  | [optional] 
**debtRecoveryItemList** | [**[DebtRecoveryItem]**](DebtRecoveryItem.md) | A list of debt recovery item information. | [optional] 
**chargeInstrumentList** | [**[ChargeInstrument]**](ChargeInstrument.md) | A list of payment instruments. | [optional] 


