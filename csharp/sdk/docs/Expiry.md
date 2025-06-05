# software.amzn.spapi.Model.vendor.shipments.v1.Expiry
Expiry refers to the collection of dates required  for certain items. These could be either expiryDate or mfgDate and expiryAfterDuration. These are mandatory for perishable items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ManufacturerDate** | **DateTime** | Production, packaging or assembly date determined by the manufacturer. Its meaning is determined based on the trade item context. | [optional] 
**ExpiryDate** | **DateTime** | The date that determines the limit of consumption or use of a product. Its meaning is determined based on the trade item context. | [optional] 
**ExpiryAfterDuration** | [**Duration**](Duration.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

