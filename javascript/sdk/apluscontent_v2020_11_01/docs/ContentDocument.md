# SellingPartnerApiForAContentManagement.ContentDocument

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | The A+ Content document name. | 
**contentType** | [**ContentType**](ContentType.md) |  | 
**contentSubType** | **String** | The A+ Content document subtype. This represents a special-purpose type of an A+ Content document. Not every A+ Content document type has a subtype, and subtypes can change at any time. | [optional] 
**locale** | **String** | The IETF language tag, which supports the primary language subtag and one secondary language subtag. The secondary language subtag is usually a regional designation. This doesn&#39;t support subtags other than the primary and secondary subtags. **Pattern:** ^[a-z]{2,}-[A-Z0-9]{2,}$ | 
**contentModuleList** | [**[ContentModule]**](ContentModule.md) | A list of A+ Content modules. | 


