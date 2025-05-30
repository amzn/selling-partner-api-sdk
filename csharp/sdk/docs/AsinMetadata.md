# software.amzn.spapi.Model.aplusContent.v2020_11_01.AsinMetadata
The A+ Content ASIN with additional metadata for content management. If you don't include the `includedDataSet` parameter in a call to the `listContentDocumentAsinRelations` operation, the related ASINs are returned without metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Asin** | **string** | The Amazon Standard Identification Number (ASIN). | 
**BadgeSet** | [**List&lt;AsinBadge&gt;**](AsinBadge.md) | The set of ASIN badges. | [optional] 
**Parent** | **string** | The Amazon Standard Identification Number (ASIN). | [optional] 
**Title** | **string** | The title for the ASIN in the Amazon catalog. | [optional] 
**ImageUrl** | **string** | The default image for the ASIN in the Amazon catalog. | [optional] 
**ContentReferenceKeySet** | **List&lt;string&gt;** | A set of content reference keys. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

