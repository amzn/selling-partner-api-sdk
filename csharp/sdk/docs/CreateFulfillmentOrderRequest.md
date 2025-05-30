# software.amzn.spapi.Model.fulfillment.outbound.v2020_07_01.CreateFulfillmentOrderRequest
The request body schema for the `createFulfillmentOrder` operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MarketplaceId** | **string** | The marketplace the fulfillment order is placed against. | [optional] 
**SellerFulfillmentOrderId** | **string** | A fulfillment order identifier that the seller creates to track their fulfillment order. The &#x60;SellerFulfillmentOrderId&#x60; must be unique for each fulfillment order that a seller creates. If the seller&#39;s system already creates unique order identifiers, then these might be good values for them to use. | 
**DisplayableOrderId** | **string** | A fulfillment order identifier that the seller creates. This value displays as the order identifier in recipient-facing materials such as the outbound shipment packing slip. The value of &#x60;DisplayableOrderId&#x60; should match the order identifier that the seller provides to the recipient. The seller can use the &#x60;SellerFulfillmentOrderId&#x60; for this value or they can specify an alternate value if they want the recipient to reference an alternate order identifier.  The value must be an alpha-numeric or ISO 8859-1 compliant string from one to 40 characters in length. Cannot contain two spaces in a row. Leading and trailing white space is removed. | 
**DisplayableOrderDate** | **DateTime** | Date timestamp | 
**DisplayableOrderComment** | **string** | Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip. | 
**ShippingSpeedCategory** | **ShippingSpeedCategory** |  | 
**DeliveryWindow** | [**DeliveryWindow**](DeliveryWindow.md) |  | [optional] 
**DestinationAddress** | [**Address**](Address.md) |  | 
**DeliveryPreferences** | [**DeliveryPreferences**](DeliveryPreferences.md) |  | [optional] 
**FulfillmentAction** | **FulfillmentAction** |  | [optional] 
**FulfillmentPolicy** | **FulfillmentPolicy** |  | [optional] 
**CodSettings** | [**CODSettings**](CODSettings.md) |  | [optional] 
**ShipFromCountryCode** | **string** | The two-character country code for the country from which the fulfillment order ships. Must be in ISO 3166-1 alpha-2 format. | [optional] 
**NotificationEmails** | **List&lt;string&gt;** | A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller. | [optional] 
**FeatureConstraints** | [**List&lt;FeatureSettings&gt;**](FeatureSettings.md) | A list of features and their fulfillment policies to apply to the order. | [optional] 
**Items** | [**List&lt;CreateFulfillmentOrderItem&gt;**](CreateFulfillmentOrderItem.md) | An array of item information for creating a fulfillment order. | 
**PaymentInformation** | [**List&lt;PaymentInformation&gt;**](PaymentInformation.md) | An array of various payment attributes related to this fulfillment order. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

