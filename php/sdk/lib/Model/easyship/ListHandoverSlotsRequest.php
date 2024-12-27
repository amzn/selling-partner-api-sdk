<?php
/**
 * ListHandoverSlotsRequest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Easy Ship
 *
 * The Selling Partner API for Easy Ship helps you build applications that help sellers manage and ship Amazon Easy Ship orders.  Your Easy Ship applications can:  * Get available time slots for packages to be scheduled for delivery.  * Schedule, reschedule, and cancel Easy Ship orders.  * Print labels, invoices, and warranties.  See the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) for the differences in Easy Ship operations by marketplace.
 *
 * The version of the OpenAPI document: 2022-03-23
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\easyship;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * ListHandoverSlotsRequest Class Doc Comment
 *
 * @category Class
 * @description The request schema for the &#x60;listHandoverSlots&#x60; operation.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ListHandoverSlotsRequest implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'ListHandoverSlotsRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'marketplace_id' => 'string',
             'amazon_order_id' => 'string',
             'package_dimensions' => '\OpenAPI\Client\Model\easyship\Dimensions',
             'package_weight' => '\OpenAPI\Client\Model\easyship\Weight'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'marketplace_id' => null,
            'amazon_order_id' => null,
            'package_dimensions' => null,
            'package_weight' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'marketplace_id' => false,
        'amazon_order_id' => false,
        'package_dimensions' => false,
        'package_weight' => false
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
        'marketplace_id' => 'marketplaceId',
                'amazon_order_id' => 'amazonOrderId',
                'package_dimensions' => 'packageDimensions',
                'package_weight' => 'packageWeight'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'marketplace_id' => 'setMarketplaceId',
        'amazon_order_id' => 'setAmazonOrderId',
        'package_dimensions' => 'setPackageDimensions',
        'package_weight' => 'setPackageWeight'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'marketplace_id' => 'getMarketplaceId',
        'amazon_order_id' => 'getAmazonOrderId',
        'package_dimensions' => 'getPackageDimensions',
        'package_weight' => 'getPackageWeight'
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
        $this->setIfExists('marketplace_id', $data ?? [], null);
        $this->setIfExists('amazon_order_id', $data ?? [], null);
        $this->setIfExists('package_dimensions', $data ?? [], null);
        $this->setIfExists('package_weight', $data ?? [], null);
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

        if ($this->container['marketplace_id'] === null) {
            $invalidProperties[] = "'marketplace_id' can't be null";
        }
        if ((mb_strlen($this->container['marketplace_id']) > 255)) {
            $invalidProperties[] = "invalid value for 'marketplace_id', the character length must be smaller than or equal to 255.";
        }

        if ((mb_strlen($this->container['marketplace_id']) < 1)) {
            $invalidProperties[] = "invalid value for 'marketplace_id', the character length must be bigger than or equal to 1.";
        }

        if ($this->container['amazon_order_id'] === null) {
            $invalidProperties[] = "'amazon_order_id' can't be null";
        }
        if ($this->container['package_dimensions'] === null) {
            $invalidProperties[] = "'package_dimensions' can't be null";
        }
        if ($this->container['package_weight'] === null) {
            $invalidProperties[] = "'package_weight' can't be null";
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
     * Gets marketplace_id
     *
     * @return string
     */
    public function getMarketplaceId(): string
    {
        return $this->container['marketplace_id'];
    }

    /**
     * Sets marketplace_id
     *
     * @param string $marketplace_id A string of up to 255 characters.
     *
     * @return self
     */
    public function setMarketplaceId(string $marketplace_id): self
    {
        if (is_null($marketplace_id)) {
            throw new \InvalidArgumentException('non-nullable marketplace_id cannot be null');
        }
        if ((mb_strlen($marketplace_id) > 255)) {
            throw new \InvalidArgumentException('invalid length for $marketplace_id when calling ListHandoverSlotsRequest., must be smaller than or equal to 255.');
        }
        if ((mb_strlen($marketplace_id) < 1)) {
            throw new \InvalidArgumentException('invalid length for $marketplace_id when calling ListHandoverSlotsRequest., must be bigger than or equal to 1.');
        }

        $this->container['marketplace_id'] = $marketplace_id;

        return $this;
    }

    /**
     * Gets amazon_order_id
     *
     * @return string
     */
    public function getAmazonOrderId(): string
    {
        return $this->container['amazon_order_id'];
    }

    /**
     * Sets amazon_order_id
     *
     * @param string $amazon_order_id An Amazon-defined order identifier. Identifies the order that the seller wants to deliver using Amazon Easy Ship.
     *
     * @return self
     */
    public function setAmazonOrderId(string $amazon_order_id): self
    {
        if (is_null($amazon_order_id)) {
            throw new \InvalidArgumentException('non-nullable amazon_order_id cannot be null');
        }
        $this->container['amazon_order_id'] = $amazon_order_id;

        return $this;
    }

    /**
     * Gets package_dimensions
     *
     * @return \OpenAPI\Client\Model\easyship\Dimensions
     */
    public function getPackageDimensions(): \OpenAPI\Client\Model\easyship\Dimensions
    {
        return $this->container['package_dimensions'];
    }

    /**
     * Sets package_dimensions
     *
     * @param \OpenAPI\Client\Model\easyship\Dimensions $package_dimensions package_dimensions
     *
     * @return self
     */
    public function setPackageDimensions(\OpenAPI\Client\Model\easyship\Dimensions $package_dimensions): self
    {
        if (is_null($package_dimensions)) {
            throw new \InvalidArgumentException('non-nullable package_dimensions cannot be null');
        }
        $this->container['package_dimensions'] = $package_dimensions;

        return $this;
    }

    /**
     * Gets package_weight
     *
     * @return \OpenAPI\Client\Model\easyship\Weight
     */
    public function getPackageWeight(): \OpenAPI\Client\Model\easyship\Weight
    {
        return $this->container['package_weight'];
    }

    /**
     * Sets package_weight
     *
     * @param \OpenAPI\Client\Model\easyship\Weight $package_weight package_weight
     *
     * @return self
     */
    public function setPackageWeight(\OpenAPI\Client\Model\easyship\Weight $package_weight): self
    {
        if (is_null($package_weight)) {
            throw new \InvalidArgumentException('non-nullable package_weight cannot be null');
        }
        $this->container['package_weight'] = $package_weight;

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


