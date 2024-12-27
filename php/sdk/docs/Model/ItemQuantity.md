# # ItemQuantity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **int** | Amount of units shipped for a specific item at a shipment level. If the item is present only in certain cartons or pallets within the shipment, please provide this at the appropriate carton or pallet level. |
**unit_of_measure** | **string** | Unit of measure for the shipped quantity. |
**unit_size** | **int** | The case size, in the event that we ordered using cases. Otherwise, 1. | [optional]
**total_weight** | [**\OpenAPI\Client\Model\vendor.shipments\TotalWeight**](TotalWeight.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
