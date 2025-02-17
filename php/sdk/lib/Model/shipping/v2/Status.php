<?php
/**
 * Status
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Amazon Shipping API
 *
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\shipping\v2;
use SpApi\ObjectSerializer;
use SpApi\Model\ModelInterface;

/**
 * Status Class Doc Comment
 *
 * @category Class
 * @description The status of the package being shipped.
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class Status
{
    /**
     * Possible values of this enum
     */
    public const PRE_TRANSIT = 'PreTransit';

    public const IN_TRANSIT = 'InTransit';

    public const DELIVERED = 'Delivered';

    public const LOST = 'Lost';

    public const OUT_FOR_DELIVERY = 'OutForDelivery';

    public const REJECTED = 'Rejected';

    public const UNDELIVERABLE = 'Undeliverable';

    public const DELIVERY_ATTEMPTED = 'DeliveryAttempted';

    public const PICKUP_CANCELLED = 'PickupCancelled';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues(): array
    {
        return [
            self::PRE_TRANSIT,
            self::IN_TRANSIT,
            self::DELIVERED,
            self::LOST,
            self::OUT_FOR_DELIVERY,
            self::REJECTED,
            self::UNDELIVERABLE,
            self::DELIVERY_ATTEMPTED,
            self::PICKUP_CANCELLED
        ];
    }
}


