# SellingPartnerApiForFinances.RemovalShipmentItemAdjustment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**removalShipmentItemId** | **String** | An identifier for an item in a removal shipment. | [optional] 
**taxCollectionModel** | **String** | The tax collection model applied to the item.  Possible values:  * MarketplaceFacilitator - Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller.  * Standard - Tax is paid to the seller and not remitted to the taxing authority by Amazon. | [optional] 
**fulfillmentNetworkSKU** | **String** | The Amazon fulfillment network SKU for the item. | [optional] 
**adjustedQuantity** | **Number** | Adjusted quantity of removal shipmentItemAdjustment items. | [optional] 
**revenueAdjustment** | [**Currency**](Currency.md) |  | [optional] 
**taxAmountAdjustment** | [**Currency**](Currency.md) |  | [optional] 
**taxWithheldAdjustment** | [**Currency**](Currency.md) |  | [optional] 


