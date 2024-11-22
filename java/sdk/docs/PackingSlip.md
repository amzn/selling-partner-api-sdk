# PackingSlip

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**purchaseOrderNumber** | **String** | Purchase order number of the shipment that the packing slip is for. | 
**content** | **String** | A Base64encoded string of the packing slip PDF. | 
**contentType** | [**ContentTypeEnum**](#ContentTypeEnum) | The format of the file such as PDF, JPEG etc. |  [optional]

<a name="ContentTypeEnum"></a>
## Enum: ContentTypeEnum
Name | Value
---- | -----
APPLICATION_PDF | &quot;application/pdf&quot;
