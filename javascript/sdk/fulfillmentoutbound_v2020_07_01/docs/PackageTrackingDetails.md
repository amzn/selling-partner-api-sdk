# SellingPartnerApisForFulfillmentOutbound.PackageTrackingDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**packageNumber** | **Number** | The package identifier. | 
**trackingNumber** | **String** | The tracking number for the package. | [optional] 
**customerTrackingLink** | **String** | Link on swiship.com that allows customers to track the package. | [optional] 
**carrierCode** | **String** | The name of the carrier. | [optional] 
**carrierPhoneNumber** | **String** | The phone number of the carrier. | [optional] 
**carrierURL** | **String** | The URL of the carrier&#39;s website. | [optional] 
**shipDate** | **Date** | Date timestamp | [optional] 
**estimatedArrivalDate** | **Date** | Date timestamp | [optional] 
**shipToAddress** | [**TrackingAddress**](TrackingAddress.md) |  | [optional] 
**currentStatus** | [**CurrentStatus**](CurrentStatus.md) |  | [optional] 
**currentStatusDescription** | **String** | Description corresponding to the CurrentStatus value. | [optional] 
**deliveryWindow** | [**DateRange**](DateRange.md) |  | [optional] 
**signedForBy** | **String** | The name of the person who signed for the package. | [optional] 
**additionalLocationInfo** | [**AdditionalLocationInfo**](AdditionalLocationInfo.md) |  | [optional] 
**trackingEvents** | [**[TrackingEvent]**](TrackingEvent.md) | An array of tracking event information. | [optional] 


