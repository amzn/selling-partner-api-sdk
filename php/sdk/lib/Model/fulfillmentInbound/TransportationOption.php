<?php
/**
 * TransportationOption
 *
 * PHP version 7.4
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

namespace OpenAPI\Client\Model\fulfillmentInbound;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * TransportationOption Class Doc Comment
 *
 * @category Class
 * @description Contains information pertaining to a transportation option and the related carrier.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class TransportationOption implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'TransportationOption';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'carrier' => '\OpenAPI\Client\Model\fulfillmentInbound\Carrier',
             'carrier_appointment' => '\OpenAPI\Client\Model\fulfillmentInbound\CarrierAppointment',
             'preconditions' => 'string[]',
             'quote' => '\OpenAPI\Client\Model\fulfillmentInbound\Quote',
             'shipment_id' => 'string',
             'shipping_mode' => 'string',
             'shipping_solution' => 'string',
             'transportation_option_id' => 'string'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'carrier' => null,
            'carrier_appointment' => null,
            'preconditions' => null,
            'quote' => null,
            'shipment_id' => null,
            'shipping_mode' => null,
            'shipping_solution' => null,
            'transportation_option_id' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'carrier' => false,
        'carrier_appointment' => true,
        'preconditions' => false,
        'quote' => true,
        'shipment_id' => false,
        'shipping_mode' => false,
        'shipping_solution' => false,
        'transportation_option_id' => false
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
        'carrier' => 'carrier',
                'carrier_appointment' => 'carrierAppointment',
                'preconditions' => 'preconditions',
                'quote' => 'quote',
                'shipment_id' => 'shipmentId',
                'shipping_mode' => 'shippingMode',
                'shipping_solution' => 'shippingSolution',
                'transportation_option_id' => 'transportationOptionId'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'carrier' => 'setCarrier',
        'carrier_appointment' => 'setCarrierAppointment',
        'preconditions' => 'setPreconditions',
        'quote' => 'setQuote',
        'shipment_id' => 'setShipmentId',
        'shipping_mode' => 'setShippingMode',
        'shipping_solution' => 'setShippingSolution',
        'transportation_option_id' => 'setTransportationOptionId'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'carrier' => 'getCarrier',
        'carrier_appointment' => 'getCarrierAppointment',
        'preconditions' => 'getPreconditions',
        'quote' => 'getQuote',
        'shipment_id' => 'getShipmentId',
        'shipping_mode' => 'getShippingMode',
        'shipping_solution' => 'getShippingSolution',
        'transportation_option_id' => 'getTransportationOptionId'
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
        $this->setIfExists('carrier', $data ?? [], null);
        $this->setIfExists('carrier_appointment', $data ?? [], null);
        $this->setIfExists('preconditions', $data ?? [], null);
        $this->setIfExists('quote', $data ?? [], null);
        $this->setIfExists('shipment_id', $data ?? [], null);
        $this->setIfExists('shipping_mode', $data ?? [], null);
        $this->setIfExists('shipping_solution', $data ?? [], null);
        $this->setIfExists('transportation_option_id', $data ?? [], null);
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

        if ($this->container['carrier'] === null) {
            $invalidProperties[] = "'carrier' can't be null";
        }
        if ($this->container['preconditions'] === null) {
            $invalidProperties[] = "'preconditions' can't be null";
        }
        if ($this->container['shipment_id'] === null) {
            $invalidProperties[] = "'shipment_id' can't be null";
        }
        if ((mb_strlen($this->container['shipment_id']) > 38)) {
            $invalidProperties[] = "invalid value for 'shipment_id', the character length must be smaller than or equal to 38.";
        }

        if ((mb_strlen($this->container['shipment_id']) < 38)) {
            $invalidProperties[] = "invalid value for 'shipment_id', the character length must be bigger than or equal to 38.";
        }

        if (!preg_match("/^[a-zA-Z0-9-]*$/", $this->container['shipment_id'])) {
            $invalidProperties[] = "invalid value for 'shipment_id', must be conform to the pattern /^[a-zA-Z0-9-]*$/.";
        }

        if ($this->container['shipping_mode'] === null) {
            $invalidProperties[] = "'shipping_mode' can't be null";
        }
        if ((mb_strlen($this->container['shipping_mode']) > 1024)) {
            $invalidProperties[] = "invalid value for 'shipping_mode', the character length must be smaller than or equal to 1024.";
        }

        if ((mb_strlen($this->container['shipping_mode']) < 1)) {
            $invalidProperties[] = "invalid value for 'shipping_mode', the character length must be bigger than or equal to 1.";
        }

        if ($this->container['shipping_solution'] === null) {
            $invalidProperties[] = "'shipping_solution' can't be null";
        }
        if ((mb_strlen($this->container['shipping_solution']) > 1024)) {
            $invalidProperties[] = "invalid value for 'shipping_solution', the character length must be smaller than or equal to 1024.";
        }

        if ((mb_strlen($this->container['shipping_solution']) < 1)) {
            $invalidProperties[] = "invalid value for 'shipping_solution', the character length must be bigger than or equal to 1.";
        }

        if ($this->container['transportation_option_id'] === null) {
            $invalidProperties[] = "'transportation_option_id' can't be null";
        }
        if ((mb_strlen($this->container['transportation_option_id']) > 38)) {
            $invalidProperties[] = "invalid value for 'transportation_option_id', the character length must be smaller than or equal to 38.";
        }

        if ((mb_strlen($this->container['transportation_option_id']) < 38)) {
            $invalidProperties[] = "invalid value for 'transportation_option_id', the character length must be bigger than or equal to 38.";
        }

        if (!preg_match("/^[a-zA-Z0-9-]*$/", $this->container['transportation_option_id'])) {
            $invalidProperties[] = "invalid value for 'transportation_option_id', must be conform to the pattern /^[a-zA-Z0-9-]*$/.";
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
     * Gets carrier
     *
     * @return \OpenAPI\Client\Model\fulfillmentInbound\Carrier
     */
    public function getCarrier(): \OpenAPI\Client\Model\fulfillmentInbound\Carrier
    {
        return $this->container['carrier'];
    }

    /**
     * Sets carrier
     *
     * @param \OpenAPI\Client\Model\fulfillmentInbound\Carrier $carrier carrier
     *
     * @return self
     */
    public function setCarrier(\OpenAPI\Client\Model\fulfillmentInbound\Carrier $carrier): self
    {
        if (is_null($carrier)) {
            throw new \InvalidArgumentException('non-nullable carrier cannot be null');
        }
        $this->container['carrier'] = $carrier;

        return $this;
    }

    /**
     * Gets carrier_appointment
     *
     * @return \OpenAPI\Client\Model\fulfillmentInbound\CarrierAppointment|null
     */
    public function getCarrierAppointment(): ?\OpenAPI\Client\Model\fulfillmentInbound\CarrierAppointment
    {
        return $this->container['carrier_appointment'];
    }

    /**
     * Sets carrier_appointment
     *
     * @param \OpenAPI\Client\Model\fulfillmentInbound\CarrierAppointment|null $carrier_appointment carrier_appointment
     *
     * @return self
     */
    public function setCarrierAppointment(?\OpenAPI\Client\Model\fulfillmentInbound\CarrierAppointment $carrier_appointment): self
    {
        if (is_null($carrier_appointment)) {
            array_push($this->openAPINullablesSetToNull, 'carrier_appointment');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('carrier_appointment', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['carrier_appointment'] = $carrier_appointment;

        return $this;
    }

    /**
     * Gets preconditions
     *
     * @return array
     */
    public function getPreconditions(): array
    {
        return $this->container['preconditions'];
    }

    /**
     * Sets preconditions
     *
     * @param array $preconditions Identifies a list of preconditions for confirming the transportation option.
     *
     * @return self
     */
    public function setPreconditions(array $preconditions): self
    {
        if (is_null($preconditions)) {
            throw new \InvalidArgumentException('non-nullable preconditions cannot be null');
        }
        $this->container['preconditions'] = $preconditions;

        return $this;
    }

    /**
     * Gets quote
     *
     * @return \OpenAPI\Client\Model\fulfillmentInbound\Quote|null
     */
    public function getQuote(): ?\OpenAPI\Client\Model\fulfillmentInbound\Quote
    {
        return $this->container['quote'];
    }

    /**
     * Sets quote
     *
     * @param \OpenAPI\Client\Model\fulfillmentInbound\Quote|null $quote quote
     *
     * @return self
     */
    public function setQuote(?\OpenAPI\Client\Model\fulfillmentInbound\Quote $quote): self
    {
        if (is_null($quote)) {
            array_push($this->openAPINullablesSetToNull, 'quote');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('quote', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['quote'] = $quote;

        return $this;
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
     * @param string $shipment_id Identifier of a shipment. A shipment contains the boxes and units being inbounded.
     *
     * @return self
     */
    public function setShipmentId(string $shipment_id): self
    {
        if (is_null($shipment_id)) {
            throw new \InvalidArgumentException('non-nullable shipment_id cannot be null');
        }
        if ((mb_strlen($shipment_id) > 38)) {
            throw new \InvalidArgumentException('invalid length for $shipment_id when calling TransportationOption., must be smaller than or equal to 38.');
        }
        if ((mb_strlen($shipment_id) < 38)) {
            throw new \InvalidArgumentException('invalid length for $shipment_id when calling TransportationOption., must be bigger than or equal to 38.');
        }
        if ((!preg_match("/^[a-zA-Z0-9-]*$/", ObjectSerializer::toString($shipment_id)))) {
            throw new \InvalidArgumentException("invalid value for \$shipment_id when calling TransportationOption., must conform to the pattern /^[a-zA-Z0-9-]*$/.");
        }

        $this->container['shipment_id'] = $shipment_id;

        return $this;
    }

    /**
     * Gets shipping_mode
     *
     * @return string
     */
    public function getShippingMode(): string
    {
        return $this->container['shipping_mode'];
    }

    /**
     * Sets shipping_mode
     *
     * @param string $shipping_mode Mode of shipment transportation that this option will provide.  Possible values: `GROUND_SMALL_PARCEL`, `FREIGHT_LTL`, `FREIGHT_FTL_PALLET`, `FREIGHT_FTL_NONPALLET`, `OCEAN_LCL`, `OCEAN_FCL`, `AIR_SMALL_PARCEL`, `AIR_SMALL_PARCEL_EXPRESS`.
     *
     * @return self
     */
    public function setShippingMode(string $shipping_mode): self
    {
        if (is_null($shipping_mode)) {
            throw new \InvalidArgumentException('non-nullable shipping_mode cannot be null');
        }
        if ((mb_strlen($shipping_mode) > 1024)) {
            throw new \InvalidArgumentException('invalid length for $shipping_mode when calling TransportationOption., must be smaller than or equal to 1024.');
        }
        if ((mb_strlen($shipping_mode) < 1)) {
            throw new \InvalidArgumentException('invalid length for $shipping_mode when calling TransportationOption., must be bigger than or equal to 1.');
        }

        $this->container['shipping_mode'] = $shipping_mode;

        return $this;
    }

    /**
     * Gets shipping_solution
     *
     * @return string
     */
    public function getShippingSolution(): string
    {
        return $this->container['shipping_solution'];
    }

    /**
     * Sets shipping_solution
     *
     * @param string $shipping_solution Shipping program for the option. Possible values: `AMAZON_PARTNERED_CARRIER`, `USE_YOUR_OWN_CARRIER`.
     *
     * @return self
     */
    public function setShippingSolution(string $shipping_solution): self
    {
        if (is_null($shipping_solution)) {
            throw new \InvalidArgumentException('non-nullable shipping_solution cannot be null');
        }
        if ((mb_strlen($shipping_solution) > 1024)) {
            throw new \InvalidArgumentException('invalid length for $shipping_solution when calling TransportationOption., must be smaller than or equal to 1024.');
        }
        if ((mb_strlen($shipping_solution) < 1)) {
            throw new \InvalidArgumentException('invalid length for $shipping_solution when calling TransportationOption., must be bigger than or equal to 1.');
        }

        $this->container['shipping_solution'] = $shipping_solution;

        return $this;
    }

    /**
     * Gets transportation_option_id
     *
     * @return string
     */
    public function getTransportationOptionId(): string
    {
        return $this->container['transportation_option_id'];
    }

    /**
     * Sets transportation_option_id
     *
     * @param string $transportation_option_id Identifier of a transportation option. A transportation option represent one option for how to send a shipment.
     *
     * @return self
     */
    public function setTransportationOptionId(string $transportation_option_id): self
    {
        if (is_null($transportation_option_id)) {
            throw new \InvalidArgumentException('non-nullable transportation_option_id cannot be null');
        }
        if ((mb_strlen($transportation_option_id) > 38)) {
            throw new \InvalidArgumentException('invalid length for $transportation_option_id when calling TransportationOption., must be smaller than or equal to 38.');
        }
        if ((mb_strlen($transportation_option_id) < 38)) {
            throw new \InvalidArgumentException('invalid length for $transportation_option_id when calling TransportationOption., must be bigger than or equal to 38.');
        }
        if ((!preg_match("/^[a-zA-Z0-9-]*$/", ObjectSerializer::toString($transportation_option_id)))) {
            throw new \InvalidArgumentException("invalid value for \$transportation_option_id when calling TransportationOption., must conform to the pattern /^[a-zA-Z0-9-]*$/.");
        }

        $this->container['transportation_option_id'] = $transportation_option_id;

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


