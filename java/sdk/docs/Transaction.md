# Transaction

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transactionId** | **String** | The unique identifier returned in the &#x27;transactionId&#x27; field in response to the post request of a specific transaction. | 
**status** | [**StatusEnum**](#StatusEnum) | Current processing status of the transaction. | 
**errors** | [**ErrorList**](ErrorList.md) |  |  [optional]

<a name="StatusEnum"></a>
## Enum: StatusEnum
Name | Value
---- | -----
FAILURE | &quot;Failure&quot;
PROCESSING | &quot;Processing&quot;
SUCCESS | &quot;Success&quot;
