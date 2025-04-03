<?php

/**
 * IneligibleRate.
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
 * Amazon Shipping API.
 *
 * The Amazon Shipping API is designed to support outbound shipping use cases both for orders originating on Amazon-owned marketplaces as well as external channels/marketplaces. With these APIs, you can request shipping rates, create shipments, cancel shipments, and track shipments.
 *
 * The version of the OpenAPI document: v2
 * Contact: swa-api-core@amazon.com
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace SpApi\Model\shipping\v2;

use SpApi\Model\ModelInterface;
use SpApi\ObjectSerializer;

/**
 * IneligibleRate Class Doc Comment.
 *
 * @category Class
 *
 * @description Detailed information for an ineligible shipping service offering.
 *
 * @author   OpenAPI Generator team
 *
 * @see     https://openapi-generator.tech
 *
 * @implements \ArrayAccess<string, mixed>
 */
class IneligibleRate implements ModelInterface, \ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
     * The original name of the model.
     */
    protected static string $openAPIModelName = 'IneligibleRate';

    /**
     * Array of property to type mappings. Used for (de)serialization.
     *
     * @var string[]
     */
    protected static array $openAPITypes = [
        'service_id' => 'string',
        'service_name' => 'string',
        'carrier_name' => 'string',
        'carrier_id' => 'string',
        'ineligibility_reasons' => '\SpApi\Model\shipping\v2\IneligibilityReason[]'];

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
        'service_id' => null,
        'service_name' => null,
        'carrier_name' => null,
        'carrier_id' => null,
        'ineligibility_reasons' => null];

    /**
     * Array of nullable properties. Used for (de)serialization.
     *
     * @var bool[]
     */
    protected static array $openAPINullables = [
        'service_id' => false,
        'service_name' => false,
        'carrier_name' => false,
        'carrier_id' => false,
        'ineligibility_reasons' => false,
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
        'service_id' => 'serviceId',
        'service_name' => 'serviceName',
        'carrier_name' => 'carrierName',
        'carrier_id' => 'carrierId',
        'ineligibility_reasons' => 'ineligibilityReasons',
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses).
     *
     * @var string[]
     */
    protected static array $setters = [
        'service_id' => 'setServiceId',
        'service_name' => 'setServiceName',
        'carrier_name' => 'setCarrierName',
        'carrier_id' => 'setCarrierId',
        'ineligibility_reasons' => 'setIneligibilityReasons',
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests).
     *
     * @var string[]
     */
    protected static array $getters = [
        'service_id' => 'getServiceId',
        'service_name' => 'getServiceName',
        'carrier_name' => 'getCarrierName',
        'carrier_id' => 'getCarrierId',
        'ineligibility_reasons' => 'getIneligibilityReasons',
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
        $this->setIfExists('service_id', $data ?? [], null);
        $this->setIfExists('service_name', $data ?? [], null);
        $this->setIfExists('carrier_name', $data ?? [], null);
        $this->setIfExists('carrier_id', $data ?? [], null);
        $this->setIfExists('ineligibility_reasons', $data ?? [], null);
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

        if (null === $this->container['service_id']) {
            $invalidProperties[] = "'service_id' can't be null";
        }
        if (null === $this->container['service_name']) {
            $invalidProperties[] = "'service_name' can't be null";
        }
        if (null === $this->container['carrier_name']) {
            $invalidProperties[] = "'carrier_name' can't be null";
        }
        if (null === $this->container['carrier_id']) {
            $invalidProperties[] = "'carrier_id' can't be null";
        }
        if (null === $this->container['ineligibility_reasons']) {
            $invalidProperties[] = "'ineligibility_reasons' can't be null";
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
     * Gets service_id.
     */
    public function getServiceId(): string
    {
        return $this->container['service_id'];
    }

    /**
     * Sets service_id.
     *
     * @param string $service_id an identifier for the shipping service
     */
    public function setServiceId(string $service_id): self
    {
        if (is_null($service_id)) {
            throw new \InvalidArgumentException('non-nullable service_id cannot be null');
        }
        $this->container['service_id'] = $service_id;

        return $this;
    }

    /**
     * Gets service_name.
     */
    public function getServiceName(): string
    {
        return $this->container['service_name'];
    }

    /**
     * Sets service_name.
     *
     * @param string $service_name the name of the shipping service
     */
    public function setServiceName(string $service_name): self
    {
        if (is_null($service_name)) {
            throw new \InvalidArgumentException('non-nullable service_name cannot be null');
        }
        $this->container['service_name'] = $service_name;

        return $this;
    }

    /**
     * Gets carrier_name.
     */
    public function getCarrierName(): string
    {
        return $this->container['carrier_name'];
    }

    /**
     * Sets carrier_name.
     *
     * @param string $carrier_name the carrier name for the offering
     */
    public function setCarrierName(string $carrier_name): self
    {
        if (is_null($carrier_name)) {
            throw new \InvalidArgumentException('non-nullable carrier_name cannot be null');
        }
        $this->container['carrier_name'] = $carrier_name;

        return $this;
    }

    /**
     * Gets carrier_id.
     */
    public function getCarrierId(): string
    {
        return $this->container['carrier_id'];
    }

    /**
     * Sets carrier_id.
     *
     * @param string $carrier_id the carrier identifier for the offering, provided by the carrier
     */
    public function setCarrierId(string $carrier_id): self
    {
        if (is_null($carrier_id)) {
            throw new \InvalidArgumentException('non-nullable carrier_id cannot be null');
        }
        $this->container['carrier_id'] = $carrier_id;

        return $this;
    }

    /**
     * Gets ineligibility_reasons.
     */
    public function getIneligibilityReasons(): array
    {
        return $this->container['ineligibility_reasons'];
    }

    /**
     * Sets ineligibility_reasons.
     *
     * @param array $ineligibility_reasons a list of reasons why a shipping service offering is ineligible
     */
    public function setIneligibilityReasons(array $ineligibility_reasons): self
    {
        if (is_null($ineligibility_reasons)) {
            throw new \InvalidArgumentException('non-nullable ineligibility_reasons cannot be null');
        }
        $this->container['ineligibility_reasons'] = $ineligibility_reasons;

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
