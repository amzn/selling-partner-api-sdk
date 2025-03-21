<?php
/**
 * PackageTrackingDetails
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
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

namespace SpApi\Model\fulfillment\outbound\v2020_07_01;

use
ArrayAccess;
use SpApi\ObjectSerializer;
use SpApi\Model\ModelInterface;

/**
 * PackageTrackingDetails Class Doc Comment
 *
 * @category Class
 * @description Tracking details of package
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class PackageTrackingDetails implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'PackageTrackingDetails';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'package_number' => 'int',
             'tracking_number' => 'string',
             'customer_tracking_link' => 'string',
             'carrier_code' => 'string',
             'carrier_phone_number' => 'string',
             'carrier_url' => 'string',
             'ship_date' => '\DateTime',
             'estimated_arrival_date' => '\DateTime',
             'ship_to_address' => '\SpApi\Model\fulfillment\outbound\v2020_07_01\TrackingAddress',
             'current_status' => '\SpApi\Model\fulfillment\outbound\v2020_07_01\CurrentStatus',
             'current_status_description' => 'string',
             'delivery_window' => '\SpApi\Model\fulfillment\outbound\v2020_07_01\DateRange',
             'signed_for_by' => 'string',
             'additional_location_info' => '\SpApi\Model\fulfillment\outbound\v2020_07_01\AdditionalLocationInfo',
             'tracking_events' => '\SpApi\Model\fulfillment\outbound\v2020_07_01\TrackingEvent[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'package_number' => 'int32',
            'tracking_number' => null,
            'customer_tracking_link' => null,
            'carrier_code' => null,
            'carrier_phone_number' => null,
            'carrier_url' => null,
            'ship_date' => 'date-time',
            'estimated_arrival_date' => 'date-time',
            'ship_to_address' => null,
            'current_status' => null,
            'current_status_description' => null,
            'delivery_window' => null,
            'signed_for_by' => null,
            'additional_location_info' => null,
            'tracking_events' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'package_number' => false,
        'tracking_number' => true,
        'customer_tracking_link' => true,
        'carrier_code' => true,
        'carrier_phone_number' => true,
        'carrier_url' => true,
        'ship_date' => true,
        'estimated_arrival_date' => true,
        'ship_to_address' => true,
        'current_status' => true,
        'current_status_description' => true,
        'delivery_window' => true,
        'signed_for_by' => true,
        'additional_location_info' => true,
        'tracking_events' => true
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
                'tracking_number' => 'trackingNumber',
                'customer_tracking_link' => 'customerTrackingLink',
                'carrier_code' => 'carrierCode',
                'carrier_phone_number' => 'carrierPhoneNumber',
                'carrier_url' => 'carrierURL',
                'ship_date' => 'shipDate',
                'estimated_arrival_date' => 'estimatedArrivalDate',
                'ship_to_address' => 'shipToAddress',
                'current_status' => 'currentStatus',
                'current_status_description' => 'currentStatusDescription',
                'delivery_window' => 'deliveryWindow',
                'signed_for_by' => 'signedForBy',
                'additional_location_info' => 'additionalLocationInfo',
                'tracking_events' => 'trackingEvents'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'package_number' => 'setPackageNumber',
        'tracking_number' => 'setTrackingNumber',
        'customer_tracking_link' => 'setCustomerTrackingLink',
        'carrier_code' => 'setCarrierCode',
        'carrier_phone_number' => 'setCarrierPhoneNumber',
        'carrier_url' => 'setCarrierUrl',
        'ship_date' => 'setShipDate',
        'estimated_arrival_date' => 'setEstimatedArrivalDate',
        'ship_to_address' => 'setShipToAddress',
        'current_status' => 'setCurrentStatus',
        'current_status_description' => 'setCurrentStatusDescription',
        'delivery_window' => 'setDeliveryWindow',
        'signed_for_by' => 'setSignedForBy',
        'additional_location_info' => 'setAdditionalLocationInfo',
        'tracking_events' => 'setTrackingEvents'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'package_number' => 'getPackageNumber',
        'tracking_number' => 'getTrackingNumber',
        'customer_tracking_link' => 'getCustomerTrackingLink',
        'carrier_code' => 'getCarrierCode',
        'carrier_phone_number' => 'getCarrierPhoneNumber',
        'carrier_url' => 'getCarrierUrl',
        'ship_date' => 'getShipDate',
        'estimated_arrival_date' => 'getEstimatedArrivalDate',
        'ship_to_address' => 'getShipToAddress',
        'current_status' => 'getCurrentStatus',
        'current_status_description' => 'getCurrentStatusDescription',
        'delivery_window' => 'getDeliveryWindow',
        'signed_for_by' => 'getSignedForBy',
        'additional_location_info' => 'getAdditionalLocationInfo',
        'tracking_events' => 'getTrackingEvents'
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
        $this->setIfExists('tracking_number', $data ?? [], null);
        $this->setIfExists('customer_tracking_link', $data ?? [], null);
        $this->setIfExists('carrier_code', $data ?? [], null);
        $this->setIfExists('carrier_phone_number', $data ?? [], null);
        $this->setIfExists('carrier_url', $data ?? [], null);
        $this->setIfExists('ship_date', $data ?? [], null);
        $this->setIfExists('estimated_arrival_date', $data ?? [], null);
        $this->setIfExists('ship_to_address', $data ?? [], null);
        $this->setIfExists('current_status', $data ?? [], null);
        $this->setIfExists('current_status_description', $data ?? [], null);
        $this->setIfExists('delivery_window', $data ?? [], null);
        $this->setIfExists('signed_for_by', $data ?? [], null);
        $this->setIfExists('additional_location_info', $data ?? [], null);
        $this->setIfExists('tracking_events', $data ?? [], null);
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
     * @param int $package_number The package identifier.
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
     * @param string|null $tracking_number The tracking number for the package.
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
     * Gets customer_tracking_link
     *
     * @return string|null
     */
    public function getCustomerTrackingLink(): ?string
    {
        return $this->container['customer_tracking_link'];
    }

    /**
     * Sets customer_tracking_link
     *
     * @param string|null $customer_tracking_link Link on swiship.com that allows customers to track the package.
     *
     * @return self
     */
    public function setCustomerTrackingLink(?string $customer_tracking_link): self
    {
        if (is_null($customer_tracking_link)) {
            array_push($this->openAPINullablesSetToNull, 'customer_tracking_link');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('customer_tracking_link', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['customer_tracking_link'] = $customer_tracking_link;

        return $this;
    }

    /**
     * Gets carrier_code
     *
     * @return string|null
     */
    public function getCarrierCode(): ?string
    {
        return $this->container['carrier_code'];
    }

    /**
     * Sets carrier_code
     *
     * @param string|null $carrier_code The name of the carrier.
     *
     * @return self
     */
    public function setCarrierCode(?string $carrier_code): self
    {
        if (is_null($carrier_code)) {
            array_push($this->openAPINullablesSetToNull, 'carrier_code');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('carrier_code', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['carrier_code'] = $carrier_code;

        return $this;
    }

    /**
     * Gets carrier_phone_number
     *
     * @return string|null
     */
    public function getCarrierPhoneNumber(): ?string
    {
        return $this->container['carrier_phone_number'];
    }

    /**
     * Sets carrier_phone_number
     *
     * @param string|null $carrier_phone_number The phone number of the carrier.
     *
     * @return self
     */
    public function setCarrierPhoneNumber(?string $carrier_phone_number): self
    {
        if (is_null($carrier_phone_number)) {
            array_push($this->openAPINullablesSetToNull, 'carrier_phone_number');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('carrier_phone_number', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['carrier_phone_number'] = $carrier_phone_number;

        return $this;
    }

    /**
     * Gets carrier_url
     *
     * @return string|null
     */
    public function getCarrierUrl(): ?string
    {
        return $this->container['carrier_url'];
    }

    /**
     * Sets carrier_url
     *
     * @param string|null $carrier_url The URL of the carrier's website.
     *
     * @return self
     */
    public function setCarrierUrl(?string $carrier_url): self
    {
        if (is_null($carrier_url)) {
            array_push($this->openAPINullablesSetToNull, 'carrier_url');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('carrier_url', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['carrier_url'] = $carrier_url;

        return $this;
    }

    /**
     * Gets ship_date
     *
     * @return \DateTime|null
     */
    public function getShipDate(): ?\DateTime
    {
        return $this->container['ship_date'];
    }

    /**
     * Sets ship_date
     *
     * @param \DateTime|null $ship_date Date timestamp
     *
     * @return self
     */
    public function setShipDate(?\DateTime $ship_date): self
    {
        if (is_null($ship_date)) {
            array_push($this->openAPINullablesSetToNull, 'ship_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('ship_date', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['ship_date'] = $ship_date;

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
     * Gets ship_to_address
     *
     * @return \SpApi\Model\fulfillment\outbound\v2020_07_01\TrackingAddress|null
     */
    public function getShipToAddress(): ?\SpApi\Model\fulfillment\outbound\v2020_07_01\TrackingAddress
    {
        return $this->container['ship_to_address'];
    }

    /**
     * Sets ship_to_address
     *
     * @param \SpApi\Model\fulfillment\outbound\v2020_07_01\TrackingAddress|null $ship_to_address ship_to_address
     *
     * @return self
     */
    public function setShipToAddress(?\SpApi\Model\fulfillment\outbound\v2020_07_01\TrackingAddress $ship_to_address): self
    {
        if (is_null($ship_to_address)) {
            array_push($this->openAPINullablesSetToNull, 'ship_to_address');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('ship_to_address', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['ship_to_address'] = $ship_to_address;

        return $this;
    }

    /**
     * Gets current_status
     *
     * @return string|null
     */
    public function getCurrentStatus(): ?string
    {
        return $this->container['current_status'];
    }

    /**
     * Sets current_status
     *
     * @param string|null $current_status current_status
     *
     * @return self
     */
    public function setCurrentStatus(?string $current_status): self
    {
        if (is_null($current_status)) {
            array_push($this->openAPINullablesSetToNull, 'current_status');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('current_status', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['current_status'] = $current_status;

        return $this;
    }

    /**
     * Gets current_status_description
     *
     * @return string|null
     */
    public function getCurrentStatusDescription(): ?string
    {
        return $this->container['current_status_description'];
    }

    /**
     * Sets current_status_description
     *
     * @param string|null $current_status_description Description corresponding to the CurrentStatus value.
     *
     * @return self
     */
    public function setCurrentStatusDescription(?string $current_status_description): self
    {
        if (is_null($current_status_description)) {
            array_push($this->openAPINullablesSetToNull, 'current_status_description');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('current_status_description', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['current_status_description'] = $current_status_description;

        return $this;
    }

    /**
     * Gets delivery_window
     *
     * @return \SpApi\Model\fulfillment\outbound\v2020_07_01\DateRange|null
     */
    public function getDeliveryWindow(): ?\SpApi\Model\fulfillment\outbound\v2020_07_01\DateRange
    {
        return $this->container['delivery_window'];
    }

    /**
     * Sets delivery_window
     *
     * @param \SpApi\Model\fulfillment\outbound\v2020_07_01\DateRange|null $delivery_window delivery_window
     *
     * @return self
     */
    public function setDeliveryWindow(?\SpApi\Model\fulfillment\outbound\v2020_07_01\DateRange $delivery_window): self
    {
        if (is_null($delivery_window)) {
            array_push($this->openAPINullablesSetToNull, 'delivery_window');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('delivery_window', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['delivery_window'] = $delivery_window;

        return $this;
    }

    /**
     * Gets signed_for_by
     *
     * @return string|null
     */
    public function getSignedForBy(): ?string
    {
        return $this->container['signed_for_by'];
    }

    /**
     * Sets signed_for_by
     *
     * @param string|null $signed_for_by The name of the person who signed for the package.
     *
     * @return self
     */
    public function setSignedForBy(?string $signed_for_by): self
    {
        if (is_null($signed_for_by)) {
            array_push($this->openAPINullablesSetToNull, 'signed_for_by');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('signed_for_by', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['signed_for_by'] = $signed_for_by;

        return $this;
    }

    /**
     * Gets additional_location_info
     *
     * @return string|null
     */
    public function getAdditionalLocationInfo(): ?string
    {
        return $this->container['additional_location_info'];
    }

    /**
     * Sets additional_location_info
     *
     * @param string|null $additional_location_info additional_location_info
     *
     * @return self
     */
    public function setAdditionalLocationInfo(?string $additional_location_info): self
    {
        if (is_null($additional_location_info)) {
            array_push($this->openAPINullablesSetToNull, 'additional_location_info');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('additional_location_info', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['additional_location_info'] = $additional_location_info;

        return $this;
    }

    /**
     * Gets tracking_events
     *
     * @return array|null
     */
    public function getTrackingEvents(): ?array
    {
        return $this->container['tracking_events'];
    }

    /**
     * Sets tracking_events
     *
     * @param array|null $tracking_events An array of tracking event information.
     *
     * @return self
     */
    public function setTrackingEvents(?array $tracking_events): self
    {
        if (is_null($tracking_events)) {
            array_push($this->openAPINullablesSetToNull, 'tracking_events');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('tracking_events', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['tracking_events'] = $tracking_events;

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


