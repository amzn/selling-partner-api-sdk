<?php
/**
 * RemovalShipmentAdjustmentEvent
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Finances
 *
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
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

namespace OpenAPI\Client\Model\financesv0;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * RemovalShipmentAdjustmentEvent Class Doc Comment
 *
 * @category Class
 * @description A financial adjustment event for FBA liquidated inventory. A positive value indicates money owed to Amazon by the buyer (for example, when the charge was incorrectly calculated as less than it should be). A negative value indicates a full or partial refund owed to the buyer (for example, when the buyer receives damaged items or fewer items than ordered).
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class RemovalShipmentAdjustmentEvent implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'RemovalShipmentAdjustmentEvent';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'posted_date' => '\DateTime',
             'adjustment_event_id' => 'string',
             'merchant_order_id' => 'string',
             'order_id' => 'string',
             'transaction_type' => 'string',
             'removal_shipment_item_adjustment_list' => '\OpenAPI\Client\Model\financesv0\RemovalShipmentItemAdjustment[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'posted_date' => 'date-time',
            'adjustment_event_id' => null,
            'merchant_order_id' => null,
            'order_id' => null,
            'transaction_type' => null,
            'removal_shipment_item_adjustment_list' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'posted_date' => false,
        'adjustment_event_id' => false,
        'merchant_order_id' => false,
        'order_id' => false,
        'transaction_type' => false,
        'removal_shipment_item_adjustment_list' => false
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
        'posted_date' => 'PostedDate',
                'adjustment_event_id' => 'AdjustmentEventId',
                'merchant_order_id' => 'MerchantOrderId',
                'order_id' => 'OrderId',
                'transaction_type' => 'TransactionType',
                'removal_shipment_item_adjustment_list' => 'RemovalShipmentItemAdjustmentList'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'posted_date' => 'setPostedDate',
        'adjustment_event_id' => 'setAdjustmentEventId',
        'merchant_order_id' => 'setMerchantOrderId',
        'order_id' => 'setOrderId',
        'transaction_type' => 'setTransactionType',
        'removal_shipment_item_adjustment_list' => 'setRemovalShipmentItemAdjustmentList'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'posted_date' => 'getPostedDate',
        'adjustment_event_id' => 'getAdjustmentEventId',
        'merchant_order_id' => 'getMerchantOrderId',
        'order_id' => 'getOrderId',
        'transaction_type' => 'getTransactionType',
        'removal_shipment_item_adjustment_list' => 'getRemovalShipmentItemAdjustmentList'
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
        $this->setIfExists('posted_date', $data ?? [], null);
        $this->setIfExists('adjustment_event_id', $data ?? [], null);
        $this->setIfExists('merchant_order_id', $data ?? [], null);
        $this->setIfExists('order_id', $data ?? [], null);
        $this->setIfExists('transaction_type', $data ?? [], null);
        $this->setIfExists('removal_shipment_item_adjustment_list', $data ?? [], null);
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
     * Gets posted_date
     *
     * @return \DateTime|null
     */
    public function getPostedDate(): ?\DateTime
    {
        return $this->container['posted_date'];
    }

    /**
     * Sets posted_date
     *
     * @param \DateTime|null $posted_date Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     *
     * @return self
     */
    public function setPostedDate(?\DateTime $posted_date): self
    {
        if (is_null($posted_date)) {
            throw new \InvalidArgumentException('non-nullable posted_date cannot be null');
        }
        $this->container['posted_date'] = $posted_date;

        return $this;
    }

    /**
     * Gets adjustment_event_id
     *
     * @return string|null
     */
    public function getAdjustmentEventId(): ?string
    {
        return $this->container['adjustment_event_id'];
    }

    /**
     * Sets adjustment_event_id
     *
     * @param string|null $adjustment_event_id The unique identifier for the adjustment event.
     *
     * @return self
     */
    public function setAdjustmentEventId(?string $adjustment_event_id): self
    {
        if (is_null($adjustment_event_id)) {
            throw new \InvalidArgumentException('non-nullable adjustment_event_id cannot be null');
        }
        $this->container['adjustment_event_id'] = $adjustment_event_id;

        return $this;
    }

    /**
     * Gets merchant_order_id
     *
     * @return string|null
     */
    public function getMerchantOrderId(): ?string
    {
        return $this->container['merchant_order_id'];
    }

    /**
     * Sets merchant_order_id
     *
     * @param string|null $merchant_order_id The merchant removal orderId.
     *
     * @return self
     */
    public function setMerchantOrderId(?string $merchant_order_id): self
    {
        if (is_null($merchant_order_id)) {
            throw new \InvalidArgumentException('non-nullable merchant_order_id cannot be null');
        }
        $this->container['merchant_order_id'] = $merchant_order_id;

        return $this;
    }

    /**
     * Gets order_id
     *
     * @return string|null
     */
    public function getOrderId(): ?string
    {
        return $this->container['order_id'];
    }

    /**
     * Sets order_id
     *
     * @param string|null $order_id The orderId for shipping inventory.
     *
     * @return self
     */
    public function setOrderId(?string $order_id): self
    {
        if (is_null($order_id)) {
            throw new \InvalidArgumentException('non-nullable order_id cannot be null');
        }
        $this->container['order_id'] = $order_id;

        return $this;
    }

    /**
     * Gets transaction_type
     *
     * @return string|null
     */
    public function getTransactionType(): ?string
    {
        return $this->container['transaction_type'];
    }

    /**
     * Sets transaction_type
     *
     * @param string|null $transaction_type The type of removal order.  Possible values:  * WHOLESALE_LIQUIDATION.
     *
     * @return self
     */
    public function setTransactionType(?string $transaction_type): self
    {
        if (is_null($transaction_type)) {
            throw new \InvalidArgumentException('non-nullable transaction_type cannot be null');
        }
        $this->container['transaction_type'] = $transaction_type;

        return $this;
    }

    /**
     * Gets removal_shipment_item_adjustment_list
     *
     * @return arrayA|null
     */
    public function getRemovalShipmentItemAdjustmentList(): ?array
    {
        return $this->container['removal_shipment_item_adjustment_list'];
    }

    /**
     * Sets removal_shipment_item_adjustment_list
     *
     * @param array|null $removal_shipment_item_adjustment_list A comma-delimited list of Removal shipmentItemAdjustment details for FBA inventory.
     *
     * @return self
     */
    public function setRemovalShipmentItemAdjustmentList(?array $removal_shipment_item_adjustment_list): self
    {
        if (is_null($removal_shipment_item_adjustment_list)) {
            throw new \InvalidArgumentException('non-nullable removal_shipment_item_adjustment_list cannot be null');
        }
        $this->container['removal_shipment_item_adjustment_list'] = $removal_shipment_item_adjustment_list;

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


