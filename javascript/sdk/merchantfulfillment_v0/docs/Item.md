# SellingPartnerApiForMerchantFulfillment.Item

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**orderItemId** | **String** | An Amazon-defined identifier for an individual item in an order. | 
**quantity** | **Number** | The number of items. | 
**itemWeight** | [**Weight**](Weight.md) |  | [optional] 
**itemDescription** | **String** | The description of the item. | [optional] 
**transparencyCodeList** | **[String]** | A list of transparency codes. | [optional] 
**itemLevelSellerInputsList** | [**[AdditionalSellerInputs]**](AdditionalSellerInputs.md) | A list of additional seller input pairs required to purchase shipping. | [optional] 
**liquidVolume** | [**LiquidVolume**](LiquidVolume.md) |  | [optional] 
**isHazmat** | **Boolean** | When true, the item qualifies as hazardous materials (hazmat). Defaults to false. | [optional] 
**dangerousGoodsDetails** | [**DangerousGoodsDetails**](DangerousGoodsDetails.md) |  | [optional] 


