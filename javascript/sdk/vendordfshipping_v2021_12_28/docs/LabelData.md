# SellingPartnerApiForDirectFulfillmentShipping.LabelData

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**packageIdentifier** | **String** | Identifier for the package. The first package will be 001, the second 002, and so on. This number is used as a reference to refer to this package from the pallet level. | [optional] 
**trackingNumber** | **String** | Package tracking identifier from the shipping carrier. | [optional] 
**shipMethod** | **String** | Ship method to be used for shipping the order. Amazon defines Ship Method Codes indicating shipping carrier and shipment service level. Ship Method Codes are case and format sensitive. The same ship method code should returned on the shipment confirmation. Note that the Ship Method Codes are vendor specific and will be provided to each vendor during the implementation. | [optional] 
**shipMethodName** | **String** | Shipping method name for internal reference. | [optional] 
**content** | **String** | This field will contain the Base64 string of the shipment label content. | 


