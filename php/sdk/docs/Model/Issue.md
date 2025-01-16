# # Issue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **string** | An issue code that identifies the type of issue. |
**message** | **string** | A message that describes the issue. |
**severity** | **string** | The severity of the issue. |
**attribute_names** | **string[]** | The names of the attributes associated with the issue, if applicable. | [optional]
**categories** | **string[]** | List of issue categories.   Possible vales:   * &#x60;INVALID_ATTRIBUTE&#x60; - Indicating an invalid attribute in the listing.   * &#x60;MISSING_ATTRIBUTE&#x60; - Highlighting a missing attribute in the listing.   * &#x60;INVALID_IMAGE&#x60; - Signifying an invalid image in the listing.   * &#x60;MISSING_IMAGE&#x60; - Noting the absence of an image in the listing.   * &#x60;INVALID_PRICE&#x60; - Pertaining to issues with the listing&#39;s price-related attributes.   * &#x60;MISSING_PRICE&#x60; - Pointing out the absence of a price attribute in the listing.   * &#x60;DUPLICATE&#x60; - Identifying listings with potential duplicate problems, such as this ASIN potentially being a duplicate of another ASIN.   * &#x60;QUALIFICATION_REQUIRED&#x60; - Indicating that the listing requires qualification-related approval. |
**enforcements** | [**\OpenAPI\Client\Model\listings\items\IssueEnforcements**](IssueEnforcements.md) |  | [optional]

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
