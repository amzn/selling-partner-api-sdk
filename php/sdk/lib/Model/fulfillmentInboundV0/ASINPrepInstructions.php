<?php
/**
 * ASINPrepInstructions
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Fulfillment Inbound
 *
 * The Selling Partner API for Fulfillment Inbound lets you create applications that create and update inbound shipments of inventory to Amazon's fulfillment network.
 *
 * The version of the OpenAPI document: v0
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\fulfillmentInboundV0;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * ASINPrepInstructions Class Doc Comment
 *
 * @category Class
 * @description Item preparation instructions to help with item sourcing decisions.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ASINPrepInstructions implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'ASINPrepInstructions';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'asin' => 'string',
             'barcode_instruction' => '\OpenAPI\Client\Model\fulfillmentInboundV0\BarcodeInstruction',
             'prep_guidance' => '\OpenAPI\Client\Model\fulfillmentInboundV0\PrepGuidance',
             'prep_instruction_list' => '\OpenAPI\Client\Model\fulfillmentInboundV0\PrepInstruction[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'asin' => null,
            'barcode_instruction' => null,
            'prep_guidance' => null,
            'prep_instruction_list' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'asin' => true,
        'barcode_instruction' => true,
        'prep_guidance' => true,
        'prep_instruction_list' => true
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
        'asin' => 'ASIN',
                'barcode_instruction' => 'BarcodeInstruction',
                'prep_guidance' => 'PrepGuidance',
                'prep_instruction_list' => 'PrepInstructionList'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'asin' => 'setAsin',
        'barcode_instruction' => 'setBarcodeInstruction',
        'prep_guidance' => 'setPrepGuidance',
        'prep_instruction_list' => 'setPrepInstructionList'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'asin' => 'getAsin',
        'barcode_instruction' => 'getBarcodeInstruction',
        'prep_guidance' => 'getPrepGuidance',
        'prep_instruction_list' => 'getPrepInstructionList'
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
        $this->setIfExists('asin', $data ?? [], null);
        $this->setIfExists('barcode_instruction', $data ?? [], null);
        $this->setIfExists('prep_guidance', $data ?? [], null);
        $this->setIfExists('prep_instruction_list', $data ?? [], null);
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
     * Gets asin
     *
     * @return string|null
     */
    public function getAsin(): ?string
    {
        return $this->container['asin'];
    }

    /**
     * Sets asin
     *
     * @param string|null $asin The Amazon Standard Identification Number (ASIN) of the item.
     *
     * @return self
     */
    public function setAsin(?string $asin): self
    {
        if (is_null($asin)) {
            array_push($this->openAPINullablesSetToNull, 'asin');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('asin', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['asin'] = $asin;

        return $this;
    }

    /**
     * Gets barcode_instruction
     *
     * @return string|null
     */
    public function getBarcodeInstruction(): ?string
    {
        return $this->container['barcode_instruction'];
    }

    /**
     * Sets barcode_instruction
     *
     * @param string|null $barcode_instruction barcode_instruction
     *
     * @return self
     */
    public function setBarcodeInstruction(?string $barcode_instruction): self
    {
        if (is_null($barcode_instruction)) {
            array_push($this->openAPINullablesSetToNull, 'barcode_instruction');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('barcode_instruction', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['barcode_instruction'] = $barcode_instruction;

        return $this;
    }

    /**
     * Gets prep_guidance
     *
     * @return string|null
     */
    public function getPrepGuidance(): ?string
    {
        return $this->container['prep_guidance'];
    }

    /**
     * Sets prep_guidance
     *
     * @param string|null $prep_guidance prep_guidance
     *
     * @return self
     */
    public function setPrepGuidance(?string $prep_guidance): self
    {
        if (is_null($prep_guidance)) {
            array_push($this->openAPINullablesSetToNull, 'prep_guidance');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('prep_guidance', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['prep_guidance'] = $prep_guidance;

        return $this;
    }

    /**
     * Gets prep_instruction_list
     *
     * @return array|null
     */
    public function getPrepInstructionList(): ?array
    {
        return $this->container['prep_instruction_list'];
    }

    /**
     * Sets prep_instruction_list
     *
     * @param array|null $prep_instruction_list A list of preparation instructions to help with item sourcing decisions.
     *
     * @return self
     */
    public function setPrepInstructionList(?array $prep_instruction_list): self
    {
        if (is_null($prep_instruction_list)) {
            array_push($this->openAPINullablesSetToNull, 'prep_instruction_list');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('prep_instruction_list', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['prep_instruction_list'] = $prep_instruction_list;

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


