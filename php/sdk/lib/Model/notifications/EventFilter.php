<?php
/**
 * EventFilter
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Notifications
 *
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
 *
 * The version of the OpenAPI document: v1
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\notifications;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * EventFilter Class Doc Comment
 *
 * @category Class
 * @description A &#x60;notificationType&#x60; specific filter. This object contains all of the currently available filters and properties that you can use to define a &#x60;notificationType&#x60; specific filter.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class EventFilter implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'EventFilter';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'aggregation_settings' => '\OpenAPI\Client\Model\notifications\AggregationSettings',
             'marketplace_ids' => 'string[]',
             'order_change_types' => '\OpenAPI\Client\Model\notifications\OrderChangeTypeEnum[]',
             'event_filter_type' => 'string'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'aggregation_settings' => null,
            'marketplace_ids' => null,
            'order_change_types' => null,
            'event_filter_type' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'aggregation_settings' => true,
        'marketplace_ids' => true,
        'order_change_types' => true,
        'event_filter_type' => false
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
        'aggregation_settings' => 'aggregationSettings',
                'marketplace_ids' => 'marketplaceIds',
                'order_change_types' => 'orderChangeTypes',
                'event_filter_type' => 'eventFilterType'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'aggregation_settings' => 'setAggregationSettings',
        'marketplace_ids' => 'setMarketplaceIds',
        'order_change_types' => 'setOrderChangeTypes',
        'event_filter_type' => 'setEventFilterType'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'aggregation_settings' => 'getAggregationSettings',
        'marketplace_ids' => 'getMarketplaceIds',
        'order_change_types' => 'getOrderChangeTypes',
        'event_filter_type' => 'getEventFilterType'
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

    public const EVENT_FILTER_TYPE_ANY_OFFER_CHANGED = 'ANY_OFFER_CHANGED';
    public const EVENT_FILTER_TYPE_ORDER_CHANGE = 'ORDER_CHANGE';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getEventFilterTypeAllowableValues(): array
    {
        return [
            self::EVENT_FILTER_TYPE_ANY_OFFER_CHANGED,
            self::EVENT_FILTER_TYPE_ORDER_CHANGE,
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
        $this->setIfExists('aggregation_settings', $data ?? [], null);
        $this->setIfExists('marketplace_ids', $data ?? [], null);
        $this->setIfExists('order_change_types', $data ?? [], null);
        $this->setIfExists('event_filter_type', $data ?? [], null);
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

        if ($this->container['event_filter_type'] === null) {
            $invalidProperties[] = "'event_filter_type' can't be null";
        }
        $allowedValues = $this->getEventFilterTypeAllowableValues();
        if (!is_null($this->container['event_filter_type']) && !in_array($this->container['event_filter_type'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'event_filter_type', must be one of '%s'",
                $this->container['event_filter_type'],
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
     * Gets aggregation_settings
     *
     * @return \OpenAPI\Client\Model\notifications\AggregationSettings|null
     */
    public function getAggregationSettings(): ?\OpenAPI\Client\Model\notifications\AggregationSettings
    {
        return $this->container['aggregation_settings'];
    }

    /**
     * Sets aggregation_settings
     *
     * @param \OpenAPI\Client\Model\notifications\AggregationSettings|null $aggregation_settings aggregation_settings
     *
     * @return self
     */
    public function setAggregationSettings(?\OpenAPI\Client\Model\notifications\AggregationSettings $aggregation_settings): self
    {
        if (is_null($aggregation_settings)) {
            array_push($this->openAPINullablesSetToNull, 'aggregation_settings');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('aggregation_settings', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['aggregation_settings'] = $aggregation_settings;

        return $this;
    }

    /**
     * Gets marketplace_ids
     *
     * @return array|null
     */
    public function getMarketplaceIds(): ?array
    {
        return $this->container['marketplace_ids'];
    }

    /**
     * Sets marketplace_ids
     *
     * @param array|null $marketplace_ids A list of marketplace identifiers to subscribe to (for example: ATVPDKIKX0DER). To receive notifications in every marketplace, do not provide this list.
     *
     * @return self
     */
    public function setMarketplaceIds(?array $marketplace_ids): self
    {
        if (is_null($marketplace_ids)) {
            array_push($this->openAPINullablesSetToNull, 'marketplace_ids');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('marketplace_ids', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['marketplace_ids'] = $marketplace_ids;

        return $this;
    }

    /**
     * Gets order_change_types
     *
     * @return array|null
     */
    public function getOrderChangeTypes(): ?array
    {
        return $this->container['order_change_types'];
    }

    /**
     * Sets order_change_types
     *
     * @param array|null $order_change_types A list of order change types to subscribe to (for example: `BuyerRequestedChange`). To receive notifications of all change types, do not provide this list.
     *
     * @return self
     */
    public function setOrderChangeTypes(?array $order_change_types): self
    {
        if (is_null($order_change_types)) {
            array_push($this->openAPINullablesSetToNull, 'order_change_types');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('order_change_types', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['order_change_types'] = $order_change_types;

        return $this;
    }

    /**
     * Gets event_filter_type
     *
     * @return string
     */
    public function getEventFilterType(): string
    {
        return $this->container['event_filter_type'];
    }

    /**
     * Sets event_filter_type
     *
     * @param string $event_filter_type An `eventFilterType` value that is supported by the specific `notificationType`. This is used by the subscription service to determine the type of event filter. Refer to [Notification Type Values](https://developer-docs.amazon.com/sp-api/docs/notification-type-values) to determine if an `eventFilterType` is supported.
     *
     * @return self
     */
    public function setEventFilterType(string $event_filter_type): self
    {
        if (is_null($event_filter_type)) {
            throw new \InvalidArgumentException('non-nullable event_filter_type cannot be null');
        }
        $allowedValues = $this->getEventFilterTypeAllowableValues();
        if (!in_array($event_filter_type, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'event_filter_type', must be one of '%s'",
                    $event_filter_type,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['event_filter_type'] = $event_filter_type;

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


