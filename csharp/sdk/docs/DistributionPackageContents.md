# software.amzn.spapi.Model.awd.v2024_05_09.DistributionPackageContents
Represents the contents inside a package, which can be products or a nested package.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Packages** | [**List&lt;DistributionPackageQuantity&gt;**](DistributionPackageQuantity.md) | This is required only when &#x60;DistributionPackageType&#x3D;PALLET&#x60;. | [optional] 
**Products** | [**List&lt;ProductQuantity&gt;**](ProductQuantity.md) | This is required only when &#x60;DistributionPackageType&#x3D;CASE&#x60;. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

