# SellingPartnerApiForRetailProcurementOrders.ImportDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**methodOfPayment** | **String** | If the recipient requests, contains the shipment method of payment. This is for import PO&#39;s only. | [optional] 
**internationalCommercialTerms** | **String** | Incoterms (International Commercial Terms) are used to divide transaction costs and responsibilities between buyer and seller and reflect state-of-the-art transportation practices. This is for import purchase orders only.  | [optional] 
**portOfDelivery** | **String** | The port where goods on an import purchase order must be delivered by the vendor. This should only be specified when the internationalCommercialTerms is FOB. | [optional] 
**importContainers** | **String** | Types and numbers of container(s) for import purchase orders. Can be a comma-separated list if the shipment has multiple containers. HC signifies a high-capacity container. Free-text field, limited to 64 characters. The format will be a comma-delimited list containing values of the type: $NUMBER_OF_CONTAINERS_OF_THIS_TYPE-$CONTAINER_TYPE. The list of values for the container type is: 40&#39;(40-foot container), 40&#39;HC (40-foot high-capacity container), 45&#39;, 45&#39;HC, 30&#39;, 30&#39;HC, 20&#39;, 20&#39;HC. | [optional] 
**shippingInstructions** | **String** | Special instructions regarding the shipment. This field is for import purchase orders. | [optional] 



## Enum: MethodOfPaymentEnum


* `PaidByBuyer` (value: `"PaidByBuyer"`)

* `CollectOnDelivery` (value: `"CollectOnDelivery"`)

* `DefinedByBuyerAndSeller` (value: `"DefinedByBuyerAndSeller"`)

* `FOBPortOfCall` (value: `"FOBPortOfCall"`)

* `PrepaidBySeller` (value: `"PrepaidBySeller"`)

* `PaidBySeller` (value: `"PaidBySeller"`)





## Enum: InternationalCommercialTermsEnum


* `ExWorks` (value: `"ExWorks"`)

* `FreeCarrier` (value: `"FreeCarrier"`)

* `FreeOnBoard` (value: `"FreeOnBoard"`)

* `FreeAlongSideShip` (value: `"FreeAlongSideShip"`)

* `CarriagePaidTo` (value: `"CarriagePaidTo"`)

* `CostAndFreight` (value: `"CostAndFreight"`)

* `CarriageAndInsurancePaidTo` (value: `"CarriageAndInsurancePaidTo"`)

* `CostInsuranceAndFreight` (value: `"CostInsuranceAndFreight"`)

* `DeliveredAtTerminal` (value: `"DeliveredAtTerminal"`)

* `DeliveredAtPlace` (value: `"DeliveredAtPlace"`)

* `DeliverDutyPaid` (value: `"DeliverDutyPaid"`)




