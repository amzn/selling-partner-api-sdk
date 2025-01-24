<?php
/**
 * Context
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * The Selling Partner API for Finances
 *
 * The Selling Partner API for Finances provides financial information relevant to a seller's business. You can obtain financial events for a given order or date range without having to wait until a statement period closes.
 *
 * The version of the OpenAPI document: 2024-06-19
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\finances\v2024_06_19;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * Context Class Doc Comment
 *
 * @category Class
 * @description Additional Information about the item.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class Context implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'Context';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'store_name' => 'string',
             'order_type' => 'string',
             'channel' => 'string',
             'asin' => 'string',
             'sku' => 'string',
             'quantity_shipped' => 'int',
             'fulfillment_network' => 'string',
             'payment_type' => 'string',
             'payment_method' => 'string',
             'payment_reference' => 'string',
             'payment_date' => '\DateTime',
             'deferral_reason' => 'string',
             'maturity_date' => '\DateTime',
             'deferral_status' => 'string',
             'start_time' => '\DateTime',
             'end_time' => '\DateTime',
             'context_type' => 'string'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'store_name' => null,
            'order_type' => null,
            'channel' => null,
            'asin' => null,
            'sku' => null,
            'quantity_shipped' => 'int32',
            'fulfillment_network' => null,
            'payment_type' => null,
            'payment_method' => null,
            'payment_reference' => null,
            'payment_date' => 'date-time',
            'deferral_reason' => null,
            'maturity_date' => 'date-time',
            'deferral_status' => null,
            'start_time' => 'date-time',
            'end_time' => 'date-time',
            'context_type' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'store_name' => true,
        'order_type' => true,
        'channel' => true,
        'asin' => true,
        'sku' => true,
        'quantity_shipped' => true,
        'fulfillment_network' => true,
        'payment_type' => true,
        'payment_method' => true,
        'payment_reference' => true,
        'payment_date' => true,
        'deferral_reason' => true,
        'maturity_date' => true,
        'deferral_status' => true,
        'start_time' => true,
        'end_time' => true,
        'context_type' => false
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
        'store_name' => 'storeName',
                'order_type' => 'orderType',
                'channel' => 'channel',
                'asin' => 'asin',
                'sku' => 'sku',
                'quantity_shipped' => 'quantityShipped',
                'fulfillment_network' => 'fulfillmentNetwork',
                'payment_type' => 'paymentType',
                'payment_method' => 'paymentMethod',
                'payment_reference' => 'paymentReference',
                'payment_date' => 'paymentDate',
                'deferral_reason' => 'deferralReason',
                'maturity_date' => 'maturityDate',
                'deferral_status' => 'deferralStatus',
                'start_time' => 'startTime',
                'end_time' => 'endTime',
                'context_type' => 'contextType'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'store_name' => 'setStoreName',
        'order_type' => 'setOrderType',
        'channel' => 'setChannel',
        'asin' => 'setAsin',
        'sku' => 'setSku',
        'quantity_shipped' => 'setQuantityShipped',
        'fulfillment_network' => 'setFulfillmentNetwork',
        'payment_type' => 'setPaymentType',
        'payment_method' => 'setPaymentMethod',
        'payment_reference' => 'setPaymentReference',
        'payment_date' => 'setPaymentDate',
        'deferral_reason' => 'setDeferralReason',
        'maturity_date' => 'setMaturityDate',
        'deferral_status' => 'setDeferralStatus',
        'start_time' => 'setStartTime',
        'end_time' => 'setEndTime',
        'context_type' => 'setContextType'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'store_name' => 'getStoreName',
        'order_type' => 'getOrderType',
        'channel' => 'getChannel',
        'asin' => 'getAsin',
        'sku' => 'getSku',
        'quantity_shipped' => 'getQuantityShipped',
        'fulfillment_network' => 'getFulfillmentNetwork',
        'payment_type' => 'getPaymentType',
        'payment_method' => 'getPaymentMethod',
        'payment_reference' => 'getPaymentReference',
        'payment_date' => 'getPaymentDate',
        'deferral_reason' => 'getDeferralReason',
        'maturity_date' => 'getMaturityDate',
        'deferral_status' => 'getDeferralStatus',
        'start_time' => 'getStartTime',
        'end_time' => 'getEndTime',
        'context_type' => 'getContextType'
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
        $this->setIfExists('store_name', $data ?? [], null);
        $this->setIfExists('order_type', $data ?? [], null);
        $this->setIfExists('channel', $data ?? [], null);
        $this->setIfExists('asin', $data ?? [], null);
        $this->setIfExists('sku', $data ?? [], null);
        $this->setIfExists('quantity_shipped', $data ?? [], null);
        $this->setIfExists('fulfillment_network', $data ?? [], null);
        $this->setIfExists('payment_type', $data ?? [], null);
        $this->setIfExists('payment_method', $data ?? [], null);
        $this->setIfExists('payment_reference', $data ?? [], null);
        $this->setIfExists('payment_date', $data ?? [], null);
        $this->setIfExists('deferral_reason', $data ?? [], null);
        $this->setIfExists('maturity_date', $data ?? [], null);
        $this->setIfExists('deferral_status', $data ?? [], null);
        $this->setIfExists('start_time', $data ?? [], null);
        $this->setIfExists('end_time', $data ?? [], null);
        $this->setIfExists('context_type', $data ?? [], null);
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

        if ($this->container['context_type'] === null) {
            $invalidProperties[] = "'context_type' can't be null";
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
     * Gets store_name
     *
     * @return string|null
     */
    public function getStoreName(): ?string
    {
        return $this->container['store_name'];
    }

    /**
     * Sets store_name
     *
     * @param string|null $store_name The name of the store that is related to the transaction.
     *
     * @return self
     */
    public function setStoreName(?string $store_name): self
    {
        if (is_null($store_name)) {
            array_push($this->openAPINullablesSetToNull, 'store_name');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('store_name', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['store_name'] = $store_name;

        return $this;
    }

    /**
     * Gets order_type
     *
     * @return string|null
     */
    public function getOrderType(): ?string
    {
        return $this->container['order_type'];
    }

    /**
     * Sets order_type
     *
     * @param string|null $order_type The transaction's order type.
     *
     * @return self
     */
    public function setOrderType(?string $order_type): self
    {
        if (is_null($order_type)) {
            array_push($this->openAPINullablesSetToNull, 'order_type');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('order_type', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['order_type'] = $order_type;

        return $this;
    }

    /**
     * Gets channel
     *
     * @return string|null
     */
    public function getChannel(): ?string
    {
        return $this->container['channel'];
    }

    /**
     * Sets channel
     *
     * @param string|null $channel Channel details of related transaction.
     *
     * @return self
     */
    public function setChannel(?string $channel): self
    {
        if (is_null($channel)) {
            array_push($this->openAPINullablesSetToNull, 'channel');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('channel', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['channel'] = $channel;

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
            array_push($this->openAPINullablesSetToNull, 'asin');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('asin', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['asin'] = $asin;

        return $this;
    }

    /**
     * Gets sku
     *
     * @return string|null
     */
    public function getSku(): ?string
    {
        return $this->container['sku'];
    }

    /**
     * Sets sku
     *
     * @param string|null $sku The Stock Keeping Unit (SKU) of the item.
     *
     * @return self
     */
    public function setSku(?string $sku): self
    {
        if (is_null($sku)) {
            array_push($this->openAPINullablesSetToNull, 'sku');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('sku', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['sku'] = $sku;

        return $this;
    }

    /**
     * Gets quantity_shipped
     *
     * @return int|null
     */
    public function getQuantityShipped(): ?int
    {
        return $this->container['quantity_shipped'];
    }

    /**
     * Sets quantity_shipped
     *
     * @param int|null $quantity_shipped The quantity of the item shipped.
     *
     * @return self
     */
    public function setQuantityShipped(?int $quantity_shipped): self
    {
        if (is_null($quantity_shipped)) {
            array_push($this->openAPINullablesSetToNull, 'quantity_shipped');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('quantity_shipped', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['quantity_shipped'] = $quantity_shipped;

        return $this;
    }

    /**
     * Gets fulfillment_network
     *
     * @return string|null
     */
    public function getFulfillmentNetwork(): ?string
    {
        return $this->container['fulfillment_network'];
    }

    /**
     * Sets fulfillment_network
     *
     * @param string|null $fulfillment_network The fulfillment network of the item.
     *
     * @return self
     */
    public function setFulfillmentNetwork(?string $fulfillment_network): self
    {
        if (is_null($fulfillment_network)) {
            array_push($this->openAPINullablesSetToNull, 'fulfillment_network');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('fulfillment_network', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['fulfillment_network'] = $fulfillment_network;

        return $this;
    }

    /**
     * Gets payment_type
     *
     * @return string|null
     */
    public function getPaymentType(): ?string
    {
        return $this->container['payment_type'];
    }

    /**
     * Sets payment_type
     *
     * @param string|null $payment_type The type of payment.
     *
     * @return self
     */
    public function setPaymentType(?string $payment_type): self
    {
        if (is_null($payment_type)) {
            array_push($this->openAPINullablesSetToNull, 'payment_type');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('payment_type', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['payment_type'] = $payment_type;

        return $this;
    }

    /**
     * Gets payment_method
     *
     * @return string|null
     */
    public function getPaymentMethod(): ?string
    {
        return $this->container['payment_method'];
    }

    /**
     * Sets payment_method
     *
     * @param string|null $payment_method The method of payment.
     *
     * @return self
     */
    public function setPaymentMethod(?string $payment_method): self
    {
        if (is_null($payment_method)) {
            array_push($this->openAPINullablesSetToNull, 'payment_method');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('payment_method', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['payment_method'] = $payment_method;

        return $this;
    }

    /**
     * Gets payment_reference
     *
     * @return string|null
     */
    public function getPaymentReference(): ?string
    {
        return $this->container['payment_reference'];
    }

    /**
     * Sets payment_reference
     *
     * @param string|null $payment_reference The reference number of the payment.
     *
     * @return self
     */
    public function setPaymentReference(?string $payment_reference): self
    {
        if (is_null($payment_reference)) {
            array_push($this->openAPINullablesSetToNull, 'payment_reference');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('payment_reference', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['payment_reference'] = $payment_reference;

        return $this;
    }

    /**
     * Gets payment_date
     *
     * @return \DateTime|null
     */
    public function getPaymentDate(): ?\DateTime
    {
        return $this->container['payment_date'];
    }

    /**
     * Sets payment_date
     *
     * @param \DateTime|null $payment_date A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     *
     * @return self
     */
    public function setPaymentDate(?\DateTime $payment_date): self
    {
        if (is_null($payment_date)) {
            array_push($this->openAPINullablesSetToNull, 'payment_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('payment_date', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['payment_date'] = $payment_date;

        return $this;
    }

    /**
     * Gets deferral_reason
     *
     * @return string|null
     */
    public function getDeferralReason(): ?string
    {
        return $this->container['deferral_reason'];
    }

    /**
     * Sets deferral_reason
     *
     * @param string|null $deferral_reason Deferral policy applied on the transaction.  **Examples:** `B2B`,`DD7`
     *
     * @return self
     */
    public function setDeferralReason(?string $deferral_reason): self
    {
        if (is_null($deferral_reason)) {
            array_push($this->openAPINullablesSetToNull, 'deferral_reason');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('deferral_reason', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['deferral_reason'] = $deferral_reason;

        return $this;
    }

    /**
     * Gets maturity_date
     *
     * @return \DateTime|null
     */
    public function getMaturityDate(): ?\DateTime
    {
        return $this->container['maturity_date'];
    }

    /**
     * Sets maturity_date
     *
     * @param \DateTime|null $maturity_date A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     *
     * @return self
     */
    public function setMaturityDate(?\DateTime $maturity_date): self
    {
        if (is_null($maturity_date)) {
            array_push($this->openAPINullablesSetToNull, 'maturity_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('maturity_date', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['maturity_date'] = $maturity_date;

        return $this;
    }

    /**
     * Gets deferral_status
     *
     * @return string|null
     */
    public function getDeferralStatus(): ?string
    {
        return $this->container['deferral_status'];
    }

    /**
     * Sets deferral_status
     *
     * @param string|null $deferral_status The status of the transaction. For example, `HOLD`,`RELEASE`.
     *
     * @return self
     */
    public function setDeferralStatus(?string $deferral_status): self
    {
        if (is_null($deferral_status)) {
            array_push($this->openAPINullablesSetToNull, 'deferral_status');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('deferral_status', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['deferral_status'] = $deferral_status;

        return $this;
    }

    /**
     * Gets start_time
     *
     * @return \DateTime|null
     */
    public function getStartTime(): ?\DateTime
    {
        return $this->container['start_time'];
    }

    /**
     * Sets start_time
     *
     * @param \DateTime|null $start_time A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     *
     * @return self
     */
    public function setStartTime(?\DateTime $start_time): self
    {
        if (is_null($start_time)) {
            array_push($this->openAPINullablesSetToNull, 'start_time');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('start_time', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['start_time'] = $start_time;

        return $this;
    }

    /**
     * Gets end_time
     *
     * @return \DateTime|null
     */
    public function getEndTime(): ?\DateTime
    {
        return $this->container['end_time'];
    }

    /**
     * Sets end_time
     *
     * @param \DateTime|null $end_time A date in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format.
     *
     * @return self
     */
    public function setEndTime(?\DateTime $end_time): self
    {
        if (is_null($end_time)) {
            array_push($this->openAPINullablesSetToNull, 'end_time');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('end_time', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['end_time'] = $end_time;

        return $this;
    }

    /**
     * Gets context_type
     *
     * @return string
     */
    public function getContextType(): string
    {
        return $this->container['context_type'];
    }

    /**
     * Sets context_type
     *
     * @param string $context_type context_type
     *
     * @return self
     */
    public function setContextType(string $context_type): self
    {
        if (is_null($context_type)) {
            throw new \InvalidArgumentException('non-nullable context_type cannot be null');
        }
        $this->container['context_type'] = $context_type;

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


