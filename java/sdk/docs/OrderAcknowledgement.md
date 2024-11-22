# OrderAcknowledgement

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchaseOrderNumber** | **String** | The purchase order number. Formatting Notes: 8-character alpha-numeric code. | 
**sellingParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**acknowledgementDate** | [**OffsetDateTime**](OffsetDateTime.md) | The date and time when the purchase order is acknowledged, in ISO-8601 date/time format. | 
**items** | [**List&lt;OrderAcknowledgementItem&gt;**](OrderAcknowledgementItem.md) | A list of the items being acknowledged with associated details. | 
