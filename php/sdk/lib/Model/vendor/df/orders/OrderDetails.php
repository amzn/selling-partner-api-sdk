<?php
/**
 * OrderDetails
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Direct Fulfillment Orders
 *
 * The Selling Partner API for Direct Fulfillment Orders provides programmatic access to a direct fulfillment vendor's order data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\vendor.df.orders;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * OrderDetails Class Doc Comment
 *
 * @category Class
 * @description Details of an order.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class OrderDetails implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'OrderDetails';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'customer_order_number' => 'string',
             'order_date' => '\DateTime',
             'order_status' => 'string',
             'shipment_details' => '\OpenAPI\Client\Model\vendor.df.orders\ShipmentDetails',
             'tax_total' => '\OpenAPI\Client\Model\vendor.df.orders\TaxItemDetails',
             'selling_party' => '\OpenAPI\Client\Model\vendor.df.orders\PartyIdentification',
             'ship_from_party' => '\OpenAPI\Client\Model\vendor.df.orders\PartyIdentification',
             'ship_to_party' => '\OpenAPI\Client\Model\vendor.df.orders\Address',
             'bill_to_party' => '\OpenAPI\Client\Model\vendor.df.orders\PartyIdentification',
             'items' => '\OpenAPI\Client\Model\vendor.df.orders\OrderItem[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'customer_order_number' => null,
            'order_date' => 'date-time',
            'order_status' => null,
            'shipment_details' => null,
            'tax_total' => null,
            'selling_party' => null,
            'ship_from_party' => null,
            'ship_to_party' => null,
            'bill_to_party' => null,
            'items' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'customer_order_number' => false,
        'order_date' => false,
        'order_status' => false,
        'shipment_details' => false,
        'tax_total' => false,
        'selling_party' => false,
        'ship_from_party' => false,
        'ship_to_party' => false,
        'bill_to_party' => false,
        'items' => false
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
        'customer_order_number' => 'customerOrderNumber',
                'order_date' => 'orderDate',
                'order_status' => 'orderStatus',
                'shipment_details' => 'shipmentDetails',
                'tax_total' => 'taxTotal',
                'selling_party' => 'sellingParty',
                'ship_from_party' => 'shipFromParty',
                'ship_to_party' => 'shipToParty',
                'bill_to_party' => 'billToParty',
                'items' => 'items'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'customer_order_number' => 'setCustomerOrderNumber',
        'order_date' => 'setOrderDate',
        'order_status' => 'setOrderStatus',
        'shipment_details' => 'setShipmentDetails',
        'tax_total' => 'setTaxTotal',
        'selling_party' => 'setSellingParty',
        'ship_from_party' => 'setShipFromParty',
        'ship_to_party' => 'setShipToParty',
        'bill_to_party' => 'setBillToParty',
        'items' => 'setItems'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'customer_order_number' => 'getCustomerOrderNumber',
        'order_date' => 'getOrderDate',
        'order_status' => 'getOrderStatus',
        'shipment_details' => 'getShipmentDetails',
        'tax_total' => 'getTaxTotal',
        'selling_party' => 'getSellingParty',
        'ship_from_party' => 'getShipFromParty',
        'ship_to_party' => 'getShipToParty',
        'bill_to_party' => 'getBillToParty',
        'items' => 'getItems'
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

    public const ORDER_STATUS__NEW = 'NEW';
    public const ORDER_STATUS_SHIPPED = 'SHIPPED';
    public const ORDER_STATUS_ACCEPTED = 'ACCEPTED';
    public const ORDER_STATUS_CANCELLED = 'CANCELLED';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getOrderStatusAllowableValues(): array
    {
        return [
            self::ORDER_STATUS__NEW,
            self::ORDER_STATUS_SHIPPED,
            self::ORDER_STATUS_ACCEPTED,
            self::ORDER_STATUS_CANCELLED,
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
        $this->setIfExists('customer_order_number', $data ?? [], null);
        $this->setIfExists('order_date', $data ?? [], null);
        $this->setIfExists('order_status', $data ?? [], null);
        $this->setIfExists('shipment_details', $data ?? [], null);
        $this->setIfExists('tax_total', $data ?? [], null);
        $this->setIfExists('selling_party', $data ?? [], null);
        $this->setIfExists('ship_from_party', $data ?? [], null);
        $this->setIfExists('ship_to_party', $data ?? [], null);
        $this->setIfExists('bill_to_party', $data ?? [], null);
        $this->setIfExists('items', $data ?? [], null);
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

        if ($this->container['customer_order_number'] === null) {
            $invalidProperties[] = "'customer_order_number' can't be null";
        }
        if ($this->container['order_date'] === null) {
            $invalidProperties[] = "'order_date' can't be null";
        }
        $allowedValues = $this->getOrderStatusAllowableValues();
        if (!is_null($this->container['order_status']) && !in_array($this->container['order_status'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'order_status', must be one of '%s'",
                $this->container['order_status'],
                implode("', '", $allowedValues)
            );
        }

        if ($this->container['shipment_details'] === null) {
            $invalidProperties[] = "'shipment_details' can't be null";
        }
        if ($this->container['selling_party'] === null) {
            $invalidProperties[] = "'selling_party' can't be null";
        }
        if ($this->container['ship_from_party'] === null) {
            $invalidProperties[] = "'ship_from_party' can't be null";
        }
        if ($this->container['ship_to_party'] === null) {
            $invalidProperties[] = "'ship_to_party' can't be null";
        }
        if ($this->container['bill_to_party'] === null) {
            $invalidProperties[] = "'bill_to_party' can't be null";
        }
        if ($this->container['items'] === null) {
            $invalidProperties[] = "'items' can't be null";
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
     * Gets customer_order_number
     *
     * @return string
     */
    public function getCustomerOrderNumber(): string
    {
        return $this->container['customer_order_number'];
    }

    /**
     * Sets customer_order_number
     *
     * @param string $customer_order_number The customer order number.
     *
     * @return self
     */
    public function setCustomerOrderNumber(string $customer_order_number): self
    {
        if (is_null($customer_order_number)) {
            throw new \InvalidArgumentException('non-nullable customer_order_number cannot be null');
        }
        $this->container['customer_order_number'] = $customer_order_number;

        return $this;
    }

    /**
     * Gets order_date
     *
     * @return \DateTime
     */
    public function getOrderDate(): \DateTime
    {
        return $this->container['order_date'];
    }

    /**
     * Sets order_date
     *
     * @param \DateTime $order_date The date the order was placed. This  field is expected to be in ISO-8601 date/time format, for example:2018-07-16T23:00:00Z/ 2018-07-16T23:00:00-05:00 /2018-07-16T23:00:00-08:00. If no time zone is specified, UTC should be assumed.
     *
     * @return self
     */
    public function setOrderDate(\DateTime $order_date): self
    {
        if (is_null($order_date)) {
            throw new \InvalidArgumentException('non-nullable order_date cannot be null');
        }
        $this->container['order_date'] = $order_date;

        return $this;
    }

    /**
     * Gets order_status
     *
     * @return string|null
     */
    public function getOrderStatus(): ?string
    {
        return $this->container['order_status'];
    }

    /**
     * Sets order_status
     *
     * @param string|null $order_status Current status of the order.
     *
     * @return self
     */
    public function setOrderStatus(?string $order_status): self
    {
        if (is_null($order_status)) {
            throw new \InvalidArgumentException('non-nullable order_status cannot be null');
        }
        $allowedValues = $this->getOrderStatusAllowableValues();
        if (!in_array($order_status, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'order_status', must be one of '%s'",
                    $order_status,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['order_status'] = $order_status;

        return $this;
    }

    /**
     * Gets shipment_details
     *
     * @return \OpenAPI\Client\Model\vendor.df.orders\ShipmentDetails
     */
    public function getShipmentDetails(): \OpenAPI\Client\Model\vendor.df.orders\ShipmentDetails
    {
        return $this->container['shipment_details'];
    }

    /**
     * Sets shipment_details
     *
     * @param \OpenAPI\Client\Model\vendor.df.orders\ShipmentDetails $shipment_details shipment_details
     *
     * @return self
     */
    public function setShipmentDetails(\OpenAPI\Client\Model\vendor.df.orders\ShipmentDetails $shipment_details): self
    {
        if (is_null($shipment_details)) {
            throw new \InvalidArgumentException('non-nullable shipment_details cannot be null');
        }
        $this->container['shipment_details'] = $shipment_details;

        return $this;
    }

    /**
     * Gets tax_total
     *
     * @return \OpenAPI\Client\Model\vendor.df.orders\TaxItemDetails|null
     */
    public function getTaxTotal(): ?\OpenAPI\Client\Model\vendor.df.orders\TaxItemDetails
    {
        return $this->container['tax_total'];
    }

    /**
     * Sets tax_total
     *
     * @param \OpenAPI\Client\Model\vendor.df.orders\TaxItemDetails|null $tax_total tax_total
     *
     * @return self
     */
    public function setTaxTotal(?\OpenAPI\Client\Model\vendor.df.orders\TaxItemDetails $tax_total): self
    {
        if (is_null($tax_total)) {
            throw new \InvalidArgumentException('non-nullable tax_total cannot be null');
        }
        $this->container['tax_total'] = $tax_total;

        return $this;
    }

    /**
     * Gets selling_party
     *
     * @return \OpenAPI\Client\Model\vendor.df.orders\PartyIdentification
     */
    public function getSellingParty(): \OpenAPI\Client\Model\vendor.df.orders\PartyIdentification
    {
        return $this->container['selling_party'];
    }

    /**
     * Sets selling_party
     *
     * @param \OpenAPI\Client\Model\vendor.df.orders\PartyIdentification $selling_party selling_party
     *
     * @return self
     */
    public function setSellingParty(\OpenAPI\Client\Model\vendor.df.orders\PartyIdentification $selling_party): self
    {
        if (is_null($selling_party)) {
            throw new \InvalidArgumentException('non-nullable selling_party cannot be null');
        }
        $this->container['selling_party'] = $selling_party;

        return $this;
    }

    /**
     * Gets ship_from_party
     *
     * @return \OpenAPI\Client\Model\vendor.df.orders\PartyIdentification
     */
    public function getShipFromParty(): \OpenAPI\Client\Model\vendor.df.orders\PartyIdentification
    {
        return $this->container['ship_from_party'];
    }

    /**
     * Sets ship_from_party
     *
     * @param \OpenAPI\Client\Model\vendor.df.orders\PartyIdentification $ship_from_party ship_from_party
     *
     * @return self
     */
    public function setShipFromParty(\OpenAPI\Client\Model\vendor.df.orders\PartyIdentification $ship_from_party): self
    {
        if (is_null($ship_from_party)) {
            throw new \InvalidArgumentException('non-nullable ship_from_party cannot be null');
        }
        $this->container['ship_from_party'] = $ship_from_party;

        return $this;
    }

    /**
     * Gets ship_to_party
     *
     * @return \OpenAPI\Client\Model\vendor.df.orders\Address
     */
    public function getShipToParty(): \OpenAPI\Client\Model\vendor.df.orders\Address
    {
        return $this->container['ship_to_party'];
    }

    /**
     * Sets ship_to_party
     *
     * @param \OpenAPI\Client\Model\vendor.df.orders\Address $ship_to_party ship_to_party
     *
     * @return self
     */
    public function setShipToParty(\OpenAPI\Client\Model\vendor.df.orders\Address $ship_to_party): self
    {
        if (is_null($ship_to_party)) {
            throw new \InvalidArgumentException('non-nullable ship_to_party cannot be null');
        }
        $this->container['ship_to_party'] = $ship_to_party;

        return $this;
    }

    /**
     * Gets bill_to_party
     *
     * @return \OpenAPI\Client\Model\vendor.df.orders\PartyIdentification
     */
    public function getBillToParty(): \OpenAPI\Client\Model\vendor.df.orders\PartyIdentification
    {
        return $this->container['bill_to_party'];
    }

    /**
     * Sets bill_to_party
     *
     * @param \OpenAPI\Client\Model\vendor.df.orders\PartyIdentification $bill_to_party bill_to_party
     *
     * @return self
     */
    public function setBillToParty(\OpenAPI\Client\Model\vendor.df.orders\PartyIdentification $bill_to_party): self
    {
        if (is_null($bill_to_party)) {
            throw new \InvalidArgumentException('non-nullable bill_to_party cannot be null');
        }
        $this->container['bill_to_party'] = $bill_to_party;

        return $this;
    }

    /**
     * Gets items
     *
     * @return arrayA
     */
    public function getItems(): array
    {
        return $this->container['items'];
    }

    /**
     * Sets items
     *
     * @param array $items A list of items in this purchase order.
     *
     * @return self
     */
    public function setItems(array $items): self
    {
        if (is_null($items)) {
            throw new \InvalidArgumentException('non-nullable items cannot be null');
        }
        $this->container['items'] = $items;

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


