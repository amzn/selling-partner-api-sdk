<?php
/**
 * ItemVendorDetailsByMarketplace
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Catalog Items v2022-04-01
 *
 * The Selling Partner API for Catalog Items provides programmatic access to information about items in the Amazon catalog.  For more information, refer to the [Catalog Items API Use Case Guide](doc:catalog-items-api-v2022-04-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-04-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\catalogItems\v2022_04_01;

use
ArrayAccess;
use SpApi\ObjectSerializer;
use SpApi\Model\ModelInterface;

/**
 * ItemVendorDetailsByMarketplace Class Doc Comment
 *
 * @category Class
 * @description Vendor details associated with an Amazon catalog item for the indicated Amazon marketplace.
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ItemVendorDetailsByMarketplace implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'ItemVendorDetailsByMarketplace';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'marketplace_id' => 'string',
             'brand_code' => 'string',
             'manufacturer_code' => 'string',
             'manufacturer_code_parent' => 'string',
             'product_category' => '\SpApi\Model\catalogItems\v2022_04_01\ItemVendorDetailsCategory',
             'product_group' => 'string',
             'product_subcategory' => '\SpApi\Model\catalogItems\v2022_04_01\ItemVendorDetailsCategory',
             'replenishment_category' => 'string'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'marketplace_id' => null,
            'brand_code' => null,
            'manufacturer_code' => null,
            'manufacturer_code_parent' => null,
            'product_category' => null,
            'product_group' => null,
            'product_subcategory' => null,
            'replenishment_category' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'marketplace_id' => false,
        'brand_code' => true,
        'manufacturer_code' => true,
        'manufacturer_code_parent' => true,
        'product_category' => true,
        'product_group' => true,
        'product_subcategory' => true,
        'replenishment_category' => true
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
                'brand_code' => 'brandCode',
                'manufacturer_code' => 'manufacturerCode',
                'manufacturer_code_parent' => 'manufacturerCodeParent',
                'product_category' => 'productCategory',
                'product_group' => 'productGroup',
                'product_subcategory' => 'productSubcategory',
                'replenishment_category' => 'replenishmentCategory'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'marketplace_id' => 'setMarketplaceId',
        'brand_code' => 'setBrandCode',
        'manufacturer_code' => 'setManufacturerCode',
        'manufacturer_code_parent' => 'setManufacturerCodeParent',
        'product_category' => 'setProductCategory',
        'product_group' => 'setProductGroup',
        'product_subcategory' => 'setProductSubcategory',
        'replenishment_category' => 'setReplenishmentCategory'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'marketplace_id' => 'getMarketplaceId',
        'brand_code' => 'getBrandCode',
        'manufacturer_code' => 'getManufacturerCode',
        'manufacturer_code_parent' => 'getManufacturerCodeParent',
        'product_category' => 'getProductCategory',
        'product_group' => 'getProductGroup',
        'product_subcategory' => 'getProductSubcategory',
        'replenishment_category' => 'getReplenishmentCategory'
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

    public const REPLENISHMENT_CATEGORY_ALLOCATED = 'ALLOCATED';
    public const REPLENISHMENT_CATEGORY_BASIC_REPLENISHMENT = 'BASIC_REPLENISHMENT';
    public const REPLENISHMENT_CATEGORY_IN_SEASON = 'IN_SEASON';
    public const REPLENISHMENT_CATEGORY_LIMITED_REPLENISHMENT = 'LIMITED_REPLENISHMENT';
    public const REPLENISHMENT_CATEGORY_MANUFACTURER_OUT_OF_STOCK = 'MANUFACTURER_OUT_OF_STOCK';
    public const REPLENISHMENT_CATEGORY_NEW_PRODUCT = 'NEW_PRODUCT';
    public const REPLENISHMENT_CATEGORY_NON_REPLENISHABLE = 'NON_REPLENISHABLE';
    public const REPLENISHMENT_CATEGORY_NON_STOCKUPABLE = 'NON_STOCKUPABLE';
    public const REPLENISHMENT_CATEGORY_OBSOLETE = 'OBSOLETE';
    public const REPLENISHMENT_CATEGORY_PLANNED_REPLENISHMENT = 'PLANNED_REPLENISHMENT';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getReplenishmentCategoryAllowableValues(): array
    {
        return [
            self::REPLENISHMENT_CATEGORY_ALLOCATED,
            self::REPLENISHMENT_CATEGORY_BASIC_REPLENISHMENT,
            self::REPLENISHMENT_CATEGORY_IN_SEASON,
            self::REPLENISHMENT_CATEGORY_LIMITED_REPLENISHMENT,
            self::REPLENISHMENT_CATEGORY_MANUFACTURER_OUT_OF_STOCK,
            self::REPLENISHMENT_CATEGORY_NEW_PRODUCT,
            self::REPLENISHMENT_CATEGORY_NON_REPLENISHABLE,
            self::REPLENISHMENT_CATEGORY_NON_STOCKUPABLE,
            self::REPLENISHMENT_CATEGORY_OBSOLETE,
            self::REPLENISHMENT_CATEGORY_PLANNED_REPLENISHMENT,
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
        $this->setIfExists('brand_code', $data ?? [], null);
        $this->setIfExists('manufacturer_code', $data ?? [], null);
        $this->setIfExists('manufacturer_code_parent', $data ?? [], null);
        $this->setIfExists('product_category', $data ?? [], null);
        $this->setIfExists('product_group', $data ?? [], null);
        $this->setIfExists('product_subcategory', $data ?? [], null);
        $this->setIfExists('replenishment_category', $data ?? [], null);
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
        $allowedValues = $this->getReplenishmentCategoryAllowableValues();
        if (!is_null($this->container['replenishment_category']) && !in_array($this->container['replenishment_category'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'replenishment_category', must be one of '%s'",
                $this->container['replenishment_category'],
                implode("', '", $allowedValues)
            );
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
     * @param string $marketplace_id Amazon marketplace identifier.
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
     * Gets brand_code
     *
     * @return string|null
     */
    public function getBrandCode(): ?string
    {
        return $this->container['brand_code'];
    }

    /**
     * Sets brand_code
     *
     * @param string|null $brand_code Brand code associated with an Amazon catalog item.
     *
     * @return self
     */
    public function setBrandCode(?string $brand_code): self
    {
        if (is_null($brand_code)) {
            array_push($this->openAPINullablesSetToNull, 'brand_code');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('brand_code', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['brand_code'] = $brand_code;

        return $this;
    }

    /**
     * Gets manufacturer_code
     *
     * @return string|null
     */
    public function getManufacturerCode(): ?string
    {
        return $this->container['manufacturer_code'];
    }

    /**
     * Sets manufacturer_code
     *
     * @param string|null $manufacturer_code Manufacturer code associated with an Amazon catalog item.
     *
     * @return self
     */
    public function setManufacturerCode(?string $manufacturer_code): self
    {
        if (is_null($manufacturer_code)) {
            array_push($this->openAPINullablesSetToNull, 'manufacturer_code');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('manufacturer_code', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['manufacturer_code'] = $manufacturer_code;

        return $this;
    }

    /**
     * Gets manufacturer_code_parent
     *
     * @return string|null
     */
    public function getManufacturerCodeParent(): ?string
    {
        return $this->container['manufacturer_code_parent'];
    }

    /**
     * Sets manufacturer_code_parent
     *
     * @param string|null $manufacturer_code_parent Parent vendor code of the manufacturer code.
     *
     * @return self
     */
    public function setManufacturerCodeParent(?string $manufacturer_code_parent): self
    {
        if (is_null($manufacturer_code_parent)) {
            array_push($this->openAPINullablesSetToNull, 'manufacturer_code_parent');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('manufacturer_code_parent', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['manufacturer_code_parent'] = $manufacturer_code_parent;

        return $this;
    }

    /**
     * Gets product_category
     *
     * @return \SpApi\Model\catalogItems\v2022_04_01\ItemVendorDetailsCategory|null
     */
    public function getProductCategory(): ?\SpApi\Model\catalogItems\v2022_04_01\ItemVendorDetailsCategory
    {
        return $this->container['product_category'];
    }

    /**
     * Sets product_category
     *
     * @param \SpApi\Model\catalogItems\v2022_04_01\ItemVendorDetailsCategory|null $product_category product_category
     *
     * @return self
     */
    public function setProductCategory(?\SpApi\Model\catalogItems\v2022_04_01\ItemVendorDetailsCategory $product_category): self
    {
        if (is_null($product_category)) {
            array_push($this->openAPINullablesSetToNull, 'product_category');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('product_category', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['product_category'] = $product_category;

        return $this;
    }

    /**
     * Gets product_group
     *
     * @return string|null
     */
    public function getProductGroup(): ?string
    {
        return $this->container['product_group'];
    }

    /**
     * Sets product_group
     *
     * @param string|null $product_group Product group associated with an Amazon catalog item.
     *
     * @return self
     */
    public function setProductGroup(?string $product_group): self
    {
        if (is_null($product_group)) {
            array_push($this->openAPINullablesSetToNull, 'product_group');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('product_group', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['product_group'] = $product_group;

        return $this;
    }

    /**
     * Gets product_subcategory
     *
     * @return \SpApi\Model\catalogItems\v2022_04_01\ItemVendorDetailsCategory|null
     */
    public function getProductSubcategory(): ?\SpApi\Model\catalogItems\v2022_04_01\ItemVendorDetailsCategory
    {
        return $this->container['product_subcategory'];
    }

    /**
     * Sets product_subcategory
     *
     * @param \SpApi\Model\catalogItems\v2022_04_01\ItemVendorDetailsCategory|null $product_subcategory product_subcategory
     *
     * @return self
     */
    public function setProductSubcategory(?\SpApi\Model\catalogItems\v2022_04_01\ItemVendorDetailsCategory $product_subcategory): self
    {
        if (is_null($product_subcategory)) {
            array_push($this->openAPINullablesSetToNull, 'product_subcategory');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('product_subcategory', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['product_subcategory'] = $product_subcategory;

        return $this;
    }

    /**
     * Gets replenishment_category
     *
     * @return string|null
     */
    public function getReplenishmentCategory(): ?string
    {
        return $this->container['replenishment_category'];
    }

    /**
     * Sets replenishment_category
     *
     * @param string|null $replenishment_category Replenishment category associated with an Amazon catalog item.
     *
     * @return self
     */
    public function setReplenishmentCategory(?string $replenishment_category): self
    {
        if (is_null($replenishment_category)) {
            array_push($this->openAPINullablesSetToNull, 'replenishment_category');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('replenishment_category', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $allowedValues = $this->getReplenishmentCategoryAllowableValues();
        if (!is_null($replenishment_category) && !in_array($replenishment_category, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'replenishment_category', must be one of '%s'",
                    $replenishment_category,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['replenishment_category'] = $replenishment_category;

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


