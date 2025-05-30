# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.UpdateFulfillmentOrderRequest
The request body schema for the `updateFulfillmentOrder` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketplaceId** | **string** | The marketplace the fulfillment order is placed against. | [optional] 
**DisplayableOrderId** | **string** | A fulfillment order identifier that the seller creates. This value displays as the order identifier in recipient-facing materials such as the outbound shipment packing slip. The value of &#x60;DisplayableOrderId&#x60; should match the order identifier that the seller provides to the recipient. The seller can use the &#x60;SellerFulfillmentOrderId&#x60; for this value or they can specify an alternate value if they want the recipient to reference an alternate order identifier. | [optional] 
**DisplayableOrderDate** | **DateTime** | Date timestamp | [optional] 
**DisplayableOrderComment** | **string** | Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip. | [optional] 
**ShippingSpeedCategory** | **ShippingSpeedCategory** |  | [optional] 
**DestinationAddress** | [**Address**](Address.md) |  | [optional] 
**FulfillmentAction** | **FulfillmentAction** |  | [optional] 
**FulfillmentPolicy** | **FulfillmentPolicy** |  | [optional] 
**ShipFromCountryCode** | **string** | The two-character country code for the country from which the fulfillment order ships. Must be in ISO 3166-1 alpha-2 format. | [optional] 
**NotificationEmails** | **List&lt;string&gt;** | A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller. | [optional] 
**FeatureConstraints** | [**List&lt;FeatureSettings&gt;**](FeatureSettings.md) | A list of features and their fulfillment policies to apply to the order. | [optional] 
**Items** | [**List&lt;UpdateFulfillmentOrderItem&gt;**](UpdateFulfillmentOrderItem.md) | An array of fulfillment order item information for updating a fulfillment order. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

