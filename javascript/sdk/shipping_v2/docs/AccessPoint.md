# AmazonShippingApi.AccessPoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessPointId** | **String** | Unique identifier for the access point | [optional] 
**name** | **String** | Name of entity (store/hub etc) where this access point is located | [optional] 
**timezone** | **String** | Timezone of access point | [optional] 
**type** | [**AccessPointType**](AccessPointType.md) |  | [optional] 
**accessibilityAttributes** | [**AccessibilityAttributes**](AccessibilityAttributes.md) |  | [optional] 
**address** | [**Address**](Address.md) |  | [optional] 
**exceptionOperatingHours** | [**[ExceptionOperatingHours]**](ExceptionOperatingHours.md) | Exception operating hours for Access Point | [optional] 
**assistanceType** | **String** | Assistance type enum for Access point i.e. STAFF_ASSISTED or SELF_ASSISTED | [optional] 
**score** | **String** | The score of access point, based on proximity to postal code and sorting preference. This can be used to sort access point results on shipper&#39;s end. | [optional] 
**standardOperatingHours** | [**{String: OperatingHours}**](OperatingHours.md) | Map of day of the week to operating hours of that day | [optional] 



## Enum: AssistanceTypeEnum


* `STAFF_ASSISTED` (value: `"STAFF_ASSISTED"`)

* `SELF_ASSISTED` (value: `"SELF_ASSISTED"`)




