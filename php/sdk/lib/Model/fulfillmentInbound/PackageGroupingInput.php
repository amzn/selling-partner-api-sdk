<?php
/**
 * PackageGroupingInput
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
 * PackageGroupingInput Class Doc Comment
 *
 * @category Class
 * @description Packing information for the inbound plan.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class PackageGroupingInput implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'PackageGroupingInput';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'boxes' => '\OpenAPI\Client\Model\fulfillmentInbound\BoxInput[]',
             'packing_group_id' => 'string',
             'shipment_id' => 'string'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'boxes' => null,
            'packing_group_id' => null,
            'shipment_id' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'boxes' => false,
        'packing_group_id' => true,
        'shipment_id' => true
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
        'boxes' => 'boxes',
                'packing_group_id' => 'packingGroupId',
                'shipment_id' => 'shipmentId'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'boxes' => 'setBoxes',
        'packing_group_id' => 'setPackingGroupId',
        'shipment_id' => 'setShipmentId'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'boxes' => 'getBoxes',
        'packing_group_id' => 'getPackingGroupId',
        'shipment_id' => 'getShipmentId'
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
        $this->setIfExists('boxes', $data ?? [], null);
        $this->setIfExists('packing_group_id', $data ?? [], null);
        $this->setIfExists('shipment_id', $data ?? [], null);
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

        if ($this->container['boxes'] === null) {
            $invalidProperties[] = "'boxes' can't be null";
        }
        if ((count($this->container['boxes']) > 5000)) {
            $invalidProperties[] = "invalid value for 'boxes', number of items must be less than or equal to 5000.";
        }

        if ((count($this->container['boxes']) < 1)) {
            $invalidProperties[] = "invalid value for 'boxes', number of items must be greater than or equal to 1.";
        }

        if (!is_null($this->container['packing_group_id']) && (mb_strlen($this->container['packing_group_id']) > 38)) {
            $invalidProperties[] = "invalid value for 'packing_group_id', the character length must be smaller than or equal to 38.";
        }

        if (!is_null($this->container['packing_group_id']) && (mb_strlen($this->container['packing_group_id']) < 38)) {
            $invalidProperties[] = "invalid value for 'packing_group_id', the character length must be bigger than or equal to 38.";
        }

        if (!is_null($this->container['packing_group_id']) && !preg_match("/^[a-zA-Z0-9-]*$/", $this->container['packing_group_id'])) {
            $invalidProperties[] = "invalid value for 'packing_group_id', must be conform to the pattern /^[a-zA-Z0-9-]*$/.";
        }

        if (!is_null($this->container['shipment_id']) && (mb_strlen($this->container['shipment_id']) > 38)) {
            $invalidProperties[] = "invalid value for 'shipment_id', the character length must be smaller than or equal to 38.";
        }

        if (!is_null($this->container['shipment_id']) && (mb_strlen($this->container['shipment_id']) < 38)) {
            $invalidProperties[] = "invalid value for 'shipment_id', the character length must be bigger than or equal to 38.";
        }

        if (!is_null($this->container['shipment_id']) && !preg_match("/^[a-zA-Z0-9-]*$/", $this->container['shipment_id'])) {
            $invalidProperties[] = "invalid value for 'shipment_id', must be conform to the pattern /^[a-zA-Z0-9-]*$/.";
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
     * Gets boxes
     *
     * @return array
     */
    public function getBoxes(): array
    {
        return $this->container['boxes'];
    }

    /**
     * Sets boxes
     *
     * @param array $boxes Box level information being provided.
     *
     * @return self
     */
    public function setBoxes(array $boxes): self
    {
        if (is_null($boxes)) {
            throw new \InvalidArgumentException('non-nullable boxes cannot be null');
        }

        if ((count($boxes) > 5000)) {
            throw new \InvalidArgumentException('invalid value for $boxes when calling PackageGroupingInput., number of items must be less than or equal to 5000.');
        }
        if ((count($boxes) < 1)) {
            throw new \InvalidArgumentException('invalid length for $boxes when calling PackageGroupingInput., number of items must be greater than or equal to 1.');
        }
        $this->container['boxes'] = $boxes;

        return $this;
    }

    /**
     * Gets packing_group_id
     *
     * @return string|null
     */
    public function getPackingGroupId(): ?string
    {
        return $this->container['packing_group_id'];
    }

    /**
     * Sets packing_group_id
     *
     * @param string|null $packing_group_id The ID of the `packingGroup` that packages are grouped according to. The `PackingGroupId` can only be provided before placement confirmation, and it must belong to the confirmed `PackingOption`. One of `ShipmentId` or `PackingGroupId` must be provided with every request.
     *
     * @return self
     */
    public function setPackingGroupId(?string $packing_group_id): self
    {
        if (is_null($packing_group_id)) {
            array_push($this->openAPINullablesSetToNull, 'packing_group_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('packing_group_id', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        if (!is_null($packing_group_id) && (mb_strlen($packing_group_id) > 38)) {
            throw new \InvalidArgumentException('invalid length for $packing_group_id when calling PackageGroupingInput., must be smaller than or equal to 38.');
        }
        if (!is_null($packing_group_id) && (mb_strlen($packing_group_id) < 38)) {
            throw new \InvalidArgumentException('invalid length for $packing_group_id when calling PackageGroupingInput., must be bigger than or equal to 38.');
        }
        if (!is_null($packing_group_id) && (!preg_match("/^[a-zA-Z0-9-]*$/", ObjectSerializer::toString($packing_group_id)))) {
            throw new \InvalidArgumentException("invalid value for \$packing_group_id when calling PackageGroupingInput., must conform to the pattern /^[a-zA-Z0-9-]*$/.");
        }

        $this->container['packing_group_id'] = $packing_group_id;

        return $this;
    }

    /**
     * Gets shipment_id
     *
     * @return string|null
     */
    public function getShipmentId(): ?string
    {
        return $this->container['shipment_id'];
    }

    /**
     * Sets shipment_id
     *
     * @param string|null $shipment_id The ID of the shipment that packages are grouped according to. The `ShipmentId` can only be provided after placement confirmation, and the shipment must belong to the confirmed placement option. One of `ShipmentId` or `PackingGroupId` must be provided with every request.
     *
     * @return self
     */
    public function setShipmentId(?string $shipment_id): self
    {
        if (is_null($shipment_id)) {
            array_push($this->openAPINullablesSetToNull, 'shipment_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipment_id', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        if (!is_null($shipment_id) && (mb_strlen($shipment_id) > 38)) {
            throw new \InvalidArgumentException('invalid length for $shipment_id when calling PackageGroupingInput., must be smaller than or equal to 38.');
        }
        if (!is_null($shipment_id) && (mb_strlen($shipment_id) < 38)) {
            throw new \InvalidArgumentException('invalid length for $shipment_id when calling PackageGroupingInput., must be bigger than or equal to 38.');
        }
        if (!is_null($shipment_id) && (!preg_match("/^[a-zA-Z0-9-]*$/", ObjectSerializer::toString($shipment_id)))) {
            throw new \InvalidArgumentException("invalid value for \$shipment_id when calling PackageGroupingInput., must conform to the pattern /^[a-zA-Z0-9-]*$/.");
        }

        $this->container['shipment_id'] = $shipment_id;

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


