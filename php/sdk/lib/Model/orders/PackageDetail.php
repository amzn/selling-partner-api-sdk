<?php
/**
 * PackageDetail
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Orders v0
 *
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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

namespace OpenAPI\Client\Model\orders;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * PackageDetail Class Doc Comment
 *
 * @category Class
 * @description Properties of packages
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class PackageDetail implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'PackageDetail';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'package_reference_id' => 'string',
             'carrier_code' => 'string',
             'carrier_name' => 'string',
             'shipping_method' => 'string',
             'tracking_number' => 'string',
             'ship_date' => '\DateTime',
             'ship_from_supply_source_id' => 'string',
             'order_items' => '\OpenAPI\Client\Model\orders\ConfirmShipmentOrderItem[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'package_reference_id' => null,
            'carrier_code' => null,
            'carrier_name' => null,
            'shipping_method' => null,
            'tracking_number' => null,
            'ship_date' => 'date-time',
            'ship_from_supply_source_id' => null,
            'order_items' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'package_reference_id' => false,
        'carrier_code' => false,
        'carrier_name' => true,
        'shipping_method' => true,
        'tracking_number' => false,
        'ship_date' => false,
        'ship_from_supply_source_id' => true,
        'order_items' => false
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
        'package_reference_id' => 'packageReferenceId',
                'carrier_code' => 'carrierCode',
                'carrier_name' => 'carrierName',
                'shipping_method' => 'shippingMethod',
                'tracking_number' => 'trackingNumber',
                'ship_date' => 'shipDate',
                'ship_from_supply_source_id' => 'shipFromSupplySourceId',
                'order_items' => 'orderItems'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'package_reference_id' => 'setPackageReferenceId',
        'carrier_code' => 'setCarrierCode',
        'carrier_name' => 'setCarrierName',
        'shipping_method' => 'setShippingMethod',
        'tracking_number' => 'setTrackingNumber',
        'ship_date' => 'setShipDate',
        'ship_from_supply_source_id' => 'setShipFromSupplySourceId',
        'order_items' => 'setOrderItems'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'package_reference_id' => 'getPackageReferenceId',
        'carrier_code' => 'getCarrierCode',
        'carrier_name' => 'getCarrierName',
        'shipping_method' => 'getShippingMethod',
        'tracking_number' => 'getTrackingNumber',
        'ship_date' => 'getShipDate',
        'ship_from_supply_source_id' => 'getShipFromSupplySourceId',
        'order_items' => 'getOrderItems'
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
        $this->setIfExists('package_reference_id', $data ?? [], null);
        $this->setIfExists('carrier_code', $data ?? [], null);
        $this->setIfExists('carrier_name', $data ?? [], null);
        $this->setIfExists('shipping_method', $data ?? [], null);
        $this->setIfExists('tracking_number', $data ?? [], null);
        $this->setIfExists('ship_date', $data ?? [], null);
        $this->setIfExists('ship_from_supply_source_id', $data ?? [], null);
        $this->setIfExists('order_items', $data ?? [], null);
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

        if ($this->container['package_reference_id'] === null) {
            $invalidProperties[] = "'package_reference_id' can't be null";
        }
        if ($this->container['carrier_code'] === null) {
            $invalidProperties[] = "'carrier_code' can't be null";
        }
        if ($this->container['tracking_number'] === null) {
            $invalidProperties[] = "'tracking_number' can't be null";
        }
        if ($this->container['ship_date'] === null) {
            $invalidProperties[] = "'ship_date' can't be null";
        }
        if ($this->container['order_items'] === null) {
            $invalidProperties[] = "'order_items' can't be null";
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
     * Gets package_reference_id
     *
     * @return string
     */
    public function getPackageReferenceId(): string
    {
        return $this->container['package_reference_id'];
    }

    /**
     * Sets package_reference_id
     *
     * @param string $package_reference_id A seller-supplied identifier that uniquely identifies a package within the scope of an order. Only positive numeric values are supported.
     *
     * @return self
     */
    public function setPackageReferenceId(string $package_reference_id): self
    {
        if (is_null($package_reference_id)) {
            throw new \InvalidArgumentException('non-nullable package_reference_id cannot be null');
        }
        $this->container['package_reference_id'] = $package_reference_id;

        return $this;
    }

    /**
     * Gets carrier_code
     *
     * @return string
     */
    public function getCarrierCode(): string
    {
        return $this->container['carrier_code'];
    }

    /**
     * Sets carrier_code
     *
     * @param string $carrier_code Identifies the carrier that will deliver the package. This field is required for all marketplaces. For more information, refer to the [`CarrierCode` announcement](https://developer-docs.amazon.com/sp-api/changelog/carriercode-value-required-in-shipment-confirmations-for-br-mx-ca-sg-au-in-jp-marketplaces).
     *
     * @return self
     */
    public function setCarrierCode(string $carrier_code): self
    {
        if (is_null($carrier_code)) {
            throw new \InvalidArgumentException('non-nullable carrier_code cannot be null');
        }
        $this->container['carrier_code'] = $carrier_code;

        return $this;
    }

    /**
     * Gets carrier_name
     *
     * @return string|null
     */
    public function getCarrierName(): ?string
    {
        return $this->container['carrier_name'];
    }

    /**
     * Sets carrier_name
     *
     * @param string|null $carrier_name Carrier Name that will deliver the package. Required when `carrierCode` is \"Others\"
     *
     * @return self
     */
    public function setCarrierName(?string $carrier_name): self
    {
        if (is_null($carrier_name)) {
            array_push($this->openAPINullablesSetToNull, 'carrier_name');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('carrier_name', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['carrier_name'] = $carrier_name;

        return $this;
    }

    /**
     * Gets shipping_method
     *
     * @return string|null
     */
    public function getShippingMethod(): ?string
    {
        return $this->container['shipping_method'];
    }

    /**
     * Sets shipping_method
     *
     * @param string|null $shipping_method Ship method to be used for shipping the order.
     *
     * @return self
     */
    public function setShippingMethod(?string $shipping_method): self
    {
        if (is_null($shipping_method)) {
            array_push($this->openAPINullablesSetToNull, 'shipping_method');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipping_method', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['shipping_method'] = $shipping_method;

        return $this;
    }

    /**
     * Gets tracking_number
     *
     * @return string
     */
    public function getTrackingNumber(): string
    {
        return $this->container['tracking_number'];
    }

    /**
     * Sets tracking_number
     *
     * @param string $tracking_number The tracking number used to obtain tracking and delivery information.
     *
     * @return self
     */
    public function setTrackingNumber(string $tracking_number): self
    {
        if (is_null($tracking_number)) {
            throw new \InvalidArgumentException('non-nullable tracking_number cannot be null');
        }
        $this->container['tracking_number'] = $tracking_number;

        return $this;
    }

    /**
     * Gets ship_date
     *
     * @return \DateTime
     */
    public function getShipDate(): \DateTime
    {
        return $this->container['ship_date'];
    }

    /**
     * Sets ship_date
     *
     * @param \DateTime $ship_date The shipping date for the package. Must be in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date/time format.
     *
     * @return self
     */
    public function setShipDate(\DateTime $ship_date): self
    {
        if (is_null($ship_date)) {
            throw new \InvalidArgumentException('non-nullable ship_date cannot be null');
        }
        $this->container['ship_date'] = $ship_date;

        return $this;
    }

    /**
     * Gets ship_from_supply_source_id
     *
     * @return string|null
     */
    public function getShipFromSupplySourceId(): ?string
    {
        return $this->container['ship_from_supply_source_id'];
    }

    /**
     * Sets ship_from_supply_source_id
     *
     * @param string|null $ship_from_supply_source_id The unique identifier for the supply source.
     *
     * @return self
     */
    public function setShipFromSupplySourceId(?string $ship_from_supply_source_id): self
    {
        if (is_null($ship_from_supply_source_id)) {
            array_push($this->openAPINullablesSetToNull, 'ship_from_supply_source_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('ship_from_supply_source_id', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['ship_from_supply_source_id'] = $ship_from_supply_source_id;

        return $this;
    }

    /**
     * Gets order_items
     *
     * @return array
     */
    public function getOrderItems(): array
    {
        return $this->container['order_items'];
    }

    /**
     * Sets order_items
     *
     * @param array $order_items A list of order items.
     *
     * @return self
     */
    public function setOrderItems(array $order_items): self
    {
        if (is_null($order_items)) {
            throw new \InvalidArgumentException('non-nullable order_items cannot be null');
        }
        $this->container['order_items'] = $order_items;

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


