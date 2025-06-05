# software.amzn.spapi.Model.finances.v0.TrialShipmentEvent
An event related to a trial shipment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AmazonOrderId** | **string** | An Amazon-defined identifier for an order. | [optional] 
**FinancialEventGroupId** | **string** | The identifier of the financial event group. | [optional] 
**PostedDate** | **DateTime** | Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate). | [optional] 
**SKU** | **string** | The seller SKU of the item. The seller SKU is qualified by the seller&#39;s seller ID, which is included with every call to the Selling Partner API. | [optional] 
**FeeList** | [**List&lt;FeeComponent&gt;**](FeeComponent.md) | A list of fee component information. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

