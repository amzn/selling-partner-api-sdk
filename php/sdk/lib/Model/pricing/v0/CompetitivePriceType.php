<?php

/**
 * CompetitivePriceType.
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
 * Selling Partner API for Pricing.
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

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * CompetitivePriceType Class Doc Comment.
 *
 * @category Class
 *
 * @description Schema for competitive pricing information
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class CompetitivePriceType implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'CompetitivePriceType';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'competitive_price_id' => 'string',
        'price' => '\SpApi\Model\pricing\v0\PriceType',
        'condition' => 'string',
        'subcondition' => 'string',
        'offer_type' => '\SpApi\Model\pricing\v0\OfferCustomerType',
        'quantity_tier' => 'int',
        'quantity_discount_type' => '\SpApi\Model\pricing\v0\QuantityDiscountType',
        'seller_id' => 'string',
        'belongs_to_requester' => 'bool'];

    /**
     * Array of property to format mappings. Used for (de)serialization.
     *
     * @var string[]
     *
     * @phpstan-var array<string, string|null>
     *
     * @psalm-var array<string, string|null>
     */
    protected static array $openAPIFormats = [
        'competitive_price_id' => null,
        'price' => null,
        'condition' => null,
        'subcondition' => null,
        'offer_type' => null,
        'quantity_tier' => 'int32',
        'quantity_discount_type' => null,
        'seller_id' => null,
        'belongs_to_requester' => null];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'competitive_price_id' => false,
        'price' => false,
        'condition' => true,
        'subcondition' => true,
        'offer_type' => true,
        'quantity_tier' => true,
        'quantity_discount_type' => true,
        'seller_id' => true,
        'belongs_to_requester' => true,
    ];

    /**
     * If a nullable field gets set to null, insert it here.
     *
     * @var bool[]
     */
    protected array $openAPINullablesSetToNull = [];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name.
     *
     * @var string[]
     */
    protected static array $attributeMap = [
        'competitive_price_id' => 'CompetitivePriceId',
        'price' => 'Price',
        'condition' => 'condition',
        'subcondition' => 'subcondition',
        'offer_type' => 'offerType',
        'quantity_tier' => 'quantityTier',
        'quantity_discount_type' => 'quantityDiscountType',
        'seller_id' => 'sellerId',
        'belongs_to_requester' => 'belongsToRequester',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'competitive_price_id' => 'setCompetitivePriceId',
        'price' => 'setPrice',
        'condition' => 'setCondition',
        'subcondition' => 'setSubcondition',
        'offer_type' => 'setOfferType',
        'quantity_tier' => 'setQuantityTier',
        'quantity_discount_type' => 'setQuantityDiscountType',
        'seller_id' => 'setSellerId',
        'belongs_to_requester' => 'setBelongsToRequester',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'competitive_price_id' => 'getCompetitivePriceId',
        'price' => 'getPrice',
        'condition' => 'getCondition',
        'subcondition' => 'getSubcondition',
        'offer_type' => 'getOfferType',
        'quantity_tier' => 'getQuantityTier',
        'quantity_discount_type' => 'getQuantityDiscountType',
        'seller_id' => 'getSellerId',
        'belongs_to_requester' => 'getBelongsToRequester',
    ];

    /**
     * Associative array for storing property values.
     */
    protected array $container = [];

    /**
     * Constructor.
     *
     * @param null|array $data Associated array of property values
     *                         initializing the model
     */
    public function __construct(?array $data = null)
    {
        $this->setIfExists('competitive_price_id', $data ?? [], null);
        $this->setIfExists('price', $data ?? [], null);
        $this->setIfExists('condition', $data ?? [], null);
        $this->setIfExists('subcondition', $data ?? [], null);
        $this->setIfExists('offer_type', $data ?? [], null);
        $this->setIfExists('quantity_tier', $data ?? [], null);
        $this->setIfExists('quantity_discount_type', $data ?? [], null);
        $this->setIfExists('seller_id', $data ?? [], null);
        $this->setIfExists('belongs_to_requester', $data ?? [], null);
    }

    /**
     * Gets the string presentation of the object.
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
     * Array of property to type mappings. Used for (de)serialization.
     */
    public static function openAPITypes(): array
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization.
     */
    public static function openAPIFormats(): array
    {
        return self::$openAPIFormats;
    }

    /**
     * Checks if a property is nullable.
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name.
     */
    public static function attributeMap(): array
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     */
    public static function setters(): array
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests).
     */
    public static function getters(): array
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     */
    public function getModelName(): string
    {
        return self::$openAPIModelName;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties(): array
    {
        $invalidProperties = [];

        if (null === $this->container['competitive_price_id']) {
            $invalidProperties[] = "'competitive_price_id' can't be null";
        }
        if (null === $this->container['price']) {
            $invalidProperties[] = "'price' can't be null";
        }

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed.
     *
     * @return bool True if all properties are valid
     */
    public function valid(): bool
    {
        return 0 === count($this->listInvalidProperties());
    }

    /**
     * Gets competitive_price_id.
     */
    public function getCompetitivePriceId(): string
    {
        return $this->container['competitive_price_id'];
    }

    /**
     * Sets competitive_price_id.
     *
     * @param string $competitive_price_id The pricing model for each price that is returned.  Possible values:  * 1 - New Buy Box Price. * 2 - Used Buy Box Price.
     */
    public function setCompetitivePriceId(string $competitive_price_id): self
    {
        if (is_null($competitive_price_id)) {
            throw new \InvalidArgumentException('non-nullable competitive_price_id cannot be null');
        }
        $this->container['competitive_price_id'] = $competitive_price_id;

        return $this;
    }

    /**
     * Gets price.
     */
    public function getPrice(): PriceType
    {
        return $this->container['price'];
    }

    /**
     * Sets price.
     *
     * @param PriceType $price price
     */
    public function setPrice(PriceType $price): self
    {
        if (is_null($price)) {
            throw new \InvalidArgumentException('non-nullable price cannot be null');
        }
        $this->container['price'] = $price;

        return $this;
    }

    /**
     * Gets condition.
     */
    public function getCondition(): ?string
    {
        return $this->container['condition'];
    }

    /**
     * Sets condition.
     *
     * @param null|string $condition Indicates the condition of the item whose pricing information is returned. Possible values are: New, Used, Collectible, Refurbished, or Club.
     */
    public function setCondition(?string $condition): self
    {
        if (is_null($condition)) {
            array_push($this->openAPINullablesSetToNull, 'condition');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('condition', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['condition'] = $condition;

        return $this;
    }

    /**
     * Gets subcondition.
     */
    public function getSubcondition(): ?string
    {
        return $this->container['subcondition'];
    }

    /**
     * Sets subcondition.
     *
     * @param null|string $subcondition Indicates the subcondition of the item whose pricing information is returned. Possible values are: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
     */
    public function setSubcondition(?string $subcondition): self
    {
        if (is_null($subcondition)) {
            array_push($this->openAPINullablesSetToNull, 'subcondition');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('subcondition', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['subcondition'] = $subcondition;

        return $this;
    }

    /**
     * Gets offer_type.
     */
    public function getOfferType(): ?string
    {
        return $this->container['offer_type'];
    }

    /**
     * Sets offer_type.
     *
     * @param null|string $offer_type offer_type
     */
    public function setOfferType(?string $offer_type): self
    {
        if (is_null($offer_type)) {
            array_push($this->openAPINullablesSetToNull, 'offer_type');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('offer_type', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['offer_type'] = $offer_type;

        return $this;
    }

    /**
     * Gets quantity_tier.
     */
    public function getQuantityTier(): ?int
    {
        return $this->container['quantity_tier'];
    }

    /**
     * Sets quantity_tier.
     *
     * @param null|int $quantity_tier indicates at what quantity this price becomes active
     */
    public function setQuantityTier(?int $quantity_tier): self
    {
        if (is_null($quantity_tier)) {
            array_push($this->openAPINullablesSetToNull, 'quantity_tier');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('quantity_tier', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['quantity_tier'] = $quantity_tier;

        return $this;
    }

    /**
     * Gets quantity_discount_type.
     */
    public function getQuantityDiscountType(): ?string
    {
        return $this->container['quantity_discount_type'];
    }

    /**
     * Sets quantity_discount_type.
     *
     * @param null|string $quantity_discount_type quantity_discount_type
     */
    public function setQuantityDiscountType(?string $quantity_discount_type): self
    {
        if (is_null($quantity_discount_type)) {
            array_push($this->openAPINullablesSetToNull, 'quantity_discount_type');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('quantity_discount_type', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['quantity_discount_type'] = $quantity_discount_type;

        return $this;
    }

    /**
     * Gets seller_id.
     */
    public function getSellerId(): ?string
    {
        return $this->container['seller_id'];
    }

    /**
     * Sets seller_id.
     *
     * @param null|string $seller_id the seller identifier for the offer
     */
    public function setSellerId(?string $seller_id): self
    {
        if (is_null($seller_id)) {
            array_push($this->openAPINullablesSetToNull, 'seller_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('seller_id', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['seller_id'] = $seller_id;

        return $this;
    }

    /**
     * Gets belongs_to_requester.
     */
    public function getBelongsToRequester(): ?bool
    {
        return $this->container['belongs_to_requester'];
    }

    /**
     * Sets belongs_to_requester.
     *
     * @param null|bool $belongs_to_requester Indicates whether or not the pricing information is for an offer listing that belongs to the requester. The requester is the seller associated with the SellerId that was submitted with the request. Possible values are: true and false.
     */
    public function setBelongsToRequester(?bool $belongs_to_requester): self
    {
        if (is_null($belongs_to_requester)) {
            array_push($this->openAPINullablesSetToNull, 'belongs_to_requester');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('belongs_to_requester', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['belongs_to_requester'] = $belongs_to_requester;

        return $this;
    }

    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param int $offset Offset
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param int $offset Offset
     *
     * @return null|mixed
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset): mixed
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param null|int $offset Offset
     * @param mixed    $value  Value to be set
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
     * @param int $offset Offset
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     *
     * @see https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed returns data which can be serialized by json_encode(), which is a value
     *               of any type other than a resource
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize(): mixed
    {
        return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets a header-safe presentation of the object.
     */
    public function toHeaderValue(): string
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }

    /**
     * Array of nullable properties.
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null.
     *
     * @return bool[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null.
     *
     * @param bool[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
     * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
     * $this->openAPINullablesSetToNull array.
     *
     * @param mixed $defaultValue
     */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }
}
