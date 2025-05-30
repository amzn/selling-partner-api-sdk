# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.FulfillmentShipmentItem
Item information for a shipment in a fulfillment order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellerSku** | **string** | The seller SKU of the item. | 
**SellerFulfillmentOrderItemId** | **string** | The fulfillment order item identifier that the seller created and submitted with a call to the &#x60;createFulfillmentOrder&#x60; operation. | 
**Quantity** | **int** | The item quantity. | 
**PackageNumber** | **int** | An identifier for the package that contains the item quantity. | [optional] 
**SerialNumber** | **string** | The serial number of the shipped item. | [optional] 
**ManufacturerLotCodes** | **List&lt;string&gt;** | String list | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

