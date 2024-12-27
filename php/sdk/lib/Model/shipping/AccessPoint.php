<?php
/**
 * AccessPoint
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Amazon Shipping API
 *
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\shipping;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * AccessPoint Class Doc Comment
 *
 * @category Class
 * @description Access point details
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class AccessPoint implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'AccessPoint';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'access_point_id' => 'string',
             'name' => 'string',
             'timezone' => 'string',
             'type' => '\OpenAPI\Client\Model\shipping\AccessPointType',
             'accessibility_attributes' => '\OpenAPI\Client\Model\shipping\AccessibilityAttributes',
             'address' => '\OpenAPI\Client\Model\shipping\Address',
             'exception_operating_hours' => '\OpenAPI\Client\Model\shipping\ExceptionOperatingHours[]',
             'assistance_type' => 'string',
             'score' => 'string',
             'standard_operating_hours' => 'array<string,\OpenAPI\Client\Model\shipping\OperatingHours>'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'access_point_id' => null,
            'name' => null,
            'timezone' => null,
            'type' => null,
            'accessibility_attributes' => null,
            'address' => null,
            'exception_operating_hours' => null,
            'assistance_type' => null,
            'score' => null,
            'standard_operating_hours' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'access_point_id' => false,
        'name' => false,
        'timezone' => false,
        'type' => false,
        'accessibility_attributes' => false,
        'address' => false,
        'exception_operating_hours' => false,
        'assistance_type' => false,
        'score' => false,
        'standard_operating_hours' => false
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
        'access_point_id' => 'accessPointId',
                'name' => 'name',
                'timezone' => 'timezone',
                'type' => 'type',
                'accessibility_attributes' => 'accessibilityAttributes',
                'address' => 'address',
                'exception_operating_hours' => 'exceptionOperatingHours',
                'assistance_type' => 'assistanceType',
                'score' => 'score',
                'standard_operating_hours' => 'standardOperatingHours'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'access_point_id' => 'setAccessPointId',
        'name' => 'setName',
        'timezone' => 'setTimezone',
        'type' => 'setType',
        'accessibility_attributes' => 'setAccessibilityAttributes',
        'address' => 'setAddress',
        'exception_operating_hours' => 'setExceptionOperatingHours',
        'assistance_type' => 'setAssistanceType',
        'score' => 'setScore',
        'standard_operating_hours' => 'setStandardOperatingHours'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'access_point_id' => 'getAccessPointId',
        'name' => 'getName',
        'timezone' => 'getTimezone',
        'type' => 'getType',
        'accessibility_attributes' => 'getAccessibilityAttributes',
        'address' => 'getAddress',
        'exception_operating_hours' => 'getExceptionOperatingHours',
        'assistance_type' => 'getAssistanceType',
        'score' => 'getScore',
        'standard_operating_hours' => 'getStandardOperatingHours'
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

    public const ASSISTANCE_TYPE_STAFF_ASSISTED = 'STAFF_ASSISTED';
    public const ASSISTANCE_TYPE_SELF_ASSISTED = 'SELF_ASSISTED';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getAssistanceTypeAllowableValues(): array
    {
        return [
            self::ASSISTANCE_TYPE_STAFF_ASSISTED,
            self::ASSISTANCE_TYPE_SELF_ASSISTED,
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
        $this->setIfExists('access_point_id', $data ?? [], null);
        $this->setIfExists('name', $data ?? [], null);
        $this->setIfExists('timezone', $data ?? [], null);
        $this->setIfExists('type', $data ?? [], null);
        $this->setIfExists('accessibility_attributes', $data ?? [], null);
        $this->setIfExists('address', $data ?? [], null);
        $this->setIfExists('exception_operating_hours', $data ?? [], null);
        $this->setIfExists('assistance_type', $data ?? [], null);
        $this->setIfExists('score', $data ?? [], null);
        $this->setIfExists('standard_operating_hours', $data ?? [], null);
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

        $allowedValues = $this->getAssistanceTypeAllowableValues();
        if (!is_null($this->container['assistance_type']) && !in_array($this->container['assistance_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'assistance_type', must be one of '%s'",
                $this->container['assistance_type'],
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
     * Gets access_point_id
     *
     * @return string|null
     */
    public function getAccessPointId(): ?string
    {
        return $this->container['access_point_id'];
    }

    /**
     * Sets access_point_id
     *
     * @param string|null $access_point_id Unique identifier for the access point
     *
     * @return self
     */
    public function setAccessPointId(?string $access_point_id): self
    {
        if (is_null($access_point_id)) {
            throw new \InvalidArgumentException('non-nullable access_point_id cannot be null');
        }
        $this->container['access_point_id'] = $access_point_id;

        return $this;
    }

    /**
     * Gets name
     *
     * @return string|null
     */
    public function getName(): ?string
    {
        return $this->container['name'];
    }

    /**
     * Sets name
     *
     * @param string|null $name Name of entity (store/hub etc) where this access point is located
     *
     * @return self
     */
    public function setName(?string $name): self
    {
        if (is_null($name)) {
            throw new \InvalidArgumentException('non-nullable name cannot be null');
        }
        $this->container['name'] = $name;

        return $this;
    }

    /**
     * Gets timezone
     *
     * @return string|null
     */
    public function getTimezone(): ?string
    {
        return $this->container['timezone'];
    }

    /**
     * Sets timezone
     *
     * @param string|null $timezone Timezone of access point
     *
     * @return self
     */
    public function setTimezone(?string $timezone): self
    {
        if (is_null($timezone)) {
            throw new \InvalidArgumentException('non-nullable timezone cannot be null');
        }
        $this->container['timezone'] = $timezone;

        return $this;
    }

    /**
     * Gets type
     *
     * @return string|null
     */
    public function getType(): ?string
    {
        return $this->container['type'];
    }

    /**
     * Sets type
     *
     * @param string|null $type type
     *
     * @return self
     */
    public function setType(?string $type): self
    {
        if (is_null($type)) {
            throw new \InvalidArgumentException('non-nullable type cannot be null');
        }
        $this->container['type'] = $type;

        return $this;
    }

    /**
     * Gets accessibility_attributes
     *
     * @return \OpenAPI\Client\Model\shipping\AccessibilityAttributes|null
     */
    public function getAccessibilityAttributes(): ?\OpenAPI\Client\Model\shipping\AccessibilityAttributes
    {
        return $this->container['accessibility_attributes'];
    }

    /**
     * Sets accessibility_attributes
     *
     * @param \OpenAPI\Client\Model\shipping\AccessibilityAttributes|null $accessibility_attributes accessibility_attributes
     *
     * @return self
     */
    public function setAccessibilityAttributes(?\OpenAPI\Client\Model\shipping\AccessibilityAttributes $accessibility_attributes): self
    {
        if (is_null($accessibility_attributes)) {
            throw new \InvalidArgumentException('non-nullable accessibility_attributes cannot be null');
        }
        $this->container['accessibility_attributes'] = $accessibility_attributes;

        return $this;
    }

    /**
     * Gets address
     *
     * @return \OpenAPI\Client\Model\shipping\Address|null
     */
    public function getAddress(): ?\OpenAPI\Client\Model\shipping\Address
    {
        return $this->container['address'];
    }

    /**
     * Sets address
     *
     * @param \OpenAPI\Client\Model\shipping\Address|null $address address
     *
     * @return self
     */
    public function setAddress(?\OpenAPI\Client\Model\shipping\Address $address): self
    {
        if (is_null($address)) {
            throw new \InvalidArgumentException('non-nullable address cannot be null');
        }
        $this->container['address'] = $address;

        return $this;
    }

    /**
     * Gets exception_operating_hours
     *
     * @return arrayA|null
     */
    public function getExceptionOperatingHours(): ?array
    {
        return $this->container['exception_operating_hours'];
    }

    /**
     * Sets exception_operating_hours
     *
     * @param array|null $exception_operating_hours exception_operating_hours
     *
     * @return self
     */
    public function setExceptionOperatingHours(?array $exception_operating_hours): self
    {
        if (is_null($exception_operating_hours)) {
            throw new \InvalidArgumentException('non-nullable exception_operating_hours cannot be null');
        }
        $this->container['exception_operating_hours'] = $exception_operating_hours;

        return $this;
    }

    /**
     * Gets assistance_type
     *
     * @return string|null
     */
    public function getAssistanceType(): ?string
    {
        return $this->container['assistance_type'];
    }

    /**
     * Sets assistance_type
     *
     * @param string|null $assistance_type assistance_type
     *
     * @return self
     */
    public function setAssistanceType(?string $assistance_type): self
    {
        if (is_null($assistance_type)) {
            throw new \InvalidArgumentException('non-nullable assistance_type cannot be null');
        }
        $allowedValues = $this->getAssistanceTypeAllowableValues();
        if (!in_array($assistance_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'assistance_type', must be one of '%s'",
                    $assistance_type,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['assistance_type'] = $assistance_type;

        return $this;
    }

    /**
     * Gets score
     *
     * @return string|null
     */
    public function getScore(): ?string
    {
        return $this->container['score'];
    }

    /**
     * Sets score
     *
     * @param string|null $score The score of access point, based on proximity to postal code and sorting preference. This can be used to sort access point results on shipper's end.
     *
     * @return self
     */
    public function setScore(?string $score): self
    {
        if (is_null($score)) {
            throw new \InvalidArgumentException('non-nullable score cannot be null');
        }
        $this->container['score'] = $score;

        return $this;
    }

    /**
     * Gets standard_operating_hours
     *
     * @return array<string,\OpenAPI\Client\Model\shipping\OperatingHours>|null
     */
    public function getStandardOperatingHours(): ?array
    {
        return $this->container['standard_operating_hours'];
    }

    /**
     * Sets standard_operating_hours
     *
     * @param array<string,\OpenAPI\Client\Model\shipping\OperatingHours>|null $standard_operating_hours Map of day of the week to operating hours of that day
     *
     * @return self
     */
    public function setStandardOperatingHours(?array $standard_operating_hours): self
    {
        if (is_null($standard_operating_hours)) {
            throw new \InvalidArgumentException('non-nullable standard_operating_hours cannot be null');
        }
        $this->container['standard_operating_hours'] = $standard_operating_hours;

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


