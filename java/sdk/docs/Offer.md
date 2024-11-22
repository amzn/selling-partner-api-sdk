# Offer

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sellerId** | **String** | The seller identifier for the offer. | 
**condition** | [**Condition**](Condition.md) |  | 
**subCondition** | [**SubConditionEnum**](#SubConditionEnum) | The item subcondition of the offer. |  [optional]
**fulfillmentType** | [**FulfillmentType**](FulfillmentType.md) |  | 
**listingPrice** | [**MoneyType**](MoneyType.md) |  | 
**shippingOptions** | [**List&lt;ShippingOption&gt;**](ShippingOption.md) | A list of shipping options associated with this offer |  [optional]
**points** | [**Points**](Points.md) |  |  [optional]
**primeDetails** | [**PrimeDetails**](PrimeDetails.md) |  |  [optional]

<a name="SubConditionEnum"></a>
## Enum: SubConditionEnum
Name | Value
---- | -----
NEW | &quot;New&quot;
MINT | &quot;Mint&quot;
VERYGOOD | &quot;VeryGood&quot;
GOOD | &quot;Good&quot;
ACCEPTABLE | &quot;Acceptable&quot;
POOR | &quot;Poor&quot;
CLUB | &quot;Club&quot;
OEM | &quot;OEM&quot;
WARRANTY | &quot;Warranty&quot;
REFURBISHEDWARRANTY | &quot;RefurbishedWarranty&quot;
REFURBISHED | &quot;Refurbished&quot;
OPENBOX | &quot;OpenBox&quot;
OTHER | &quot;Other&quot;
