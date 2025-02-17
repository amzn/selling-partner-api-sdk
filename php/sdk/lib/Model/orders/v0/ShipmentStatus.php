<?php
/**
 * ShipmentStatus
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Orders v0
 *
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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

namespace SpApi\Model\orders\v0;
use SpApi\ObjectSerializer;
use SpApi\Model\ModelInterface;

/**
 * ShipmentStatus Class Doc Comment
 *
 * @category Class
 * @description The shipment status to apply.
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class ShipmentStatus
{
    /**
     * Possible values of this enum
     */
    public const READY_FOR_PICKUP = 'ReadyForPickup';

    public const PICKED_UP = 'PickedUp';

    public const REFUSED_PICKUP = 'RefusedPickup';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues(): array
    {
        return [
            self::READY_FOR_PICKUP,
            self::PICKED_UP,
            self::REFUSED_PICKUP
        ];
    }
}


