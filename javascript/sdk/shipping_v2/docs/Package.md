# AmazonShippingApi.Package

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimensions** | [**Dimensions**](Dimensions.md) |  | 
**weight** | [**Weight**](Weight.md) |  | 
**insuredValue** | [**Currency**](Currency.md) |  | 
**isHazmat** | **Boolean** | When true, the package contains hazardous materials. Defaults to false. | [optional] 
**sellerDisplayName** | **String** | The seller name displayed on the label. | [optional] 
**charges** | [**[ChargeComponent]**](ChargeComponent.md) | A list of charges based on the shipping service charges applied on a package. | [optional] 
**packageClientReferenceId** | **String** | A client provided unique identifier for a package being shipped. This value should be saved by the client to pass as a parameter to the getShipmentDocuments operation. | 
**items** | [**[Item]**](Item.md) | A list of items. | 


