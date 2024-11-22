# ShipmentSchedule

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**estimatedDeliveryDateTime** | [**OffsetDateTime**](OffsetDateTime.md) | Date on which the shipment is expected to reach the customer delivery location. This field is expected to be in ISO-8601 date/time format, with UTC time zone or UTC offset. For example, 2020-07-16T23:00:00Z or 2020-07-16T23:00:00+01:00. |  [optional]
**apptWindowStartDateTime** | [**OffsetDateTime**](OffsetDateTime.md) | This field indicates the date and time at the start of the appointment window scheduled to deliver the shipment. This field is expected to be in ISO-8601 date/time format, with UTC time zone or UTC offset. For example, 2020-07-16T23:00:00Z or 2020-07-16T23:00:00+01:00. |  [optional]
**apptWindowEndDateTime** | [**OffsetDateTime**](OffsetDateTime.md) | This field indicates the date and time at the end of the appointment window scheduled to deliver the shipment. This field is expected to be in ISO-8601 date/time format, with UTC time zone or UTC offset. For example, 2020-07-16T23:00:00Z or 2020-07-16T23:00:00+01:00. |  [optional]
