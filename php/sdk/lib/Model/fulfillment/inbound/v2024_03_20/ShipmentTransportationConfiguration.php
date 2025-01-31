<?php
/**
 * ShipmentTransportationConfiguration
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
 * ShipmentTransportationConfiguration Class Doc Comment
 *
 * @category Class
 * @description Details needed to generate the transportation options.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ShipmentTransportationConfiguration implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'ShipmentTransportationConfiguration';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'contact_information' => '\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ContactInformation',
             'freight_information' => '\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\FreightInformation',
             'pallets' => '\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\PalletInput[]',
             'ready_to_ship_window' => '\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\WindowInput',
             'shipment_id' => 'string'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'contact_information' => null,
            'freight_information' => null,
            'pallets' => null,
            'ready_to_ship_window' => null,
            'shipment_id' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'contact_information' => true,
        'freight_information' => true,
        'pallets' => true,
        'ready_to_ship_window' => false,
        'shipment_id' => false
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
        'contact_information' => 'contactInformation',
                'freight_information' => 'freightInformation',
                'pallets' => 'pallets',
                'ready_to_ship_window' => 'readyToShipWindow',
                'shipment_id' => 'shipmentId'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'contact_information' => 'setContactInformation',
        'freight_information' => 'setFreightInformation',
        'pallets' => 'setPallets',
        'ready_to_ship_window' => 'setReadyToShipWindow',
        'shipment_id' => 'setShipmentId'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'contact_information' => 'getContactInformation',
        'freight_information' => 'getFreightInformation',
        'pallets' => 'getPallets',
        'ready_to_ship_window' => 'getReadyToShipWindow',
        'shipment_id' => 'getShipmentId'
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
        $this->setIfExists('contact_information', $data ?? [], null);
        $this->setIfExists('freight_information', $data ?? [], null);
        $this->setIfExists('pallets', $data ?? [], null);
        $this->setIfExists('ready_to_ship_window', $data ?? [], null);
        $this->setIfExists('shipment_id', $data ?? [], null);
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

        if ($this->container['ready_to_ship_window'] === null) {
            $invalidProperties[] = "'ready_to_ship_window' can't be null";
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
     * Gets contact_information
     *
     * @return \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ContactInformation|null
     */
    public function getContactInformation(): ?\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ContactInformation
    {
        return $this->container['contact_information'];
    }

    /**
     * Sets contact_information
     *
     * @param \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ContactInformation|null $contact_information contact_information
     *
     * @return self
     */
    public function setContactInformation(?\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ContactInformation $contact_information): self
    {
        if (is_null($contact_information)) {
            array_push($this->openAPINullablesSetToNull, 'contact_information');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('contact_information', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['contact_information'] = $contact_information;

        return $this;
    }

    /**
     * Gets freight_information
     *
     * @return \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\FreightInformation|null
     */
    public function getFreightInformation(): ?\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\FreightInformation
    {
        return $this->container['freight_information'];
    }

    /**
     * Sets freight_information
     *
     * @param \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\FreightInformation|null $freight_information freight_information
     *
     * @return self
     */
    public function setFreightInformation(?\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\FreightInformation $freight_information): self
    {
        if (is_null($freight_information)) {
            array_push($this->openAPINullablesSetToNull, 'freight_information');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('freight_information', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['freight_information'] = $freight_information;

        return $this;
    }

    /**
     * Gets pallets
     *
     * @return array|null
     */
    public function getPallets(): ?array
    {
        return $this->container['pallets'];
    }

    /**
     * Sets pallets
     *
     * @param array|null $pallets List of pallet configuration inputs.
     *
     * @return self
     */
    public function setPallets(?array $pallets): self
    {
        if (is_null($pallets)) {
            array_push($this->openAPINullablesSetToNull, 'pallets');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('pallets', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['pallets'] = $pallets;

        return $this;
    }

    /**
     * Gets ready_to_ship_window
     *
     * @return \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\WindowInput
     */
    public function getReadyToShipWindow(): \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\WindowInput
    {
        return $this->container['ready_to_ship_window'];
    }

    /**
     * Sets ready_to_ship_window
     *
     * @param \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\WindowInput $ready_to_ship_window ready_to_ship_window
     *
     * @return self
     */
    public function setReadyToShipWindow(\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\WindowInput $ready_to_ship_window): self
    {
        if (is_null($ready_to_ship_window)) {
            throw new \InvalidArgumentException('non-nullable ready_to_ship_window cannot be null');
        }
        $this->container['ready_to_ship_window'] = $ready_to_ship_window;

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
            throw new \InvalidArgumentException('invalid length for $shipment_id when calling ShipmentTransportationConfiguration., must be smaller than or equal to 38.');
        }
        if ((mb_strlen($shipment_id) < 38)) {
            throw new \InvalidArgumentException('invalid length for $shipment_id when calling ShipmentTransportationConfiguration., must be bigger than or equal to 38.');
        }
        if ((!preg_match("/^[a-zA-Z0-9-]*$/", ObjectSerializer::toString($shipment_id)))) {
            throw new \InvalidArgumentException("invalid value for \$shipment_id when calling ShipmentTransportationConfiguration., must conform to the pattern /^[a-zA-Z0-9-]*$/.");
        }

        $this->container['shipment_id'] = $shipment_id;

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


