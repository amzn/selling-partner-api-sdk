# OrderDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchaseOrderDate** | [**OffsetDateTime**](OffsetDateTime.md) | The date the purchase order was placed. Must be in ISO-8601 date/time format. | 
**purchaseOrderChangedDate** | [**OffsetDateTime**](OffsetDateTime.md) | The date when purchase order was last changed by Amazon after the order was placed. This date will be greater than &#x27;purchaseOrderDate&#x27;. This means the PO data was changed on that date and vendors are required to fulfill the  updated PO. The PO changes can be related to Item Quantity, Ship to Location, Ship Window etc. This field will not be present in orders that have not changed after creation. Must be in ISO-8601 date/time format. |  [optional]
**purchaseOrderStateChangedDate** | [**OffsetDateTime**](OffsetDateTime.md) | The date when current purchase order state was changed. Current purchase order state is available in the field &#x27;purchaseOrderState&#x27;. Must be in ISO-8601 date/time format. | 
**purchaseOrderType** | [**PurchaseOrderTypeEnum**](#PurchaseOrderTypeEnum) | Type of purchase order. |  [optional]
**importDetails** | [**ImportDetails**](ImportDetails.md) |  |  [optional]
**dealCode** | **String** | If requested by the recipient, this field will contain a promotional/deal number. The discount code line is optional. It is used to obtain a price discount on items on the order. |  [optional]
**paymentMethod** | [**PaymentMethodEnum**](#PaymentMethodEnum) | Payment method used. |  [optional]
**buyingParty** | [**PartyIdentification**](PartyIdentification.md) |  |  [optional]
**sellingParty** | [**PartyIdentification**](PartyIdentification.md) |  |  [optional]
**shipToParty** | [**PartyIdentification**](PartyIdentification.md) |  |  [optional]
**billToParty** | [**PartyIdentification**](PartyIdentification.md) |  |  [optional]
**shipWindow** | **String** |  |  [optional]
**deliveryWindow** | **String** |  |  [optional]
**items** | [**List&lt;OrderItem&gt;**](OrderItem.md) | A list of items in this purchase order. | 

<a name="PurchaseOrderTypeEnum"></a>
## Enum: PurchaseOrderTypeEnum
Name | Value
---- | -----
REGULARORDER | &quot;RegularOrder&quot;
CONSIGNEDORDER | &quot;ConsignedOrder&quot;
NEWPRODUCTINTRODUCTION | &quot;NewProductIntroduction&quot;
RUSHORDER | &quot;RushOrder&quot;

<a name="PaymentMethodEnum"></a>
## Enum: PaymentMethodEnum
Name | Value
---- | -----
INVOICE | &quot;Invoice&quot;
CONSIGNMENT | &quot;Consignment&quot;
CREDITCARD | &quot;CreditCard&quot;
PREPAID | &quot;Prepaid&quot;
