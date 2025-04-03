<?php

/**
 * AccessPointType.
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
 * Amazon Shipping API.
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

/**
 * AccessPointType Class Doc Comment.
 *
 * @category Class
 *
 * @description The type of access point, like counter (HELIX), lockers, etc.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */
class AccessPointType
{
    /**
     * Possible values of this enum.
     */
    public const HELIX = 'HELIX';

    public const CAMPUS_LOCKER = 'CAMPUS_LOCKER';

    public const OMNI_LOCKER = 'OMNI_LOCKER';

    public const ODIN_LOCKER = 'ODIN_LOCKER';

    public const DOBBY_LOCKER = 'DOBBY_LOCKER';

    public const CORE_LOCKER = 'CORE_LOCKER';

    public const _3_P = '3P';

    public const CAMPUS_ROOM = 'CAMPUS_ROOM';

    /**
     * Gets allowable values of the enum.
     *
     * @return string[]
     */
    public static function getAllowableEnumValues(): array
    {
        return [
            self::HELIX,
            self::CAMPUS_LOCKER,
            self::OMNI_LOCKER,
            self::ODIN_LOCKER,
            self::DOBBY_LOCKER,
            self::CORE_LOCKER,
            self::_3_P,
            self::CAMPUS_ROOM,
        ];
    }
}
