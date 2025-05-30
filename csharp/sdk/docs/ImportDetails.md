# software.amzn.spapi.Model.vendor.shipments.v1.ImportDetails
Provide these fields only if this shipment is a direct import.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MethodOfPayment** | **string** | This is used for import purchase orders only. If the recipient requests, this field will contain the shipment method of payment. | [optional] 
**SealNumber** | **string** | The container&#39;s seal number. | [optional] 
**Route** | [**Route**](Route.md) |  | [optional] 
**ImportContainers** | **string** | Types and numbers of container(s) for import purchase orders. Can be a comma-separated list if shipment has multiple containers. | [optional] 
**BillableWeight** | [**Weight**](Weight.md) |  | [optional] 
**EstimatedShipByDate** | **DateTime** | Date on which the shipment is expected to be shipped. This value should not be in the past and not more than 60 days out in the future. | [optional] 
**HandlingInstructions** | **string** | Identification of the instructions on how specified item/carton/pallet should be handled. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

