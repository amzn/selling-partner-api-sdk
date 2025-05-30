# software.amzn.spapi.Model.fulfillment.inbound.v2024_03_20.PlacementOption
Contains information pertaining to the placement of the contents of an inbound plan and the related costs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Discounts** | [**List&lt;Incentive&gt;**](Incentive.md) | Discount for the offered option. | 
**Expiration** | **DateTime** | The expiration date of the placement option. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern &#x60;yyyy-MM-ddTHH:mm:ss.sssZ&#x60;. | [optional] 
**Fees** | [**List&lt;Incentive&gt;**](Incentive.md) | The fee for the offered option. | 
**PlacementOptionId** | **string** | The identifier of a placement option. A placement option represents the shipment splits and destinations of SKUs. | 
**ShipmentIds** | **List&lt;string&gt;** | Shipment ids. | 
**Status** | **string** | The status of a placement option. Possible values: &#x60;OFFERED&#x60;, &#x60;ACCEPTED&#x60;, &#x60;EXPIRED&#x60;. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

