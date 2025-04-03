<?php

/**
 * ItemCondition.
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
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer information for Amazon Marketplace products.
 *
 * The version of the OpenAPI document: v0
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\pricing\v0;

/**
 * ItemCondition Class Doc Comment.
 *
 * @category Class
 *
 * @description Filters the offer listings to be considered based on item condition. Possible values: New, Used, Collectible, Refurbished, Club.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */
class ItemCondition
{
    /**
     * Possible values of this enum.
     */
    public const _NEW = 'New';

    public const USED = 'Used';

    public const COLLECTIBLE = 'Collectible';

    public const REFURBISHED = 'Refurbished';

    public const CLUB = 'Club';

    /**
     * Gets allowable values of the enum.
     *
     * @return string[]
     */
    public static function getAllowableEnumValues(): array
    {
        return [
            self::_NEW,
            self::USED,
            self::COLLECTIBLE,
            self::REFURBISHED,
            self::CLUB,
        ];
    }
}
