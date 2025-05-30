# software.amzn.spapi.Model.awd.v2024_05_09.InboundEligibility
Represents the eligibility status of the inbound packages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IneligibilityReasons** | [**List&lt;OrderIneligibilityReason&gt;**](OrderIneligibilityReason.md) | If there are order level eligibility issues, then this list will contain those error codes and descriptions. | [optional] 
**PackagesToInbound** | [**List&lt;SkuEligibility&gt;**](SkuEligibility.md) | Details on SKU eligibility for each inbound package. | 
**PreviewedAt** | **DateTime** | Timestamp when the eligibility check is performed. | 
**Status** | **InboundEligibilityStatus** |  | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

