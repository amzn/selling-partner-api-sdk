<?php
/**
 * VendorShipmentsApiTest
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Vendor Shipments v1
 *
 * The Selling Partner API for Retail Procurement Shipments provides programmatic access to retail shipping data for vendors.
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
use OpenAPI\Client\Api\VendorShipmentsApi;
use OpenAPI\Client\Test\TestHelper;
use SpApi\AuthAndAuth\LWAAuthorizationCredentials;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('../../../sdk');
$dotenv->load();

/**
 * VendorShipmentsApiTest Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class VendorShipmentsApiTest extends TestCase
{
    private VendorShipmentsApi $apiInstance;
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
        $this->apiInstance = new VendorShipmentsApi($config, null, null);
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
     * Test case for getShipmentDetails_200
     * .
     */
    public function testGetShipmentDetails200()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getShipmentDetails_400
     * .
     */
    public function testGetShipmentDetails400()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getShipmentDetails_401
     * .
     */
    public function testGetShipmentDetails401()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getShipmentDetails_403
     * .
     */
    public function testGetShipmentDetails403()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getShipmentDetails_404
     * .
     */
    public function testGetShipmentDetails404()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getShipmentDetails_415
     * .
     */
    public function testGetShipmentDetails415()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getShipmentDetails_429
     * .
     */
    public function testGetShipmentDetails429()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getShipmentDetails_500
     * .
     */
    public function testGetShipmentDetails500()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getShipmentDetails_503
     * .
     */
    public function testGetShipmentDetails503()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getShipmentLabels_200
     * .
     */
    public function testGetShipmentLabels200()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getShipmentLabels_400
     * .
     */
    public function testGetShipmentLabels400()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getShipmentLabels_401
     * .
     */
    public function testGetShipmentLabels401()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getShipmentLabels_403
     * .
     */
    public function testGetShipmentLabels403()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getShipmentLabels_404
     * .
     */
    public function testGetShipmentLabels404()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getShipmentLabels_415
     * .
     */
    public function testGetShipmentLabels415()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getShipmentLabels_429
     * .
     */
    public function testGetShipmentLabels429()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getShipmentLabels_500
     * .
     */
    public function testGetShipmentLabels500()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for getShipmentLabels_503
     * .
     */
    public function testGetShipmentLabels503()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for submitShipmentConfirmations_202
     * .
     */
    public function testSubmitShipmentConfirmations202()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testSubmitShipmentConfirmations202')) {
                $this->assertTrue(true);
                return;
            }

            //　Build Request Json for Request to static SandBox
            $invalidRequestJson = '{body&#x3D;{value&#x3D;{shipmentConfirmations&#x3D;[{shipmentIdentifier&#x3D;TestShipmentConfirmation202, shipmentConfirmationDate&#x3D;2021-03-11T12:38:23.388Z, sellingParty&#x3D;{partyId&#x3D;ABCD1}, shipFromParty&#x3D;{partyId&#x3D;EFGH1}, shipToParty&#x3D;{partyId&#x3D;JKL1}, shipmentConfirmationType&#x3D;Original, shippedItems&#x3D;[{itemSequenceNumber&#x3D;001, shippedQuantity&#x3D;{amount&#x3D;100, unitOfMeasure&#x3D;Eaches}, itemDetails&#x3D;{purchaseOrderNumber&#x3D;TestOrder202}}, {itemSequenceNumber&#x3D;002, shippedQuantity&#x3D;{amount&#x3D;100, unitOfMeasure&#x3D;Cases, totalWeight&#x3D;{amount&#x3D;332.8, unitOfMeasure&#x3D;POUNDS}}, itemDetails&#x3D;{purchaseOrderNumber&#x3D;TestOrder202}}]}]}}};';
            // Prepare request parameters
            $requestParams = $this->testHelper->prepareRequestParamsFromMethod(
                $this->apiInstance,
                'submitShipmentConfirmations',
                $invalidRequestJson
            );

            //Build Expected Response Json for Assert
            $invalidResponseJson = '{payload&#x3D;{transactionId&#x3D;20190905010908-8a3b6901-ef20-412f-9270-21c021796605}}';
            // Prepare expected response
            $expectedResponse = $this->testHelper->prepareExpectedResponse(
                $this->apiInstance,
                'submitShipmentConfirmations',
                $invalidResponseJson
            );

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->submitShipmentConfirmationsWithHttpInfo(...array_values($requestParams));

            // Assert the response
            $this->assertHttpStatusCode(202, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 202, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 202);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for submitShipmentConfirmations_400
     * .
     */
    public function testSubmitShipmentConfirmations400()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for submitShipmentConfirmations_403
     * .
     */
    public function testSubmitShipmentConfirmations403()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for submitShipmentConfirmations_404
     * .
     */
    public function testSubmitShipmentConfirmations404()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for submitShipmentConfirmations_413
     * .
     */
    public function testSubmitShipmentConfirmations413()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for submitShipmentConfirmations_415
     * .
     */
    public function testSubmitShipmentConfirmations415()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for submitShipmentConfirmations_429
     * .
     */
    public function testSubmitShipmentConfirmations429()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for submitShipmentConfirmations_500
     * .
     */
    public function testSubmitShipmentConfirmations500()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for submitShipmentConfirmations_503
     * .
     */
    public function testSubmitShipmentConfirmations503()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for submitShipments_202
     * .
     */
    public function testSubmitShipments202()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for submitShipments_400
     * .
     */
    public function testSubmitShipments400()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for submitShipments_403
     * .
     */
    public function testSubmitShipments403()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for submitShipments_404
     * .
     */
    public function testSubmitShipments404()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for submitShipments_413
     * .
     */
    public function testSubmitShipments413()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for submitShipments_415
     * .
     */
    public function testSubmitShipments415()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for submitShipments_429
     * .
     */
    public function testSubmitShipments429()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for submitShipments_500
     * .
     */
    public function testSubmitShipments500()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
    /**
     * Test case for submitShipments_503
     * .
     */
    public function testSubmitShipments503()
    {
        // Skip this test if no static sandbox extension is present
        $this->markTestSkipped('Static sandbox is not defined for this operation.');
    }
}
