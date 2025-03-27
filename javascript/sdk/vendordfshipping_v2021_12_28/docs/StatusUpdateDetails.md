# SellingPartnerApiForDirectFulfillmentShipping.StatusUpdateDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trackingNumber** | **String** | The shipment tracking number is required for every package and should match the &#x60;trackingNumber&#x60; sent for the shipment confirmation. | 
**statusCode** | **String** | Indicates the shipment status code of the package that provides transportation information for Amazon tracking systems and ultimately for the final customer. For more information, refer to the [Additional Fields Explanation](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-use-case-guide#additional-fields-explanation). | 
**reasonCode** | **String** | Provides a reason code for the status of the package that will provide additional information about the transportation status. For more information, refer to the [Additional Fields Explanation](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-use-case-guide#additional-fields-explanation). | 
**statusDateTime** | **Date** | The date and time when the shipment status was updated. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format, with UTC time zone or UTC offset. For example, 2020-07-16T23:00:00Z or 2020-07-16T23:00:00+01:00. | 
**statusLocationAddress** | [**Address**](Address.md) |  | 
**shipmentSchedule** | [**ShipmentSchedule**](ShipmentSchedule.md) |  | [optional] 


