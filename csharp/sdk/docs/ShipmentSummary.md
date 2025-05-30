# software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20.ShipmentSummary
Summary information about a shipment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ShipmentId** | **string** | Identifier of a shipment. A shipment contains the boxes and units being inbounded. | 
**Status** | **string** | The status of a shipment. The state of the shipment will typically start as &#x60;UNCONFIRMED&#x60;, then transition to &#x60;WORKING&#x60; after a placement option has been confirmed, and then to &#x60;READY_TO_SHIP&#x60; once labels are generated.  Possible values: &#x60;ABANDONED&#x60;, &#x60;CANCELLED&#x60;, &#x60;CHECKED_IN&#x60;, &#x60;CLOSED&#x60;, &#x60;DELETED&#x60;, &#x60;DELIVERED&#x60;, &#x60;IN_TRANSIT&#x60;, &#x60;MIXED&#x60;, &#x60;READY_TO_SHIP&#x60;, &#x60;RECEIVING&#x60;, &#x60;SHIPPED&#x60;, &#x60;UNCONFIRMED&#x60;, &#x60;WORKING&#x60; | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

