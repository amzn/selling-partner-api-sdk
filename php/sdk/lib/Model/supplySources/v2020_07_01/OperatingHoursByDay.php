<?php
/**
 * OperatingHoursByDay
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
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

namespace SpApi\Model\supplySources\v2020_07_01;

use
ArrayAccess;
use SpApi\ObjectSerializer;
use SpApi\Model\ModelInterface;

/**
 * OperatingHoursByDay Class Doc Comment
 *
 * @category Class
 * @description The operating hours per day
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class OperatingHoursByDay implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'OperatingHoursByDay';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'monday' => '\SpApi\Model\supplySources\v2020_07_01\OperatingHour[]',
             'tuesday' => '\SpApi\Model\supplySources\v2020_07_01\OperatingHour[]',
             'wednesday' => '\SpApi\Model\supplySources\v2020_07_01\OperatingHour[]',
             'thursday' => '\SpApi\Model\supplySources\v2020_07_01\OperatingHour[]',
             'friday' => '\SpApi\Model\supplySources\v2020_07_01\OperatingHour[]',
             'saturday' => '\SpApi\Model\supplySources\v2020_07_01\OperatingHour[]',
             'sunday' => '\SpApi\Model\supplySources\v2020_07_01\OperatingHour[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'monday' => null,
            'tuesday' => null,
            'wednesday' => null,
            'thursday' => null,
            'friday' => null,
            'saturday' => null,
            'sunday' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'monday' => true,
        'tuesday' => true,
        'wednesday' => true,
        'thursday' => true,
        'friday' => true,
        'saturday' => true,
        'sunday' => true
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
        'monday' => 'monday',
                'tuesday' => 'tuesday',
                'wednesday' => 'wednesday',
                'thursday' => 'thursday',
                'friday' => 'friday',
                'saturday' => 'saturday',
                'sunday' => 'sunday'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'monday' => 'setMonday',
        'tuesday' => 'setTuesday',
        'wednesday' => 'setWednesday',
        'thursday' => 'setThursday',
        'friday' => 'setFriday',
        'saturday' => 'setSaturday',
        'sunday' => 'setSunday'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'monday' => 'getMonday',
        'tuesday' => 'getTuesday',
        'wednesday' => 'getWednesday',
        'thursday' => 'getThursday',
        'friday' => 'getFriday',
        'saturday' => 'getSaturday',
        'sunday' => 'getSunday'
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
        $this->setIfExists('monday', $data ?? [], null);
        $this->setIfExists('tuesday', $data ?? [], null);
        $this->setIfExists('wednesday', $data ?? [], null);
        $this->setIfExists('thursday', $data ?? [], null);
        $this->setIfExists('friday', $data ?? [], null);
        $this->setIfExists('saturday', $data ?? [], null);
        $this->setIfExists('sunday', $data ?? [], null);
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
     * Gets monday
     *
     * @return array|null
     */
    public function getMonday(): ?array
    {
        return $this->container['monday'];
    }

    /**
     * Sets monday
     *
     * @param array|null $monday A list of Operating Hours.
     *
     * @return self
     */
    public function setMonday(?array $monday): self
    {
        if (is_null($monday)) {
            array_push($this->openAPINullablesSetToNull, 'monday');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('monday', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['monday'] = $monday;

        return $this;
    }

    /**
     * Gets tuesday
     *
     * @return array|null
     */
    public function getTuesday(): ?array
    {
        return $this->container['tuesday'];
    }

    /**
     * Sets tuesday
     *
     * @param array|null $tuesday A list of Operating Hours.
     *
     * @return self
     */
    public function setTuesday(?array $tuesday): self
    {
        if (is_null($tuesday)) {
            array_push($this->openAPINullablesSetToNull, 'tuesday');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('tuesday', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['tuesday'] = $tuesday;

        return $this;
    }

    /**
     * Gets wednesday
     *
     * @return array|null
     */
    public function getWednesday(): ?array
    {
        return $this->container['wednesday'];
    }

    /**
     * Sets wednesday
     *
     * @param array|null $wednesday A list of Operating Hours.
     *
     * @return self
     */
    public function setWednesday(?array $wednesday): self
    {
        if (is_null($wednesday)) {
            array_push($this->openAPINullablesSetToNull, 'wednesday');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('wednesday', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['wednesday'] = $wednesday;

        return $this;
    }

    /**
     * Gets thursday
     *
     * @return array|null
     */
    public function getThursday(): ?array
    {
        return $this->container['thursday'];
    }

    /**
     * Sets thursday
     *
     * @param array|null $thursday A list of Operating Hours.
     *
     * @return self
     */
    public function setThursday(?array $thursday): self
    {
        if (is_null($thursday)) {
            array_push($this->openAPINullablesSetToNull, 'thursday');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('thursday', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['thursday'] = $thursday;

        return $this;
    }

    /**
     * Gets friday
     *
     * @return array|null
     */
    public function getFriday(): ?array
    {
        return $this->container['friday'];
    }

    /**
     * Sets friday
     *
     * @param array|null $friday A list of Operating Hours.
     *
     * @return self
     */
    public function setFriday(?array $friday): self
    {
        if (is_null($friday)) {
            array_push($this->openAPINullablesSetToNull, 'friday');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('friday', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['friday'] = $friday;

        return $this;
    }

    /**
     * Gets saturday
     *
     * @return array|null
     */
    public function getSaturday(): ?array
    {
        return $this->container['saturday'];
    }

    /**
     * Sets saturday
     *
     * @param array|null $saturday A list of Operating Hours.
     *
     * @return self
     */
    public function setSaturday(?array $saturday): self
    {
        if (is_null($saturday)) {
            array_push($this->openAPINullablesSetToNull, 'saturday');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('saturday', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['saturday'] = $saturday;

        return $this;
    }

    /**
     * Gets sunday
     *
     * @return array|null
     */
    public function getSunday(): ?array
    {
        return $this->container['sunday'];
    }

    /**
     * Sets sunday
     *
     * @param array|null $sunday A list of Operating Hours.
     *
     * @return self
     */
    public function setSunday(?array $sunday): self
    {
        if (is_null($sunday)) {
            array_push($this->openAPINullablesSetToNull, 'sunday');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('sunday', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['sunday'] = $sunday;

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


