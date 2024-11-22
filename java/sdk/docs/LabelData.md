# LabelData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labelSequenceNumber** | **Integer** | Label list sequence number |  [optional]
**labelFormat** | [**LabelFormatEnum**](#LabelFormatEnum) | Type of the label format like PDF |  [optional]
**carrierCode** | **String** | Unique identification for  the carrier like UPS,DHL,USPS..etc |  [optional]
**trackingId** | **String** | Tracking Id for the transportation. |  [optional]
**label** | **String** | Label created as part of the transportation and it is base64 encoded |  [optional]

<a name="LabelFormatEnum"></a>
## Enum: LabelFormatEnum
Name | Value
---- | -----
PDF | &quot;PDF&quot;
