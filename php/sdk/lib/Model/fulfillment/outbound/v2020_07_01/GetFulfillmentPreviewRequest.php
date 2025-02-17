<?php
/**
 * GetFulfillmentPreviewRequest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner APIs for Fulfillment Outbound
 *
 * The Selling Partner API for Fulfillment Outbound lets you create applications that help a seller fulfill Multi-Channel Fulfillment orders using their inventory in Amazon's fulfillment network. You can get information on both potential and existing fulfillment orders.
 *
 * The version of the OpenAPI document: 2020-07-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\fulfillment\outbound\v2020_07_01;

use
ArrayAccess;
use SpApi\ObjectSerializer;
use SpApi\Model\ModelInterface;

/**
 * GetFulfillmentPreviewRequest Class Doc Comment
 *
 * @category Class
 * @description The request body schema for the &#x60;getFulfillmentPreview&#x60; operation.
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class GetFulfillmentPreviewRequest implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'GetFulfillmentPreviewRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'marketplace_id' => 'string',
             'address' => '\SpApi\Model\fulfillment\outbound\v2020_07_01\Address',
             'items' => '\SpApi\Model\fulfillment\outbound\v2020_07_01\GetFulfillmentPreviewItem[]',
             'shipping_speed_categories' => '\SpApi\Model\fulfillment\outbound\v2020_07_01\ShippingSpeedCategory[]',
             'include_cod_fulfillment_preview' => 'bool',
             'include_delivery_windows' => 'bool',
             'feature_constraints' => '\SpApi\Model\fulfillment\outbound\v2020_07_01\FeatureSettings[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'marketplace_id' => null,
            'address' => null,
            'items' => null,
            'shipping_speed_categories' => null,
            'include_cod_fulfillment_preview' => null,
            'include_delivery_windows' => null,
            'feature_constraints' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'marketplace_id' => true,
        'address' => false,
        'items' => false,
        'shipping_speed_categories' => true,
        'include_cod_fulfillment_preview' => true,
        'include_delivery_windows' => true,
        'feature_constraints' => true
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
                'address' => 'address',
                'items' => 'items',
                'shipping_speed_categories' => 'shippingSpeedCategories',
                'include_cod_fulfillment_preview' => 'includeCODFulfillmentPreview',
                'include_delivery_windows' => 'includeDeliveryWindows',
                'feature_constraints' => 'featureConstraints'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'marketplace_id' => 'setMarketplaceId',
        'address' => 'setAddress',
        'items' => 'setItems',
        'shipping_speed_categories' => 'setShippingSpeedCategories',
        'include_cod_fulfillment_preview' => 'setIncludeCodFulfillmentPreview',
        'include_delivery_windows' => 'setIncludeDeliveryWindows',
        'feature_constraints' => 'setFeatureConstraints'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'marketplace_id' => 'getMarketplaceId',
        'address' => 'getAddress',
        'items' => 'getItems',
        'shipping_speed_categories' => 'getShippingSpeedCategories',
        'include_cod_fulfillment_preview' => 'getIncludeCodFulfillmentPreview',
        'include_delivery_windows' => 'getIncludeDeliveryWindows',
        'feature_constraints' => 'getFeatureConstraints'
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
        $this->setIfExists('marketplace_id', $data ?? [], null);
        $this->setIfExists('address', $data ?? [], null);
        $this->setIfExists('items', $data ?? [], null);
        $this->setIfExists('shipping_speed_categories', $data ?? [], null);
        $this->setIfExists('include_cod_fulfillment_preview', $data ?? [], null);
        $this->setIfExists('include_delivery_windows', $data ?? [], null);
        $this->setIfExists('feature_constraints', $data ?? [], null);
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

        if ($this->container['address'] === null) {
            $invalidProperties[] = "'address' can't be null";
        }
        if ($this->container['items'] === null) {
            $invalidProperties[] = "'items' can't be null";
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
     * @return string|null
     */
    public function getMarketplaceId(): ?string
    {
        return $this->container['marketplace_id'];
    }

    /**
     * Sets marketplace_id
     *
     * @param string|null $marketplace_id The marketplace the fulfillment order is placed against.
     *
     * @return self
     */
    public function setMarketplaceId(?string $marketplace_id): self
    {
        if (is_null($marketplace_id)) {
            array_push($this->openAPINullablesSetToNull, 'marketplace_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('marketplace_id', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['marketplace_id'] = $marketplace_id;

        return $this;
    }

    /**
     * Gets address
     *
     * @return \SpApi\Model\fulfillment\outbound\v2020_07_01\Address
     */
    public function getAddress(): \SpApi\Model\fulfillment\outbound\v2020_07_01\Address
    {
        return $this->container['address'];
    }

    /**
     * Sets address
     *
     * @param \SpApi\Model\fulfillment\outbound\v2020_07_01\Address $address address
     *
     * @return self
     */
    public function setAddress(\SpApi\Model\fulfillment\outbound\v2020_07_01\Address $address): self
    {
        if (is_null($address)) {
            throw new \InvalidArgumentException('non-nullable address cannot be null');
        }
        $this->container['address'] = $address;

        return $this;
    }

    /**
     * Gets items
     *
     * @return array
     */
    public function getItems(): array
    {
        return $this->container['items'];
    }

    /**
     * Sets items
     *
     * @param array $items An array of fulfillment preview item information.
     *
     * @return self
     */
    public function setItems(array $items): self
    {
        if (is_null($items)) {
            throw new \InvalidArgumentException('non-nullable items cannot be null');
        }
        $this->container['items'] = $items;

        return $this;
    }

    /**
     * Gets shipping_speed_categories
     *
     * @return array|null
     */
    public function getShippingSpeedCategories(): ?array
    {
        return $this->container['shipping_speed_categories'];
    }

    /**
     * Sets shipping_speed_categories
     *
     * @param array|null $shipping_speed_categories ShippingSpeedCategory List
     *
     * @return self
     */
    public function setShippingSpeedCategories(?array $shipping_speed_categories): self
    {
        if (is_null($shipping_speed_categories)) {
            array_push($this->openAPINullablesSetToNull, 'shipping_speed_categories');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipping_speed_categories', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['shipping_speed_categories'] = $shipping_speed_categories;

        return $this;
    }

    /**
     * Gets include_cod_fulfillment_preview
     *
     * @return bool|null
     */
    public function getIncludeCodFulfillmentPreview(): ?bool
    {
        return $this->container['include_cod_fulfillment_preview'];
    }

    /**
     * Sets include_cod_fulfillment_preview
     *
     * @param bool|null $include_cod_fulfillment_preview When true, returns all fulfillment order previews both for COD and not for COD. Otherwise, returns only fulfillment order previews that are not for COD.
     *
     * @return self
     */
    public function setIncludeCodFulfillmentPreview(?bool $include_cod_fulfillment_preview): self
    {
        if (is_null($include_cod_fulfillment_preview)) {
            array_push($this->openAPINullablesSetToNull, 'include_cod_fulfillment_preview');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('include_cod_fulfillment_preview', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['include_cod_fulfillment_preview'] = $include_cod_fulfillment_preview;

        return $this;
    }

    /**
     * Gets include_delivery_windows
     *
     * @return bool|null
     */
    public function getIncludeDeliveryWindows(): ?bool
    {
        return $this->container['include_delivery_windows'];
    }

    /**
     * Sets include_delivery_windows
     *
     * @param bool|null $include_delivery_windows When true, returns the `ScheduledDeliveryInfo` response object, which contains the available delivery windows for a Scheduled Delivery. The `ScheduledDeliveryInfo` response object can only be returned for fulfillment order previews with `ShippingSpeedCategories` = `ScheduledDelivery`.
     *
     * @return self
     */
    public function setIncludeDeliveryWindows(?bool $include_delivery_windows): self
    {
        if (is_null($include_delivery_windows)) {
            array_push($this->openAPINullablesSetToNull, 'include_delivery_windows');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('include_delivery_windows', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['include_delivery_windows'] = $include_delivery_windows;

        return $this;
    }

    /**
     * Gets feature_constraints
     *
     * @return array|null
     */
    public function getFeatureConstraints(): ?array
    {
        return $this->container['feature_constraints'];
    }

    /**
     * Sets feature_constraints
     *
     * @param array|null $feature_constraints A list of features and their fulfillment policies to apply to the order.
     *
     * @return self
     */
    public function setFeatureConstraints(?array $feature_constraints): self
    {
        if (is_null($feature_constraints)) {
            array_push($this->openAPINullablesSetToNull, 'feature_constraints');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('feature_constraints', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['feature_constraints'] = $feature_constraints;

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


