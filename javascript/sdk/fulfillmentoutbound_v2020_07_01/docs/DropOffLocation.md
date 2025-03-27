# SellingPartnerApisForFulfillmentOutbound.DropOffLocation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **String** | Specifies the preferred location to leave the package at the destination address. | 
**attributes** | **{String: String}** | Additional information about the drop-off location that can vary depending on the type of drop-off location specified in the &#x60;type&#x60; field. If the &#x60;type&#x60; is set to &#x60;FALLBACK_NEIGHBOR_DELIVERY&#x60;, the &#x60;attributes&#x60; object should include the exact keys &#x60;neighborName&#x60; and &#x60;houseNumber&#x60; to provide the name and house number of the designated neighbor. | [optional] 



## Enum: TypeEnum


* `FRONT_DOOR` (value: `"FRONT_DOOR"`)

* `DELIVERY_BOX` (value: `"DELIVERY_BOX"`)

* `GAS_METER_BOX` (value: `"GAS_METER_BOX"`)

* `BICYCLE_BASKET` (value: `"BICYCLE_BASKET"`)

* `GARAGE` (value: `"GARAGE"`)

* `RECEPTIONIST` (value: `"RECEPTIONIST"`)

* `FALLBACK_NEIGHBOR_DELIVERY` (value: `"FALLBACK_NEIGHBOR_DELIVERY"`)

* `DO_NOT_LEAVE_UNATTENDED` (value: `"DO_NOT_LEAVE_UNATTENDED"`)




