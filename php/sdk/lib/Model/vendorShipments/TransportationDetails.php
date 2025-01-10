<?php
/**
 * TransportationDetails
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Vendor Shipments v1
 *
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
 *
 * The version of the OpenAPI document: v1
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\vendorShipments;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * TransportationDetails Class Doc Comment
 *
 * @category Class
 * @description Transportation details for this shipment.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class TransportationDetails implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'TransportationDetails';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'ship_mode' => 'string',
             'transportation_mode' => 'string',
             'shipped_date' => '\DateTime',
             'estimated_delivery_date' => '\DateTime',
             'shipment_delivery_date' => '\DateTime',
             'carrier_details' => '\OpenAPI\Client\Model\vendorShipments\CarrierDetails',
             'bill_of_lading_number' => 'string'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'ship_mode' => null,
            'transportation_mode' => null,
            'shipped_date' => 'date-time',
            'estimated_delivery_date' => 'date-time',
            'shipment_delivery_date' => 'date-time',
            'carrier_details' => null,
            'bill_of_lading_number' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'ship_mode' => true,
        'transportation_mode' => true,
        'shipped_date' => true,
        'estimated_delivery_date' => true,
        'shipment_delivery_date' => true,
        'carrier_details' => true,
        'bill_of_lading_number' => true
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
        'ship_mode' => 'shipMode',
                'transportation_mode' => 'transportationMode',
                'shipped_date' => 'shippedDate',
                'estimated_delivery_date' => 'estimatedDeliveryDate',
                'shipment_delivery_date' => 'shipmentDeliveryDate',
                'carrier_details' => 'carrierDetails',
                'bill_of_lading_number' => 'billOfLadingNumber'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'ship_mode' => 'setShipMode',
        'transportation_mode' => 'setTransportationMode',
        'shipped_date' => 'setShippedDate',
        'estimated_delivery_date' => 'setEstimatedDeliveryDate',
        'shipment_delivery_date' => 'setShipmentDeliveryDate',
        'carrier_details' => 'setCarrierDetails',
        'bill_of_lading_number' => 'setBillOfLadingNumber'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'ship_mode' => 'getShipMode',
        'transportation_mode' => 'getTransportationMode',
        'shipped_date' => 'getShippedDate',
        'estimated_delivery_date' => 'getEstimatedDeliveryDate',
        'shipment_delivery_date' => 'getShipmentDeliveryDate',
        'carrier_details' => 'getCarrierDetails',
        'bill_of_lading_number' => 'getBillOfLadingNumber'
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

    public const SHIP_MODE_TRUCK_LOAD = 'TruckLoad';
    public const SHIP_MODE_LESS_THAN_TRUCK_LOAD = 'LessThanTruckLoad';
    public const SHIP_MODE_SMALL_PARCEL = 'SmallParcel';
    public const TRANSPORTATION_MODE_ROAD = 'Road';
    public const TRANSPORTATION_MODE_AIR = 'Air';
    public const TRANSPORTATION_MODE_OCEAN = 'Ocean';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getShipModeAllowableValues(): array
    {
        return [
            self::SHIP_MODE_TRUCK_LOAD,
            self::SHIP_MODE_LESS_THAN_TRUCK_LOAD,
            self::SHIP_MODE_SMALL_PARCEL,
        ];
    }

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getTransportationModeAllowableValues(): array
    {
        return [
            self::TRANSPORTATION_MODE_ROAD,
            self::TRANSPORTATION_MODE_AIR,
            self::TRANSPORTATION_MODE_OCEAN,
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
        $this->setIfExists('ship_mode', $data ?? [], null);
        $this->setIfExists('transportation_mode', $data ?? [], null);
        $this->setIfExists('shipped_date', $data ?? [], null);
        $this->setIfExists('estimated_delivery_date', $data ?? [], null);
        $this->setIfExists('shipment_delivery_date', $data ?? [], null);
        $this->setIfExists('carrier_details', $data ?? [], null);
        $this->setIfExists('bill_of_lading_number', $data ?? [], null);
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

        $allowedValues = $this->getShipModeAllowableValues();
        if (!is_null($this->container['ship_mode']) && !in_array($this->container['ship_mode'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'ship_mode', must be one of '%s'",
                $this->container['ship_mode'],
                implode("', '", $allowedValues)
            );
        }

        $allowedValues = $this->getTransportationModeAllowableValues();
        if (!is_null($this->container['transportation_mode']) && !in_array($this->container['transportation_mode'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'transportation_mode', must be one of '%s'",
                $this->container['transportation_mode'],
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
     * Gets ship_mode
     *
     * @return string|null
     */
    public function getShipMode(): ?string
    {
        return $this->container['ship_mode'];
    }

    /**
     * Sets ship_mode
     *
     * @param string|null $ship_mode The type of shipment.
     *
     * @return self
     */
    public function setShipMode(?string $ship_mode): self
    {
        if (is_null($ship_mode)) {
            array_push($this->openAPINullablesSetToNull, 'ship_mode');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('ship_mode', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $allowedValues = $this->getShipModeAllowableValues();
        if (!is_null($ship_mode) && !in_array($ship_mode, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'ship_mode', must be one of '%s'",
                    $ship_mode,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['ship_mode'] = $ship_mode;

        return $this;
    }

    /**
     * Gets transportation_mode
     *
     * @return string|null
     */
    public function getTransportationMode(): ?string
    {
        return $this->container['transportation_mode'];
    }

    /**
     * Sets transportation_mode
     *
     * @param string|null $transportation_mode The mode of transportation for this shipment.
     *
     * @return self
     */
    public function setTransportationMode(?string $transportation_mode): self
    {
        if (is_null($transportation_mode)) {
            array_push($this->openAPINullablesSetToNull, 'transportation_mode');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('transportation_mode', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $allowedValues = $this->getTransportationModeAllowableValues();
        if (!is_null($transportation_mode) && !in_array($transportation_mode, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'transportation_mode', must be one of '%s'",
                    $transportation_mode,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['transportation_mode'] = $transportation_mode;

        return $this;
    }

    /**
     * Gets shipped_date
     *
     * @return \DateTime|null
     */
    public function getShippedDate(): ?\DateTime
    {
        return $this->container['shipped_date'];
    }

    /**
     * Sets shipped_date
     *
     * @param \DateTime|null $shipped_date Date when shipment is performed by the Vendor to Buyer
     *
     * @return self
     */
    public function setShippedDate(?\DateTime $shipped_date): self
    {
        if (is_null($shipped_date)) {
            array_push($this->openAPINullablesSetToNull, 'shipped_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipped_date', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['shipped_date'] = $shipped_date;

        return $this;
    }

    /**
     * Gets estimated_delivery_date
     *
     * @return \DateTime|null
     */
    public function getEstimatedDeliveryDate(): ?\DateTime
    {
        return $this->container['estimated_delivery_date'];
    }

    /**
     * Sets estimated_delivery_date
     *
     * @param \DateTime|null $estimated_delivery_date Estimated Date on which shipment will be delivered from Vendor to Buyer
     *
     * @return self
     */
    public function setEstimatedDeliveryDate(?\DateTime $estimated_delivery_date): self
    {
        if (is_null($estimated_delivery_date)) {
            array_push($this->openAPINullablesSetToNull, 'estimated_delivery_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('estimated_delivery_date', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['estimated_delivery_date'] = $estimated_delivery_date;

        return $this;
    }

    /**
     * Gets shipment_delivery_date
     *
     * @return \DateTime|null
     */
    public function getShipmentDeliveryDate(): ?\DateTime
    {
        return $this->container['shipment_delivery_date'];
    }

    /**
     * Sets shipment_delivery_date
     *
     * @param \DateTime|null $shipment_delivery_date Date on which shipment will be delivered from Vendor to Buyer
     *
     * @return self
     */
    public function setShipmentDeliveryDate(?\DateTime $shipment_delivery_date): self
    {
        if (is_null($shipment_delivery_date)) {
            array_push($this->openAPINullablesSetToNull, 'shipment_delivery_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipment_delivery_date', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['shipment_delivery_date'] = $shipment_delivery_date;

        return $this;
    }

    /**
     * Gets carrier_details
     *
     * @return \OpenAPI\Client\Model\vendorShipments\CarrierDetails|null
     */
    public function getCarrierDetails(): ?\OpenAPI\Client\Model\vendorShipments\CarrierDetails
    {
        return $this->container['carrier_details'];
    }

    /**
     * Sets carrier_details
     *
     * @param \OpenAPI\Client\Model\vendorShipments\CarrierDetails|null $carrier_details carrier_details
     *
     * @return self
     */
    public function setCarrierDetails(?\OpenAPI\Client\Model\vendorShipments\CarrierDetails $carrier_details): self
    {
        if (is_null($carrier_details)) {
            array_push($this->openAPINullablesSetToNull, 'carrier_details');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('carrier_details', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['carrier_details'] = $carrier_details;

        return $this;
    }

    /**
     * Gets bill_of_lading_number
     *
     * @return string|null
     */
    public function getBillOfLadingNumber(): ?string
    {
        return $this->container['bill_of_lading_number'];
    }

    /**
     * Sets bill_of_lading_number
     *
     * @param string|null $bill_of_lading_number The Bill of Lading (BOL) number is a unique number assigned to each shipment of goods by the vendor or shipper during the creation of the Bill of Lading. This number must be unique for every shipment and cannot be a date/time or single character. The BOL numer is mandatory in Shipment Confirmation message for FTL and LTL shipments, and must match the paper BOL provided with the shipment. Instead of BOL, an alternative reference number (like Delivery Note Number) for the shipment can also be sent in this field.
     *
     * @return self
     */
    public function setBillOfLadingNumber(?string $bill_of_lading_number): self
    {
        if (is_null($bill_of_lading_number)) {
            array_push($this->openAPINullablesSetToNull, 'bill_of_lading_number');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('bill_of_lading_number', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['bill_of_lading_number'] = $bill_of_lading_number;

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


