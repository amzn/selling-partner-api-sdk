<?php
/**
 * ShipmentDestination
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Fulfillment Inbound v2024-03-20
 *
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\fulfillmentInbound;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * ShipmentDestination Class Doc Comment
 *
 * @category Class
 * @description The Amazon fulfillment center address and warehouse ID.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ShipmentDestination implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'ShipmentDestination';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'address' => '\OpenAPI\Client\Model\fulfillmentInbound\Address',
             'destination_type' => 'string',
             'warehouse_id' => 'string'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'address' => null,
            'destination_type' => null,
            'warehouse_id' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'address' => true,
        'destination_type' => false,
        'warehouse_id' => true
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
        'address' => 'address',
                'destination_type' => 'destinationType',
                'warehouse_id' => 'warehouseId'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'address' => 'setAddress',
        'destination_type' => 'setDestinationType',
        'warehouse_id' => 'setWarehouseId'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'address' => 'getAddress',
        'destination_type' => 'getDestinationType',
        'warehouse_id' => 'getWarehouseId'
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
        $this->setIfExists('address', $data ?? [], null);
        $this->setIfExists('destination_type', $data ?? [], null);
        $this->setIfExists('warehouse_id', $data ?? [], null);
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

        if ($this->container['destination_type'] === null) {
            $invalidProperties[] = "'destination_type' can't be null";
        }
        if ((mb_strlen($this->container['destination_type']) > 1024)) {
            $invalidProperties[] = "invalid value for 'destination_type', the character length must be smaller than or equal to 1024.";
        }

        if ((mb_strlen($this->container['destination_type']) < 1)) {
            $invalidProperties[] = "invalid value for 'destination_type', the character length must be bigger than or equal to 1.";
        }

        if (!is_null($this->container['warehouse_id']) && (mb_strlen($this->container['warehouse_id']) > 1024)) {
            $invalidProperties[] = "invalid value for 'warehouse_id', the character length must be smaller than or equal to 1024.";
        }

        if (!is_null($this->container['warehouse_id']) && (mb_strlen($this->container['warehouse_id']) < 1)) {
            $invalidProperties[] = "invalid value for 'warehouse_id', the character length must be bigger than or equal to 1.";
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
     * Gets address
     *
     * @return \OpenAPI\Client\Model\fulfillmentInbound\Address|null
     */
    public function getAddress(): ?\OpenAPI\Client\Model\fulfillmentInbound\Address
    {
        return $this->container['address'];
    }

    /**
     * Sets address
     *
     * @param \OpenAPI\Client\Model\fulfillmentInbound\Address|null $address address
     *
     * @return self
     */
    public function setAddress(?\OpenAPI\Client\Model\fulfillmentInbound\Address $address): self
    {
        if (is_null($address)) {
            array_push($this->openAPINullablesSetToNull, 'address');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('address', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['address'] = $address;

        return $this;
    }

    /**
     * Gets destination_type
     *
     * @return string
     */
    public function getDestinationType(): string
    {
        return $this->container['destination_type'];
    }

    /**
     * Sets destination_type
     *
     * @param string $destination_type The type of destination for this shipment. Possible values: `AMAZON_OPTIMIZED`, `AMAZON_WAREHOUSE`.
     *
     * @return self
     */
    public function setDestinationType(string $destination_type): self
    {
        if (is_null($destination_type)) {
            throw new \InvalidArgumentException('non-nullable destination_type cannot be null');
        }
        if ((mb_strlen($destination_type) > 1024)) {
            throw new \InvalidArgumentException('invalid length for $destination_type when calling ShipmentDestination., must be smaller than or equal to 1024.');
        }
        if ((mb_strlen($destination_type) < 1)) {
            throw new \InvalidArgumentException('invalid length for $destination_type when calling ShipmentDestination., must be bigger than or equal to 1.');
        }

        $this->container['destination_type'] = $destination_type;

        return $this;
    }

    /**
     * Gets warehouse_id
     *
     * @return string|null
     */
    public function getWarehouseId(): ?string
    {
        return $this->container['warehouse_id'];
    }

    /**
     * Sets warehouse_id
     *
     * @param string|null $warehouse_id The warehouse that the shipment should be sent to. Empty if the destination type is `AMAZON_OPTIMIZED`.
     *
     * @return self
     */
    public function setWarehouseId(?string $warehouse_id): self
    {
        if (is_null($warehouse_id)) {
            array_push($this->openAPINullablesSetToNull, 'warehouse_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('warehouse_id', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        if (!is_null($warehouse_id) && (mb_strlen($warehouse_id) > 1024)) {
            throw new \InvalidArgumentException('invalid length for $warehouse_id when calling ShipmentDestination., must be smaller than or equal to 1024.');
        }
        if (!is_null($warehouse_id) && (mb_strlen($warehouse_id) < 1)) {
            throw new \InvalidArgumentException('invalid length for $warehouse_id when calling ShipmentDestination., must be bigger than or equal to 1.');
        }

        $this->container['warehouse_id'] = $warehouse_id;

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


