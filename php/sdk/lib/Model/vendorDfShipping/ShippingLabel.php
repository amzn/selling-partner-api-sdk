<?php
/**
 * ShippingLabel
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Direct Fulfillment Shipping
 *
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor's shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\vendorDfShipping;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * ShippingLabel Class Doc Comment
 *
 * @category Class
 * @description Shipping label information for an order, including the purchase order number, selling party, ship from party, label format, and package details.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ShippingLabel implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'ShippingLabel';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'purchase_order_number' => 'string',
             'selling_party' => '\OpenAPI\Client\Model\vendorDfShipping\PartyIdentification',
             'ship_from_party' => '\OpenAPI\Client\Model\vendorDfShipping\PartyIdentification',
             'label_format' => 'string',
             'label_data' => '\OpenAPI\Client\Model\vendorDfShipping\LabelData[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'purchase_order_number' => null,
            'selling_party' => null,
            'ship_from_party' => null,
            'label_format' => null,
            'label_data' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'purchase_order_number' => false,
        'selling_party' => false,
        'ship_from_party' => false,
        'label_format' => false,
        'label_data' => false
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
        'purchase_order_number' => 'purchaseOrderNumber',
                'selling_party' => 'sellingParty',
                'ship_from_party' => 'shipFromParty',
                'label_format' => 'labelFormat',
                'label_data' => 'labelData'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'purchase_order_number' => 'setPurchaseOrderNumber',
        'selling_party' => 'setSellingParty',
        'ship_from_party' => 'setShipFromParty',
        'label_format' => 'setLabelFormat',
        'label_data' => 'setLabelData'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'purchase_order_number' => 'getPurchaseOrderNumber',
        'selling_party' => 'getSellingParty',
        'ship_from_party' => 'getShipFromParty',
        'label_format' => 'getLabelFormat',
        'label_data' => 'getLabelData'
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

    public const LABEL_FORMAT_PNG = 'PNG';
    public const LABEL_FORMAT_ZPL = 'ZPL';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getLabelFormatAllowableValues(): array
    {
        return [
            self::LABEL_FORMAT_PNG,
            self::LABEL_FORMAT_ZPL,
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
        $this->setIfExists('purchase_order_number', $data ?? [], null);
        $this->setIfExists('selling_party', $data ?? [], null);
        $this->setIfExists('ship_from_party', $data ?? [], null);
        $this->setIfExists('label_format', $data ?? [], null);
        $this->setIfExists('label_data', $data ?? [], null);
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

        if ($this->container['purchase_order_number'] === null) {
            $invalidProperties[] = "'purchase_order_number' can't be null";
        }
        if (!preg_match("/^[a-zA-Z0-9]+$/", $this->container['purchase_order_number'])) {
            $invalidProperties[] = "invalid value for 'purchase_order_number', must be conform to the pattern /^[a-zA-Z0-9]+$/.";
        }

        if ($this->container['selling_party'] === null) {
            $invalidProperties[] = "'selling_party' can't be null";
        }
        if ($this->container['ship_from_party'] === null) {
            $invalidProperties[] = "'ship_from_party' can't be null";
        }
        if ($this->container['label_format'] === null) {
            $invalidProperties[] = "'label_format' can't be null";
        }
        $allowedValues = $this->getLabelFormatAllowableValues();
        if (!is_null($this->container['label_format']) && !in_array($this->container['label_format'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'label_format', must be one of '%s'",
                $this->container['label_format'],
                implode("', '", $allowedValues)
            );
        }

        if ($this->container['label_data'] === null) {
            $invalidProperties[] = "'label_data' can't be null";
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
     * Gets purchase_order_number
     *
     * @return string
     */
    public function getPurchaseOrderNumber(): string
    {
        return $this->container['purchase_order_number'];
    }

    /**
     * Sets purchase_order_number
     *
     * @param string $purchase_order_number This field will contain the Purchase Order Number for this order.
     *
     * @return self
     */
    public function setPurchaseOrderNumber(string $purchase_order_number): self
    {
        if (is_null($purchase_order_number)) {
            throw new \InvalidArgumentException('non-nullable purchase_order_number cannot be null');
        }

        if ((!preg_match("/^[a-zA-Z0-9]+$/", ObjectSerializer::toString($purchase_order_number)))) {
            throw new \InvalidArgumentException("invalid value for \$purchase_order_number when calling ShippingLabel., must conform to the pattern /^[a-zA-Z0-9]+$/.");
        }

        $this->container['purchase_order_number'] = $purchase_order_number;

        return $this;
    }

    /**
     * Gets selling_party
     *
     * @return \OpenAPI\Client\Model\vendorDfShipping\PartyIdentification
     */
    public function getSellingParty(): \OpenAPI\Client\Model\vendorDfShipping\PartyIdentification
    {
        return $this->container['selling_party'];
    }

    /**
     * Sets selling_party
     *
     * @param \OpenAPI\Client\Model\vendorDfShipping\PartyIdentification $selling_party selling_party
     *
     * @return self
     */
    public function setSellingParty(\OpenAPI\Client\Model\vendorDfShipping\PartyIdentification $selling_party): self
    {
        if (is_null($selling_party)) {
            throw new \InvalidArgumentException('non-nullable selling_party cannot be null');
        }
        $this->container['selling_party'] = $selling_party;

        return $this;
    }

    /**
     * Gets ship_from_party
     *
     * @return \OpenAPI\Client\Model\vendorDfShipping\PartyIdentification
     */
    public function getShipFromParty(): \OpenAPI\Client\Model\vendorDfShipping\PartyIdentification
    {
        return $this->container['ship_from_party'];
    }

    /**
     * Sets ship_from_party
     *
     * @param \OpenAPI\Client\Model\vendorDfShipping\PartyIdentification $ship_from_party ship_from_party
     *
     * @return self
     */
    public function setShipFromParty(\OpenAPI\Client\Model\vendorDfShipping\PartyIdentification $ship_from_party): self
    {
        if (is_null($ship_from_party)) {
            throw new \InvalidArgumentException('non-nullable ship_from_party cannot be null');
        }
        $this->container['ship_from_party'] = $ship_from_party;

        return $this;
    }

    /**
     * Gets label_format
     *
     * @return string
     */
    public function getLabelFormat(): string
    {
        return $this->container['label_format'];
    }

    /**
     * Sets label_format
     *
     * @param string $label_format Format of the label.
     *
     * @return self
     */
    public function setLabelFormat(string $label_format): self
    {
        if (is_null($label_format)) {
            throw new \InvalidArgumentException('non-nullable label_format cannot be null');
        }
        $allowedValues = $this->getLabelFormatAllowableValues();
        if (!in_array($label_format, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'label_format', must be one of '%s'",
                    $label_format,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['label_format'] = $label_format;

        return $this;
    }

    /**
     * Gets label_data
     *
     * @return array
     */
    public function getLabelData(): array
    {
        return $this->container['label_data'];
    }

    /**
     * Sets label_data
     *
     * @param array $label_data Provides the details of the packages in this shipment.
     *
     * @return self
     */
    public function setLabelData(array $label_data): self
    {
        if (is_null($label_data)) {
            throw new \InvalidArgumentException('non-nullable label_data cannot be null');
        }
        $this->container['label_data'] = $label_data;

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


