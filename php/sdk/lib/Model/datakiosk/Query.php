<?php
/**
 * Query
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Data Kiosk
 *
 * The Selling Partner API for Data Kiosk lets you submit GraphQL queries from a variety of schemas to help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2023-11-15
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\datakiosk;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * Query Class Doc Comment
 *
 * @category Class
 * @description Detailed information about the query.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class Query implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'Query';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'query_id' => 'string',
             'query' => 'string',
             'created_time' => '\DateTime',
             'processing_status' => 'string',
             'processing_start_time' => '\DateTime',
             'processing_end_time' => '\DateTime',
             'data_document_id' => 'string',
             'error_document_id' => 'string',
             'pagination' => '\OpenAPI\Client\Model\datakiosk\QueryPagination'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'query_id' => null,
            'query' => null,
            'created_time' => 'date-time',
            'processing_status' => null,
            'processing_start_time' => 'date-time',
            'processing_end_time' => 'date-time',
            'data_document_id' => null,
            'error_document_id' => null,
            'pagination' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'query_id' => false,
        'query' => false,
        'created_time' => false,
        'processing_status' => false,
        'processing_start_time' => false,
        'processing_end_time' => false,
        'data_document_id' => false,
        'error_document_id' => false,
        'pagination' => false
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
        'query_id' => 'queryId',
                'query' => 'query',
                'created_time' => 'createdTime',
                'processing_status' => 'processingStatus',
                'processing_start_time' => 'processingStartTime',
                'processing_end_time' => 'processingEndTime',
                'data_document_id' => 'dataDocumentId',
                'error_document_id' => 'errorDocumentId',
                'pagination' => 'pagination'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'query_id' => 'setQueryId',
        'query' => 'setQuery',
        'created_time' => 'setCreatedTime',
        'processing_status' => 'setProcessingStatus',
        'processing_start_time' => 'setProcessingStartTime',
        'processing_end_time' => 'setProcessingEndTime',
        'data_document_id' => 'setDataDocumentId',
        'error_document_id' => 'setErrorDocumentId',
        'pagination' => 'setPagination'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'query_id' => 'getQueryId',
        'query' => 'getQuery',
        'created_time' => 'getCreatedTime',
        'processing_status' => 'getProcessingStatus',
        'processing_start_time' => 'getProcessingStartTime',
        'processing_end_time' => 'getProcessingEndTime',
        'data_document_id' => 'getDataDocumentId',
        'error_document_id' => 'getErrorDocumentId',
        'pagination' => 'getPagination'
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

    public const PROCESSING_STATUS_CANCELLED = 'CANCELLED';
    public const PROCESSING_STATUS_DONE = 'DONE';
    public const PROCESSING_STATUS_FATAL = 'FATAL';
    public const PROCESSING_STATUS_IN_PROGRESS = 'IN_PROGRESS';
    public const PROCESSING_STATUS_IN_QUEUE = 'IN_QUEUE';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getProcessingStatusAllowableValues(): array
    {
        return [
            self::PROCESSING_STATUS_CANCELLED,
            self::PROCESSING_STATUS_DONE,
            self::PROCESSING_STATUS_FATAL,
            self::PROCESSING_STATUS_IN_PROGRESS,
            self::PROCESSING_STATUS_IN_QUEUE,
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
        $this->setIfExists('query_id', $data ?? [], null);
        $this->setIfExists('query', $data ?? [], null);
        $this->setIfExists('created_time', $data ?? [], null);
        $this->setIfExists('processing_status', $data ?? [], null);
        $this->setIfExists('processing_start_time', $data ?? [], null);
        $this->setIfExists('processing_end_time', $data ?? [], null);
        $this->setIfExists('data_document_id', $data ?? [], null);
        $this->setIfExists('error_document_id', $data ?? [], null);
        $this->setIfExists('pagination', $data ?? [], null);
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

        if ($this->container['query_id'] === null) {
            $invalidProperties[] = "'query_id' can't be null";
        }
        if ($this->container['query'] === null) {
            $invalidProperties[] = "'query' can't be null";
        }
        if ($this->container['created_time'] === null) {
            $invalidProperties[] = "'created_time' can't be null";
        }
        if ($this->container['processing_status'] === null) {
            $invalidProperties[] = "'processing_status' can't be null";
        }
        $allowedValues = $this->getProcessingStatusAllowableValues();
        if (!is_null($this->container['processing_status']) && !in_array($this->container['processing_status'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'processing_status', must be one of '%s'",
                $this->container['processing_status'],
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
     * Gets query_id
     *
     * @return string
     */
    public function getQueryId(): string
    {
        return $this->container['query_id'];
    }

    /**
     * Sets query_id
     *
     * @param string $query_id The query identifier. This identifier is unique only in combination with a selling partner account ID.
     *
     * @return self
     */
    public function setQueryId(string $query_id): self
    {
        if (is_null($query_id)) {
            throw new \InvalidArgumentException('non-nullable query_id cannot be null');
        }
        $this->container['query_id'] = $query_id;

        return $this;
    }

    /**
     * Gets query
     *
     * @return string
     */
    public function getQuery(): string
    {
        return $this->container['query'];
    }

    /**
     * Sets query
     *
     * @param string $query The submitted query.
     *
     * @return self
     */
    public function setQuery(string $query): self
    {
        if (is_null($query)) {
            throw new \InvalidArgumentException('non-nullable query cannot be null');
        }
        $this->container['query'] = $query;

        return $this;
    }

    /**
     * Gets created_time
     *
     * @return \DateTime
     */
    public function getCreatedTime(): \DateTime
    {
        return $this->container['created_time'];
    }

    /**
     * Sets created_time
     *
     * @param \DateTime $created_time The date and time when the query was created, in ISO 8601 date time format.
     *
     * @return self
     */
    public function setCreatedTime(\DateTime $created_time): self
    {
        if (is_null($created_time)) {
            throw new \InvalidArgumentException('non-nullable created_time cannot be null');
        }
        $this->container['created_time'] = $created_time;

        return $this;
    }

    /**
     * Gets processing_status
     *
     * @return string
     */
    public function getProcessingStatus(): string
    {
        return $this->container['processing_status'];
    }

    /**
     * Sets processing_status
     *
     * @param string $processing_status The processing status of the query.
     *
     * @return self
     */
    public function setProcessingStatus(string $processing_status): self
    {
        if (is_null($processing_status)) {
            throw new \InvalidArgumentException('non-nullable processing_status cannot be null');
        }
        $allowedValues = $this->getProcessingStatusAllowableValues();
        if (!in_array($processing_status, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'processing_status', must be one of '%s'",
                    $processing_status,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['processing_status'] = $processing_status;

        return $this;
    }

    /**
     * Gets processing_start_time
     *
     * @return \DateTime|null
     */
    public function getProcessingStartTime(): ?\DateTime
    {
        return $this->container['processing_start_time'];
    }

    /**
     * Sets processing_start_time
     *
     * @param \DateTime|null $processing_start_time The date and time when the query processing started, in ISO 8601 date time format.
     *
     * @return self
     */
    public function setProcessingStartTime(?\DateTime $processing_start_time): self
    {
        if (is_null($processing_start_time)) {
            throw new \InvalidArgumentException('non-nullable processing_start_time cannot be null');
        }
        $this->container['processing_start_time'] = $processing_start_time;

        return $this;
    }

    /**
     * Gets processing_end_time
     *
     * @return \DateTime|null
     */
    public function getProcessingEndTime(): ?\DateTime
    {
        return $this->container['processing_end_time'];
    }

    /**
     * Sets processing_end_time
     *
     * @param \DateTime|null $processing_end_time The date and time when the query processing completed, in ISO 8601 date time format.
     *
     * @return self
     */
    public function setProcessingEndTime(?\DateTime $processing_end_time): self
    {
        if (is_null($processing_end_time)) {
            throw new \InvalidArgumentException('non-nullable processing_end_time cannot be null');
        }
        $this->container['processing_end_time'] = $processing_end_time;

        return $this;
    }

    /**
     * Gets data_document_id
     *
     * @return string|null
     */
    public function getDataDocumentId(): ?string
    {
        return $this->container['data_document_id'];
    }

    /**
     * Sets data_document_id
     *
     * @param string|null $data_document_id The data document identifier. This identifier is only present when there is data available as a result of the query. This identifier is unique only in combination with a selling partner account ID. Pass this identifier into the `getDocument` operation to get the information required to retrieve the data document's contents.
     *
     * @return self
     */
    public function setDataDocumentId(?string $data_document_id): self
    {
        if (is_null($data_document_id)) {
            throw new \InvalidArgumentException('non-nullable data_document_id cannot be null');
        }
        $this->container['data_document_id'] = $data_document_id;

        return $this;
    }

    /**
     * Gets error_document_id
     *
     * @return string|null
     */
    public function getErrorDocumentId(): ?string
    {
        return $this->container['error_document_id'];
    }

    /**
     * Sets error_document_id
     *
     * @param string|null $error_document_id The error document identifier. This identifier is only present when an error occurs during query processing. This identifier is unique only in combination with a selling partner account ID. Pass this identifier into the `getDocument` operation to get the information required to retrieve the error document's contents.
     *
     * @return self
     */
    public function setErrorDocumentId(?string $error_document_id): self
    {
        if (is_null($error_document_id)) {
            throw new \InvalidArgumentException('non-nullable error_document_id cannot be null');
        }
        $this->container['error_document_id'] = $error_document_id;

        return $this;
    }

    /**
     * Gets pagination
     *
     * @return \OpenAPI\Client\Model\datakiosk\QueryPagination|null
     */
    public function getPagination(): ?\OpenAPI\Client\Model\datakiosk\QueryPagination
    {
        return $this->container['pagination'];
    }

    /**
     * Sets pagination
     *
     * @param \OpenAPI\Client\Model\datakiosk\QueryPagination|null $pagination pagination
     *
     * @return self
     */
    public function setPagination(?\OpenAPI\Client\Model\datakiosk\QueryPagination $pagination): self
    {
        if (is_null($pagination)) {
            throw new \InvalidArgumentException('non-nullable pagination cannot be null');
        }
        $this->container['pagination'] = $pagination;

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


