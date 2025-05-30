# software.amzn.spapi.Model.vendor.df.shipping.v2021_12_28.ShippingLabel
Shipping label information for an order, including the purchase order number, selling party, ship from party, label format, and package details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PurchaseOrderNumber** | **string** | This field will contain the Purchase Order Number for this order. | 
**SellingParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**ShipFromParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**LabelFormat** | **string** | Format of the label. | 
**LabelData** | [**List&lt;LabelData&gt;**](LabelData.md) | Provides the details of the packages in this shipment. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

