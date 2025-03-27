# SellingPartnerApiForFinances.SellerDealPaymentEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**postedDate** | **Date** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**dealId** | **String** | The unique identifier of the deal. | [optional] 
**dealDescription** | **String** | The internal description of the deal. | [optional] 
**eventType** | **String** | The type of event: SellerDealComplete. | [optional] 
**feeType** | **String** | The type of fee: RunLightningDealFee. | [optional] 
**feeAmount** | [**Currency**](Currency.md) |  | [optional] 
**taxAmount** | [**Currency**](Currency.md) |  | [optional] 
**totalAmount** | [**Currency**](Currency.md) |  | [optional] 


