# software.amzn.spapi.Model.vehicles.v2024_11_01.Vehicle
Combinations of attributes and unique identifier that represents a vehicle in vehicle list.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Make** | **string** | Vehicle Brand. | 
**Model** | **string** | Specific model of a vehicle. | 
**VariantName** | **string** | Name of the vehicle variant. | [optional] 
**BodyStyle** | **string** | Body style of vehicle (example: Hatchback, Cabriolet). | [optional] 
**DriveType** | **string** | Drive type of vehicle(example: Rear wheel drive). | [optional] 
**Energy** | **string** | Energy Source for the vehicle(example: Petrol) | [optional] 
**EngineOutput** | [**List&lt;EngineOutput&gt;**](EngineOutput.md) | Engine output of vehicle. | [optional] 
**ManufacturingStartDate** | [**MonthAndYear**](MonthAndYear.md) |  | [optional] 
**ManufacturingStopDate** | [**MonthAndYear**](MonthAndYear.md) |  | [optional] 
**LastProcessedDate** | **string** | The date on which the vehicle was last updated, in ISO-8601 date/time format. | [optional] 
**Status** | **VehicleStatusInCatalog** |  | [optional] 
**Identifiers** | [**List&lt;VehicleIdentifiers&gt;**](VehicleIdentifiers.md) | Identifiers that can be used to identify the vehicle uniquely | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

