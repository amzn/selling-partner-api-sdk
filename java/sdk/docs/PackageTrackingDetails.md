# PackageTrackingDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**packageNumber** | **Integer** | The package identifier. | 
**trackingNumber** | **String** | The tracking number for the package. |  [optional]
**customerTrackingLink** | **String** | Link on swiship.com that allows customers to track the package. |  [optional]
**carrierCode** | **String** | The name of the carrier. |  [optional]
**carrierPhoneNumber** | **String** | The phone number of the carrier. |  [optional]
**carrierURL** | **String** | The URL of the carrier&#x27;s website. |  [optional]
**shipDate** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**estimatedArrivalDate** | [**OffsetDateTime**](OffsetDateTime.md) |  |  [optional]
**shipToAddress** | [**TrackingAddress**](TrackingAddress.md) |  |  [optional]
**currentStatus** | [**CurrentStatus**](CurrentStatus.md) |  |  [optional]
**currentStatusDescription** | **String** | Description corresponding to the &#x60;CurrentStatus&#x60; value. |  [optional]
**signedForBy** | **String** | The name of the person who signed for the package. |  [optional]
**additionalLocationInfo** | [**AdditionalLocationInfo**](AdditionalLocationInfo.md) |  |  [optional]
**trackingEvents** | [**TrackingEventList**](TrackingEventList.md) |  |  [optional]
