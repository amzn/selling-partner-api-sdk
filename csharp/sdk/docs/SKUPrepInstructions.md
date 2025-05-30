# software.amzn.spapi.Model.fulfillment.inbound.v0.SKUPrepInstructions
Labeling requirements and item preparation instructions to help you prepare items for shipment to Amazon's fulfillment network.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellerSKU** | **string** | The seller SKU of the item. | [optional] 
**ASIN** | **string** | The Amazon Standard Identification Number (ASIN) of the item. | [optional] 
**BarcodeInstruction** | **BarcodeInstruction** |  | [optional] 
**PrepGuidance** | **PrepGuidance** |  | [optional] 
**PrepInstructionList** | [**List&lt;PrepInstruction&gt;**](PrepInstruction.md) | A list of preparation instructions to help with item sourcing decisions. | [optional] 
**AmazonPrepFeesDetailsList** | [**List&lt;AmazonPrepFeesDetails&gt;**](AmazonPrepFeesDetails.md) | A list of preparation instructions and fees for Amazon to prep goods for shipment. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

