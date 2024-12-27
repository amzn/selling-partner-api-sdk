<?php
/**
 * ApplicationsApiTest
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Application Management
 *
 * The Selling Partner API for Application Management lets you programmatically update the client secret on registered applications.
 *
 * The version of the OpenAPI document: 2023-11-30
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
use OpenAPI\Client\Api\ApplicationsApi;
use OpenAPI\Client\Test\TestHelper;
use SpApi\AuthAndAuth\LWAAuthorizationCredentials;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('../../../sdk');
$dotenv->load();

/**
 * ApplicationsApiTest Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class ApplicationsApiTest extends TestCase
{
    private ApplicationsApi $apiInstance;
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
        $this->apiInstance = new ApplicationsApi($config, null, null);
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
     * Test case for rotateApplicationClientSecret_204
     * .
     */
    public function testRotateApplicationClientSecret204()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for rotateApplicationClientSecret_400
     * .
     */
    public function testRotateApplicationClientSecret400()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for rotateApplicationClientSecret_403
     * .
     */
    public function testRotateApplicationClientSecret403()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for rotateApplicationClientSecret_404
     * .
     */
    public function testRotateApplicationClientSecret404()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for rotateApplicationClientSecret_413
     * .
     */
    public function testRotateApplicationClientSecret413()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for rotateApplicationClientSecret_415
     * .
     */
    public function testRotateApplicationClientSecret415()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for rotateApplicationClientSecret_429
     * .
     */
    public function testRotateApplicationClientSecret429()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for rotateApplicationClientSecret_500
     * .
     */
    public function testRotateApplicationClientSecret500()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for rotateApplicationClientSecret_503
     * .
     */
    public function testRotateApplicationClientSecret503()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
}
