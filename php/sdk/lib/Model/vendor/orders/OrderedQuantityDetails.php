<?php
/**
 * OrderedQuantityDetails
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Retail Procurement Orders
 *
 * The TESTTTT Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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

namespace OpenAPI\Client\Model\vendor.orders;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * OrderedQuantityDetails Class Doc Comment
 *
 * @category Class
 * @description Details of item quantity ordered.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class OrderedQuantityDetails implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'OrderedQuantityDetails';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'updated_date' => '\DateTime',
             'ordered_quantity' => '\OpenAPI\Client\Model\vendor.orders\ItemQuantity',
             'cancelled_quantity' => '\OpenAPI\Client\Model\vendor.orders\ItemQuantity'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'updated_date' => 'date-time',
            'ordered_quantity' => null,
            'cancelled_quantity' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'updated_date' => false,
        'ordered_quantity' => false,
        'cancelled_quantity' => false
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
        'updated_date' => 'updatedDate',
                'ordered_quantity' => 'orderedQuantity',
                'cancelled_quantity' => 'cancelledQuantity'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'updated_date' => 'setUpdatedDate',
        'ordered_quantity' => 'setOrderedQuantity',
        'cancelled_quantity' => 'setCancelledQuantity'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'updated_date' => 'getUpdatedDate',
        'ordered_quantity' => 'getOrderedQuantity',
        'cancelled_quantity' => 'getCancelledQuantity'
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
        $this->setIfExists('updated_date', $data ?? [], null);
        $this->setIfExists('ordered_quantity', $data ?? [], null);
        $this->setIfExists('cancelled_quantity', $data ?? [], null);
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
     * Gets updated_date
     *
     * @return \DateTime|null
     */
    public function getUpdatedDate(): ?\DateTime
    {
        return $this->container['updated_date'];
    }

    /**
     * Sets updated_date
     *
     * @param \DateTime|null $updated_date The date when the line item quantity was updated by buyer. Must be in ISO-8601 date/time format.
     *
     * @return self
     */
    public function setUpdatedDate(?\DateTime $updated_date): self
    {
        if (is_null($updated_date)) {
            throw new \InvalidArgumentException('non-nullable updated_date cannot be null');
        }
        $this->container['updated_date'] = $updated_date;

        return $this;
    }

    /**
     * Gets ordered_quantity
     *
     * @return \OpenAPI\Client\Model\vendor.orders\ItemQuantity|null
     */
    public function getOrderedQuantity(): ?\OpenAPI\Client\Model\vendor.orders\ItemQuantity
    {
        return $this->container['ordered_quantity'];
    }

    /**
     * Sets ordered_quantity
     *
     * @param \OpenAPI\Client\Model\vendor.orders\ItemQuantity|null $ordered_quantity ordered_quantity
     *
     * @return self
     */
    public function setOrderedQuantity(?\OpenAPI\Client\Model\vendor.orders\ItemQuantity $ordered_quantity): self
    {
        if (is_null($ordered_quantity)) {
            throw new \InvalidArgumentException('non-nullable ordered_quantity cannot be null');
        }
        $this->container['ordered_quantity'] = $ordered_quantity;

        return $this;
    }

    /**
     * Gets cancelled_quantity
     *
     * @return \OpenAPI\Client\Model\vendor.orders\ItemQuantity|null
     */
    public function getCancelledQuantity(): ?\OpenAPI\Client\Model\vendor.orders\ItemQuantity
    {
        return $this->container['cancelled_quantity'];
    }

    /**
     * Sets cancelled_quantity
     *
     * @param \OpenAPI\Client\Model\vendor.orders\ItemQuantity|null $cancelled_quantity cancelled_quantity
     *
     * @return self
     */
    public function setCancelledQuantity(?\OpenAPI\Client\Model\vendor.orders\ItemQuantity $cancelled_quantity): self
    {
        if (is_null($cancelled_quantity)) {
            throw new \InvalidArgumentException('non-nullable cancelled_quantity cannot be null');
        }
        $this->container['cancelled_quantity'] = $cancelled_quantity;

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


