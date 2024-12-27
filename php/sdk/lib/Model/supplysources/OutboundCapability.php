<?php
/**
 * OutboundCapability
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Supply Sources
 *
 * Manage configurations and capabilities of seller supply sources.
 *
 * The version of the OpenAPI document: 2020-07-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\supplysources;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * OutboundCapability Class Doc Comment
 *
 * @category Class
 * @description The outbound capability of a supply source.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class OutboundCapability implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'OutboundCapability';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'is_supported' => 'bool',
             'operational_configuration' => '\OpenAPI\Client\Model\supplysources\OperationalConfiguration',
             'return_location' => '\OpenAPI\Client\Model\supplysources\ReturnLocation',
             'delivery_channel' => '\OpenAPI\Client\Model\supplysources\DeliveryChannel',
             'pickup_channel' => '\OpenAPI\Client\Model\supplysources\PickupChannel'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'is_supported' => null,
            'operational_configuration' => null,
            'return_location' => null,
            'delivery_channel' => null,
            'pickup_channel' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'is_supported' => false,
        'operational_configuration' => false,
        'return_location' => false,
        'delivery_channel' => false,
        'pickup_channel' => false
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
        'is_supported' => 'isSupported',
                'operational_configuration' => 'operationalConfiguration',
                'return_location' => 'returnLocation',
                'delivery_channel' => 'deliveryChannel',
                'pickup_channel' => 'pickupChannel'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'is_supported' => 'setIsSupported',
        'operational_configuration' => 'setOperationalConfiguration',
        'return_location' => 'setReturnLocation',
        'delivery_channel' => 'setDeliveryChannel',
        'pickup_channel' => 'setPickupChannel'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'is_supported' => 'getIsSupported',
        'operational_configuration' => 'getOperationalConfiguration',
        'return_location' => 'getReturnLocation',
        'delivery_channel' => 'getDeliveryChannel',
        'pickup_channel' => 'getPickupChannel'
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
        $this->setIfExists('is_supported', $data ?? [], null);
        $this->setIfExists('operational_configuration', $data ?? [], null);
        $this->setIfExists('return_location', $data ?? [], null);
        $this->setIfExists('delivery_channel', $data ?? [], null);
        $this->setIfExists('pickup_channel', $data ?? [], null);
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
     * Gets is_supported
     *
     * @return bool|null
     */
    public function getIsSupported(): ?bool
    {
        return $this->container['is_supported'];
    }

    /**
     * Sets is_supported
     *
     * @param bool|null $is_supported is_supported
     *
     * @return self
     */
    public function setIsSupported(?bool $is_supported): self
    {
        if (is_null($is_supported)) {
            throw new \InvalidArgumentException('non-nullable is_supported cannot be null');
        }
        $this->container['is_supported'] = $is_supported;

        return $this;
    }

    /**
     * Gets operational_configuration
     *
     * @return \OpenAPI\Client\Model\supplysources\OperationalConfiguration|null
     */
    public function getOperationalConfiguration(): ?\OpenAPI\Client\Model\supplysources\OperationalConfiguration
    {
        return $this->container['operational_configuration'];
    }

    /**
     * Sets operational_configuration
     *
     * @param \OpenAPI\Client\Model\supplysources\OperationalConfiguration|null $operational_configuration operational_configuration
     *
     * @return self
     */
    public function setOperationalConfiguration(?\OpenAPI\Client\Model\supplysources\OperationalConfiguration $operational_configuration): self
    {
        if (is_null($operational_configuration)) {
            throw new \InvalidArgumentException('non-nullable operational_configuration cannot be null');
        }
        $this->container['operational_configuration'] = $operational_configuration;

        return $this;
    }

    /**
     * Gets return_location
     *
     * @return \OpenAPI\Client\Model\supplysources\ReturnLocation|null
     */
    public function getReturnLocation(): ?\OpenAPI\Client\Model\supplysources\ReturnLocation
    {
        return $this->container['return_location'];
    }

    /**
     * Sets return_location
     *
     * @param \OpenAPI\Client\Model\supplysources\ReturnLocation|null $return_location return_location
     *
     * @return self
     */
    public function setReturnLocation(?\OpenAPI\Client\Model\supplysources\ReturnLocation $return_location): self
    {
        if (is_null($return_location)) {
            throw new \InvalidArgumentException('non-nullable return_location cannot be null');
        }
        $this->container['return_location'] = $return_location;

        return $this;
    }

    /**
     * Gets delivery_channel
     *
     * @return \OpenAPI\Client\Model\supplysources\DeliveryChannel|null
     */
    public function getDeliveryChannel(): ?\OpenAPI\Client\Model\supplysources\DeliveryChannel
    {
        return $this->container['delivery_channel'];
    }

    /**
     * Sets delivery_channel
     *
     * @param \OpenAPI\Client\Model\supplysources\DeliveryChannel|null $delivery_channel delivery_channel
     *
     * @return self
     */
    public function setDeliveryChannel(?\OpenAPI\Client\Model\supplysources\DeliveryChannel $delivery_channel): self
    {
        if (is_null($delivery_channel)) {
            throw new \InvalidArgumentException('non-nullable delivery_channel cannot be null');
        }
        $this->container['delivery_channel'] = $delivery_channel;

        return $this;
    }

    /**
     * Gets pickup_channel
     *
     * @return \OpenAPI\Client\Model\supplysources\PickupChannel|null
     */
    public function getPickupChannel(): ?\OpenAPI\Client\Model\supplysources\PickupChannel
    {
        return $this->container['pickup_channel'];
    }

    /**
     * Sets pickup_channel
     *
     * @param \OpenAPI\Client\Model\supplysources\PickupChannel|null $pickup_channel pickup_channel
     *
     * @return self
     */
    public function setPickupChannel(?\OpenAPI\Client\Model\supplysources\PickupChannel $pickup_channel): self
    {
        if (is_null($pickup_channel)) {
            throw new \InvalidArgumentException('non-nullable pickup_channel cannot be null');
        }
        $this->container['pickup_channel'] = $pickup_channel;

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


