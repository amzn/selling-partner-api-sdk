# software.amzn.spapi.Model.finances.v0.SAFETReimbursementEvent
A SAFE-T claim reimbursement on the seller's account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**SAFETClaimId** | **string** | A SAFE-T claim identifier. | [optional] 
**ReimbursedAmount** | [**Currency**](Currency.md) |  | [optional] 
**ReasonCode** | **string** | Indicates why the seller was reimbursed. | [optional] 
**SAFETReimbursementItemList** | [**List&lt;SAFETReimbursementItem&gt;**](SAFETReimbursementItem.md) | A list of SAFETReimbursementItems. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

