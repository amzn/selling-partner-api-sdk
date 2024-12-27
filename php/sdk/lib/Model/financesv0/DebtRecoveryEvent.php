<?php
/**
 * DebtRecoveryEvent
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Finances
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

namespace OpenAPI\Client\Model\financesv0;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * DebtRecoveryEvent Class Doc Comment
 *
 * @category Class
 * @description A debt payment or debt adjustment.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class DebtRecoveryEvent implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'DebtRecoveryEvent';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'debt_recovery_type' => 'string',
             'recovery_amount' => '\OpenAPI\Client\Model\financesv0\Currency',
             'over_payment_credit' => '\OpenAPI\Client\Model\financesv0\Currency',
             'debt_recovery_item_list' => '\OpenAPI\Client\Model\financesv0\DebtRecoveryItem[]',
             'charge_instrument_list' => '\OpenAPI\Client\Model\financesv0\ChargeInstrument[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'debt_recovery_type' => null,
            'recovery_amount' => null,
            'over_payment_credit' => null,
            'debt_recovery_item_list' => null,
            'charge_instrument_list' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'debt_recovery_type' => false,
        'recovery_amount' => false,
        'over_payment_credit' => false,
        'debt_recovery_item_list' => false,
        'charge_instrument_list' => false
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
        'debt_recovery_type' => 'DebtRecoveryType',
                'recovery_amount' => 'RecoveryAmount',
                'over_payment_credit' => 'OverPaymentCredit',
                'debt_recovery_item_list' => 'DebtRecoveryItemList',
                'charge_instrument_list' => 'ChargeInstrumentList'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'debt_recovery_type' => 'setDebtRecoveryType',
        'recovery_amount' => 'setRecoveryAmount',
        'over_payment_credit' => 'setOverPaymentCredit',
        'debt_recovery_item_list' => 'setDebtRecoveryItemList',
        'charge_instrument_list' => 'setChargeInstrumentList'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'debt_recovery_type' => 'getDebtRecoveryType',
        'recovery_amount' => 'getRecoveryAmount',
        'over_payment_credit' => 'getOverPaymentCredit',
        'debt_recovery_item_list' => 'getDebtRecoveryItemList',
        'charge_instrument_list' => 'getChargeInstrumentList'
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
        $this->setIfExists('debt_recovery_type', $data ?? [], null);
        $this->setIfExists('recovery_amount', $data ?? [], null);
        $this->setIfExists('over_payment_credit', $data ?? [], null);
        $this->setIfExists('debt_recovery_item_list', $data ?? [], null);
        $this->setIfExists('charge_instrument_list', $data ?? [], null);
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
     * Gets debt_recovery_type
     *
     * @return string|null
     */
    public function getDebtRecoveryType(): ?string
    {
        return $this->container['debt_recovery_type'];
    }

    /**
     * Sets debt_recovery_type
     *
     * @param string|null $debt_recovery_type The debt recovery type.  Possible values:  * DebtPayment  * DebtPaymentFailure  * DebtAdjustment
     *
     * @return self
     */
    public function setDebtRecoveryType(?string $debt_recovery_type): self
    {
        if (is_null($debt_recovery_type)) {
            throw new \InvalidArgumentException('non-nullable debt_recovery_type cannot be null');
        }
        $this->container['debt_recovery_type'] = $debt_recovery_type;

        return $this;
    }

    /**
     * Gets recovery_amount
     *
     * @return \OpenAPI\Client\Model\financesv0\Currency|null
     */
    public function getRecoveryAmount(): ?\OpenAPI\Client\Model\financesv0\Currency
    {
        return $this->container['recovery_amount'];
    }

    /**
     * Sets recovery_amount
     *
     * @param \OpenAPI\Client\Model\financesv0\Currency|null $recovery_amount recovery_amount
     *
     * @return self
     */
    public function setRecoveryAmount(?\OpenAPI\Client\Model\financesv0\Currency $recovery_amount): self
    {
        if (is_null($recovery_amount)) {
            throw new \InvalidArgumentException('non-nullable recovery_amount cannot be null');
        }
        $this->container['recovery_amount'] = $recovery_amount;

        return $this;
    }

    /**
     * Gets over_payment_credit
     *
     * @return \OpenAPI\Client\Model\financesv0\Currency|null
     */
    public function getOverPaymentCredit(): ?\OpenAPI\Client\Model\financesv0\Currency
    {
        return $this->container['over_payment_credit'];
    }

    /**
     * Sets over_payment_credit
     *
     * @param \OpenAPI\Client\Model\financesv0\Currency|null $over_payment_credit over_payment_credit
     *
     * @return self
     */
    public function setOverPaymentCredit(?\OpenAPI\Client\Model\financesv0\Currency $over_payment_credit): self
    {
        if (is_null($over_payment_credit)) {
            throw new \InvalidArgumentException('non-nullable over_payment_credit cannot be null');
        }
        $this->container['over_payment_credit'] = $over_payment_credit;

        return $this;
    }

    /**
     * Gets debt_recovery_item_list
     *
     * @return arrayA|null
     */
    public function getDebtRecoveryItemList(): ?array
    {
        return $this->container['debt_recovery_item_list'];
    }

    /**
     * Sets debt_recovery_item_list
     *
     * @param array|null $debt_recovery_item_list A list of debt recovery item information.
     *
     * @return self
     */
    public function setDebtRecoveryItemList(?array $debt_recovery_item_list): self
    {
        if (is_null($debt_recovery_item_list)) {
            throw new \InvalidArgumentException('non-nullable debt_recovery_item_list cannot be null');
        }
        $this->container['debt_recovery_item_list'] = $debt_recovery_item_list;

        return $this;
    }

    /**
     * Gets charge_instrument_list
     *
     * @return arrayA|null
     */
    public function getChargeInstrumentList(): ?array
    {
        return $this->container['charge_instrument_list'];
    }

    /**
     * Sets charge_instrument_list
     *
     * @param array|null $charge_instrument_list A list of payment instruments.
     *
     * @return self
     */
    public function setChargeInstrumentList(?array $charge_instrument_list): self
    {
        if (is_null($charge_instrument_list)) {
            throw new \InvalidArgumentException('non-nullable charge_instrument_list cannot be null');
        }
        $this->container['charge_instrument_list'] = $charge_instrument_list;

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


