# software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20.PackingConfiguration
A way to configure this packing option. Some box content information sources might not be allowed. Non-standard minimum and maximum box weights might be enforced.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BoxPackingMethods** | [**List&lt;BoxContentInformationSource&gt;**](BoxContentInformationSource.md) | The box content information sources that are allowed. | [optional] 
**BoxRequirements** | [**BoxRequirements**](BoxRequirements.md) |  | [optional] 
**ShippingRequirements** | [**List&lt;ShippingRequirements&gt;**](ShippingRequirements.md) | A list of supported shipping requirements for this packing configuration. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

