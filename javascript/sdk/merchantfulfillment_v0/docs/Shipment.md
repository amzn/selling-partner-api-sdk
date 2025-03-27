# SellingPartnerApiForMerchantFulfillment.Shipment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipmentId** | **String** | An Amazon-defined shipment identifier. | 
**amazonOrderId** | **String** | An Amazon-defined order identifier, in 3-7-7 format. | 
**sellerOrderId** | **String** | A seller-defined order identifier. | [optional] 
**itemList** | [**[Item]**](Item.md) | The list of items you want to include in a shipment. | 
**shipFromAddress** | [**Address**](Address.md) |  | 
**shipToAddress** | [**Address**](Address.md) |  | 
**packageDimensions** | [**PackageDimensions**](PackageDimensions.md) |  | 
**weight** | [**Weight**](Weight.md) |  | 
**insurance** | [**CurrencyAmount**](CurrencyAmount.md) |  | 
**shippingService** | [**ShippingService**](ShippingService.md) |  | 
**label** | [**Label**](Label.md) |  | 
**status** | [**ShipmentStatus**](ShipmentStatus.md) |  | 
**trackingId** | **String** | The shipment tracking identifier provided by the carrier. | [optional] 
**createdDate** | **Date** | Date-time formatted timestamp. | 
**lastUpdatedDate** | **Date** | Date-time formatted timestamp. | [optional] 


