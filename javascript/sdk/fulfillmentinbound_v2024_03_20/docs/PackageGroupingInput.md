# TheSellingPartnerApiForFbaInboundOperations.PackageGroupingInput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**boxes** | [**[BoxInput]**](BoxInput.md) | Box level information being provided. | 
**packingGroupId** | **String** | The ID of the &#x60;packingGroup&#x60; that packages are grouped according to. The &#x60;PackingGroupId&#x60; can only be provided before placement confirmation, and it must belong to the confirmed &#x60;PackingOption&#x60;. One of &#x60;ShipmentId&#x60; or &#x60;PackingGroupId&#x60; must be provided with every request. | [optional] 
**shipmentId** | **String** | The ID of the shipment that packages are grouped according to. The &#x60;ShipmentId&#x60; can only be provided after placement confirmation, and the shipment must belong to the confirmed placement option. One of &#x60;ShipmentId&#x60; or &#x60;PackingGroupId&#x60; must be provided with every request. | [optional] 


