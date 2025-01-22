<?php

/**
 * TestHelper
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client\Test
 */
 /**
 * Selling Partner API
 *
 * The Selling Partner API enables developers to programmatically retrieve information from various domains.
 * These APIs provide tools for building fast, flexible, and custom applications,
 * as well as demand-based decision support systems.
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

namespace OpenAPI\Client\Test;

use OpenAPI\Client\ObjectSerializer;
use ReflectionClass;
use ReflectionException;
use ReflectionMethod;

/**
 * TestHelper
 * A helper class for testing OpenAPI responses.
 *
 * @category Class
 * @package  OpenAPI\Client
 */
class TestHelper
{
    private static string $marketPlaceId = 'ATVPDKIKX0DER';

    /**
     * Sets the marketplace ID to be used for API calls.
     *
     * This method assigns the given marketplace ID to a static property, which can be used across
     * multiple methods or tests that require the marketplace context.
     *
     * @param string $marketPlaceId The marketplace ID to set.
     * @return void
     */
    public static function setMarketPlaceId(string $marketPlaceId): void
    {
        self::$marketPlaceId = $marketPlaceId;
    }

    private static array $classSpecificValue;

    /**
     * Sets class-specific values based on the given class name and case name.
     *
     * This method initializes and populates the `classSpecificValue` array with default and
     * class-specific values depending on the provided class name and test case name. These values
     * are often used for simulating API requests or responses in tests.
     *
     * @param string $className The name of the class for which the values are being set.
     * @param string $caseName The name of the test case, used to determine specific values.
     * @return void
     */
    public static function setSpecificValue(string $className, string $caseName): void
    {
        self::$classSpecificValue = [];
        self::$classSpecificValue['arn'] = 'arn:aws:sqs:test:test:test';
        self::$classSpecificValue['notification_type'] = 'ANY_OFFER_CHANGED';
        self::$classSpecificValue['event_filter_type'] = 'ANY_OFFER_CHANGED';
        self::$classSpecificValue['offer_type'] = 'CONSUMER';
        self::$classSpecificValue['expiration'] = '2024-01-01';
        self::$classSpecificValue['country_code'] = 'JP';
        self::$classSpecificValue['op'] = 'add';
        self::$classSpecificValue['requirements'] = 'LISTING_OFFER_ONLY';
        self::$classSpecificValue['attributes'] = [];
        // Class Specific
        if ($className === 'FbaInventoryApi') {
            self::$classSpecificValue['marketplace_id'] = self::$marketPlaceId;
            self::$classSpecificValue['quantity'] = 0;
            self::$classSpecificValue['granularity_type'] = 'Marketplace';
            self::$classSpecificValue['seller_sku'] = 'automation_test';
            self::$classSpecificValue['x_amzn_idempotency_token'] = self::generateUuidV4();
            self::$classSpecificValue['granularity_id'] = self::$marketPlaceId;
        } elseif ($className === 'FbaOutboundApi') {
            self::$classSpecificValue['marketplace_id'] = self::$marketPlaceId;
            self::$classSpecificValue['seller_fulfillment_order_id'] = date('YmdHi');
            self::$classSpecificValue['postal_code'] = '141-0021';
            if ($caseName == 'testGetFeatureSKU200') {
                self::$classSpecificValue['feature_name'] = 'BLANK_BOX';
                self::$classSpecificValue['seller_sku'] = 'TEST_SKU';
            } else {
                self::$classSpecificValue['feature_name'] = 'TEST_FEATURE';
                self::$classSpecificValue['seller_sku'] = 'test';
            }
        }
    }

    /**
     * Converts a snake_case string to camelCase or PascalCase.
     *
     * @param string $snakeCase The input string in snake_case format.
     * @param bool $capitalizeFirst If true, returns PascalCase; if false, returns camelCase.
     * @return string The converted string in camelCase or PascalCase format.
     */
    private static function snakeToCamelCase(string $snakeCase, bool $capitalizeFirst = true): string
    {
        // Split the input string by underscores into an array of words
        $words = explode('_', $snakeCase);

        // Capitalize the first letter of each word and join them into a single string
        $camelCase = implode('', array_map('ucfirst', $words));

        // If capitalizeFirst is true, return the string as is, otherwise lowercase the first letter
        return $capitalizeFirst ? $camelCase : lcfirst($camelCase);
    }

    /**
     * Prepares request parameters by mapping the input array to a structured format.
     *
     * @param array $params The parameter definitions, expected to have a getName() and getType() method.
     * @param array|null $requestParameters The raw request data to map.
     * @return array The prepared request parameters.
     * @throws ReflectionException
     */
    private static function prepareRequestParams(array $params, ?array $requestParameters): array
    {
        $requestParams = [];

        foreach ($params as $param) {
            $paramName = $param->getName();

            // Handle special case for 'payload' parameter.
            if (
                $paramName === 'payload'
                || $paramName === 'body'
                || $paramName === 'requests'
                || $paramName === 'get_featured_offer_expected_price_batch_request_body'
                || $paramName === 'get_item_offers_batch_request_body'
                || $paramName === 'get_listing_offers_batch_request_body'
                || $paramName === 'create_inventory_item_request_body'
                || $paramName === 'create_scheduled_package_request'
                || $paramName === 'list_handover_slots_request'
                || $paramName === 'update_scheduled_packages_request'
            ) {
                $typeName = $param->getType()->getName();
                if (class_exists($typeName)) {
                    $requestInstance = new $typeName();
                    if (isset($requestParameters['body']['value'])) {
                        $requestInstance =
                            ObjectSerializer::deserialize($requestParameters['body']['value'], $typeName, []);
                    } elseif (
                        // TODO This condition should be removed when EasyShip swagger is fixed
                        isset($requestParameters['body'])
                        && ($paramName === 'update_scheduled_packages_request'
                            || $paramName === 'list_handover_slots_request')
                    ) {
                        $requestInstance =
                            ObjectSerializer::deserialize($requestParameters['body'], $typeName, []);
                    } elseif (!$param->isOptional()) {
                        // Insert Dummy object
                        $openAPITypes = $typeName::openAPITypes();
                        $setters = $typeName::setters();

                        foreach ($openAPITypes as $propertyName => $propertyType) {
                            // Skip if the property is nullable
                            if ($typeName::isNullable($propertyName)) {
                                continue;
                            }

                            // Generate dummy value based on the type
                            $dummyValue = self::getDummyValueForType($propertyType, $propertyName);

                            // Check if a setter exists for the property
                            if (array_key_exists($propertyName, $setters)) {
                                $setterMethod = $setters[$propertyName];
                                if (method_exists($requestInstance, $setterMethod)) {
                                    // Call the setter method with the dummy value
                                    $requestInstance->$setterMethod($dummyValue);
                                }
                            }
                        }
                    }

                    $requestParams['payload'] = $requestInstance;
                } elseif ($typeName === 'array') {
                    $requestParams['payload'] = $requestParameters['body']['value'];
                }
                continue;
            }

            // Process regular parameters with snake_case to camelCase conversion.
            $value = null;
            if ($requestParameters) {
                foreach ([false, true] as $capitalizeFirst) {
                    $camelCaseName = self::snakeToCamelCase($paramName, $capitalizeFirst);
                    // Check for standard camelCase name
                    $subArrayValue = self::extractValue($camelCaseName, $requestParameters);
                    if ($subArrayValue !== null) {
                        $value = $subArrayValue;
                        break;
                    }
                    // Special handling for 'Sku'
                    if (str_contains($camelCaseName, 'Sku')) {
                        $camelCaseName = str_replace('Sku', 'SKU', $camelCaseName);
                        $subArrayValue = self::extractValue($camelCaseName, $requestParameters);
                        if ($subArrayValue !== null) {
                            $value = $subArrayValue;
                            break;
                        }
                    // Special handling for 'ASINList'
                    } elseif ($camelCaseName === 'asinList') {
                        $camelCaseName = 'ASINList';
                        $subArrayValue = self::extractValue($camelCaseName, $requestParameters);
                        if ($subArrayValue !== null) {
                            $value = $subArrayValue;
                            break;
                        }
                    }
                }
            }
            if (empty($value) && !$param->isOptional()) {
                $typeName = $param->getType()->getName();
                // Insert Dummy parameter
                $value = self::getDummyValueForType($typeName, $paramName);
            }
            $requestParams[$paramName] = $value;
        }

        return $requestParams;
    }

    /**
     * Helper method to extract a value from the request parameters.
     *
     * @param string $Name
     * @param array $requestParameters The array of request parameters to search within.
     * @return string|null The value if found and valid, otherwise null.
     */
    private static function extractValue(string $Name, array $requestParameters): mixed
    {
        if (isset($requestParameters[$Name])) {
            $subArray = $requestParameters[$Name];
            if (is_array($subArray) && isset($subArray['value'])) {
                return $subArray['value'];
            }
        }

        return null;
    }

    /**
     * Generates a UUID (Universally Unique Identifier) version 4.
     *
     * This method generates a random UUID (v4) in compliance with RFC 4122. It uses random bytes for
     * entropy and ensures the version and variant fields are correctly set according to the specification.
     *
     * UUID v4 format example: 123e4567-e89b-12d3-a456-426614174000
     *
     * @return string A randomly generated UUID v4 as a string.
     */
    private static function generateUuidV4(): string
    {
        $data = openssl_random_pseudo_bytes(16);

        // Set the version to 0100 (UUID v4)
        $data[6] = chr(ord($data[6]) & 0x0f | 0x40);

        // Set the variant to 10xx (RFC 4122)
        $data[8] = chr(ord($data[8]) & 0x3f | 0x80);

        // Convert to the UUID string format
        return vsprintf('%s%s-%s-%s-%s-%s%s%s', str_split(bin2hex($data), 4));
    }

    /**
     * Returns a dummy value based on the given type.
     *
     * This method generates a dummy value for the specified type name and parameter name. It handles a variety
     * of data types, including primitives, arrays, objects, and enumerations. If the type is an object, it
     * recursively populates its properties with dummy values.
     *
     * @param string $typeName The type name for which a dummy value is needed.
     * @param string $paramName The parameter name associated with the type.
     * @return mixed A dummy value appropriate for the given type.
     * @throws ReflectionException If there is an error instantiating a class using reflection.
     */
    private static function getDummyValueForType(string $typeName, string $paramName): mixed
    {
        // Handle domain specific case
        if (isset(self::$classSpecificValue[$paramName])) {
            return self::$classSpecificValue[$paramName];
        // Listing
        } elseif ($paramName === 'marketplace_ids') {
            return [self::$marketPlaceId];
        }
        // Handle array and specific object types
        if (str_ends_with($typeName, '[]')) {
            $elementType = substr($typeName, 0, -2);
            return [self::getDummyValueForType($elementType, $paramName)];
        }
        if ($typeName === '\DateTime' || $typeName === 'DateTime') {
            return new \DateTime();
        }

        if (class_exists($typeName)) {
            $reflectionClass = new ReflectionClass($typeName);
            $instance = $reflectionClass->newInstance();
            // Enum
            if (method_exists($instance, 'getAllowableEnumValues')) {
                $allowableValues = $instance::getAllowableEnumValues();
                return reset($allowableValues);
            }
            // Populate object properties recursively
            $openAPITypes = $instance::openAPITypes();
            $setters = $typeName::setters();

            foreach ($openAPITypes as $propertyName => $propertyType) {
                // Skip if the property is nullable
                if ($typeName::isNullable($propertyName)) {
                    continue;
                }

                // Generate dummy value based on the type
                $dummyValue = self::getDummyValueForType($propertyType, $propertyName);

                // Check if a setter exists for the property
                if (array_key_exists($propertyName, $setters)) {
                    $setterMethod = $setters[$propertyName];
                    if (method_exists($instance, $setterMethod)) {
                        // Call the setter method with the dummy value
                        $instance->$setterMethod($dummyValue);
                    }
                }
            }

            return $instance;
        }

        // Handle primitive types
        return match ($typeName) {
            'int' => 1,
            'float' => 1.0,
            'bool' => false,
            'string' => 'test',
            'array' => ["1"],
            default => null,
        };
    }

    /**
     * @param $apiInstance
     * @param string $methodName
     * @return ReflectionMethod
     * @throws ReflectionException
     */
    private static function getReflectionMethod($apiInstance, string $methodName): ReflectionMethod
    {
        return new ReflectionMethod($apiInstance, $methodName);
    }

    /**
     * Extracts the request parameters and expected response from a JSON schema.
     *
     * This method processes a JSON schema string, decodes it, and extracts the
     * request parameters and expected response for a specified operation ID.
     * It prepares the request parameters to match the method signature of
     * the provided API instance.
     *
     * @param object $apiInstance The instance of the API class that contains the method to be invoked.
     * @param string $jsonSchema The JSON schema string representing the request and response definitions.
     * @param string $operationId The operation ID corresponding to the method in the API instance.
     *
     * @return array An associative array containing:
     *               - `requestParams` (array): Prepared request parameters for the specified method.
     *               - `expectedResponse` (mixed): The expected response extracted from the JSON schema.
     *
     * @throws \InvalidArgumentException If the provided JSON schema is invalid or cannot be decoded.
     * @throws ReflectionException If there is an error during the preparation of request parameters
     *                             (e.g., method does not exist in the API instance).
     */
    public function extractRequestAndResponse(object $apiInstance, string $jsonSchema, string $operationId): array
    {
        // Decode HTML entities
        $codegenText = html_entity_decode($jsonSchema);

        // Remove unnecessary characters
        $codegenText = str_replace(["\r", "\n"], '', $codegenText);
        //$codegenText = str_replace(' ', '', $codegenText);

        // Decode JSON
        $data = json_decode($codegenText, true);
        if (json_last_error() !== JSON_ERROR_NONE) {
            throw new \InvalidArgumentException("Invalid JSON schema provided: " . json_last_error_msg());
        }

        // Extract request object
        $request = $data['x-amzn-api-sandbox']['static'][0]['request']['parameters'] ?? null;

        // Prepare request parameters
        $reflection = self::getReflectionMethod($apiInstance, $operationId);
        $params = $reflection->getParameters();
        $requestParams = self::prepareRequestParams($params, $request);

        // Extract expected response
        $expectedResponse = $data['x-amzn-api-sandbox']['static'][0]['response'] ?? null;
        if ($expectedResponse !== null) {
            $returnType = $reflection->getReturnType();
            if (class_exists($returnType)) {
                $expectedResponse =
                    ObjectSerializer::deserialize($expectedResponse, $returnType, []);
            }
        }

        return [
            'requestParams' => $requestParams,
            'expectedResponse' => $expectedResponse
        ];
    }

    /**
     * Builds a request for dynamic sandbox testing.
     *
     * This method prepares the request parameters needed for the specified API operation in a dynamic sandbox
     * environment. It uses reflection to retrieve the parameters of the given operation and prepares them accordingly.
     *
     * @param object $apiInstance The API instance that contains the operation.
     * @param string $operationId The ID of the operation for which the request is being built.
     * @return array Returns an array of prepared request parameters for the specified operation.
     * @throws ReflectionException
     */
    public function buildRequestForDynamicSandBox(object $apiInstance, string $operationId): array
    {
        // Prepare request parameters
        $reflection = self::getReflectionMethod($apiInstance, $operationId);
        $params = $reflection->getParameters();
        return self::prepareRequestParams($params, null);
    }

    /**
     * Array that defines TestCase Name requires specific ateTimeFormat
     * @var array
     */
    private array $dateTimeFormatSpecificCase = [
        'FeesApi' => 'D M d H:i:s T Y',
        'ListingsItemsApi' => 'Y-m-d\TH:i:s\Z',
        'OffersApi' => 'Y-m-d\TH:i:s\Z',
        'SellingpartnersApi' => 'Y-m-d\TH:i:s\Z'
    ];


    /**
     * Get required DateTimeFormat for a given testCaseName.
     *
     * @param string $caseName
     * @return string|null
     */
    public function getDateTimeFormatForCase(string $caseName): ?string
    {
        return $this->dateTimeFormatSpecificCase[$caseName] ?? null;
    }

    /**
     * Array that defines scopes parameter required for grantless operation such as Notification API
     * @var array|string[]
     */
    private array $scopesRequiredMap = [
        'testCreateDestination200' => ['sellingpartnerapi::notifications'],
        'testGetDestination200' => ['sellingpartnerapi::notifications'],
        'testDeleteDestination200' => ['sellingpartnerapi::notifications'],
        'testGetDestinations200' => ['sellingpartnerapi::notifications'],
        'testDeleteSubscriptionById200' => ['sellingpartnerapi::notifications'],
        'testGetSubscriptionById200' => ['sellingpartnerapi::notifications'],
    ];


    /**
     * Get required scopes for a given caseName.
     *
     * @param string $caseName
     * @return array
     */
    public function getScopesForApi(string $caseName): array
    {
        return $this->scopesRequiredMap[$caseName] ?? [];
    }

    /**
     * Array that defines Vendor related API Test class name
     * @var array|string[]
     */
    private static array $vendorApiTestClassNameList = [
        'OpenAPI\Client\Test\Api\UpdateInventoryApiTest',
        'OpenAPI\Client\Test\Api\VendorOrdersApiTest',
        'OpenAPI\Client\Test\Api\VendorInvoiceApiTest',
        'OpenAPI\Client\Test\Api\VendorShippingApiTest',
        'OpenAPI\Client\Test\Api\VendorShippingLabelsApiTest',
        'OpenAPI\Client\Test\Api\VendorTransactionApi'
    ];

    /**
     * Checks if the given class name is related to a vendor-related API.
     *
     * This method determines if the specified class name exists in the list
     * of predefined vendor-related API test class names.
     *
     * @param string $className The fully qualified name of the class to check.
     * @return bool Returns true if the class name is related to a vendor-related API; otherwise, false.
     */
    public static function isVendorRelatedApi(string $className): bool
    {
        if (in_array($className, TestHelper::$vendorApiTestClassNameList)) {
            return true;
        }
        return false;
    }

    /**
     * Checks if the test case should be skipped.
     *
     * @param string $testCaseName
     * @param string|null $className
     * @return bool
     */
    public static function shouldSkipTest(string $testCaseName, ?string $className = null): bool
    {
        if (!in_array($testCaseName, TestHelper::$testSkipCasesList)) {
            return in_array($className, TestHelper::$testSkipCasesList);
        }
        return true;
    }

    /**
     * Array that defines test cases which are shippable for now
     * @var array|string[]
     */
    public static array $testSkipCasesList = [
        // Definition of Test Class which has not been tested
        'DefaultApi',
        'AplusContentApi', // Doesn't support sandbox as of now.
        'AppIntegrationsApi', // No role for my account yet
        'ApplicationsApi', // Doesn't support sandbox as of now.
        'AwdApi', // No role for my account yet
        'CustomerInvoicesApi',
        'InvoicesApi', // No role for my account yet
        'ServiceApi', // No role for my account yet
        'ShipmentInvoiceApi', // No role for my account yet
        'ShippingApi', // No role for my account yet
        'UploadsApi', // Doesn't support sandbox as of now.
        // There is critical bug in swagger and API class can not be compiled. need revisit testing.
        'VendorOrdersApi',
        'VendorShipmentsApi',

        // Definition of individual case which is unable to test
        // Order API
        // Missing required parameter in Request regulatedOrderVerificationStatus and can not be auto filled
        //Because there is no difference between 200 case.
        'testUpdateVerificationStatus400',
        'testGetOrderRegulatedInfo200', // Getting 403 due to restricted role required
        'testGetOrderRegulatedInfo400',  // Getting 403 due to restricted role required
        // NotificationAPI
        'testDeleteSubscriptionById200', // Getting 400 with InvalidInput error
        'testGetSubscriptionById200', // Getting 400 with InvalidInput error
        // Feed API
        'testCancelFeed200', // Always 500 will be returned
        'testCreateFeed400', // Request should have mandatory field FeedType
        'testCreateFeedDocument400', // Request should have mandatory field ContentType
        // Report API
        'testCancelReport200',  // Always 500 will be returned
        'testCancelReportSchedule200', // Always 500 will be returned
        'testCreateReportSchedule400', // Request should have mandatory field MarketplaceIds
        // Pricing API
        'testGetCompetitiveSummary200', // Request offerType should be CONSUMER, not Consumer
        // FBA Inbound Eligibility API
        'testGetItemEligibilityPreview401', // Always 500 will be returned
        'testGetItemEligibilityPreview503', // Always 500 will be returned
        // fulfillmentInbound_2024-03-20
        'testGenerateShipmentContentUpdatePreviews202', // Sandbox Returns 400
        'testGenerateTransportationOptions202', // Sandbox Returns 400
        'testGetInboundPlan200', // Json expected Response of timestamp is in wrong format. Millisecond should be added.
        'testGetShipment200', // Json expected Response of timestamp is in wrong format. Millisecond should be added.
        // Json expected Response of timestamp is in wrong format. Millisecond should be added.
        'testScheduleSelfShipAppointment200',
        'testGetShipmentContentUpdatePreview200', // "expiration" at the Json expected Response Json is wrong
        'testListShipmentContentUpdatePreviews200', // "expiration" at the Json expected Response Json is wrong
        'testListInboundPlans200', //Json expected Response of timestamp is in wrong format.Millisecond should be added.
        'testListPrepDetails200', // Sandbox Returns 400
        'testSetPackingInformation202', // Sandbox Returns 400
        'testUpdateItemComplianceDetails202',  // Sandbox Returns 400
        'testSetPrepDetails202', // Sandbox Returns 400
        // CatalogItem
        'testGetCatalogItem200', // Response has Invalid value for images.variant such as PT09-PT14, EEGL and EGUS
        'testSearchCatalogItems200', // Response has Invalid value for images.variant such as PT09-PT14, EEGL and EGUS
        // ProductFeesAPI
        'testGetMyFeesEstimates200', // Sandbox Returns 400
        'testGetMyFeesEstimateForASIN400', // Request can not be made because Request is missing mandatory parameters
        'testGetMyFeesEstimateForSKU400', // Request can not be made because Request is missing mandatory parameters
        // ListingsItems_2021-08-01
        // Expected response is different from actual response.
        // TimeStamp Format is inconsistent within same Expected response Json
        'testGetListingsItem200',
        // fbaInventory
        'testAddInventory200', // Create inventory is dependency for this operation
        // listingsRestrictions
        'testGetListingsRestrictions400', // Error response can not be handled due to wrong ErrorList definition in Json
        // merchantFulfillment
        'testCancelShipment200', // Label.FileContents.FileType is Enum, but “” is returned.
        //Response ShippingServiceList.ShippingServiceOptions.LabelFormat should be Enum value or removed
        'testGetEligibleShipmentServices200',
        // fulfillmentOutbound
        'testListReturnReasonCodes200', // Due to complexity, skip for now
        'testCancelFulfillmentOrder200', // Due to test execution order, it can not be passed
        'testCreateFulfillmentReturn200', // Due to test execution order, it can not be passed
        'testUpdateFulfillmentOrder200', // Due to test execution order, it can not be passed
        'testGetPackageTrackingDetails200', // Due to test execution order, it can not be passed
        'testSubmitFulfillmentOrderStatusUpdate200', // Due to test execution order, it can not be passed
        'testDeliveryOffers200', // Due to complexity, skip for now
        // EasyShip
        'testCreateScheduledPackage400', // Skip due to mandatory filed "slotId" is null in the sample
        'testCreateScheduledPackageBulk200', // packageDimensions.unit must be Cm (Maybe in JP?)
        'testGetScheduledPackage200', // The expected and actual response is not a member of PackageStatus ENUM
        'testListHandoverSlots400', // Due to Json structure is incorrect, need to be fixed
        'testUpdateScheduledPackages400', // Due to Json structure is incorrect, need to be fixed
        // DataKiosk
        'testCancelQuery204', // Sandbox Returns 400
        'testCancelQuery404', // Sandbox Returns 400
        'testGetQuery200', // Sandbox Returns 400
        'testGetQuery404', // Sandbox Returns 400
        // Messaging API
        // SandBox request timestamp format (2004-12-13T21:39:45.618-08:00) doesn't match with PHP.
        // It will require dedicated customization to make 3 digit millisecond and doesn't match with auto Generation
        'testCreateWarranty201',
        // Replenishment Api sellingPartners
        'testGetSellingPartnerMetrics400', // Request timestamp millisecond is 2 digits and requires string mutation
        // Replenishment Api offers
        'testListOffers400', // Request eligibilities is not member of Enum
        // Sellers
        'testGetAccount200', // Need some application which can be succeeded. Access is denied with my account.
        'testGetAccount400', // Need some application which can be succeeded. Access is denied with my account.
        // SolicitationsApi
        // Need some application which can be succeeded. Access is denied with my account.
        'testGetSolicitationActionsForOrder200',
        // SupplySources
        'testGetSupplySource200', // SandBox expected response.ThroughputUnit should be “Order” not “ORDER”.
        'testUpdateSupplySource400', // Expected sandbox response is missing mandatory field "ThroughputUnit".
        'testGetSupplySources400', // Expecting 400 to be returned, but 200 returned
        // Tokens API
        'testCreateRestrictedDataToken400', // SandBox request.method is not member of Enum
        // vendorDirectFulfillmentPaymentsV1
        'testSubmitInvoice202', // Expected transactionId response is different from actual.
        'testSubmitInvoice400', // SandBox dateTime Format is invalid for programing language
        // vendorDirectFulfillmentShipping_2021-12-28
        // shipmentStatusUpdates is not required in swagger, but SandBox returns error
        'testSubmitShipmentStatusUpdates202',
        // shipmentConfirmations is not required in swagger, but SandBox returns error
        'testSubmitShipmentConfirmations202',
        'testGetPackingSlip200', // only allows purchaseOrderNumber as ‘’, but this is not practical.
        'testGetShippingLabel200', // only allows purchaseOrderNumber as ‘’, but this is not practical.
        // shippingLabelRequests is not required in swagger, but SandBox returns error
        'testSubmitShippingLabelRequest202',
        'testCreateShippingLabels200', // Access is denied as 403
        'testGetShippingLabels200', // Getting 400 error and not sure how to call successfully
        // vendorDirectFulfillmentTransactions_2021-12-28
        'testGetTransactionStatus200', // Not sure which value to pass as a key
        // FBA Inbound V0
        'testConfirmPreorder200', // It will be deprecated
        'testConfirmPreorder400', // It will be deprecated
        'testCreateInboundShipmentPlan400', // It will be deprecated
        'testGetTransportDetails200', // It will be deprecated
        // For Naka if you still have issues with below API Please comment in below.
        // FulfillmentInboundApiTest.testGenerateSelfShipAppointmentSlots201
        // OrdersApiTest.testConfirmShipment204
        // ReportsApiTest.testCreateReport202
        // ReportsApiTest.testCreateReportSchedule201
        // Comment in below 4 lines
        'testGenerateSelfShipAppointmentSlots201',
        'testConfirmShipment204',
        'testCreateReport202',
        'testCreateReportSchedule201'
    ];
}
