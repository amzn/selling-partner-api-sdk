<?php
/**
 * ServiceJob
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Services
 *
 * With the Services API, you can build applications that help service providers get and modify their service orders and manage their resources.
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

namespace OpenAPI\Client\Model\services;

use
ArrayAccess;
use OpenAPI\Client\ObjectSerializer;
use OpenAPI\Client\Model\ModelInterface;

/**
 * ServiceJob Class Doc Comment
 *
 * @category Class
 * @description The job details of a service.
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 * @implements \ArrayAccess<string, mixed>
 */
class ServiceJob implements ModelInterface, ArrayAccess, \JsonSerializable
{
    public const DISCRIMINATOR = null;

    /**
      * The original name of the model.
      *
      * @var string
      */
    protected static string $openAPIModelName = 'ServiceJob';

    /**
      * Array of property to type mappings. Used for (de)serialization
      *
      * @var string[]
      */
    protected static array $openAPITypes = [
             'create_time' => '\DateTime',
             'service_job_id' => 'string',
             'service_job_status' => 'string',
             'scope_of_work' => '\OpenAPI\Client\Model\services\ScopeOfWork',
             'seller' => '\OpenAPI\Client\Model\services\Seller',
             'service_job_provider' => '\OpenAPI\Client\Model\services\ServiceJobProvider',
             'preferred_appointment_times' => '\OpenAPI\Client\Model\services\AppointmentTime[]',
             'appointments' => '\OpenAPI\Client\Model\services\Appointment[]',
             'service_order_id' => 'string',
             'marketplace_id' => 'string',
             'store_id' => 'string',
             'buyer' => '\OpenAPI\Client\Model\services\Buyer',
             'associated_items' => '\OpenAPI\Client\Model\services\AssociatedItem[]',
             'service_location' => '\OpenAPI\Client\Model\services\ServiceLocation'    ];

    /**
      * Array of property to format mappings. Used for (de)serialization
      *
      * @var string[]
      * @phpstan-var array<string, string|null>
      * @psalm-var array<string, string|null>
      */
    protected static array $openAPIFormats = [
            'create_time' => 'date-time',
            'service_job_id' => null,
            'service_job_status' => null,
            'scope_of_work' => null,
            'seller' => null,
            'service_job_provider' => null,
            'preferred_appointment_times' => null,
            'appointments' => null,
            'service_order_id' => null,
            'marketplace_id' => null,
            'store_id' => null,
            'buyer' => null,
            'associated_items' => null,
            'service_location' => null    ];

    /**
      * Array of nullable properties. Used for (de)serialization
      *
      * @var boolean[]
      */
    protected static array $openAPINullables = [
        'create_time' => true,
        'service_job_id' => true,
        'service_job_status' => true,
        'scope_of_work' => true,
        'seller' => true,
        'service_job_provider' => true,
        'preferred_appointment_times' => true,
        'appointments' => true,
        'service_order_id' => true,
        'marketplace_id' => true,
        'store_id' => true,
        'buyer' => true,
        'associated_items' => true,
        'service_location' => true
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
        'create_time' => 'createTime',
                'service_job_id' => 'serviceJobId',
                'service_job_status' => 'serviceJobStatus',
                'scope_of_work' => 'scopeOfWork',
                'seller' => 'seller',
                'service_job_provider' => 'serviceJobProvider',
                'preferred_appointment_times' => 'preferredAppointmentTimes',
                'appointments' => 'appointments',
                'service_order_id' => 'serviceOrderId',
                'marketplace_id' => 'marketplaceId',
                'store_id' => 'storeId',
                'buyer' => 'buyer',
                'associated_items' => 'associatedItems',
                'service_location' => 'serviceLocation'
        
    ];

    /**
     * Array of attributes to setter functions (for deserialization of responses)
     *
     * @var string[]
     */
    protected static array $setters = [
        'create_time' => 'setCreateTime',
        'service_job_id' => 'setServiceJobId',
        'service_job_status' => 'setServiceJobStatus',
        'scope_of_work' => 'setScopeOfWork',
        'seller' => 'setSeller',
        'service_job_provider' => 'setServiceJobProvider',
        'preferred_appointment_times' => 'setPreferredAppointmentTimes',
        'appointments' => 'setAppointments',
        'service_order_id' => 'setServiceOrderId',
        'marketplace_id' => 'setMarketplaceId',
        'store_id' => 'setStoreId',
        'buyer' => 'setBuyer',
        'associated_items' => 'setAssociatedItems',
        'service_location' => 'setServiceLocation'
    ];

    /**
     * Array of attributes to getter functions (for serialization of requests)
     *
     * @var string[]
     */
    protected static array $getters = [
        'create_time' => 'getCreateTime',
        'service_job_id' => 'getServiceJobId',
        'service_job_status' => 'getServiceJobStatus',
        'scope_of_work' => 'getScopeOfWork',
        'seller' => 'getSeller',
        'service_job_provider' => 'getServiceJobProvider',
        'preferred_appointment_times' => 'getPreferredAppointmentTimes',
        'appointments' => 'getAppointments',
        'service_order_id' => 'getServiceOrderId',
        'marketplace_id' => 'getMarketplaceId',
        'store_id' => 'getStoreId',
        'buyer' => 'getBuyer',
        'associated_items' => 'getAssociatedItems',
        'service_location' => 'getServiceLocation'
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

    public const SERVICE_JOB_STATUS_NOT_SERVICED = 'NOT_SERVICED';
    public const SERVICE_JOB_STATUS_CANCELLED = 'CANCELLED';
    public const SERVICE_JOB_STATUS_COMPLETED = 'COMPLETED';
    public const SERVICE_JOB_STATUS_PENDING_SCHEDULE = 'PENDING_SCHEDULE';
    public const SERVICE_JOB_STATUS_NOT_FULFILLABLE = 'NOT_FULFILLABLE';
    public const SERVICE_JOB_STATUS_HOLD = 'HOLD';
    public const SERVICE_JOB_STATUS_PAYMENT_DECLINED = 'PAYMENT_DECLINED';

    /**
     * Gets allowable values of the enum
     *
     * @return string[]
     */
    public function getServiceJobStatusAllowableValues(): array
    {
        return [
            self::SERVICE_JOB_STATUS_NOT_SERVICED,
            self::SERVICE_JOB_STATUS_CANCELLED,
            self::SERVICE_JOB_STATUS_COMPLETED,
            self::SERVICE_JOB_STATUS_PENDING_SCHEDULE,
            self::SERVICE_JOB_STATUS_NOT_FULFILLABLE,
            self::SERVICE_JOB_STATUS_HOLD,
            self::SERVICE_JOB_STATUS_PAYMENT_DECLINED,
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
        $this->setIfExists('create_time', $data ?? [], null);
        $this->setIfExists('service_job_id', $data ?? [], null);
        $this->setIfExists('service_job_status', $data ?? [], null);
        $this->setIfExists('scope_of_work', $data ?? [], null);
        $this->setIfExists('seller', $data ?? [], null);
        $this->setIfExists('service_job_provider', $data ?? [], null);
        $this->setIfExists('preferred_appointment_times', $data ?? [], null);
        $this->setIfExists('appointments', $data ?? [], null);
        $this->setIfExists('service_order_id', $data ?? [], null);
        $this->setIfExists('marketplace_id', $data ?? [], null);
        $this->setIfExists('store_id', $data ?? [], null);
        $this->setIfExists('buyer', $data ?? [], null);
        $this->setIfExists('associated_items', $data ?? [], null);
        $this->setIfExists('service_location', $data ?? [], null);
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

        if (!is_null($this->container['service_job_id']) && (mb_strlen($this->container['service_job_id']) > 100)) {
            $invalidProperties[] = "invalid value for 'service_job_id', the character length must be smaller than or equal to 100.";
        }

        if (!is_null($this->container['service_job_id']) && (mb_strlen($this->container['service_job_id']) < 1)) {
            $invalidProperties[] = "invalid value for 'service_job_id', the character length must be bigger than or equal to 1.";
        }

        $allowedValues = $this->getServiceJobStatusAllowableValues();
        if (!is_null($this->container['service_job_status']) && !in_array($this->container['service_job_status'], $allowedValues, true)) {
            $invalidProperties[] = sprintf(
                "invalid value '%s' for 'service_job_status', must be one of '%s'",
                $this->container['service_job_status'],
                implode("', '", $allowedValues)
            );
        }

        if (!is_null($this->container['service_order_id']) && (mb_strlen($this->container['service_order_id']) > 20)) {
            $invalidProperties[] = "invalid value for 'service_order_id', the character length must be smaller than or equal to 20.";
        }

        if (!is_null($this->container['service_order_id']) && (mb_strlen($this->container['service_order_id']) < 5)) {
            $invalidProperties[] = "invalid value for 'service_order_id', the character length must be bigger than or equal to 5.";
        }

        if (!is_null($this->container['marketplace_id']) && !preg_match("/^[A-Z0-9]*$/", $this->container['marketplace_id'])) {
            $invalidProperties[] = "invalid value for 'marketplace_id', must be conform to the pattern /^[A-Z0-9]*$/.";
        }

        if (!is_null($this->container['store_id']) && (mb_strlen($this->container['store_id']) > 100)) {
            $invalidProperties[] = "invalid value for 'store_id', the character length must be smaller than or equal to 100.";
        }

        if (!is_null($this->container['store_id']) && (mb_strlen($this->container['store_id']) < 1)) {
            $invalidProperties[] = "invalid value for 'store_id', the character length must be bigger than or equal to 1.";
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
     * Gets create_time
     *
     * @return \DateTime|null
     */
    public function getCreateTime(): ?\DateTime
    {
        return $this->container['create_time'];
    }

    /**
     * Sets create_time
     *
     * @param \DateTime|null $create_time The date and time of the creation of the job in ISO 8601 format.
     *
     * @return self
     */
    public function setCreateTime(?\DateTime $create_time): self
    {
        if (is_null($create_time)) {
            array_push($this->openAPINullablesSetToNull, 'create_time');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('create_time', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['create_time'] = $create_time;

        return $this;
    }

    /**
     * Gets service_job_id
     *
     * @return string|null
     */
    public function getServiceJobId(): ?string
    {
        return $this->container['service_job_id'];
    }

    /**
     * Sets service_job_id
     *
     * @param string|null $service_job_id Amazon identifier for the service job.
     *
     * @return self
     */
    public function setServiceJobId(?string $service_job_id): self
    {
        if (is_null($service_job_id)) {
            array_push($this->openAPINullablesSetToNull, 'service_job_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('service_job_id', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        if (!is_null($service_job_id) && (mb_strlen($service_job_id) > 100)) {
            throw new \InvalidArgumentException('invalid length for $service_job_id when calling ServiceJob., must be smaller than or equal to 100.');
        }
        if (!is_null($service_job_id) && (mb_strlen($service_job_id) < 1)) {
            throw new \InvalidArgumentException('invalid length for $service_job_id when calling ServiceJob., must be bigger than or equal to 1.');
        }

        $this->container['service_job_id'] = $service_job_id;

        return $this;
    }

    /**
     * Gets service_job_status
     *
     * @return string|null
     */
    public function getServiceJobStatus(): ?string
    {
        return $this->container['service_job_status'];
    }

    /**
     * Sets service_job_status
     *
     * @param string|null $service_job_status The status of the service job.
     *
     * @return self
     */
    public function setServiceJobStatus(?string $service_job_status): self
    {
        if (is_null($service_job_status)) {
            array_push($this->openAPINullablesSetToNull, 'service_job_status');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('service_job_status', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $allowedValues = $this->getServiceJobStatusAllowableValues();
        if (!is_null($service_job_status) && !in_array($service_job_status, $allowedValues, true)) {
            throw new \InvalidArgumentException(
                sprintf(
                    "Invalid value '%s' for 'service_job_status', must be one of '%s'",
                    $service_job_status,
                    implode("', '", $allowedValues)
                )
            );
        }
        $this->container['service_job_status'] = $service_job_status;

        return $this;
    }

    /**
     * Gets scope_of_work
     *
     * @return \OpenAPI\Client\Model\services\ScopeOfWork|null
     */
    public function getScopeOfWork(): ?\OpenAPI\Client\Model\services\ScopeOfWork
    {
        return $this->container['scope_of_work'];
    }

    /**
     * Sets scope_of_work
     *
     * @param \OpenAPI\Client\Model\services\ScopeOfWork|null $scope_of_work scope_of_work
     *
     * @return self
     */
    public function setScopeOfWork(?\OpenAPI\Client\Model\services\ScopeOfWork $scope_of_work): self
    {
        if (is_null($scope_of_work)) {
            array_push($this->openAPINullablesSetToNull, 'scope_of_work');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('scope_of_work', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['scope_of_work'] = $scope_of_work;

        return $this;
    }

    /**
     * Gets seller
     *
     * @return \OpenAPI\Client\Model\services\Seller|null
     */
    public function getSeller(): ?\OpenAPI\Client\Model\services\Seller
    {
        return $this->container['seller'];
    }

    /**
     * Sets seller
     *
     * @param \OpenAPI\Client\Model\services\Seller|null $seller seller
     *
     * @return self
     */
    public function setSeller(?\OpenAPI\Client\Model\services\Seller $seller): self
    {
        if (is_null($seller)) {
            array_push($this->openAPINullablesSetToNull, 'seller');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('seller', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['seller'] = $seller;

        return $this;
    }

    /**
     * Gets service_job_provider
     *
     * @return \OpenAPI\Client\Model\services\ServiceJobProvider|null
     */
    public function getServiceJobProvider(): ?\OpenAPI\Client\Model\services\ServiceJobProvider
    {
        return $this->container['service_job_provider'];
    }

    /**
     * Sets service_job_provider
     *
     * @param \OpenAPI\Client\Model\services\ServiceJobProvider|null $service_job_provider service_job_provider
     *
     * @return self
     */
    public function setServiceJobProvider(?\OpenAPI\Client\Model\services\ServiceJobProvider $service_job_provider): self
    {
        if (is_null($service_job_provider)) {
            array_push($this->openAPINullablesSetToNull, 'service_job_provider');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('service_job_provider', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['service_job_provider'] = $service_job_provider;

        return $this;
    }

    /**
     * Gets preferred_appointment_times
     *
     * @return array|null
     */
    public function getPreferredAppointmentTimes(): ?array
    {
        return $this->container['preferred_appointment_times'];
    }

    /**
     * Sets preferred_appointment_times
     *
     * @param array|null $preferred_appointment_times A list of appointment windows preferred by the buyer. Included only if the buyer selected appointment windows when creating the order.
     *
     * @return self
     */
    public function setPreferredAppointmentTimes(?array $preferred_appointment_times): self
    {
        if (is_null($preferred_appointment_times)) {
            array_push($this->openAPINullablesSetToNull, 'preferred_appointment_times');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('preferred_appointment_times', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['preferred_appointment_times'] = $preferred_appointment_times;

        return $this;
    }

    /**
     * Gets appointments
     *
     * @return array|null
     */
    public function getAppointments(): ?array
    {
        return $this->container['appointments'];
    }

    /**
     * Sets appointments
     *
     * @param array|null $appointments A list of appointments.
     *
     * @return self
     */
    public function setAppointments(?array $appointments): self
    {
        if (is_null($appointments)) {
            array_push($this->openAPINullablesSetToNull, 'appointments');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('appointments', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['appointments'] = $appointments;

        return $this;
    }

    /**
     * Gets service_order_id
     *
     * @return string|null
     */
    public function getServiceOrderId(): ?string
    {
        return $this->container['service_order_id'];
    }

    /**
     * Sets service_order_id
     *
     * @param string|null $service_order_id The Amazon-defined identifier for an order placed by the buyer, in 3-7-7 format.
     *
     * @return self
     */
    public function setServiceOrderId(?string $service_order_id): self
    {
        if (is_null($service_order_id)) {
            array_push($this->openAPINullablesSetToNull, 'service_order_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('service_order_id', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        if (!is_null($service_order_id) && (mb_strlen($service_order_id) > 20)) {
            throw new \InvalidArgumentException('invalid length for $service_order_id when calling ServiceJob., must be smaller than or equal to 20.');
        }
        if (!is_null($service_order_id) && (mb_strlen($service_order_id) < 5)) {
            throw new \InvalidArgumentException('invalid length for $service_order_id when calling ServiceJob., must be bigger than or equal to 5.');
        }

        $this->container['service_order_id'] = $service_order_id;

        return $this;
    }

    /**
     * Gets marketplace_id
     *
     * @return string|null
     */
    public function getMarketplaceId(): ?string
    {
        return $this->container['marketplace_id'];
    }

    /**
     * Sets marketplace_id
     *
     * @param string|null $marketplace_id The marketplace identifier.
     *
     * @return self
     */
    public function setMarketplaceId(?string $marketplace_id): self
    {
        if (is_null($marketplace_id)) {
            array_push($this->openAPINullablesSetToNull, 'marketplace_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('marketplace_id', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }

        if (!is_null($marketplace_id) && (!preg_match("/^[A-Z0-9]*$/", ObjectSerializer::toString($marketplace_id)))) {
            throw new \InvalidArgumentException("invalid value for \$marketplace_id when calling ServiceJob., must conform to the pattern /^[A-Z0-9]*$/.");
        }

        $this->container['marketplace_id'] = $marketplace_id;

        return $this;
    }

    /**
     * Gets store_id
     *
     * @return string|null
     */
    public function getStoreId(): ?string
    {
        return $this->container['store_id'];
    }

    /**
     * Sets store_id
     *
     * @param string|null $store_id The Amazon-defined identifier for the region scope.
     *
     * @return self
     */
    public function setStoreId(?string $store_id): self
    {
        if (is_null($store_id)) {
            array_push($this->openAPINullablesSetToNull, 'store_id');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('store_id', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        if (!is_null($store_id) && (mb_strlen($store_id) > 100)) {
            throw new \InvalidArgumentException('invalid length for $store_id when calling ServiceJob., must be smaller than or equal to 100.');
        }
        if (!is_null($store_id) && (mb_strlen($store_id) < 1)) {
            throw new \InvalidArgumentException('invalid length for $store_id when calling ServiceJob., must be bigger than or equal to 1.');
        }

        $this->container['store_id'] = $store_id;

        return $this;
    }

    /**
     * Gets buyer
     *
     * @return \OpenAPI\Client\Model\services\Buyer|null
     */
    public function getBuyer(): ?\OpenAPI\Client\Model\services\Buyer
    {
        return $this->container['buyer'];
    }

    /**
     * Sets buyer
     *
     * @param \OpenAPI\Client\Model\services\Buyer|null $buyer buyer
     *
     * @return self
     */
    public function setBuyer(?\OpenAPI\Client\Model\services\Buyer $buyer): self
    {
        if (is_null($buyer)) {
            array_push($this->openAPINullablesSetToNull, 'buyer');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('buyer', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['buyer'] = $buyer;

        return $this;
    }

    /**
     * Gets associated_items
     *
     * @return array|null
     */
    public function getAssociatedItems(): ?array
    {
        return $this->container['associated_items'];
    }

    /**
     * Sets associated_items
     *
     * @param array|null $associated_items A list of items associated with the service job.
     *
     * @return self
     */
    public function setAssociatedItems(?array $associated_items): self
    {
        if (is_null($associated_items)) {
            array_push($this->openAPINullablesSetToNull, 'associated_items');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('associated_items', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['associated_items'] = $associated_items;

        return $this;
    }

    /**
     * Gets service_location
     *
     * @return \OpenAPI\Client\Model\services\ServiceLocation|null
     */
    public function getServiceLocation(): ?\OpenAPI\Client\Model\services\ServiceLocation
    {
        return $this->container['service_location'];
    }

    /**
     * Sets service_location
     *
     * @param \OpenAPI\Client\Model\services\ServiceLocation|null $service_location service_location
     *
     * @return self
     */
    public function setServiceLocation(?\OpenAPI\Client\Model\services\ServiceLocation $service_location): self
    {
        if (is_null($service_location)) {
            array_push($this->openAPINullablesSetToNull, 'service_location');
        } else {
            $nullablesSetToNull = $this->getOpenAPINullablesSetToNull();
            $index = array_search('service_location', $nullablesSetToNull);
            if ($index !== false) {
                unset($nullablesSetToNull[$index]);
                $this->setOpenAPINullablesSetToNull($nullablesSetToNull);
            }
        }
        $this->container['service_location'] = $service_location;

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


