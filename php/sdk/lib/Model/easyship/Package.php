<?php
/**
 * Package
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Easy Ship
 *
 * The Selling Partner API for Easy Ship helps you build applications that help sellers manage and ship Amazon Easy Ship orders.  Your Easy Ship applications can:  * Get available time slots for packages to be scheduled for delivery.  * Schedule, reschedule, and cancel Easy Ship orders.  * Print labels, invoices, and warranties.  See the [Marketplace Support Table](doc:easyship-api-v2022-03-23-use-case-guide#marketplace-support-table) for the differences in Easy Ship operations by marketplace.
 *
 * The version of the OpenAPI document: 2022-03-23
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\easyship;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * Package Class Doc Comment
 *
 * @category Class
 * @description This object contains all the details of the scheduled Easy Ship package.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class Package implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'Package';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'scheduled_package_id' => '\OpenAPI\Client\Model\easyship\ScheduledPackageId',
             'package_dimensions' => '\OpenAPI\Client\Model\easyship\Dimensions',
             'package_weight' => '\OpenAPI\Client\Model\easyship\Weight',
             'package_items' => '\OpenAPI\Client\Model\easyship\Item[]',
             'package_time_slot' => '\OpenAPI\Client\Model\easyship\TimeSlot',
             'package_identifier' => 'string',
             'invoice' => '\OpenAPI\Client\Model\easyship\InvoiceData',
             'package_status' => '\OpenAPI\Client\Model\easyship\PackageStatus',
             'tracking_details' => '\OpenAPI\Client\Model\easyship\TrackingDetails'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'scheduled_package_id' => null,
            'package_dimensions' => null,
            'package_weight' => null,
            'package_items' => null,
            'package_time_slot' => null,
            'package_identifier' => null,
            'invoice' => null,
            'package_status' => null,
            'tracking_details' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'scheduled_package_id' => false,
        'package_dimensions' => false,
        'package_weight' => false,
        'package_items' => true,
        'package_time_slot' => false,
        'package_identifier' => true,
        'invoice' => true,
        'package_status' => true,
        'tracking_details' => true
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
        'scheduled_package_id' => 'scheduledPackageId',
                'package_dimensions' => 'packageDimensions',
                'package_weight' => 'packageWeight',
                'package_items' => 'packageItems',
                'package_time_slot' => 'packageTimeSlot',
                'package_identifier' => 'packageIdentifier',
                'invoice' => 'invoice',
                'package_status' => 'packageStatus',
                'tracking_details' => 'trackingDetails'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'scheduled_package_id' => 'setScheduledPackageId',
        'package_dimensions' => 'setPackageDimensions',
        'package_weight' => 'setPackageWeight',
        'package_items' => 'setPackageItems',
        'package_time_slot' => 'setPackageTimeSlot',
        'package_identifier' => 'setPackageIdentifier',
        'invoice' => 'setInvoice',
        'package_status' => 'setPackageStatus',
        'tracking_details' => 'setTrackingDetails'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'scheduled_package_id' => 'getScheduledPackageId',
        'package_dimensions' => 'getPackageDimensions',
        'package_weight' => 'getPackageWeight',
        'package_items' => 'getPackageItems',
        'package_time_slot' => 'getPackageTimeSlot',
        'package_identifier' => 'getPackageIdentifier',
        'invoice' => 'getInvoice',
        'package_status' => 'getPackageStatus',
        'tracking_details' => 'getTrackingDetails'
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
        $this->setIfExists('scheduled_package_id', $data ?? [], null);
        $this->setIfExists('package_dimensions', $data ?? [], null);
        $this->setIfExists('package_weight', $data ?? [], null);
        $this->setIfExists('package_items', $data ?? [], null);
        $this->setIfExists('package_time_slot', $data ?? [], null);
        $this->setIfExists('package_identifier', $data ?? [], null);
        $this->setIfExists('invoice', $data ?? [], null);
        $this->setIfExists('package_status', $data ?? [], null);
        $this->setIfExists('tracking_details', $data ?? [], null);
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

        if ($this->container['scheduled_package_id'] === null) {
            $invalidProperties[] = "'scheduled_package_id' can't be null";
        }
        if ($this->container['package_dimensions'] === null) {
            $invalidProperties[] = "'package_dimensions' can't be null";
        }
        if ($this->container['package_weight'] === null) {
            $invalidProperties[] = "'package_weight' can't be null";
        }
        if (!is_null($this->container['package_items']) && (count($this->container['package_items']) > 500)) {
            $invalidProperties[] = "invalid value for 'package_items', number of items must be less than or equal to 500.";
        }

        if ($this->container['package_time_slot'] === null) {
            $invalidProperties[] = "'package_time_slot' can't be null";
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
     * Gets scheduled_package_id
     *
     * @return \OpenAPI\Client\Model\easyship\ScheduledPackageId
     */
    public function getScheduledPackageId(): \OpenAPI\Client\Model\easyship\ScheduledPackageId
    {
        return $this->container['scheduled_package_id'];
    }

    /**
     * Sets scheduled_package_id
     *
     * @param \OpenAPI\Client\Model\easyship\ScheduledPackageId $scheduled_package_id scheduled_package_id
     *
     * @return self
     */
    public function setScheduledPackageId(\OpenAPI\Client\Model\easyship\ScheduledPackageId $scheduled_package_id): self
    {
        if (is_null($scheduled_package_id)) {
            throw new \InvalidArgumentException('non-nullable scheduled_package_id cannot be null');
        }
        $this->container['scheduled_package_id'] = $scheduled_package_id;

        return $this;
    }

    /**
     * Gets package_dimensions
     *
     * @return \OpenAPI\Client\Model\easyship\Dimensions
     */
    public function getPackageDimensions(): \OpenAPI\Client\Model\easyship\Dimensions
    {
        return $this->container['package_dimensions'];
    }

    /**
     * Sets package_dimensions
     *
     * @param \OpenAPI\Client\Model\easyship\Dimensions $package_dimensions package_dimensions
     *
     * @return self
     */
    public function setPackageDimensions(\OpenAPI\Client\Model\easyship\Dimensions $package_dimensions): self
    {
        if (is_null($package_dimensions)) {
            throw new \InvalidArgumentException('non-nullable package_dimensions cannot be null');
        }
        $this->container['package_dimensions'] = $package_dimensions;

        return $this;
    }

    /**
     * Gets package_weight
     *
     * @return \OpenAPI\Client\Model\easyship\Weight
     */
    public function getPackageWeight(): \OpenAPI\Client\Model\easyship\Weight
    {
        return $this->container['package_weight'];
    }

    /**
     * Sets package_weight
     *
     * @param \OpenAPI\Client\Model\easyship\Weight $package_weight package_weight
     *
     * @return self
     */
    public function setPackageWeight(\OpenAPI\Client\Model\easyship\Weight $package_weight): self
    {
        if (is_null($package_weight)) {
            throw new \InvalidArgumentException('non-nullable package_weight cannot be null');
        }
        $this->container['package_weight'] = $package_weight;

        return $this;
    }

    /**
     * Gets package_items
     *
     * @return array|null
     */
    public function getPackageItems(): ?array
    {
        return $this->container['package_items'];
    }

    /**
     * Sets package_items
     *
     * @param array|null $package_items A list of items contained in the package.
     *
     * @return self
     */
    public function setPackageItems(?array $package_items): self
    {
        if (is_null($package_items)) {
            array_push($this->openAPINullablesSetToNull, 'package_items');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('package_items', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }

        if (!is_null($package_items) && (count($package_items) > 500)) {
            throw new \InvalidArgumentException('invalid value for $package_items when calling Package., number of items must be less than or equal to 500.');
        }
        $this->container['package_items'] = $package_items;

        return $this;
    }

    /**
     * Gets package_time_slot
     *
     * @return \OpenAPI\Client\Model\easyship\TimeSlot
     */
    public function getPackageTimeSlot(): \OpenAPI\Client\Model\easyship\TimeSlot
    {
        return $this->container['package_time_slot'];
    }

    /**
     * Sets package_time_slot
     *
     * @param \OpenAPI\Client\Model\easyship\TimeSlot $package_time_slot package_time_slot
     *
     * @return self
     */
    public function setPackageTimeSlot(\OpenAPI\Client\Model\easyship\TimeSlot $package_time_slot): self
    {
        if (is_null($package_time_slot)) {
            throw new \InvalidArgumentException('non-nullable package_time_slot cannot be null');
        }
        $this->container['package_time_slot'] = $package_time_slot;

        return $this;
    }

    /**
     * Gets package_identifier
     *
     * @return string|null
     */
    public function getPackageIdentifier(): ?string
    {
        return $this->container['package_identifier'];
    }

    /**
     * Sets package_identifier
     *
     * @param string|null $package_identifier Optional seller-created identifier that is printed on the shipping label to help the seller identify the package.
     *
     * @return self
     */
    public function setPackageIdentifier(?string $package_identifier): self
    {
        if (is_null($package_identifier)) {
            array_push($this->openAPINullablesSetToNull, 'package_identifier');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('package_identifier', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['package_identifier'] = $package_identifier;

        return $this;
    }

    /**
     * Gets invoice
     *
     * @return \OpenAPI\Client\Model\easyship\InvoiceData|null
     */
    public function getInvoice(): ?\OpenAPI\Client\Model\easyship\InvoiceData
    {
        return $this->container['invoice'];
    }

    /**
     * Sets invoice
     *
     * @param \OpenAPI\Client\Model\easyship\InvoiceData|null $invoice invoice
     *
     * @return self
     */
    public function setInvoice(?\OpenAPI\Client\Model\easyship\InvoiceData $invoice): self
    {
        if (is_null($invoice)) {
            array_push($this->openAPINullablesSetToNull, 'invoice');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('invoice', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['invoice'] = $invoice;

        return $this;
    }

    /**
     * Gets package_status
     *
     * @return string|null
     */
    public function getPackageStatus(): ?string
    {
        return $this->container['package_status'];
    }

    /**
     * Sets package_status
     *
     * @param string|null $package_status package_status
     *
     * @return self
     */
    public function setPackageStatus(?string $package_status): self
    {
        if (is_null($package_status)) {
            array_push($this->openAPINullablesSetToNull, 'package_status');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('package_status', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['package_status'] = $package_status;

        return $this;
    }

    /**
     * Gets tracking_details
     *
     * @return \OpenAPI\Client\Model\easyship\TrackingDetails|null
     */
    public function getTrackingDetails(): ?\OpenAPI\Client\Model\easyship\TrackingDetails
    {
        return $this->container['tracking_details'];
    }

    /**
     * Sets tracking_details
     *
     * @param \OpenAPI\Client\Model\easyship\TrackingDetails|null $tracking_details tracking_details
     *
     * @return self
     */
    public function setTrackingDetails(?\OpenAPI\Client\Model\easyship\TrackingDetails $tracking_details): self
    {
        if (is_null($tracking_details)) {
            array_push($this->openAPINullablesSetToNull, 'tracking_details');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('tracking_details', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['tracking_details'] = $tracking_details;

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


