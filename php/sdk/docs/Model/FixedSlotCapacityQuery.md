# # FixedSlotCapacityQuery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity_types** | [**\OpenAPI\Client\Model\services\CapacityType[]**](CapacityType.md) | An array of capacity types which are being requested. Default value is &#x60;[SCHEDULED_CAPACITY]&#x60;. | [optional]
**slot_duration** | **float** | Size in which slots are being requested. This value should be a multiple of 5 and fall in the range: 5 &lt;&#x3D; &#x60;slotDuration&#x60; &lt;&#x3D; 360. | [optional]
**start_date_time** | **\DateTime** | Start date time from which the capacity slots are being requested in ISO 8601 format. |
**end_date_time** | **\DateTime** | End date time up to which the capacity slots are being requested in ISO 8601 format. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
