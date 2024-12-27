<?php
/**
 * ItemLabelPageType
 *
 * PHP version 7.4
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

namespace OpenAPI\Client\Model\fulfillmentinbound;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * ItemLabelPageType Class Doc Comment
 *
 * @category Class
 * @description The page type to use to print the labels. Possible values: &#39;A4_21&#39;, &#39;A4_24&#39;, &#39;A4_24_64x33&#39;, &#39;A4_24_66x35&#39;, &#39;A4_24_70x36&#39;, &#39;A4_24_70x37&#39;, &#39;A4_24i&#39;, &#39;A4_27&#39;, &#39;A4_40_52x29&#39;, &#39;A4_44_48x25&#39;, &#39;Letter_30&#39;.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class ItemLabelPageType
{
    /**
     * Possible values of this enum
     */
    public const A4_21 = 'A4_21';

    public const A4_24 = 'A4_24';

    public const A4_24_64X33 = 'A4_24_64x33';

    public const A4_24_66X35 = 'A4_24_66x35';

    public const A4_24_70X36 = 'A4_24_70x36';

    public const A4_24_70X37 = 'A4_24_70x37';

    public const A4_24I = 'A4_24i';

    public const A4_27 = 'A4_27';

    public const A4_40_52X29 = 'A4_40_52x29';

    public const A4_44_48X25 = 'A4_44_48x25';

    public const LETTER_30 = 'Letter_30';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues(): array
    {
        return [
            self::A4_21,
            self::A4_24,
            self::A4_24_64X33,
            self::A4_24_66X35,
            self::A4_24_70X36,
            self::A4_24_70X37,
            self::A4_24I,
            self::A4_27,
            self::A4_40_52X29,
            self::A4_44_48X25,
            self::LETTER_30
        ];
    }
}


