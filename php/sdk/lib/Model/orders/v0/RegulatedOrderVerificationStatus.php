<?php
/**
 * RegulatedOrderVerificationStatus
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Orders v0
 *
 * Use the Orders Selling Partner API to programmatically retrieve order information. With this API, you can develop fast, flexible, and custom applications to manage order synchronization, perform order research, and create demand-based decision support tools.   _Note:_ For the JP, AU, and SG marketplaces, the Orders API supports orders from 2016 onward. For all other marketplaces, the Orders API supports orders for the last two years (orders older than this don't show up in the response).
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

namespace SpApi\Model\orders\v0;

use
ArrayAccess;
use SpApi\ObjectSerializer;
use SpApi\Model\ModelInterface;

/**
 * RegulatedOrderVerificationStatus Class Doc Comment
 *
 * @category Class
 * @description The verification status of the order, along with associated approval or rejection metadata.
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class RegulatedOrderVerificationStatus implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'RegulatedOrderVerificationStatus';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'status' => '\SpApi\Model\orders\v0\VerificationStatus',
             'requires_merchant_action' => 'bool',
             'valid_rejection_reasons' => '\SpApi\Model\orders\v0\RejectionReason[]',
             'rejection_reason' => '\SpApi\Model\orders\v0\RejectionReason',
             'review_date' => 'string',
             'external_reviewer_id' => 'string',
             'valid_verification_details' => '\SpApi\Model\orders\v0\ValidVerificationDetail[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'status' => null,
            'requires_merchant_action' => null,
            'valid_rejection_reasons' => null,
            'rejection_reason' => null,
            'review_date' => null,
            'external_reviewer_id' => null,
            'valid_verification_details' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'status' => false,
        'requires_merchant_action' => false,
        'valid_rejection_reasons' => false,
        'rejection_reason' => true,
        'review_date' => true,
        'external_reviewer_id' => true,
        'valid_verification_details' => true
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
        'status' => 'Status',
                'requires_merchant_action' => 'RequiresMerchantAction',
                'valid_rejection_reasons' => 'ValidRejectionReasons',
                'rejection_reason' => 'RejectionReason',
                'review_date' => 'ReviewDate',
                'external_reviewer_id' => 'ExternalReviewerId',
                'valid_verification_details' => 'ValidVerificationDetails'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'status' => 'setStatus',
        'requires_merchant_action' => 'setRequiresMerchantAction',
        'valid_rejection_reasons' => 'setValidRejectionReasons',
        'rejection_reason' => 'setRejectionReason',
        'review_date' => 'setReviewDate',
        'external_reviewer_id' => 'setExternalReviewerId',
        'valid_verification_details' => 'setValidVerificationDetails'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'status' => 'getStatus',
        'requires_merchant_action' => 'getRequiresMerchantAction',
        'valid_rejection_reasons' => 'getValidRejectionReasons',
        'rejection_reason' => 'getRejectionReason',
        'review_date' => 'getReviewDate',
        'external_reviewer_id' => 'getExternalReviewerId',
        'valid_verification_details' => 'getValidVerificationDetails'
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
        $this->setIfExists('status', $data ?? [], null);
        $this->setIfExists('requires_merchant_action', $data ?? [], null);
        $this->setIfExists('valid_rejection_reasons', $data ?? [], null);
        $this->setIfExists('rejection_reason', $data ?? [], null);
        $this->setIfExists('review_date', $data ?? [], null);
        $this->setIfExists('external_reviewer_id', $data ?? [], null);
        $this->setIfExists('valid_verification_details', $data ?? [], null);
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

        if ($this->container['status'] === null) {
            $invalidProperties[] = "'status' can't be null";
        }
        if ($this->container['requires_merchant_action'] === null) {
            $invalidProperties[] = "'requires_merchant_action' can't be null";
        }
        if ($this->container['valid_rejection_reasons'] === null) {
            $invalidProperties[] = "'valid_rejection_reasons' can't be null";
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
     * Gets status
     *
     * @return string
     */
    public function getStatus(): string
    {
        return $this->container['status'];
    }

    /**
     * Sets status
     *
     * @param string $status status
     *
     * @return self
     */
    public function setStatus(string $status): self
    {
        if (is_null($status)) {
            throw new \InvalidArgumentException('non-nullable status cannot be null');
        }
        $this->container['status'] = $status;

        return $this;
    }

    /**
     * Gets requires_merchant_action
     *
     * @return bool
     */
    public function getRequiresMerchantAction(): bool
    {
        return $this->container['requires_merchant_action'];
    }

    /**
     * Sets requires_merchant_action
     *
     * @param bool $requires_merchant_action When true, the regulated information provided in the order requires a review by the merchant.
     *
     * @return self
     */
    public function setRequiresMerchantAction(bool $requires_merchant_action): self
    {
        if (is_null($requires_merchant_action)) {
            throw new \InvalidArgumentException('non-nullable requires_merchant_action cannot be null');
        }
        $this->container['requires_merchant_action'] = $requires_merchant_action;

        return $this;
    }

    /**
     * Gets valid_rejection_reasons
     *
     * @return array
     */
    public function getValidRejectionReasons(): array
    {
        return $this->container['valid_rejection_reasons'];
    }

    /**
     * Sets valid_rejection_reasons
     *
     * @param array $valid_rejection_reasons A list of valid rejection reasons that may be used to reject the order's regulated information.
     *
     * @return self
     */
    public function setValidRejectionReasons(array $valid_rejection_reasons): self
    {
        if (is_null($valid_rejection_reasons)) {
            throw new \InvalidArgumentException('non-nullable valid_rejection_reasons cannot be null');
        }
        $this->container['valid_rejection_reasons'] = $valid_rejection_reasons;

        return $this;
    }

    /**
     * Gets rejection_reason
     *
     * @return \SpApi\Model\orders\v0\RejectionReason|null
     */
    public function getRejectionReason(): ?\SpApi\Model\orders\v0\RejectionReason
    {
        return $this->container['rejection_reason'];
    }

    /**
     * Sets rejection_reason
     *
     * @param \SpApi\Model\orders\v0\RejectionReason|null $rejection_reason rejection_reason
     *
     * @return self
     */
    public function setRejectionReason(?\SpApi\Model\orders\v0\RejectionReason $rejection_reason): self
    {
        if (is_null($rejection_reason)) {
            array_push($this->openAPINullablesSetToNull, 'rejection_reason');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('rejection_reason', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['rejection_reason'] = $rejection_reason;

        return $this;
    }

    /**
     * Gets review_date
     *
     * @return string|null
     */
    public function getReviewDate(): ?string
    {
        return $this->container['review_date'];
    }

    /**
     * Sets review_date
     *
     * @param string|null $review_date The date the order was reviewed. In [ISO 8601](https://developer-docs.amazon.com/sp-api/docs/iso-8601) date time format.
     *
     * @return self
     */
    public function setReviewDate(?string $review_date): self
    {
        if (is_null($review_date)) {
            array_push($this->openAPINullablesSetToNull, 'review_date');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('review_date', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['review_date'] = $review_date;

        return $this;
    }

    /**
     * Gets external_reviewer_id
     *
     * @return string|null
     */
    public function getExternalReviewerId(): ?string
    {
        return $this->container['external_reviewer_id'];
    }

    /**
     * Sets external_reviewer_id
     *
     * @param string|null $external_reviewer_id The identifier for the order's regulated information reviewer.
     *
     * @return self
     */
    public function setExternalReviewerId(?string $external_reviewer_id): self
    {
        if (is_null($external_reviewer_id)) {
            array_push($this->openAPINullablesSetToNull, 'external_reviewer_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('external_reviewer_id', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['external_reviewer_id'] = $external_reviewer_id;

        return $this;
    }

    /**
     * Gets valid_verification_details
     *
     * @return array|null
     */
    public function getValidVerificationDetails(): ?array
    {
        return $this->container['valid_verification_details'];
    }

    /**
     * Sets valid_verification_details
     *
     * @param array|null $valid_verification_details A list of valid verification details that may be provided and the criteria required for when the verification detail can be provided.
     *
     * @return self
     */
    public function setValidVerificationDetails(?array $valid_verification_details): self
    {
        if (is_null($valid_verification_details)) {
            array_push($this->openAPINullablesSetToNull, 'valid_verification_details');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('valid_verification_details', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['valid_verification_details'] = $valid_verification_details;

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


