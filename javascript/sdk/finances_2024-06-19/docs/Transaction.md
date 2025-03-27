# TheSellingPartnerApiForFinances.Transaction

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellingPartnerMetadata** | [**SellingPartnerMetadata**](SellingPartnerMetadata.md) |  | [optional] 
**relatedIdentifiers** | [**[RelatedIdentifier]**](RelatedIdentifier.md) | Related business identifiers of the transaction. | [optional] 
**transactionType** | **String** | The type of transaction.  Possible values:  * Shipment | [optional] 
**transactionId** | **String** | The unique identifier for the transaction. | [optional] 
**transactionStatus** | **String** | The status for the transaction.   Possible values:  * Deferred *Released | [optional] 
**description** | **String** | Describes the reasons for the transaction.  Example: &#39;Order Payment&#39;,&#39;Refund Order&#39; | [optional] 
**postedDate** | **Date** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**totalAmount** | [**Currency**](Currency.md) |  | [optional] 
**marketplaceDetails** | [**MarketplaceDetails**](MarketplaceDetails.md) |  | [optional] 
**items** | [**[Item]**](Item.md) | List of items in the transaction | [optional] 
**contexts** | [**[Context]**](Context.md) | List of additional Information about the item. | [optional] 
**breakdowns** | [**[Breakdown]**](Breakdown.md) | List of breakdowns which will provide the details on how the total amount is calculated for the financial transaction. | [optional] 


