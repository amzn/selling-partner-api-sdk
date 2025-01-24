<?php
/**
 * Item
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Fulfillment Inbound v2024-03-20
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

namespace OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * Item Class Doc Comment
 *
 * @category Class
 * @description Information associated with a single SKU in the seller&#39;s catalog.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class Item implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'Item';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'asin' => 'string',
             'expiration' => 'string',
             'fnsku' => 'string',
             'label_owner' => 'string',
             'manufacturing_lot_code' => 'string',
             'msku' => 'string',
             'prep_instructions' => '\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\PrepInstruction[]',
             'quantity' => 'int'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'asin' => null,
            'expiration' => null,
            'fnsku' => null,
            'label_owner' => null,
            'manufacturing_lot_code' => null,
            'msku' => null,
            'prep_instructions' => null,
            'quantity' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'asin' => false,
        'expiration' => true,
        'fnsku' => false,
        'label_owner' => false,
        'manufacturing_lot_code' => true,
        'msku' => false,
        'prep_instructions' => false,
        'quantity' => false
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
        'asin' => 'asin',
                'expiration' => 'expiration',
                'fnsku' => 'fnsku',
                'label_owner' => 'labelOwner',
                'manufacturing_lot_code' => 'manufacturingLotCode',
                'msku' => 'msku',
                'prep_instructions' => 'prepInstructions',
                'quantity' => 'quantity'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'asin' => 'setAsin',
        'expiration' => 'setExpiration',
        'fnsku' => 'setFnsku',
        'label_owner' => 'setLabelOwner',
        'manufacturing_lot_code' => 'setManufacturingLotCode',
        'msku' => 'setMsku',
        'prep_instructions' => 'setPrepInstructions',
        'quantity' => 'setQuantity'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'asin' => 'getAsin',
        'expiration' => 'getExpiration',
        'fnsku' => 'getFnsku',
        'label_owner' => 'getLabelOwner',
        'manufacturing_lot_code' => 'getManufacturingLotCode',
        'msku' => 'getMsku',
        'prep_instructions' => 'getPrepInstructions',
        'quantity' => 'getQuantity'
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
        $this->setIfExists('expiration', $data ?? [], null);
        $this->setIfExists('fnsku', $data ?? [], null);
        $this->setIfExists('label_owner', $data ?? [], null);
        $this->setIfExists('manufacturing_lot_code', $data ?? [], null);
        $this->setIfExists('msku', $data ?? [], null);
        $this->setIfExists('prep_instructions', $data ?? [], null);
        $this->setIfExists('quantity', $data ?? [], null);
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

        if ($this->container['asin'] === null) {
            $invalidProperties[] = "'asin' can't be null";
        }
        if ((mb_strlen($this->container['asin']) > 10)) {
            $invalidProperties[] = "invalid value for 'asin', the character length must be smaller than or equal to 10.";
        }

        if ((mb_strlen($this->container['asin']) < 1)) {
            $invalidProperties[] = "invalid value for 'asin', the character length must be bigger than or equal to 1.";
        }

        if (!is_null($this->container['expiration']) && !preg_match("/^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/", $this->container['expiration'])) {
            $invalidProperties[] = "invalid value for 'expiration', must be conform to the pattern /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.";
        }

        if ($this->container['fnsku'] === null) {
            $invalidProperties[] = "'fnsku' can't be null";
        }
        if ((mb_strlen($this->container['fnsku']) > 10)) {
            $invalidProperties[] = "invalid value for 'fnsku', the character length must be smaller than or equal to 10.";
        }

        if ((mb_strlen($this->container['fnsku']) < 1)) {
            $invalidProperties[] = "invalid value for 'fnsku', the character length must be bigger than or equal to 1.";
        }

        if ($this->container['label_owner'] === null) {
            $invalidProperties[] = "'label_owner' can't be null";
        }
        if ((mb_strlen($this->container['label_owner']) > 1024)) {
            $invalidProperties[] = "invalid value for 'label_owner', the character length must be smaller than or equal to 1024.";
        }

        if ((mb_strlen($this->container['label_owner']) < 1)) {
            $invalidProperties[] = "invalid value for 'label_owner', the character length must be bigger than or equal to 1.";
        }

        if (!is_null($this->container['manufacturing_lot_code']) && (mb_strlen($this->container['manufacturing_lot_code']) > 256)) {
            $invalidProperties[] = "invalid value for 'manufacturing_lot_code', the character length must be smaller than or equal to 256.";
        }

        if (!is_null($this->container['manufacturing_lot_code']) && (mb_strlen($this->container['manufacturing_lot_code']) < 1)) {
            $invalidProperties[] = "invalid value for 'manufacturing_lot_code', the character length must be bigger than or equal to 1.";
        }

        if ($this->container['msku'] === null) {
            $invalidProperties[] = "'msku' can't be null";
        }
        if ((mb_strlen($this->container['msku']) > 40)) {
            $invalidProperties[] = "invalid value for 'msku', the character length must be smaller than or equal to 40.";
        }

        if ((mb_strlen($this->container['msku']) < 1)) {
            $invalidProperties[] = "invalid value for 'msku', the character length must be bigger than or equal to 1.";
        }

        if ($this->container['prep_instructions'] === null) {
            $invalidProperties[] = "'prep_instructions' can't be null";
        }
        if ($this->container['quantity'] === null) {
            $invalidProperties[] = "'quantity' can't be null";
        }
        if (($this->container['quantity'] > 10000)) {
            $invalidProperties[] = "invalid value for 'quantity', must be smaller than or equal to 10000.";
        }

        if (($this->container['quantity'] < 1)) {
            $invalidProperties[] = "invalid value for 'quantity', must be bigger than or equal to 1.";
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
     * Gets asin
     *
     * @return string
     */
    public function getAsin(): string
    {
        return $this->container['asin'];
    }

    /**
     * Sets asin
     *
     * @param string $asin The Amazon Standard Identification Number (ASIN) of the item.
     *
     * @return self
     */
    public function setAsin(string $asin): self
    {
        if (is_null($asin)) {
            throw new \InvalidArgumentException('non-nullable asin cannot be null');
        }
        if ((mb_strlen($asin) > 10)) {
            throw new \InvalidArgumentException('invalid length for $asin when calling Item., must be smaller than or equal to 10.');
        }
        if ((mb_strlen($asin) < 1)) {
            throw new \InvalidArgumentException('invalid length for $asin when calling Item., must be bigger than or equal to 1.');
        }

        $this->container['asin'] = $asin;

        return $this;
    }

    /**
     * Gets expiration
     *
     * @return string|null
     */
    public function getExpiration(): ?string
    {
        return $this->container['expiration'];
    }

    /**
     * Sets expiration
     *
     * @param string|null $expiration The expiration date of the MSKU. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern`YYYY-MM-DD`. The same MSKU with different expiration dates cannot go into the same box.
     *
     * @return self
     */
    public function setExpiration(?string $expiration): self
    {
        if (is_null($expiration)) {
            array_push($this->openAPINullablesSetToNull, 'expiration');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('expiration', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }

        if (!is_null($expiration) && (!preg_match("/^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/", ObjectSerializer::toString($expiration)))) {
            throw new \InvalidArgumentException("invalid value for \$expiration when calling Item., must conform to the pattern /^([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.");
        }

        $this->container['expiration'] = $expiration;

        return $this;
    }

    /**
     * Gets fnsku
     *
     * @return string
     */
    public function getFnsku(): string
    {
        return $this->container['fnsku'];
    }

    /**
     * Sets fnsku
     *
     * @param string $fnsku A unique identifier assigned by Amazon to products stored in and fulfilled from an Amazon fulfillment center.
     *
     * @return self
     */
    public function setFnsku(string $fnsku): self
    {
        if (is_null($fnsku)) {
            throw new \InvalidArgumentException('non-nullable fnsku cannot be null');
        }
        if ((mb_strlen($fnsku) > 10)) {
            throw new \InvalidArgumentException('invalid length for $fnsku when calling Item., must be smaller than or equal to 10.');
        }
        if ((mb_strlen($fnsku) < 1)) {
            throw new \InvalidArgumentException('invalid length for $fnsku when calling Item., must be bigger than or equal to 1.');
        }

        $this->container['fnsku'] = $fnsku;

        return $this;
    }

    /**
     * Gets label_owner
     *
     * @return string
     */
    public function getLabelOwner(): string
    {
        return $this->container['label_owner'];
    }

    /**
     * Sets label_owner
     *
     * @param string $label_owner Specifies who will label the items. Options include `AMAZON`, `SELLER`, and `NONE`.
     *
     * @return self
     */
    public function setLabelOwner(string $label_owner): self
    {
        if (is_null($label_owner)) {
            throw new \InvalidArgumentException('non-nullable label_owner cannot be null');
        }
        if ((mb_strlen($label_owner) > 1024)) {
            throw new \InvalidArgumentException('invalid length for $label_owner when calling Item., must be smaller than or equal to 1024.');
        }
        if ((mb_strlen($label_owner) < 1)) {
            throw new \InvalidArgumentException('invalid length for $label_owner when calling Item., must be bigger than or equal to 1.');
        }

        $this->container['label_owner'] = $label_owner;

        return $this;
    }

    /**
     * Gets manufacturing_lot_code
     *
     * @return string|null
     */
    public function getManufacturingLotCode(): ?string
    {
        return $this->container['manufacturing_lot_code'];
    }

    /**
     * Sets manufacturing_lot_code
     *
     * @param string|null $manufacturing_lot_code The manufacturing lot code.
     *
     * @return self
     */
    public function setManufacturingLotCode(?string $manufacturing_lot_code): self
    {
        if (is_null($manufacturing_lot_code)) {
            array_push($this->openAPINullablesSetToNull, 'manufacturing_lot_code');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('manufacturing_lot_code', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        if (!is_null($manufacturing_lot_code) && (mb_strlen($manufacturing_lot_code) > 256)) {
            throw new \InvalidArgumentException('invalid length for $manufacturing_lot_code when calling Item., must be smaller than or equal to 256.');
        }
        if (!is_null($manufacturing_lot_code) && (mb_strlen($manufacturing_lot_code) < 1)) {
            throw new \InvalidArgumentException('invalid length for $manufacturing_lot_code when calling Item., must be bigger than or equal to 1.');
        }

        $this->container['manufacturing_lot_code'] = $manufacturing_lot_code;

        return $this;
    }

    /**
     * Gets msku
     *
     * @return string
     */
    public function getMsku(): string
    {
        return $this->container['msku'];
    }

    /**
     * Sets msku
     *
     * @param string $msku The merchant SKU, a merchant-supplied identifier of a specific SKU.
     *
     * @return self
     */
    public function setMsku(string $msku): self
    {
        if (is_null($msku)) {
            throw new \InvalidArgumentException('non-nullable msku cannot be null');
        }
        if ((mb_strlen($msku) > 40)) {
            throw new \InvalidArgumentException('invalid length for $msku when calling Item., must be smaller than or equal to 40.');
        }
        if ((mb_strlen($msku) < 1)) {
            throw new \InvalidArgumentException('invalid length for $msku when calling Item., must be bigger than or equal to 1.');
        }

        $this->container['msku'] = $msku;

        return $this;
    }

    /**
     * Gets prep_instructions
     *
     * @return array
     */
    public function getPrepInstructions(): array
    {
        return $this->container['prep_instructions'];
    }

    /**
     * Sets prep_instructions
     *
     * @param array $prep_instructions Special preparations that are required for an item.
     *
     * @return self
     */
    public function setPrepInstructions(array $prep_instructions): self
    {
        if (is_null($prep_instructions)) {
            throw new \InvalidArgumentException('non-nullable prep_instructions cannot be null');
        }
        $this->container['prep_instructions'] = $prep_instructions;

        return $this;
    }

    /**
     * Gets quantity
     *
     * @return int
     */
    public function getQuantity(): int
    {
        return $this->container['quantity'];
    }

    /**
     * Sets quantity
     *
     * @param int $quantity The number of the specified MSKU.
     *
     * @return self
     */
    public function setQuantity(int $quantity): self
    {
        if (is_null($quantity)) {
            throw new \InvalidArgumentException('non-nullable quantity cannot be null');
        }

        if (($quantity > 10000)) {
            throw new \InvalidArgumentException('invalid value for $quantity when calling Item., must be smaller than or equal to 10000.');
        }
        if (($quantity < 1)) {
            throw new \InvalidArgumentException('invalid value for $quantity when calling Item., must be bigger than or equal to 1.');
        }

        $this->container['quantity'] = $quantity;

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


