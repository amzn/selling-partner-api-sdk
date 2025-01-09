<?php
/**
 * FeeDetail
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Product Fees
 *
 * The Selling Partner API for Product Fees lets you programmatically retrieve estimated fees for a product. You can then account for those fees in your pricing.
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

namespace OpenAPI\Client\Model\productFees;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * FeeDetail Class Doc Comment
 *
 * @category Class
 * @description The type of fee, fee amount, and other details.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class FeeDetail implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'FeeDetail';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'fee_type' => 'string',
             'fee_amount' => '\OpenAPI\Client\Model\productFees\MoneyType',
             'fee_promotion' => '\OpenAPI\Client\Model\productFees\MoneyType',
             'tax_amount' => '\OpenAPI\Client\Model\productFees\MoneyType',
             'final_fee' => '\OpenAPI\Client\Model\productFees\MoneyType',
             'included_fee_detail_list' => '\OpenAPI\Client\Model\productFees\IncludedFeeDetail[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'fee_type' => null,
            'fee_amount' => null,
            'fee_promotion' => null,
            'tax_amount' => null,
            'final_fee' => null,
            'included_fee_detail_list' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'fee_type' => false,
        'fee_amount' => false,
        'fee_promotion' => true,
        'tax_amount' => true,
        'final_fee' => false,
        'included_fee_detail_list' => true
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
        'fee_type' => 'FeeType',
                'fee_amount' => 'FeeAmount',
                'fee_promotion' => 'FeePromotion',
                'tax_amount' => 'TaxAmount',
                'final_fee' => 'FinalFee',
                'included_fee_detail_list' => 'IncludedFeeDetailList'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'fee_type' => 'setFeeType',
        'fee_amount' => 'setFeeAmount',
        'fee_promotion' => 'setFeePromotion',
        'tax_amount' => 'setTaxAmount',
        'final_fee' => 'setFinalFee',
        'included_fee_detail_list' => 'setIncludedFeeDetailList'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'fee_type' => 'getFeeType',
        'fee_amount' => 'getFeeAmount',
        'fee_promotion' => 'getFeePromotion',
        'tax_amount' => 'getTaxAmount',
        'final_fee' => 'getFinalFee',
        'included_fee_detail_list' => 'getIncludedFeeDetailList'
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
        $this->setIfExists('fee_type', $data ?? [], null);
        $this->setIfExists('fee_amount', $data ?? [], null);
        $this->setIfExists('fee_promotion', $data ?? [], null);
        $this->setIfExists('tax_amount', $data ?? [], null);
        $this->setIfExists('final_fee', $data ?? [], null);
        $this->setIfExists('included_fee_detail_list', $data ?? [], null);
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

        if ($this->container['fee_type'] === null) {
            $invalidProperties[] = "'fee_type' can't be null";
        }
        if ($this->container['fee_amount'] === null) {
            $invalidProperties[] = "'fee_amount' can't be null";
        }
        if ($this->container['final_fee'] === null) {
            $invalidProperties[] = "'final_fee' can't be null";
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
     * Gets fee_type
     *
     * @return string
     */
    public function getFeeType(): string
    {
        return $this->container['fee_type'];
    }

    /**
     * Sets fee_type
     *
     * @param string $fee_type The type of fee charged to a seller.
     *
     * @return self
     */
    public function setFeeType(string $fee_type): self
    {
        if (is_null($fee_type)) {
            throw new \InvalidArgumentException('non-nullable fee_type cannot be null');
        }
        $this->container['fee_type'] = $fee_type;

        return $this;
    }

    /**
     * Gets fee_amount
     *
     * @return \OpenAPI\Client\Model\productFees\MoneyType
     */
    public function getFeeAmount(): \OpenAPI\Client\Model\productFees\MoneyType
    {
        return $this->container['fee_amount'];
    }

    /**
     * Sets fee_amount
     *
     * @param \OpenAPI\Client\Model\productFees\MoneyType $fee_amount fee_amount
     *
     * @return self
     */
    public function setFeeAmount(\OpenAPI\Client\Model\productFees\MoneyType $fee_amount): self
    {
        if (is_null($fee_amount)) {
            throw new \InvalidArgumentException('non-nullable fee_amount cannot be null');
        }
        $this->container['fee_amount'] = $fee_amount;

        return $this;
    }

    /**
     * Gets fee_promotion
     *
     * @return \OpenAPI\Client\Model\productFees\MoneyType|null
     */
    public function getFeePromotion(): ?\OpenAPI\Client\Model\productFees\MoneyType
    {
        return $this->container['fee_promotion'];
    }

    /**
     * Sets fee_promotion
     *
     * @param \OpenAPI\Client\Model\productFees\MoneyType|null $fee_promotion fee_promotion
     *
     * @return self
     */
    public function setFeePromotion(?\OpenAPI\Client\Model\productFees\MoneyType $fee_promotion): self
    {
        if (is_null($fee_promotion)) {
            array_push($this->openAPINullablesSetToNull, 'fee_promotion');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('fee_promotion', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['fee_promotion'] = $fee_promotion;

        return $this;
    }

    /**
     * Gets tax_amount
     *
     * @return \OpenAPI\Client\Model\productFees\MoneyType|null
     */
    public function getTaxAmount(): ?\OpenAPI\Client\Model\productFees\MoneyType
    {
        return $this->container['tax_amount'];
    }

    /**
     * Sets tax_amount
     *
     * @param \OpenAPI\Client\Model\productFees\MoneyType|null $tax_amount tax_amount
     *
     * @return self
     */
    public function setTaxAmount(?\OpenAPI\Client\Model\productFees\MoneyType $tax_amount): self
    {
        if (is_null($tax_amount)) {
            array_push($this->openAPINullablesSetToNull, 'tax_amount');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('tax_amount', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['tax_amount'] = $tax_amount;

        return $this;
    }

    /**
     * Gets final_fee
     *
     * @return \OpenAPI\Client\Model\productFees\MoneyType
     */
    public function getFinalFee(): \OpenAPI\Client\Model\productFees\MoneyType
    {
        return $this->container['final_fee'];
    }

    /**
     * Sets final_fee
     *
     * @param \OpenAPI\Client\Model\productFees\MoneyType $final_fee final_fee
     *
     * @return self
     */
    public function setFinalFee(\OpenAPI\Client\Model\productFees\MoneyType $final_fee): self
    {
        if (is_null($final_fee)) {
            throw new \InvalidArgumentException('non-nullable final_fee cannot be null');
        }
        $this->container['final_fee'] = $final_fee;

        return $this;
    }

    /**
     * Gets included_fee_detail_list
     *
     * @return array|null
     */
    public function getIncludedFeeDetailList(): ?array
    {
        return $this->container['included_fee_detail_list'];
    }

    /**
     * Sets included_fee_detail_list
     *
     * @param array|null $included_fee_detail_list A list of other fees that contribute to a given fee.
     *
     * @return self
     */
    public function setIncludedFeeDetailList(?array $included_fee_detail_list): self
    {
        if (is_null($included_fee_detail_list)) {
            array_push($this->openAPINullablesSetToNull, 'included_fee_detail_list');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('included_fee_detail_list', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['included_fee_detail_list'] = $included_fee_detail_list;

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


