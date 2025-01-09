<?php
/**
 * GetPreorderInfoResult
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
 * GetPreorderInfoResult Class Doc Comment
 *
 * @category Class
 * @description Result for the get preorder info operation
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class GetPreorderInfoResult implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'GetPreorderInfoResult';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'shipment_contains_preorderable_items' => 'bool',
             'shipment_confirmed_for_preorder' => 'bool',
             'need_by_date' => '\DateTime',
             'confirmed_fulfillable_date' => '\DateTime'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'shipment_contains_preorderable_items' => null,
            'shipment_confirmed_for_preorder' => null,
            'need_by_date' => 'date',
            'confirmed_fulfillable_date' => 'date'    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'shipment_contains_preorderable_items' => true,
        'shipment_confirmed_for_preorder' => true,
        'need_by_date' => true,
        'confirmed_fulfillable_date' => true
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
        'shipment_contains_preorderable_items' => 'ShipmentContainsPreorderableItems',
                'shipment_confirmed_for_preorder' => 'ShipmentConfirmedForPreorder',
                'need_by_date' => 'NeedByDate',
                'confirmed_fulfillable_date' => 'ConfirmedFulfillableDate'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'shipment_contains_preorderable_items' => 'setShipmentContainsPreorderableItems',
        'shipment_confirmed_for_preorder' => 'setShipmentConfirmedForPreorder',
        'need_by_date' => 'setNeedByDate',
        'confirmed_fulfillable_date' => 'setConfirmedFulfillableDate'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'shipment_contains_preorderable_items' => 'getShipmentContainsPreorderableItems',
        'shipment_confirmed_for_preorder' => 'getShipmentConfirmedForPreorder',
        'need_by_date' => 'getNeedByDate',
        'confirmed_fulfillable_date' => 'getConfirmedFulfillableDate'
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
        $this->setIfExists('shipment_contains_preorderable_items', $data ?? [], null);
        $this->setIfExists('shipment_confirmed_for_preorder', $data ?? [], null);
        $this->setIfExists('need_by_date', $data ?? [], null);
        $this->setIfExists('confirmed_fulfillable_date', $data ?? [], null);
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
     * Gets shipment_contains_preorderable_items
     *
     * @return bool|null
     */
    public function getShipmentContainsPreorderableItems(): ?bool
    {
        return $this->container['shipment_contains_preorderable_items'];
    }

    /**
     * Sets shipment_contains_preorderable_items
     *
     * @param bool|null $shipment_contains_preorderable_items Indicates whether the shipment contains items that have been enabled for pre-order. For more information about enabling items for pre-order, see the Seller Central Help.
     *
     * @return self
     */
    public function setShipmentContainsPreorderableItems(?bool $shipment_contains_preorderable_items): self
    {
        if (is_null($shipment_contains_preorderable_items)) {
            array_push($this->openAPINullablesSetToNull, 'shipment_contains_preorderable_items');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipment_contains_preorderable_items', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['shipment_contains_preorderable_items'] = $shipment_contains_preorderable_items;

        return $this;
    }

    /**
     * Gets shipment_confirmed_for_preorder
     *
     * @return bool|null
     */
    public function getShipmentConfirmedForPreorder(): ?bool
    {
        return $this->container['shipment_confirmed_for_preorder'];
    }

    /**
     * Sets shipment_confirmed_for_preorder
     *
     * @param bool|null $shipment_confirmed_for_preorder Indicates whether this shipment has been confirmed for pre-order.
     *
     * @return self
     */
    public function setShipmentConfirmedForPreorder(?bool $shipment_confirmed_for_preorder): self
    {
        if (is_null($shipment_confirmed_for_preorder)) {
            array_push($this->openAPINullablesSetToNull, 'shipment_confirmed_for_preorder');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipment_confirmed_for_preorder', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['shipment_confirmed_for_preorder'] = $shipment_confirmed_for_preorder;

        return $this;
    }

    /**
     * Gets need_by_date
     *
     * @return \DateTime|null
     */
    public function getNeedByDate(): ?\DateTime
    {
        return $this->container['need_by_date'];
    }

    /**
     * Sets need_by_date
     *
     * @param \DateTime|null $need_by_date Type containing date in string format
     *
     * @return self
     */
    public function setNeedByDate(?\DateTime $need_by_date): self
    {
        if (is_null($need_by_date)) {
            array_push($this->openAPINullablesSetToNull, 'need_by_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('need_by_date', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['need_by_date'] = $need_by_date;

        return $this;
    }

    /**
     * Gets confirmed_fulfillable_date
     *
     * @return \DateTime|null
     */
    public function getConfirmedFulfillableDate(): ?\DateTime
    {
        return $this->container['confirmed_fulfillable_date'];
    }

    /**
     * Sets confirmed_fulfillable_date
     *
     * @param \DateTime|null $confirmed_fulfillable_date Type containing date in string format
     *
     * @return self
     */
    public function setConfirmedFulfillableDate(?\DateTime $confirmed_fulfillable_date): self
    {
        if (is_null($confirmed_fulfillable_date)) {
            array_push($this->openAPINullablesSetToNull, 'confirmed_fulfillable_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('confirmed_fulfillable_date', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['confirmed_fulfillable_date'] = $confirmed_fulfillable_date;

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


