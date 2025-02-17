<?php
/**
 * UpdateFulfillmentOrderRequest
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
 * UpdateFulfillmentOrderRequest Class Doc Comment
 *
 * @category Class
 * @description The request body schema for the &#x60;updateFulfillmentOrder&#x60; operation.
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class UpdateFulfillmentOrderRequest implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'UpdateFulfillmentOrderRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'marketplace_id' => 'string',
             'displayable_order_id' => 'string',
             'displayable_order_date' => '\DateTime',
             'displayable_order_comment' => 'string',
             'shipping_speed_category' => '\SpApi\Model\fulfillment\outbound\v2020_07_01\ShippingSpeedCategory',
             'destination_address' => '\SpApi\Model\fulfillment\outbound\v2020_07_01\Address',
             'fulfillment_action' => '\SpApi\Model\fulfillment\outbound\v2020_07_01\FulfillmentAction',
             'fulfillment_policy' => '\SpApi\Model\fulfillment\outbound\v2020_07_01\FulfillmentPolicy',
             'ship_from_country_code' => 'string',
             'notification_emails' => 'string[]',
             'feature_constraints' => '\SpApi\Model\fulfillment\outbound\v2020_07_01\FeatureSettings[]',
             'items' => '\SpApi\Model\fulfillment\outbound\v2020_07_01\UpdateFulfillmentOrderItem[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'marketplace_id' => null,
            'displayable_order_id' => null,
            'displayable_order_date' => 'date-time',
            'displayable_order_comment' => null,
            'shipping_speed_category' => null,
            'destination_address' => null,
            'fulfillment_action' => null,
            'fulfillment_policy' => null,
            'ship_from_country_code' => null,
            'notification_emails' => null,
            'feature_constraints' => null,
            'items' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'marketplace_id' => true,
        'displayable_order_id' => true,
        'displayable_order_date' => true,
        'displayable_order_comment' => true,
        'shipping_speed_category' => true,
        'destination_address' => true,
        'fulfillment_action' => true,
        'fulfillment_policy' => true,
        'ship_from_country_code' => true,
        'notification_emails' => true,
        'feature_constraints' => true,
        'items' => true
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
                'displayable_order_id' => 'displayableOrderId',
                'displayable_order_date' => 'displayableOrderDate',
                'displayable_order_comment' => 'displayableOrderComment',
                'shipping_speed_category' => 'shippingSpeedCategory',
                'destination_address' => 'destinationAddress',
                'fulfillment_action' => 'fulfillmentAction',
                'fulfillment_policy' => 'fulfillmentPolicy',
                'ship_from_country_code' => 'shipFromCountryCode',
                'notification_emails' => 'notificationEmails',
                'feature_constraints' => 'featureConstraints',
                'items' => 'items'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'marketplace_id' => 'setMarketplaceId',
        'displayable_order_id' => 'setDisplayableOrderId',
        'displayable_order_date' => 'setDisplayableOrderDate',
        'displayable_order_comment' => 'setDisplayableOrderComment',
        'shipping_speed_category' => 'setShippingSpeedCategory',
        'destination_address' => 'setDestinationAddress',
        'fulfillment_action' => 'setFulfillmentAction',
        'fulfillment_policy' => 'setFulfillmentPolicy',
        'ship_from_country_code' => 'setShipFromCountryCode',
        'notification_emails' => 'setNotificationEmails',
        'feature_constraints' => 'setFeatureConstraints',
        'items' => 'setItems'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'marketplace_id' => 'getMarketplaceId',
        'displayable_order_id' => 'getDisplayableOrderId',
        'displayable_order_date' => 'getDisplayableOrderDate',
        'displayable_order_comment' => 'getDisplayableOrderComment',
        'shipping_speed_category' => 'getShippingSpeedCategory',
        'destination_address' => 'getDestinationAddress',
        'fulfillment_action' => 'getFulfillmentAction',
        'fulfillment_policy' => 'getFulfillmentPolicy',
        'ship_from_country_code' => 'getShipFromCountryCode',
        'notification_emails' => 'getNotificationEmails',
        'feature_constraints' => 'getFeatureConstraints',
        'items' => 'getItems'
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
        $this->setIfExists('displayable_order_id', $data ?? [], null);
        $this->setIfExists('displayable_order_date', $data ?? [], null);
        $this->setIfExists('displayable_order_comment', $data ?? [], null);
        $this->setIfExists('shipping_speed_category', $data ?? [], null);
        $this->setIfExists('destination_address', $data ?? [], null);
        $this->setIfExists('fulfillment_action', $data ?? [], null);
        $this->setIfExists('fulfillment_policy', $data ?? [], null);
        $this->setIfExists('ship_from_country_code', $data ?? [], null);
        $this->setIfExists('notification_emails', $data ?? [], null);
        $this->setIfExists('feature_constraints', $data ?? [], null);
        $this->setIfExists('items', $data ?? [], null);
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

        if (!is_null($this->container['displayable_order_id']) && (mb_strlen($this->container['displayable_order_id']) > 40)) {
            $invalidProperties[] = "invalid value for 'displayable_order_id', the character length must be smaller than or equal to 40.";
        }

        if (!is_null($this->container['displayable_order_comment']) && (mb_strlen($this->container['displayable_order_comment']) > 750)) {
            $invalidProperties[] = "invalid value for 'displayable_order_comment', the character length must be smaller than or equal to 750.";
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
     * Gets displayable_order_id
     *
     * @return string|null
     */
    public function getDisplayableOrderId(): ?string
    {
        return $this->container['displayable_order_id'];
    }

    /**
     * Sets displayable_order_id
     *
     * @param string|null $displayable_order_id A fulfillment order identifier that the seller creates. This value displays as the order identifier in recipient-facing materials such as the outbound shipment packing slip. The value of `DisplayableOrderId` should match the order identifier that the seller provides to the recipient. The seller can use the `SellerFulfillmentOrderId` for this value or they can specify an alternate value if they want the recipient to reference an alternate order identifier.
     *
     * @return self
     */
    public function setDisplayableOrderId(?string $displayable_order_id): self
    {
        if (is_null($displayable_order_id)) {
            array_push($this->openAPINullablesSetToNull, 'displayable_order_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('displayable_order_id', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        if (!is_null($displayable_order_id) && (mb_strlen($displayable_order_id) > 40)) {
            throw new \InvalidArgumentException('invalid length for $displayable_order_id when calling UpdateFulfillmentOrderRequest., must be smaller than or equal to 40.');
        }

        $this->container['displayable_order_id'] = $displayable_order_id;

        return $this;
    }

    /**
     * Gets displayable_order_date
     *
     * @return \DateTime|null
     */
    public function getDisplayableOrderDate(): ?\DateTime
    {
        return $this->container['displayable_order_date'];
    }

    /**
     * Sets displayable_order_date
     *
     * @param \DateTime|null $displayable_order_date Date timestamp
     *
     * @return self
     */
    public function setDisplayableOrderDate(?\DateTime $displayable_order_date): self
    {
        if (is_null($displayable_order_date)) {
            array_push($this->openAPINullablesSetToNull, 'displayable_order_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('displayable_order_date', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['displayable_order_date'] = $displayable_order_date;

        return $this;
    }

    /**
     * Gets displayable_order_comment
     *
     * @return string|null
     */
    public function getDisplayableOrderComment(): ?string
    {
        return $this->container['displayable_order_comment'];
    }

    /**
     * Sets displayable_order_comment
     *
     * @param string|null $displayable_order_comment Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip.
     *
     * @return self
     */
    public function setDisplayableOrderComment(?string $displayable_order_comment): self
    {
        if (is_null($displayable_order_comment)) {
            array_push($this->openAPINullablesSetToNull, 'displayable_order_comment');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('displayable_order_comment', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        if (!is_null($displayable_order_comment) && (mb_strlen($displayable_order_comment) > 750)) {
            throw new \InvalidArgumentException('invalid length for $displayable_order_comment when calling UpdateFulfillmentOrderRequest., must be smaller than or equal to 750.');
        }

        $this->container['displayable_order_comment'] = $displayable_order_comment;

        return $this;
    }

    /**
     * Gets shipping_speed_category
     *
     * @return string|null
     */
    public function getShippingSpeedCategory(): ?string
    {
        return $this->container['shipping_speed_category'];
    }

    /**
     * Sets shipping_speed_category
     *
     * @param string|null $shipping_speed_category shipping_speed_category
     *
     * @return self
     */
    public function setShippingSpeedCategory(?string $shipping_speed_category): self
    {
        if (is_null($shipping_speed_category)) {
            array_push($this->openAPINullablesSetToNull, 'shipping_speed_category');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipping_speed_category', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['shipping_speed_category'] = $shipping_speed_category;

        return $this;
    }

    /**
     * Gets destination_address
     *
     * @return \SpApi\Model\fulfillment\outbound\v2020_07_01\Address|null
     */
    public function getDestinationAddress(): ?\SpApi\Model\fulfillment\outbound\v2020_07_01\Address
    {
        return $this->container['destination_address'];
    }

    /**
     * Sets destination_address
     *
     * @param \SpApi\Model\fulfillment\outbound\v2020_07_01\Address|null $destination_address destination_address
     *
     * @return self
     */
    public function setDestinationAddress(?\SpApi\Model\fulfillment\outbound\v2020_07_01\Address $destination_address): self
    {
        if (is_null($destination_address)) {
            array_push($this->openAPINullablesSetToNull, 'destination_address');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('destination_address', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['destination_address'] = $destination_address;

        return $this;
    }

    /**
     * Gets fulfillment_action
     *
     * @return string|null
     */
    public function getFulfillmentAction(): ?string
    {
        return $this->container['fulfillment_action'];
    }

    /**
     * Sets fulfillment_action
     *
     * @param string|null $fulfillment_action fulfillment_action
     *
     * @return self
     */
    public function setFulfillmentAction(?string $fulfillment_action): self
    {
        if (is_null($fulfillment_action)) {
            array_push($this->openAPINullablesSetToNull, 'fulfillment_action');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('fulfillment_action', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['fulfillment_action'] = $fulfillment_action;

        return $this;
    }

    /**
     * Gets fulfillment_policy
     *
     * @return string|null
     */
    public function getFulfillmentPolicy(): ?string
    {
        return $this->container['fulfillment_policy'];
    }

    /**
     * Sets fulfillment_policy
     *
     * @param string|null $fulfillment_policy fulfillment_policy
     *
     * @return self
     */
    public function setFulfillmentPolicy(?string $fulfillment_policy): self
    {
        if (is_null($fulfillment_policy)) {
            array_push($this->openAPINullablesSetToNull, 'fulfillment_policy');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('fulfillment_policy', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['fulfillment_policy'] = $fulfillment_policy;

        return $this;
    }

    /**
     * Gets ship_from_country_code
     *
     * @return string|null
     */
    public function getShipFromCountryCode(): ?string
    {
        return $this->container['ship_from_country_code'];
    }

    /**
     * Sets ship_from_country_code
     *
     * @param string|null $ship_from_country_code The two-character country code for the country from which the fulfillment order ships. Must be in ISO 3166-1 alpha-2 format.
     *
     * @return self
     */
    public function setShipFromCountryCode(?string $ship_from_country_code): self
    {
        if (is_null($ship_from_country_code)) {
            array_push($this->openAPINullablesSetToNull, 'ship_from_country_code');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('ship_from_country_code', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['ship_from_country_code'] = $ship_from_country_code;

        return $this;
    }

    /**
     * Gets notification_emails
     *
     * @return array|null
     */
    public function getNotificationEmails(): ?array
    {
        return $this->container['notification_emails'];
    }

    /**
     * Sets notification_emails
     *
     * @param array|null $notification_emails A list of email addresses that the seller provides that are used by Amazon to send ship-complete notifications to recipients on behalf of the seller.
     *
     * @return self
     */
    public function setNotificationEmails(?array $notification_emails): self
    {
        if (is_null($notification_emails)) {
            array_push($this->openAPINullablesSetToNull, 'notification_emails');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('notification_emails', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['notification_emails'] = $notification_emails;

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
     * Gets items
     *
     * @return array|null
     */
    public function getItems(): ?array
    {
        return $this->container['items'];
    }

    /**
     * Sets items
     *
     * @param array|null $items An array of fulfillment order item information for updating a fulfillment order.
     *
     * @return self
     */
    public function setItems(?array $items): self
    {
        if (is_null($items)) {
            array_push($this->openAPINullablesSetToNull, 'items');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('items', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['items'] = $items;

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


