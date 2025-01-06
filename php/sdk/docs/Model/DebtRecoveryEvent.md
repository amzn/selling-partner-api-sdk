# # DebtRecoveryEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debt_recovery_type** | **string** | The debt recovery type.  Possible values:  * DebtPayment  * DebtPaymentFailure  * DebtAdjustment | [optional]
**recovery_amount** | [**\OpenAPI\Client\Model\financesV0\Currency**](Currency.md) |  | [optional]
**over_payment_credit** | [**\OpenAPI\Client\Model\financesV0\Currency**](Currency.md) |  | [optional]
**debt_recovery_item_list** | [**\OpenAPI\Client\Model\financesV0\DebtRecoveryItem[]**](DebtRecoveryItem.md) | A list of debt recovery item information. | [optional]
**charge_instrument_list** | [**\OpenAPI\Client\Model\financesV0\ChargeInstrument[]**](ChargeInstrument.md) | A list of payment instruments. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
