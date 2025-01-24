<?php
/**
 * Package
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Amazon Shipping API
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

namespace OpenAPI\Client\Model\shipping;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * Package Class Doc Comment
 *
 * @category Class
 * @description A package to be shipped through a shipping service offering.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class Package implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'Package';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'dimensions' => '\OpenAPI\Client\Model\shipping\Dimensions',
             'weight' => '\OpenAPI\Client\Model\shipping\Weight',
             'insured_value' => '\OpenAPI\Client\Model\shipping\Currency',
             'is_hazmat' => 'bool',
             'seller_display_name' => 'string',
             'charges' => '\OpenAPI\Client\Model\shipping\ChargeComponent[]',
             'package_client_reference_id' => 'string',
             'items' => '\OpenAPI\Client\Model\shipping\Item[]'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'dimensions' => null,
            'weight' => null,
            'insured_value' => null,
            'is_hazmat' => null,
            'seller_display_name' => null,
            'charges' => null,
            'package_client_reference_id' => null,
            'items' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'dimensions' => false,
        'weight' => false,
        'insured_value' => false,
        'is_hazmat' => true,
        'seller_display_name' => true,
        'charges' => true,
        'package_client_reference_id' => false,
        'items' => false
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
        'dimensions' => 'dimensions',
                'weight' => 'weight',
                'insured_value' => 'insuredValue',
                'is_hazmat' => 'isHazmat',
                'seller_display_name' => 'sellerDisplayName',
                'charges' => 'charges',
                'package_client_reference_id' => 'packageClientReferenceId',
                'items' => 'items'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'dimensions' => 'setDimensions',
        'weight' => 'setWeight',
        'insured_value' => 'setInsuredValue',
        'is_hazmat' => 'setIsHazmat',
        'seller_display_name' => 'setSellerDisplayName',
        'charges' => 'setCharges',
        'package_client_reference_id' => 'setPackageClientReferenceId',
        'items' => 'setItems'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'dimensions' => 'getDimensions',
        'weight' => 'getWeight',
        'insured_value' => 'getInsuredValue',
        'is_hazmat' => 'getIsHazmat',
        'seller_display_name' => 'getSellerDisplayName',
        'charges' => 'getCharges',
        'package_client_reference_id' => 'getPackageClientReferenceId',
        'items' => 'getItems'
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
        $this->setIfExists('dimensions', $data ?? [], null);
        $this->setIfExists('weight', $data ?? [], null);
        $this->setIfExists('insured_value', $data ?? [], null);
        $this->setIfExists('is_hazmat', $data ?? [], null);
        $this->setIfExists('seller_display_name', $data ?? [], null);
        $this->setIfExists('charges', $data ?? [], null);
        $this->setIfExists('package_client_reference_id', $data ?? [], null);
        $this->setIfExists('items', $data ?? [], null);
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

        if ($this->container['dimensions'] === null) {
            $invalidProperties[] = "'dimensions' can't be null";
        }
        if ($this->container['weight'] === null) {
            $invalidProperties[] = "'weight' can't be null";
        }
        if ($this->container['insured_value'] === null) {
            $invalidProperties[] = "'insured_value' can't be null";
        }
        if ($this->container['package_client_reference_id'] === null) {
            $invalidProperties[] = "'package_client_reference_id' can't be null";
        }
        if ($this->container['items'] === null) {
            $invalidProperties[] = "'items' can't be null";
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
     * Gets dimensions
     *
     * @return \OpenAPI\Client\Model\shipping\Dimensions
     */
    public function getDimensions(): \OpenAPI\Client\Model\shipping\Dimensions
    {
        return $this->container['dimensions'];
    }

    /**
     * Sets dimensions
     *
     * @param \OpenAPI\Client\Model\shipping\Dimensions $dimensions dimensions
     *
     * @return self
     */
    public function setDimensions(\OpenAPI\Client\Model\shipping\Dimensions $dimensions): self
    {
        if (is_null($dimensions)) {
            throw new \InvalidArgumentException('non-nullable dimensions cannot be null');
        }
        $this->container['dimensions'] = $dimensions;

        return $this;
    }

    /**
     * Gets weight
     *
     * @return \OpenAPI\Client\Model\shipping\Weight
     */
    public function getWeight(): \OpenAPI\Client\Model\shipping\Weight
    {
        return $this->container['weight'];
    }

    /**
     * Sets weight
     *
     * @param \OpenAPI\Client\Model\shipping\Weight $weight weight
     *
     * @return self
     */
    public function setWeight(\OpenAPI\Client\Model\shipping\Weight $weight): self
    {
        if (is_null($weight)) {
            throw new \InvalidArgumentException('non-nullable weight cannot be null');
        }
        $this->container['weight'] = $weight;

        return $this;
    }

    /**
     * Gets insured_value
     *
     * @return \OpenAPI\Client\Model\shipping\Currency
     */
    public function getInsuredValue(): \OpenAPI\Client\Model\shipping\Currency
    {
        return $this->container['insured_value'];
    }

    /**
     * Sets insured_value
     *
     * @param \OpenAPI\Client\Model\shipping\Currency $insured_value insured_value
     *
     * @return self
     */
    public function setInsuredValue(\OpenAPI\Client\Model\shipping\Currency $insured_value): self
    {
        if (is_null($insured_value)) {
            throw new \InvalidArgumentException('non-nullable insured_value cannot be null');
        }
        $this->container['insured_value'] = $insured_value;

        return $this;
    }

    /**
     * Gets is_hazmat
     *
     * @return bool|null
     */
    public function getIsHazmat(): ?bool
    {
        return $this->container['is_hazmat'];
    }

    /**
     * Sets is_hazmat
     *
     * @param bool|null $is_hazmat When true, the package contains hazardous materials. Defaults to false.
     *
     * @return self
     */
    public function setIsHazmat(?bool $is_hazmat): self
    {
        if (is_null($is_hazmat)) {
            array_push($this->openAPINullablesSetToNull, 'is_hazmat');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('is_hazmat', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['is_hazmat'] = $is_hazmat;

        return $this;
    }

    /**
     * Gets seller_display_name
     *
     * @return string|null
     */
    public function getSellerDisplayName(): ?string
    {
        return $this->container['seller_display_name'];
    }

    /**
     * Sets seller_display_name
     *
     * @param string|null $seller_display_name The seller name displayed on the label.
     *
     * @return self
     */
    public function setSellerDisplayName(?string $seller_display_name): self
    {
        if (is_null($seller_display_name)) {
            array_push($this->openAPINullablesSetToNull, 'seller_display_name');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('seller_display_name', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['seller_display_name'] = $seller_display_name;

        return $this;
    }

    /**
     * Gets charges
     *
     * @return array|null
     */
    public function getCharges(): ?array
    {
        return $this->container['charges'];
    }

    /**
     * Sets charges
     *
     * @param array|null $charges A list of charges based on the shipping service charges applied on a package.
     *
     * @return self
     */
    public function setCharges(?array $charges): self
    {
        if (is_null($charges)) {
            array_push($this->openAPINullablesSetToNull, 'charges');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('charges', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['charges'] = $charges;

        return $this;
    }

    /**
     * Gets package_client_reference_id
     *
     * @return string
     */
    public function getPackageClientReferenceId(): string
    {
        return $this->container['package_client_reference_id'];
    }

    /**
     * Sets package_client_reference_id
     *
     * @param string $package_client_reference_id A client provided unique identifier for a package being shipped. This value should be saved by the client to pass as a parameter to the getShipmentDocuments operation.
     *
     * @return self
     */
    public function setPackageClientReferenceId(string $package_client_reference_id): self
    {
        if (is_null($package_client_reference_id)) {
            throw new \InvalidArgumentException('non-nullable package_client_reference_id cannot be null');
        }
        $this->container['package_client_reference_id'] = $package_client_reference_id;

        return $this;
    }

    /**
     * Gets items
     *
     * @return array
     */
    public function getItems(): array
    {
        return $this->container['items'];
    }

    /**
     * Sets items
     *
     * @param array $items A list of items.
     *
     * @return self
     */
    public function setItems(array $items): self
    {
        if (is_null($items)) {
            throw new \InvalidArgumentException('non-nullable items cannot be null');
        }
        $this->container['items'] = $items;

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


