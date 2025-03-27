# SellingPartnerApiForFinances.RetrochargeEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**retrochargeEventType** | **String** | The type of event.  Possible values:  * Retrocharge  * RetrochargeReversal | [optional] 
**amazonOrderId** | **String** | An Amazon-defined identifier for an order. | [optional] 
**postedDate** | **Date** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**baseTax** | [**Currency**](Currency.md) |  | [optional] 
**shippingTax** | [**Currency**](Currency.md) |  | [optional] 
**marketplaceName** | **String** | The name of the marketplace where the retrocharge event occurred. | [optional] 
**retrochargeTaxWithheldList** | [**[TaxWithheldComponent]**](TaxWithheldComponent.md) | A list of information about taxes withheld. | [optional] 


