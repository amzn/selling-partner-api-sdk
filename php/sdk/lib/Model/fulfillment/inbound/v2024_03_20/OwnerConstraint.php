<?php
/**
 * OwnerConstraint
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Fulfillment Inbound v2024-03-20
 *
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * OwnerConstraint Class Doc Comment
 *
 * @category Class
 * @description A constraint that can apply to an individual owner. If no constraint is specified, both &#x60;AMAZON&#x60; and &#x60;SELLER&#x60; are acceptable.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class OwnerConstraint
{
    /**
     * Possible values of this enum
     */
    public const AMAZON_ONLY = 'AMAZON_ONLY';

    public const NONE_ONLY = 'NONE_ONLY';

    public const SELLER_ONLY = 'SELLER_ONLY';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues(): array
    {
        return [
            self::AMAZON_ONLY,
            self::NONE_ONLY,
            self::SELLER_ONLY
        ];
    }
}


