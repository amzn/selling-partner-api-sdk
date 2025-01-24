<?php
/**
 * InventoryDetails
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for FBA Inventory
 *
 * The Selling Partner API for FBA Inventory lets you programmatically retrieve information about inventory in Amazon's fulfillment network.
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

namespace OpenAPI\Client\Model\fbaInventory;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * InventoryDetails Class Doc Comment
 *
 * @category Class
 * @description Summarized inventory details. This object will not appear if the details parameter in the request is false.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class InventoryDetails implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'InventoryDetails';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'fulfillable_quantity' => 'int',
             'inbound_working_quantity' => 'int',
             'inbound_shipped_quantity' => 'int',
             'inbound_receiving_quantity' => 'int',
             'reserved_quantity' => '\OpenAPI\Client\Model\fbaInventory\ReservedQuantity',
             'researching_quantity' => '\OpenAPI\Client\Model\fbaInventory\ResearchingQuantity',
             'unfulfillable_quantity' => '\OpenAPI\Client\Model\fbaInventory\UnfulfillableQuantity'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'fulfillable_quantity' => null,
            'inbound_working_quantity' => null,
            'inbound_shipped_quantity' => null,
            'inbound_receiving_quantity' => null,
            'reserved_quantity' => null,
            'researching_quantity' => null,
            'unfulfillable_quantity' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'fulfillable_quantity' => true,
        'inbound_working_quantity' => true,
        'inbound_shipped_quantity' => true,
        'inbound_receiving_quantity' => true,
        'reserved_quantity' => true,
        'researching_quantity' => true,
        'unfulfillable_quantity' => true
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
        'fulfillable_quantity' => 'fulfillableQuantity',
                'inbound_working_quantity' => 'inboundWorkingQuantity',
                'inbound_shipped_quantity' => 'inboundShippedQuantity',
                'inbound_receiving_quantity' => 'inboundReceivingQuantity',
                'reserved_quantity' => 'reservedQuantity',
                'researching_quantity' => 'researchingQuantity',
                'unfulfillable_quantity' => 'unfulfillableQuantity'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'fulfillable_quantity' => 'setFulfillableQuantity',
        'inbound_working_quantity' => 'setInboundWorkingQuantity',
        'inbound_shipped_quantity' => 'setInboundShippedQuantity',
        'inbound_receiving_quantity' => 'setInboundReceivingQuantity',
        'reserved_quantity' => 'setReservedQuantity',
        'researching_quantity' => 'setResearchingQuantity',
        'unfulfillable_quantity' => 'setUnfulfillableQuantity'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'fulfillable_quantity' => 'getFulfillableQuantity',
        'inbound_working_quantity' => 'getInboundWorkingQuantity',
        'inbound_shipped_quantity' => 'getInboundShippedQuantity',
        'inbound_receiving_quantity' => 'getInboundReceivingQuantity',
        'reserved_quantity' => 'getReservedQuantity',
        'researching_quantity' => 'getResearchingQuantity',
        'unfulfillable_quantity' => 'getUnfulfillableQuantity'
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
        $this->setIfExists('fulfillable_quantity', $data ?? [], null);
        $this->setIfExists('inbound_working_quantity', $data ?? [], null);
        $this->setIfExists('inbound_shipped_quantity', $data ?? [], null);
        $this->setIfExists('inbound_receiving_quantity', $data ?? [], null);
        $this->setIfExists('reserved_quantity', $data ?? [], null);
        $this->setIfExists('researching_quantity', $data ?? [], null);
        $this->setIfExists('unfulfillable_quantity', $data ?? [], null);
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
     * Gets fulfillable_quantity
     *
     * @return int|null
     */
    public function getFulfillableQuantity(): ?int
    {
        return $this->container['fulfillable_quantity'];
    }

    /**
     * Sets fulfillable_quantity
     *
     * @param int|null $fulfillable_quantity The item quantity that can be picked, packed, and shipped.
     *
     * @return self
     */
    public function setFulfillableQuantity(?int $fulfillable_quantity): self
    {
        if (is_null($fulfillable_quantity)) {
            array_push($this->openAPINullablesSetToNull, 'fulfillable_quantity');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('fulfillable_quantity', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['fulfillable_quantity'] = $fulfillable_quantity;

        return $this;
    }

    /**
     * Gets inbound_working_quantity
     *
     * @return int|null
     */
    public function getInboundWorkingQuantity(): ?int
    {
        return $this->container['inbound_working_quantity'];
    }

    /**
     * Sets inbound_working_quantity
     *
     * @param int|null $inbound_working_quantity The number of units in an inbound shipment for which you have notified Amazon.
     *
     * @return self
     */
    public function setInboundWorkingQuantity(?int $inbound_working_quantity): self
    {
        if (is_null($inbound_working_quantity)) {
            array_push($this->openAPINullablesSetToNull, 'inbound_working_quantity');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('inbound_working_quantity', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['inbound_working_quantity'] = $inbound_working_quantity;

        return $this;
    }

    /**
     * Gets inbound_shipped_quantity
     *
     * @return int|null
     */
    public function getInboundShippedQuantity(): ?int
    {
        return $this->container['inbound_shipped_quantity'];
    }

    /**
     * Sets inbound_shipped_quantity
     *
     * @param int|null $inbound_shipped_quantity The number of units in an inbound shipment that you have notified Amazon about and have provided a tracking number.
     *
     * @return self
     */
    public function setInboundShippedQuantity(?int $inbound_shipped_quantity): self
    {
        if (is_null($inbound_shipped_quantity)) {
            array_push($this->openAPINullablesSetToNull, 'inbound_shipped_quantity');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('inbound_shipped_quantity', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['inbound_shipped_quantity'] = $inbound_shipped_quantity;

        return $this;
    }

    /**
     * Gets inbound_receiving_quantity
     *
     * @return int|null
     */
    public function getInboundReceivingQuantity(): ?int
    {
        return $this->container['inbound_receiving_quantity'];
    }

    /**
     * Sets inbound_receiving_quantity
     *
     * @param int|null $inbound_receiving_quantity The number of units that have not yet been received at an Amazon fulfillment center for processing, but are part of an inbound shipment with some units that have already been received and processed.
     *
     * @return self
     */
    public function setInboundReceivingQuantity(?int $inbound_receiving_quantity): self
    {
        if (is_null($inbound_receiving_quantity)) {
            array_push($this->openAPINullablesSetToNull, 'inbound_receiving_quantity');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('inbound_receiving_quantity', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['inbound_receiving_quantity'] = $inbound_receiving_quantity;

        return $this;
    }

    /**
     * Gets reserved_quantity
     *
     * @return \OpenAPI\Client\Model\fbaInventory\ReservedQuantity|null
     */
    public function getReservedQuantity(): ?\OpenAPI\Client\Model\fbaInventory\ReservedQuantity
    {
        return $this->container['reserved_quantity'];
    }

    /**
     * Sets reserved_quantity
     *
     * @param \OpenAPI\Client\Model\fbaInventory\ReservedQuantity|null $reserved_quantity reserved_quantity
     *
     * @return self
     */
    public function setReservedQuantity(?\OpenAPI\Client\Model\fbaInventory\ReservedQuantity $reserved_quantity): self
    {
        if (is_null($reserved_quantity)) {
            array_push($this->openAPINullablesSetToNull, 'reserved_quantity');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('reserved_quantity', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['reserved_quantity'] = $reserved_quantity;

        return $this;
    }

    /**
     * Gets researching_quantity
     *
     * @return \OpenAPI\Client\Model\fbaInventory\ResearchingQuantity|null
     */
    public function getResearchingQuantity(): ?\OpenAPI\Client\Model\fbaInventory\ResearchingQuantity
    {
        return $this->container['researching_quantity'];
    }

    /**
     * Sets researching_quantity
     *
     * @param \OpenAPI\Client\Model\fbaInventory\ResearchingQuantity|null $researching_quantity researching_quantity
     *
     * @return self
     */
    public function setResearchingQuantity(?\OpenAPI\Client\Model\fbaInventory\ResearchingQuantity $researching_quantity): self
    {
        if (is_null($researching_quantity)) {
            array_push($this->openAPINullablesSetToNull, 'researching_quantity');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('researching_quantity', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['researching_quantity'] = $researching_quantity;

        return $this;
    }

    /**
     * Gets unfulfillable_quantity
     *
     * @return \OpenAPI\Client\Model\fbaInventory\UnfulfillableQuantity|null
     */
    public function getUnfulfillableQuantity(): ?\OpenAPI\Client\Model\fbaInventory\UnfulfillableQuantity
    {
        return $this->container['unfulfillable_quantity'];
    }

    /**
     * Sets unfulfillable_quantity
     *
     * @param \OpenAPI\Client\Model\fbaInventory\UnfulfillableQuantity|null $unfulfillable_quantity unfulfillable_quantity
     *
     * @return self
     */
    public function setUnfulfillableQuantity(?\OpenAPI\Client\Model\fbaInventory\UnfulfillableQuantity $unfulfillable_quantity): self
    {
        if (is_null($unfulfillable_quantity)) {
            array_push($this->openAPINullablesSetToNull, 'unfulfillable_quantity');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('unfulfillable_quantity', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['unfulfillable_quantity'] = $unfulfillable_quantity;

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


