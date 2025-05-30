# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.PackageTrackingDetails
Tracking details of package

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PackageNumber** | **int** | The package identifier. | 
**TrackingNumber** | **string** | The tracking number for the package. | [optional] 
**CustomerTrackingLink** | **string** | Link on swiship.com that allows customers to track the package. | [optional] 
**CarrierCode** | **string** | The name of the carrier. | [optional] 
**CarrierPhoneNumber** | **string** | The phone number of the carrier. | [optional] 
**CarrierURL** | **string** | The URL of the carrier&#39;s website. | [optional] 
**ShipDate** | **DateTime** | Date timestamp | [optional] 
**EstimatedArrivalDate** | **DateTime** | Date timestamp | [optional] 
**ShipToAddress** | [**TrackingAddress**](TrackingAddress.md) |  | [optional] 
**CurrentStatus** | **CurrentStatus** |  | [optional] 
**CurrentStatusDescription** | **string** | Description corresponding to the CurrentStatus value. | [optional] 
**DeliveryWindow** | [**DateRange**](DateRange.md) |  | [optional] 
**SignedForBy** | **string** | The name of the person who signed for the package. | [optional] 
**AdditionalLocationInfo** | **AdditionalLocationInfo** |  | [optional] 
**TrackingEvents** | [**List&lt;TrackingEvent&gt;**](TrackingEvent.md) | An array of tracking event information. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

