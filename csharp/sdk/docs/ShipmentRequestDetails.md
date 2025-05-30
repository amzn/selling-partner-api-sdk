# software.amzn.spapi.Model.merchantFulfillment.v0.ShipmentRequestDetails
Shipment information required for requesting shipping service offers or for creating a shipment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmazonOrderId** | **string** | An Amazon-defined order identifier, in 3-7-7 format. | 
**SellerOrderId** | **string** | A seller-defined order identifier. | [optional] 
**ItemList** | [**List&lt;Item&gt;**](Item.md) | The list of items you want to include in a shipment. | 
**ShipFromAddress** | [**Address**](Address.md) |  | 
**PackageDimensions** | [**PackageDimensions**](PackageDimensions.md) |  | 
**Weight** | [**Weight**](Weight.md) |  | 
**MustArriveByDate** | **DateTime** | Date-time formatted timestamp. | [optional] 
**ShipDate** | **DateTime** | Date-time formatted timestamp. | [optional] 
**ShippingServiceOptions** | [**ShippingServiceOptions**](ShippingServiceOptions.md) |  | 
**LabelCustomization** | [**LabelCustomization**](LabelCustomization.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

