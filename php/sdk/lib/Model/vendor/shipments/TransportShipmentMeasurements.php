<?php
/**
 * TransportShipmentMeasurements
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Retail Procurement Shipments
 *
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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

namespace OpenAPI\Client\Model\vendor\shipments;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * TransportShipmentMeasurements Class Doc Comment
 *
 * @category Class
 * @description Shipment measurement details.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class TransportShipmentMeasurements implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'TransportShipmentMeasurements';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'total_carton_count' => 'int',
             'total_pallet_stackable' => 'int',
             'total_pallet_non_stackable' => 'int',
             'shipment_weight' => '\OpenAPI\Client\Model\vendor\shipments\Weight',
             'shipment_volume' => '\OpenAPI\Client\Model\vendor\shipments\Volume'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'total_carton_count' => null,
            'total_pallet_stackable' => null,
            'total_pallet_non_stackable' => null,
            'shipment_weight' => null,
            'shipment_volume' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'total_carton_count' => true,
        'total_pallet_stackable' => true,
        'total_pallet_non_stackable' => true,
        'shipment_weight' => true,
        'shipment_volume' => true
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
        'total_carton_count' => 'totalCartonCount',
                'total_pallet_stackable' => 'totalPalletStackable',
                'total_pallet_non_stackable' => 'totalPalletNonStackable',
                'shipment_weight' => 'shipmentWeight',
                'shipment_volume' => 'shipmentVolume'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'total_carton_count' => 'setTotalCartonCount',
        'total_pallet_stackable' => 'setTotalPalletStackable',
        'total_pallet_non_stackable' => 'setTotalPalletNonStackable',
        'shipment_weight' => 'setShipmentWeight',
        'shipment_volume' => 'setShipmentVolume'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'total_carton_count' => 'getTotalCartonCount',
        'total_pallet_stackable' => 'getTotalPalletStackable',
        'total_pallet_non_stackable' => 'getTotalPalletNonStackable',
        'shipment_weight' => 'getShipmentWeight',
        'shipment_volume' => 'getShipmentVolume'
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
        $this->setIfExists('total_carton_count', $data ?? [], null);
        $this->setIfExists('total_pallet_stackable', $data ?? [], null);
        $this->setIfExists('total_pallet_non_stackable', $data ?? [], null);
        $this->setIfExists('shipment_weight', $data ?? [], null);
        $this->setIfExists('shipment_volume', $data ?? [], null);
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
     * Gets total_carton_count
     *
     * @return int|null
     */
    public function getTotalCartonCount(): ?int
    {
        return $this->container['total_carton_count'];
    }

    /**
     * Sets total_carton_count
     *
     * @param int|null $total_carton_count Total number of cartons present in the shipment. Provide the cartonCount only for non-palletized shipments.
     *
     * @return self
     */
    public function setTotalCartonCount(?int $total_carton_count): self
    {
        if (is_null($total_carton_count)) {
            array_push($this->openAPINullablesSetToNull, 'total_carton_count');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('total_carton_count', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['total_carton_count'] = $total_carton_count;

        return $this;
    }

    /**
     * Gets total_pallet_stackable
     *
     * @return int|null
     */
    public function getTotalPalletStackable(): ?int
    {
        return $this->container['total_pallet_stackable'];
    }

    /**
     * Sets total_pallet_stackable
     *
     * @param int|null $total_pallet_stackable Total number of Stackable Pallets present in the shipment.
     *
     * @return self
     */
    public function setTotalPalletStackable(?int $total_pallet_stackable): self
    {
        if (is_null($total_pallet_stackable)) {
            array_push($this->openAPINullablesSetToNull, 'total_pallet_stackable');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('total_pallet_stackable', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['total_pallet_stackable'] = $total_pallet_stackable;

        return $this;
    }

    /**
     * Gets total_pallet_non_stackable
     *
     * @return int|null
     */
    public function getTotalPalletNonStackable(): ?int
    {
        return $this->container['total_pallet_non_stackable'];
    }

    /**
     * Sets total_pallet_non_stackable
     *
     * @param int|null $total_pallet_non_stackable Total number of Non Stackable Pallets present in the shipment.
     *
     * @return self
     */
    public function setTotalPalletNonStackable(?int $total_pallet_non_stackable): self
    {
        if (is_null($total_pallet_non_stackable)) {
            array_push($this->openAPINullablesSetToNull, 'total_pallet_non_stackable');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('total_pallet_non_stackable', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['total_pallet_non_stackable'] = $total_pallet_non_stackable;

        return $this;
    }

    /**
     * Gets shipment_weight
     *
     * @return \OpenAPI\Client\Model\vendor\shipments\Weight|null
     */
    public function getShipmentWeight(): ?\OpenAPI\Client\Model\vendor\shipments\Weight
    {
        return $this->container['shipment_weight'];
    }

    /**
     * Sets shipment_weight
     *
     * @param \OpenAPI\Client\Model\vendor\shipments\Weight|null $shipment_weight shipment_weight
     *
     * @return self
     */
    public function setShipmentWeight(?\OpenAPI\Client\Model\vendor\shipments\Weight $shipment_weight): self
    {
        if (is_null($shipment_weight)) {
            array_push($this->openAPINullablesSetToNull, 'shipment_weight');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipment_weight', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['shipment_weight'] = $shipment_weight;

        return $this;
    }

    /**
     * Gets shipment_volume
     *
     * @return \OpenAPI\Client\Model\vendor\shipments\Volume|null
     */
    public function getShipmentVolume(): ?\OpenAPI\Client\Model\vendor\shipments\Volume
    {
        return $this->container['shipment_volume'];
    }

    /**
     * Sets shipment_volume
     *
     * @param \OpenAPI\Client\Model\vendor\shipments\Volume|null $shipment_volume shipment_volume
     *
     * @return self
     */
    public function setShipmentVolume(?\OpenAPI\Client\Model\vendor\shipments\Volume $shipment_volume): self
    {
        if (is_null($shipment_volume)) {
            array_push($this->openAPINullablesSetToNull, 'shipment_volume');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipment_volume', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['shipment_volume'] = $shipment_volume;

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


