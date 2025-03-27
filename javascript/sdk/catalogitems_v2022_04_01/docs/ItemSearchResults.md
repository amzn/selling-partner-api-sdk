# SellingPartnerApiForCatalogItems.ItemSearchResults

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**numberOfResults** | **Number** | For searches that are based on &#x60;identifiers&#x60;, &#x60;numberOfResults&#x60; is the total number of Amazon catalog items found. For searches that are based on &#x60;keywords&#x60;, &#x60;numberOfResults&#x60; is the estimated total number of Amazon catalog items that are matched by the search query. Only results up to the page count limit are returned per request regardless of the number found.  **Note:** The maximum number of items (ASINs) that can be returned and paged through is 1,000. | 
**pagination** | [**Pagination**](Pagination.md) |  | 
**refinements** | [**Refinements**](Refinements.md) |  | 
**items** | [**[Item]**](Item.md) | A list of items from the Amazon catalog. | 


