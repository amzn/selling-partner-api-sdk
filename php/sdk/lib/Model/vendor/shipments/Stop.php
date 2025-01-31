<?php
/**
 * Stop
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
 * Stop Class Doc Comment
 *
 * @category Class
 * @description Contractual or operational port or point relevant to the movement of the cargo.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class Stop implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'Stop';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'function_code' => 'string',
             'location_identification' => '\OpenAPI\Client\Model\vendor\shipments\Location',
             'arrival_time' => '\DateTime',
             'departure_time' => '\DateTime'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'function_code' => null,
            'location_identification' => null,
            'arrival_time' => 'date-time',
            'departure_time' => 'date-time'    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'function_code' => false,
        'location_identification' => true,
        'arrival_time' => true,
        'departure_time' => true
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
        'function_code' => 'functionCode',
                'location_identification' => 'locationIdentification',
                'arrival_time' => 'arrivalTime',
                'departure_time' => 'departureTime'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'function_code' => 'setFunctionCode',
        'location_identification' => 'setLocationIdentification',
        'arrival_time' => 'setArrivalTime',
        'departure_time' => 'setDepartureTime'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'function_code' => 'getFunctionCode',
        'location_identification' => 'getLocationIdentification',
        'arrival_time' => 'getArrivalTime',
        'departure_time' => 'getDepartureTime'
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

    public const FUNCTION_CODE_PORT_OF_DISCHARGE = 'PortOfDischarge';
    public const FUNCTION_CODE_FREIGHT_PAYABLE_AT = 'FreightPayableAt';
    public const FUNCTION_CODE_PORT_OF_LOADING = 'PortOfLoading';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getFunctionCodeAllowableValues(): array
    {
        return [
            self::FUNCTION_CODE_PORT_OF_DISCHARGE,
            self::FUNCTION_CODE_FREIGHT_PAYABLE_AT,
            self::FUNCTION_CODE_PORT_OF_LOADING,
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
        $this->setIfExists('function_code', $data ?? [], null);
        $this->setIfExists('location_identification', $data ?? [], null);
        $this->setIfExists('arrival_time', $data ?? [], null);
        $this->setIfExists('departure_time', $data ?? [], null);
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

        if ($this->container['function_code'] === null) {
            $invalidProperties[] = "'function_code' can't be null";
        }
        $allowedValues = $this->getFunctionCodeAllowableValues();
        if (!is_null($this->container['function_code']) && !in_array($this->container['function_code'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'function_code', must be one of '%s'",
                $this->container['function_code'],
                implode("', '", $allowedValues)
            );
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
     * Gets function_code
     *
     * @return string
     */
    public function getFunctionCode(): string
    {
        return $this->container['function_code'];
    }

    /**
     * Sets function_code
     *
     * @param string $function_code Provide the function code.
     *
     * @return self
     */
    public function setFunctionCode(string $function_code): self
    {
        if (is_null($function_code)) {
            throw new \InvalidArgumentException('non-nullable function_code cannot be null');
        }
        $allowedValues = $this->getFunctionCodeAllowableValues();
        if (!in_array($function_code, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'function_code', must be one of '%s'",
                    $function_code,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['function_code'] = $function_code;

        return $this;
    }

    /**
     * Gets location_identification
     *
     * @return \OpenAPI\Client\Model\vendor\shipments\Location|null
     */
    public function getLocationIdentification(): ?\OpenAPI\Client\Model\vendor\shipments\Location
    {
        return $this->container['location_identification'];
    }

    /**
     * Sets location_identification
     *
     * @param \OpenAPI\Client\Model\vendor\shipments\Location|null $location_identification location_identification
     *
     * @return self
     */
    public function setLocationIdentification(?\OpenAPI\Client\Model\vendor\shipments\Location $location_identification): self
    {
        if (is_null($location_identification)) {
            array_push($this->openAPINullablesSetToNull, 'location_identification');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('location_identification', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['location_identification'] = $location_identification;

        return $this;
    }

    /**
     * Gets arrival_time
     *
     * @return \DateTime|null
     */
    public function getArrivalTime(): ?\DateTime
    {
        return $this->container['arrival_time'];
    }

    /**
     * Sets arrival_time
     *
     * @param \DateTime|null $arrival_time Date and time of the arrival of the cargo.
     *
     * @return self
     */
    public function setArrivalTime(?\DateTime $arrival_time): self
    {
        if (is_null($arrival_time)) {
            array_push($this->openAPINullablesSetToNull, 'arrival_time');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('arrival_time', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['arrival_time'] = $arrival_time;

        return $this;
    }

    /**
     * Gets departure_time
     *
     * @return \DateTime|null
     */
    public function getDepartureTime(): ?\DateTime
    {
        return $this->container['departure_time'];
    }

    /**
     * Sets departure_time
     *
     * @param \DateTime|null $departure_time Date and time of the departure of the cargo.
     *
     * @return self
     */
    public function setDepartureTime(?\DateTime $departure_time): self
    {
        if (is_null($departure_time)) {
            array_push($this->openAPINullablesSetToNull, 'departure_time');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('departure_time', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['departure_time'] = $departure_time;

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


