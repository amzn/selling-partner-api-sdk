# software.amzn.spapi.Model.vendor.orders.v1.OrderDetails
Details of an order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PurchaseOrderDate** | **DateTime** | The date the purchase order was placed. Must be in ISO-8601 date/time format. | 
**PurchaseOrderChangedDate** | **DateTime** | The date when purchase order was last changed by Amazon after the order was placed. This date will be greater than &#39;purchaseOrderDate&#39;. This means the PO data was changed on that date and vendors are required to fulfill the  updated PO. The PO changes can be related to Item Quantity, Ship to Location, Ship Window etc. This field will not be present in orders that have not changed after creation. Must be in ISO-8601 date/time format. | [optional] 
**PurchaseOrderStateChangedDate** | **DateTime** | The date when current purchase order state was changed. Current purchase order state is available in the field &#39;purchaseOrderState&#39;. Must be in ISO-8601 date/time format. | 
**PurchaseOrderType** | **string** | Type of purchase order. | [optional] 
**ImportDetails** | [**ImportDetails**](ImportDetails.md) |  | [optional] 
**DealCode** | **string** | If requested by the recipient, this field will contain a promotional/deal number. The discount code line is optional. It is used to obtain a price discount on items on the order. | [optional] 
**PaymentMethod** | **string** | Payment method used. | [optional] 
**BuyingParty** | [**PartyIdentification**](PartyIdentification.md) |  | [optional] 
**SellingParty** | [**PartyIdentification**](PartyIdentification.md) |  | [optional] 
**ShipToParty** | [**PartyIdentification**](PartyIdentification.md) |  | [optional] 
**BillToParty** | [**PartyIdentification**](PartyIdentification.md) |  | [optional] 
**ShipWindow** | **string** | Defines a date time interval according to ISO8601. Interval is separated by double hyphen (- -). | [optional] 
**DeliveryWindow** | **string** | Defines a date time interval according to ISO8601. Interval is separated by double hyphen (- -). | [optional] 
**Items** | [**List&lt;OrderItem&gt;**](OrderItem.md) | A list of items in this purchase order. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

