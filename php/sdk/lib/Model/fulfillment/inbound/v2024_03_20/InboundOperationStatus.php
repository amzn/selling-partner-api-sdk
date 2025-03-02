<?php
/**
 * InboundOperationStatus
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * The Selling Partner API for FBA inbound operations.
 *
 * The Selling Partner API for Fulfillment By Amazon (FBA) Inbound. The FBA Inbound API enables building inbound workflows to create, manage, and send shipments into Amazon's fulfillment network. The API has interoperability with the Send-to-Amazon user interface.
 *
 * The version of the OpenAPI document: 2024-03-20
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\fulfillment\inbound\v2024_03_20;

use
ArrayAccess;
use SpApi\ObjectSerializer;
use SpApi\Model\ModelInterface;

/**
 * InboundOperationStatus Class Doc Comment
 *
 * @category Class
 * @description GetInboundOperationStatus response.
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class InboundOperationStatus implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'InboundOperationStatus';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'operation' => 'string',
             'operation_id' => 'string',
             'operation_problems' => '\SpApi\Model\fulfillment\inbound\v2024_03_20\OperationProblem[]',
             'operation_status' => '\SpApi\Model\fulfillment\inbound\v2024_03_20\OperationStatus'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'operation' => null,
            'operation_id' => null,
            'operation_problems' => null,
            'operation_status' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'operation' => false,
        'operation_id' => false,
        'operation_problems' => false,
        'operation_status' => false
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
        'operation' => 'operation',
                'operation_id' => 'operationId',
                'operation_problems' => 'operationProblems',
                'operation_status' => 'operationStatus'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'operation' => 'setOperation',
        'operation_id' => 'setOperationId',
        'operation_problems' => 'setOperationProblems',
        'operation_status' => 'setOperationStatus'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'operation' => 'getOperation',
        'operation_id' => 'getOperationId',
        'operation_problems' => 'getOperationProblems',
        'operation_status' => 'getOperationStatus'
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
        $this->setIfExists('operation', $data ?? [], null);
        $this->setIfExists('operation_id', $data ?? [], null);
        $this->setIfExists('operation_problems', $data ?? [], null);
        $this->setIfExists('operation_status', $data ?? [], null);
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

        if ($this->container['operation'] === null) {
            $invalidProperties[] = "'operation' can't be null";
        }
        if ((mb_strlen($this->container['operation']) > 1024)) {
            $invalidProperties[] = "invalid value for 'operation', the character length must be smaller than or equal to 1024.";
        }

        if ((mb_strlen($this->container['operation']) < 1)) {
            $invalidProperties[] = "invalid value for 'operation', the character length must be bigger than or equal to 1.";
        }

        if ($this->container['operation_id'] === null) {
            $invalidProperties[] = "'operation_id' can't be null";
        }
        if ((mb_strlen($this->container['operation_id']) > 38)) {
            $invalidProperties[] = "invalid value for 'operation_id', the character length must be smaller than or equal to 38.";
        }

        if ((mb_strlen($this->container['operation_id']) < 36)) {
            $invalidProperties[] = "invalid value for 'operation_id', the character length must be bigger than or equal to 36.";
        }

        if (!preg_match("/^[a-zA-Z0-9-]*$/", $this->container['operation_id'])) {
            $invalidProperties[] = "invalid value for 'operation_id', must be conform to the pattern /^[a-zA-Z0-9-]*$/.";
        }

        if ($this->container['operation_problems'] === null) {
            $invalidProperties[] = "'operation_problems' can't be null";
        }
        if ($this->container['operation_status'] === null) {
            $invalidProperties[] = "'operation_status' can't be null";
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
     * Gets operation
     *
     * @return string
     */
    public function getOperation(): string
    {
        return $this->container['operation'];
    }

    /**
     * Sets operation
     *
     * @param string $operation The name of the operation in the asynchronous API call.
     *
     * @return self
     */
    public function setOperation(string $operation): self
    {
        if (is_null($operation)) {
            throw new \InvalidArgumentException('non-nullable operation cannot be null');
        }
        if ((mb_strlen($operation) > 1024)) {
            throw new \InvalidArgumentException('invalid length for $operation when calling InboundOperationStatus., must be smaller than or equal to 1024.');
        }
        if ((mb_strlen($operation) < 1)) {
            throw new \InvalidArgumentException('invalid length for $operation when calling InboundOperationStatus., must be bigger than or equal to 1.');
        }

        $this->container['operation'] = $operation;

        return $this;
    }

    /**
     * Gets operation_id
     *
     * @return string
     */
    public function getOperationId(): string
    {
        return $this->container['operation_id'];
    }

    /**
     * Sets operation_id
     *
     * @param string $operation_id The operation ID returned by the asynchronous API call.
     *
     * @return self
     */
    public function setOperationId(string $operation_id): self
    {
        if (is_null($operation_id)) {
            throw new \InvalidArgumentException('non-nullable operation_id cannot be null');
        }
        if ((mb_strlen($operation_id) > 38)) {
            throw new \InvalidArgumentException('invalid length for $operation_id when calling InboundOperationStatus., must be smaller than or equal to 38.');
        }
        if ((mb_strlen($operation_id) < 36)) {
            throw new \InvalidArgumentException('invalid length for $operation_id when calling InboundOperationStatus., must be bigger than or equal to 36.');
        }
        if ((!preg_match("/^[a-zA-Z0-9-]*$/", ObjectSerializer::toString($operation_id)))) {
            throw new \InvalidArgumentException("invalid value for \$operation_id when calling InboundOperationStatus., must conform to the pattern /^[a-zA-Z0-9-]*$/.");
        }

        $this->container['operation_id'] = $operation_id;

        return $this;
    }

    /**
     * Gets operation_problems
     *
     * @return array
     */
    public function getOperationProblems(): array
    {
        return $this->container['operation_problems'];
    }

    /**
     * Sets operation_problems
     *
     * @param array $operation_problems The problems in the processing of the asynchronous operation.
     *
     * @return self
     */
    public function setOperationProblems(array $operation_problems): self
    {
        if (is_null($operation_problems)) {
            throw new \InvalidArgumentException('non-nullable operation_problems cannot be null');
        }
        $this->container['operation_problems'] = $operation_problems;

        return $this;
    }

    /**
     * Gets operation_status
     *
     * @return string
     */
    public function getOperationStatus(): string
    {
        return $this->container['operation_status'];
    }

    /**
     * Sets operation_status
     *
     * @param string $operation_status operation_status
     *
     * @return self
     */
    public function setOperationStatus(string $operation_status): self
    {
        if (is_null($operation_status)) {
            throw new \InvalidArgumentException('non-nullable operation_status cannot be null');
        }
        $this->container['operation_status'] = $operation_status;

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


