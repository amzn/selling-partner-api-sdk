# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.ReturnAuthorization
Return authorization information for items accepted for return.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ReturnAuthorizationId** | **string** | An identifier for the return authorization. This identifier associates return items with the return authorization used to return them. | 
**FulfillmentCenterId** | **string** | An identifier for the Amazon fulfillment center that the return items should be sent to. | 
**ReturnToAddress** | [**Address**](Address.md) |  | 
**AmazonRmaId** | **string** | The return merchandise authorization (RMA) that Amazon needs to process the return. | 
**RmaPageURL** | **string** | A URL for a web page that contains the return authorization barcode and the mailing label. This does not include pre-paid shipping. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

