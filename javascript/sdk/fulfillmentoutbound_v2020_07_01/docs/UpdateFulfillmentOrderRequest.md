# SellingPartnerApisForFulfillmentOutbound.UpdateFulfillmentOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplaceId** | **String** | The marketplace the fulfillment order is placed against. | [optional] 
**displayableOrderId** | **String** | A fulfillment order identifier that the seller creates. This value displays as the order identifier in recipient-facing materials such as the outbound shipment packing slip. The value of &#x60;DisplayableOrderId&#x60; should match the order identifier that the seller provides to the recipient. The seller can use the &#x60;SellerFulfillmentOrderId&#x60; for this value or they can specify an alternate value if they want the recipient to reference an alternate order identifier. | [optional] 
**displayableOrderDate** | **Date** | Date timestamp | [optional] 
**displayableOrderComment** | **String** | Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip. | [optional] 
**shippingSpeedCategory** | [**ShippingSpeedCategory**](ShippingSpeedCategory.md) |  | [optional] 
**destinationAddress** | [**Address**](Address.md) |  | [optional] 
**fulfillmentAction** | [**FulfillmentAction**](FulfillmentAction.md) |  | [optional] 
**fulfillmentPolicy** | [**FulfillmentPolicy**](FulfillmentPolicy.md) |  | [optional] 
**shipFromCountryCode** | **String** | The two-character country code for the country from which the fulfillment order ships. Must be in ISO 3166-1 alpha-2 format. | [optional] 
**notificationEmails** | **[String]** | A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller. | [optional] 
**featureConstraints** | [**[FeatureSettings]**](FeatureSettings.md) | A list of features and their fulfillment policies to apply to the order. | [optional] 
**items** | [**[UpdateFulfillmentOrderItem]**](UpdateFulfillmentOrderItem.md) | An array of fulfillment order item information for updating a fulfillment order. | [optional] 


