# software.amzn.spapi.Model.fba.inventory.v1.ReservedQuantity
The quantity of reserved inventory.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TotalReservedQuantity** | **int** | The total number of units in Amazon&#39;s fulfillment network that are currently being picked, packed, and shipped; or are sidelined for measurement, sampling, or other internal processes. | [optional] 
**PendingCustomerOrderQuantity** | **int** | The number of units reserved for customer orders. | [optional] 
**PendingTransshipmentQuantity** | **int** | The number of units being transferred from one fulfillment center to another. | [optional] 
**FcProcessingQuantity** | **int** | The number of units that have been sidelined at the fulfillment center for additional processing. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

