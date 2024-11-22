# FulfillmentOrder

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerFulfillmentOrderId** | **String** | The fulfillment order identifier submitted with the &#x60;createFulfillmentOrder&#x60; operation. | 
**marketplaceId** | **String** | The identifier for the marketplace the fulfillment order is placed against. | 
**displayableOrderId** | **String** | A fulfillment order identifier submitted with the &#x60;createFulfillmentOrder&#x60; operation. Displays as the order identifier in recipient-facing materials such as the packing slip. | 
**displayableOrderDate** | [**OffsetDateTime**](OffsetDateTime.md) |  | 
**displayableOrderComment** | **String** | A text block submitted with the &#x60;createFulfillmentOrder&#x60; operation. Displays in recipient-facing materials such as the packing slip. | 
**shippingSpeedCategory** | [**ShippingSpeedCategory**](ShippingSpeedCategory.md) |  | 
**deliveryWindow** | [**DeliveryWindow**](DeliveryWindow.md) |  |  [optional]
**destinationAddress** | [**Address**](Address.md) |  | 
**fulfillmentAction** | [**FulfillmentAction**](FulfillmentAction.md) |  |  [optional]
**fulfillmentPolicy** | [**FulfillmentPolicy**](FulfillmentPolicy.md) |  |  [optional]
**codSettings** | [**CODSettings**](CODSettings.md) |  |  [optional]
**receivedDate** | [**OffsetDateTime**](OffsetDateTime.md) |  | 
**fulfillmentOrderStatus** | [**FulfillmentOrderStatus**](FulfillmentOrderStatus.md) |  | 
**statusUpdatedDate** | [**OffsetDateTime**](OffsetDateTime.md) |  | 
**notificationEmails** | [**NotificationEmailList**](NotificationEmailList.md) |  |  [optional]
**featureConstraints** | [**List&lt;FeatureSettings&gt;**](FeatureSettings.md) | A list of features and their fulfillment policies to apply to the order. |  [optional]
