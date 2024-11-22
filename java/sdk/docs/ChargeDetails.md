# ChargeDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**TypeEnum**](#TypeEnum) | Type of the charge applied. | 
**description** | **String** | Description of the charge. |  [optional]
**chargeAmount** | [**Money**](Money.md) |  | 
**taxDetails** | [**List&lt;TaxDetails&gt;**](TaxDetails.md) | Tax amount details applied on this charge. |  [optional]

<a name="TypeEnum"></a>
## Enum: TypeEnum
Name | Value
---- | -----
FREIGHT | &quot;Freight&quot;
PACKING | &quot;Packing&quot;
DUTY | &quot;Duty&quot;
SERVICE | &quot;Service&quot;
SMALLORDER | &quot;SmallOrder&quot;
INSURANCEPLACEMENTCOST | &quot;InsurancePlacementCost&quot;
INSURANCEFEE | &quot;InsuranceFee&quot;
SPECIALHANDLINGSERVICE | &quot;SpecialHandlingService&quot;
COLLECTIONANDRECYCLINGSERVICE | &quot;CollectionAndRecyclingService&quot;
ENVIRONMENTALPROTECTIONSERVICE | &quot;EnvironmentalProtectionService&quot;
TAXCOLLECTEDATSOURCE | &quot;TaxCollectedAtSource&quot;
