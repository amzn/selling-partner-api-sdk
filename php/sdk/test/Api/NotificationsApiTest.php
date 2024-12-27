<?php
/**
 * NotificationsApiTest
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Notifications
 *
 * The Selling Partner API for Notifications lets you subscribe to notifications that are relevant to a selling partner's business. Using this API you can create a destination to receive notifications, subscribe to notifications, delete notification subscriptions, and more.  For more information, refer to the [Notifications Use Case Guide](https://developer-docs.amazon.com/sp-api/docs/notifications-api-v1-use-case-guide).
 *
 * The version of the OpenAPI document: v1
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Please update the test case below to test the endpoint.
 */

namespace OpenAPI\Client\Test\Api;

use OpenAPI\Client\Configuration;
use OpenAPI\Client\ApiException;
use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Api\NotificationsApi;
use OpenAPI\Client\Test\TestHelper;
use SpApi\AuthAndAuth\LWAAuthorizationCredentials;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('../../../sdk');
$dotenv->load();

/**
 * NotificationsApiTest Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class NotificationsApiTest extends TestCase
{
    private NotificationsApi $apiInstance;
    private TestHelper $testHelper;

    public function setUp(): void
    {
        $this->testHelper = new TestHelper();
        $credentialsConfig = [
            "clientId" => $_ENV['SP_API_CLIENT_ID'],
            "clientSecret" => $_ENV['SP_API_CLIENT_SECRET'],
            "refreshToken" => $_ENV['SP_API_REFRESH_TOKEN'],
            "endpoint" => $_ENV['SP_API_ENDPOINT'] ?: "https://api.amazon.com/auth/o2/token"
        ];
        $scopes = $this->testHelper->getScopesForApi($this->getName());
        if (!empty($scopes)) {
            $credentialsConfig['scopes'] = $scopes;
        }
        $lwaAuthorizationCredentials = new LWAAuthorizationCredentials($credentialsConfig);
        $config = new Configuration([], $lwaAuthorizationCredentials);
        $config->setHost($_ENV['SP_API_ENDPOINT_HOST'] ?: 'https://sandbox.sellingpartnerapi-fe.amazon.com');
        $this->apiInstance = new NotificationsApi($config, null, null);
    }

    /**
     * Handles the response based on the expected HTTP status code.
     *
     * @param mixed $response The API response.
     * @param int $statusCode The actual HTTP status code.
     * @param int $expectedStatusCode The expected HTTP status code.
     * @throws \ReflectionException
     */
    private function handleResponse(mixed $response, int $statusCode, int $expectedStatusCode, $responseParams): void
    {
        switch ($expectedStatusCode) {
            case 200:
            case 201:
            case 202:
                $actual = json_decode($response, true);
                $this->assertEquals($responseParams, $actual);
                break;

            case 204:
                $this->assertTrue(true);
                echo "Response is empty as expected for status code 204.";
                break;

            case 400:
                $this->assertArrayHasKey('errors', $responseParams);
                $this->assertEquals($responseParams['errors'], $response->getErrors());
                break;

            default:
                $this->fail("Unhandled response code: $expectedStatusCode");
                break;
        }
    }

    /**
     * Handles exceptions thrown during the API call.
     *
     * @param ApiException $e The exception thrown by the API.
     */
    private function handleApiException(ApiException $e, int $expectedCode): void
    {
        if ($e->getCode() == $expectedCode) {
            $this->assertTrue(true);
        } else {
            $this->fail('Unexpected error code: ' . $e->getCode());
        }
    }

    /**
     * Asserts the HTTP status code.
     *
     * @param int $expectedStatusCode
     * @param int $actualStatusCode
     */
    private function assertHttpStatusCode(int $expectedStatusCode, int $actualStatusCode): void
    {
        $this->assertEquals(
            $expectedStatusCode,
            $actualStatusCode,
            "Expected HTTP status code $expectedStatusCode but got $actualStatusCode."
        );
    }

    /**
     * Test case for createDestination_200
     * .
     */
    public function testCreateDestination200()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testCreateDestination200')) {
                $this->assertTrue(true);
                return;
            }

            //　Build Request Json for Request to static SandBox
            $invalidRequestJson = '{};';
            // Prepare request parameters
            $requestParams = $this->testHelper->prepareRequestParamsFromMethod(
                $this->apiInstance,
                'createDestination',
                $invalidRequestJson
            );

            //Build Expected Response Json for Assert
            $invalidResponseJson = '{payload&#x3D;{destinationId&#x3D;TEST_CASE_200_DESTINATION_ID, resource&#x3D;{sqs&#x3D;{arn&#x3D;arn:aws:sqs:us-east-2:444455556666:queue1}}, name&#x3D;SQSDestination}}';
            // Prepare expected response
            $expectedResponse = $this->testHelper->prepareExpectedResponse(
                $this->apiInstance,
                'createDestination',
                $invalidResponseJson
            );

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->createDestinationWithHttpInfo(...array_values($requestParams));

            // Assert the response
            $this->assertHttpStatusCode(200, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 200, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for createDestination_400
     * .
     */
    public function testCreateDestination400()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for createDestination_403
     * .
     */
    public function testCreateDestination403()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for createDestination_404
     * .
     */
    public function testCreateDestination404()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for createDestination_409
     * .
     */
    public function testCreateDestination409()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for createDestination_413
     * .
     */
    public function testCreateDestination413()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for createDestination_415
     * .
     */
    public function testCreateDestination415()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for createDestination_429
     * .
     */
    public function testCreateDestination429()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for createDestination_500
     * .
     */
    public function testCreateDestination500()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for createDestination_503
     * .
     */
    public function testCreateDestination503()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for createSubscription_200
     * .
     */
    public function testCreateSubscription200()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testCreateSubscription200')) {
                $this->assertTrue(true);
                return;
            }

            //　Build Request Json for Request to static SandBox
            $invalidRequestJson = '{};';
            // Prepare request parameters
            $requestParams = $this->testHelper->prepareRequestParamsFromMethod(
                $this->apiInstance,
                'createSubscription',
                $invalidRequestJson
            );

            //Build Expected Response Json for Assert
            $invalidResponseJson = '{payload&#x3D;{subscriptionId&#x3D;TEST_CASE_200_SUBSCRIPTION_ID, payloadVersion&#x3D;1.0, destinationId&#x3D;TEST_CASE_200_DESTINATION_ID}}';
            // Prepare expected response
            $expectedResponse = $this->testHelper->prepareExpectedResponse(
                $this->apiInstance,
                'createSubscription',
                $invalidResponseJson
            );

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->createSubscriptionWithHttpInfo(...array_values($requestParams));

            // Assert the response
            $this->assertHttpStatusCode(200, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 200, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for createSubscription_400
     * .
     */
    public function testCreateSubscription400()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for createSubscription_403
     * .
     */
    public function testCreateSubscription403()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for createSubscription_404
     * .
     */
    public function testCreateSubscription404()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for createSubscription_409
     * .
     */
    public function testCreateSubscription409()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for createSubscription_413
     * .
     */
    public function testCreateSubscription413()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for createSubscription_415
     * .
     */
    public function testCreateSubscription415()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for createSubscription_429
     * .
     */
    public function testCreateSubscription429()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for createSubscription_500
     * .
     */
    public function testCreateSubscription500()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for createSubscription_503
     * .
     */
    public function testCreateSubscription503()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteDestination_200
     * .
     */
    public function testDeleteDestination200()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testDeleteDestination200')) {
                $this->assertTrue(true);
                return;
            }

            //　Build Request Json for Request to static SandBox
            $invalidRequestJson = '{};';
            // Prepare request parameters
            $requestParams = $this->testHelper->prepareRequestParamsFromMethod(
                $this->apiInstance,
                'deleteDestination',
                $invalidRequestJson
            );

            //Build Expected Response Json for Assert
            $invalidResponseJson = '{}';
            // Prepare expected response
            $expectedResponse = $this->testHelper->prepareExpectedResponse(
                $this->apiInstance,
                'deleteDestination',
                $invalidResponseJson
            );

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->deleteDestinationWithHttpInfo(...array_values($requestParams));

            // Assert the response
            $this->assertHttpStatusCode(200, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 200, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for deleteDestination_400
     * .
     */
    public function testDeleteDestination400()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteDestination_403
     * .
     */
    public function testDeleteDestination403()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteDestination_404
     * .
     */
    public function testDeleteDestination404()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteDestination_409
     * .
     */
    public function testDeleteDestination409()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteDestination_413
     * .
     */
    public function testDeleteDestination413()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteDestination_415
     * .
     */
    public function testDeleteDestination415()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteDestination_429
     * .
     */
    public function testDeleteDestination429()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteDestination_500
     * .
     */
    public function testDeleteDestination500()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteDestination_503
     * .
     */
    public function testDeleteDestination503()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteSubscriptionById_200
     * .
     */
    public function testDeleteSubscriptionById200()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testDeleteSubscriptionById200')) {
                $this->assertTrue(true);
                return;
            }

            //　Build Request Json for Request to static SandBox
            $invalidRequestJson = '{};';
            // Prepare request parameters
            $requestParams = $this->testHelper->prepareRequestParamsFromMethod(
                $this->apiInstance,
                'deleteSubscriptionById',
                $invalidRequestJson
            );

            //Build Expected Response Json for Assert
            $invalidResponseJson = '{}';
            // Prepare expected response
            $expectedResponse = $this->testHelper->prepareExpectedResponse(
                $this->apiInstance,
                'deleteSubscriptionById',
                $invalidResponseJson
            );

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->deleteSubscriptionByIdWithHttpInfo(...array_values($requestParams));

            // Assert the response
            $this->assertHttpStatusCode(200, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 200, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for deleteSubscriptionById_400
     * .
     */
    public function testDeleteSubscriptionById400()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteSubscriptionById_403
     * .
     */
    public function testDeleteSubscriptionById403()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteSubscriptionById_404
     * .
     */
    public function testDeleteSubscriptionById404()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteSubscriptionById_409
     * .
     */
    public function testDeleteSubscriptionById409()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteSubscriptionById_413
     * .
     */
    public function testDeleteSubscriptionById413()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteSubscriptionById_415
     * .
     */
    public function testDeleteSubscriptionById415()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteSubscriptionById_429
     * .
     */
    public function testDeleteSubscriptionById429()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteSubscriptionById_500
     * .
     */
    public function testDeleteSubscriptionById500()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for deleteSubscriptionById_503
     * .
     */
    public function testDeleteSubscriptionById503()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestination_200
     * .
     */
    public function testGetDestination200()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetDestination200')) {
                $this->assertTrue(true);
                return;
            }

            //　Build Request Json for Request to static SandBox
            $invalidRequestJson = '{};';
            // Prepare request parameters
            $requestParams = $this->testHelper->prepareRequestParamsFromMethod(
                $this->apiInstance,
                'getDestination',
                $invalidRequestJson
            );

            //Build Expected Response Json for Assert
            $invalidResponseJson = '{payload&#x3D;{destinationId&#x3D;TEST_CASE_200_DESTINATION, resource&#x3D;{sqs&#x3D;{arn&#x3D;arn:aws:sqs:us-east-2:444455556666:queue1}}, name&#x3D;SQSDestination}}';
            // Prepare expected response
            $expectedResponse = $this->testHelper->prepareExpectedResponse(
                $this->apiInstance,
                'getDestination',
                $invalidResponseJson
            );

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getDestinationWithHttpInfo(...array_values($requestParams));

            // Assert the response
            $this->assertHttpStatusCode(200, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 200, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getDestination_400
     * .
     */
    public function testGetDestination400()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestination_403
     * .
     */
    public function testGetDestination403()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestination_404
     * .
     */
    public function testGetDestination404()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestination_409
     * .
     */
    public function testGetDestination409()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestination_413
     * .
     */
    public function testGetDestination413()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestination_415
     * .
     */
    public function testGetDestination415()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestination_429
     * .
     */
    public function testGetDestination429()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestination_500
     * .
     */
    public function testGetDestination500()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestination_503
     * .
     */
    public function testGetDestination503()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestinations_200
     * .
     */
    public function testGetDestinations200()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetDestinations200')) {
                $this->assertTrue(true);
                return;
            }

            //　Build Request Json for Request to static SandBox
            $invalidRequestJson = '{};';
            // Prepare request parameters
            $requestParams = $this->testHelper->prepareRequestParamsFromMethod(
                $this->apiInstance,
                'getDestinations',
                $invalidRequestJson
            );

            //Build Expected Response Json for Assert
            $invalidResponseJson = '{payload&#x3D;[{destinationId&#x3D;TEST_CASE_200, resource&#x3D;{sqs&#x3D;{arn&#x3D;arn:aws:sqs:us-east-2:444455556666:queue1}}, name&#x3D;SQSDestination}]}';
            // Prepare expected response
            $expectedResponse = $this->testHelper->prepareExpectedResponse(
                $this->apiInstance,
                'getDestinations',
                $invalidResponseJson
            );

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getDestinationsWithHttpInfo(...array_values($requestParams));

            // Assert the response
            $this->assertHttpStatusCode(200, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 200, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getDestinations_400
     * .
     */
    public function testGetDestinations400()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestinations_403
     * .
     */
    public function testGetDestinations403()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestinations_404
     * .
     */
    public function testGetDestinations404()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestinations_409
     * .
     */
    public function testGetDestinations409()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestinations_413
     * .
     */
    public function testGetDestinations413()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestinations_415
     * .
     */
    public function testGetDestinations415()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestinations_429
     * .
     */
    public function testGetDestinations429()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestinations_500
     * .
     */
    public function testGetDestinations500()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getDestinations_503
     * .
     */
    public function testGetDestinations503()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getSubscription_200
     * .
     */
    public function testGetSubscription200()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetSubscription200')) {
                $this->assertTrue(true);
                return;
            }

            //　Build Request Json for Request to static SandBox
            $invalidRequestJson = '{};';
            // Prepare request parameters
            $requestParams = $this->testHelper->prepareRequestParamsFromMethod(
                $this->apiInstance,
                'getSubscription',
                $invalidRequestJson
            );

            //Build Expected Response Json for Assert
            $invalidResponseJson = '{payload&#x3D;{subscriptionId&#x3D;TEST_CASE_200_SUBSCRIPTION_ID, payloadVersion&#x3D;1.0, destinationId&#x3D;TEST_CASE_200_DESTINATION_ID}}';
            // Prepare expected response
            $expectedResponse = $this->testHelper->prepareExpectedResponse(
                $this->apiInstance,
                'getSubscription',
                $invalidResponseJson
            );

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getSubscriptionWithHttpInfo(...array_values($requestParams));

            // Assert the response
            $this->assertHttpStatusCode(200, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 200, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getSubscription_400
     * .
     */
    public function testGetSubscription400()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getSubscription_403
     * .
     */
    public function testGetSubscription403()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getSubscription_404
     * .
     */
    public function testGetSubscription404()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getSubscription_413
     * .
     */
    public function testGetSubscription413()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getSubscription_415
     * .
     */
    public function testGetSubscription415()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getSubscription_429
     * .
     */
    public function testGetSubscription429()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getSubscription_500
     * .
     */
    public function testGetSubscription500()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getSubscription_503
     * .
     */
    public function testGetSubscription503()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getSubscriptionById_200
     * .
     */
    public function testGetSubscriptionById200()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetSubscriptionById200')) {
                $this->assertTrue(true);
                return;
            }

            //　Build Request Json for Request to static SandBox
            $invalidRequestJson = '{};';
            // Prepare request parameters
            $requestParams = $this->testHelper->prepareRequestParamsFromMethod(
                $this->apiInstance,
                'getSubscriptionById',
                $invalidRequestJson
            );

            //Build Expected Response Json for Assert
            $invalidResponseJson = '{payload&#x3D;{subscriptionId&#x3D;TEST_CASE_200_SUBSCRIPTION_ID, payloadVersion&#x3D;1.0, destinationId&#x3D;TEST_CASE_200_DESTINATION_ID}}';
            // Prepare expected response
            $expectedResponse = $this->testHelper->prepareExpectedResponse(
                $this->apiInstance,
                'getSubscriptionById',
                $invalidResponseJson
            );

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getSubscriptionByIdWithHttpInfo(...array_values($requestParams));

            // Assert the response
            $this->assertHttpStatusCode(200, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 200, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getSubscriptionById_400
     * .
     */
    public function testGetSubscriptionById400()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getSubscriptionById_403
     * .
     */
    public function testGetSubscriptionById403()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getSubscriptionById_404
     * .
     */
    public function testGetSubscriptionById404()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getSubscriptionById_409
     * .
     */
    public function testGetSubscriptionById409()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getSubscriptionById_413
     * .
     */
    public function testGetSubscriptionById413()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getSubscriptionById_415
     * .
     */
    public function testGetSubscriptionById415()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getSubscriptionById_429
     * .
     */
    public function testGetSubscriptionById429()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getSubscriptionById_500
     * .
     */
    public function testGetSubscriptionById500()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getSubscriptionById_503
     * .
     */
    public function testGetSubscriptionById503()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
}
