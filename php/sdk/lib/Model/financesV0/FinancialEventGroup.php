<?php
/**
 * FinancialEventGroup
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

namespace OpenAPI\Client\Model\financesV0;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * FinancialEventGroup Class Doc Comment
 *
 * @category Class
 * @description Information related to a financial event group.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class FinancialEventGroup implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'FinancialEventGroup';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'financial_event_group_id' => 'string',
             'processing_status' => 'string',
             'fund_transfer_status' => 'string',
             'original_total' => '\OpenAPI\Client\Model\financesV0\Currency',
             'converted_total' => '\OpenAPI\Client\Model\financesV0\Currency',
             'fund_transfer_date' => '\DateTime',
             'trace_id' => 'string',
             'account_tail' => 'string',
             'beginning_balance' => '\OpenAPI\Client\Model\financesV0\Currency',
             'financial_event_group_start' => '\DateTime',
             'financial_event_group_end' => '\DateTime'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'financial_event_group_id' => null,
            'processing_status' => null,
            'fund_transfer_status' => null,
            'original_total' => null,
            'converted_total' => null,
            'fund_transfer_date' => 'date-time',
            'trace_id' => null,
            'account_tail' => null,
            'beginning_balance' => null,
            'financial_event_group_start' => 'date-time',
            'financial_event_group_end' => 'date-time'    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'financial_event_group_id' => true,
        'processing_status' => true,
        'fund_transfer_status' => true,
        'original_total' => true,
        'converted_total' => true,
        'fund_transfer_date' => true,
        'trace_id' => true,
        'account_tail' => true,
        'beginning_balance' => true,
        'financial_event_group_start' => true,
        'financial_event_group_end' => true
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
        'financial_event_group_id' => 'FinancialEventGroupId',
                'processing_status' => 'ProcessingStatus',
                'fund_transfer_status' => 'FundTransferStatus',
                'original_total' => 'OriginalTotal',
                'converted_total' => 'ConvertedTotal',
                'fund_transfer_date' => 'FundTransferDate',
                'trace_id' => 'TraceId',
                'account_tail' => 'AccountTail',
                'beginning_balance' => 'BeginningBalance',
                'financial_event_group_start' => 'FinancialEventGroupStart',
                'financial_event_group_end' => 'FinancialEventGroupEnd'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'financial_event_group_id' => 'setFinancialEventGroupId',
        'processing_status' => 'setProcessingStatus',
        'fund_transfer_status' => 'setFundTransferStatus',
        'original_total' => 'setOriginalTotal',
        'converted_total' => 'setConvertedTotal',
        'fund_transfer_date' => 'setFundTransferDate',
        'trace_id' => 'setTraceId',
        'account_tail' => 'setAccountTail',
        'beginning_balance' => 'setBeginningBalance',
        'financial_event_group_start' => 'setFinancialEventGroupStart',
        'financial_event_group_end' => 'setFinancialEventGroupEnd'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'financial_event_group_id' => 'getFinancialEventGroupId',
        'processing_status' => 'getProcessingStatus',
        'fund_transfer_status' => 'getFundTransferStatus',
        'original_total' => 'getOriginalTotal',
        'converted_total' => 'getConvertedTotal',
        'fund_transfer_date' => 'getFundTransferDate',
        'trace_id' => 'getTraceId',
        'account_tail' => 'getAccountTail',
        'beginning_balance' => 'getBeginningBalance',
        'financial_event_group_start' => 'getFinancialEventGroupStart',
        'financial_event_group_end' => 'getFinancialEventGroupEnd'
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
        $this->setIfExists('financial_event_group_id', $data ?? [], null);
        $this->setIfExists('processing_status', $data ?? [], null);
        $this->setIfExists('fund_transfer_status', $data ?? [], null);
        $this->setIfExists('original_total', $data ?? [], null);
        $this->setIfExists('converted_total', $data ?? [], null);
        $this->setIfExists('fund_transfer_date', $data ?? [], null);
        $this->setIfExists('trace_id', $data ?? [], null);
        $this->setIfExists('account_tail', $data ?? [], null);
        $this->setIfExists('beginning_balance', $data ?? [], null);
        $this->setIfExists('financial_event_group_start', $data ?? [], null);
        $this->setIfExists('financial_event_group_end', $data ?? [], null);
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
     * Gets financial_event_group_id
     *
     * @return string|null
     */
    public function getFinancialEventGroupId(): ?string
    {
        return $this->container['financial_event_group_id'];
    }

    /**
     * Sets financial_event_group_id
     *
     * @param string|null $financial_event_group_id A unique identifier for the financial event group.
     *
     * @return self
     */
    public function setFinancialEventGroupId(?string $financial_event_group_id): self
    {
        if (is_null($financial_event_group_id)) {
            array_push($this->openAPINullablesSetToNull, 'financial_event_group_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('financial_event_group_id', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['financial_event_group_id'] = $financial_event_group_id;

        return $this;
    }

    /**
     * Gets processing_status
     *
     * @return string|null
     */
    public function getProcessingStatus(): ?string
    {
        return $this->container['processing_status'];
    }

    /**
     * Sets processing_status
     *
     * @param string|null $processing_status The processing status of the financial event group indicates whether the balance of the financial event group is settled.  Possible values:  * Open  * Closed
     *
     * @return self
     */
    public function setProcessingStatus(?string $processing_status): self
    {
        if (is_null($processing_status)) {
            array_push($this->openAPINullablesSetToNull, 'processing_status');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('processing_status', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['processing_status'] = $processing_status;

        return $this;
    }

    /**
     * Gets fund_transfer_status
     *
     * @return string|null
     */
    public function getFundTransferStatus(): ?string
    {
        return $this->container['fund_transfer_status'];
    }

    /**
     * Sets fund_transfer_status
     *
     * @param string|null $fund_transfer_status The status of the fund transfer.
     *
     * @return self
     */
    public function setFundTransferStatus(?string $fund_transfer_status): self
    {
        if (is_null($fund_transfer_status)) {
            array_push($this->openAPINullablesSetToNull, 'fund_transfer_status');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('fund_transfer_status', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['fund_transfer_status'] = $fund_transfer_status;

        return $this;
    }

    /**
     * Gets original_total
     *
     * @return \OpenAPI\Client\Model\financesV0\Currency|null
     */
    public function getOriginalTotal(): ?\OpenAPI\Client\Model\financesV0\Currency
    {
        return $this->container['original_total'];
    }

    /**
     * Sets original_total
     *
     * @param \OpenAPI\Client\Model\financesV0\Currency|null $original_total original_total
     *
     * @return self
     */
    public function setOriginalTotal(?\OpenAPI\Client\Model\financesV0\Currency $original_total): self
    {
        if (is_null($original_total)) {
            array_push($this->openAPINullablesSetToNull, 'original_total');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('original_total', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['original_total'] = $original_total;

        return $this;
    }

    /**
     * Gets converted_total
     *
     * @return \OpenAPI\Client\Model\financesV0\Currency|null
     */
    public function getConvertedTotal(): ?\OpenAPI\Client\Model\financesV0\Currency
    {
        return $this->container['converted_total'];
    }

    /**
     * Sets converted_total
     *
     * @param \OpenAPI\Client\Model\financesV0\Currency|null $converted_total converted_total
     *
     * @return self
     */
    public function setConvertedTotal(?\OpenAPI\Client\Model\financesV0\Currency $converted_total): self
    {
        if (is_null($converted_total)) {
            array_push($this->openAPINullablesSetToNull, 'converted_total');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('converted_total', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['converted_total'] = $converted_total;

        return $this;
    }

    /**
     * Gets fund_transfer_date
     *
     * @return \DateTime|null
     */
    public function getFundTransferDate(): ?\DateTime
    {
        return $this->container['fund_transfer_date'];
    }

    /**
     * Sets fund_transfer_date
     *
     * @param \DateTime|null $fund_transfer_date Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     *
     * @return self
     */
    public function setFundTransferDate(?\DateTime $fund_transfer_date): self
    {
        if (is_null($fund_transfer_date)) {
            array_push($this->openAPINullablesSetToNull, 'fund_transfer_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('fund_transfer_date', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['fund_transfer_date'] = $fund_transfer_date;

        return $this;
    }

    /**
     * Gets trace_id
     *
     * @return string|null
     */
    public function getTraceId(): ?string
    {
        return $this->container['trace_id'];
    }

    /**
     * Sets trace_id
     *
     * @param string|null $trace_id The trace identifier used by sellers to look up transactions externally.
     *
     * @return self
     */
    public function setTraceId(?string $trace_id): self
    {
        if (is_null($trace_id)) {
            array_push($this->openAPINullablesSetToNull, 'trace_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('trace_id', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['trace_id'] = $trace_id;

        return $this;
    }

    /**
     * Gets account_tail
     *
     * @return string|null
     */
    public function getAccountTail(): ?string
    {
        return $this->container['account_tail'];
    }

    /**
     * Sets account_tail
     *
     * @param string|null $account_tail The account tail of the payment instrument.
     *
     * @return self
     */
    public function setAccountTail(?string $account_tail): self
    {
        if (is_null($account_tail)) {
            array_push($this->openAPINullablesSetToNull, 'account_tail');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('account_tail', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['account_tail'] = $account_tail;

        return $this;
    }

    /**
     * Gets beginning_balance
     *
     * @return \OpenAPI\Client\Model\financesV0\Currency|null
     */
    public function getBeginningBalance(): ?\OpenAPI\Client\Model\financesV0\Currency
    {
        return $this->container['beginning_balance'];
    }

    /**
     * Sets beginning_balance
     *
     * @param \OpenAPI\Client\Model\financesV0\Currency|null $beginning_balance beginning_balance
     *
     * @return self
     */
    public function setBeginningBalance(?\OpenAPI\Client\Model\financesV0\Currency $beginning_balance): self
    {
        if (is_null($beginning_balance)) {
            array_push($this->openAPINullablesSetToNull, 'beginning_balance');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('beginning_balance', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['beginning_balance'] = $beginning_balance;

        return $this;
    }

    /**
     * Gets financial_event_group_start
     *
     * @return \DateTime|null
     */
    public function getFinancialEventGroupStart(): ?\DateTime
    {
        return $this->container['financial_event_group_start'];
    }

    /**
     * Sets financial_event_group_start
     *
     * @param \DateTime|null $financial_event_group_start Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     *
     * @return self
     */
    public function setFinancialEventGroupStart(?\DateTime $financial_event_group_start): self
    {
        if (is_null($financial_event_group_start)) {
            array_push($this->openAPINullablesSetToNull, 'financial_event_group_start');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('financial_event_group_start', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['financial_event_group_start'] = $financial_event_group_start;

        return $this;
    }

    /**
     * Gets financial_event_group_end
     *
     * @return \DateTime|null
     */
    public function getFinancialEventGroupEnd(): ?\DateTime
    {
        return $this->container['financial_event_group_end'];
    }

    /**
     * Sets financial_event_group_end
     *
     * @param \DateTime|null $financial_event_group_end Fields with a schema type of date are in ISO 8601 date time format (for example GroupBeginDate).
     *
     * @return self
     */
    public function setFinancialEventGroupEnd(?\DateTime $financial_event_group_end): self
    {
        if (is_null($financial_event_group_end)) {
            array_push($this->openAPINullablesSetToNull, 'financial_event_group_end');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('financial_event_group_end', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['financial_event_group_end'] = $financial_event_group_end;

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


