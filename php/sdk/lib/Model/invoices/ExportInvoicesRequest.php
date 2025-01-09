<?php
/**
 * ExportInvoicesRequest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * The Selling Partner API for Invoices.
 *
 * Use the Selling Partner API for Invoices to retrieve and manage invoice-related operations, which can help selling partners manage their bookkeeping processes.
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

namespace OpenAPI\Client\Model\invoices;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * ExportInvoicesRequest Class Doc Comment
 *
 * @category Class
 * @description The information required to create the export request.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ExportInvoicesRequest implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'ExportInvoicesRequest';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'date_end' => '\DateTime',
             'date_start' => '\DateTime',
             'external_invoice_id' => 'string',
             'file_format' => '\OpenAPI\Client\Model\invoices\FileFormat',
             'invoice_type' => 'string',
             'marketplace_id' => 'string',
             'series' => 'string',
             'statuses' => 'string[]',
             'transaction_identifier' => '\OpenAPI\Client\Model\invoices\TransactionIdentifier',
             'transaction_type' => 'string'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'date_end' => 'date',
            'date_start' => 'date',
            'external_invoice_id' => null,
            'file_format' => null,
            'invoice_type' => null,
            'marketplace_id' => null,
            'series' => null,
            'statuses' => null,
            'transaction_identifier' => null,
            'transaction_type' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'date_end' => true,
        'date_start' => true,
        'external_invoice_id' => true,
        'file_format' => true,
        'invoice_type' => true,
        'marketplace_id' => false,
        'series' => true,
        'statuses' => true,
        'transaction_identifier' => true,
        'transaction_type' => true
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
        'date_end' => 'dateEnd',
                'date_start' => 'dateStart',
                'external_invoice_id' => 'externalInvoiceId',
                'file_format' => 'fileFormat',
                'invoice_type' => 'invoiceType',
                'marketplace_id' => 'marketplaceId',
                'series' => 'series',
                'statuses' => 'statuses',
                'transaction_identifier' => 'transactionIdentifier',
                'transaction_type' => 'transactionType'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'date_end' => 'setDateEnd',
        'date_start' => 'setDateStart',
        'external_invoice_id' => 'setExternalInvoiceId',
        'file_format' => 'setFileFormat',
        'invoice_type' => 'setInvoiceType',
        'marketplace_id' => 'setMarketplaceId',
        'series' => 'setSeries',
        'statuses' => 'setStatuses',
        'transaction_identifier' => 'setTransactionIdentifier',
        'transaction_type' => 'setTransactionType'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'date_end' => 'getDateEnd',
        'date_start' => 'getDateStart',
        'external_invoice_id' => 'getExternalInvoiceId',
        'file_format' => 'getFileFormat',
        'invoice_type' => 'getInvoiceType',
        'marketplace_id' => 'getMarketplaceId',
        'series' => 'getSeries',
        'statuses' => 'getStatuses',
        'transaction_identifier' => 'getTransactionIdentifier',
        'transaction_type' => 'getTransactionType'
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
        $this->setIfExists('date_end', $data ?? [], null);
        $this->setIfExists('date_start', $data ?? [], null);
        $this->setIfExists('external_invoice_id', $data ?? [], null);
        $this->setIfExists('file_format', $data ?? [], null);
        $this->setIfExists('invoice_type', $data ?? [], null);
        $this->setIfExists('marketplace_id', $data ?? [], null);
        $this->setIfExists('series', $data ?? [], null);
        $this->setIfExists('statuses', $data ?? [], null);
        $this->setIfExists('transaction_identifier', $data ?? [], null);
        $this->setIfExists('transaction_type', $data ?? [], null);
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

        if ($this->container['marketplace_id'] === null) {
            $invalidProperties[] = "'marketplace_id' can't be null";
        }
        if (!is_null($this->container['statuses']) && (count($this->container['statuses']) < 1)) {
            $invalidProperties[] = "invalid value for 'statuses', number of items must be greater than or equal to 1.";
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
     * Gets date_end
     *
     * @return \DateTime|null
     */
    public function getDateEnd(): ?\DateTime
    {
        return $this->container['date_end'];
    }

    /**
     * Sets date_end
     *
     * @param \DateTime|null $date_end The latest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is the time of the request.
     *
     * @return self
     */
    public function setDateEnd(?\DateTime $date_end): self
    {
        if (is_null($date_end)) {
            array_push($this->openAPINullablesSetToNull, 'date_end');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('date_end', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['date_end'] = $date_end;

        return $this;
    }

    /**
     * Gets date_start
     *
     * @return \DateTime|null
     */
    public function getDateStart(): ?\DateTime
    {
        return $this->container['date_start'];
    }

    /**
     * Sets date_start
     *
     * @param \DateTime|null $date_start The earliest invoice creation date for invoices that you want to include in the response. Dates are in [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date-time format. The default is 24 hours prior to the time of the request.
     *
     * @return self
     */
    public function setDateStart(?\DateTime $date_start): self
    {
        if (is_null($date_start)) {
            array_push($this->openAPINullablesSetToNull, 'date_start');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('date_start', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['date_start'] = $date_start;

        return $this;
    }

    /**
     * Gets external_invoice_id
     *
     * @return string|null
     */
    public function getExternalInvoiceId(): ?string
    {
        return $this->container['external_invoice_id'];
    }

    /**
     * Sets external_invoice_id
     *
     * @param string|null $external_invoice_id The external ID of the invoices you want included in the response.
     *
     * @return self
     */
    public function setExternalInvoiceId(?string $external_invoice_id): self
    {
        if (is_null($external_invoice_id)) {
            array_push($this->openAPINullablesSetToNull, 'external_invoice_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('external_invoice_id', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['external_invoice_id'] = $external_invoice_id;

        return $this;
    }

    /**
     * Gets file_format
     *
     * @return string|null
     */
    public function getFileFormat(): ?string
    {
        return $this->container['file_format'];
    }

    /**
     * Sets file_format
     *
     * @param string|null $file_format file_format
     *
     * @return self
     */
    public function setFileFormat(?string $file_format): self
    {
        if (is_null($file_format)) {
            array_push($this->openAPINullablesSetToNull, 'file_format');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('file_format', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['file_format'] = $file_format;

        return $this;
    }

    /**
     * Gets invoice_type
     *
     * @return string|null
     */
    public function getInvoiceType(): ?string
    {
        return $this->container['invoice_type'];
    }

    /**
     * Sets invoice_type
     *
     * @param string|null $invoice_type The marketplace-specific classification of the invoice type. Use the `getInvoicesAttributes` operation to check `invoiceType` options.
     *
     * @return self
     */
    public function setInvoiceType(?string $invoice_type): self
    {
        if (is_null($invoice_type)) {
            array_push($this->openAPINullablesSetToNull, 'invoice_type');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('invoice_type', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['invoice_type'] = $invoice_type;

        return $this;
    }

    /**
     * Gets marketplace_id
     *
     * @return string
     */
    public function getMarketplaceId(): string
    {
        return $this->container['marketplace_id'];
    }

    /**
     * Sets marketplace_id
     *
     * @param string $marketplace_id The ID of the marketplace from which you want the invoices.
     *
     * @return self
     */
    public function setMarketplaceId(string $marketplace_id): self
    {
        if (is_null($marketplace_id)) {
            throw new \InvalidArgumentException('non-nullable marketplace_id cannot be null');
        }
        $this->container['marketplace_id'] = $marketplace_id;

        return $this;
    }

    /**
     * Gets series
     *
     * @return string|null
     */
    public function getSeries(): ?string
    {
        return $this->container['series'];
    }

    /**
     * Sets series
     *
     * @param string|null $series The series number of the invoices you want included in the response.
     *
     * @return self
     */
    public function setSeries(?string $series): self
    {
        if (is_null($series)) {
            array_push($this->openAPINullablesSetToNull, 'series');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('series', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['series'] = $series;

        return $this;
    }

    /**
     * Gets statuses
     *
     * @return array|null
     */
    public function getStatuses(): ?array
    {
        return $this->container['statuses'];
    }

    /**
     * Sets statuses
     *
     * @param array|null $statuses A list of statuses that you can use to filter invoices. Use the `getInvoicesAttributes` operation to check invoice status options.  Min count: 1
     *
     * @return self
     */
    public function setStatuses(?array $statuses): self
    {
        if (is_null($statuses)) {
            array_push($this->openAPINullablesSetToNull, 'statuses');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('statuses', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }


        if (!is_null($statuses) && (count($statuses) < 1)) {
            throw new \InvalidArgumentException('invalid length for $statuses when calling ExportInvoicesRequest., number of items must be greater than or equal to 1.');
        }
        $this->container['statuses'] = $statuses;

        return $this;
    }

    /**
     * Gets transaction_identifier
     *
     * @return \OpenAPI\Client\Model\invoices\TransactionIdentifier|null
     */
    public function getTransactionIdentifier(): ?\OpenAPI\Client\Model\invoices\TransactionIdentifier
    {
        return $this->container['transaction_identifier'];
    }

    /**
     * Sets transaction_identifier
     *
     * @param \OpenAPI\Client\Model\invoices\TransactionIdentifier|null $transaction_identifier transaction_identifier
     *
     * @return self
     */
    public function setTransactionIdentifier(?\OpenAPI\Client\Model\invoices\TransactionIdentifier $transaction_identifier): self
    {
        if (is_null($transaction_identifier)) {
            array_push($this->openAPINullablesSetToNull, 'transaction_identifier');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('transaction_identifier', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['transaction_identifier'] = $transaction_identifier;

        return $this;
    }

    /**
     * Gets transaction_type
     *
     * @return string|null
     */
    public function getTransactionType(): ?string
    {
        return $this->container['transaction_type'];
    }

    /**
     * Sets transaction_type
     *
     * @param string|null $transaction_type The marketplace-specific classification of the transaction type for which the invoice was created. Use the `getInvoicesAttributes` operation to check `transactionType` options
     *
     * @return self
     */
    public function setTransactionType(?string $transaction_type): self
    {
        if (is_null($transaction_type)) {
            array_push($this->openAPINullablesSetToNull, 'transaction_type');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('transaction_type', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['transaction_type'] = $transaction_type;

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


