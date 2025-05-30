# software.amzn.spapi.Model.vendor.df.shipping.v2021_12_28.ShippingLabelRequest
Represents the request payload for creating a shipping label, containing the purchase order number, selling party, ship from party, and a list of containers or packages in the shipment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PurchaseOrderNumber** | **string** | The purchase order number of the order for which to create a shipping label. | 
**SellingParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**ShipFromParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**Containers** | [**List&lt;Container&gt;**](Container.md) | A list of the packages in this shipment. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

