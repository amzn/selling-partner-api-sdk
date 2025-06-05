# software.amzn.spapi.Model.finances.v0.AdjustmentEvent
An adjustment to the seller's account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AdjustmentType** | **string** | The type of adjustment.  Possible values:  * FBAInventoryReimbursement - An FBA inventory reimbursement to a seller&#39;s account. This occurs if a seller&#39;s inventory is damaged.  * ReserveEvent - A reserve event that is generated at the time of a settlement period closing. This occurs when some money from a seller&#39;s account is held back.  * PostageBilling - The amount paid by a seller for shipping labels.  * PostageRefund - The reimbursement of shipping labels purchased for orders that were canceled or refunded.  * LostOrDamagedReimbursement - An Amazon Easy Ship reimbursement to a seller&#39;s account for a package that we lost or damaged.  * CanceledButPickedUpReimbursement - An Amazon Easy Ship reimbursement to a seller&#39;s account. This occurs when a package is picked up and the order is subsequently canceled. This value is used only in the India marketplace.  * ReimbursementClawback - An Amazon Easy Ship reimbursement clawback from a seller&#39;s account. This occurs when a prior reimbursement is reversed. This value is used only in the India marketplace.  * SellerRewards - An award credited to a seller&#39;s account for their participation in an offer in the Seller Rewards program. Applies only to the India marketplace. | [optional] 
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**StoreName** | **string** | The name of the store where the event occurred. | [optional] 
**AdjustmentAmount** | [**Currency**](Currency.md) |  | [optional] 
**AdjustmentItemList** | [**List&lt;AdjustmentItem&gt;**](AdjustmentItem.md) | A list of information about items in an adjustment to the seller&#39;s account. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

