# TheSellingPartnerApiForAutomotive.Vehicle

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**make** | **String** | Vehicle Brand. | 
**model** | **String** | Specific model of a vehicle. | 
**variantName** | **String** | Name of the vehicle variant. | [optional] 
**bodyStyle** | **String** | Body style of vehicle (example: Hatchback, Cabriolet). | [optional] 
**driveType** | **String** | Drive type of vehicle(example: Rear wheel drive). | [optional] 
**energy** | **String** | Energy Source for the vehicle(example: Petrol) | [optional] 
**engineOutput** | [**[EngineOutput]**](EngineOutput.md) | Engine output of vehicle. | [optional] 
**manufacturingStartDate** | [**MonthAndYear**](MonthAndYear.md) |  | [optional] 
**manufacturingStopDate** | [**MonthAndYear**](MonthAndYear.md) |  | [optional] 
**lastProcessedDate** | **String** | The date on which the vehicle was last updated, in ISO-8601 date/time format. | [optional] 
**status** | [**VehicleStatusInCatalog**](VehicleStatusInCatalog.md) |  | [optional] 
**identifiers** | [**[VehicleIdentifiers]**](VehicleIdentifiers.md) | Identifiers that can be used to identify the vehicle uniquely | 


