# # FulfillmentShipmentPackage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_number** | **int** | Identifies a package in a shipment. |
**carrier_code** | **string** | Identifies the carrier who will deliver the shipment to the recipient. |
**tracking_number** | **string** | The tracking number, if provided, can be used to obtain tracking and delivery information. | [optional]
**estimated_arrival_date** | **\DateTime** | Date timestamp | [optional]
**locker_details** | [**\OpenAPI\Client\Model\fulfillmentOutbound\LockerDetails**](LockerDetails.md) |  | [optional]
**delivery_information** | [**\OpenAPI\Client\Model\fulfillmentOutbound\DeliveryInformation**](DeliveryInformation.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
