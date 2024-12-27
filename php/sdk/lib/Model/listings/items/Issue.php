<?php
/**
 * Issue
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Listings Items v2021-08-01
 *
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\listings.items;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * Issue Class Doc Comment
 *
 * @category Class
 * @description An issue with a listings item.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class Issue implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'Issue';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'code' => 'string',
             'message' => 'string',
             'severity' => 'string',
             'attribute_names' => 'string[]',
             'categories' => 'string[]',
             'enforcements' => '\OpenAPI\Client\Model\listings.items\IssueEnforcements'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'code' => null,
            'message' => null,
            'severity' => null,
            'attribute_names' => null,
            'categories' => null,
            'enforcements' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'code' => false,
        'message' => false,
        'severity' => false,
        'attribute_names' => false,
        'categories' => false,
        'enforcements' => false
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
        'code' => 'code',
                'message' => 'message',
                'severity' => 'severity',
                'attribute_names' => 'attributeNames',
                'categories' => 'categories',
                'enforcements' => 'enforcements'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'code' => 'setCode',
        'message' => 'setMessage',
        'severity' => 'setSeverity',
        'attribute_names' => 'setAttributeNames',
        'categories' => 'setCategories',
        'enforcements' => 'setEnforcements'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'code' => 'getCode',
        'message' => 'getMessage',
        'severity' => 'getSeverity',
        'attribute_names' => 'getAttributeNames',
        'categories' => 'getCategories',
        'enforcements' => 'getEnforcements'
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

    public const SEVERITY_ERROR = 'ERROR';
    public const SEVERITY_WARNING = 'WARNING';
    public const SEVERITY_INFO = 'INFO';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getSeverityAllowableValues(): array
    {
        return [
            self::SEVERITY_ERROR,
            self::SEVERITY_WARNING,
            self::SEVERITY_INFO,
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
        $this->setIfExists('code', $data ?? [], null);
        $this->setIfExists('message', $data ?? [], null);
        $this->setIfExists('severity', $data ?? [], null);
        $this->setIfExists('attribute_names', $data ?? [], null);
        $this->setIfExists('categories', $data ?? [], null);
        $this->setIfExists('enforcements', $data ?? [], null);
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

        if ($this->container['code'] === null) {
            $invalidProperties[] = "'code' can't be null";
        }
        if ($this->container['message'] === null) {
            $invalidProperties[] = "'message' can't be null";
        }
        if ($this->container['severity'] === null) {
            $invalidProperties[] = "'severity' can't be null";
        }
        $allowedValues = $this->getSeverityAllowableValues();
        if (!is_null($this->container['severity']) && !in_array($this->container['severity'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'severity', must be one of '%s'",
                $this->container['severity'],
                implode("', '", $allowedValues)
            );
        }

        if ($this->container['categories'] === null) {
            $invalidProperties[] = "'categories' can't be null";
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
     * Gets code
     *
     * @return string
     */
    public function getCode(): string
    {
        return $this->container['code'];
    }

    /**
     * Sets code
     *
     * @param string $code An issue code that identifies the type of issue.
     *
     * @return self
     */
    public function setCode(string $code): self
    {
        if (is_null($code)) {
            throw new \InvalidArgumentException('non-nullable code cannot be null');
        }
        $this->container['code'] = $code;

        return $this;
    }

    /**
     * Gets message
     *
     * @return string
     */
    public function getMessage(): string
    {
        return $this->container['message'];
    }

    /**
     * Sets message
     *
     * @param string $message A message that describes the issue.
     *
     * @return self
     */
    public function setMessage(string $message): self
    {
        if (is_null($message)) {
            throw new \InvalidArgumentException('non-nullable message cannot be null');
        }
        $this->container['message'] = $message;

        return $this;
    }

    /**
     * Gets severity
     *
     * @return string
     */
    public function getSeverity(): string
    {
        return $this->container['severity'];
    }

    /**
     * Sets severity
     *
     * @param string $severity The severity of the issue.
     *
     * @return self
     */
    public function setSeverity(string $severity): self
    {
        if (is_null($severity)) {
            throw new \InvalidArgumentException('non-nullable severity cannot be null');
        }
        $allowedValues = $this->getSeverityAllowableValues();
        if (!in_array($severity, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'severity', must be one of '%s'",
                    $severity,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['severity'] = $severity;

        return $this;
    }

    /**
     * Gets attribute_names
     *
     * @return arrayA|null
     */
    public function getAttributeNames(): ?array
    {
        return $this->container['attribute_names'];
    }

    /**
     * Sets attribute_names
     *
     * @param array|null $attribute_names The names of the attributes associated with the issue, if applicable.
     *
     * @return self
     */
    public function setAttributeNames(?array $attribute_names): self
    {
        if (is_null($attribute_names)) {
            throw new \InvalidArgumentException('non-nullable attribute_names cannot be null');
        }
        $this->container['attribute_names'] = $attribute_names;

        return $this;
    }

    /**
     * Gets categories
     *
     * @return arrayA
     */
    public function getCategories(): array
    {
        return $this->container['categories'];
    }

    /**
     * Sets categories
     *
     * @param array $categories List of issue categories.   Possible vales:   * `INVALID_ATTRIBUTE` - Indicating an invalid attribute in the listing.   * `MISSING_ATTRIBUTE` - Highlighting a missing attribute in the listing.   * `INVALID_IMAGE` - Signifying an invalid image in the listing.   * `MISSING_IMAGE` - Noting the absence of an image in the listing.   * `INVALID_PRICE` - Pertaining to issues with the listing's price-related attributes.   * `MISSING_PRICE` - Pointing out the absence of a price attribute in the listing.   * `DUPLICATE` - Identifying listings with potential duplicate problems, such as this ASIN potentially being a duplicate of another ASIN.   * `QUALIFICATION_REQUIRED` - Indicating that the listing requires qualification-related approval.
     *
     * @return self
     */
    public function setCategories(array $categories): self
    {
        if (is_null($categories)) {
            throw new \InvalidArgumentException('non-nullable categories cannot be null');
        }
        $this->container['categories'] = $categories;

        return $this;
    }

    /**
     * Gets enforcements
     *
     * @return \OpenAPI\Client\Model\listings.items\IssueEnforcements|null
     */
    public function getEnforcements(): ?\OpenAPI\Client\Model\listings.items\IssueEnforcements
    {
        return $this->container['enforcements'];
    }

    /**
     * Sets enforcements
     *
     * @param \OpenAPI\Client\Model\listings.items\IssueEnforcements|null $enforcements enforcements
     *
     * @return self
     */
    public function setEnforcements(?\OpenAPI\Client\Model\listings.items\IssueEnforcements $enforcements): self
    {
        if (is_null($enforcements)) {
            throw new \InvalidArgumentException('non-nullable enforcements cannot be null');
        }
        $this->container['enforcements'] = $enforcements;

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


