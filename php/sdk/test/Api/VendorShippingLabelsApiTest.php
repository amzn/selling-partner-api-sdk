<?php
/**
 * VendorShippingLabelsApiTest
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
use OpenAPI\Client\Api\VendorShippingLabelsApi;
use OpenAPI\Client\Test\TestHelper;
use SpApi\AuthAndAuth\LWAAuthorizationCredentials;
use OpenAPI\Client\ObjectSerializer;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('../../../sdk');
$dotenv->load();

/**
 * VendorShippingLabelsApiTest Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class VendorShippingLabelsApiTest extends TestCase
{
    private VendorShippingLabelsApi $apiInstance;
    private TestHelper $testHelper;

    public function setUp(): void
    {
        $this->testHelper = new TestHelper();
        // Initialize parameter value specific to case
        $this->testHelper->setSpecificValue('VendorShippingLabelsApi', $this->getName());
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
        $this->apiInstance = new VendorShippingLabelsApi($config, null, null);
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
                $this->assertEquals($responseParams, $response);
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
     * Test case for createShippingLabels_200
     */
    public function testCreateShippingLabels200()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testCreateShippingLabels200', 'VendorShippingLabelsApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('VendorShippingLabelsApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'createShippingLabels'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->createShippingLabelsWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for createShippingLabels_400
     */
    public function testCreateShippingLabels400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createShippingLabels_403
     */
    public function testCreateShippingLabels403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createShippingLabels_404
     */
    public function testCreateShippingLabels404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createShippingLabels_409
     */
    public function testCreateShippingLabels409()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createShippingLabels_413
     */
    public function testCreateShippingLabels413()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createShippingLabels_415
     */
    public function testCreateShippingLabels415()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createShippingLabels_429
     */
    public function testCreateShippingLabels429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createShippingLabels_500
     */
    public function testCreateShippingLabels500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createShippingLabels_503
     */
    public function testCreateShippingLabels503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShippingLabel_200
     */
    public function testGetShippingLabel200()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetShippingLabel200', 'VendorShippingLabelsApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('VendorShippingLabelsApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'getShippingLabel'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getShippingLabelWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getShippingLabel_400
     */
    public function testGetShippingLabel400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShippingLabel_401
     */
    public function testGetShippingLabel401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShippingLabel_403
     */
    public function testGetShippingLabel403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShippingLabel_404
     */
    public function testGetShippingLabel404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShippingLabel_415
     */
    public function testGetShippingLabel415()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShippingLabel_429
     */
    public function testGetShippingLabel429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShippingLabel_500
     */
    public function testGetShippingLabel500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShippingLabel_503
     */
    public function testGetShippingLabel503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShippingLabels_200
     */
    public function testGetShippingLabels200()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetShippingLabels200', 'VendorShippingLabelsApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('VendorShippingLabelsApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'getShippingLabels'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getShippingLabelsWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getShippingLabels_400
     */
    public function testGetShippingLabels400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShippingLabels_403
     */
    public function testGetShippingLabels403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShippingLabels_404
     */
    public function testGetShippingLabels404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShippingLabels_415
     */
    public function testGetShippingLabels415()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShippingLabels_429
     */
    public function testGetShippingLabels429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShippingLabels_500
     */
    public function testGetShippingLabels500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShippingLabels_503
     */
    public function testGetShippingLabels503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShippingLabelRequest_202
     */
    public function testSubmitShippingLabelRequest202()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testSubmitShippingLabelRequest202', 'VendorShippingLabelsApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('VendorShippingLabelsApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'submitShippingLabelRequest'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->submitShippingLabelRequestWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(202, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 202);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for submitShippingLabelRequest_400
     */
    public function testSubmitShippingLabelRequest400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShippingLabelRequest_403
     */
    public function testSubmitShippingLabelRequest403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShippingLabelRequest_404
     */
    public function testSubmitShippingLabelRequest404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShippingLabelRequest_413
     */
    public function testSubmitShippingLabelRequest413()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShippingLabelRequest_415
     */
    public function testSubmitShippingLabelRequest415()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShippingLabelRequest_429
     */
    public function testSubmitShippingLabelRequest429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShippingLabelRequest_500
     */
    public function testSubmitShippingLabelRequest500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShippingLabelRequest_503
     */
    public function testSubmitShippingLabelRequest503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
}
