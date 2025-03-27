# SellingPartnerApiForDirectFulfillmentOrders.ShipmentDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**isPriorityShipment** | **Boolean** | When true, this is a priority shipment. | 
**isScheduledDeliveryShipment** | **Boolean** | When true, this order is part of a scheduled delivery program. | [optional] 
**isPslipRequired** | **Boolean** | When true, a packing slip is required to be sent to the customer. | 
**isGift** | **Boolean** | When true, the order contain a gift. Include the gift message and gift wrap information. | [optional] 
**shipMethod** | **String** | Ship method to be used for shipping the order. Amazon defines ship method codes indicating the shipping carrier and shipment service level. To see the full list of ship methods in use, including both the code and the friendly name, search the &#39;Help&#39; section on Vendor Central for &#39;ship methods&#39;. | 
**shipmentDates** | [**ShipmentDates**](ShipmentDates.md) |  | 
**messageToCustomer** | **String** | Message to customer for order status. | 


