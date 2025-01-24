<?php
/**
 * CreateFulfillmentOrderRequest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
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

namespace OpenAPI\Client\Model\fulfillment\outbound;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * CreateFulfillmentOrderRequest Class Doc Comment
 *
 * @category Class
 * @description The request body schema for the &#x60;createFulfillmentOrder&#x60; operation.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class CreateFulfillmentOrderRequest implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'CreateFulfillmentOrderRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'marketplace_id' => 'string',
             'seller_fulfillment_order_id' => 'string',
             'displayable_order_id' => 'string',
             'displayable_order_date' => '\DateTime',
             'displayable_order_comment' => 'string',
             'shipping_speed_category' => '\OpenAPI\Client\Model\fulfillment\outbound\ShippingSpeedCategory',
             'delivery_window' => '\OpenAPI\Client\Model\fulfillment\outbound\DeliveryWindow',
             'destination_address' => '\OpenAPI\Client\Model\fulfillment\outbound\Address',
             'delivery_preferences' => '\OpenAPI\Client\Model\fulfillment\outbound\DeliveryPreferences',
             'fulfillment_action' => '\OpenAPI\Client\Model\fulfillment\outbound\FulfillmentAction',
             'fulfillment_policy' => '\OpenAPI\Client\Model\fulfillment\outbound\FulfillmentPolicy',
             'cod_settings' => '\OpenAPI\Client\Model\fulfillment\outbound\CODSettings',
             'ship_from_country_code' => 'string',
             'notification_emails' => 'string[]',
             'feature_constraints' => '\OpenAPI\Client\Model\fulfillment\outbound\FeatureSettings[]',
             'items' => '\OpenAPI\Client\Model\fulfillment\outbound\CreateFulfillmentOrderItem[]',
             'payment_information' => '\OpenAPI\Client\Model\fulfillment\outbound\PaymentInformation[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'marketplace_id' => null,
            'seller_fulfillment_order_id' => null,
            'displayable_order_id' => null,
            'displayable_order_date' => 'date-time',
            'displayable_order_comment' => null,
            'shipping_speed_category' => null,
            'delivery_window' => null,
            'destination_address' => null,
            'delivery_preferences' => null,
            'fulfillment_action' => null,
            'fulfillment_policy' => null,
            'cod_settings' => null,
            'ship_from_country_code' => null,
            'notification_emails' => null,
            'feature_constraints' => null,
            'items' => null,
            'payment_information' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'marketplace_id' => true,
        'seller_fulfillment_order_id' => false,
        'displayable_order_id' => false,
        'displayable_order_date' => false,
        'displayable_order_comment' => false,
        'shipping_speed_category' => false,
        'delivery_window' => true,
        'destination_address' => false,
        'delivery_preferences' => true,
        'fulfillment_action' => true,
        'fulfillment_policy' => true,
        'cod_settings' => true,
        'ship_from_country_code' => true,
        'notification_emails' => true,
        'feature_constraints' => true,
        'items' => false,
        'payment_information' => true
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
                'seller_fulfillment_order_id' => 'sellerFulfillmentOrderId',
                'displayable_order_id' => 'displayableOrderId',
                'displayable_order_date' => 'displayableOrderDate',
                'displayable_order_comment' => 'displayableOrderComment',
                'shipping_speed_category' => 'shippingSpeedCategory',
                'delivery_window' => 'deliveryWindow',
                'destination_address' => 'destinationAddress',
                'delivery_preferences' => 'deliveryPreferences',
                'fulfillment_action' => 'fulfillmentAction',
                'fulfillment_policy' => 'fulfillmentPolicy',
                'cod_settings' => 'codSettings',
                'ship_from_country_code' => 'shipFromCountryCode',
                'notification_emails' => 'notificationEmails',
                'feature_constraints' => 'featureConstraints',
                'items' => 'items',
                'payment_information' => 'paymentInformation'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'marketplace_id' => 'setMarketplaceId',
        'seller_fulfillment_order_id' => 'setSellerFulfillmentOrderId',
        'displayable_order_id' => 'setDisplayableOrderId',
        'displayable_order_date' => 'setDisplayableOrderDate',
        'displayable_order_comment' => 'setDisplayableOrderComment',
        'shipping_speed_category' => 'setShippingSpeedCategory',
        'delivery_window' => 'setDeliveryWindow',
        'destination_address' => 'setDestinationAddress',
        'delivery_preferences' => 'setDeliveryPreferences',
        'fulfillment_action' => 'setFulfillmentAction',
        'fulfillment_policy' => 'setFulfillmentPolicy',
        'cod_settings' => 'setCodSettings',
        'ship_from_country_code' => 'setShipFromCountryCode',
        'notification_emails' => 'setNotificationEmails',
        'feature_constraints' => 'setFeatureConstraints',
        'items' => 'setItems',
        'payment_information' => 'setPaymentInformation'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'marketplace_id' => 'getMarketplaceId',
        'seller_fulfillment_order_id' => 'getSellerFulfillmentOrderId',
        'displayable_order_id' => 'getDisplayableOrderId',
        'displayable_order_date' => 'getDisplayableOrderDate',
        'displayable_order_comment' => 'getDisplayableOrderComment',
        'shipping_speed_category' => 'getShippingSpeedCategory',
        'delivery_window' => 'getDeliveryWindow',
        'destination_address' => 'getDestinationAddress',
        'delivery_preferences' => 'getDeliveryPreferences',
        'fulfillment_action' => 'getFulfillmentAction',
        'fulfillment_policy' => 'getFulfillmentPolicy',
        'cod_settings' => 'getCodSettings',
        'ship_from_country_code' => 'getShipFromCountryCode',
        'notification_emails' => 'getNotificationEmails',
        'feature_constraints' => 'getFeatureConstraints',
        'items' => 'getItems',
        'payment_information' => 'getPaymentInformation'
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
        $this->setIfExists('seller_fulfillment_order_id', $data ?? [], null);
        $this->setIfExists('displayable_order_id', $data ?? [], null);
        $this->setIfExists('displayable_order_date', $data ?? [], null);
        $this->setIfExists('displayable_order_comment', $data ?? [], null);
        $this->setIfExists('shipping_speed_category', $data ?? [], null);
        $this->setIfExists('delivery_window', $data ?? [], null);
        $this->setIfExists('destination_address', $data ?? [], null);
        $this->setIfExists('delivery_preferences', $data ?? [], null);
        $this->setIfExists('fulfillment_action', $data ?? [], null);
        $this->setIfExists('fulfillment_policy', $data ?? [], null);
        $this->setIfExists('cod_settings', $data ?? [], null);
        $this->setIfExists('ship_from_country_code', $data ?? [], null);
        $this->setIfExists('notification_emails', $data ?? [], null);
        $this->setIfExists('feature_constraints', $data ?? [], null);
        $this->setIfExists('items', $data ?? [], null);
        $this->setIfExists('payment_information', $data ?? [], null);
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

        if ($this->container['seller_fulfillment_order_id'] === null) {
            $invalidProperties[] = "'seller_fulfillment_order_id' can't be null";
        }
        if ((mb_strlen($this->container['seller_fulfillment_order_id']) > 40)) {
            $invalidProperties[] = "invalid value for 'seller_fulfillment_order_id', the character length must be smaller than or equal to 40.";
        }

        if ($this->container['displayable_order_id'] === null) {
            $invalidProperties[] = "'displayable_order_id' can't be null";
        }
        if ((mb_strlen($this->container['displayable_order_id']) > 40)) {
            $invalidProperties[] = "invalid value for 'displayable_order_id', the character length must be smaller than or equal to 40.";
        }

        if ($this->container['displayable_order_date'] === null) {
            $invalidProperties[] = "'displayable_order_date' can't be null";
        }
        if ($this->container['displayable_order_comment'] === null) {
            $invalidProperties[] = "'displayable_order_comment' can't be null";
        }
        if ((mb_strlen($this->container['displayable_order_comment']) > 750)) {
            $invalidProperties[] = "invalid value for 'displayable_order_comment', the character length must be smaller than or equal to 750.";
        }

        if ($this->container['shipping_speed_category'] === null) {
            $invalidProperties[] = "'shipping_speed_category' can't be null";
        }
        if ($this->container['destination_address'] === null) {
            $invalidProperties[] = "'destination_address' can't be null";
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
     * Gets seller_fulfillment_order_id
     *
     * @return string
     */
    public function getSellerFulfillmentOrderId(): string
    {
        return $this->container['seller_fulfillment_order_id'];
    }

    /**
     * Sets seller_fulfillment_order_id
     *
     * @param string $seller_fulfillment_order_id A fulfillment order identifier that the seller creates to track their fulfillment order. The `SellerFulfillmentOrderId` must be unique for each fulfillment order that a seller creates. If the seller's system already creates unique order identifiers, then these might be good values for them to use.
     *
     * @return self
     */
    public function setSellerFulfillmentOrderId(string $seller_fulfillment_order_id): self
    {
        if (is_null($seller_fulfillment_order_id)) {
            throw new \InvalidArgumentException('non-nullable seller_fulfillment_order_id cannot be null');
        }
        if ((mb_strlen($seller_fulfillment_order_id) > 40)) {
            throw new \InvalidArgumentException('invalid length for $seller_fulfillment_order_id when calling CreateFulfillmentOrderRequest., must be smaller than or equal to 40.');
        }

        $this->container['seller_fulfillment_order_id'] = $seller_fulfillment_order_id;

        return $this;
    }

    /**
     * Gets displayable_order_id
     *
     * @return string
     */
    public function getDisplayableOrderId(): string
    {
        return $this->container['displayable_order_id'];
    }

    /**
     * Sets displayable_order_id
     *
     * @param string $displayable_order_id A fulfillment order identifier that the seller creates. This value displays as the order identifier in recipient-facing materials such as the outbound shipment packing slip. The value of `DisplayableOrderId` should match the order identifier that the seller provides to the recipient. The seller can use the `SellerFulfillmentOrderId` for this value or they can specify an alternate value if they want the recipient to reference an alternate order identifier.  The value must be an alpha-numeric or ISO 8859-1 compliant string from one to 40 characters in length. Cannot contain two spaces in a row. Leading and trailing white space is removed.
     *
     * @return self
     */
    public function setDisplayableOrderId(string $displayable_order_id): self
    {
        if (is_null($displayable_order_id)) {
            throw new \InvalidArgumentException('non-nullable displayable_order_id cannot be null');
        }
        if ((mb_strlen($displayable_order_id) > 40)) {
            throw new \InvalidArgumentException('invalid length for $displayable_order_id when calling CreateFulfillmentOrderRequest., must be smaller than or equal to 40.');
        }

        $this->container['displayable_order_id'] = $displayable_order_id;

        return $this;
    }

    /**
     * Gets displayable_order_date
     *
     * @return \DateTime
     */
    public function getDisplayableOrderDate(): \DateTime
    {
        return $this->container['displayable_order_date'];
    }

    /**
     * Sets displayable_order_date
     *
     * @param \DateTime $displayable_order_date Date timestamp
     *
     * @return self
     */
    public function setDisplayableOrderDate(\DateTime $displayable_order_date): self
    {
        if (is_null($displayable_order_date)) {
            throw new \InvalidArgumentException('non-nullable displayable_order_date cannot be null');
        }
        $this->container['displayable_order_date'] = $displayable_order_date;

        return $this;
    }

    /**
     * Gets displayable_order_comment
     *
     * @return string
     */
    public function getDisplayableOrderComment(): string
    {
        return $this->container['displayable_order_comment'];
    }

    /**
     * Sets displayable_order_comment
     *
     * @param string $displayable_order_comment Order-specific text that appears in recipient-facing materials such as the outbound shipment packing slip.
     *
     * @return self
     */
    public function setDisplayableOrderComment(string $displayable_order_comment): self
    {
        if (is_null($displayable_order_comment)) {
            throw new \InvalidArgumentException('non-nullable displayable_order_comment cannot be null');
        }
        if ((mb_strlen($displayable_order_comment) > 750)) {
            throw new \InvalidArgumentException('invalid length for $displayable_order_comment when calling CreateFulfillmentOrderRequest., must be smaller than or equal to 750.');
        }

        $this->container['displayable_order_comment'] = $displayable_order_comment;

        return $this;
    }

    /**
     * Gets shipping_speed_category
     *
     * @return string
     */
    public function getShippingSpeedCategory(): string
    {
        return $this->container['shipping_speed_category'];
    }

    /**
     * Sets shipping_speed_category
     *
     * @param string $shipping_speed_category shipping_speed_category
     *
     * @return self
     */
    public function setShippingSpeedCategory(string $shipping_speed_category): self
    {
        if (is_null($shipping_speed_category)) {
            throw new \InvalidArgumentException('non-nullable shipping_speed_category cannot be null');
        }
        $this->container['shipping_speed_category'] = $shipping_speed_category;

        return $this;
    }

    /**
     * Gets delivery_window
     *
     * @return \OpenAPI\Client\Model\fulfillment\outbound\DeliveryWindow|null
     */
    public function getDeliveryWindow(): ?\OpenAPI\Client\Model\fulfillment\outbound\DeliveryWindow
    {
        return $this->container['delivery_window'];
    }

    /**
     * Sets delivery_window
     *
     * @param \OpenAPI\Client\Model\fulfillment\outbound\DeliveryWindow|null $delivery_window delivery_window
     *
     * @return self
     */
    public function setDeliveryWindow(?\OpenAPI\Client\Model\fulfillment\outbound\DeliveryWindow $delivery_window): self
    {
        if (is_null($delivery_window)) {
            array_push($this->openAPINullablesSetToNull, 'delivery_window');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('delivery_window', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['delivery_window'] = $delivery_window;

        return $this;
    }

    /**
     * Gets destination_address
     *
     * @return \OpenAPI\Client\Model\fulfillment\outbound\Address
     */
    public function getDestinationAddress(): \OpenAPI\Client\Model\fulfillment\outbound\Address
    {
        return $this->container['destination_address'];
    }

    /**
     * Sets destination_address
     *
     * @param \OpenAPI\Client\Model\fulfillment\outbound\Address $destination_address destination_address
     *
     * @return self
     */
    public function setDestinationAddress(\OpenAPI\Client\Model\fulfillment\outbound\Address $destination_address): self
    {
        if (is_null($destination_address)) {
            throw new \InvalidArgumentException('non-nullable destination_address cannot be null');
        }
        $this->container['destination_address'] = $destination_address;

        return $this;
    }

    /**
     * Gets delivery_preferences
     *
     * @return \OpenAPI\Client\Model\fulfillment\outbound\DeliveryPreferences|null
     */
    public function getDeliveryPreferences(): ?\OpenAPI\Client\Model\fulfillment\outbound\DeliveryPreferences
    {
        return $this->container['delivery_preferences'];
    }

    /**
     * Sets delivery_preferences
     *
     * @param \OpenAPI\Client\Model\fulfillment\outbound\DeliveryPreferences|null $delivery_preferences delivery_preferences
     *
     * @return self
     */
    public function setDeliveryPreferences(?\OpenAPI\Client\Model\fulfillment\outbound\DeliveryPreferences $delivery_preferences): self
    {
        if (is_null($delivery_preferences)) {
            array_push($this->openAPINullablesSetToNull, 'delivery_preferences');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('delivery_preferences', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['delivery_preferences'] = $delivery_preferences;

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
     * Gets cod_settings
     *
     * @return \OpenAPI\Client\Model\fulfillment\outbound\CODSettings|null
     */
    public function getCodSettings(): ?\OpenAPI\Client\Model\fulfillment\outbound\CODSettings
    {
        return $this->container['cod_settings'];
    }

    /**
     * Sets cod_settings
     *
     * @param \OpenAPI\Client\Model\fulfillment\outbound\CODSettings|null $cod_settings cod_settings
     *
     * @return self
     */
    public function setCodSettings(?\OpenAPI\Client\Model\fulfillment\outbound\CODSettings $cod_settings): self
    {
        if (is_null($cod_settings)) {
            array_push($this->openAPINullablesSetToNull, 'cod_settings');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('cod_settings', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['cod_settings'] = $cod_settings;

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
     * @return array
     */
    public function getItems(): array
    {
        return $this->container['items'];
    }

    /**
     * Sets items
     *
     * @param array $items An array of item information for creating a fulfillment order.
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
     * Gets payment_information
     *
     * @return array|null
     */
    public function getPaymentInformation(): ?array
    {
        return $this->container['payment_information'];
    }

    /**
     * Sets payment_information
     *
     * @param array|null $payment_information An array of various payment attributes related to this fulfillment order.
     *
     * @return self
     */
    public function setPaymentInformation(?array $payment_information): self
    {
        if (is_null($payment_information)) {
            array_push($this->openAPINullablesSetToNull, 'payment_information');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('payment_information', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['payment_information'] = $payment_information;

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


