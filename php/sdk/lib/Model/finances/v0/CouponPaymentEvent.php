<?php

/**
 * CouponPaymentEvent.
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
 * Selling Partner API for Finances.
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

namespace SpApi\Model\finances\v0;

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * CouponPaymentEvent Class Doc Comment.
 *
 * @category Class
 *
 * @description An event related to coupon payments.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class CouponPaymentEvent implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'CouponPaymentEvent';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'posted_date' => '\DateTime',
        'coupon_id' => 'string',
        'seller_coupon_description' => 'string',
        'clip_or_redemption_count' => 'int',
        'payment_event_id' => 'string',
        'fee_component' => '\SpApi\Model\finances\v0\FeeComponent',
        'charge_component' => '\SpApi\Model\finances\v0\ChargeComponent',
        'total_amount' => '\SpApi\Model\finances\v0\Currency'];

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
        'posted_date' => 'date-time',
        'coupon_id' => null,
        'seller_coupon_description' => null,
        'clip_or_redemption_count' => 'int64',
        'payment_event_id' => null,
        'fee_component' => null,
        'charge_component' => null,
        'total_amount' => null];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'posted_date' => true,
        'coupon_id' => true,
        'seller_coupon_description' => true,
        'clip_or_redemption_count' => true,
        'payment_event_id' => true,
        'fee_component' => true,
        'charge_component' => true,
        'total_amount' => true,
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
        'posted_date' => 'PostedDate',
        'coupon_id' => 'CouponId',
        'seller_coupon_description' => 'SellerCouponDescription',
        'clip_or_redemption_count' => 'ClipOrRedemptionCount',
        'payment_event_id' => 'PaymentEventId',
        'fee_component' => 'FeeComponent',
        'charge_component' => 'ChargeComponent',
        'total_amount' => 'TotalAmount',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'posted_date' => 'setPostedDate',
        'coupon_id' => 'setCouponId',
        'seller_coupon_description' => 'setSellerCouponDescription',
        'clip_or_redemption_count' => 'setClipOrRedemptionCount',
        'payment_event_id' => 'setPaymentEventId',
        'fee_component' => 'setFeeComponent',
        'charge_component' => 'setChargeComponent',
        'total_amount' => 'setTotalAmount',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'posted_date' => 'getPostedDate',
        'coupon_id' => 'getCouponId',
        'seller_coupon_description' => 'getSellerCouponDescription',
        'clip_or_redemption_count' => 'getClipOrRedemptionCount',
        'payment_event_id' => 'getPaymentEventId',
        'fee_component' => 'getFeeComponent',
        'charge_component' => 'getChargeComponent',
        'total_amount' => 'getTotalAmount',
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
        $this->setIfExists('posted_date', $data ?? [], null);
        $this->setIfExists('coupon_id', $data ?? [], null);
        $this->setIfExists('seller_coupon_description', $data ?? [], null);
        $this->setIfExists('clip_or_redemption_count', $data ?? [], null);
        $this->setIfExists('payment_event_id', $data ?? [], null);
        $this->setIfExists('fee_component', $data ?? [], null);
        $this->setIfExists('charge_component', $data ?? [], null);
        $this->setIfExists('total_amount', $data ?? [], null);
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
        return [];
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
     * Gets posted_date.
     */
    public function getPostedDate(): ?\DateTime
    {
        return $this->container['posted_date'];
    }

    /**
     * Sets posted_date.
     *
     * @param null|\DateTime $posted_date fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate)
     */
    public function setPostedDate(?\DateTime $posted_date): self
    {
        if (is_null($posted_date)) {
            array_push($this->openAPINullablesSetToNull, 'posted_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('posted_date', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['posted_date'] = $posted_date;

        return $this;
    }

    /**
     * Gets coupon_id.
     */
    public function getCouponId(): ?string
    {
        return $this->container['coupon_id'];
    }

    /**
     * Sets coupon_id.
     *
     * @param null|string $coupon_id a coupon identifier
     */
    public function setCouponId(?string $coupon_id): self
    {
        if (is_null($coupon_id)) {
            array_push($this->openAPINullablesSetToNull, 'coupon_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('coupon_id', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['coupon_id'] = $coupon_id;

        return $this;
    }

    /**
     * Gets seller_coupon_description.
     */
    public function getSellerCouponDescription(): ?string
    {
        return $this->container['seller_coupon_description'];
    }

    /**
     * Sets seller_coupon_description.
     *
     * @param null|string $seller_coupon_description the description provided by the seller when they created the coupon
     */
    public function setSellerCouponDescription(?string $seller_coupon_description): self
    {
        if (is_null($seller_coupon_description)) {
            array_push($this->openAPINullablesSetToNull, 'seller_coupon_description');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('seller_coupon_description', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['seller_coupon_description'] = $seller_coupon_description;

        return $this;
    }

    /**
     * Gets clip_or_redemption_count.
     */
    public function getClipOrRedemptionCount(): ?int
    {
        return $this->container['clip_or_redemption_count'];
    }

    /**
     * Sets clip_or_redemption_count.
     *
     * @param null|int $clip_or_redemption_count the number of coupon clips or redemptions
     */
    public function setClipOrRedemptionCount(?int $clip_or_redemption_count): self
    {
        if (is_null($clip_or_redemption_count)) {
            array_push($this->openAPINullablesSetToNull, 'clip_or_redemption_count');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('clip_or_redemption_count', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['clip_or_redemption_count'] = $clip_or_redemption_count;

        return $this;
    }

    /**
     * Gets payment_event_id.
     */
    public function getPaymentEventId(): ?string
    {
        return $this->container['payment_event_id'];
    }

    /**
     * Sets payment_event_id.
     *
     * @param null|string $payment_event_id a payment event identifier
     */
    public function setPaymentEventId(?string $payment_event_id): self
    {
        if (is_null($payment_event_id)) {
            array_push($this->openAPINullablesSetToNull, 'payment_event_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('payment_event_id', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['payment_event_id'] = $payment_event_id;

        return $this;
    }

    /**
     * Gets fee_component.
     */
    public function getFeeComponent(): ?FeeComponent
    {
        return $this->container['fee_component'];
    }

    /**
     * Sets fee_component.
     *
     * @param null|FeeComponent $fee_component fee_component
     */
    public function setFeeComponent(?FeeComponent $fee_component): self
    {
        if (is_null($fee_component)) {
            array_push($this->openAPINullablesSetToNull, 'fee_component');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('fee_component', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['fee_component'] = $fee_component;

        return $this;
    }

    /**
     * Gets charge_component.
     */
    public function getChargeComponent(): ?ChargeComponent
    {
        return $this->container['charge_component'];
    }

    /**
     * Sets charge_component.
     *
     * @param null|ChargeComponent $charge_component charge_component
     */
    public function setChargeComponent(?ChargeComponent $charge_component): self
    {
        if (is_null($charge_component)) {
            array_push($this->openAPINullablesSetToNull, 'charge_component');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('charge_component', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['charge_component'] = $charge_component;

        return $this;
    }

    /**
     * Gets total_amount.
     */
    public function getTotalAmount(): ?Currency
    {
        return $this->container['total_amount'];
    }

    /**
     * Sets total_amount.
     *
     * @param null|Currency $total_amount total_amount
     */
    public function setTotalAmount(?Currency $total_amount): self
    {
        if (is_null($total_amount)) {
            array_push($this->openAPINullablesSetToNull, 'total_amount');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('total_amount', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['total_amount'] = $total_amount;

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
