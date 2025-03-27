# SellingPartnerApiForRetailProcurementShipments.ImportDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**methodOfPayment** | **String** | This is used for import purchase orders only. If the recipient requests, this field will contain the shipment method of payment. | [optional] 
**sealNumber** | **String** | The container&#39;s seal number. | [optional] 
**route** | [**Route**](Route.md) |  | [optional] 
**importContainers** | **String** | Types and numbers of container(s) for import purchase orders. Can be a comma-separated list if shipment has multiple containers. | [optional] 
**billableWeight** | [**Weight**](Weight.md) |  | [optional] 
**estimatedShipByDate** | **Date** | Date on which the shipment is expected to be shipped. This value should not be in the past and not more than 60 days out in the future. | [optional] 
**handlingInstructions** | **String** | Identification of the instructions on how specified item/carton/pallet should be handled. | [optional] 



## Enum: MethodOfPaymentEnum


* `PaidByBuyer` (value: `"PaidByBuyer"`)

* `CollectOnDelivery` (value: `"CollectOnDelivery"`)

* `DefinedByBuyerAndSeller` (value: `"DefinedByBuyerAndSeller"`)

* `FOBPortOfCall` (value: `"FOBPortOfCall"`)

* `PrepaidBySeller` (value: `"PrepaidBySeller"`)

* `PaidBySeller` (value: `"PaidBySeller"`)





## Enum: HandlingInstructionsEnum


* `Oversized` (value: `"Oversized"`)

* `Fragile` (value: `"Fragile"`)

* `Food` (value: `"Food"`)

* `HandleWithCare` (value: `"HandleWithCare"`)




