<?php
/**
 * PackingOption
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

namespace OpenAPI\Client\Model\fulfillmentinbound;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * PackingOption Class Doc Comment
 *
 * @category Class
 * @description A packing option contains a set of pack groups plus additional information about the packing option, such as any discounts or fees if it&#39;s selected.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class PackingOption implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'PackingOption';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'discounts' => '\OpenAPI\Client\Model\fulfillmentinbound\Incentive[]',
             'expiration' => '\DateTime',
             'fees' => '\OpenAPI\Client\Model\fulfillmentinbound\Incentive[]',
             'packing_groups' => 'string[]',
             'packing_option_id' => 'string',
             'status' => 'string',
             'supported_shipping_configurations' => '\OpenAPI\Client\Model\fulfillmentinbound\ShippingConfiguration[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'discounts' => null,
            'expiration' => 'date-time',
            'fees' => null,
            'packing_groups' => null,
            'packing_option_id' => null,
            'status' => null,
            'supported_shipping_configurations' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'discounts' => false,
        'expiration' => false,
        'fees' => false,
        'packing_groups' => false,
        'packing_option_id' => false,
        'status' => false,
        'supported_shipping_configurations' => false
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
        'discounts' => 'discounts',
                'expiration' => 'expiration',
                'fees' => 'fees',
                'packing_groups' => 'packingGroups',
                'packing_option_id' => 'packingOptionId',
                'status' => 'status',
                'supported_shipping_configurations' => 'supportedShippingConfigurations'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'discounts' => 'setDiscounts',
        'expiration' => 'setExpiration',
        'fees' => 'setFees',
        'packing_groups' => 'setPackingGroups',
        'packing_option_id' => 'setPackingOptionId',
        'status' => 'setStatus',
        'supported_shipping_configurations' => 'setSupportedShippingConfigurations'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'discounts' => 'getDiscounts',
        'expiration' => 'getExpiration',
        'fees' => 'getFees',
        'packing_groups' => 'getPackingGroups',
        'packing_option_id' => 'getPackingOptionId',
        'status' => 'getStatus',
        'supported_shipping_configurations' => 'getSupportedShippingConfigurations'
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
        $this->setIfExists('discounts', $data ?? [], null);
        $this->setIfExists('expiration', $data ?? [], null);
        $this->setIfExists('fees', $data ?? [], null);
        $this->setIfExists('packing_groups', $data ?? [], null);
        $this->setIfExists('packing_option_id', $data ?? [], null);
        $this->setIfExists('status', $data ?? [], null);
        $this->setIfExists('supported_shipping_configurations', $data ?? [], null);
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

        if ($this->container['discounts'] === null) {
            $invalidProperties[] = "'discounts' can't be null";
        }
        if ($this->container['fees'] === null) {
            $invalidProperties[] = "'fees' can't be null";
        }
        if ($this->container['packing_groups'] === null) {
            $invalidProperties[] = "'packing_groups' can't be null";
        }
        if ($this->container['packing_option_id'] === null) {
            $invalidProperties[] = "'packing_option_id' can't be null";
        }
        if ((mb_strlen($this->container['packing_option_id']) > 38)) {
            $invalidProperties[] = "invalid value for 'packing_option_id', the character length must be smaller than or equal to 38.";
        }

        if ((mb_strlen($this->container['packing_option_id']) < 38)) {
            $invalidProperties[] = "invalid value for 'packing_option_id', the character length must be bigger than or equal to 38.";
        }

        if (!preg_match("/^[a-zA-Z0-9-]*$/", $this->container['packing_option_id'])) {
            $invalidProperties[] = "invalid value for 'packing_option_id', must be conform to the pattern /^[a-zA-Z0-9-]*$/.";
        }

        if ($this->container['status'] === null) {
            $invalidProperties[] = "'status' can't be null";
        }
        if ((mb_strlen($this->container['status']) > 1024)) {
            $invalidProperties[] = "invalid value for 'status', the character length must be smaller than or equal to 1024.";
        }

        if ((mb_strlen($this->container['status']) < 1)) {
            $invalidProperties[] = "invalid value for 'status', the character length must be bigger than or equal to 1.";
        }

        if ($this->container['supported_shipping_configurations'] === null) {
            $invalidProperties[] = "'supported_shipping_configurations' can't be null";
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
     * Gets discounts
     *
     * @return arrayA
     */
    public function getDiscounts(): array
    {
        return $this->container['discounts'];
    }

    /**
     * Sets discounts
     *
     * @param array $discounts Discount for the offered option.
     *
     * @return self
     */
    public function setDiscounts(array $discounts): self
    {
        if (is_null($discounts)) {
            throw new \InvalidArgumentException('non-nullable discounts cannot be null');
        }
        $this->container['discounts'] = $discounts;

        return $this;
    }

    /**
     * Gets expiration
     *
     * @return \DateTime|null
     */
    public function getExpiration(): ?\DateTime
    {
        return $this->container['expiration'];
    }

    /**
     * Sets expiration
     *
     * @param \DateTime|null $expiration The time at which this packing option is no longer valid. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) datetime format with pattern `yyyy-MM-ddTHH:mm:ss.sssZ`.
     *
     * @return self
     */
    public function setExpiration(?\DateTime $expiration): self
    {
        if (is_null($expiration)) {
            throw new \InvalidArgumentException('non-nullable expiration cannot be null');
        }
        $this->container['expiration'] = $expiration;

        return $this;
    }

    /**
     * Gets fees
     *
     * @return arrayA
     */
    public function getFees(): array
    {
        return $this->container['fees'];
    }

    /**
     * Sets fees
     *
     * @param array $fees Fee for the offered option.
     *
     * @return self
     */
    public function setFees(array $fees): self
    {
        if (is_null($fees)) {
            throw new \InvalidArgumentException('non-nullable fees cannot be null');
        }
        $this->container['fees'] = $fees;

        return $this;
    }

    /**
     * Gets packing_groups
     *
     * @return arrayA
     */
    public function getPackingGroups(): array
    {
        return $this->container['packing_groups'];
    }

    /**
     * Sets packing_groups
     *
     * @param array $packing_groups Packing group IDs.
     *
     * @return self
     */
    public function setPackingGroups(array $packing_groups): self
    {
        if (is_null($packing_groups)) {
            throw new \InvalidArgumentException('non-nullable packing_groups cannot be null');
        }
        $this->container['packing_groups'] = $packing_groups;

        return $this;
    }

    /**
     * Gets packing_option_id
     *
     * @return string
     */
    public function getPackingOptionId(): string
    {
        return $this->container['packing_option_id'];
    }

    /**
     * Sets packing_option_id
     *
     * @param string $packing_option_id Identifier of a packing option.
     *
     * @return self
     */
    public function setPackingOptionId(string $packing_option_id): self
    {
        if (is_null($packing_option_id)) {
            throw new \InvalidArgumentException('non-nullable packing_option_id cannot be null');
        }
        if ((mb_strlen($packing_option_id) > 38)) {
            throw new \InvalidArgumentException('invalid length for $packing_option_id when calling PackingOption., must be smaller than or equal to 38.');
        }
        if ((mb_strlen($packing_option_id) < 38)) {
            throw new \InvalidArgumentException('invalid length for $packing_option_id when calling PackingOption., must be bigger than or equal to 38.');
        }
        if ((!preg_match("/^[a-zA-Z0-9-]*$/", ObjectSerializer::toString($packing_option_id)))) {
            throw new \InvalidArgumentException("invalid value for \$packing_option_id when calling PackingOption., must conform to the pattern /^[a-zA-Z0-9-]*$/.");
        }

        $this->container['packing_option_id'] = $packing_option_id;

        return $this;
    }

    /**
     * Gets status
     *
     * @return string
     */
    public function getStatus(): string
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     *
     * @param string $status The status of the packing option. Possible values: `OFFERED`, `ACCEPTED`, `EXPIRED`.
     *
     * @return self
     */
    public function setStatus(string $status): self
    {
        if (is_null($status)) {
            throw new \InvalidArgumentException('non-nullable status cannot be null');
        }
        if ((mb_strlen($status) > 1024)) {
            throw new \InvalidArgumentException('invalid length for $status when calling PackingOption., must be smaller than or equal to 1024.');
        }
        if ((mb_strlen($status) < 1)) {
            throw new \InvalidArgumentException('invalid length for $status when calling PackingOption., must be bigger than or equal to 1.');
        }

        $this->container['status'] = $status;

        return $this;
    }

    /**
     * Gets supported_shipping_configurations
     *
     * @return arrayA
     */
    public function getSupportedShippingConfigurations(): array
    {
        return $this->container['supported_shipping_configurations'];
    }

    /**
     * Sets supported_shipping_configurations
     *
     * @param array $supported_shipping_configurations List of supported shipping modes.
     *
     * @return self
     */
    public function setSupportedShippingConfigurations(array $supported_shipping_configurations): self
    {
        if (is_null($supported_shipping_configurations)) {
            throw new \InvalidArgumentException('non-nullable supported_shipping_configurations cannot be null');
        }
        $this->container['supported_shipping_configurations'] = $supported_shipping_configurations;

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


