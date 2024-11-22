# ProductAdsPaymentEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postedDate** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**transactionType** | **String** | Indicates if the transaction is for a charge or a refund.  Possible values:  * charge - Charge  * refund - Refund |  [optional]
**invoiceId** | **String** | Identifier for the invoice that the transaction appears in. |  [optional]
**baseValue** | [**Currency**](Currency.md) |  |  [optional]
**taxValue** | [**Currency**](Currency.md) |  |  [optional]
**transactionValue** | [**Currency**](Currency.md) |  |  [optional]
