<?php
/**
 * CreateInboundPlanRequest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
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

namespace OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * CreateInboundPlanRequest Class Doc Comment
 *
 * @category Class
 * @description The &#x60;createInboundPlan&#x60; request.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class CreateInboundPlanRequest implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'CreateInboundPlanRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'destination_marketplaces' => 'string[]',
             'items' => '\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ItemInput[]',
             'name' => 'string',
             'source_address' => '\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\AddressInput'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'destination_marketplaces' => null,
            'items' => null,
            'name' => null,
            'source_address' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'destination_marketplaces' => false,
        'items' => false,
        'name' => true,
        'source_address' => false
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
        'destination_marketplaces' => 'destinationMarketplaces',
                'items' => 'items',
                'name' => 'name',
                'source_address' => 'sourceAddress'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'destination_marketplaces' => 'setDestinationMarketplaces',
        'items' => 'setItems',
        'name' => 'setName',
        'source_address' => 'setSourceAddress'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'destination_marketplaces' => 'getDestinationMarketplaces',
        'items' => 'getItems',
        'name' => 'getName',
        'source_address' => 'getSourceAddress'
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
        $this->setIfExists('destination_marketplaces', $data ?? [], null);
        $this->setIfExists('items', $data ?? [], null);
        $this->setIfExists('name', $data ?? [], null);
        $this->setIfExists('source_address', $data ?? [], null);
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

        if ($this->container['destination_marketplaces'] === null) {
            $invalidProperties[] = "'destination_marketplaces' can't be null";
        }
        if ((count($this->container['destination_marketplaces']) > 1)) {
            $invalidProperties[] = "invalid value for 'destination_marketplaces', number of items must be less than or equal to 1.";
        }

        if ((count($this->container['destination_marketplaces']) < 1)) {
            $invalidProperties[] = "invalid value for 'destination_marketplaces', number of items must be greater than or equal to 1.";
        }

        if ($this->container['items'] === null) {
            $invalidProperties[] = "'items' can't be null";
        }
        if ((count($this->container['items']) > 2000)) {
            $invalidProperties[] = "invalid value for 'items', number of items must be less than or equal to 2000.";
        }

        if ((count($this->container['items']) < 1)) {
            $invalidProperties[] = "invalid value for 'items', number of items must be greater than or equal to 1.";
        }

        if (!is_null($this->container['name']) && (mb_strlen($this->container['name']) > 40)) {
            $invalidProperties[] = "invalid value for 'name', the character length must be smaller than or equal to 40.";
        }

        if (!is_null($this->container['name']) && (mb_strlen($this->container['name']) < 1)) {
            $invalidProperties[] = "invalid value for 'name', the character length must be bigger than or equal to 1.";
        }

        if ($this->container['source_address'] === null) {
            $invalidProperties[] = "'source_address' can't be null";
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
     * Gets destination_marketplaces
     *
     * @return array
     */
    public function getDestinationMarketplaces(): array
    {
        return $this->container['destination_marketplaces'];
    }

    /**
     * Sets destination_marketplaces
     *
     * @param array $destination_marketplaces Marketplaces where the items need to be shipped to. Currently only one marketplace can be selected in this request.
     *
     * @return self
     */
    public function setDestinationMarketplaces(array $destination_marketplaces): self
    {
        if (is_null($destination_marketplaces)) {
            throw new \InvalidArgumentException('non-nullable destination_marketplaces cannot be null');
        }

        if ((count($destination_marketplaces) > 1)) {
            throw new \InvalidArgumentException('invalid value for $destination_marketplaces when calling CreateInboundPlanRequest., number of items must be less than or equal to 1.');
        }
        if ((count($destination_marketplaces) < 1)) {
            throw new \InvalidArgumentException('invalid length for $destination_marketplaces when calling CreateInboundPlanRequest., number of items must be greater than or equal to 1.');
        }
        $this->container['destination_marketplaces'] = $destination_marketplaces;

        return $this;
    }

    /**
     * Gets items
     *
     * @return array
     */
    public function getItems(): array
    {
        return $this->container['items'];
    }

    /**
     * Sets items
     *
     * @param array $items Items included in this plan.
     *
     * @return self
     */
    public function setItems(array $items): self
    {
        if (is_null($items)) {
            throw new \InvalidArgumentException('non-nullable items cannot be null');
        }

        if ((count($items) > 2000)) {
            throw new \InvalidArgumentException('invalid value for $items when calling CreateInboundPlanRequest., number of items must be less than or equal to 2000.');
        }
        if ((count($items) < 1)) {
            throw new \InvalidArgumentException('invalid length for $items when calling CreateInboundPlanRequest., number of items must be greater than or equal to 1.');
        }
        $this->container['items'] = $items;

        return $this;
    }

    /**
     * Gets name
     *
     * @return string|null
     */
    public function getName(): ?string
    {
        return $this->container['name'];
    }

    /**
     * Sets name
     *
     * @param string|null $name Name for the Inbound Plan. If one isn't provided, a default name will be provided.
     *
     * @return self
     */
    public function setName(?string $name): self
    {
        if (is_null($name)) {
            array_push($this->openAPINullablesSetToNull, 'name');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('name', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        if (!is_null($name) && (mb_strlen($name) > 40)) {
            throw new \InvalidArgumentException('invalid length for $name when calling CreateInboundPlanRequest., must be smaller than or equal to 40.');
        }
        if (!is_null($name) && (mb_strlen($name) < 1)) {
            throw new \InvalidArgumentException('invalid length for $name when calling CreateInboundPlanRequest., must be bigger than or equal to 1.');
        }

        $this->container['name'] = $name;

        return $this;
    }

    /**
     * Gets source_address
     *
     * @return \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\AddressInput
     */
    public function getSourceAddress(): \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\AddressInput
    {
        return $this->container['source_address'];
    }

    /**
     * Sets source_address
     *
     * @param \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\AddressInput $source_address source_address
     *
     * @return self
     */
    public function setSourceAddress(\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\AddressInput $source_address): self
    {
        if (is_null($source_address)) {
            throw new \InvalidArgumentException('non-nullable source_address cannot be null');
        }
        $this->container['source_address'] = $source_address;

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


