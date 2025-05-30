# software.amzn.spapi.Model.merchantFulfillment.v0.CreateShipmentRequest
Request schema.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ShipmentRequestDetails** | [**ShipmentRequestDetails**](ShipmentRequestDetails.md) |  | 
**ShippingServiceId** | **string** | An Amazon-defined shipping service identifier. | 
**ShippingServiceOfferId** | **string** | Identifies a shipping service order made by a carrier. | [optional] 
**HazmatType** | **HazmatType** |  | [optional] 
**LabelFormatOption** | [**LabelFormatOptionRequest**](LabelFormatOptionRequest.md) |  | [optional] 
**ShipmentLevelSellerInputsList** | [**List&lt;AdditionalSellerInputs&gt;**](AdditionalSellerInputs.md) | A list of additional seller input pairs required to purchase shipping. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

