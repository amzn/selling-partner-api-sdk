# SellingPartnerApiForRetailProcurementPayments.ChargeDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Type of the charge applied. | 
**description** | **String** | Description of the charge. | [optional] 
**chargeAmount** | [**Money**](Money.md) |  | 
**taxDetails** | [**[TaxDetails]**](TaxDetails.md) | Tax amount details applied on this charge. | [optional] 



## Enum: TypeEnum


* `Freight` (value: `"Freight"`)

* `Packing` (value: `"Packing"`)

* `Duty` (value: `"Duty"`)

* `Service` (value: `"Service"`)

* `SmallOrder` (value: `"SmallOrder"`)

* `InsurancePlacementCost` (value: `"InsurancePlacementCost"`)

* `InsuranceFee` (value: `"InsuranceFee"`)

* `SpecialHandlingService` (value: `"SpecialHandlingService"`)

* `CollectionAndRecyclingService` (value: `"CollectionAndRecyclingService"`)

* `EnvironmentalProtectionService` (value: `"EnvironmentalProtectionService"`)

* `TaxCollectedAtSource` (value: `"TaxCollectedAtSource"`)




