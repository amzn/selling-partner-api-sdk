# DropOffLocation

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | [**TypeEnum**](#TypeEnum) | Specifies the preferred location to leave the package at the destination address. | 
**attributes** | **Map&lt;String, String&gt;** | Additional information about the drop-off location that can vary depending on the type of drop-off location specified in the &#x60;type&#x60; field. If the &#x60;type&#x60; is set to &#x60;FALLBACK_NEIGHBOR_DELIVERY&#x60;, the &#x60;attributes&#x60; object should include the exact keys &#x60;neighborName&#x60; and &#x60;houseNumber&#x60; to provide the name and house number of the designated neighbor. |  [optional]

<a name="TypeEnum"></a>
## Enum: TypeEnum
Name | Value
---- | -----
FRONT_DOOR | &quot;FRONT_DOOR&quot;
DELIVERY_BOX | &quot;DELIVERY_BOX&quot;
GAS_METER_BOX | &quot;GAS_METER_BOX&quot;
BICYCLE_BASKET | &quot;BICYCLE_BASKET&quot;
GARAGE | &quot;GARAGE&quot;
RECEPTIONIST | &quot;RECEPTIONIST&quot;
FALLBACK_NEIGHBOR_DELIVERY | &quot;FALLBACK_NEIGHBOR_DELIVERY&quot;
DO_NOT_LEAVE_UNATTENDED | &quot;DO_NOT_LEAVE_UNATTENDED&quot;
