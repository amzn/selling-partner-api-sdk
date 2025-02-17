<?php
/**
 * OrderItemStatus
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Retail Procurement Orders
 *
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
 *
 * The version of the OpenAPI document: v1
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\vendor\orders\v1;

use
ArrayAccess;
use SpApi\ObjectSerializer;
use SpApi\Model\ModelInterface;

/**
 * OrderItemStatus Class Doc Comment
 *
 * @category Class
 * @description Represents the current status of an order item, including acknowledgement and receiving details.
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class OrderItemStatus implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'OrderItemStatus';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'item_sequence_number' => 'string',
             'buyer_product_identifier' => 'string',
             'vendor_product_identifier' => 'string',
             'net_cost' => '\SpApi\Model\vendor\orders\v1\Money',
             'list_price' => '\SpApi\Model\vendor\orders\v1\Money',
             'ordered_quantity' => '\SpApi\Model\vendor\orders\v1\OrderItemStatusOrderedQuantity',
             'acknowledgement_status' => '\SpApi\Model\vendor\orders\v1\OrderItemStatusAcknowledgementStatus',
             'receiving_status' => '\SpApi\Model\vendor\orders\v1\OrderItemStatusReceivingStatus'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'item_sequence_number' => null,
            'buyer_product_identifier' => null,
            'vendor_product_identifier' => null,
            'net_cost' => null,
            'list_price' => null,
            'ordered_quantity' => null,
            'acknowledgement_status' => null,
            'receiving_status' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'item_sequence_number' => false,
        'buyer_product_identifier' => true,
        'vendor_product_identifier' => true,
        'net_cost' => true,
        'list_price' => true,
        'ordered_quantity' => true,
        'acknowledgement_status' => true,
        'receiving_status' => true
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
        'item_sequence_number' => 'itemSequenceNumber',
                'buyer_product_identifier' => 'buyerProductIdentifier',
                'vendor_product_identifier' => 'vendorProductIdentifier',
                'net_cost' => 'netCost',
                'list_price' => 'listPrice',
                'ordered_quantity' => 'orderedQuantity',
                'acknowledgement_status' => 'acknowledgementStatus',
                'receiving_status' => 'receivingStatus'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'item_sequence_number' => 'setItemSequenceNumber',
        'buyer_product_identifier' => 'setBuyerProductIdentifier',
        'vendor_product_identifier' => 'setVendorProductIdentifier',
        'net_cost' => 'setNetCost',
        'list_price' => 'setListPrice',
        'ordered_quantity' => 'setOrderedQuantity',
        'acknowledgement_status' => 'setAcknowledgementStatus',
        'receiving_status' => 'setReceivingStatus'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'item_sequence_number' => 'getItemSequenceNumber',
        'buyer_product_identifier' => 'getBuyerProductIdentifier',
        'vendor_product_identifier' => 'getVendorProductIdentifier',
        'net_cost' => 'getNetCost',
        'list_price' => 'getListPrice',
        'ordered_quantity' => 'getOrderedQuantity',
        'acknowledgement_status' => 'getAcknowledgementStatus',
        'receiving_status' => 'getReceivingStatus'
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
        $this->setIfExists('item_sequence_number', $data ?? [], null);
        $this->setIfExists('buyer_product_identifier', $data ?? [], null);
        $this->setIfExists('vendor_product_identifier', $data ?? [], null);
        $this->setIfExists('net_cost', $data ?? [], null);
        $this->setIfExists('list_price', $data ?? [], null);
        $this->setIfExists('ordered_quantity', $data ?? [], null);
        $this->setIfExists('acknowledgement_status', $data ?? [], null);
        $this->setIfExists('receiving_status', $data ?? [], null);
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

        if ($this->container['item_sequence_number'] === null) {
            $invalidProperties[] = "'item_sequence_number' can't be null";
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
     * Gets item_sequence_number
     *
     * @return string
     */
    public function getItemSequenceNumber(): string
    {
        return $this->container['item_sequence_number'];
    }

    /**
     * Sets item_sequence_number
     *
     * @param string $item_sequence_number Numbering of the item on the purchase order. The first item will be 1, the second 2, and so on.
     *
     * @return self
     */
    public function setItemSequenceNumber(string $item_sequence_number): self
    {
        if (is_null($item_sequence_number)) {
            throw new \InvalidArgumentException('non-nullable item_sequence_number cannot be null');
        }
        $this->container['item_sequence_number'] = $item_sequence_number;

        return $this;
    }

    /**
     * Gets buyer_product_identifier
     *
     * @return string|null
     */
    public function getBuyerProductIdentifier(): ?string
    {
        return $this->container['buyer_product_identifier'];
    }

    /**
     * Sets buyer_product_identifier
     *
     * @param string|null $buyer_product_identifier Buyer's Standard Identification Number (ASIN) of an item.
     *
     * @return self
     */
    public function setBuyerProductIdentifier(?string $buyer_product_identifier): self
    {
        if (is_null($buyer_product_identifier)) {
            array_push($this->openAPINullablesSetToNull, 'buyer_product_identifier');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('buyer_product_identifier', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['buyer_product_identifier'] = $buyer_product_identifier;

        return $this;
    }

    /**
     * Gets vendor_product_identifier
     *
     * @return string|null
     */
    public function getVendorProductIdentifier(): ?string
    {
        return $this->container['vendor_product_identifier'];
    }

    /**
     * Sets vendor_product_identifier
     *
     * @param string|null $vendor_product_identifier The vendor selected product identification of the item.
     *
     * @return self
     */
    public function setVendorProductIdentifier(?string $vendor_product_identifier): self
    {
        if (is_null($vendor_product_identifier)) {
            array_push($this->openAPINullablesSetToNull, 'vendor_product_identifier');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('vendor_product_identifier', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['vendor_product_identifier'] = $vendor_product_identifier;

        return $this;
    }

    /**
     * Gets net_cost
     *
     * @return \SpApi\Model\vendor\orders\v1\Money|null
     */
    public function getNetCost(): ?\SpApi\Model\vendor\orders\v1\Money
    {
        return $this->container['net_cost'];
    }

    /**
     * Sets net_cost
     *
     * @param \SpApi\Model\vendor\orders\v1\Money|null $net_cost net_cost
     *
     * @return self
     */
    public function setNetCost(?\SpApi\Model\vendor\orders\v1\Money $net_cost): self
    {
        if (is_null($net_cost)) {
            array_push($this->openAPINullablesSetToNull, 'net_cost');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('net_cost', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['net_cost'] = $net_cost;

        return $this;
    }

    /**
     * Gets list_price
     *
     * @return \SpApi\Model\vendor\orders\v1\Money|null
     */
    public function getListPrice(): ?\SpApi\Model\vendor\orders\v1\Money
    {
        return $this->container['list_price'];
    }

    /**
     * Sets list_price
     *
     * @param \SpApi\Model\vendor\orders\v1\Money|null $list_price list_price
     *
     * @return self
     */
    public function setListPrice(?\SpApi\Model\vendor\orders\v1\Money $list_price): self
    {
        if (is_null($list_price)) {
            array_push($this->openAPINullablesSetToNull, 'list_price');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('list_price', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['list_price'] = $list_price;

        return $this;
    }

    /**
     * Gets ordered_quantity
     *
     * @return \SpApi\Model\vendor\orders\v1\OrderItemStatusOrderedQuantity|null
     */
    public function getOrderedQuantity(): ?\SpApi\Model\vendor\orders\v1\OrderItemStatusOrderedQuantity
    {
        return $this->container['ordered_quantity'];
    }

    /**
     * Sets ordered_quantity
     *
     * @param \SpApi\Model\vendor\orders\v1\OrderItemStatusOrderedQuantity|null $ordered_quantity ordered_quantity
     *
     * @return self
     */
    public function setOrderedQuantity(?\SpApi\Model\vendor\orders\v1\OrderItemStatusOrderedQuantity $ordered_quantity): self
    {
        if (is_null($ordered_quantity)) {
            array_push($this->openAPINullablesSetToNull, 'ordered_quantity');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('ordered_quantity', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['ordered_quantity'] = $ordered_quantity;

        return $this;
    }

    /**
     * Gets acknowledgement_status
     *
     * @return \SpApi\Model\vendor\orders\v1\OrderItemStatusAcknowledgementStatus|null
     */
    public function getAcknowledgementStatus(): ?\SpApi\Model\vendor\orders\v1\OrderItemStatusAcknowledgementStatus
    {
        return $this->container['acknowledgement_status'];
    }

    /**
     * Sets acknowledgement_status
     *
     * @param \SpApi\Model\vendor\orders\v1\OrderItemStatusAcknowledgementStatus|null $acknowledgement_status acknowledgement_status
     *
     * @return self
     */
    public function setAcknowledgementStatus(?\SpApi\Model\vendor\orders\v1\OrderItemStatusAcknowledgementStatus $acknowledgement_status): self
    {
        if (is_null($acknowledgement_status)) {
            array_push($this->openAPINullablesSetToNull, 'acknowledgement_status');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('acknowledgement_status', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['acknowledgement_status'] = $acknowledgement_status;

        return $this;
    }

    /**
     * Gets receiving_status
     *
     * @return \SpApi\Model\vendor\orders\v1\OrderItemStatusReceivingStatus|null
     */
    public function getReceivingStatus(): ?\SpApi\Model\vendor\orders\v1\OrderItemStatusReceivingStatus
    {
        return $this->container['receiving_status'];
    }

    /**
     * Sets receiving_status
     *
     * @param \SpApi\Model\vendor\orders\v1\OrderItemStatusReceivingStatus|null $receiving_status receiving_status
     *
     * @return self
     */
    public function setReceivingStatus(?\SpApi\Model\vendor\orders\v1\OrderItemStatusReceivingStatus $receiving_status): self
    {
        if (is_null($receiving_status)) {
            array_push($this->openAPINullablesSetToNull, 'receiving_status');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('receiving_status', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['receiving_status'] = $receiving_status;

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


