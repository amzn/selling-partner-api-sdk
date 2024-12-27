<?php
/**
 * ContentBadge
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for A+ Content Management
 *
 * With the A+ Content API, you can build applications that help selling partners add rich marketing content to their Amazon product detail pages. A+ content helps selling partners share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners assemble content by choosing from content modules and adding images and text.
 *
 * The version of the OpenAPI document: 2020-11-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\apluscontent;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * ContentBadge Class Doc Comment
 *
 * @category Class
 * @description A flag that provides additional information about an A+ Content document.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class ContentBadge
{
    /**
     * Possible values of this enum
     */
    public const BULK = 'BULK';

    public const GENERATED = 'GENERATED';

    public const LAUNCHPAD = 'LAUNCHPAD';

    public const PREMIUM = 'PREMIUM';

    public const STANDARD = 'STANDARD';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues(): array
    {
        return [
            self::BULK,
            self::GENERATED,
            self::LAUNCHPAD,
            self::PREMIUM,
            self::STANDARD
        ];
    }
}


