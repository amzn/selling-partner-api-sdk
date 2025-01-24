<?php
/**
 * LabelPrepPreference
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Fulfillment Inbound
 *
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
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

namespace OpenAPI\Client\Model\fulfillment\inbound\v0;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * LabelPrepPreference Class Doc Comment
 *
 * @category Class
 * @description The preference for label preparation for an inbound shipment.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class LabelPrepPreference
{
    /**
     * Possible values of this enum
     */
    public const SELLER_LABEL = 'SELLER_LABEL';

    public const AMAZON_LABEL_ONLY = 'AMAZON_LABEL_ONLY';

    public const AMAZON_LABEL_PREFERRED = 'AMAZON_LABEL_PREFERRED';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues(): array
    {
        return [
            self::SELLER_LABEL,
            self::AMAZON_LABEL_ONLY,
            self::AMAZON_LABEL_PREFERRED
        ];
    }
}


