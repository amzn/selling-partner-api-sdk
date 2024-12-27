<?php
/**
 * OperationalConfiguration
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
 * OperationalConfiguration Class Doc Comment
 *
 * @category Class
 * @description The operational configuration of &#x60;supplySources&#x60;.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class OperationalConfiguration implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'OperationalConfiguration';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'contact_details' => '\OpenAPI\Client\Model\supplysources\ContactDetails',
             'throughput_config' => '\OpenAPI\Client\Model\supplysources\ThroughputConfig',
             'operating_hours_by_day' => '\OpenAPI\Client\Model\supplysources\OperatingHoursByDay',
             'handling_time' => '\OpenAPI\Client\Model\supplysources\Duration'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'contact_details' => null,
            'throughput_config' => null,
            'operating_hours_by_day' => null,
            'handling_time' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'contact_details' => false,
        'throughput_config' => false,
        'operating_hours_by_day' => false,
        'handling_time' => false
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
        'contact_details' => 'contactDetails',
                'throughput_config' => 'throughputConfig',
                'operating_hours_by_day' => 'operatingHoursByDay',
                'handling_time' => 'handlingTime'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'contact_details' => 'setContactDetails',
        'throughput_config' => 'setThroughputConfig',
        'operating_hours_by_day' => 'setOperatingHoursByDay',
        'handling_time' => 'setHandlingTime'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'contact_details' => 'getContactDetails',
        'throughput_config' => 'getThroughputConfig',
        'operating_hours_by_day' => 'getOperatingHoursByDay',
        'handling_time' => 'getHandlingTime'
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
        $this->setIfExists('contact_details', $data ?? [], null);
        $this->setIfExists('throughput_config', $data ?? [], null);
        $this->setIfExists('operating_hours_by_day', $data ?? [], null);
        $this->setIfExists('handling_time', $data ?? [], null);
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
     * Gets contact_details
     *
     * @return \OpenAPI\Client\Model\supplysources\ContactDetails|null
     */
    public function getContactDetails(): ?\OpenAPI\Client\Model\supplysources\ContactDetails
    {
        return $this->container['contact_details'];
    }

    /**
     * Sets contact_details
     *
     * @param \OpenAPI\Client\Model\supplysources\ContactDetails|null $contact_details contact_details
     *
     * @return self
     */
    public function setContactDetails(?\OpenAPI\Client\Model\supplysources\ContactDetails $contact_details): self
    {
        if (is_null($contact_details)) {
            throw new \InvalidArgumentException('non-nullable contact_details cannot be null');
        }
        $this->container['contact_details'] = $contact_details;

        return $this;
    }

    /**
     * Gets throughput_config
     *
     * @return \OpenAPI\Client\Model\supplysources\ThroughputConfig|null
     */
    public function getThroughputConfig(): ?\OpenAPI\Client\Model\supplysources\ThroughputConfig
    {
        return $this->container['throughput_config'];
    }

    /**
     * Sets throughput_config
     *
     * @param \OpenAPI\Client\Model\supplysources\ThroughputConfig|null $throughput_config throughput_config
     *
     * @return self
     */
    public function setThroughputConfig(?\OpenAPI\Client\Model\supplysources\ThroughputConfig $throughput_config): self
    {
        if (is_null($throughput_config)) {
            throw new \InvalidArgumentException('non-nullable throughput_config cannot be null');
        }
        $this->container['throughput_config'] = $throughput_config;

        return $this;
    }

    /**
     * Gets operating_hours_by_day
     *
     * @return \OpenAPI\Client\Model\supplysources\OperatingHoursByDay|null
     */
    public function getOperatingHoursByDay(): ?\OpenAPI\Client\Model\supplysources\OperatingHoursByDay
    {
        return $this->container['operating_hours_by_day'];
    }

    /**
     * Sets operating_hours_by_day
     *
     * @param \OpenAPI\Client\Model\supplysources\OperatingHoursByDay|null $operating_hours_by_day operating_hours_by_day
     *
     * @return self
     */
    public function setOperatingHoursByDay(?\OpenAPI\Client\Model\supplysources\OperatingHoursByDay $operating_hours_by_day): self
    {
        if (is_null($operating_hours_by_day)) {
            throw new \InvalidArgumentException('non-nullable operating_hours_by_day cannot be null');
        }
        $this->container['operating_hours_by_day'] = $operating_hours_by_day;

        return $this;
    }

    /**
     * Gets handling_time
     *
     * @return \OpenAPI\Client\Model\supplysources\Duration|null
     */
    public function getHandlingTime(): ?\OpenAPI\Client\Model\supplysources\Duration
    {
        return $this->container['handling_time'];
    }

    /**
     * Sets handling_time
     *
     * @param \OpenAPI\Client\Model\supplysources\Duration|null $handling_time handling_time
     *
     * @return self
     */
    public function setHandlingTime(?\OpenAPI\Client\Model\supplysources\Duration $handling_time): self
    {
        if (is_null($handling_time)) {
            throw new \InvalidArgumentException('non-nullable handling_time cannot be null');
        }
        $this->container['handling_time'] = $handling_time;

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


