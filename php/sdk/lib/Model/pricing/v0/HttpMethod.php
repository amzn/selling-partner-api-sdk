<?php
/**
 * HttpMethod
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Pricing
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
use SpApi\ObjectSerializer;
use SpApi\Model\ModelInterface;

/**
 * HttpMethod Class Doc Comment
 *
 * @category Class
 * @description The HTTP method associated with the individual APIs being called as part of the batch request.
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class HttpMethod
{
    /**
     * Possible values of this enum
     */
    public const GET = 'GET';

    public const PUT = 'PUT';

    public const PATCH = 'PATCH';

    public const DELETE = 'DELETE';

    public const POST = 'POST';

    /**
     * Gets allowable values of the enum
     * @return string[]
     */
    public static function getAllowableEnumValues(): array
    {
        return [
            self::GET,
            self::PUT,
            self::PATCH,
            self::DELETE,
            self::POST
        ];
    }
}


