<?php

/**
 * FulfillmentType.
 *
 * PHP version 8.3
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Pricing.
 *
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\pricing\v2022_05_01;

/**
 * FulfillmentType Class Doc Comment.
 *
 * @category Class
 *
 * @description Indicates whether the item is fulfilled by Amazon or by the seller (merchant).
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */
class FulfillmentType
{
    /**
     * Possible values of this enum.
     */
    public const AFN = 'AFN';

    public const MFN = 'MFN';

    /**
     * Gets allowable values of the enum.
     *
     * @return string[]
     */
    public static function getAllowableEnumValues(): array
    {
        return [
            self::AFN,
            self::MFN,
        ];
    }
}
