# SellingPartnerApiForListingsItems.ItemSummaryByMarketplace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplaceId** | **String** | A marketplace identifier. Identifies the Amazon marketplace for the listings item. | 
**asin** | **String** | Amazon Standard Identification Number (ASIN) of the listings item. | [optional] 
**productType** | **String** | The Amazon product type of the listings item. | 
**conditionType** | **String** | Identifies the condition of the listings item. | [optional] 
**status** | **[String]** | Statuses that apply to the listings item. | 
**fnSku** | **String** | The fulfillment network stock keeping unit is an identifier used by Amazon fulfillment centers to identify each unique item. | [optional] 
**itemName** | **String** | The name or title associated with an Amazon catalog item. | [optional] 
**createdDate** | **Date** | The date the listings item was created in ISO 8601 format. | 
**lastUpdatedDate** | **Date** | The date the listings item was last updated in ISO 8601 format. | 
**mainImage** | [**ItemImage**](ItemImage.md) |  | [optional] 



## Enum: ConditionTypeEnum


* `new_new` (value: `"new_new"`)

* `new_open_box` (value: `"new_open_box"`)

* `new_oem` (value: `"new_oem"`)

* `refurbished_refurbished` (value: `"refurbished_refurbished"`)

* `used_like_new` (value: `"used_like_new"`)

* `used_very_good` (value: `"used_very_good"`)

* `used_good` (value: `"used_good"`)

* `used_acceptable` (value: `"used_acceptable"`)

* `collectible_like_new` (value: `"collectible_like_new"`)

* `collectible_very_good` (value: `"collectible_very_good"`)

* `collectible_good` (value: `"collectible_good"`)

* `collectible_acceptable` (value: `"collectible_acceptable"`)

* `club_club` (value: `"club_club"`)





## Enum: [StatusEnum]


* `BUYABLE` (value: `"BUYABLE"`)

* `DISCOVERABLE` (value: `"DISCOVERABLE"`)




