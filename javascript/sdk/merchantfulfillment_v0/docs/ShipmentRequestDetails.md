# SellingPartnerApiForMerchantFulfillment.ShipmentRequestDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amazonOrderId** | **String** | An Amazon-defined order identifier, in 3-7-7 format. | 
**sellerOrderId** | **String** | A seller-defined order identifier. | [optional] 
**itemList** | [**[Item]**](Item.md) | The list of items you want to include in a shipment. | 
**shipFromAddress** | [**Address**](Address.md) |  | 
**packageDimensions** | [**PackageDimensions**](PackageDimensions.md) |  | 
**weight** | [**Weight**](Weight.md) |  | 
**mustArriveByDate** | **Date** | Date-time formatted timestamp. | [optional] 
**shipDate** | **Date** | Date-time formatted timestamp. | [optional] 
**shippingServiceOptions** | [**ShippingServiceOptions**](ShippingServiceOptions.md) |  | 
**labelCustomization** | [**LabelCustomization**](LabelCustomization.md) |  | [optional] 


