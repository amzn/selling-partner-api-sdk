# AllowanceDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**TypeEnum**](#TypeEnum) | Type of the allowance applied. | 
**description** | **String** | Description of the allowance. |  [optional]
**allowanceAmount** | [**Money**](Money.md) |  | 
**taxDetails** | [**List&lt;TaxDetails&gt;**](TaxDetails.md) | Tax amount details applied on this allowance. |  [optional]

<a name="TypeEnum"></a>
## Enum: TypeEnum
Name | Value
---- | -----
DISCOUNT | &quot;Discount&quot;
DISCOUNTINCENTIVE | &quot;DiscountIncentive&quot;
DEFECTIVE | &quot;Defective&quot;
PROMOTIONAL | &quot;Promotional&quot;
UNSALEABLEMERCHANDISE | &quot;UnsaleableMerchandise&quot;
SPECIAL | &quot;Special&quot;
