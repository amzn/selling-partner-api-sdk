# software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20.DeliveryWindowOption
Contains information pertaining to a delivery window option.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AvailabilityType** | **string** | Identifies type of Delivery Window Availability. Values: &#x60;AVAILABLE&#x60;, &#x60;CONGESTED&#x60; | 
**DeliveryWindowOptionId** | **string** | Identifier of a delivery window option. A delivery window option represent one option for when a shipment is expected to be delivered. | 
**EndDate** | **DateTime** | The time at which this delivery window option ends. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mmZ&#x60;. | 
**StartDate** | **DateTime** | The time at which this delivery window option starts. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mmZ&#x60;. | 
**ValidUntil** | **DateTime** | The time at which this window delivery option is no longer valid. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mmZ&#x60;. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

