# TheSellingPartnerApiForAmazonWarehousingAndDistribution.DestinationDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destinationAddress** | [**Address**](Address.md) |  | [optional] 
**destinationRegion** | **String** | Assigned region where the order will be shipped. This can differ from what was passed as preference. AWD currently supports following region IDs: [us-west, us-east, us-southcentral, us-southeast] | [optional] 
**shipmentId** | **String** | Unique ID of the confirmed shipment being shipped to the assigned destination. This will be available only after an inbound order is confirmed and can be used to track the shipment. | [optional] 


