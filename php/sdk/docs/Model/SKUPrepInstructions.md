# # SKUPrepInstructions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**seller_sku** | **string** | The seller SKU of the item. | [optional]
**asin** | **string** | The Amazon Standard Identification Number (ASIN) of the item. | [optional]
**barcode_instruction** | [**\OpenAPI\Client\Model\fulfillmentInboundV0\BarcodeInstruction**](BarcodeInstruction.md) |  | [optional]
**prep_guidance** | [**\OpenAPI\Client\Model\fulfillmentInboundV0\PrepGuidance**](PrepGuidance.md) |  | [optional]
**prep_instruction_list** | [**\OpenAPI\Client\Model\fulfillmentInboundV0\PrepInstruction[]**](PrepInstruction.md) | A list of preparation instructions to help with item sourcing decisions. | [optional]
**amazon_prep_fees_details_list** | [**\OpenAPI\Client\Model\fulfillmentInboundV0\AmazonPrepFeesDetails[]**](AmazonPrepFeesDetails.md) | A list of preparation instructions and fees for Amazon to prep goods for shipment. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
