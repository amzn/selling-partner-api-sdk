# software.amzn.spapi.Model.shipping.v2.GetCollectionFormHistoryRequest
The request schema to get query collections form history API .

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ClientReferenceDetails** | [**List&lt;ClientReferenceDetail&gt;**](ClientReferenceDetail.md) | Object to pass additional information about the MCI Integrator shipperType: List of ClientReferenceDetail | [optional] 
**MaxResults** | **int** | max Number of Results for query . | [optional] 
**CarrierId** | **string** | The carrier identifier for the offering, provided by the carrier. | [optional] 
**ShipFromAddress** | [**Address**](Address.md) |  | [optional] 
**DateRange** | [**DateRange**](DateRange.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

