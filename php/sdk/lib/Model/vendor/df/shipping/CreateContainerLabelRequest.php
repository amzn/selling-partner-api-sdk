<?php
/**
 * CreateContainerLabelRequest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Direct Fulfillment Shipping
 *
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor's shipping data.
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

namespace OpenAPI\Client\Model\vendor.df.shipping;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * CreateContainerLabelRequest Class Doc Comment
 *
 * @category Class
 * @description The request body schema for the createContainerLabel operation.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class CreateContainerLabelRequest implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'CreateContainerLabelRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'selling_party' => '\OpenAPI\Client\Model\vendor.df.shipping\PartyIdentification',
             'ship_from_party' => '\OpenAPI\Client\Model\vendor.df.shipping\PartyIdentification',
             'carrier_id' => '\OpenAPI\Client\Model\vendor.df.shipping\CarrierId',
             'vendor_container_id' => 'string',
             'packages' => '\OpenAPI\Client\Model\vendor.df.shipping\Package[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'selling_party' => null,
            'ship_from_party' => null,
            'carrier_id' => null,
            'vendor_container_id' => null,
            'packages' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'selling_party' => false,
        'ship_from_party' => false,
        'carrier_id' => false,
        'vendor_container_id' => false,
        'packages' => false
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
        'selling_party' => 'sellingParty',
                'ship_from_party' => 'shipFromParty',
                'carrier_id' => 'carrierId',
                'vendor_container_id' => 'vendorContainerId',
                'packages' => 'packages'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'selling_party' => 'setSellingParty',
        'ship_from_party' => 'setShipFromParty',
        'carrier_id' => 'setCarrierId',
        'vendor_container_id' => 'setVendorContainerId',
        'packages' => 'setPackages'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'selling_party' => 'getSellingParty',
        'ship_from_party' => 'getShipFromParty',
        'carrier_id' => 'getCarrierId',
        'vendor_container_id' => 'getVendorContainerId',
        'packages' => 'getPackages'
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
        $this->setIfExists('selling_party', $data ?? [], null);
        $this->setIfExists('ship_from_party', $data ?? [], null);
        $this->setIfExists('carrier_id', $data ?? [], null);
        $this->setIfExists('vendor_container_id', $data ?? [], null);
        $this->setIfExists('packages', $data ?? [], null);
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

        if ($this->container['selling_party'] === null) {
            $invalidProperties[] = "'selling_party' can't be null";
        }
        if ($this->container['ship_from_party'] === null) {
            $invalidProperties[] = "'ship_from_party' can't be null";
        }
        if ($this->container['carrier_id'] === null) {
            $invalidProperties[] = "'carrier_id' can't be null";
        }
        if ($this->container['vendor_container_id'] === null) {
            $invalidProperties[] = "'vendor_container_id' can't be null";
        }
        if ($this->container['packages'] === null) {
            $invalidProperties[] = "'packages' can't be null";
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
     * Gets selling_party
     *
     * @return \OpenAPI\Client\Model\vendor.df.shipping\PartyIdentification
     */
    public function getSellingParty(): \OpenAPI\Client\Model\vendor.df.shipping\PartyIdentification
    {
        return $this->container['selling_party'];
    }

    /**
     * Sets selling_party
     *
     * @param \OpenAPI\Client\Model\vendor.df.shipping\PartyIdentification $selling_party selling_party
     *
     * @return self
     */
    public function setSellingParty(\OpenAPI\Client\Model\vendor.df.shipping\PartyIdentification $selling_party): self
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
     * @return \OpenAPI\Client\Model\vendor.df.shipping\PartyIdentification
     */
    public function getShipFromParty(): \OpenAPI\Client\Model\vendor.df.shipping\PartyIdentification
    {
        return $this->container['ship_from_party'];
    }

    /**
     * Sets ship_from_party
     *
     * @param \OpenAPI\Client\Model\vendor.df.shipping\PartyIdentification $ship_from_party ship_from_party
     *
     * @return self
     */
    public function setShipFromParty(\OpenAPI\Client\Model\vendor.df.shipping\PartyIdentification $ship_from_party): self
    {
        if (is_null($ship_from_party)) {
            throw new \InvalidArgumentException('non-nullable ship_from_party cannot be null');
        }
        $this->container['ship_from_party'] = $ship_from_party;

        return $this;
    }

    /**
     * Gets carrier_id
     *
     * @return string
     */
    public function getCarrierId(): string
    {
        return $this->container['carrier_id'];
    }

    /**
     * Sets carrier_id
     *
     * @param string $carrier_id carrier_id
     *
     * @return self
     */
    public function setCarrierId(string $carrier_id): self
    {
        if (is_null($carrier_id)) {
            throw new \InvalidArgumentException('non-nullable carrier_id cannot be null');
        }
        $this->container['carrier_id'] = $carrier_id;

        return $this;
    }

    /**
     * Gets vendor_container_id
     *
     * @return string
     */
    public function getVendorContainerId(): string
    {
        return $this->container['vendor_container_id'];
    }

    /**
     * Sets vendor_container_id
     *
     * @param string $vendor_container_id unique identifier for the container provided by the vendor.
     *
     * @return self
     */
    public function setVendorContainerId(string $vendor_container_id): self
    {
        if (is_null($vendor_container_id)) {
            throw new \InvalidArgumentException('non-nullable vendor_container_id cannot be null');
        }
        $this->container['vendor_container_id'] = $vendor_container_id;

        return $this;
    }

    /**
     * Gets packages
     *
     * @return arrayA
     */
    public function getPackages(): array
    {
        return $this->container['packages'];
    }

    /**
     * Sets packages
     *
     * @param array $packages Array of package object in order to associate shipments packages with given container.
     *
     * @return self
     */
    public function setPackages(array $packages): self
    {
        if (is_null($packages)) {
            throw new \InvalidArgumentException('non-nullable packages cannot be null');
        }
        $this->container['packages'] = $packages;

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


