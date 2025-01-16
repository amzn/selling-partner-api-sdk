# # SAFETReimbursementEvent

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**posted_date** | **\DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional]
**safet_claim_id** | **string** | A SAFE-T claim identifier. | [optional]
**reimbursed_amount** | [**\OpenAPI\Client\Model\finances\v0\Currency**](Currency.md) |  | [optional]
**reason_code** | **string** | Indicates why the seller was reimbursed. | [optional]
**safet_reimbursement_item_list** | [**\OpenAPI\Client\Model\finances\v0\SAFETReimbursementItem[]**](SAFETReimbursementItem.md) | A list of SAFETReimbursementItems. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
