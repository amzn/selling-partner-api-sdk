<?php
/**
 * VendorShippingApiTest
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Direct Fulfillment Shipping
 *
 * The Selling Partner API for Direct Fulfillment Shipping provides programmatic access to a direct fulfillment vendor's shipping data.
 *
 * The version of the OpenAPI document: 2021-12-28
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
use OpenAPI\Client\Api\VendorShippingApi;
use OpenAPI\Client\Test\TestHelper;
use SpApi\AuthAndAuth\LWAAuthorizationCredentials;
use OpenAPI\Client\ObjectSerializer;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('../../../sdk');
$dotenv->load();

/**
 * VendorShippingApiTest Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class VendorShippingApiTest extends TestCase
{
    private VendorShippingApi $apiInstance;
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
        $this->apiInstance = new VendorShippingApi($config, null, null);
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
     * Test case for getPackingSlip_200
     */
    public function testGetPackingSlip200()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetPackingSlip200', 'VendorShippingApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('VendorShippingApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'getPackingSlip'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getPackingSlipWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getPackingSlip_400
     */
    public function testGetPackingSlip400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getPackingSlip_401
     */
    public function testGetPackingSlip401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getPackingSlip_403
     */
    public function testGetPackingSlip403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getPackingSlip_404
     */
    public function testGetPackingSlip404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getPackingSlip_415
     */
    public function testGetPackingSlip415()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getPackingSlip_429
     */
    public function testGetPackingSlip429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getPackingSlip_500
     */
    public function testGetPackingSlip500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getPackingSlip_503
     */
    public function testGetPackingSlip503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getPackingSlips_200
     */
    public function testGetPackingSlips200()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetPackingSlips200', 'VendorShippingApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('VendorShippingApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'getPackingSlips'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getPackingSlipsWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getPackingSlips_400
     */
    public function testGetPackingSlips400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getPackingSlips_401
     */
    public function testGetPackingSlips401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getPackingSlips_403
     */
    public function testGetPackingSlips403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getPackingSlips_404
     */
    public function testGetPackingSlips404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getPackingSlips_415
     */
    public function testGetPackingSlips415()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getPackingSlips_429
     */
    public function testGetPackingSlips429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getPackingSlips_500
     */
    public function testGetPackingSlips500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getPackingSlips_503
     */
    public function testGetPackingSlips503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipmentConfirmations_202
     */
    public function testSubmitShipmentConfirmations202()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testSubmitShipmentConfirmations202', 'VendorShippingApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('VendorShippingApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'submitShipmentConfirmations'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->submitShipmentConfirmationsWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(202, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 202);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for submitShipmentConfirmations_400
     */
    public function testSubmitShipmentConfirmations400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipmentConfirmations_403
     */
    public function testSubmitShipmentConfirmations403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipmentConfirmations_404
     */
    public function testSubmitShipmentConfirmations404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipmentConfirmations_413
     */
    public function testSubmitShipmentConfirmations413()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipmentConfirmations_415
     */
    public function testSubmitShipmentConfirmations415()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipmentConfirmations_429
     */
    public function testSubmitShipmentConfirmations429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipmentConfirmations_500
     */
    public function testSubmitShipmentConfirmations500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipmentConfirmations_503
     */
    public function testSubmitShipmentConfirmations503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipmentStatusUpdates_202
     */
    public function testSubmitShipmentStatusUpdates202()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testSubmitShipmentStatusUpdates202', 'VendorShippingApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('VendorShippingApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'submitShipmentStatusUpdates'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->submitShipmentStatusUpdatesWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(202, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 202);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for submitShipmentStatusUpdates_400
     */
    public function testSubmitShipmentStatusUpdates400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipmentStatusUpdates_403
     */
    public function testSubmitShipmentStatusUpdates403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipmentStatusUpdates_404
     */
    public function testSubmitShipmentStatusUpdates404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipmentStatusUpdates_413
     */
    public function testSubmitShipmentStatusUpdates413()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipmentStatusUpdates_415
     */
    public function testSubmitShipmentStatusUpdates415()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipmentStatusUpdates_429
     */
    public function testSubmitShipmentStatusUpdates429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipmentStatusUpdates_500
     */
    public function testSubmitShipmentStatusUpdates500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipmentStatusUpdates_503
     */
    public function testSubmitShipmentStatusUpdates503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
}
