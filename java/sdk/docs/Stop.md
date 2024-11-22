# Stop

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**functionCode** | [**FunctionCodeEnum**](#FunctionCodeEnum) | Provide the function code. | 
**locationIdentification** | [**Location**](Location.md) |  |  [optional]
**arrivalTime** | [**OffsetDateTime**](OffsetDateTime.md) | Date and time of the arrival of the cargo. |  [optional]
**departureTime** | [**OffsetDateTime**](OffsetDateTime.md) | Date and time of the departure of the cargo. |  [optional]

<a name="FunctionCodeEnum"></a>
## Enum: FunctionCodeEnum
Name | Value
---- | -----
PORTOFDISCHARGE | &quot;PortOfDischarge&quot;
FREIGHTPAYABLEAT | &quot;FreightPayableAt&quot;
PORTOFLOADING | &quot;PortOfLoading&quot;
