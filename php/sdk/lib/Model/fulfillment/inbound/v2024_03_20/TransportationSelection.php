<?php
/**
 * TransportationSelection
 *
 * PHP version 8.3
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

namespace OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * TransportationSelection Class Doc Comment
 *
 * @category Class
 * @description The transportation option selected to confirm.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class TransportationSelection implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'TransportationSelection';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'contact_information' => '\OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ContactInformation',
             'shipment_id' => 'string',
             'transportation_option_id' => 'string'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'contact_information' => null,
            'shipment_id' => null,
            'transportation_option_id' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'contact_information' => true,
        'shipment_id' => false,
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
        'contact_information' => 'contactInformation',
                'shipment_id' => 'shipmentId',
                'transportation_option_id' => 'transportationOptionId'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'contact_information' => 'setContactInformation',
        'shipment_id' => 'setShipmentId',
        'transportation_option_id' => 'setTransportationOptionId'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'contact_information' => 'getContactInformation',
        'shipment_id' => 'getShipmentId',
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
        $this->setIfExists('contact_information', $data ?? [], null);
        $this->setIfExists('shipment_id', $data ?? [], null);
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
     * @param string $shipment_id Shipment ID that the transportation Option is for.
     *
     * @return self
     */
    public function setShipmentId(string $shipment_id): self
    {
        if (is_null($shipment_id)) {
            throw new \InvalidArgumentException('non-nullable shipment_id cannot be null');
        }
        if ((mb_strlen($shipment_id) > 38)) {
            throw new \InvalidArgumentException('invalid length for $shipment_id when calling TransportationSelection., must be smaller than or equal to 38.');
        }
        if ((mb_strlen($shipment_id) < 38)) {
            throw new \InvalidArgumentException('invalid length for $shipment_id when calling TransportationSelection., must be bigger than or equal to 38.');
        }
        if ((!preg_match("/^[a-zA-Z0-9-]*$/", ObjectSerializer::toString($shipment_id)))) {
            throw new \InvalidArgumentException("invalid value for \$shipment_id when calling TransportationSelection., must conform to the pattern /^[a-zA-Z0-9-]*$/.");
        }

        $this->container['shipment_id'] = $shipment_id;

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
     * @param string $transportation_option_id Transportation option being selected for the provided shipment.
     *
     * @return self
     */
    public function setTransportationOptionId(string $transportation_option_id): self
    {
        if (is_null($transportation_option_id)) {
            throw new \InvalidArgumentException('non-nullable transportation_option_id cannot be null');
        }
        if ((mb_strlen($transportation_option_id) > 38)) {
            throw new \InvalidArgumentException('invalid length for $transportation_option_id when calling TransportationSelection., must be smaller than or equal to 38.');
        }
        if ((mb_strlen($transportation_option_id) < 38)) {
            throw new \InvalidArgumentException('invalid length for $transportation_option_id when calling TransportationSelection., must be bigger than or equal to 38.');
        }
        if ((!preg_match("/^[a-zA-Z0-9-]*$/", ObjectSerializer::toString($transportation_option_id)))) {
            throw new \InvalidArgumentException("invalid value for \$transportation_option_id when calling TransportationSelection., must conform to the pattern /^[a-zA-Z0-9-]*$/.");
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


