# # SegmentedFeaturedOffer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**seller_id** | **string** | The seller identifier for the offer. |
**condition** | [**\OpenAPI\Client\Model\pricing\v2022_05_01\Condition**](Condition.md) |  |
**sub_condition** | **string** | The item subcondition of the offer. | [optional]
**fulfillment_type** | [**\OpenAPI\Client\Model\pricing\v2022_05_01\FulfillmentType**](FulfillmentType.md) |  |
**listing_price** | [**\OpenAPI\Client\Model\pricing\v2022_05_01\MoneyType**](MoneyType.md) |  |
**shipping_options** | [**\OpenAPI\Client\Model\pricing\v2022_05_01\ShippingOption[]**](ShippingOption.md) | A list of shipping options associated with this offer | [optional]
**points** | [**\OpenAPI\Client\Model\pricing\v2022_05_01\Points**](Points.md) |  | [optional]
**prime_details** | [**\OpenAPI\Client\Model\pricing\v2022_05_01\PrimeDetails**](PrimeDetails.md) |  | [optional]
**featured_offer_segments** | [**\OpenAPI\Client\Model\pricing\v2022_05_01\FeaturedOfferSegment[]**](FeaturedOfferSegment.md) | The list of segment information in which the offer is featured. |

[[Back to Model list]](../../README.md#models) [[Back to API list]](../../README.md#endpoints) [[Back to README]](../../README.md)
