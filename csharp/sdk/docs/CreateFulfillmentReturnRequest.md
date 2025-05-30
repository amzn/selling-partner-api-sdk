# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.CreateFulfillmentReturnRequest
The `createFulfillmentReturn` operation creates a fulfillment return for items that were fulfilled using the `createFulfillmentOrder` operation. For calls to `createFulfillmentReturn`, you must include `ReturnReasonCode` values returned by a previous call to the `listReturnReasonCodes` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Items** | [**List&lt;CreateReturnItem&gt;**](CreateReturnItem.md) | An array of items to be returned. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

