# software.amzn.spapi.Model.feeds.v2021_06_30.CreateFeedSpecification
Information required to create the feed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FeedType** | **string** | The feed type. | 
**MarketplaceIds** | **List&lt;string&gt;** | A list of identifiers for marketplaces that you want the feed to be applied to. | 
**InputFeedDocumentId** | **string** | The document identifier returned by the createFeedDocument operation. Upload the feed document contents before calling the createFeed operation. | 
**FeedOptions** | **Dictionary&lt;string, string&gt;** | Additional options to control the feed. These vary by feed type. | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

