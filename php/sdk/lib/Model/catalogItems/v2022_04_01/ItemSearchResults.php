<?php

/**
 * ItemSearchResults.
 *
 * PHP version 8.3
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Catalog Items.
 *
 * Use the Selling Partner API for Catalog Items to retrieve information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-04-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\catalogItems\v2022_04_01;

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * ItemSearchResults Class Doc Comment.
 *
 * @category Class
 *
 * @description Items in the Amazon catalog and search-related metadata.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class ItemSearchResults implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'ItemSearchResults';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'number_of_results' => 'int',
        'pagination' => '\SpApi\Model\catalogItems\v2022_04_01\Pagination',
        'refinements' => '\SpApi\Model\catalogItems\v2022_04_01\Refinements',
        'items' => '\SpApi\Model\catalogItems\v2022_04_01\Item[]'];

    /**
     * Array of property to format mappings. Used for (de)serialization.
     *
     * @var string[]
     *
     * @phpstan-var array<string, string|null>
     *
     * @psalm-var array<string, string|null>
     */
    protected static array $openAPIFormats = [
        'number_of_results' => null,
        'pagination' => null,
        'refinements' => null,
        'items' => null];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'number_of_results' => false,
        'pagination' => false,
        'refinements' => false,
        'items' => false,
    ];

    /**
     * If a nullable field gets set to null, insert it here.
     *
     * @var bool[]
     */
    protected array $openAPINullablesSetToNull = [];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name.
     *
     * @var string[]
     */
    protected static array $attributeMap = [
        'number_of_results' => 'numberOfResults',
        'pagination' => 'pagination',
        'refinements' => 'refinements',
        'items' => 'items',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'number_of_results' => 'setNumberOfResults',
        'pagination' => 'setPagination',
        'refinements' => 'setRefinements',
        'items' => 'setItems',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'number_of_results' => 'getNumberOfResults',
        'pagination' => 'getPagination',
        'refinements' => 'getRefinements',
        'items' => 'getItems',
    ];

    /**
     * Associative array for storing property values.
     */
    protected array $container = [];

    /**
     * Constructor.
     *
     * @param null|array $data Associated array of property values
     *                         initializing the model
     */
    public function __construct(?array $data = null)
    {
        $this->setIfExists('number_of_results', $data ?? [], null);
        $this->setIfExists('pagination', $data ?? [], null);
        $this->setIfExists('refinements', $data ?? [], null);
        $this->setIfExists('items', $data ?? [], null);
    }

    /**
     * Gets the string presentation of the object.
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
     * Array of property to type mappings. Used for (de)serialization.
     */
    public static function openAPITypes(): array
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization.
     */
    public static function openAPIFormats(): array
    {
        return self::$openAPIFormats;
    }

    /**
     * Checks if a property is nullable.
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name.
     */
    public static function attributeMap(): array
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     */
    public static function setters(): array
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests).
     */
    public static function getters(): array
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     */
    public function getModelName(): string
    {
        return self::$openAPIModelName;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties(): array
    {
        $invalidProperties = [];

        if (null === $this->container['number_of_results']) {
            $invalidProperties[] = "'number_of_results' can't be null";
        }
        if (null === $this->container['pagination']) {
            $invalidProperties[] = "'pagination' can't be null";
        }
        if (null === $this->container['refinements']) {
            $invalidProperties[] = "'refinements' can't be null";
        }
        if (null === $this->container['items']) {
            $invalidProperties[] = "'items' can't be null";
        }

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed.
     *
     * @return bool True if all properties are valid
     */
    public function valid(): bool
    {
        return 0 === count($this->listInvalidProperties());
    }

    /**
     * Gets number_of_results.
     */
    public function getNumberOfResults(): int
    {
        return $this->container['number_of_results'];
    }

    /**
     * Sets number_of_results.
     *
     * @param int $number_of_results For searches that are based on `identifiers`, `numberOfResults` is the total number of Amazon catalog items found. For searches that are based on `keywords`, `numberOfResults` is the estimated total number of Amazon catalog items that are matched by the search query. Only results up to the page count limit are returned per request regardless of the number found.  **Note:** The maximum number of items (ASINs) that can be returned and paged through is 1,000.
     */
    public function setNumberOfResults(int $number_of_results): self
    {
        if (is_null($number_of_results)) {
            throw new \InvalidArgumentException('non-nullable number_of_results cannot be null');
        }
        $this->container['number_of_results'] = $number_of_results;

        return $this;
    }

    /**
     * Gets pagination.
     */
    public function getPagination(): Pagination
    {
        return $this->container['pagination'];
    }

    /**
     * Sets pagination.
     *
     * @param Pagination $pagination pagination
     */
    public function setPagination(Pagination $pagination): self
    {
        if (is_null($pagination)) {
            throw new \InvalidArgumentException('non-nullable pagination cannot be null');
        }
        $this->container['pagination'] = $pagination;

        return $this;
    }

    /**
     * Gets refinements.
     */
    public function getRefinements(): Refinements
    {
        return $this->container['refinements'];
    }

    /**
     * Sets refinements.
     *
     * @param Refinements $refinements refinements
     */
    public function setRefinements(Refinements $refinements): self
    {
        if (is_null($refinements)) {
            throw new \InvalidArgumentException('non-nullable refinements cannot be null');
        }
        $this->container['refinements'] = $refinements;

        return $this;
    }

    /**
     * Gets items.
     */
    public function getItems(): array
    {
        return $this->container['items'];
    }

    /**
     * Sets items.
     *
     * @param array $items a list of items from the Amazon catalog
     */
    public function setItems(array $items): self
    {
        if (is_null($items)) {
            throw new \InvalidArgumentException('non-nullable items cannot be null');
        }
        $this->container['items'] = $items;

        return $this;
    }

    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param int $offset Offset
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param int $offset Offset
     *
     * @return null|mixed
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset): mixed
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param null|int $offset Offset
     * @param mixed    $value  Value to be set
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
     * @param int $offset Offset
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     *
     * @see https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed returns data which can be serialized by json_encode(), which is a value
     *               of any type other than a resource
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize(): mixed
    {
        return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets a header-safe presentation of the object.
     */
    public function toHeaderValue(): string
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }

    /**
     * Array of nullable properties.
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null.
     *
     * @return bool[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null.
     *
     * @param bool[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
     * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
     * $this->openAPINullablesSetToNull array.
     *
     * @param mixed $defaultValue
     */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }
}
