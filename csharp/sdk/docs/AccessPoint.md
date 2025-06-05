# software.amzn.spapi.Model.shipping.v2.AccessPoint
Access point details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AccessPointId** | **string** | Unique identifier for the access point | [optional] 
**Name** | **string** | Name of entity (store/hub etc) where this access point is located | [optional] 
**Timezone** | **string** | Timezone of access point | [optional] 
**Type** | **AccessPointType** |  | [optional] 
**AccessibilityAttributes** | [**AccessibilityAttributes**](AccessibilityAttributes.md) |  | [optional] 
**Address** | [**Address**](Address.md) |  | [optional] 
**ExceptionOperatingHours** | [**List&lt;ExceptionOperatingHours&gt;**](ExceptionOperatingHours.md) | Exception operating hours for Access Point | [optional] 
**AssistanceType** | **string** | Assistance type enum for Access point i.e. STAFF_ASSISTED or SELF_ASSISTED | [optional] 
**Score** | **string** | The score of access point, based on proximity to postal code and sorting preference. This can be used to sort access point results on shipper&#39;s end. | [optional] 
**StandardOperatingHours** | [**Dictionary&lt;string, OperatingHours&gt;**](OperatingHours.md) | Map of day of the week to operating hours of that day | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

