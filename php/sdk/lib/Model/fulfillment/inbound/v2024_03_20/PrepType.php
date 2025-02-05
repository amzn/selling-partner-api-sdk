<?php
/**
 * PrepType
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * The Selling Partner API for FBA inbound operations.
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
 * PrepType Class Doc Comment
 *
 * @category Class
 * @description Preparation instructions for shipping an item to Amazon&#39;s fulfillment network. For more information about preparing items for shipment to Amazon&#39;s fulfillment network, refer to [Seller Central Help for your marketplace](https://developer-docs.amazon.com/sp-api/docs/seller-central-urls).
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class PrepType
{
    /**
     * Possible values of this enum
     */
    public const BLACK_SHRINKWRAP = 'ITEM_BLACK_SHRINKWRAP';

    public const BLANKSTK = 'ITEM_BLANKSTK';

    public const BOXING = 'ITEM_BOXING';

    public const BUBBLEWRAP = 'ITEM_BUBBLEWRAP';

    public const CAP_SEALING = 'ITEM_CAP_SEALING';

    public const DEBUNDLE = 'ITEM_DEBUNDLE';

    public const HANG_GARMENT = 'ITEM_HANG_GARMENT';

    public const LABELING = 'ITEM_LABELING';

    public const NO_PREP = 'ITEM_NO_PREP';

    public const POLYBAGGING = 'ITEM_POLYBAGGING';

    public const RMOVHANG = 'ITEM_RMOVHANG';

    public const SETCREAT = 'ITEM_SETCREAT';

    public const SETSTK = 'ITEM_SETSTK';

    public const SIOC = 'ITEM_SIOC';

    public const SUFFOSTK = 'ITEM_SUFFOSTK';

    public const TAPING = 'ITEM_TAPING';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues(): array
    {
        return [
            self::BLACK_SHRINKWRAP,
            self::BLANKSTK,
            self::BOXING,
            self::BUBBLEWRAP,
            self::CAP_SEALING,
            self::DEBUNDLE,
            self::HANG_GARMENT,
            self::LABELING,
            self::NO_PREP,
            self::POLYBAGGING,
            self::RMOVHANG,
            self::SETCREAT,
            self::SETSTK,
            self::SIOC,
            self::SUFFOSTK,
            self::TAPING
        ];
    }
}


