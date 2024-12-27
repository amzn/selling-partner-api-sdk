<?php
/**
 * AdjustmentItem
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
 * AdjustmentItem Class Doc Comment
 *
 * @category Class
 * @description An item in an adjustment to the seller&#39;s account.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class AdjustmentItem implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'AdjustmentItem';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'quantity' => 'string',
             'per_unit_amount' => '\OpenAPI\Client\Model\financesv0\Currency',
             'total_amount' => '\OpenAPI\Client\Model\financesv0\Currency',
             'seller_sku' => 'string',
             'fn_sku' => 'string',
             'product_description' => 'string',
             'asin' => 'string',
             'transaction_number' => 'string'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'quantity' => null,
            'per_unit_amount' => null,
            'total_amount' => null,
            'seller_sku' => null,
            'fn_sku' => null,
            'product_description' => null,
            'asin' => null,
            'transaction_number' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'quantity' => false,
        'per_unit_amount' => false,
        'total_amount' => false,
        'seller_sku' => false,
        'fn_sku' => false,
        'product_description' => false,
        'asin' => false,
        'transaction_number' => false
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
        'quantity' => 'Quantity',
                'per_unit_amount' => 'PerUnitAmount',
                'total_amount' => 'TotalAmount',
                'seller_sku' => 'SellerSKU',
                'fn_sku' => 'FnSKU',
                'product_description' => 'ProductDescription',
                'asin' => 'ASIN',
                'transaction_number' => 'TransactionNumber'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'quantity' => 'setQuantity',
        'per_unit_amount' => 'setPerUnitAmount',
        'total_amount' => 'setTotalAmount',
        'seller_sku' => 'setSellerSku',
        'fn_sku' => 'setFnSku',
        'product_description' => 'setProductDescription',
        'asin' => 'setAsin',
        'transaction_number' => 'setTransactionNumber'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'quantity' => 'getQuantity',
        'per_unit_amount' => 'getPerUnitAmount',
        'total_amount' => 'getTotalAmount',
        'seller_sku' => 'getSellerSku',
        'fn_sku' => 'getFnSku',
        'product_description' => 'getProductDescription',
        'asin' => 'getAsin',
        'transaction_number' => 'getTransactionNumber'
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
        $this->setIfExists('quantity', $data ?? [], null);
        $this->setIfExists('per_unit_amount', $data ?? [], null);
        $this->setIfExists('total_amount', $data ?? [], null);
        $this->setIfExists('seller_sku', $data ?? [], null);
        $this->setIfExists('fn_sku', $data ?? [], null);
        $this->setIfExists('product_description', $data ?? [], null);
        $this->setIfExists('asin', $data ?? [], null);
        $this->setIfExists('transaction_number', $data ?? [], null);
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
     * Gets quantity
     *
     * @return string|null
     */
    public function getQuantity(): ?string
    {
        return $this->container['quantity'];
    }

    /**
     * Sets quantity
     *
     * @param string|null $quantity Represents the number of units in the seller's inventory when the AdustmentType is FBAInventoryReimbursement.
     *
     * @return self
     */
    public function setQuantity(?string $quantity): self
    {
        if (is_null($quantity)) {
            throw new \InvalidArgumentException('non-nullable quantity cannot be null');
        }
        $this->container['quantity'] = $quantity;

        return $this;
    }

    /**
     * Gets per_unit_amount
     *
     * @return \OpenAPI\Client\Model\financesv0\Currency|null
     */
    public function getPerUnitAmount(): ?\OpenAPI\Client\Model\financesv0\Currency
    {
        return $this->container['per_unit_amount'];
    }

    /**
     * Sets per_unit_amount
     *
     * @param \OpenAPI\Client\Model\financesv0\Currency|null $per_unit_amount per_unit_amount
     *
     * @return self
     */
    public function setPerUnitAmount(?\OpenAPI\Client\Model\financesv0\Currency $per_unit_amount): self
    {
        if (is_null($per_unit_amount)) {
            throw new \InvalidArgumentException('non-nullable per_unit_amount cannot be null');
        }
        $this->container['per_unit_amount'] = $per_unit_amount;

        return $this;
    }

    /**
     * Gets total_amount
     *
     * @return \OpenAPI\Client\Model\financesv0\Currency|null
     */
    public function getTotalAmount(): ?\OpenAPI\Client\Model\financesv0\Currency
    {
        return $this->container['total_amount'];
    }

    /**
     * Sets total_amount
     *
     * @param \OpenAPI\Client\Model\financesv0\Currency|null $total_amount total_amount
     *
     * @return self
     */
    public function setTotalAmount(?\OpenAPI\Client\Model\financesv0\Currency $total_amount): self
    {
        if (is_null($total_amount)) {
            throw new \InvalidArgumentException('non-nullable total_amount cannot be null');
        }
        $this->container['total_amount'] = $total_amount;

        return $this;
    }

    /**
     * Gets seller_sku
     *
     * @return string|null
     */
    public function getSellerSku(): ?string
    {
        return $this->container['seller_sku'];
    }

    /**
     * Sets seller_sku
     *
     * @param string|null $seller_sku The seller SKU of the item. The seller SKU is qualified by the seller's seller ID, which is included with every call to the Selling Partner API.
     *
     * @return self
     */
    public function setSellerSku(?string $seller_sku): self
    {
        if (is_null($seller_sku)) {
            throw new \InvalidArgumentException('non-nullable seller_sku cannot be null');
        }
        $this->container['seller_sku'] = $seller_sku;

        return $this;
    }

    /**
     * Gets fn_sku
     *
     * @return string|null
     */
    public function getFnSku(): ?string
    {
        return $this->container['fn_sku'];
    }

    /**
     * Sets fn_sku
     *
     * @param string|null $fn_sku A unique identifier assigned to products stored in and fulfilled from a fulfillment center.
     *
     * @return self
     */
    public function setFnSku(?string $fn_sku): self
    {
        if (is_null($fn_sku)) {
            throw new \InvalidArgumentException('non-nullable fn_sku cannot be null');
        }
        $this->container['fn_sku'] = $fn_sku;

        return $this;
    }

    /**
     * Gets product_description
     *
     * @return string|null
     */
    public function getProductDescription(): ?string
    {
        return $this->container['product_description'];
    }

    /**
     * Sets product_description
     *
     * @param string|null $product_description A short description of the item.
     *
     * @return self
     */
    public function setProductDescription(?string $product_description): self
    {
        if (is_null($product_description)) {
            throw new \InvalidArgumentException('non-nullable product_description cannot be null');
        }
        $this->container['product_description'] = $product_description;

        return $this;
    }

    /**
     * Gets asin
     *
     * @return string|null
     */
    public function getAsin(): ?string
    {
        return $this->container['asin'];
    }

    /**
     * Sets asin
     *
     * @param string|null $asin The Amazon Standard Identification Number (ASIN) of the item.
     *
     * @return self
     */
    public function setAsin(?string $asin): self
    {
        if (is_null($asin)) {
            throw new \InvalidArgumentException('non-nullable asin cannot be null');
        }
        $this->container['asin'] = $asin;

        return $this;
    }

    /**
     * Gets transaction_number
     *
     * @return string|null
     */
    public function getTransactionNumber(): ?string
    {
        return $this->container['transaction_number'];
    }

    /**
     * Sets transaction_number
     *
     * @param string|null $transaction_number The transaction number that is related to the adjustment.
     *
     * @return self
     */
    public function setTransactionNumber(?string $transaction_number): self
    {
        if (is_null($transaction_number)) {
            throw new \InvalidArgumentException('non-nullable transaction_number cannot be null');
        }
        $this->container['transaction_number'] = $transaction_number;

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


