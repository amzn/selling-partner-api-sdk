<?php
/**
 * RequestedDocumentSpecification
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
 * RequestedDocumentSpecification Class Doc Comment
 *
 * @category Class
 * @description The document specifications requested. For calls to the purchaseShipment operation, the shipment purchase fails if the specified document specifications are not among those returned in the response to the getRates operation.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class RequestedDocumentSpecification implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'RequestedDocumentSpecification';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'format' => '\OpenAPI\Client\Model\shipping\DocumentFormat',
             'size' => '\OpenAPI\Client\Model\shipping\DocumentSize',
             'dpi' => 'int',
             'page_layout' => 'string',
             'need_file_joining' => 'bool',
             'requested_document_types' => '\OpenAPI\Client\Model\shipping\DocumentType[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'format' => null,
            'size' => null,
            'dpi' => null,
            'page_layout' => null,
            'need_file_joining' => null,
            'requested_document_types' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'format' => false,
        'size' => false,
        'dpi' => true,
        'page_layout' => true,
        'need_file_joining' => false,
        'requested_document_types' => false
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
        'format' => 'format',
                'size' => 'size',
                'dpi' => 'dpi',
                'page_layout' => 'pageLayout',
                'need_file_joining' => 'needFileJoining',
                'requested_document_types' => 'requestedDocumentTypes'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'format' => 'setFormat',
        'size' => 'setSize',
        'dpi' => 'setDpi',
        'page_layout' => 'setPageLayout',
        'need_file_joining' => 'setNeedFileJoining',
        'requested_document_types' => 'setRequestedDocumentTypes'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'format' => 'getFormat',
        'size' => 'getSize',
        'dpi' => 'getDpi',
        'page_layout' => 'getPageLayout',
        'need_file_joining' => 'getNeedFileJoining',
        'requested_document_types' => 'getRequestedDocumentTypes'
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
        $this->setIfExists('format', $data ?? [], null);
        $this->setIfExists('size', $data ?? [], null);
        $this->setIfExists('dpi', $data ?? [], null);
        $this->setIfExists('page_layout', $data ?? [], null);
        $this->setIfExists('need_file_joining', $data ?? [], null);
        $this->setIfExists('requested_document_types', $data ?? [], null);
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

        if ($this->container['format'] === null) {
            $invalidProperties[] = "'format' can't be null";
        }
        if ($this->container['size'] === null) {
            $invalidProperties[] = "'size' can't be null";
        }
        if ($this->container['need_file_joining'] === null) {
            $invalidProperties[] = "'need_file_joining' can't be null";
        }
        if ($this->container['requested_document_types'] === null) {
            $invalidProperties[] = "'requested_document_types' can't be null";
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
     * Gets format
     *
     * @return string
     */
    public function getFormat(): string
    {
        return $this->container['format'];
    }

    /**
     * Sets format
     *
     * @param string $format format
     *
     * @return self
     */
    public function setFormat(string $format): self
    {
        if (is_null($format)) {
            throw new \InvalidArgumentException('non-nullable format cannot be null');
        }
        $this->container['format'] = $format;

        return $this;
    }

    /**
     * Gets size
     *
     * @return \OpenAPI\Client\Model\shipping\DocumentSize
     */
    public function getSize(): \OpenAPI\Client\Model\shipping\DocumentSize
    {
        return $this->container['size'];
    }

    /**
     * Sets size
     *
     * @param \OpenAPI\Client\Model\shipping\DocumentSize $size size
     *
     * @return self
     */
    public function setSize(\OpenAPI\Client\Model\shipping\DocumentSize $size): self
    {
        if (is_null($size)) {
            throw new \InvalidArgumentException('non-nullable size cannot be null');
        }
        $this->container['size'] = $size;

        return $this;
    }

    /**
     * Gets dpi
     *
     * @return int|null
     */
    public function getDpi(): ?int
    {
        return $this->container['dpi'];
    }

    /**
     * Sets dpi
     *
     * @param int|null $dpi The dots per inch (DPI) value used in printing. This value represents a measure of the resolution of the document.
     *
     * @return self
     */
    public function setDpi(?int $dpi): self
    {
        if (is_null($dpi)) {
            array_push($this->openAPINullablesSetToNull, 'dpi');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('dpi', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['dpi'] = $dpi;

        return $this;
    }

    /**
     * Gets page_layout
     *
     * @return string|null
     */
    public function getPageLayout(): ?string
    {
        return $this->container['page_layout'];
    }

    /**
     * Sets page_layout
     *
     * @param string|null $page_layout Indicates the position of the label on the paper. Should be the same value as returned in getRates response.
     *
     * @return self
     */
    public function setPageLayout(?string $page_layout): self
    {
        if (is_null($page_layout)) {
            array_push($this->openAPINullablesSetToNull, 'page_layout');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('page_layout', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['page_layout'] = $page_layout;

        return $this;
    }

    /**
     * Gets need_file_joining
     *
     * @return bool
     */
    public function getNeedFileJoining(): bool
    {
        return $this->container['need_file_joining'];
    }

    /**
     * Sets need_file_joining
     *
     * @param bool $need_file_joining When true, files should be stitched together. Otherwise, files should be returned separately. Defaults to false.
     *
     * @return self
     */
    public function setNeedFileJoining(bool $need_file_joining): self
    {
        if (is_null($need_file_joining)) {
            throw new \InvalidArgumentException('non-nullable need_file_joining cannot be null');
        }
        $this->container['need_file_joining'] = $need_file_joining;

        return $this;
    }

    /**
     * Gets requested_document_types
     *
     * @return array
     */
    public function getRequestedDocumentTypes(): array
    {
        return $this->container['requested_document_types'];
    }

    /**
     * Sets requested_document_types
     *
     * @param array $requested_document_types A list of the document types requested.
     *
     * @return self
     */
    public function setRequestedDocumentTypes(array $requested_document_types): self
    {
        if (is_null($requested_document_types)) {
            throw new \InvalidArgumentException('non-nullable requested_document_types cannot be null');
        }
        $this->container['requested_document_types'] = $requested_document_types;

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


