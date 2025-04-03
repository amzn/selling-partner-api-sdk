<?php

/**
 * ShipmentTransportationConfiguration.
 *
 * PHP version 8.3
 *
 * @category Class
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
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

namespace SpApi\Model\fulfillment\inbound\v2024_03_20;

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * ShipmentTransportationConfiguration Class Doc Comment.
 *
 * @category Class
 *
 * @description Details needed to generate the transportation options.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class ShipmentTransportationConfiguration implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'ShipmentTransportationConfiguration';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'contact_information' => '\SpApi\Model\fulfillment\inbound\v2024_03_20\ContactInformation',
        'freight_information' => '\SpApi\Model\fulfillment\inbound\v2024_03_20\FreightInformation',
        'pallets' => '\SpApi\Model\fulfillment\inbound\v2024_03_20\PalletInput[]',
        'ready_to_ship_window' => '\SpApi\Model\fulfillment\inbound\v2024_03_20\WindowInput',
        'shipment_id' => 'string'];

    /**
     * Array of property to format mappings. Used for (de)serialization.
     *
     * @var string[]
     *
     * @phpstan-var array<string, string|null>
     *
     * @psalm-var array<string, string|null>
     */
    protected static array $openAPIFormats = [
        'contact_information' => null,
        'freight_information' => null,
        'pallets' => null,
        'ready_to_ship_window' => null,
        'shipment_id' => null];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'contact_information' => true,
        'freight_information' => true,
        'pallets' => true,
        'ready_to_ship_window' => false,
        'shipment_id' => false,
    ];

    /**
     * If a nullable field gets set to null, insert it here.
     *
     * @var bool[]
     */
    protected array $openAPINullablesSetToNull = [];

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name.
     *
     * @var string[]
     */
    protected static array $attributeMap = [
        'contact_information' => 'contactInformation',
        'freight_information' => 'freightInformation',
        'pallets' => 'pallets',
        'ready_to_ship_window' => 'readyToShipWindow',
        'shipment_id' => 'shipmentId',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'contact_information' => 'setContactInformation',
        'freight_information' => 'setFreightInformation',
        'pallets' => 'setPallets',
        'ready_to_ship_window' => 'setReadyToShipWindow',
        'shipment_id' => 'setShipmentId',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'contact_information' => 'getContactInformation',
        'freight_information' => 'getFreightInformation',
        'pallets' => 'getPallets',
        'ready_to_ship_window' => 'getReadyToShipWindow',
        'shipment_id' => 'getShipmentId',
    ];

    /**
     * Associative array for storing property values.
     */
    protected array $container = [];

    /**
     * Constructor.
     *
     * @param null|array $data Associated array of property values
     *                         initializing the model
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
     * Gets the string presentation of the object.
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
     * Array of property to type mappings. Used for (de)serialization.
     */
    public static function openAPITypes(): array
    {
        return self::$openAPITypes;
    }

    /**
     * Array of property to format mappings. Used for (de)serialization.
     */
    public static function openAPIFormats(): array
    {
        return self::$openAPIFormats;
    }

    /**
     * Checks if a property is nullable.
     */
    public static function isNullable(string $property): bool
    {
        return self::openAPINullables()[$property] ?? false;
    }

    /**
     * Checks if a nullable property is set to null.
     */
    public function isNullableSetToNull(string $property): bool
    {
        return in_array($property, $this->getOpenAPINullablesSetToNull(), true);
    }

    /**
     * Array of attributes where the key is the local name,
     * and the value is the original name.
     */
    public static function attributeMap(): array
    {
        return self::$attributeMap;
    }

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     */
    public static function setters(): array
    {
        return self::$setters;
    }

    /**
     * Array of attributes to getter functions (for serialization of requests).
     */
    public static function getters(): array
    {
        return self::$getters;
    }

    /**
     * The original name of the model.
     */
    public function getModelName(): string
    {
        return self::$openAPIModelName;
    }

    /**
     * Show all the invalid properties with reasons.
     *
     * @return array invalid properties with reasons
     */
    public function listInvalidProperties(): array
    {
        $invalidProperties = [];

        if (null === $this->container['ready_to_ship_window']) {
            $invalidProperties[] = "'ready_to_ship_window' can't be null";
        }
        if (null === $this->container['shipment_id']) {
            $invalidProperties[] = "'shipment_id' can't be null";
        }
        if (mb_strlen($this->container['shipment_id']) > 38) {
            $invalidProperties[] = "invalid value for 'shipment_id', the character length must be smaller than or equal to 38.";
        }

        if (mb_strlen($this->container['shipment_id']) < 38) {
            $invalidProperties[] = "invalid value for 'shipment_id', the character length must be bigger than or equal to 38.";
        }

        if (!preg_match('/^[a-zA-Z0-9-]*$/', $this->container['shipment_id'])) {
            $invalidProperties[] = "invalid value for 'shipment_id', must be conform to the pattern /^[a-zA-Z0-9-]*$/.";
        }

        return $invalidProperties;
    }

    /**
     * Validate all the properties in the model
     * return true if all passed.
     *
     * @return bool True if all properties are valid
     */
    public function valid(): bool
    {
        return 0 === count($this->listInvalidProperties());
    }

    /**
     * Gets contact_information.
     */
    public function getContactInformation(): ?ContactInformation
    {
        return $this->container['contact_information'];
    }

    /**
     * Sets contact_information.
     *
     * @param null|ContactInformation $contact_information contact_information
     */
    public function setContactInformation(?ContactInformation $contact_information): self
    {
        if (is_null($contact_information)) {
            array_push($this->openAPINullablesSetToNull, 'contact_information');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('contact_information', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['contact_information'] = $contact_information;

        return $this;
    }

    /**
     * Gets freight_information.
     */
    public function getFreightInformation(): ?FreightInformation
    {
        return $this->container['freight_information'];
    }

    /**
     * Sets freight_information.
     *
     * @param null|FreightInformation $freight_information freight_information
     */
    public function setFreightInformation(?FreightInformation $freight_information): self
    {
        if (is_null($freight_information)) {
            array_push($this->openAPINullablesSetToNull, 'freight_information');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('freight_information', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['freight_information'] = $freight_information;

        return $this;
    }

    /**
     * Gets pallets.
     */
    public function getPallets(): ?array
    {
        return $this->container['pallets'];
    }

    /**
     * Sets pallets.
     *
     * @param null|array $pallets list of pallet configuration inputs
     */
    public function setPallets(?array $pallets): self
    {
        if (is_null($pallets)) {
            array_push($this->openAPINullablesSetToNull, 'pallets');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('pallets', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['pallets'] = $pallets;

        return $this;
    }

    /**
     * Gets ready_to_ship_window.
     */
    public function getReadyToShipWindow(): WindowInput
    {
        return $this->container['ready_to_ship_window'];
    }

    /**
     * Sets ready_to_ship_window.
     *
     * @param WindowInput $ready_to_ship_window ready_to_ship_window
     */
    public function setReadyToShipWindow(WindowInput $ready_to_ship_window): self
    {
        if (is_null($ready_to_ship_window)) {
            throw new \InvalidArgumentException('non-nullable ready_to_ship_window cannot be null');
        }
        $this->container['ready_to_ship_window'] = $ready_to_ship_window;

        return $this;
    }

    /**
     * Gets shipment_id.
     */
    public function getShipmentId(): string
    {
        return $this->container['shipment_id'];
    }

    /**
     * Sets shipment_id.
     *
     * @param string $shipment_id Identifier of a shipment. A shipment contains the boxes and units being inbounded.
     */
    public function setShipmentId(string $shipment_id): self
    {
        if (is_null($shipment_id)) {
            throw new \InvalidArgumentException('non-nullable shipment_id cannot be null');
        }
        if (mb_strlen($shipment_id) > 38) {
            throw new \InvalidArgumentException('invalid length for $shipment_id when calling ShipmentTransportationConfiguration., must be smaller than or equal to 38.');
        }
        if (mb_strlen($shipment_id) < 38) {
            throw new \InvalidArgumentException('invalid length for $shipment_id when calling ShipmentTransportationConfiguration., must be bigger than or equal to 38.');
        }
        if (!preg_match('/^[a-zA-Z0-9-]*$/', ObjectSerializer::toString($shipment_id))) {
            throw new \InvalidArgumentException('invalid value for $shipment_id when calling ShipmentTransportationConfiguration., must conform to the pattern /^[a-zA-Z0-9-]*$/.');
        }

        $this->container['shipment_id'] = $shipment_id;

        return $this;
    }

    /**
     * Returns true if offset exists. False otherwise.
     *
     * @param int $offset Offset
     */
    public function offsetExists($offset): bool
    {
        return isset($this->container[$offset]);
    }

    /**
     * Gets offset.
     *
     * @param int $offset Offset
     *
     * @return null|mixed
     */
    #[\ReturnTypeWillChange]
    public function offsetGet($offset): mixed
    {
        return $this->container[$offset] ?? null;
    }

    /**
     * Sets value based on offset.
     *
     * @param null|int $offset Offset
     * @param mixed    $value  Value to be set
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
     * @param int $offset Offset
     */
    public function offsetUnset($offset): void
    {
        unset($this->container[$offset]);
    }

    /**
     * Serializes the object to a value that can be serialized natively by json_encode().
     *
     * @see https://www.php.net/manual/en/jsonserializable.jsonserialize.php
     *
     * @return mixed returns data which can be serialized by json_encode(), which is a value
     *               of any type other than a resource
     */
    #[\ReturnTypeWillChange]
    public function jsonSerialize(): mixed
    {
        return ObjectSerializer::sanitizeForSerialization($this);
    }

    /**
     * Gets a header-safe presentation of the object.
     */
    public function toHeaderValue(): string
    {
        return json_encode(ObjectSerializer::sanitizeForSerialization($this));
    }

    /**
     * Array of nullable properties.
     */
    protected static function openAPINullables(): array
    {
        return self::$openAPINullables;
    }

    /**
     * Array of nullable field names deliberately set to null.
     *
     * @return bool[]
     */
    private function getOpenAPINullablesSetToNull(): array
    {
        return $this->openAPINullablesSetToNull;
    }

    /**
     * Setter - Array of nullable field names deliberately set to null.
     *
     * @param bool[] $openAPINullablesSetToNull
     */
    private function setOpenAPINullablesSetToNull(array $openAPINullablesSetToNull): void
    {
        $this->openAPINullablesSetToNull = $openAPINullablesSetToNull;
    }

    /**
     * Sets $this->container[$variableName] to the given data or to the given default Value; if $variableName
     * is nullable and its value is set to null in the $fields array, then mark it as "set to null" in the
     * $this->openAPINullablesSetToNull array.
     *
     * @param mixed $defaultValue
     */
    private function setIfExists(string $variableName, array $fields, $defaultValue): void
    {
        if (self::isNullable($variableName) && array_key_exists($variableName, $fields) && is_null($fields[$variableName])) {
            $this->openAPINullablesSetToNull[] = $variableName;
        }

        $this->container[$variableName] = $fields[$variableName] ?? $defaultValue;
    }
}
