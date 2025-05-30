# software.amzn.spapi.Model.aplusContent.v2020_11_01.ContentDocument
The A+ Content document. This is the enhanced content that is published to product detail pages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Name** | **string** | The A+ Content document name. | 
**ContentType** | **ContentType** |  | 
**ContentSubType** | **string** | The A+ Content document subtype. This represents a special-purpose type of an A+ Content document. Not every A+ Content document type has a subtype, and subtypes can change at any time. | [optional] 
**Locale** | **string** | The IETF language tag, which supports the primary language subtag and one secondary language subtag. The secondary language subtag is usually a regional designation. This doesn&#39;t support subtags other than the primary and secondary subtags. **Pattern:** ^[a-z]{2,}-[A-Z0-9]{2,}$ | 
**ContentModuleList** | [**List&lt;ContentModule&gt;**](ContentModule.md) | A list of A+ Content modules. | 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

