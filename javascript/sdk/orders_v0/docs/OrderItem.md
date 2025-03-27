# SellingPartnerApiForOrders.OrderItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ASIN** | **String** | The item&#39;s Amazon Standard Identification Number (ASIN). | 
**sellerSKU** | **String** | The item&#39;s seller stock keeping unit (SKU). | [optional] 
**orderItemId** | **String** | An Amazon-defined order item identifier. | 
**associatedItems** | [**[AssociatedItem]**](AssociatedItem.md) | A list of associated items that a customer has purchased with a product. For example, a tire installation service purchased with tires. | [optional] 
**title** | **String** | The item&#39;s name. | [optional] 
**quantityOrdered** | **Number** | The number of items in the order.  | 
**quantityShipped** | **Number** | The number of items shipped. | [optional] 
**productInfo** | [**ProductInfoDetail**](ProductInfoDetail.md) |  | [optional] 
**pointsGranted** | [**PointsGrantedDetail**](PointsGrantedDetail.md) |  | [optional] 
**itemPrice** | [**Money**](Money.md) |  | [optional] 
**shippingPrice** | [**Money**](Money.md) |  | [optional] 
**itemTax** | [**Money**](Money.md) |  | [optional] 
**shippingTax** | [**Money**](Money.md) |  | [optional] 
**shippingDiscount** | [**Money**](Money.md) |  | [optional] 
**shippingDiscountTax** | [**Money**](Money.md) |  | [optional] 
**promotionDiscount** | [**Money**](Money.md) |  | [optional] 
**promotionDiscountTax** | [**Money**](Money.md) |  | [optional] 
**promotionIds** | **[String]** | A list of promotion identifiers provided by the seller when the promotions were created. | [optional] 
**cODFee** | [**Money**](Money.md) |  | [optional] 
**cODFeeDiscount** | [**Money**](Money.md) |  | [optional] 
**isGift** | **String** | Indicates whether the item is a gift.  **Possible values**: &#x60;true&#x60; and &#x60;false&#x60;. | [optional] 
**conditionNote** | **String** | The condition of the item, as described by the seller. | [optional] 
**conditionId** | **String** | The condition of the item.  **Possible values**: &#x60;New&#x60;, &#x60;Used&#x60;, &#x60;Collectible&#x60;, &#x60;Refurbished&#x60;, &#x60;Preorder&#x60;, and &#x60;Club&#x60;. | [optional] 
**conditionSubtypeId** | **String** | The subcondition of the item.  **Possible values**: &#x60;New&#x60;, &#x60;Mint&#x60;, &#x60;Very Good&#x60;, &#x60;Good&#x60;, &#x60;Acceptable&#x60;, &#x60;Poor&#x60;, &#x60;Club&#x60;, &#x60;OEM&#x60;, &#x60;Warranty&#x60;, &#x60;Refurbished Warranty&#x60;, &#x60;Refurbished&#x60;, &#x60;Open Box&#x60;, &#x60;Any&#x60;, and &#x60;Other&#x60;. | [optional] 
**scheduledDeliveryStartDate** | **String** | The start date of the scheduled delivery window in the time zone for the order destination. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format. | [optional] 
**scheduledDeliveryEndDate** | **String** | The end date of the scheduled delivery window in the time zone for the order destination. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format. | [optional] 
**priceDesignation** | **String** | Indicates that the selling price is a special price that is only available for Amazon Business orders. For more information about the Amazon Business Seller Program, refer to the [Amazon Business website](https://www.amazon.com/b2b/info/amazon-business).   **Possible values**: &#x60;BusinessPrice&#x60; | [optional] 
**taxCollection** | [**TaxCollection**](TaxCollection.md) |  | [optional] 
**serialNumberRequired** | **Boolean** | When true, the product type for this item has a serial number.   Only returned for Amazon Easy Ship orders. | [optional] 
**isTransparency** | **Boolean** | When true, the ASIN is enrolled in Transparency. The Transparency serial number that you must submit is determined by:  **1D or 2D Barcode:** This has a **T** logo. Submit either the 29-character alpha-numeric identifier beginning with **AZ** or **ZA**, or the 38-character Serialized Global Trade Item Number (SGTIN). **2D Barcode SN:** Submit the 7- to 20-character serial number barcode, which likely has the prefix **SN**. The serial number is applied to the same side of the packaging as the GTIN (UPC/EAN/ISBN) barcode. **QR code SN:** Submit the URL that the QR code generates. | [optional] 
**iossNumber** | **String** | The IOSS number of the marketplace. Sellers shipping to the EU from outside the EU must provide this IOSS number to their carrier when Amazon has collected the VAT on the sale. | [optional] 
**storeChainStoreId** | **String** | The store chain store identifier. Linked to a specific store in a store chain. | [optional] 
**deemedResellerCategory** | **String** | The category of deemed reseller. This applies to selling partners that are not based in the EU and is used to help them meet the VAT Deemed Reseller tax laws in the EU and UK. | [optional] 
**buyerInfo** | [**ItemBuyerInfo**](ItemBuyerInfo.md) |  | [optional] 
**buyerRequestedCancel** | [**BuyerRequestedCancel**](BuyerRequestedCancel.md) |  | [optional] 
**serialNumbers** | **[String]** | A list of serial numbers for electronic products that are shipped to customers. Returned for FBA orders only. | [optional] 
**substitutionPreferences** | [**SubstitutionPreferences**](SubstitutionPreferences.md) |  | [optional] 
**measurement** | [**Measurement**](Measurement.md) |  | [optional] 
**shippingConstraints** | [**ShippingConstraints**](ShippingConstraints.md) |  | [optional] 
**amazonPrograms** | [**AmazonPrograms**](AmazonPrograms.md) |  | [optional] 
**exportInfo** | [**ExportInfo**](ExportInfo.md) |  | [optional] 



## Enum: DeemedResellerCategoryEnum


* `IOSS` (value: `"IOSS"`)

* `UOSS` (value: `"UOSS"`)




