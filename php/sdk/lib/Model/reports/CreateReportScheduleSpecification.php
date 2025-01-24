<?php
/**
 * CreateReportScheduleSpecification
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Report v2021-06-30
 *
 * The Selling Partner API for Reports lets you retrieve and manage a variety of reports that can help selling partners manage their businesses.
 *
 * The version of the OpenAPI document: 2021-06-30
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

namespace OpenAPI\Client\Model\reports;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * CreateReportScheduleSpecification Class Doc Comment
 *
 * @category Class
 * @description Information required to create the report schedule.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class CreateReportScheduleSpecification implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'CreateReportScheduleSpecification';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'report_type' => 'string',
             'marketplace_ids' => 'string[]',
             'report_options' => 'array<string,string>',
             'period' => 'string',
             'next_report_creation_time' => '\DateTime'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'report_type' => null,
            'marketplace_ids' => null,
            'report_options' => null,
            'period' => null,
            'next_report_creation_time' => 'date-time'    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'report_type' => false,
        'marketplace_ids' => false,
        'report_options' => true,
        'period' => false,
        'next_report_creation_time' => true
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
        'report_type' => 'reportType',
                'marketplace_ids' => 'marketplaceIds',
                'report_options' => 'reportOptions',
                'period' => 'period',
                'next_report_creation_time' => 'nextReportCreationTime'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'report_type' => 'setReportType',
        'marketplace_ids' => 'setMarketplaceIds',
        'report_options' => 'setReportOptions',
        'period' => 'setPeriod',
        'next_report_creation_time' => 'setNextReportCreationTime'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'report_type' => 'getReportType',
        'marketplace_ids' => 'getMarketplaceIds',
        'report_options' => 'getReportOptions',
        'period' => 'getPeriod',
        'next_report_creation_time' => 'getNextReportCreationTime'
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

    public const PERIOD_PT5_M = 'PT5M';
    public const PERIOD_PT15_M = 'PT15M';
    public const PERIOD_PT30_M = 'PT30M';
    public const PERIOD_PT1_H = 'PT1H';
    public const PERIOD_PT2_H = 'PT2H';
    public const PERIOD_PT4_H = 'PT4H';
    public const PERIOD_PT8_H = 'PT8H';
    public const PERIOD_PT12_H = 'PT12H';
    public const PERIOD_P1_D = 'P1D';
    public const PERIOD_P2_D = 'P2D';
    public const PERIOD_P3_D = 'P3D';
    public const PERIOD_PT84_H = 'PT84H';
    public const PERIOD_P7_D = 'P7D';
    public const PERIOD_P14_D = 'P14D';
    public const PERIOD_P15_D = 'P15D';
    public const PERIOD_P18_D = 'P18D';
    public const PERIOD_P30_D = 'P30D';
    public const PERIOD_P1_M = 'P1M';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getPeriodAllowableValues(): array
    {
        return [
            self::PERIOD_PT5_M,
            self::PERIOD_PT15_M,
            self::PERIOD_PT30_M,
            self::PERIOD_PT1_H,
            self::PERIOD_PT2_H,
            self::PERIOD_PT4_H,
            self::PERIOD_PT8_H,
            self::PERIOD_PT12_H,
            self::PERIOD_P1_D,
            self::PERIOD_P2_D,
            self::PERIOD_P3_D,
            self::PERIOD_PT84_H,
            self::PERIOD_P7_D,
            self::PERIOD_P14_D,
            self::PERIOD_P15_D,
            self::PERIOD_P18_D,
            self::PERIOD_P30_D,
            self::PERIOD_P1_M,
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
        $this->setIfExists('report_type', $data ?? [], null);
        $this->setIfExists('marketplace_ids', $data ?? [], null);
        $this->setIfExists('report_options', $data ?? [], null);
        $this->setIfExists('period', $data ?? [], null);
        $this->setIfExists('next_report_creation_time', $data ?? [], null);
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

        if ($this->container['report_type'] === null) {
            $invalidProperties[] = "'report_type' can't be null";
        }
        if ($this->container['marketplace_ids'] === null) {
            $invalidProperties[] = "'marketplace_ids' can't be null";
        }
        if ((count($this->container['marketplace_ids']) > 25)) {
            $invalidProperties[] = "invalid value for 'marketplace_ids', number of items must be less than or equal to 25.";
        }

        if ((count($this->container['marketplace_ids']) < 1)) {
            $invalidProperties[] = "invalid value for 'marketplace_ids', number of items must be greater than or equal to 1.";
        }

        if ($this->container['period'] === null) {
            $invalidProperties[] = "'period' can't be null";
        }
        $allowedValues = $this->getPeriodAllowableValues();
        if (!is_null($this->container['period']) && !in_array($this->container['period'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'period', must be one of '%s'",
                $this->container['period'],
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
     * Gets report_type
     *
     * @return string
     */
    public function getReportType(): string
    {
        return $this->container['report_type'];
    }

    /**
     * Sets report_type
     *
     * @param string $report_type The report type. Refer to [Report Type Values](https://developer-docs.amazon.com/sp-api/docs/report-type-values) for more information.
     *
     * @return self
     */
    public function setReportType(string $report_type): self
    {
        if (is_null($report_type)) {
            throw new \InvalidArgumentException('non-nullable report_type cannot be null');
        }
        $this->container['report_type'] = $report_type;

        return $this;
    }

    /**
     * Gets marketplace_ids
     *
     * @return array
     */
    public function getMarketplaceIds(): array
    {
        return $this->container['marketplace_ids'];
    }

    /**
     * Sets marketplace_ids
     *
     * @param array $marketplace_ids A list of marketplace identifiers for the report schedule.
     *
     * @return self
     */
    public function setMarketplaceIds(array $marketplace_ids): self
    {
        if (is_null($marketplace_ids)) {
            throw new \InvalidArgumentException('non-nullable marketplace_ids cannot be null');
        }

        if ((count($marketplace_ids) > 25)) {
            throw new \InvalidArgumentException('invalid value for $marketplace_ids when calling CreateReportScheduleSpecification., number of items must be less than or equal to 25.');
        }
        if ((count($marketplace_ids) < 1)) {
            throw new \InvalidArgumentException('invalid length for $marketplace_ids when calling CreateReportScheduleSpecification., number of items must be greater than or equal to 1.');
        }
        $this->container['marketplace_ids'] = $marketplace_ids;

        return $this;
    }

    /**
     * Gets report_options
     *
     * @return array<string,string>|null
     */
    public function getReportOptions(): ?array
    {
        return $this->container['report_options'];
    }

    /**
     * Sets report_options
     *
     * @param array<string,string>|null $report_options Additional information passed to reports. This varies by report type.
     *
     * @return self
     */
    public function setReportOptions(?array $report_options): self
    {
        if (is_null($report_options)) {
            array_push($this->openAPINullablesSetToNull, 'report_options');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('report_options', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['report_options'] = $report_options;

        return $this;
    }

    /**
     * Gets period
     *
     * @return string
     */
    public function getPeriod(): string
    {
        return $this->container['period'];
    }

    /**
     * Sets period
     *
     * @param string $period One of a set of predefined <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> periods that specifies how often a report should be created.
     *
     * @return self
     */
    public function setPeriod(string $period): self
    {
        if (is_null($period)) {
            throw new \InvalidArgumentException('non-nullable period cannot be null');
        }
        $allowedValues = $this->getPeriodAllowableValues();
        if (!in_array($period, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'period', must be one of '%s'",
                    $period,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['period'] = $period;

        return $this;
    }

    /**
     * Gets next_report_creation_time
     *
     * @return \DateTime|null
     */
    public function getNextReportCreationTime(): ?\DateTime
    {
        return $this->container['next_report_creation_time'];
    }

    /**
     * Sets next_report_creation_time
     *
     * @param \DateTime|null $next_report_creation_time The date and time when the schedule will create its next report, in <a href='https://developer-docs.amazon.com/sp-api/docs/iso-8601'>ISO 8601</a> date time format.
     *
     * @return self
     */
    public function setNextReportCreationTime(?\DateTime $next_report_creation_time): self
    {
        if (is_null($next_report_creation_time)) {
            array_push($this->openAPINullablesSetToNull, 'next_report_creation_time');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('next_report_creation_time', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['next_report_creation_time'] = $next_report_creation_time;

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


