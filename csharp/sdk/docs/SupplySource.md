# software.amzn.spapi.Model.supplySources.v2020_07_01.SupplySource
The supply source details, including configurations and capabilities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SupplySourceId** | **string** | An Amazon generated unique supply source ID. | [optional] 
**SupplySourceCode** | **string** | The seller-provided unique supply source code. | [optional] 
**Alias** | **string** | The custom alias for this supply source | [optional] 
**Status** | **SupplySourceStatusReadOnly** |  | [optional] 
**Address** | [**Address**](Address.md) |  | [optional] 
**VarConfiguration** | [**SupplySourceConfiguration**](SupplySourceConfiguration.md) |  | [optional] 
**Capabilities** | [**SupplySourceCapabilities**](SupplySourceCapabilities.md) |  | [optional] 
**CreatedAt** | **string** | A date and time in the rfc3339 format. | [optional] 
**UpdatedAt** | **string** | A date and time in the rfc3339 format. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

