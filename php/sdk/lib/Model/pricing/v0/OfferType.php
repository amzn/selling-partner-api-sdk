<?php
/**
 * OfferType
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
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

namespace OpenAPI\Client\Model\pricing\v0;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * OfferType Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class OfferType implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'OfferType';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'offer_type' => '\OpenAPI\Client\Model\pricing\v0\OfferCustomerType',
             'buying_price' => '\OpenAPI\Client\Model\pricing\v0\PriceType',
             'regular_price' => '\OpenAPI\Client\Model\pricing\v0\MoneyType',
             'business_price' => '\OpenAPI\Client\Model\pricing\v0\MoneyType',
             'quantity_discount_prices' => '\OpenAPI\Client\Model\pricing\v0\QuantityDiscountPriceType[]',
             'fulfillment_channel' => 'string',
             'item_condition' => 'string',
             'item_sub_condition' => 'string',
             'seller_sku' => 'string'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'offer_type' => null,
            'buying_price' => null,
            'regular_price' => null,
            'business_price' => null,
            'quantity_discount_prices' => null,
            'fulfillment_channel' => null,
            'item_condition' => null,
            'item_sub_condition' => null,
            'seller_sku' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'offer_type' => true,
        'buying_price' => false,
        'regular_price' => false,
        'business_price' => true,
        'quantity_discount_prices' => true,
        'fulfillment_channel' => false,
        'item_condition' => false,
        'item_sub_condition' => false,
        'seller_sku' => false
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
        'offer_type' => 'offerType',
                'buying_price' => 'BuyingPrice',
                'regular_price' => 'RegularPrice',
                'business_price' => 'businessPrice',
                'quantity_discount_prices' => 'quantityDiscountPrices',
                'fulfillment_channel' => 'FulfillmentChannel',
                'item_condition' => 'ItemCondition',
                'item_sub_condition' => 'ItemSubCondition',
                'seller_sku' => 'SellerSKU'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'offer_type' => 'setOfferType',
        'buying_price' => 'setBuyingPrice',
        'regular_price' => 'setRegularPrice',
        'business_price' => 'setBusinessPrice',
        'quantity_discount_prices' => 'setQuantityDiscountPrices',
        'fulfillment_channel' => 'setFulfillmentChannel',
        'item_condition' => 'setItemCondition',
        'item_sub_condition' => 'setItemSubCondition',
        'seller_sku' => 'setSellerSku'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'offer_type' => 'getOfferType',
        'buying_price' => 'getBuyingPrice',
        'regular_price' => 'getRegularPrice',
        'business_price' => 'getBusinessPrice',
        'quantity_discount_prices' => 'getQuantityDiscountPrices',
        'fulfillment_channel' => 'getFulfillmentChannel',
        'item_condition' => 'getItemCondition',
        'item_sub_condition' => 'getItemSubCondition',
        'seller_sku' => 'getSellerSku'
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
        $this->setIfExists('offer_type', $data ?? [], null);
        $this->setIfExists('buying_price', $data ?? [], null);
        $this->setIfExists('regular_price', $data ?? [], null);
        $this->setIfExists('business_price', $data ?? [], null);
        $this->setIfExists('quantity_discount_prices', $data ?? [], null);
        $this->setIfExists('fulfillment_channel', $data ?? [], null);
        $this->setIfExists('item_condition', $data ?? [], null);
        $this->setIfExists('item_sub_condition', $data ?? [], null);
        $this->setIfExists('seller_sku', $data ?? [], null);
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

        if ($this->container['buying_price'] === null) {
            $invalidProperties[] = "'buying_price' can't be null";
        }
        if ($this->container['regular_price'] === null) {
            $invalidProperties[] = "'regular_price' can't be null";
        }
        if ($this->container['fulfillment_channel'] === null) {
            $invalidProperties[] = "'fulfillment_channel' can't be null";
        }
        if ($this->container['item_condition'] === null) {
            $invalidProperties[] = "'item_condition' can't be null";
        }
        if ($this->container['item_sub_condition'] === null) {
            $invalidProperties[] = "'item_sub_condition' can't be null";
        }
        if ($this->container['seller_sku'] === null) {
            $invalidProperties[] = "'seller_sku' can't be null";
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
     * Gets offer_type
     *
     * @return string|null
     */
    public function getOfferType(): ?string
    {
        return $this->container['offer_type'];
    }

    /**
     * Sets offer_type
     *
     * @param string|null $offer_type offer_type
     *
     * @return self
     */
    public function setOfferType(?string $offer_type): self
    {
        if (is_null($offer_type)) {
            array_push($this->openAPINullablesSetToNull, 'offer_type');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('offer_type', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['offer_type'] = $offer_type;

        return $this;
    }

    /**
     * Gets buying_price
     *
     * @return \OpenAPI\Client\Model\pricing\v0\PriceType
     */
    public function getBuyingPrice(): \OpenAPI\Client\Model\pricing\v0\PriceType
    {
        return $this->container['buying_price'];
    }

    /**
     * Sets buying_price
     *
     * @param \OpenAPI\Client\Model\pricing\v0\PriceType $buying_price buying_price
     *
     * @return self
     */
    public function setBuyingPrice(\OpenAPI\Client\Model\pricing\v0\PriceType $buying_price): self
    {
        if (is_null($buying_price)) {
            throw new \InvalidArgumentException('non-nullable buying_price cannot be null');
        }
        $this->container['buying_price'] = $buying_price;

        return $this;
    }

    /**
     * Gets regular_price
     *
     * @return \OpenAPI\Client\Model\pricing\v0\MoneyType
     */
    public function getRegularPrice(): \OpenAPI\Client\Model\pricing\v0\MoneyType
    {
        return $this->container['regular_price'];
    }

    /**
     * Sets regular_price
     *
     * @param \OpenAPI\Client\Model\pricing\v0\MoneyType $regular_price regular_price
     *
     * @return self
     */
    public function setRegularPrice(\OpenAPI\Client\Model\pricing\v0\MoneyType $regular_price): self
    {
        if (is_null($regular_price)) {
            throw new \InvalidArgumentException('non-nullable regular_price cannot be null');
        }
        $this->container['regular_price'] = $regular_price;

        return $this;
    }

    /**
     * Gets business_price
     *
     * @return \OpenAPI\Client\Model\pricing\v0\MoneyType|null
     */
    public function getBusinessPrice(): ?\OpenAPI\Client\Model\pricing\v0\MoneyType
    {
        return $this->container['business_price'];
    }

    /**
     * Sets business_price
     *
     * @param \OpenAPI\Client\Model\pricing\v0\MoneyType|null $business_price business_price
     *
     * @return self
     */
    public function setBusinessPrice(?\OpenAPI\Client\Model\pricing\v0\MoneyType $business_price): self
    {
        if (is_null($business_price)) {
            array_push($this->openAPINullablesSetToNull, 'business_price');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('business_price', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['business_price'] = $business_price;

        return $this;
    }

    /**
     * Gets quantity_discount_prices
     *
     * @return array|null
     */
    public function getQuantityDiscountPrices(): ?array
    {
        return $this->container['quantity_discount_prices'];
    }

    /**
     * Sets quantity_discount_prices
     *
     * @param array|null $quantity_discount_prices quantity_discount_prices
     *
     * @return self
     */
    public function setQuantityDiscountPrices(?array $quantity_discount_prices): self
    {
        if (is_null($quantity_discount_prices)) {
            array_push($this->openAPINullablesSetToNull, 'quantity_discount_prices');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('quantity_discount_prices', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['quantity_discount_prices'] = $quantity_discount_prices;

        return $this;
    }

    /**
     * Gets fulfillment_channel
     *
     * @return string
     */
    public function getFulfillmentChannel(): string
    {
        return $this->container['fulfillment_channel'];
    }

    /**
     * Sets fulfillment_channel
     *
     * @param string $fulfillment_channel The fulfillment channel for the offer listing. Possible values:  * Amazon - Fulfilled by Amazon. * Merchant - Fulfilled by the seller.
     *
     * @return self
     */
    public function setFulfillmentChannel(string $fulfillment_channel): self
    {
        if (is_null($fulfillment_channel)) {
            throw new \InvalidArgumentException('non-nullable fulfillment_channel cannot be null');
        }
        $this->container['fulfillment_channel'] = $fulfillment_channel;

        return $this;
    }

    /**
     * Gets item_condition
     *
     * @return string
     */
    public function getItemCondition(): string
    {
        return $this->container['item_condition'];
    }

    /**
     * Sets item_condition
     *
     * @param string $item_condition The item condition for the offer listing. Possible values: New, Used, Collectible, Refurbished, or Club.
     *
     * @return self
     */
    public function setItemCondition(string $item_condition): self
    {
        if (is_null($item_condition)) {
            throw new \InvalidArgumentException('non-nullable item_condition cannot be null');
        }
        $this->container['item_condition'] = $item_condition;

        return $this;
    }

    /**
     * Gets item_sub_condition
     *
     * @return string
     */
    public function getItemSubCondition(): string
    {
        return $this->container['item_sub_condition'];
    }

    /**
     * Sets item_sub_condition
     *
     * @param string $item_sub_condition The item subcondition for the offer listing. Possible values: New, Mint, Very Good, Good, Acceptable, Poor, Club, OEM, Warranty, Refurbished Warranty, Refurbished, Open Box, or Other.
     *
     * @return self
     */
    public function setItemSubCondition(string $item_sub_condition): self
    {
        if (is_null($item_sub_condition)) {
            throw new \InvalidArgumentException('non-nullable item_sub_condition cannot be null');
        }
        $this->container['item_sub_condition'] = $item_sub_condition;

        return $this;
    }

    /**
     * Gets seller_sku
     *
     * @return string
     */
    public function getSellerSku(): string
    {
        return $this->container['seller_sku'];
    }

    /**
     * Sets seller_sku
     *
     * @param string $seller_sku The seller stock keeping unit (SKU) of the item.
     *
     * @return self
     */
    public function setSellerSku(string $seller_sku): self
    {
        if (is_null($seller_sku)) {
            throw new \InvalidArgumentException('non-nullable seller_sku cannot be null');
        }
        $this->container['seller_sku'] = $seller_sku;

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


