<?php
/**
 * FulfillmentShipmentPackage
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner APIs for Fulfillment Outbound
 *
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\fulfillmentOutbound;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * FulfillmentShipmentPackage Class Doc Comment
 *
 * @category Class
 * @description Package information for a shipment in a fulfillment order.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class FulfillmentShipmentPackage implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'FulfillmentShipmentPackage';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'package_number' => 'int',
             'carrier_code' => 'string',
             'tracking_number' => 'string',
             'estimated_arrival_date' => '\DateTime',
             'locker_details' => '\OpenAPI\Client\Model\fulfillmentOutbound\LockerDetails',
             'delivery_information' => '\OpenAPI\Client\Model\fulfillmentOutbound\DeliveryInformation'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'package_number' => 'int32',
            'carrier_code' => null,
            'tracking_number' => null,
            'estimated_arrival_date' => 'date-time',
            'locker_details' => null,
            'delivery_information' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'package_number' => false,
        'carrier_code' => false,
        'tracking_number' => true,
        'estimated_arrival_date' => true,
        'locker_details' => true,
        'delivery_information' => true
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
        'package_number' => 'packageNumber',
                'carrier_code' => 'carrierCode',
                'tracking_number' => 'trackingNumber',
                'estimated_arrival_date' => 'estimatedArrivalDate',
                'locker_details' => 'lockerDetails',
                'delivery_information' => 'deliveryInformation'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'package_number' => 'setPackageNumber',
        'carrier_code' => 'setCarrierCode',
        'tracking_number' => 'setTrackingNumber',
        'estimated_arrival_date' => 'setEstimatedArrivalDate',
        'locker_details' => 'setLockerDetails',
        'delivery_information' => 'setDeliveryInformation'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'package_number' => 'getPackageNumber',
        'carrier_code' => 'getCarrierCode',
        'tracking_number' => 'getTrackingNumber',
        'estimated_arrival_date' => 'getEstimatedArrivalDate',
        'locker_details' => 'getLockerDetails',
        'delivery_information' => 'getDeliveryInformation'
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
        $this->setIfExists('package_number', $data ?? [], null);
        $this->setIfExists('carrier_code', $data ?? [], null);
        $this->setIfExists('tracking_number', $data ?? [], null);
        $this->setIfExists('estimated_arrival_date', $data ?? [], null);
        $this->setIfExists('locker_details', $data ?? [], null);
        $this->setIfExists('delivery_information', $data ?? [], null);
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

        if ($this->container['package_number'] === null) {
            $invalidProperties[] = "'package_number' can't be null";
        }
        if ($this->container['carrier_code'] === null) {
            $invalidProperties[] = "'carrier_code' can't be null";
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
     * Gets package_number
     *
     * @return int
     */
    public function getPackageNumber(): int
    {
        return $this->container['package_number'];
    }

    /**
     * Sets package_number
     *
     * @param int $package_number Identifies a package in a shipment.
     *
     * @return self
     */
    public function setPackageNumber(int $package_number): self
    {
        if (is_null($package_number)) {
            throw new \InvalidArgumentException('non-nullable package_number cannot be null');
        }
        $this->container['package_number'] = $package_number;

        return $this;
    }

    /**
     * Gets carrier_code
     *
     * @return string
     */
    public function getCarrierCode(): string
    {
        return $this->container['carrier_code'];
    }

    /**
     * Sets carrier_code
     *
     * @param string $carrier_code Identifies the carrier who will deliver the shipment to the recipient.
     *
     * @return self
     */
    public function setCarrierCode(string $carrier_code): self
    {
        if (is_null($carrier_code)) {
            throw new \InvalidArgumentException('non-nullable carrier_code cannot be null');
        }
        $this->container['carrier_code'] = $carrier_code;

        return $this;
    }

    /**
     * Gets tracking_number
     *
     * @return string|null
     */
    public function getTrackingNumber(): ?string
    {
        return $this->container['tracking_number'];
    }

    /**
     * Sets tracking_number
     *
     * @param string|null $tracking_number The tracking number, if provided, can be used to obtain tracking and delivery information.
     *
     * @return self
     */
    public function setTrackingNumber(?string $tracking_number): self
    {
        if (is_null($tracking_number)) {
            array_push($this->openAPINullablesSetToNull, 'tracking_number');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('tracking_number', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['tracking_number'] = $tracking_number;

        return $this;
    }

    /**
     * Gets estimated_arrival_date
     *
     * @return \DateTime|null
     */
    public function getEstimatedArrivalDate(): ?\DateTime
    {
        return $this->container['estimated_arrival_date'];
    }

    /**
     * Sets estimated_arrival_date
     *
     * @param \DateTime|null $estimated_arrival_date Date timestamp
     *
     * @return self
     */
    public function setEstimatedArrivalDate(?\DateTime $estimated_arrival_date): self
    {
        if (is_null($estimated_arrival_date)) {
            array_push($this->openAPINullablesSetToNull, 'estimated_arrival_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('estimated_arrival_date', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['estimated_arrival_date'] = $estimated_arrival_date;

        return $this;
    }

    /**
     * Gets locker_details
     *
     * @return \OpenAPI\Client\Model\fulfillmentOutbound\LockerDetails|null
     */
    public function getLockerDetails(): ?\OpenAPI\Client\Model\fulfillmentOutbound\LockerDetails
    {
        return $this->container['locker_details'];
    }

    /**
     * Sets locker_details
     *
     * @param \OpenAPI\Client\Model\fulfillmentOutbound\LockerDetails|null $locker_details locker_details
     *
     * @return self
     */
    public function setLockerDetails(?\OpenAPI\Client\Model\fulfillmentOutbound\LockerDetails $locker_details): self
    {
        if (is_null($locker_details)) {
            array_push($this->openAPINullablesSetToNull, 'locker_details');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('locker_details', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['locker_details'] = $locker_details;

        return $this;
    }

    /**
     * Gets delivery_information
     *
     * @return \OpenAPI\Client\Model\fulfillmentOutbound\DeliveryInformation|null
     */
    public function getDeliveryInformation(): ?\OpenAPI\Client\Model\fulfillmentOutbound\DeliveryInformation
    {
        return $this->container['delivery_information'];
    }

    /**
     * Sets delivery_information
     *
     * @param \OpenAPI\Client\Model\fulfillmentOutbound\DeliveryInformation|null $delivery_information delivery_information
     *
     * @return self
     */
    public function setDeliveryInformation(?\OpenAPI\Client\Model\fulfillmentOutbound\DeliveryInformation $delivery_information): self
    {
        if (is_null($delivery_information)) {
            array_push($this->openAPINullablesSetToNull, 'delivery_information');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('delivery_information', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['delivery_information'] = $delivery_information;

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


