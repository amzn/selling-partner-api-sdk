<?php
/**
 * ItemSummaryByMarketplace
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Listings Items v2021-08-01
 *
 * The Selling Partner API for Listings Items (Listings Items API) provides programmatic access to selling partner listings on Amazon. Use this API in collaboration with the Selling Partner API for Product Type Definitions, which you use to retrieve the information about Amazon product types needed to use the Listings Items API.  For more information, see the [Listings Items API Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/listings-items-api-v2021-08-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-08-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\listingsItems;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * ItemSummaryByMarketplace Class Doc Comment
 *
 * @category Class
 * @description Summary details of a listings item for an Amazon marketplace.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ItemSummaryByMarketplace implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'ItemSummaryByMarketplace';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'marketplace_id' => 'string',
             'asin' => 'string',
             'product_type' => 'string',
             'condition_type' => 'string',
             'status' => 'string[]',
             'fn_sku' => 'string',
             'item_name' => 'string',
             'created_date' => '\DateTime',
             'last_updated_date' => '\DateTime',
             'main_image' => '\OpenAPI\Client\Model\listingsItems\ItemImage'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'marketplace_id' => null,
            'asin' => null,
            'product_type' => null,
            'condition_type' => null,
            'status' => null,
            'fn_sku' => null,
            'item_name' => null,
            'created_date' => 'date-time',
            'last_updated_date' => 'date-time',
            'main_image' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'marketplace_id' => false,
        'asin' => false,
        'product_type' => false,
        'condition_type' => true,
        'status' => false,
        'fn_sku' => true,
        'item_name' => false,
        'created_date' => false,
        'last_updated_date' => false,
        'main_image' => true
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
        'marketplace_id' => 'marketplaceId',
                'asin' => 'asin',
                'product_type' => 'productType',
                'condition_type' => 'conditionType',
                'status' => 'status',
                'fn_sku' => 'fnSku',
                'item_name' => 'itemName',
                'created_date' => 'createdDate',
                'last_updated_date' => 'lastUpdatedDate',
                'main_image' => 'mainImage'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'marketplace_id' => 'setMarketplaceId',
        'asin' => 'setAsin',
        'product_type' => 'setProductType',
        'condition_type' => 'setConditionType',
        'status' => 'setStatus',
        'fn_sku' => 'setFnSku',
        'item_name' => 'setItemName',
        'created_date' => 'setCreatedDate',
        'last_updated_date' => 'setLastUpdatedDate',
        'main_image' => 'setMainImage'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'marketplace_id' => 'getMarketplaceId',
        'asin' => 'getAsin',
        'product_type' => 'getProductType',
        'condition_type' => 'getConditionType',
        'status' => 'getStatus',
        'fn_sku' => 'getFnSku',
        'item_name' => 'getItemName',
        'created_date' => 'getCreatedDate',
        'last_updated_date' => 'getLastUpdatedDate',
        'main_image' => 'getMainImage'
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

    public const CONDITION_TYPE_NEW_NEW = 'new_new';
    public const CONDITION_TYPE_NEW_OPEN_BOX = 'new_open_box';
    public const CONDITION_TYPE_NEW_OEM = 'new_oem';
    public const CONDITION_TYPE_REFURBISHED_REFURBISHED = 'refurbished_refurbished';
    public const CONDITION_TYPE_USED_LIKE_NEW = 'used_like_new';
    public const CONDITION_TYPE_USED_VERY_GOOD = 'used_very_good';
    public const CONDITION_TYPE_USED_GOOD = 'used_good';
    public const CONDITION_TYPE_USED_ACCEPTABLE = 'used_acceptable';
    public const CONDITION_TYPE_COLLECTIBLE_LIKE_NEW = 'collectible_like_new';
    public const CONDITION_TYPE_COLLECTIBLE_VERY_GOOD = 'collectible_very_good';
    public const CONDITION_TYPE_COLLECTIBLE_GOOD = 'collectible_good';
    public const CONDITION_TYPE_COLLECTIBLE_ACCEPTABLE = 'collectible_acceptable';
    public const CONDITION_TYPE_CLUB_CLUB = 'club_club';
    public const STATUS_BUYABLE = 'BUYABLE';
    public const STATUS_DISCOVERABLE = 'DISCOVERABLE';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getConditionTypeAllowableValues(): array
    {
        return [
            self::CONDITION_TYPE_NEW_NEW,
            self::CONDITION_TYPE_NEW_OPEN_BOX,
            self::CONDITION_TYPE_NEW_OEM,
            self::CONDITION_TYPE_REFURBISHED_REFURBISHED,
            self::CONDITION_TYPE_USED_LIKE_NEW,
            self::CONDITION_TYPE_USED_VERY_GOOD,
            self::CONDITION_TYPE_USED_GOOD,
            self::CONDITION_TYPE_USED_ACCEPTABLE,
            self::CONDITION_TYPE_COLLECTIBLE_LIKE_NEW,
            self::CONDITION_TYPE_COLLECTIBLE_VERY_GOOD,
            self::CONDITION_TYPE_COLLECTIBLE_GOOD,
            self::CONDITION_TYPE_COLLECTIBLE_ACCEPTABLE,
            self::CONDITION_TYPE_CLUB_CLUB,
        ];
    }

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getStatusAllowableValues(): array
    {
        return [
            self::STATUS_BUYABLE,
            self::STATUS_DISCOVERABLE,
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
        $this->setIfExists('marketplace_id', $data ?? [], null);
        $this->setIfExists('asin', $data ?? [], null);
        $this->setIfExists('product_type', $data ?? [], null);
        $this->setIfExists('condition_type', $data ?? [], null);
        $this->setIfExists('status', $data ?? [], null);
        $this->setIfExists('fn_sku', $data ?? [], null);
        $this->setIfExists('item_name', $data ?? [], null);
        $this->setIfExists('created_date', $data ?? [], null);
        $this->setIfExists('last_updated_date', $data ?? [], null);
        $this->setIfExists('main_image', $data ?? [], null);
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

        if ($this->container['marketplace_id'] === null) {
            $invalidProperties[] = "'marketplace_id' can't be null";
        }
        if ($this->container['asin'] === null) {
            $invalidProperties[] = "'asin' can't be null";
        }
        if ($this->container['product_type'] === null) {
            $invalidProperties[] = "'product_type' can't be null";
        }
        $allowedValues = $this->getConditionTypeAllowableValues();
        if (!is_null($this->container['condition_type']) && !in_array($this->container['condition_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'condition_type', must be one of '%s'",
                $this->container['condition_type'],
                implode("', '", $allowedValues)
            );
        }

        if ($this->container['status'] === null) {
            $invalidProperties[] = "'status' can't be null";
        }
        if ($this->container['item_name'] === null) {
            $invalidProperties[] = "'item_name' can't be null";
        }
        if ($this->container['created_date'] === null) {
            $invalidProperties[] = "'created_date' can't be null";
        }
        if ($this->container['last_updated_date'] === null) {
            $invalidProperties[] = "'last_updated_date' can't be null";
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
     * Gets marketplace_id
     *
     * @return string
     */
    public function getMarketplaceId(): string
    {
        return $this->container['marketplace_id'];
    }

    /**
     * Sets marketplace_id
     *
     * @param string $marketplace_id A marketplace identifier. Identifies the Amazon marketplace for the listings item.
     *
     * @return self
     */
    public function setMarketplaceId(string $marketplace_id): self
    {
        if (is_null($marketplace_id)) {
            throw new \InvalidArgumentException('non-nullable marketplace_id cannot be null');
        }
        $this->container['marketplace_id'] = $marketplace_id;

        return $this;
    }

    /**
     * Gets asin
     *
     * @return string
     */
    public function getAsin(): string
    {
        return $this->container['asin'];
    }

    /**
     * Sets asin
     *
     * @param string $asin Amazon Standard Identification Number (ASIN) of the listings item.
     *
     * @return self
     */
    public function setAsin(string $asin): self
    {
        if (is_null($asin)) {
            throw new \InvalidArgumentException('non-nullable asin cannot be null');
        }
        $this->container['asin'] = $asin;

        return $this;
    }

    /**
     * Gets product_type
     *
     * @return string
     */
    public function getProductType(): string
    {
        return $this->container['product_type'];
    }

    /**
     * Sets product_type
     *
     * @param string $product_type The Amazon product type of the listings item.
     *
     * @return self
     */
    public function setProductType(string $product_type): self
    {
        if (is_null($product_type)) {
            throw new \InvalidArgumentException('non-nullable product_type cannot be null');
        }
        $this->container['product_type'] = $product_type;

        return $this;
    }

    /**
     * Gets condition_type
     *
     * @return string|null
     */
    public function getConditionType(): ?string
    {
        return $this->container['condition_type'];
    }

    /**
     * Sets condition_type
     *
     * @param string|null $condition_type Identifies the condition of the listings item.
     *
     * @return self
     */
    public function setConditionType(?string $condition_type): self
    {
        if (is_null($condition_type)) {
            array_push($this->openAPINullablesSetToNull, 'condition_type');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('condition_type', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $allowedValues = $this->getConditionTypeAllowableValues();
        if (!is_null($condition_type) && !in_array($condition_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'condition_type', must be one of '%s'",
                    $condition_type,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['condition_type'] = $condition_type;

        return $this;
    }

    /**
     * Gets status
     *
     * @return array
     */
    public function getStatus(): array
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     *
     * @param array $status Statuses that apply to the listings item.
     *
     * @return self
     */
    public function setStatus(array $status): self
    {
        if (is_null($status)) {
            throw new \InvalidArgumentException('non-nullable status cannot be null');
        }
        $allowedValues = $this->getStatusAllowableValues();
        if (array_diff($status, $allowedValues)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value for 'status', must be one of '%s'",
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['status'] = $status;

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
     * @param string|null $fn_sku The fulfillment network stock keeping unit is an identifier used by Amazon fulfillment centers to identify each unique item.
     *
     * @return self
     */
    public function setFnSku(?string $fn_sku): self
    {
        if (is_null($fn_sku)) {
            array_push($this->openAPINullablesSetToNull, 'fn_sku');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('fn_sku', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['fn_sku'] = $fn_sku;

        return $this;
    }

    /**
     * Gets item_name
     *
     * @return string
     */
    public function getItemName(): string
    {
        return $this->container['item_name'];
    }

    /**
     * Sets item_name
     *
     * @param string $item_name The name or title associated with an Amazon catalog item.
     *
     * @return self
     */
    public function setItemName(string $item_name): self
    {
        if (is_null($item_name)) {
            throw new \InvalidArgumentException('non-nullable item_name cannot be null');
        }
        $this->container['item_name'] = $item_name;

        return $this;
    }

    /**
     * Gets created_date
     *
     * @return \DateTime
     */
    public function getCreatedDate(): \DateTime
    {
        return $this->container['created_date'];
    }

    /**
     * Sets created_date
     *
     * @param \DateTime $created_date The date the listings item was created in ISO 8601 format.
     *
     * @return self
     */
    public function setCreatedDate(\DateTime $created_date): self
    {
        if (is_null($created_date)) {
            throw new \InvalidArgumentException('non-nullable created_date cannot be null');
        }
        $this->container['created_date'] = $created_date;

        return $this;
    }

    /**
     * Gets last_updated_date
     *
     * @return \DateTime
     */
    public function getLastUpdatedDate(): \DateTime
    {
        return $this->container['last_updated_date'];
    }

    /**
     * Sets last_updated_date
     *
     * @param \DateTime $last_updated_date The date the listings item was last updated in ISO 8601 format.
     *
     * @return self
     */
    public function setLastUpdatedDate(\DateTime $last_updated_date): self
    {
        if (is_null($last_updated_date)) {
            throw new \InvalidArgumentException('non-nullable last_updated_date cannot be null');
        }
        $this->container['last_updated_date'] = $last_updated_date;

        return $this;
    }

    /**
     * Gets main_image
     *
     * @return \OpenAPI\Client\Model\listingsItems\ItemImage|null
     */
    public function getMainImage(): ?\OpenAPI\Client\Model\listingsItems\ItemImage
    {
        return $this->container['main_image'];
    }

    /**
     * Sets main_image
     *
     * @param \OpenAPI\Client\Model\listingsItems\ItemImage|null $main_image main_image
     *
     * @return self
     */
    public function setMainImage(?\OpenAPI\Client\Model\listingsItems\ItemImage $main_image): self
    {
        if (is_null($main_image)) {
            array_push($this->openAPINullablesSetToNull, 'main_image');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('main_image', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['main_image'] = $main_image;

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


