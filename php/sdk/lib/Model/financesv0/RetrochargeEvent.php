<?php
/**
 * RetrochargeEvent
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Finances
 *
 * The Selling Partner API for Finances helps you obtain financial information relevant to a seller's business. You can obtain financial events for a given order, financial event group, or date range without having to wait until a statement period closes. You can also obtain financial event groups for a given date range.
 *
 * The version of the OpenAPI document: v0
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\financesv0;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * RetrochargeEvent Class Doc Comment
 *
 * @category Class
 * @description A retrocharge or retrocharge reversal.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class RetrochargeEvent implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'RetrochargeEvent';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'retrocharge_event_type' => 'string',
             'amazon_order_id' => 'string',
             'posted_date' => '\DateTime',
             'base_tax' => '\OpenAPI\Client\Model\financesv0\Currency',
             'shipping_tax' => '\OpenAPI\Client\Model\financesv0\Currency',
             'marketplace_name' => 'string',
             'retrocharge_tax_withheld_list' => '\OpenAPI\Client\Model\financesv0\TaxWithheldComponent[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'retrocharge_event_type' => null,
            'amazon_order_id' => null,
            'posted_date' => 'date-time',
            'base_tax' => null,
            'shipping_tax' => null,
            'marketplace_name' => null,
            'retrocharge_tax_withheld_list' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'retrocharge_event_type' => false,
        'amazon_order_id' => false,
        'posted_date' => false,
        'base_tax' => false,
        'shipping_tax' => false,
        'marketplace_name' => false,
        'retrocharge_tax_withheld_list' => false
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
        'retrocharge_event_type' => 'RetrochargeEventType',
                'amazon_order_id' => 'AmazonOrderId',
                'posted_date' => 'PostedDate',
                'base_tax' => 'BaseTax',
                'shipping_tax' => 'ShippingTax',
                'marketplace_name' => 'MarketplaceName',
                'retrocharge_tax_withheld_list' => 'RetrochargeTaxWithheldList'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'retrocharge_event_type' => 'setRetrochargeEventType',
        'amazon_order_id' => 'setAmazonOrderId',
        'posted_date' => 'setPostedDate',
        'base_tax' => 'setBaseTax',
        'shipping_tax' => 'setShippingTax',
        'marketplace_name' => 'setMarketplaceName',
        'retrocharge_tax_withheld_list' => 'setRetrochargeTaxWithheldList'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'retrocharge_event_type' => 'getRetrochargeEventType',
        'amazon_order_id' => 'getAmazonOrderId',
        'posted_date' => 'getPostedDate',
        'base_tax' => 'getBaseTax',
        'shipping_tax' => 'getShippingTax',
        'marketplace_name' => 'getMarketplaceName',
        'retrocharge_tax_withheld_list' => 'getRetrochargeTaxWithheldList'
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
        $this->setIfExists('retrocharge_event_type', $data ?? [], null);
        $this->setIfExists('amazon_order_id', $data ?? [], null);
        $this->setIfExists('posted_date', $data ?? [], null);
        $this->setIfExists('base_tax', $data ?? [], null);
        $this->setIfExists('shipping_tax', $data ?? [], null);
        $this->setIfExists('marketplace_name', $data ?? [], null);
        $this->setIfExists('retrocharge_tax_withheld_list', $data ?? [], null);
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
     * Gets retrocharge_event_type
     *
     * @return string|null
     */
    public function getRetrochargeEventType(): ?string
    {
        return $this->container['retrocharge_event_type'];
    }

    /**
     * Sets retrocharge_event_type
     *
     * @param string|null $retrocharge_event_type The type of event.  Possible values:  * Retrocharge  * RetrochargeReversal
     *
     * @return self
     */
    public function setRetrochargeEventType(?string $retrocharge_event_type): self
    {
        if (is_null($retrocharge_event_type)) {
            throw new \InvalidArgumentException('non-nullable retrocharge_event_type cannot be null');
        }
        $this->container['retrocharge_event_type'] = $retrocharge_event_type;

        return $this;
    }

    /**
     * Gets amazon_order_id
     *
     * @return string|null
     */
    public function getAmazonOrderId(): ?string
    {
        return $this->container['amazon_order_id'];
    }

    /**
     * Sets amazon_order_id
     *
     * @param string|null $amazon_order_id An Amazon-defined identifier for an order.
     *
     * @return self
     */
    public function setAmazonOrderId(?string $amazon_order_id): self
    {
        if (is_null($amazon_order_id)) {
            throw new \InvalidArgumentException('non-nullable amazon_order_id cannot be null');
        }
        $this->container['amazon_order_id'] = $amazon_order_id;

        return $this;
    }

    /**
     * Gets posted_date
     *
     * @return \DateTime|null
     */
    public function getPostedDate(): ?\DateTime
    {
        return $this->container['posted_date'];
    }

    /**
     * Sets posted_date
     *
     * @param \DateTime|null $posted_date Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     *
     * @return self
     */
    public function setPostedDate(?\DateTime $posted_date): self
    {
        if (is_null($posted_date)) {
            throw new \InvalidArgumentException('non-nullable posted_date cannot be null');
        }
        $this->container['posted_date'] = $posted_date;

        return $this;
    }

    /**
     * Gets base_tax
     *
     * @return \OpenAPI\Client\Model\financesv0\Currency|null
     */
    public function getBaseTax(): ?\OpenAPI\Client\Model\financesv0\Currency
    {
        return $this->container['base_tax'];
    }

    /**
     * Sets base_tax
     *
     * @param \OpenAPI\Client\Model\financesv0\Currency|null $base_tax base_tax
     *
     * @return self
     */
    public function setBaseTax(?\OpenAPI\Client\Model\financesv0\Currency $base_tax): self
    {
        if (is_null($base_tax)) {
            throw new \InvalidArgumentException('non-nullable base_tax cannot be null');
        }
        $this->container['base_tax'] = $base_tax;

        return $this;
    }

    /**
     * Gets shipping_tax
     *
     * @return \OpenAPI\Client\Model\financesv0\Currency|null
     */
    public function getShippingTax(): ?\OpenAPI\Client\Model\financesv0\Currency
    {
        return $this->container['shipping_tax'];
    }

    /**
     * Sets shipping_tax
     *
     * @param \OpenAPI\Client\Model\financesv0\Currency|null $shipping_tax shipping_tax
     *
     * @return self
     */
    public function setShippingTax(?\OpenAPI\Client\Model\financesv0\Currency $shipping_tax): self
    {
        if (is_null($shipping_tax)) {
            throw new \InvalidArgumentException('non-nullable shipping_tax cannot be null');
        }
        $this->container['shipping_tax'] = $shipping_tax;

        return $this;
    }

    /**
     * Gets marketplace_name
     *
     * @return string|null
     */
    public function getMarketplaceName(): ?string
    {
        return $this->container['marketplace_name'];
    }

    /**
     * Sets marketplace_name
     *
     * @param string|null $marketplace_name The name of the marketplace where the retrocharge event occurred.
     *
     * @return self
     */
    public function setMarketplaceName(?string $marketplace_name): self
    {
        if (is_null($marketplace_name)) {
            throw new \InvalidArgumentException('non-nullable marketplace_name cannot be null');
        }
        $this->container['marketplace_name'] = $marketplace_name;

        return $this;
    }

    /**
     * Gets retrocharge_tax_withheld_list
     *
     * @return arrayA|null
     */
    public function getRetrochargeTaxWithheldList(): ?array
    {
        return $this->container['retrocharge_tax_withheld_list'];
    }

    /**
     * Sets retrocharge_tax_withheld_list
     *
     * @param array|null $retrocharge_tax_withheld_list A list of information about taxes withheld.
     *
     * @return self
     */
    public function setRetrochargeTaxWithheldList(?array $retrocharge_tax_withheld_list): self
    {
        if (is_null($retrocharge_tax_withheld_list)) {
            throw new \InvalidArgumentException('non-nullable retrocharge_tax_withheld_list cannot be null');
        }
        $this->container['retrocharge_tax_withheld_list'] = $retrocharge_tax_withheld_list;

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


