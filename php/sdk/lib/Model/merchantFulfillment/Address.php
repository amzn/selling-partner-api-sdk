<?php
/**
 * Address
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Merchant Fulfillment
 *
 * With the Selling Partner API for Merchant Fulfillment, you can build applications that sellers can use to purchase shipping for non-Prime and Prime orders using Amazon's Buy Shipping Services.
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

namespace OpenAPI\Client\Model\merchantFulfillment;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * Address Class Doc Comment
 *
 * @category Class
 * @description The postal address information.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class Address implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'Address';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'name' => 'string',
             'address_line1' => 'string',
             'address_line2' => 'string',
             'address_line3' => 'string',
             'district_or_county' => 'string',
             'email' => 'string',
             'city' => 'string',
             'state_or_province_code' => 'string',
             'postal_code' => 'string',
             'country_code' => 'string',
             'phone' => 'string'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'name' => null,
            'address_line1' => null,
            'address_line2' => null,
            'address_line3' => null,
            'district_or_county' => null,
            'email' => null,
            'city' => null,
            'state_or_province_code' => null,
            'postal_code' => null,
            'country_code' => null,
            'phone' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'name' => false,
        'address_line1' => false,
        'address_line2' => true,
        'address_line3' => true,
        'district_or_county' => true,
        'email' => false,
        'city' => false,
        'state_or_province_code' => true,
        'postal_code' => false,
        'country_code' => false,
        'phone' => false
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
        'name' => 'Name',
                'address_line1' => 'AddressLine1',
                'address_line2' => 'AddressLine2',
                'address_line3' => 'AddressLine3',
                'district_or_county' => 'DistrictOrCounty',
                'email' => 'Email',
                'city' => 'City',
                'state_or_province_code' => 'StateOrProvinceCode',
                'postal_code' => 'PostalCode',
                'country_code' => 'CountryCode',
                'phone' => 'Phone'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'name' => 'setName',
        'address_line1' => 'setAddressLine1',
        'address_line2' => 'setAddressLine2',
        'address_line3' => 'setAddressLine3',
        'district_or_county' => 'setDistrictOrCounty',
        'email' => 'setEmail',
        'city' => 'setCity',
        'state_or_province_code' => 'setStateOrProvinceCode',
        'postal_code' => 'setPostalCode',
        'country_code' => 'setCountryCode',
        'phone' => 'setPhone'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'name' => 'getName',
        'address_line1' => 'getAddressLine1',
        'address_line2' => 'getAddressLine2',
        'address_line3' => 'getAddressLine3',
        'district_or_county' => 'getDistrictOrCounty',
        'email' => 'getEmail',
        'city' => 'getCity',
        'state_or_province_code' => 'getStateOrProvinceCode',
        'postal_code' => 'getPostalCode',
        'country_code' => 'getCountryCode',
        'phone' => 'getPhone'
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
        $this->setIfExists('name', $data ?? [], null);
        $this->setIfExists('address_line1', $data ?? [], null);
        $this->setIfExists('address_line2', $data ?? [], null);
        $this->setIfExists('address_line3', $data ?? [], null);
        $this->setIfExists('district_or_county', $data ?? [], null);
        $this->setIfExists('email', $data ?? [], null);
        $this->setIfExists('city', $data ?? [], null);
        $this->setIfExists('state_or_province_code', $data ?? [], null);
        $this->setIfExists('postal_code', $data ?? [], null);
        $this->setIfExists('country_code', $data ?? [], null);
        $this->setIfExists('phone', $data ?? [], null);
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

        if ($this->container['name'] === null) {
            $invalidProperties[] = "'name' can't be null";
        }
        if ((mb_strlen($this->container['name']) > 30)) {
            $invalidProperties[] = "invalid value for 'name', the character length must be smaller than or equal to 30.";
        }

        if ($this->container['address_line1'] === null) {
            $invalidProperties[] = "'address_line1' can't be null";
        }
        if ((mb_strlen($this->container['address_line1']) > 180)) {
            $invalidProperties[] = "invalid value for 'address_line1', the character length must be smaller than or equal to 180.";
        }

        if (!is_null($this->container['address_line2']) && (mb_strlen($this->container['address_line2']) > 60)) {
            $invalidProperties[] = "invalid value for 'address_line2', the character length must be smaller than or equal to 60.";
        }

        if (!is_null($this->container['address_line3']) && (mb_strlen($this->container['address_line3']) > 60)) {
            $invalidProperties[] = "invalid value for 'address_line3', the character length must be smaller than or equal to 60.";
        }

        if ($this->container['email'] === null) {
            $invalidProperties[] = "'email' can't be null";
        }
        if ($this->container['city'] === null) {
            $invalidProperties[] = "'city' can't be null";
        }
        if ((mb_strlen($this->container['city']) > 30)) {
            $invalidProperties[] = "invalid value for 'city', the character length must be smaller than or equal to 30.";
        }

        if (!is_null($this->container['state_or_province_code']) && (mb_strlen($this->container['state_or_province_code']) > 30)) {
            $invalidProperties[] = "invalid value for 'state_or_province_code', the character length must be smaller than or equal to 30.";
        }

        if ($this->container['postal_code'] === null) {
            $invalidProperties[] = "'postal_code' can't be null";
        }
        if ((mb_strlen($this->container['postal_code']) > 30)) {
            $invalidProperties[] = "invalid value for 'postal_code', the character length must be smaller than or equal to 30.";
        }

        if ($this->container['country_code'] === null) {
            $invalidProperties[] = "'country_code' can't be null";
        }
        if ($this->container['phone'] === null) {
            $invalidProperties[] = "'phone' can't be null";
        }
        if ((mb_strlen($this->container['phone']) > 30)) {
            $invalidProperties[] = "invalid value for 'phone', the character length must be smaller than or equal to 30.";
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
     * Gets name
     *
     * @return string
     */
    public function getName(): string
    {
        return $this->container['name'];
    }

    /**
     * Sets name
     *
     * @param string $name The name of the addressee, or business name.
     *
     * @return self
     */
    public function setName(string $name): self
    {
        if (is_null($name)) {
            throw new \InvalidArgumentException('non-nullable name cannot be null');
        }
        if ((mb_strlen($name) > 30)) {
            throw new \InvalidArgumentException('invalid length for $name when calling Address., must be smaller than or equal to 30.');
        }

        $this->container['name'] = $name;

        return $this;
    }

    /**
     * Gets address_line1
     *
     * @return string
     */
    public function getAddressLine1(): string
    {
        return $this->container['address_line1'];
    }

    /**
     * Sets address_line1
     *
     * @param string $address_line1 The street address information.
     *
     * @return self
     */
    public function setAddressLine1(string $address_line1): self
    {
        if (is_null($address_line1)) {
            throw new \InvalidArgumentException('non-nullable address_line1 cannot be null');
        }
        if ((mb_strlen($address_line1) > 180)) {
            throw new \InvalidArgumentException('invalid length for $address_line1 when calling Address., must be smaller than or equal to 180.');
        }

        $this->container['address_line1'] = $address_line1;

        return $this;
    }

    /**
     * Gets address_line2
     *
     * @return string|null
     */
    public function getAddressLine2(): ?string
    {
        return $this->container['address_line2'];
    }

    /**
     * Sets address_line2
     *
     * @param string|null $address_line2 Additional street address information.
     *
     * @return self
     */
    public function setAddressLine2(?string $address_line2): self
    {
        if (is_null($address_line2)) {
            array_push($this->openAPINullablesSetToNull, 'address_line2');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('address_line2', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        if (!is_null($address_line2) && (mb_strlen($address_line2) > 60)) {
            throw new \InvalidArgumentException('invalid length for $address_line2 when calling Address., must be smaller than or equal to 60.');
        }

        $this->container['address_line2'] = $address_line2;

        return $this;
    }

    /**
     * Gets address_line3
     *
     * @return string|null
     */
    public function getAddressLine3(): ?string
    {
        return $this->container['address_line3'];
    }

    /**
     * Sets address_line3
     *
     * @param string|null $address_line3 Additional street address information.
     *
     * @return self
     */
    public function setAddressLine3(?string $address_line3): self
    {
        if (is_null($address_line3)) {
            array_push($this->openAPINullablesSetToNull, 'address_line3');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('address_line3', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        if (!is_null($address_line3) && (mb_strlen($address_line3) > 60)) {
            throw new \InvalidArgumentException('invalid length for $address_line3 when calling Address., must be smaller than or equal to 60.');
        }

        $this->container['address_line3'] = $address_line3;

        return $this;
    }

    /**
     * Gets district_or_county
     *
     * @return string|null
     */
    public function getDistrictOrCounty(): ?string
    {
        return $this->container['district_or_county'];
    }

    /**
     * Sets district_or_county
     *
     * @param string|null $district_or_county The district or county.
     *
     * @return self
     */
    public function setDistrictOrCounty(?string $district_or_county): self
    {
        if (is_null($district_or_county)) {
            array_push($this->openAPINullablesSetToNull, 'district_or_county');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('district_or_county', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['district_or_county'] = $district_or_county;

        return $this;
    }

    /**
     * Gets email
     *
     * @return string
     */
    public function getEmail(): string
    {
        return $this->container['email'];
    }

    /**
     * Sets email
     *
     * @param string $email The email address.
     *
     * @return self
     */
    public function setEmail(string $email): self
    {
        if (is_null($email)) {
            throw new \InvalidArgumentException('non-nullable email cannot be null');
        }
        $this->container['email'] = $email;

        return $this;
    }

    /**
     * Gets city
     *
     * @return string
     */
    public function getCity(): string
    {
        return $this->container['city'];
    }

    /**
     * Sets city
     *
     * @param string $city The city.
     *
     * @return self
     */
    public function setCity(string $city): self
    {
        if (is_null($city)) {
            throw new \InvalidArgumentException('non-nullable city cannot be null');
        }
        if ((mb_strlen($city) > 30)) {
            throw new \InvalidArgumentException('invalid length for $city when calling Address., must be smaller than or equal to 30.');
        }

        $this->container['city'] = $city;

        return $this;
    }

    /**
     * Gets state_or_province_code
     *
     * @return string|null
     */
    public function getStateOrProvinceCode(): ?string
    {
        return $this->container['state_or_province_code'];
    }

    /**
     * Sets state_or_province_code
     *
     * @param string|null $state_or_province_code The state or province code. This is a required field in Canada, US, and UK marketplaces, and for shipments that originate in China.
     *
     * @return self
     */
    public function setStateOrProvinceCode(?string $state_or_province_code): self
    {
        if (is_null($state_or_province_code)) {
            array_push($this->openAPINullablesSetToNull, 'state_or_province_code');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('state_or_province_code', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        if (!is_null($state_or_province_code) && (mb_strlen($state_or_province_code) > 30)) {
            throw new \InvalidArgumentException('invalid length for $state_or_province_code when calling Address., must be smaller than or equal to 30.');
        }

        $this->container['state_or_province_code'] = $state_or_province_code;

        return $this;
    }

    /**
     * Gets postal_code
     *
     * @return string
     */
    public function getPostalCode(): string
    {
        return $this->container['postal_code'];
    }

    /**
     * Sets postal_code
     *
     * @param string $postal_code The zip code or postal code.
     *
     * @return self
     */
    public function setPostalCode(string $postal_code): self
    {
        if (is_null($postal_code)) {
            throw new \InvalidArgumentException('non-nullable postal_code cannot be null');
        }
        if ((mb_strlen($postal_code) > 30)) {
            throw new \InvalidArgumentException('invalid length for $postal_code when calling Address., must be smaller than or equal to 30.');
        }

        $this->container['postal_code'] = $postal_code;

        return $this;
    }

    /**
     * Gets country_code
     *
     * @return string
     */
    public function getCountryCode(): string
    {
        return $this->container['country_code'];
    }

    /**
     * Sets country_code
     *
     * @param string $country_code The two-letter country code in [ISO 3166-1 alpha-2](https://www.iban.com/country-codes) format.
     *
     * @return self
     */
    public function setCountryCode(string $country_code): self
    {
        if (is_null($country_code)) {
            throw new \InvalidArgumentException('non-nullable country_code cannot be null');
        }
        $this->container['country_code'] = $country_code;

        return $this;
    }

    /**
     * Gets phone
     *
     * @return string
     */
    public function getPhone(): string
    {
        return $this->container['phone'];
    }

    /**
     * Sets phone
     *
     * @param string $phone The phone number.
     *
     * @return self
     */
    public function setPhone(string $phone): self
    {
        if (is_null($phone)) {
            throw new \InvalidArgumentException('non-nullable phone cannot be null');
        }
        if ((mb_strlen($phone) > 30)) {
            throw new \InvalidArgumentException('invalid length for $phone when calling Address., must be smaller than or equal to 30.');
        }

        $this->container['phone'] = $phone;

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


