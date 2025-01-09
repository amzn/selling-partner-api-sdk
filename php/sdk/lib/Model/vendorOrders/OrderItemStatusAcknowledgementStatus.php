<?php
/**
 * OrderItemStatusAcknowledgementStatus
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Retail Procurement Orders
 *
 * The Selling Partner API for Retail Procurement Orders provides programmatic access to vendor orders data.
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

namespace OpenAPI\Client\Model\vendorOrders;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * OrderItemStatusAcknowledgementStatus Class Doc Comment
 *
 * @category Class
 * @description Acknowledgement status information.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class OrderItemStatusAcknowledgementStatus implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'OrderItemStatus_acknowledgementStatus';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'confirmation_status' => 'string',
             'accepted_quantity' => '\OpenAPI\Client\Model\vendorOrders\ItemQuantity',
             'rejected_quantity' => '\OpenAPI\Client\Model\vendorOrders\ItemQuantity',
             'acknowledgement_status_details' => '\OpenAPI\Client\Model\vendorOrders\AcknowledgementStatusDetails[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'confirmation_status' => null,
            'accepted_quantity' => null,
            'rejected_quantity' => null,
            'acknowledgement_status_details' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'confirmation_status' => true,
        'accepted_quantity' => true,
        'rejected_quantity' => true,
        'acknowledgement_status_details' => true
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
        'confirmation_status' => 'confirmationStatus',
                'accepted_quantity' => 'acceptedQuantity',
                'rejected_quantity' => 'rejectedQuantity',
                'acknowledgement_status_details' => 'acknowledgementStatusDetails'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'confirmation_status' => 'setConfirmationStatus',
        'accepted_quantity' => 'setAcceptedQuantity',
        'rejected_quantity' => 'setRejectedQuantity',
        'acknowledgement_status_details' => 'setAcknowledgementStatusDetails'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'confirmation_status' => 'getConfirmationStatus',
        'accepted_quantity' => 'getAcceptedQuantity',
        'rejected_quantity' => 'getRejectedQuantity',
        'acknowledgement_status_details' => 'getAcknowledgementStatusDetails'
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

    public const CONFIRMATION_STATUS_ACCEPTED = 'ACCEPTED';
    public const CONFIRMATION_STATUS_PARTIALLY_ACCEPTED = 'PARTIALLY_ACCEPTED';
    public const CONFIRMATION_STATUS_REJECTED = 'REJECTED';
    public const CONFIRMATION_STATUS_UNCONFIRMED = 'UNCONFIRMED';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getConfirmationStatusAllowableValues(): array
    {
        return [
            self::CONFIRMATION_STATUS_ACCEPTED,
            self::CONFIRMATION_STATUS_PARTIALLY_ACCEPTED,
            self::CONFIRMATION_STATUS_REJECTED,
            self::CONFIRMATION_STATUS_UNCONFIRMED,
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
        $this->setIfExists('confirmation_status', $data ?? [], null);
        $this->setIfExists('accepted_quantity', $data ?? [], null);
        $this->setIfExists('rejected_quantity', $data ?? [], null);
        $this->setIfExists('acknowledgement_status_details', $data ?? [], null);
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

        $allowedValues = $this->getConfirmationStatusAllowableValues();
        if (!is_null($this->container['confirmation_status']) && !in_array($this->container['confirmation_status'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'confirmation_status', must be one of '%s'",
                $this->container['confirmation_status'],
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
     * Gets confirmation_status
     *
     * @return string|null
     */
    public function getConfirmationStatus(): ?string
    {
        return $this->container['confirmation_status'];
    }

    /**
     * Sets confirmation_status
     *
     * @param string|null $confirmation_status Confirmation status of line item.
     *
     * @return self
     */
    public function setConfirmationStatus(?string $confirmation_status): self
    {
        if (is_null($confirmation_status)) {
            array_push($this->openAPINullablesSetToNull, 'confirmation_status');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('confirmation_status', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $allowedValues = $this->getConfirmationStatusAllowableValues();
        if (!is_null($confirmation_status) && !in_array($confirmation_status, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'confirmation_status', must be one of '%s'",
                    $confirmation_status,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['confirmation_status'] = $confirmation_status;

        return $this;
    }

    /**
     * Gets accepted_quantity
     *
     * @return \OpenAPI\Client\Model\vendorOrders\ItemQuantity|null
     */
    public function getAcceptedQuantity(): ?\OpenAPI\Client\Model\vendorOrders\ItemQuantity
    {
        return $this->container['accepted_quantity'];
    }

    /**
     * Sets accepted_quantity
     *
     * @param \OpenAPI\Client\Model\vendorOrders\ItemQuantity|null $accepted_quantity accepted_quantity
     *
     * @return self
     */
    public function setAcceptedQuantity(?\OpenAPI\Client\Model\vendorOrders\ItemQuantity $accepted_quantity): self
    {
        if (is_null($accepted_quantity)) {
            array_push($this->openAPINullablesSetToNull, 'accepted_quantity');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('accepted_quantity', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['accepted_quantity'] = $accepted_quantity;

        return $this;
    }

    /**
     * Gets rejected_quantity
     *
     * @return \OpenAPI\Client\Model\vendorOrders\ItemQuantity|null
     */
    public function getRejectedQuantity(): ?\OpenAPI\Client\Model\vendorOrders\ItemQuantity
    {
        return $this->container['rejected_quantity'];
    }

    /**
     * Sets rejected_quantity
     *
     * @param \OpenAPI\Client\Model\vendorOrders\ItemQuantity|null $rejected_quantity rejected_quantity
     *
     * @return self
     */
    public function setRejectedQuantity(?\OpenAPI\Client\Model\vendorOrders\ItemQuantity $rejected_quantity): self
    {
        if (is_null($rejected_quantity)) {
            array_push($this->openAPINullablesSetToNull, 'rejected_quantity');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('rejected_quantity', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['rejected_quantity'] = $rejected_quantity;

        return $this;
    }

    /**
     * Gets acknowledgement_status_details
     *
     * @return array|null
     */
    public function getAcknowledgementStatusDetails(): ?array
    {
        return $this->container['acknowledgement_status_details'];
    }

    /**
     * Sets acknowledgement_status_details
     *
     * @param array|null $acknowledgement_status_details Details of item quantity confirmed.
     *
     * @return self
     */
    public function setAcknowledgementStatusDetails(?array $acknowledgement_status_details): self
    {
        if (is_null($acknowledgement_status_details)) {
            array_push($this->openAPINullablesSetToNull, 'acknowledgement_status_details');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('acknowledgement_status_details', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['acknowledgement_status_details'] = $acknowledgement_status_details;

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


