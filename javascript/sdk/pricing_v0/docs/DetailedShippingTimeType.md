# SellingPartnerApiForPricing.DetailedShippingTimeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minimumHours** | **Number** | The minimum time, in hours, that the item will likely be shipped after the order has been placed. | [optional] 
**maximumHours** | **Number** | The maximum time, in hours, that the item will likely be shipped after the order has been placed. | [optional] 
**availableDate** | **String** | The date when the item will be available for shipping. Only displayed for items that are not currently available for shipping. | [optional] 
**availabilityType** | **String** | Indicates whether the item is available for shipping now, or on a known or an unknown date in the future. If known, the availableDate property indicates the date that the item will be available for shipping. Possible values: NOW, FUTURE_WITHOUT_DATE, FUTURE_WITH_DATE. | [optional] 



## Enum: AvailabilityTypeEnum


* `NOW` (value: `"NOW"`)

* `FUTURE_WITHOUT_DATE` (value: `"FUTURE_WITHOUT_DATE"`)

* `FUTURE_WITH_DATE` (value: `"FUTURE_WITH_DATE"`)




