<?php
/**
 * ShipmentItem
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Shipment Invoicing
 *
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
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

namespace OpenAPI\Client\Model\invoicing;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * ShipmentItem Class Doc Comment
 *
 * @category Class
 * @description The shipment item information required by a seller to issue a shipment invoice.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ShipmentItem implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'ShipmentItem';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'asin' => 'string',
             'seller_sku' => 'string',
             'order_item_id' => 'string',
             'title' => 'string',
             'quantity_ordered' => 'float',
             'item_price' => '\OpenAPI\Client\Model\invoicing\Money',
             'shipping_price' => '\OpenAPI\Client\Model\invoicing\Money',
             'gift_wrap_price' => '\OpenAPI\Client\Model\invoicing\Money',
             'shipping_discount' => '\OpenAPI\Client\Model\invoicing\Money',
             'promotion_discount' => '\OpenAPI\Client\Model\invoicing\Money',
             'serial_numbers' => 'string[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'asin' => null,
            'seller_sku' => null,
            'order_item_id' => null,
            'title' => null,
            'quantity_ordered' => null,
            'item_price' => null,
            'shipping_price' => null,
            'gift_wrap_price' => null,
            'shipping_discount' => null,
            'promotion_discount' => null,
            'serial_numbers' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'asin' => true,
        'seller_sku' => true,
        'order_item_id' => true,
        'title' => true,
        'quantity_ordered' => true,
        'item_price' => true,
        'shipping_price' => true,
        'gift_wrap_price' => true,
        'shipping_discount' => true,
        'promotion_discount' => true,
        'serial_numbers' => true
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
        'asin' => 'ASIN',
                'seller_sku' => 'SellerSKU',
                'order_item_id' => 'OrderItemId',
                'title' => 'Title',
                'quantity_ordered' => 'QuantityOrdered',
                'item_price' => 'ItemPrice',
                'shipping_price' => 'ShippingPrice',
                'gift_wrap_price' => 'GiftWrapPrice',
                'shipping_discount' => 'ShippingDiscount',
                'promotion_discount' => 'PromotionDiscount',
                'serial_numbers' => 'SerialNumbers'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'asin' => 'setAsin',
        'seller_sku' => 'setSellerSku',
        'order_item_id' => 'setOrderItemId',
        'title' => 'setTitle',
        'quantity_ordered' => 'setQuantityOrdered',
        'item_price' => 'setItemPrice',
        'shipping_price' => 'setShippingPrice',
        'gift_wrap_price' => 'setGiftWrapPrice',
        'shipping_discount' => 'setShippingDiscount',
        'promotion_discount' => 'setPromotionDiscount',
        'serial_numbers' => 'setSerialNumbers'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'asin' => 'getAsin',
        'seller_sku' => 'getSellerSku',
        'order_item_id' => 'getOrderItemId',
        'title' => 'getTitle',
        'quantity_ordered' => 'getQuantityOrdered',
        'item_price' => 'getItemPrice',
        'shipping_price' => 'getShippingPrice',
        'gift_wrap_price' => 'getGiftWrapPrice',
        'shipping_discount' => 'getShippingDiscount',
        'promotion_discount' => 'getPromotionDiscount',
        'serial_numbers' => 'getSerialNumbers'
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
        $this->setIfExists('asin', $data ?? [], null);
        $this->setIfExists('seller_sku', $data ?? [], null);
        $this->setIfExists('order_item_id', $data ?? [], null);
        $this->setIfExists('title', $data ?? [], null);
        $this->setIfExists('quantity_ordered', $data ?? [], null);
        $this->setIfExists('item_price', $data ?? [], null);
        $this->setIfExists('shipping_price', $data ?? [], null);
        $this->setIfExists('gift_wrap_price', $data ?? [], null);
        $this->setIfExists('shipping_discount', $data ?? [], null);
        $this->setIfExists('promotion_discount', $data ?? [], null);
        $this->setIfExists('serial_numbers', $data ?? [], null);
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
     * Gets asin
     *
     * @return string|null
     */
    public function getAsin(): ?string
    {
        return $this->container['asin'];
    }

    /**
     * Sets asin
     *
     * @param string|null $asin The Amazon Standard Identification Number (ASIN) of the item.
     *
     * @return self
     */
    public function setAsin(?string $asin): self
    {
        if (is_null($asin)) {
            array_push($this->openAPINullablesSetToNull, 'asin');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('asin', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['asin'] = $asin;

        return $this;
    }

    /**
     * Gets seller_sku
     *
     * @return string|null
     */
    public function getSellerSku(): ?string
    {
        return $this->container['seller_sku'];
    }

    /**
     * Sets seller_sku
     *
     * @param string|null $seller_sku The seller SKU of the item.
     *
     * @return self
     */
    public function setSellerSku(?string $seller_sku): self
    {
        if (is_null($seller_sku)) {
            array_push($this->openAPINullablesSetToNull, 'seller_sku');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('seller_sku', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['seller_sku'] = $seller_sku;

        return $this;
    }

    /**
     * Gets order_item_id
     *
     * @return string|null
     */
    public function getOrderItemId(): ?string
    {
        return $this->container['order_item_id'];
    }

    /**
     * Sets order_item_id
     *
     * @param string|null $order_item_id The Amazon-defined identifier for the order item.
     *
     * @return self
     */
    public function setOrderItemId(?string $order_item_id): self
    {
        if (is_null($order_item_id)) {
            array_push($this->openAPINullablesSetToNull, 'order_item_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('order_item_id', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['order_item_id'] = $order_item_id;

        return $this;
    }

    /**
     * Gets title
     *
     * @return string|null
     */
    public function getTitle(): ?string
    {
        return $this->container['title'];
    }

    /**
     * Sets title
     *
     * @param string|null $title The name of the item.
     *
     * @return self
     */
    public function setTitle(?string $title): self
    {
        if (is_null($title)) {
            array_push($this->openAPINullablesSetToNull, 'title');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('title', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['title'] = $title;

        return $this;
    }

    /**
     * Gets quantity_ordered
     *
     * @return float|null
     */
    public function getQuantityOrdered(): ?float
    {
        return $this->container['quantity_ordered'];
    }

    /**
     * Sets quantity_ordered
     *
     * @param float|null $quantity_ordered The number of items ordered.
     *
     * @return self
     */
    public function setQuantityOrdered(?float $quantity_ordered): self
    {
        if (is_null($quantity_ordered)) {
            array_push($this->openAPINullablesSetToNull, 'quantity_ordered');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('quantity_ordered', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['quantity_ordered'] = $quantity_ordered;

        return $this;
    }

    /**
     * Gets item_price
     *
     * @return \OpenAPI\Client\Model\invoicing\Money|null
     */
    public function getItemPrice(): ?\OpenAPI\Client\Model\invoicing\Money
    {
        return $this->container['item_price'];
    }

    /**
     * Sets item_price
     *
     * @param \OpenAPI\Client\Model\invoicing\Money|null $item_price item_price
     *
     * @return self
     */
    public function setItemPrice(?\OpenAPI\Client\Model\invoicing\Money $item_price): self
    {
        if (is_null($item_price)) {
            array_push($this->openAPINullablesSetToNull, 'item_price');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('item_price', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['item_price'] = $item_price;

        return $this;
    }

    /**
     * Gets shipping_price
     *
     * @return \OpenAPI\Client\Model\invoicing\Money|null
     */
    public function getShippingPrice(): ?\OpenAPI\Client\Model\invoicing\Money
    {
        return $this->container['shipping_price'];
    }

    /**
     * Sets shipping_price
     *
     * @param \OpenAPI\Client\Model\invoicing\Money|null $shipping_price shipping_price
     *
     * @return self
     */
    public function setShippingPrice(?\OpenAPI\Client\Model\invoicing\Money $shipping_price): self
    {
        if (is_null($shipping_price)) {
            array_push($this->openAPINullablesSetToNull, 'shipping_price');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipping_price', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['shipping_price'] = $shipping_price;

        return $this;
    }

    /**
     * Gets gift_wrap_price
     *
     * @return \OpenAPI\Client\Model\invoicing\Money|null
     */
    public function getGiftWrapPrice(): ?\OpenAPI\Client\Model\invoicing\Money
    {
        return $this->container['gift_wrap_price'];
    }

    /**
     * Sets gift_wrap_price
     *
     * @param \OpenAPI\Client\Model\invoicing\Money|null $gift_wrap_price gift_wrap_price
     *
     * @return self
     */
    public function setGiftWrapPrice(?\OpenAPI\Client\Model\invoicing\Money $gift_wrap_price): self
    {
        if (is_null($gift_wrap_price)) {
            array_push($this->openAPINullablesSetToNull, 'gift_wrap_price');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('gift_wrap_price', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['gift_wrap_price'] = $gift_wrap_price;

        return $this;
    }

    /**
     * Gets shipping_discount
     *
     * @return \OpenAPI\Client\Model\invoicing\Money|null
     */
    public function getShippingDiscount(): ?\OpenAPI\Client\Model\invoicing\Money
    {
        return $this->container['shipping_discount'];
    }

    /**
     * Sets shipping_discount
     *
     * @param \OpenAPI\Client\Model\invoicing\Money|null $shipping_discount shipping_discount
     *
     * @return self
     */
    public function setShippingDiscount(?\OpenAPI\Client\Model\invoicing\Money $shipping_discount): self
    {
        if (is_null($shipping_discount)) {
            array_push($this->openAPINullablesSetToNull, 'shipping_discount');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipping_discount', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['shipping_discount'] = $shipping_discount;

        return $this;
    }

    /**
     * Gets promotion_discount
     *
     * @return \OpenAPI\Client\Model\invoicing\Money|null
     */
    public function getPromotionDiscount(): ?\OpenAPI\Client\Model\invoicing\Money
    {
        return $this->container['promotion_discount'];
    }

    /**
     * Sets promotion_discount
     *
     * @param \OpenAPI\Client\Model\invoicing\Money|null $promotion_discount promotion_discount
     *
     * @return self
     */
    public function setPromotionDiscount(?\OpenAPI\Client\Model\invoicing\Money $promotion_discount): self
    {
        if (is_null($promotion_discount)) {
            array_push($this->openAPINullablesSetToNull, 'promotion_discount');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('promotion_discount', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['promotion_discount'] = $promotion_discount;

        return $this;
    }

    /**
     * Gets serial_numbers
     *
     * @return array|null
     */
    public function getSerialNumbers(): ?array
    {
        return $this->container['serial_numbers'];
    }

    /**
     * Sets serial_numbers
     *
     * @param array|null $serial_numbers The list of serial numbers.
     *
     * @return self
     */
    public function setSerialNumbers(?array $serial_numbers): self
    {
        if (is_null($serial_numbers)) {
            array_push($this->openAPINullablesSetToNull, 'serial_numbers');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('serial_numbers', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['serial_numbers'] = $serial_numbers;

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


