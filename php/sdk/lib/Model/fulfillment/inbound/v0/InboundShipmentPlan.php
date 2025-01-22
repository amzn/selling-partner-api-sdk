<?php
/**
 * InboundShipmentPlan
 *
 * PHP version 8.3
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

namespace OpenAPI\Client\Model\fulfillment\inbound\v0;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * InboundShipmentPlan Class Doc Comment
 *
 * @category Class
 * @description Inbound shipment information used to create an inbound shipment. Returned by the createInboundShipmentPlan operation.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class InboundShipmentPlan implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'InboundShipmentPlan';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'shipment_id' => 'string',
             'destination_fulfillment_center_id' => 'string',
             'ship_to_address' => '\OpenAPI\Client\Model\fulfillment\inbound\v0\Address',
             'label_prep_type' => '\OpenAPI\Client\Model\fulfillment\inbound\v0\LabelPrepType',
             'items' => '\OpenAPI\Client\Model\fulfillment\inbound\v0\InboundShipmentPlanItem[]',
             'estimated_box_contents_fee' => '\OpenAPI\Client\Model\fulfillment\inbound\v0\BoxContentsFeeDetails'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'shipment_id' => null,
            'destination_fulfillment_center_id' => null,
            'ship_to_address' => null,
            'label_prep_type' => null,
            'items' => null,
            'estimated_box_contents_fee' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'shipment_id' => false,
        'destination_fulfillment_center_id' => false,
        'ship_to_address' => false,
        'label_prep_type' => false,
        'items' => false,
        'estimated_box_contents_fee' => true
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
        'shipment_id' => 'ShipmentId',
                'destination_fulfillment_center_id' => 'DestinationFulfillmentCenterId',
                'ship_to_address' => 'ShipToAddress',
                'label_prep_type' => 'LabelPrepType',
                'items' => 'Items',
                'estimated_box_contents_fee' => 'EstimatedBoxContentsFee'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'shipment_id' => 'setShipmentId',
        'destination_fulfillment_center_id' => 'setDestinationFulfillmentCenterId',
        'ship_to_address' => 'setShipToAddress',
        'label_prep_type' => 'setLabelPrepType',
        'items' => 'setItems',
        'estimated_box_contents_fee' => 'setEstimatedBoxContentsFee'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'shipment_id' => 'getShipmentId',
        'destination_fulfillment_center_id' => 'getDestinationFulfillmentCenterId',
        'ship_to_address' => 'getShipToAddress',
        'label_prep_type' => 'getLabelPrepType',
        'items' => 'getItems',
        'estimated_box_contents_fee' => 'getEstimatedBoxContentsFee'
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
        $this->setIfExists('shipment_id', $data ?? [], null);
        $this->setIfExists('destination_fulfillment_center_id', $data ?? [], null);
        $this->setIfExists('ship_to_address', $data ?? [], null);
        $this->setIfExists('label_prep_type', $data ?? [], null);
        $this->setIfExists('items', $data ?? [], null);
        $this->setIfExists('estimated_box_contents_fee', $data ?? [], null);
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

        if ($this->container['shipment_id'] === null) {
            $invalidProperties[] = "'shipment_id' can't be null";
        }
        if ($this->container['destination_fulfillment_center_id'] === null) {
            $invalidProperties[] = "'destination_fulfillment_center_id' can't be null";
        }
        if ($this->container['ship_to_address'] === null) {
            $invalidProperties[] = "'ship_to_address' can't be null";
        }
        if ($this->container['label_prep_type'] === null) {
            $invalidProperties[] = "'label_prep_type' can't be null";
        }
        if ($this->container['items'] === null) {
            $invalidProperties[] = "'items' can't be null";
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
     * Gets shipment_id
     *
     * @return string
     */
    public function getShipmentId(): string
    {
        return $this->container['shipment_id'];
    }

    /**
     * Sets shipment_id
     *
     * @param string $shipment_id A shipment identifier originally returned by the createInboundShipmentPlan operation.
     *
     * @return self
     */
    public function setShipmentId(string $shipment_id): self
    {
        if (is_null($shipment_id)) {
            throw new \InvalidArgumentException('non-nullable shipment_id cannot be null');
        }
        $this->container['shipment_id'] = $shipment_id;

        return $this;
    }

    /**
     * Gets destination_fulfillment_center_id
     *
     * @return string
     */
    public function getDestinationFulfillmentCenterId(): string
    {
        return $this->container['destination_fulfillment_center_id'];
    }

    /**
     * Sets destination_fulfillment_center_id
     *
     * @param string $destination_fulfillment_center_id An Amazon fulfillment center identifier created by Amazon.
     *
     * @return self
     */
    public function setDestinationFulfillmentCenterId(string $destination_fulfillment_center_id): self
    {
        if (is_null($destination_fulfillment_center_id)) {
            throw new \InvalidArgumentException('non-nullable destination_fulfillment_center_id cannot be null');
        }
        $this->container['destination_fulfillment_center_id'] = $destination_fulfillment_center_id;

        return $this;
    }

    /**
     * Gets ship_to_address
     *
     * @return \OpenAPI\Client\Model\fulfillment\inbound\v0\Address
     */
    public function getShipToAddress(): \OpenAPI\Client\Model\fulfillment\inbound\v0\Address
    {
        return $this->container['ship_to_address'];
    }

    /**
     * Sets ship_to_address
     *
     * @param \OpenAPI\Client\Model\fulfillment\inbound\v0\Address $ship_to_address ship_to_address
     *
     * @return self
     */
    public function setShipToAddress(\OpenAPI\Client\Model\fulfillment\inbound\v0\Address $ship_to_address): self
    {
        if (is_null($ship_to_address)) {
            throw new \InvalidArgumentException('non-nullable ship_to_address cannot be null');
        }
        $this->container['ship_to_address'] = $ship_to_address;

        return $this;
    }

    /**
     * Gets label_prep_type
     *
     * @return string
     */
    public function getLabelPrepType(): string
    {
        return $this->container['label_prep_type'];
    }

    /**
     * Sets label_prep_type
     *
     * @param string $label_prep_type label_prep_type
     *
     * @return self
     */
    public function setLabelPrepType(string $label_prep_type): self
    {
        if (is_null($label_prep_type)) {
            throw new \InvalidArgumentException('non-nullable label_prep_type cannot be null');
        }
        $this->container['label_prep_type'] = $label_prep_type;

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
     * @param array $items A list of inbound shipment plan item information.
     *
     * @return self
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
     * Gets estimated_box_contents_fee
     *
     * @return \OpenAPI\Client\Model\fulfillment\inbound\v0\BoxContentsFeeDetails|null
     */
    public function getEstimatedBoxContentsFee(): ?\OpenAPI\Client\Model\fulfillment\inbound\v0\BoxContentsFeeDetails
    {
        return $this->container['estimated_box_contents_fee'];
    }

    /**
     * Sets estimated_box_contents_fee
     *
     * @param \OpenAPI\Client\Model\fulfillment\inbound\v0\BoxContentsFeeDetails|null $estimated_box_contents_fee estimated_box_contents_fee
     *
     * @return self
     */
    public function setEstimatedBoxContentsFee(?\OpenAPI\Client\Model\fulfillment\inbound\v0\BoxContentsFeeDetails $estimated_box_contents_fee): self
    {
        if (is_null($estimated_box_contents_fee)) {
            array_push($this->openAPINullablesSetToNull, 'estimated_box_contents_fee');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('estimated_box_contents_fee', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['estimated_box_contents_fee'] = $estimated_box_contents_fee;

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


