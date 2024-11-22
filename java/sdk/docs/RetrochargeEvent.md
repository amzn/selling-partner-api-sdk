# RetrochargeEvent

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retrochargeEventType** | **String** | The type of event.  Possible values:  * Retrocharge  * RetrochargeReversal |  [optional]
**amazonOrderId** | **String** | An Amazon-defined identifier for an order. |  [optional]
**postedDate** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**baseTax** | [**Currency**](Currency.md) |  |  [optional]
**shippingTax** | [**Currency**](Currency.md) |  |  [optional]
**marketplaceName** | **String** | The name of the marketplace where the retrocharge event occurred. |  [optional]
**retrochargeTaxWithheldList** | [**TaxWithheldComponentList**](TaxWithheldComponentList.md) |  |  [optional]
