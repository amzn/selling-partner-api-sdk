# AmazonShippingApi.GetRatesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**shipTo** | [**Address**](Address.md) |  | [optional] 
**shipFrom** | [**Address**](Address.md) |  | 
**returnTo** | [**Address**](Address.md) |  | [optional] 
**shipDate** | **Date** | The ship date and time (the requested pickup). This defaults to the current date and time. | [optional] 
**shipperInstruction** | [**ShipperInstruction**](ShipperInstruction.md) |  | [optional] 
**packages** | [**[Package]**](Package.md) | A list of packages to be shipped through a shipping service offering. | 
**valueAddedServices** | [**ValueAddedServiceDetails**](ValueAddedServiceDetails.md) |  | [optional] 
**taxDetails** | [**[TaxDetail]**](TaxDetail.md) | A list of tax detail information. | [optional] 
**channelDetails** | [**ChannelDetails**](ChannelDetails.md) |  | 
**clientReferenceDetails** | [**[ClientReferenceDetail]**](ClientReferenceDetail.md) | Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail | [optional] 
**shipmentType** | [**ShipmentType**](ShipmentType.md) |  | [optional] 
**destinationAccessPointDetails** | [**AccessPointDetails**](AccessPointDetails.md) |  | [optional] 
**carrierAccounts** | [**[CarrierAccount]**](CarrierAccount.md) | A list of CarrierAccounts | [optional] 


