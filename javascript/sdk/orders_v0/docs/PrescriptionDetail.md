# SellingPartnerApiForOrders.PrescriptionDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prescriptionId** | **String** | The identifier for the prescription used to verify the regulated product. | 
**expirationDate** | **Date** | The expiration date of the prescription used to verify the regulated product, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format. | 
**writtenQuantity** | **Number** | The number of units in each fill as provided in the prescription. | 
**totalRefillsAuthorized** | **Number** | The total number of refills written in the original prescription used to verify the regulated product. If a prescription originally had no refills, this value must be 0. | 
**refillsRemaining** | **Number** | The number of refills remaining for the prescription used to verify the regulated product. If a prescription originally had 10 total refills, this value must be &#x60;10&#x60; for the first order, &#x60;9&#x60; for the second order, and &#x60;0&#x60; for the eleventh order. If a prescription originally had no refills, this value must be 0. | 
**clinicId** | **String** | The identifier for the clinic which provided the prescription used to verify the regulated product. | 
**usageInstructions** | **String** | The instructions for the prescription as provided by the approver of the regulated product. | 


