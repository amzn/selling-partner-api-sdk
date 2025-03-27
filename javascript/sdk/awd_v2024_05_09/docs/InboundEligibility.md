# TheSellingPartnerApiForAmazonWarehousingAndDistribution.InboundEligibility

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ineligibilityReasons** | [**[OrderIneligibilityReason]**](OrderIneligibilityReason.md) | If there are order level eligibility issues, then this list will contain those error codes and descriptions. | [optional] 
**packagesToInbound** | [**[SkuEligibility]**](SkuEligibility.md) | Details on SKU eligibility for each inbound package. | 
**previewedAt** | **Date** | Timestamp when the eligibility check is performed. | 
**status** | [**InboundEligibilityStatus**](InboundEligibilityStatus.md) |  | 


