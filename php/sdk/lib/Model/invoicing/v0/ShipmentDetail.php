<?php

/**
 * ShipmentDetail.
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
 * Selling Partner API for Shipment Invoicing.
 *
 * The Selling Partner API for Shipment Invoicing helps you programmatically retrieve shipment invoice information in the Brazil marketplace for a selling partner’s Fulfillment by Amazon (FBA) orders.
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

namespace SpApi\Model\invoicing\v0;

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * ShipmentDetail Class Doc Comment.
 *
 * @category Class
 *
 * @description The information required by a selling partner to issue a shipment invoice.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class ShipmentDetail implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'ShipmentDetail';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'warehouse_id' => 'string',
        'amazon_order_id' => 'string',
        'amazon_shipment_id' => 'string',
        'purchase_date' => '\DateTime',
        'shipping_address' => '\SpApi\Model\invoicing\v0\Address',
        'payment_method_details' => 'string[]',
        'marketplace_id' => 'string',
        'seller_id' => 'string',
        'buyer_name' => 'string',
        'buyer_county' => 'string',
        'buyer_tax_info' => '\SpApi\Model\invoicing\v0\BuyerTaxInfo',
        'marketplace_tax_info' => '\SpApi\Model\invoicing\v0\MarketplaceTaxInfo',
        'seller_display_name' => 'string',
        'shipment_items' => '\SpApi\Model\invoicing\v0\ShipmentItem[]'];

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
        'warehouse_id' => null,
        'amazon_order_id' => null,
        'amazon_shipment_id' => null,
        'purchase_date' => 'date-time',
        'shipping_address' => null,
        'payment_method_details' => null,
        'marketplace_id' => null,
        'seller_id' => null,
        'buyer_name' => null,
        'buyer_county' => null,
        'buyer_tax_info' => null,
        'marketplace_tax_info' => null,
        'seller_display_name' => null,
        'shipment_items' => null];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'warehouse_id' => true,
        'amazon_order_id' => true,
        'amazon_shipment_id' => true,
        'purchase_date' => true,
        'shipping_address' => true,
        'payment_method_details' => true,
        'marketplace_id' => true,
        'seller_id' => true,
        'buyer_name' => true,
        'buyer_county' => true,
        'buyer_tax_info' => true,
        'marketplace_tax_info' => true,
        'seller_display_name' => true,
        'shipment_items' => true,
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
        'warehouse_id' => 'WarehouseId',
        'amazon_order_id' => 'AmazonOrderId',
        'amazon_shipment_id' => 'AmazonShipmentId',
        'purchase_date' => 'PurchaseDate',
        'shipping_address' => 'ShippingAddress',
        'payment_method_details' => 'PaymentMethodDetails',
        'marketplace_id' => 'MarketplaceId',
        'seller_id' => 'SellerId',
        'buyer_name' => 'BuyerName',
        'buyer_county' => 'BuyerCounty',
        'buyer_tax_info' => 'BuyerTaxInfo',
        'marketplace_tax_info' => 'MarketplaceTaxInfo',
        'seller_display_name' => 'SellerDisplayName',
        'shipment_items' => 'ShipmentItems',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'warehouse_id' => 'setWarehouseId',
        'amazon_order_id' => 'setAmazonOrderId',
        'amazon_shipment_id' => 'setAmazonShipmentId',
        'purchase_date' => 'setPurchaseDate',
        'shipping_address' => 'setShippingAddress',
        'payment_method_details' => 'setPaymentMethodDetails',
        'marketplace_id' => 'setMarketplaceId',
        'seller_id' => 'setSellerId',
        'buyer_name' => 'setBuyerName',
        'buyer_county' => 'setBuyerCounty',
        'buyer_tax_info' => 'setBuyerTaxInfo',
        'marketplace_tax_info' => 'setMarketplaceTaxInfo',
        'seller_display_name' => 'setSellerDisplayName',
        'shipment_items' => 'setShipmentItems',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'warehouse_id' => 'getWarehouseId',
        'amazon_order_id' => 'getAmazonOrderId',
        'amazon_shipment_id' => 'getAmazonShipmentId',
        'purchase_date' => 'getPurchaseDate',
        'shipping_address' => 'getShippingAddress',
        'payment_method_details' => 'getPaymentMethodDetails',
        'marketplace_id' => 'getMarketplaceId',
        'seller_id' => 'getSellerId',
        'buyer_name' => 'getBuyerName',
        'buyer_county' => 'getBuyerCounty',
        'buyer_tax_info' => 'getBuyerTaxInfo',
        'marketplace_tax_info' => 'getMarketplaceTaxInfo',
        'seller_display_name' => 'getSellerDisplayName',
        'shipment_items' => 'getShipmentItems',
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
        $this->setIfExists('warehouse_id', $data ?? [], null);
        $this->setIfExists('amazon_order_id', $data ?? [], null);
        $this->setIfExists('amazon_shipment_id', $data ?? [], null);
        $this->setIfExists('purchase_date', $data ?? [], null);
        $this->setIfExists('shipping_address', $data ?? [], null);
        $this->setIfExists('payment_method_details', $data ?? [], null);
        $this->setIfExists('marketplace_id', $data ?? [], null);
        $this->setIfExists('seller_id', $data ?? [], null);
        $this->setIfExists('buyer_name', $data ?? [], null);
        $this->setIfExists('buyer_county', $data ?? [], null);
        $this->setIfExists('buyer_tax_info', $data ?? [], null);
        $this->setIfExists('marketplace_tax_info', $data ?? [], null);
        $this->setIfExists('seller_display_name', $data ?? [], null);
        $this->setIfExists('shipment_items', $data ?? [], null);
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
     * Gets warehouse_id.
     */
    public function getWarehouseId(): ?string
    {
        return $this->container['warehouse_id'];
    }

    /**
     * Sets warehouse_id.
     *
     * @param null|string $warehouse_id the Amazon-defined identifier for the warehouse
     */
    public function setWarehouseId(?string $warehouse_id): self
    {
        if (is_null($warehouse_id)) {
            array_push($this->openAPINullablesSetToNull, 'warehouse_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('warehouse_id', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['warehouse_id'] = $warehouse_id;

        return $this;
    }

    /**
     * Gets amazon_order_id.
     */
    public function getAmazonOrderId(): ?string
    {
        return $this->container['amazon_order_id'];
    }

    /**
     * Sets amazon_order_id.
     *
     * @param null|string $amazon_order_id the Amazon-defined identifier for the order
     */
    public function setAmazonOrderId(?string $amazon_order_id): self
    {
        if (is_null($amazon_order_id)) {
            array_push($this->openAPINullablesSetToNull, 'amazon_order_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('amazon_order_id', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['amazon_order_id'] = $amazon_order_id;

        return $this;
    }

    /**
     * Gets amazon_shipment_id.
     */
    public function getAmazonShipmentId(): ?string
    {
        return $this->container['amazon_shipment_id'];
    }

    /**
     * Sets amazon_shipment_id.
     *
     * @param null|string $amazon_shipment_id the Amazon-defined identifier for the shipment
     */
    public function setAmazonShipmentId(?string $amazon_shipment_id): self
    {
        if (is_null($amazon_shipment_id)) {
            array_push($this->openAPINullablesSetToNull, 'amazon_shipment_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('amazon_shipment_id', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['amazon_shipment_id'] = $amazon_shipment_id;

        return $this;
    }

    /**
     * Gets purchase_date.
     */
    public function getPurchaseDate(): ?\DateTime
    {
        return $this->container['purchase_date'];
    }

    /**
     * Sets purchase_date.
     *
     * @param null|\DateTime $purchase_date the date and time when the order was created
     */
    public function setPurchaseDate(?\DateTime $purchase_date): self
    {
        if (is_null($purchase_date)) {
            array_push($this->openAPINullablesSetToNull, 'purchase_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('purchase_date', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['purchase_date'] = $purchase_date;

        return $this;
    }

    /**
     * Gets shipping_address.
     */
    public function getShippingAddress(): ?Address
    {
        return $this->container['shipping_address'];
    }

    /**
     * Sets shipping_address.
     *
     * @param null|Address $shipping_address shipping_address
     */
    public function setShippingAddress(?Address $shipping_address): self
    {
        if (is_null($shipping_address)) {
            array_push($this->openAPINullablesSetToNull, 'shipping_address');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipping_address', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['shipping_address'] = $shipping_address;

        return $this;
    }

    /**
     * Gets payment_method_details.
     */
    public function getPaymentMethodDetails(): ?array
    {
        return $this->container['payment_method_details'];
    }

    /**
     * Sets payment_method_details.
     *
     * @param null|array $payment_method_details the list of payment method details
     */
    public function setPaymentMethodDetails(?array $payment_method_details): self
    {
        if (is_null($payment_method_details)) {
            array_push($this->openAPINullablesSetToNull, 'payment_method_details');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('payment_method_details', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['payment_method_details'] = $payment_method_details;

        return $this;
    }

    /**
     * Gets marketplace_id.
     */
    public function getMarketplaceId(): ?string
    {
        return $this->container['marketplace_id'];
    }

    /**
     * Sets marketplace_id.
     *
     * @param null|string $marketplace_id the identifier for the marketplace where the order was placed
     */
    public function setMarketplaceId(?string $marketplace_id): self
    {
        if (is_null($marketplace_id)) {
            array_push($this->openAPINullablesSetToNull, 'marketplace_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('marketplace_id', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['marketplace_id'] = $marketplace_id;

        return $this;
    }

    /**
     * Gets seller_id.
     */
    public function getSellerId(): ?string
    {
        return $this->container['seller_id'];
    }

    /**
     * Sets seller_id.
     *
     * @param null|string $seller_id the seller identifier
     */
    public function setSellerId(?string $seller_id): self
    {
        if (is_null($seller_id)) {
            array_push($this->openAPINullablesSetToNull, 'seller_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('seller_id', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['seller_id'] = $seller_id;

        return $this;
    }

    /**
     * Gets buyer_name.
     */
    public function getBuyerName(): ?string
    {
        return $this->container['buyer_name'];
    }

    /**
     * Sets buyer_name.
     *
     * @param null|string $buyer_name the name of the buyer
     */
    public function setBuyerName(?string $buyer_name): self
    {
        if (is_null($buyer_name)) {
            array_push($this->openAPINullablesSetToNull, 'buyer_name');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('buyer_name', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['buyer_name'] = $buyer_name;

        return $this;
    }

    /**
     * Gets buyer_county.
     */
    public function getBuyerCounty(): ?string
    {
        return $this->container['buyer_county'];
    }

    /**
     * Sets buyer_county.
     *
     * @param null|string $buyer_county the county of the buyer
     */
    public function setBuyerCounty(?string $buyer_county): self
    {
        if (is_null($buyer_county)) {
            array_push($this->openAPINullablesSetToNull, 'buyer_county');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('buyer_county', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['buyer_county'] = $buyer_county;

        return $this;
    }

    /**
     * Gets buyer_tax_info.
     */
    public function getBuyerTaxInfo(): ?BuyerTaxInfo
    {
        return $this->container['buyer_tax_info'];
    }

    /**
     * Sets buyer_tax_info.
     *
     * @param null|BuyerTaxInfo $buyer_tax_info buyer_tax_info
     */
    public function setBuyerTaxInfo(?BuyerTaxInfo $buyer_tax_info): self
    {
        if (is_null($buyer_tax_info)) {
            array_push($this->openAPINullablesSetToNull, 'buyer_tax_info');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('buyer_tax_info', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['buyer_tax_info'] = $buyer_tax_info;

        return $this;
    }

    /**
     * Gets marketplace_tax_info.
     */
    public function getMarketplaceTaxInfo(): ?MarketplaceTaxInfo
    {
        return $this->container['marketplace_tax_info'];
    }

    /**
     * Sets marketplace_tax_info.
     *
     * @param null|MarketplaceTaxInfo $marketplace_tax_info marketplace_tax_info
     */
    public function setMarketplaceTaxInfo(?MarketplaceTaxInfo $marketplace_tax_info): self
    {
        if (is_null($marketplace_tax_info)) {
            array_push($this->openAPINullablesSetToNull, 'marketplace_tax_info');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('marketplace_tax_info', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['marketplace_tax_info'] = $marketplace_tax_info;

        return $this;
    }

    /**
     * Gets seller_display_name.
     */
    public function getSellerDisplayName(): ?string
    {
        return $this->container['seller_display_name'];
    }

    /**
     * Sets seller_display_name.
     *
     * @param null|string $seller_display_name the seller’s friendly name registered in the marketplace
     */
    public function setSellerDisplayName(?string $seller_display_name): self
    {
        if (is_null($seller_display_name)) {
            array_push($this->openAPINullablesSetToNull, 'seller_display_name');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('seller_display_name', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['seller_display_name'] = $seller_display_name;

        return $this;
    }

    /**
     * Gets shipment_items.
     */
    public function getShipmentItems(): ?array
    {
        return $this->container['shipment_items'];
    }

    /**
     * Sets shipment_items.
     *
     * @param null|array $shipment_items a list of shipment items
     */
    public function setShipmentItems(?array $shipment_items): self
    {
        if (is_null($shipment_items)) {
            array_push($this->openAPINullablesSetToNull, 'shipment_items');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('shipment_items', $nullablesSetToNull);
            if (false !== $index) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['shipment_items'] = $shipment_items;

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
