<?php
/**
 * ImportDetails
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Vendor Shipments v1
 *
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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

namespace OpenAPI\Client\Model\vendor.shipments;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * ImportDetails Class Doc Comment
 *
 * @category Class
 * @description Provide these fields only if this shipment is a direct import.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ImportDetails implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'ImportDetails';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'method_of_payment' => 'string',
             'seal_number' => 'string',
             'route' => '\OpenAPI\Client\Model\vendor.shipments\Route',
             'import_containers' => 'string',
             'billable_weight' => '\OpenAPI\Client\Model\vendor.shipments\Weight',
             'estimated_ship_by_date' => '\DateTime',
             'handling_instructions' => 'string'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'method_of_payment' => null,
            'seal_number' => null,
            'route' => null,
            'import_containers' => null,
            'billable_weight' => null,
            'estimated_ship_by_date' => 'date-time',
            'handling_instructions' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'method_of_payment' => false,
        'seal_number' => false,
        'route' => false,
        'import_containers' => false,
        'billable_weight' => false,
        'estimated_ship_by_date' => false,
        'handling_instructions' => false
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
        'method_of_payment' => 'methodOfPayment',
                'seal_number' => 'sealNumber',
                'route' => 'route',
                'import_containers' => 'importContainers',
                'billable_weight' => 'billableWeight',
                'estimated_ship_by_date' => 'estimatedShipByDate',
                'handling_instructions' => 'handlingInstructions'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'method_of_payment' => 'setMethodOfPayment',
        'seal_number' => 'setSealNumber',
        'route' => 'setRoute',
        'import_containers' => 'setImportContainers',
        'billable_weight' => 'setBillableWeight',
        'estimated_ship_by_date' => 'setEstimatedShipByDate',
        'handling_instructions' => 'setHandlingInstructions'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'method_of_payment' => 'getMethodOfPayment',
        'seal_number' => 'getSealNumber',
        'route' => 'getRoute',
        'import_containers' => 'getImportContainers',
        'billable_weight' => 'getBillableWeight',
        'estimated_ship_by_date' => 'getEstimatedShipByDate',
        'handling_instructions' => 'getHandlingInstructions'
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

    public const METHOD_OF_PAYMENT_PAID_BY_BUYER = 'PaidByBuyer';
    public const METHOD_OF_PAYMENT_COLLECT_ON_DELIVERY = 'CollectOnDelivery';
    public const METHOD_OF_PAYMENT_DEFINED_BY_BUYER_AND_SELLER = 'DefinedByBuyerAndSeller';
    public const METHOD_OF_PAYMENT_FOB_PORT_OF_CALL = 'FOBPortOfCall';
    public const METHOD_OF_PAYMENT_PREPAID_BY_SELLER = 'PrepaidBySeller';
    public const METHOD_OF_PAYMENT_PAID_BY_SELLER = 'PaidBySeller';
    public const HANDLING_INSTRUCTIONS_OVERSIZED = 'Oversized';
    public const HANDLING_INSTRUCTIONS_FRAGILE = 'Fragile';
    public const HANDLING_INSTRUCTIONS_FOOD = 'Food';
    public const HANDLING_INSTRUCTIONS_HANDLE_WITH_CARE = 'HandleWithCare';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getMethodOfPaymentAllowableValues(): array
    {
        return [
            self::METHOD_OF_PAYMENT_PAID_BY_BUYER,
            self::METHOD_OF_PAYMENT_COLLECT_ON_DELIVERY,
            self::METHOD_OF_PAYMENT_DEFINED_BY_BUYER_AND_SELLER,
            self::METHOD_OF_PAYMENT_FOB_PORT_OF_CALL,
            self::METHOD_OF_PAYMENT_PREPAID_BY_SELLER,
            self::METHOD_OF_PAYMENT_PAID_BY_SELLER,
        ];
    }

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getHandlingInstructionsAllowableValues(): array
    {
        return [
            self::HANDLING_INSTRUCTIONS_OVERSIZED,
            self::HANDLING_INSTRUCTIONS_FRAGILE,
            self::HANDLING_INSTRUCTIONS_FOOD,
            self::HANDLING_INSTRUCTIONS_HANDLE_WITH_CARE,
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
        $this->setIfExists('method_of_payment', $data ?? [], null);
        $this->setIfExists('seal_number', $data ?? [], null);
        $this->setIfExists('route', $data ?? [], null);
        $this->setIfExists('import_containers', $data ?? [], null);
        $this->setIfExists('billable_weight', $data ?? [], null);
        $this->setIfExists('estimated_ship_by_date', $data ?? [], null);
        $this->setIfExists('handling_instructions', $data ?? [], null);
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

        $allowedValues = $this->getMethodOfPaymentAllowableValues();
        if (!is_null($this->container['method_of_payment']) && !in_array($this->container['method_of_payment'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'method_of_payment', must be one of '%s'",
                $this->container['method_of_payment'],
                implode("', '", $allowedValues)
            );
        }

        if (!is_null($this->container['import_containers']) && (mb_strlen($this->container['import_containers']) > 64)) {
            $invalidProperties[] = "invalid value for 'import_containers', the character length must be smaller than or equal to 64.";
        }

        $allowedValues = $this->getHandlingInstructionsAllowableValues();
        if (!is_null($this->container['handling_instructions']) && !in_array($this->container['handling_instructions'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'handling_instructions', must be one of '%s'",
                $this->container['handling_instructions'],
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
     * Gets method_of_payment
     *
     * @return string|null
     */
    public function getMethodOfPayment(): ?string
    {
        return $this->container['method_of_payment'];
    }

    /**
     * Sets method_of_payment
     *
     * @param string|null $method_of_payment This is used for import purchase orders only. If the recipient requests, this field will contain the shipment method of payment.
     *
     * @return self
     */
    public function setMethodOfPayment(?string $method_of_payment): self
    {
        if (is_null($method_of_payment)) {
            throw new \InvalidArgumentException('non-nullable method_of_payment cannot be null');
        }
        $allowedValues = $this->getMethodOfPaymentAllowableValues();
        if (!in_array($method_of_payment, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'method_of_payment', must be one of '%s'",
                    $method_of_payment,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['method_of_payment'] = $method_of_payment;

        return $this;
    }

    /**
     * Gets seal_number
     *
     * @return string|null
     */
    public function getSealNumber(): ?string
    {
        return $this->container['seal_number'];
    }

    /**
     * Sets seal_number
     *
     * @param string|null $seal_number The container's seal number.
     *
     * @return self
     */
    public function setSealNumber(?string $seal_number): self
    {
        if (is_null($seal_number)) {
            throw new \InvalidArgumentException('non-nullable seal_number cannot be null');
        }
        $this->container['seal_number'] = $seal_number;

        return $this;
    }

    /**
     * Gets route
     *
     * @return \OpenAPI\Client\Model\vendor.shipments\Route|null
     */
    public function getRoute(): ?\OpenAPI\Client\Model\vendor.shipments\Route
    {
        return $this->container['route'];
    }

    /**
     * Sets route
     *
     * @param \OpenAPI\Client\Model\vendor.shipments\Route|null $route route
     *
     * @return self
     */
    public function setRoute(?\OpenAPI\Client\Model\vendor.shipments\Route $route): self
    {
        if (is_null($route)) {
            throw new \InvalidArgumentException('non-nullable route cannot be null');
        }
        $this->container['route'] = $route;

        return $this;
    }

    /**
     * Gets import_containers
     *
     * @return string|null
     */
    public function getImportContainers(): ?string
    {
        return $this->container['import_containers'];
    }

    /**
     * Sets import_containers
     *
     * @param string|null $import_containers Types and numbers of container(s) for import purchase orders. Can be a comma-separated list if shipment has multiple containers.
     *
     * @return self
     */
    public function setImportContainers(?string $import_containers): self
    {
        if (is_null($import_containers)) {
            throw new \InvalidArgumentException('non-nullable import_containers cannot be null');
        }
        if ((mb_strlen($import_containers) > 64)) {
            throw new \InvalidArgumentException('invalid length for $import_containers when calling ImportDetails., must be smaller than or equal to 64.');
        }

        $this->container['import_containers'] = $import_containers;

        return $this;
    }

    /**
     * Gets billable_weight
     *
     * @return \OpenAPI\Client\Model\vendor.shipments\Weight|null
     */
    public function getBillableWeight(): ?\OpenAPI\Client\Model\vendor.shipments\Weight
    {
        return $this->container['billable_weight'];
    }

    /**
     * Sets billable_weight
     *
     * @param \OpenAPI\Client\Model\vendor.shipments\Weight|null $billable_weight billable_weight
     *
     * @return self
     */
    public function setBillableWeight(?\OpenAPI\Client\Model\vendor.shipments\Weight $billable_weight): self
    {
        if (is_null($billable_weight)) {
            throw new \InvalidArgumentException('non-nullable billable_weight cannot be null');
        }
        $this->container['billable_weight'] = $billable_weight;

        return $this;
    }

    /**
     * Gets estimated_ship_by_date
     *
     * @return \DateTime|null
     */
    public function getEstimatedShipByDate(): ?\DateTime
    {
        return $this->container['estimated_ship_by_date'];
    }

    /**
     * Sets estimated_ship_by_date
     *
     * @param \DateTime|null $estimated_ship_by_date Date on which the shipment is expected to be shipped. This value should not be in the past and not more than 60 days out in the future.
     *
     * @return self
     */
    public function setEstimatedShipByDate(?\DateTime $estimated_ship_by_date): self
    {
        if (is_null($estimated_ship_by_date)) {
            throw new \InvalidArgumentException('non-nullable estimated_ship_by_date cannot be null');
        }
        $this->container['estimated_ship_by_date'] = $estimated_ship_by_date;

        return $this;
    }

    /**
     * Gets handling_instructions
     *
     * @return string|null
     */
    public function getHandlingInstructions(): ?string
    {
        return $this->container['handling_instructions'];
    }

    /**
     * Sets handling_instructions
     *
     * @param string|null $handling_instructions Identification of the instructions on how specified item/carton/pallet should be handled.
     *
     * @return self
     */
    public function setHandlingInstructions(?string $handling_instructions): self
    {
        if (is_null($handling_instructions)) {
            throw new \InvalidArgumentException('non-nullable handling_instructions cannot be null');
        }
        $allowedValues = $this->getHandlingInstructionsAllowableValues();
        if (!in_array($handling_instructions, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'handling_instructions', must be one of '%s'",
                    $handling_instructions,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['handling_instructions'] = $handling_instructions;

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


