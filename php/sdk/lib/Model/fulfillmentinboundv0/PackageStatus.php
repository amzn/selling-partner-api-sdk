<?php
/**
 * PackageStatus
 *
 * PHP version 7.4
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

namespace OpenAPI\Client\Model\fulfillmentinboundv0;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * PackageStatus Class Doc Comment
 *
 * @category Class
 * @description The shipment status of the package.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class PackageStatus
{
    /**
     * Possible values of this enum
     */
    public const SHIPPED = 'SHIPPED';

    public const IN_TRANSIT = 'IN_TRANSIT';

    public const DELIVERED = 'DELIVERED';

    public const CHECKED_IN = 'CHECKED_IN';

    public const RECEIVING = 'RECEIVING';

    public const CLOSED = 'CLOSED';

    public const DELETED = 'DELETED';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues(): array
    {
        return [
            self::SHIPPED,
            self::IN_TRANSIT,
            self::DELIVERED,
            self::CHECKED_IN,
            self::RECEIVING,
            self::CLOSED,
            self::DELETED
        ];
    }
}


