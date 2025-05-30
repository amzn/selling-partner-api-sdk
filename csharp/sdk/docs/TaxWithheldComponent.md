# software.amzn.spapi.Model.finances.v0.TaxWithheldComponent
Information about the taxes withheld.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TaxCollectionModel** | **string** | The tax collection model applied to the item.  Possible values:  * MarketplaceFacilitator - Tax is withheld and remitted to the taxing authority by Amazon on behalf of the seller.  * Standard - Tax is paid to the seller and not remitted to the taxing authority by Amazon. | [optional] 
**TaxesWithheld** | [**List&lt;ChargeComponent&gt;**](ChargeComponent.md) | A list of charge information on the seller&#39;s account. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

