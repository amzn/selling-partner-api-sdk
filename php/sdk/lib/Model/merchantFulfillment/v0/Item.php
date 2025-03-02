<?php
/**
 * Item
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Merchant Fulfillment
 *
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
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

namespace SpApi\Model\merchantFulfillment\v0;

use
ArrayAccess;
use SpApi\ObjectSerializer;
use SpApi\Model\ModelInterface;

/**
 * Item Class Doc Comment
 *
 * @category Class
 * @description An Amazon order item identifier and a quantity.
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class Item implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'Item';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'order_item_id' => 'string',
             'quantity' => 'int',
             'item_weight' => '\SpApi\Model\merchantFulfillment\v0\Weight',
             'item_description' => 'string',
             'transparency_code_list' => 'string[]',
             'item_level_seller_inputs_list' => '\SpApi\Model\merchantFulfillment\v0\AdditionalSellerInputs[]',
             'liquid_volume' => '\SpApi\Model\merchantFulfillment\v0\LiquidVolume',
             'is_hazmat' => 'bool',
             'dangerous_goods_details' => '\SpApi\Model\merchantFulfillment\v0\DangerousGoodsDetails'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'order_item_id' => null,
            'quantity' => 'int32',
            'item_weight' => null,
            'item_description' => null,
            'transparency_code_list' => null,
            'item_level_seller_inputs_list' => null,
            'liquid_volume' => null,
            'is_hazmat' => null,
            'dangerous_goods_details' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'order_item_id' => false,
        'quantity' => false,
        'item_weight' => true,
        'item_description' => true,
        'transparency_code_list' => true,
        'item_level_seller_inputs_list' => true,
        'liquid_volume' => true,
        'is_hazmat' => true,
        'dangerous_goods_details' => true
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
        'order_item_id' => 'OrderItemId',
                'quantity' => 'Quantity',
                'item_weight' => 'ItemWeight',
                'item_description' => 'ItemDescription',
                'transparency_code_list' => 'TransparencyCodeList',
                'item_level_seller_inputs_list' => 'ItemLevelSellerInputsList',
                'liquid_volume' => 'LiquidVolume',
                'is_hazmat' => 'IsHazmat',
                'dangerous_goods_details' => 'DangerousGoodsDetails'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'order_item_id' => 'setOrderItemId',
        'quantity' => 'setQuantity',
        'item_weight' => 'setItemWeight',
        'item_description' => 'setItemDescription',
        'transparency_code_list' => 'setTransparencyCodeList',
        'item_level_seller_inputs_list' => 'setItemLevelSellerInputsList',
        'liquid_volume' => 'setLiquidVolume',
        'is_hazmat' => 'setIsHazmat',
        'dangerous_goods_details' => 'setDangerousGoodsDetails'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'order_item_id' => 'getOrderItemId',
        'quantity' => 'getQuantity',
        'item_weight' => 'getItemWeight',
        'item_description' => 'getItemDescription',
        'transparency_code_list' => 'getTransparencyCodeList',
        'item_level_seller_inputs_list' => 'getItemLevelSellerInputsList',
        'liquid_volume' => 'getLiquidVolume',
        'is_hazmat' => 'getIsHazmat',
        'dangerous_goods_details' => 'getDangerousGoodsDetails'
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
        $this->setIfExists('order_item_id', $data ?? [], null);
        $this->setIfExists('quantity', $data ?? [], null);
        $this->setIfExists('item_weight', $data ?? [], null);
        $this->setIfExists('item_description', $data ?? [], null);
        $this->setIfExists('transparency_code_list', $data ?? [], null);
        $this->setIfExists('item_level_seller_inputs_list', $data ?? [], null);
        $this->setIfExists('liquid_volume', $data ?? [], null);
        $this->setIfExists('is_hazmat', $data ?? [], null);
        $this->setIfExists('dangerous_goods_details', $data ?? [], null);
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

        if ($this->container['order_item_id'] === null) {
            $invalidProperties[] = "'order_item_id' can't be null";
        }
        if ($this->container['quantity'] === null) {
            $invalidProperties[] = "'quantity' can't be null";
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
     * Gets order_item_id
     *
     * @return string
     */
    public function getOrderItemId(): string
    {
        return $this->container['order_item_id'];
    }

    /**
     * Sets order_item_id
     *
     * @param string $order_item_id An Amazon-defined identifier for an individual item in an order.
     *
     * @return self
     */
    public function setOrderItemId(string $order_item_id): self
    {
        if (is_null($order_item_id)) {
            throw new \InvalidArgumentException('non-nullable order_item_id cannot be null');
        }
        $this->container['order_item_id'] = $order_item_id;

        return $this;
    }

    /**
     * Gets quantity
     *
     * @return int
     */
    public function getQuantity(): int
    {
        return $this->container['quantity'];
    }

    /**
     * Sets quantity
     *
     * @param int $quantity The number of items.
     *
     * @return self
     */
    public function setQuantity(int $quantity): self
    {
        if (is_null($quantity)) {
            throw new \InvalidArgumentException('non-nullable quantity cannot be null');
        }
        $this->container['quantity'] = $quantity;

        return $this;
    }

    /**
     * Gets item_weight
     *
     * @return \SpApi\Model\merchantFulfillment\v0\Weight|null
     */
    public function getItemWeight(): ?\SpApi\Model\merchantFulfillment\v0\Weight
    {
        return $this->container['item_weight'];
    }

    /**
     * Sets item_weight
     *
     * @param \SpApi\Model\merchantFulfillment\v0\Weight|null $item_weight item_weight
     *
     * @return self
     */
    public function setItemWeight(?\SpApi\Model\merchantFulfillment\v0\Weight $item_weight): self
    {
        if (is_null($item_weight)) {
            array_push($this->openAPINullablesSetToNull, 'item_weight');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('item_weight', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['item_weight'] = $item_weight;

        return $this;
    }

    /**
     * Gets item_description
     *
     * @return string|null
     */
    public function getItemDescription(): ?string
    {
        return $this->container['item_description'];
    }

    /**
     * Sets item_description
     *
     * @param string|null $item_description The description of the item.
     *
     * @return self
     */
    public function setItemDescription(?string $item_description): self
    {
        if (is_null($item_description)) {
            array_push($this->openAPINullablesSetToNull, 'item_description');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('item_description', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['item_description'] = $item_description;

        return $this;
    }

    /**
     * Gets transparency_code_list
     *
     * @return array|null
     */
    public function getTransparencyCodeList(): ?array
    {
        return $this->container['transparency_code_list'];
    }

    /**
     * Sets transparency_code_list
     *
     * @param array|null $transparency_code_list A list of transparency codes.
     *
     * @return self
     */
    public function setTransparencyCodeList(?array $transparency_code_list): self
    {
        if (is_null($transparency_code_list)) {
            array_push($this->openAPINullablesSetToNull, 'transparency_code_list');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('transparency_code_list', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['transparency_code_list'] = $transparency_code_list;

        return $this;
    }

    /**
     * Gets item_level_seller_inputs_list
     *
     * @return array|null
     */
    public function getItemLevelSellerInputsList(): ?array
    {
        return $this->container['item_level_seller_inputs_list'];
    }

    /**
     * Sets item_level_seller_inputs_list
     *
     * @param array|null $item_level_seller_inputs_list A list of additional seller input pairs required to purchase shipping.
     *
     * @return self
     */
    public function setItemLevelSellerInputsList(?array $item_level_seller_inputs_list): self
    {
        if (is_null($item_level_seller_inputs_list)) {
            array_push($this->openAPINullablesSetToNull, 'item_level_seller_inputs_list');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('item_level_seller_inputs_list', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['item_level_seller_inputs_list'] = $item_level_seller_inputs_list;

        return $this;
    }

    /**
     * Gets liquid_volume
     *
     * @return \SpApi\Model\merchantFulfillment\v0\LiquidVolume|null
     */
    public function getLiquidVolume(): ?\SpApi\Model\merchantFulfillment\v0\LiquidVolume
    {
        return $this->container['liquid_volume'];
    }

    /**
     * Sets liquid_volume
     *
     * @param \SpApi\Model\merchantFulfillment\v0\LiquidVolume|null $liquid_volume liquid_volume
     *
     * @return self
     */
    public function setLiquidVolume(?\SpApi\Model\merchantFulfillment\v0\LiquidVolume $liquid_volume): self
    {
        if (is_null($liquid_volume)) {
            array_push($this->openAPINullablesSetToNull, 'liquid_volume');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('liquid_volume', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['liquid_volume'] = $liquid_volume;

        return $this;
    }

    /**
     * Gets is_hazmat
     *
     * @return bool|null
     */
    public function getIsHazmat(): ?bool
    {
        return $this->container['is_hazmat'];
    }

    /**
     * Sets is_hazmat
     *
     * @param bool|null $is_hazmat When true, the item qualifies as hazardous materials (hazmat). Defaults to false.
     *
     * @return self
     */
    public function setIsHazmat(?bool $is_hazmat): self
    {
        if (is_null($is_hazmat)) {
            array_push($this->openAPINullablesSetToNull, 'is_hazmat');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('is_hazmat', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['is_hazmat'] = $is_hazmat;

        return $this;
    }

    /**
     * Gets dangerous_goods_details
     *
     * @return \SpApi\Model\merchantFulfillment\v0\DangerousGoodsDetails|null
     */
    public function getDangerousGoodsDetails(): ?\SpApi\Model\merchantFulfillment\v0\DangerousGoodsDetails
    {
        return $this->container['dangerous_goods_details'];
    }

    /**
     * Sets dangerous_goods_details
     *
     * @param \SpApi\Model\merchantFulfillment\v0\DangerousGoodsDetails|null $dangerous_goods_details dangerous_goods_details
     *
     * @return self
     */
    public function setDangerousGoodsDetails(?\SpApi\Model\merchantFulfillment\v0\DangerousGoodsDetails $dangerous_goods_details): self
    {
        if (is_null($dangerous_goods_details)) {
            array_push($this->openAPINullablesSetToNull, 'dangerous_goods_details');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('dangerous_goods_details', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['dangerous_goods_details'] = $dangerous_goods_details;

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


