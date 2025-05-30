# software.amzn.spapi.Model.vendor.df.shipping.v2021_12_28.CreateContainerLabelRequest
The request body schema for the `createContainerLabel` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellingParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**ShipFromParty** | [**PartyIdentification**](PartyIdentification.md) |  | 
**CarrierId** | **CarrierId** |  | 
**VendorContainerId** | **string** | The unique, vendor-provided identifier for the container. | 
**Packages** | [**List&lt;Package&gt;**](Package.md) | An array of package objects in a container. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

