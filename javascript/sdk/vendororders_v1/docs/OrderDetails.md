# SellingPartnerApiForRetailProcurementOrders.OrderDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchaseOrderDate** | **Date** | The date the purchase order was placed. Must be in ISO-8601 date/time format. | 
**purchaseOrderChangedDate** | **Date** | The date when purchase order was last changed by Amazon after the order was placed. This date will be greater than &#39;purchaseOrderDate&#39;. This means the PO data was changed on that date and vendors are required to fulfill the  updated PO. The PO changes can be related to Item Quantity, Ship to Location, Ship Window etc. This field will not be present in orders that have not changed after creation. Must be in ISO-8601 date/time format. | [optional] 
**purchaseOrderStateChangedDate** | **Date** | The date when current purchase order state was changed. Current purchase order state is available in the field &#39;purchaseOrderState&#39;. Must be in ISO-8601 date/time format. | 
**purchaseOrderType** | **String** | Type of purchase order. | [optional] 
**importDetails** | [**ImportDetails**](ImportDetails.md) |  | [optional] 
**dealCode** | **String** | If requested by the recipient, this field will contain a promotional/deal number. The discount code line is optional. It is used to obtain a price discount on items on the order. | [optional] 
**paymentMethod** | **String** | Payment method used. | [optional] 
**buyingParty** | [**PartyIdentification**](PartyIdentification.md) |  | [optional] 
**sellingParty** | [**PartyIdentification**](PartyIdentification.md) |  | [optional] 
**shipToParty** | [**PartyIdentification**](PartyIdentification.md) |  | [optional] 
**billToParty** | [**PartyIdentification**](PartyIdentification.md) |  | [optional] 
**shipWindow** | **String** | Defines a date time interval according to ISO8601. Interval is separated by double hyphen (--). | [optional] 
**deliveryWindow** | **String** | Defines a date time interval according to ISO8601. Interval is separated by double hyphen (--). | [optional] 
**items** | [**[OrderItem]**](OrderItem.md) | A list of items in this purchase order. | 



## Enum: PurchaseOrderTypeEnum


* `RegularOrder` (value: `"RegularOrder"`)

* `ConsignedOrder` (value: `"ConsignedOrder"`)

* `NewProductIntroduction` (value: `"NewProductIntroduction"`)

* `RushOrder` (value: `"RushOrder"`)





## Enum: PaymentMethodEnum


* `Invoice` (value: `"Invoice"`)

* `Consignment` (value: `"Consignment"`)

* `CreditCard` (value: `"CreditCard"`)

* `Prepaid` (value: `"Prepaid"`)




