# software.amzn.spapi.Model.shipping.v2.GetRatesRequest
The request schema for the getRates operation. When the channelType is Amazon, the shipTo address is not required and will be ignored.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ShipTo** | [**Address**](Address.md) |  | [optional] 
**ShipFrom** | [**Address**](Address.md) |  | 
**ReturnTo** | [**Address**](Address.md) |  | [optional] 
**ShipDate** | **DateTime** | The ship date and time (the requested pickup). This defaults to the current date and time. | [optional] 
**ShipperInstruction** | [**ShipperInstruction**](ShipperInstruction.md) |  | [optional] 
**Packages** | [**List&lt;Package&gt;**](Package.md) | A list of packages to be shipped through a shipping service offering. | 
**ValueAddedServices** | [**ValueAddedServiceDetails**](ValueAddedServiceDetails.md) |  | [optional] 
**TaxDetails** | [**List&lt;TaxDetail&gt;**](TaxDetail.md) | A list of tax detail information. | [optional] 
**ChannelDetails** | [**ChannelDetails**](ChannelDetails.md) |  | 
**ClientReferenceDetails** | [**List&lt;ClientReferenceDetail&gt;**](ClientReferenceDetail.md) | Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail | [optional] 
**ShipmentType** | **ShipmentType** |  | [optional] 
**DestinationAccessPointDetails** | [**AccessPointDetails**](AccessPointDetails.md) |  | [optional] 
**CarrierAccounts** | [**List&lt;CarrierAccount&gt;**](CarrierAccount.md) | A list of CarrierAccounts | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

