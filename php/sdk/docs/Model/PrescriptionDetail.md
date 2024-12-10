# # PrescriptionDetail

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prescription_id** | **string** | The identifier for the prescription used to verify the regulated product. |
**expiration_date** | **\DateTime** | The expiration date of the prescription used to verify the regulated product, in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format. |
**written_quantity** | **int** | The number of units in each fill as provided in the prescription. |
**total_refills_authorized** | **int** | The total number of refills written in the original prescription used to verify the regulated product. If a prescription originally had no refills, this value must be 0. |
**refills_remaining** | **int** | The number of refills remaining for the prescription used to verify the regulated product. If a prescription originally had 10 total refills, this value must be &#x60;10&#x60; for the first order, &#x60;9&#x60; for the second order, and &#x60;0&#x60; for the eleventh order. If a prescription originally had no refills, this value must be 0. |
**clinic_id** | **string** | The identifier for the clinic which provided the prescription used to verify the regulated product. |
**usage_instructions** | **string** | The instructions for the prescription as provided by the approver of the regulated product. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
