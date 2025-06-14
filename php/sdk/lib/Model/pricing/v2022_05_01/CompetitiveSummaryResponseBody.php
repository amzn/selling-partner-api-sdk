<?php

/**
 * CompetitiveSummaryResponseBody.
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
 * Selling Partner API for Pricing.
 *
 * The Selling Partner API for Pricing helps you programmatically retrieve product pricing and offer pricing information for Amazon Marketplace products.  For more information, refer to the [Product Pricing v2022-05-01 Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/product-pricing-api-v2022-05-01-use-case-guide).
 *
 * The version of the OpenAPI document: 2022-05-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\pricing\v2022_05_01;

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * CompetitiveSummaryResponseBody Class Doc Comment.
 *
 * @category Class
 *
 * @description The &#x60;competitiveSummaryResponse&#x60; body for a requested ASIN and &#x60;marketplaceId&#x60;.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class CompetitiveSummaryResponseBody implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'CompetitiveSummaryResponseBody';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'asin' => 'string',
        'marketplace_id' => 'string',
        'featured_buying_options' => '\SpApi\Model\pricing\v2022_05_01\FeaturedBuyingOption[]',
        'lowest_priced_offers' => '\SpApi\Model\pricing\v2022_05_01\LowestPricedOffer[]',
        'reference_prices' => '\SpApi\Model\pricing\v2022_05_01\ReferencePrice[]',
        'errors' => '\SpApi\Model\pricing\v2022_05_01\Error[]'];

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
        'asin' => null,
        'marketplace_id' => null,
        'featured_buying_options' => null,
        'lowest_priced_offers' => null,
        'reference_prices' => null,
        'errors' => null];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'asin' => false,
        'marketplace_id' => false,
        'featured_buying_options' => true,
        'lowest_priced_offers' => true,
        'reference_prices' => true,
        'errors' => true,
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
        'asin' => 'asin',
        'marketplace_id' => 'marketplaceId',
        'featured_buying_options' => 'featuredBuyingOptions',
        'lowest_priced_offers' => 'lowestPricedOffers',
        'reference_prices' => 'referencePrices',
        'errors' => 'errors',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'asin' => 'setAsin',
        'marketplace_id' => 'setMarketplaceId',
        'featured_buying_options' => 'setFeaturedBuyingOptions',
        'lowest_priced_offers' => 'setLowestPricedOffers',
        'reference_prices' => 'setReferencePrices',
        'errors' => 'setErrors',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'asin' => 'getAsin',
        'marketplace_id' => 'getMarketplaceId',
        'featured_buying_options' => 'getFeaturedBuyingOptions',
        'lowest_priced_offers' => 'getLowestPricedOffers',
        'reference_prices' => 'getReferencePrices',
        'errors' => 'getErrors',
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
        $this->setIfExists('asin', $data ?? [], null);
        $this->setIfExists('marketplace_id', $data ?? [], null);
        $this->setIfExists('featured_buying_options', $data ?? [], null);
        $this->setIfExists('lowest_priced_offers', $data ?? [], null);
        $this->setIfExists('reference_prices', $data ?? [], null);
        $this->setIfExists('errors', $data ?? [], null);
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

        if (null === $this->container['asin']) {
            $invalidProperties[] = "'asin' can't be null";
        }
        if (null === $this->container['marketplace_id']) {
            $invalidProperties[] = "'marketplace_id' can't be null";
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
     * Gets asin.
     */
    public function getAsin(): string
    {
        return $this->container['asin'];
    }

    /**
     * Sets asin.
     *
     * @param string $asin the ASIN of the item
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
     * Gets marketplace_id.
     */
    public function getMarketplaceId(): string
    {
        return $this->container['marketplace_id'];
    }

    /**
     * Sets marketplace_id.
     *
     * @param string $marketplace_id The marketplace ID is the globally unique identifier of a marketplace. To find the ID for your marketplace, refer to [Marketplace IDs](https://developer-docs.amazon.com/sp-api/docs/marketplace-ids).
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
     * Gets featured_buying_options.
     */
    public function getFeaturedBuyingOptions(): ?array
    {
        return $this->container['featured_buying_options'];
    }

    /**
     * Sets featured_buying_options.
     *
     * @param null|array $featured_buying_options a list of featured buying options for the specified ASIN `marketplaceId` combination
     */
    public function setFeaturedBuyingOptions(?array $featured_buying_options): self
    {
        if (is_null($featured_buying_options)) {
            array_push($this->openAPINullablesSetToNull, 'featured_buying_options');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('featured_buying_options', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['featured_buying_options'] = $featured_buying_options;

        return $this;
    }

    /**
     * Gets lowest_priced_offers.
     */
    public function getLowestPricedOffers(): ?array
    {
        return $this->container['lowest_priced_offers'];
    }

    /**
     * Sets lowest_priced_offers.
     *
     * @param null|array $lowest_priced_offers a list of lowest priced offers for the specified ASIN `marketplaceId` combination
     */
    public function setLowestPricedOffers(?array $lowest_priced_offers): self
    {
        if (is_null($lowest_priced_offers)) {
            array_push($this->openAPINullablesSetToNull, 'lowest_priced_offers');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('lowest_priced_offers', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['lowest_priced_offers'] = $lowest_priced_offers;

        return $this;
    }

    /**
     * Gets reference_prices.
     */
    public function getReferencePrices(): ?array
    {
        return $this->container['reference_prices'];
    }

    /**
     * Sets reference_prices.
     *
     * @param null|array $reference_prices a list of reference prices for the specified ASIN `marketplaceId` combination
     */
    public function setReferencePrices(?array $reference_prices): self
    {
        if (is_null($reference_prices)) {
            array_push($this->openAPINullablesSetToNull, 'reference_prices');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('reference_prices', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['reference_prices'] = $reference_prices;

        return $this;
    }

    /**
     * Gets errors.
     */
    public function getErrors(): ?array
    {
        return $this->container['errors'];
    }

    /**
     * Sets errors.
     *
     * @param null|array $errors a list of error responses that are returned when a request is unsuccessful
     */
    public function setErrors(?array $errors): self
    {
        if (is_null($errors)) {
            array_push($this->openAPINullablesSetToNull, 'errors');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('errors', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['errors'] = $errors;

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
