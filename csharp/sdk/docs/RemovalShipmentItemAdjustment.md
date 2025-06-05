# software.amzn.spapi.Model.finances.v0.RemovalShipmentItemAdjustment
Item-level information for a removal shipment item adjustment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RemovalShipmentItemId** | **string** | An identifier for an item in a removal shipment. | [optional] 
**TaxCollectionModel** | **string** | The tax collection model applied to the item.  Possible values:  * MarketplaceFacilitator - Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller.  * Standard - Tax is paid to the seller and not remitted to the taxing authority by Amazon. | [optional] 
**FulfillmentNetworkSKU** | **string** | The Amazon fulfillment network SKU for the item. | [optional] 
**AdjustedQuantity** | **int** | Adjusted quantity of removal shipmentItemAdjustment items. | [optional] 
**RevenueAdjustment** | [**Currency**](Currency.md) |  | [optional] 
**TaxAmountAdjustment** | [**Currency**](Currency.md) |  | [optional] 
**TaxWithheldAdjustment** | [**Currency**](Currency.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

