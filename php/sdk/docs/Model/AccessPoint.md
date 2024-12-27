# # AccessPoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_point_id** | **string** | Unique identifier for the access point | [optional]
**name** | **string** | Name of entity (store/hub etc) where this access point is located | [optional]
**timezone** | **string** | Timezone of access point | [optional]
**type** | [**\OpenAPI\Client\Model\shipping\AccessPointType**](AccessPointType.md) |  | [optional]
**accessibility_attributes** | [**\OpenAPI\Client\Model\shipping\AccessibilityAttributes**](AccessibilityAttributes.md) |  | [optional]
**address** | [**\OpenAPI\Client\Model\shipping\Address**](Address.md) |  | [optional]
**exception_operating_hours** | [**\OpenAPI\Client\Model\shipping\ExceptionOperatingHours[]**](ExceptionOperatingHours.md) |  | [optional]
**assistance_type** | **string** |  | [optional]
**score** | **string** | The score of access point, based on proximity to postal code and sorting preference. This can be used to sort access point results on shipper&#39;s end. | [optional]
**standard_operating_hours** | [**array<string,\OpenAPI\Client\Model\shipping\OperatingHours>**](OperatingHours.md) | Map of day of the week to operating hours of that day | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
