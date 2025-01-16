# # CreateFulfillmentOrderRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**marketplace_id** | **string** | The marketplace the fulfillment order is placed against. | [optional]
**seller_fulfillment_order_id** | **string** | A fulfillment order identifier that the seller creates to track their fulfillment order. The &#x60;SellerFulfillmentOrderId&#x60; must be unique for each fulfillment order that a seller creates. If the seller&#39;s system already creates unique order identifiers, then these might be good values for them to use. |
**displayable_order_id** | **string** | A fulfillment order identifier that the seller creates. This value displays as the order identifier in recipient-facing materials such as the outbound shipment packing slip. The value of &#x60;DisplayableOrderId&#x60; should match the order identifier that the seller provides to the recipient. The seller can use the &#x60;SellerFulfillmentOrderId&#x60; for this value or they can specify an alternate value if they want the recipient to reference an alternate order identifier.  The value must be an alpha-numeric or ISO 8859-1 compliant string from one to 40 characters in length. Cannot contain two spaces in a row. Leading and trailing white space is removed. |
**displayable_order_date** | **\DateTime** | Date timestamp |
**displayable_order_comment** | **string** | Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip. |
**shipping_speed_category** | [**\OpenAPI\Client\Model\fulfillment\outbound\ShippingSpeedCategory**](ShippingSpeedCategory.md) |  |
**delivery_window** | [**\OpenAPI\Client\Model\fulfillment\outbound\DeliveryWindow**](DeliveryWindow.md) |  | [optional]
**destination_address** | [**\OpenAPI\Client\Model\fulfillment\outbound\Address**](Address.md) |  |
**delivery_preferences** | [**\OpenAPI\Client\Model\fulfillment\outbound\DeliveryPreferences**](DeliveryPreferences.md) |  | [optional]
**fulfillment_action** | [**\OpenAPI\Client\Model\fulfillment\outbound\FulfillmentAction**](FulfillmentAction.md) |  | [optional]
**fulfillment_policy** | [**\OpenAPI\Client\Model\fulfillment\outbound\FulfillmentPolicy**](FulfillmentPolicy.md) |  | [optional]
**cod_settings** | [**\OpenAPI\Client\Model\fulfillment\outbound\CODSettings**](CODSettings.md) |  | [optional]
**ship_from_country_code** | **string** | The two-character country code for the country from which the fulfillment order ships. Must be in ISO 3166-1 alpha-2 format. | [optional]
**notification_emails** | **string[]** | A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller. | [optional]
**feature_constraints** | [**\OpenAPI\Client\Model\fulfillment\outbound\FeatureSettings[]**](FeatureSettings.md) | A list of features and their fulfillment policies to apply to the order. | [optional]
**items** | [**\OpenAPI\Client\Model\fulfillment\outbound\CreateFulfillmentOrderItem[]**](CreateFulfillmentOrderItem.md) | An array of item information for creating a fulfillment order. |
**payment_information** | [**\OpenAPI\Client\Model\fulfillment\outbound\PaymentInformation[]**](PaymentInformation.md) | An array of various payment attributes related to this fulfillment order. | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
