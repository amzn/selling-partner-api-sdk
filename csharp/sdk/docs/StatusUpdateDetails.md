# software.amzn.spapi.Model.vendor.df.shipping.v2021_12_28.StatusUpdateDetails
Details for the shipment status update given by the vendor for the specific package.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TrackingNumber** | **string** | The shipment tracking number is required for every package and should match the &#x60;trackingNumber&#x60; sent for the shipment confirmation. | 
**StatusCode** | **string** | Indicates the shipment status code of the package that provides transportation information for Amazon tracking systems and ultimately for the final customer. For more information, refer to the [Additional Fields Explanation](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-use-case-guide#additional-fields-explanation). | 
**ReasonCode** | **string** | Provides a reason code for the status of the package that will provide additional information about the transportation status. For more information, refer to the [Additional Fields Explanation](https://developer-docs.amazon.com/sp-api/docs/vendor-direct-fulfillment-shipping-api-use-case-guide#additional-fields-explanation). | 
**StatusDateTime** | **DateTime** | The date and time when the shipment status was updated. Values are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format, with UTC time zone or UTC offset. For example, 2020-07-16T23:00:00Z or 2020-07-16T23:00:00+01:00. | 
**StatusLocationAddress** | [**Address**](Address.md) |  | 
**ShipmentSchedule** | [**ShipmentSchedule**](ShipmentSchedule.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

