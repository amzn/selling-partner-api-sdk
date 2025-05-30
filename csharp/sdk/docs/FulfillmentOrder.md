# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.FulfillmentOrder
General information about a fulfillment order, including its status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SellerFulfillmentOrderId** | **string** | The fulfillment order identifier submitted with the &#x60;createFulfillmentOrder&#x60; operation. | 
**MarketplaceId** | **string** | The identifier for the marketplace the fulfillment order is placed against. | 
**DisplayableOrderId** | **string** | A fulfillment order identifier submitted with the &#x60;createFulfillmentOrder&#x60; operation. Displays as the order identifier in recipient-facing materials such as the packing slip. | 
**DisplayableOrderDate** | **DateTime** | Date timestamp | 
**DisplayableOrderComment** | **string** | A text block submitted with the &#x60;createFulfillmentOrder&#x60; operation. Displays in recipient-facing materials such as the packing slip. | 
**ShippingSpeedCategory** | **ShippingSpeedCategory** |  | 
**DeliveryWindow** | [**DeliveryWindow**](DeliveryWindow.md) |  | [optional] 
**DestinationAddress** | [**Address**](Address.md) |  | 
**FulfillmentAction** | **FulfillmentAction** |  | [optional] 
**FulfillmentPolicy** | **FulfillmentPolicy** |  | [optional] 
**CodSettings** | [**CODSettings**](CODSettings.md) |  | [optional] 
**ReceivedDate** | **DateTime** | Date timestamp | 
**FulfillmentOrderStatus** | **FulfillmentOrderStatus** |  | 
**StatusUpdatedDate** | **DateTime** | Date timestamp | 
**NotificationEmails** | **List&lt;string&gt;** | A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller. | [optional] 
**FeatureConstraints** | [**List&lt;FeatureSettings&gt;**](FeatureSettings.md) | A list of features and their fulfillment policies to apply to the order. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

