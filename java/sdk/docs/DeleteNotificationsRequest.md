# DeleteNotificationsRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**templateId** | **String** | The unique identifier of the notification template you used to onboard your application. | 
**deletionReason** | [**DeletionReasonEnum**](#DeletionReasonEnum) | The unique identifier that maps each notification status to a reason code. | 

<a name="DeletionReasonEnum"></a>
## Enum: DeletionReasonEnum
Name | Value
---- | -----
CONTENT | &quot;INCORRECT_CONTENT&quot;
RECIPIENT | &quot;INCORRECT_RECIPIENT&quot;
