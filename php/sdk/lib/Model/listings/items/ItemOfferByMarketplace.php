<?php
/**
 * ItemOfferByMarketplace
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Listings Items v2021-08-01
 *
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\listings.items;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * ItemOfferByMarketplace Class Doc Comment
 *
 * @category Class
 * @description Offer details of a listings item for an Amazon marketplace.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ItemOfferByMarketplace implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'ItemOfferByMarketplace';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'marketplace_id' => 'string',
             'offer_type' => 'string',
             'price' => '\OpenAPI\Client\Model\listings.items\Money',
             'points' => '\OpenAPI\Client\Model\listings.items\Points',
             'audience' => '\OpenAPI\Client\Model\listings.items\Audience'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'marketplace_id' => null,
            'offer_type' => null,
            'price' => null,
            'points' => null,
            'audience' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'marketplace_id' => false,
        'offer_type' => false,
        'price' => false,
        'points' => false,
        'audience' => false
    ];

    /**
      * If a nullable field gets set to null, insert it here
      *
      * @var boolean[]
      */
    protected array $openAPINullablesSetToNull = [];

    /**
     * Array of property to type mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPITypes(): array
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization
     *
     * @return array
     */
    public static function openAPIFormats(): array
    {
        return self::$openAPIFormats;
    }

    /**
     * Array of nullable properties
     *
     * @return array
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null
     *
     * @return boolean[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null
     *
     * @param boolean[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Checks if a property is nullable
     *
     * @param string $property
     * @return bool
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     *
     * @param string $property
     * @return bool
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @var string[]
     */
    protected static array $attributeMap = [
        'marketplace_id' => 'marketplaceId',
                'offer_type' => 'offerType',
                'price' => 'price',
                'points' => 'points',
                'audience' => 'audience'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'marketplace_id' => 'setMarketplaceId',
        'offer_type' => 'setOfferType',
        'price' => 'setPrice',
        'points' => 'setPoints',
        'audience' => 'setAudience'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'marketplace_id' => 'getMarketplaceId',
        'offer_type' => 'getOfferType',
        'price' => 'getPrice',
        'points' => 'getPoints',
        'audience' => 'getAudience'
    ];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name
     *
     * @return array
     */
    public static function attributeMap(): array
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @return array
     */
    public static function setters(): array
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @return array
     */
    public static function getters(): array
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     *
     * @return string
     */
    public function getModelName(): string
    {
        return self::$openAPIModelName;
    }

    public const OFFER_TYPE_B2_C = 'B2C';
    public const OFFER_TYPE_B2_B = 'B2B';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getOfferTypeAllowableValues(): array
    {
        return [
            self::OFFER_TYPE_B2_C,
            self::OFFER_TYPE_B2_B,
        ];
    }

    /**
     * Associative array for storing property values
     *
     * @var array
     */
    protected array $container = [];

    /**
     * Constructor
     *
     * @param array|null $data Associated array of property values
     *                      initializing the model
     */
    public function __construct(?array $data = null)
    {
        $this->setIfExists('marketplace_id', $data ?? [], null);
        $this->setIfExists('offer_type', $data ?? [], null);
        $this->setIfExists('price', $data ?? [], null);
        $this->setIfExists('points', $data ?? [], null);
        $this->setIfExists('audience', $data ?? [], null);
    }

    /**
    * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
    * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
    * $this->openAPINullablesSetToNull array
    *
    * @param string $variableName
    * @param array  $fields
    * @param mixed  $defaultValue
    */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties(): array
    {
        $invalidProperties = [];

        if ($this->container['marketplace_id'] === null) {
            $invalidProperties[] = "'marketplace_id' can't be null";
        }
        if ($this->container['offer_type'] === null) {
            $invalidProperties[] = "'offer_type' can't be null";
        }
        $allowedValues = $this->getOfferTypeAllowableValues();
        if (!is_null($this->container['offer_type']) && !in_array($this->container['offer_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'offer_type', must be one of '%s'",
                $this->container['offer_type'],
                implode("', '", $allowedValues)
            );
        }

        if ($this->container['price'] === null) {
            $invalidProperties[] = "'price' can't be null";
        }
        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed
     *
     * @return bool True if all properties are valid
     */
    public function valid(): bool
    {
        return count($this->listInvalidProperties()) === 0;
    }


    /**
     * Gets marketplace_id
     *
     * @return string
     */
    public function getMarketplaceId(): string
    {
        return $this->container['marketplace_id'];
    }

    /**
     * Sets marketplace_id
     *
     * @param string $marketplace_id The Amazon marketplace identifier.
     *
     * @return self
     */
    public function setMarketplaceId(string $marketplace_id): self
    {
        if (is_null($marketplace_id)) {
            throw new \InvalidArgumentException('non-nullable marketplace_id cannot be null');
        }
        $this->container['marketplace_id'] = $marketplace_id;

        return $this;
    }

    /**
     * Gets offer_type
     *
     * @return string
     */
    public function getOfferType(): string
    {
        return $this->container['offer_type'];
    }

    /**
     * Sets offer_type
     *
     * @param string $offer_type Type of offer for the listings item.
     *
     * @return self
     */
    public function setOfferType(string $offer_type): self
    {
        if (is_null($offer_type)) {
            throw new \InvalidArgumentException('non-nullable offer_type cannot be null');
        }
        $allowedValues = $this->getOfferTypeAllowableValues();
        if (!in_array($offer_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'offer_type', must be one of '%s'",
                    $offer_type,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['offer_type'] = $offer_type;

        return $this;
    }

    /**
     * Gets price
     *
     * @return \OpenAPI\Client\Model\listings.items\Money
     */
    public function getPrice(): \OpenAPI\Client\Model\listings.items\Money
    {
        return $this->container['price'];
    }

    /**
     * Sets price
     *
     * @param \OpenAPI\Client\Model\listings.items\Money $price price
     *
     * @return self
     */
    public function setPrice(\OpenAPI\Client\Model\listings.items\Money $price): self
    {
        if (is_null($price)) {
            throw new \InvalidArgumentException('non-nullable price cannot be null');
        }
        $this->container['price'] = $price;

        return $this;
    }

    /**
     * Gets points
     *
     * @return \OpenAPI\Client\Model\listings.items\Points|null
     */
    public function getPoints(): ?\OpenAPI\Client\Model\listings.items\Points
    {
        return $this->container['points'];
    }

    /**
     * Sets points
     *
     * @param \OpenAPI\Client\Model\listings.items\Points|null $points points
     *
     * @return self
     */
    public function setPoints(?\OpenAPI\Client\Model\listings.items\Points $points): self
    {
        if (is_null($points)) {
            throw new \InvalidArgumentException('non-nullable points cannot be null');
        }
        $this->container['points'] = $points;

        return $this;
    }

    /**
     * Gets audience
     *
     * @return \OpenAPI\Client\Model\listings.items\Audience|null
     */
    public function getAudience(): ?\OpenAPI\Client\Model\listings.items\Audience
    {
        return $this->container['audience'];
    }

    /**
     * Sets audience
     *
     * @param \OpenAPI\Client\Model\listings.items\Audience|null $audience audience
     *
     * @return self
     */
    public function setAudience(?\OpenAPI\Client\Model\listings.items\Audience $audience): self
    {
        if (is_null($audience)) {
            throw new \InvalidArgumentException('non-nullable audience cannot be null');
        }
        $this->container['audience'] = $audience;

        return $this;
    }


    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param integer $offset Offset
     *
     * @return boolean
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param integer $offset Offset
     *
     * @return mixed|null
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset): mixed
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param int|null $offset Offset
     * @param mixed    $value  Value to be set
     *
     * @return void
     */
    public function offsetSet($offset, mixed $value): void
    {
        if (is_null($offset)) {
            $this->container[] = $value;
        } else {
            $this->container[$offset] = $value;
        }
    }

    /**
     * Unsets offset.
     *
     * @param integer $offset Offset
     *
     * @return void
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     * @link https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed Returns data which can be serialized by json_encode(), which is a value
     * of any type other than a resource.
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize(): mixed
    {
       return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets the string presentation of the object
     *
     * @return string
     */
    public function __toString()
    {
        return json_encode(
            ObjectSerializer::sanitizeForSerialization($this),
            JSON_PRETTY_PRINT
        );
    }

    /**
     * Gets a header-safe presentation of the object
     *
     * @return string
     */
    public function toHeaderValue(): string
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }
}


