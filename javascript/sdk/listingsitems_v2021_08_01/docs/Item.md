# SellingPartnerApiForListingsItems.Item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku** | **String** | A selling partner provided identifier for an Amazon listing. | 
**summaries** | [**[ItemSummaryByMarketplace]**](ItemSummaryByMarketplace.md) | Summary details of a listings item. | [optional] 
**attributes** | **{String: Object}** | A JSON object containing structured listings item attribute data keyed by attribute name. | [optional] 
**issues** | [**[Issue]**](Issue.md) | The issues associated with the listings item. | [optional] 
**offers** | [**[ItemOfferByMarketplace]**](ItemOfferByMarketplace.md) | Offer details for the listings item. | [optional] 
**fulfillmentAvailability** | [**[FulfillmentAvailability]**](FulfillmentAvailability.md) | The fulfillment availability for the listings item. | [optional] 
**procurement** | [**[ItemProcurement]**](ItemProcurement.md) | The vendor procurement information for the listings item. | [optional] 
**relationships** | [**[ItemRelationshipsByMarketplace]**](ItemRelationshipsByMarketplace.md) | Relationships for a listing item, by marketplace (for example, variations). | [optional] 
**productTypes** | [**[ItemProductTypeByMarketplace]**](ItemProductTypeByMarketplace.md) | Product types for a listing item, by marketplace. | [optional] 


