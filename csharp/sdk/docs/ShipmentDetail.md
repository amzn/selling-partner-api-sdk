# software.amzn.spapi.Model.invoicing.v0.ShipmentDetail
The information required by a selling partner to issue a shipment invoice.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**WarehouseId** | **string** | The Amazon-defined identifier for the warehouse. | [optional] 
**AmazonOrderId** | **string** | The Amazon-defined identifier for the order. | [optional] 
**AmazonShipmentId** | **string** | The Amazon-defined identifier for the shipment. | [optional] 
**PurchaseDate** | **DateTime** | The date and time when the order was created. | [optional] 
**ShippingAddress** | [**Address**](Address.md) |  | [optional] 
**PaymentMethodDetails** | **List&lt;string&gt;** | The list of payment method details. | [optional] 
**MarketplaceId** | **string** | The identifier for the marketplace where the order was placed. | [optional] 
**SellerId** | **string** | The seller identifier. | [optional] 
**BuyerName** | **string** | The name of the buyer. | [optional] 
**BuyerCounty** | **string** | The county of the buyer. | [optional] 
**BuyerTaxInfo** | [**BuyerTaxInfo**](BuyerTaxInfo.md) |  | [optional] 
**MarketplaceTaxInfo** | [**MarketplaceTaxInfo**](MarketplaceTaxInfo.md) |  | [optional] 
**SellerDisplayName** | **string** | The seller’s friendly name registered in the marketplace. | [optional] 
**ShipmentItems** | [**List&lt;ShipmentItem&gt;**](ShipmentItem.md) | A list of shipment items. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

