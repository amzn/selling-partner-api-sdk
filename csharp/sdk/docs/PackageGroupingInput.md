# software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20.PackageGroupingInput
Packing information for the inbound plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Boxes** | [**List&lt;BoxInput&gt;**](BoxInput.md) | Box level information being provided. | 
**PackingGroupId** | **string** | The ID of the &#x60;packingGroup&#x60; that packages are grouped according to. The &#x60;PackingGroupId&#x60; can only be provided before placement confirmation, and it must belong to the confirmed &#x60;PackingOption&#x60;. One of &#x60;ShipmentId&#x60; or &#x60;PackingGroupId&#x60; must be provided with every request. | [optional] 
**ShipmentId** | **string** | The ID of the shipment that packages are grouped according to. The &#x60;ShipmentId&#x60; can only be provided after placement confirmation, and the shipment must belong to the confirmed placement option. One of &#x60;ShipmentId&#x60; or &#x60;PackingGroupId&#x60; must be provided with every request. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

