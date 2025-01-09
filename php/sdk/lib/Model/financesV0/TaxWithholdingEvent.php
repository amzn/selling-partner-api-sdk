<?php
/**
 * TaxWithholdingEvent
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

namespace OpenAPI\Client\Model\financesV0;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * TaxWithholdingEvent Class Doc Comment
 *
 * @category Class
 * @description A TaxWithholding event on seller&#39;s account.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class TaxWithholdingEvent implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'TaxWithholdingEvent';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'posted_date' => '\DateTime',
             'base_amount' => '\OpenAPI\Client\Model\financesV0\Currency',
             'withheld_amount' => '\OpenAPI\Client\Model\financesV0\Currency',
             'tax_withholding_period' => '\OpenAPI\Client\Model\financesV0\TaxWithholdingPeriod'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'posted_date' => 'date-time',
            'base_amount' => null,
            'withheld_amount' => null,
            'tax_withholding_period' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'posted_date' => true,
        'base_amount' => true,
        'withheld_amount' => true,
        'tax_withholding_period' => true
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
        'posted_date' => 'PostedDate',
                'base_amount' => 'BaseAmount',
                'withheld_amount' => 'WithheldAmount',
                'tax_withholding_period' => 'TaxWithholdingPeriod'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'posted_date' => 'setPostedDate',
        'base_amount' => 'setBaseAmount',
        'withheld_amount' => 'setWithheldAmount',
        'tax_withholding_period' => 'setTaxWithholdingPeriod'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'posted_date' => 'getPostedDate',
        'base_amount' => 'getBaseAmount',
        'withheld_amount' => 'getWithheldAmount',
        'tax_withholding_period' => 'getTaxWithholdingPeriod'
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
        $this->setIfExists('posted_date', $data ?? [], null);
        $this->setIfExists('base_amount', $data ?? [], null);
        $this->setIfExists('withheld_amount', $data ?? [], null);
        $this->setIfExists('tax_withholding_period', $data ?? [], null);
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
            array_push($this->openAPINullablesSetToNull, 'posted_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('posted_date', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['posted_date'] = $posted_date;

        return $this;
    }

    /**
     * Gets base_amount
     *
     * @return \OpenAPI\Client\Model\financesV0\Currency|null
     */
    public function getBaseAmount(): ?\OpenAPI\Client\Model\financesV0\Currency
    {
        return $this->container['base_amount'];
    }

    /**
     * Sets base_amount
     *
     * @param \OpenAPI\Client\Model\financesV0\Currency|null $base_amount base_amount
     *
     * @return self
     */
    public function setBaseAmount(?\OpenAPI\Client\Model\financesV0\Currency $base_amount): self
    {
        if (is_null($base_amount)) {
            array_push($this->openAPINullablesSetToNull, 'base_amount');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('base_amount', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['base_amount'] = $base_amount;

        return $this;
    }

    /**
     * Gets withheld_amount
     *
     * @return \OpenAPI\Client\Model\financesV0\Currency|null
     */
    public function getWithheldAmount(): ?\OpenAPI\Client\Model\financesV0\Currency
    {
        return $this->container['withheld_amount'];
    }

    /**
     * Sets withheld_amount
     *
     * @param \OpenAPI\Client\Model\financesV0\Currency|null $withheld_amount withheld_amount
     *
     * @return self
     */
    public function setWithheldAmount(?\OpenAPI\Client\Model\financesV0\Currency $withheld_amount): self
    {
        if (is_null($withheld_amount)) {
            array_push($this->openAPINullablesSetToNull, 'withheld_amount');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('withheld_amount', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['withheld_amount'] = $withheld_amount;

        return $this;
    }

    /**
     * Gets tax_withholding_period
     *
     * @return \OpenAPI\Client\Model\financesV0\TaxWithholdingPeriod|null
     */
    public function getTaxWithholdingPeriod(): ?\OpenAPI\Client\Model\financesV0\TaxWithholdingPeriod
    {
        return $this->container['tax_withholding_period'];
    }

    /**
     * Sets tax_withholding_period
     *
     * @param \OpenAPI\Client\Model\financesV0\TaxWithholdingPeriod|null $tax_withholding_period tax_withholding_period
     *
     * @return self
     */
    public function setTaxWithholdingPeriod(?\OpenAPI\Client\Model\financesV0\TaxWithholdingPeriod $tax_withholding_period): self
    {
        if (is_null($tax_withholding_period)) {
            array_push($this->openAPINullablesSetToNull, 'tax_withholding_period');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('tax_withholding_period', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['tax_withholding_period'] = $tax_withholding_period;

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


