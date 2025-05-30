# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.FulfillmentShipmentPackage
Package information for a shipment in a fulfillment order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PackageNumber** | **int** | Identifies a package in a shipment. | 
**CarrierCode** | **string** | Identifies the carrier who will deliver the shipment to the recipient. | 
**TrackingNumber** | **string** | The tracking number, if provided, can be used to obtain tracking and delivery information. | [optional] 
**EstimatedArrivalDate** | **DateTime** | Date timestamp | [optional] 
**LockerDetails** | [**LockerDetails**](LockerDetails.md) |  | [optional] 
**DeliveryInformation** | [**DeliveryInformation**](DeliveryInformation.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

