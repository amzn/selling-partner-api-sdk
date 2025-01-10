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
use OpenAPI\Client\ObjectSerializer;
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
        // Initialize parameter value specific to case
        $this->testHelper->setSpecificValue('VendorShipmentsApi', $this->getName());
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
     * Test case for getShipmentDetails_200
     */
    public function testGetShipmentDetails200()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetShipmentDetails200', 'VendorShipmentsApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('VendorShipmentsApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'getShipmentDetails'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getShipmentDetailsWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getShipmentDetails_400
     */
    public function testGetShipmentDetails400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShipmentDetails_401
     */
    public function testGetShipmentDetails401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShipmentDetails_403
     */
    public function testGetShipmentDetails403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShipmentDetails_404
     */
    public function testGetShipmentDetails404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShipmentDetails_415
     */
    public function testGetShipmentDetails415()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShipmentDetails_429
     */
    public function testGetShipmentDetails429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShipmentDetails_500
     */
    public function testGetShipmentDetails500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShipmentDetails_503
     */
    public function testGetShipmentDetails503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShipmentLabels_200
     */
    public function testGetShipmentLabels200()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetShipmentLabels200', 'VendorShipmentsApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('VendorShipmentsApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'getShipmentLabels'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getShipmentLabelsWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getShipmentLabels_400
     */
    public function testGetShipmentLabels400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShipmentLabels_401
     */
    public function testGetShipmentLabels401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShipmentLabels_403
     */
    public function testGetShipmentLabels403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShipmentLabels_404
     */
    public function testGetShipmentLabels404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShipmentLabels_415
     */
    public function testGetShipmentLabels415()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShipmentLabels_429
     */
    public function testGetShipmentLabels429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShipmentLabels_500
     */
    public function testGetShipmentLabels500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getShipmentLabels_503
     */
    public function testGetShipmentLabels503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipmentConfirmations_202
     */
    public function testSubmitShipmentConfirmations202()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testSubmitShipmentConfirmations202', 'VendorShipmentsApi')) {
                $this->assertTrue(true);
                return;
            }
            $jsonSchema = '{
  &quot;description&quot; : &quot;Success.&quot;,
  &quot;headers&quot; : {
    &quot;x-amzn-RequestId&quot; : {
      &quot;description&quot; : &quot;Unique request reference identifier.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    },
    &quot;x-amzn-RateLimit-Limit&quot; : {
      &quot;description&quot; : &quot;Your rate limit (requests per second) for this operation.&quot;,
      &quot;schema&quot; : {
        &quot;type&quot; : &quot;string&quot;
      }
    }
  },
  &quot;content&quot; : {
    &quot;application/json&quot; : {
      &quot;schema&quot; : {
        &quot;$ref&quot; : &quot;#/components/schemas/SubmitShipmentConfirmationsResponse&quot;
      },
      &quot;example&quot; : {
        &quot;payload&quot; : {
          &quot;transactionId&quot; : {
            &quot;description&quot; : &quot;GUID assigned by Amazon to identify this transaction. It will be used in Transaction Status API as reference to get status of this transaction.&quot;,
            &quot;type&quot; : &quot;string&quot;
          }
        }
      }
    }
  },
  &quot;x-amzn-api-sandbox&quot; : {
    &quot;static&quot; : [ {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;body&quot; : {
            &quot;value&quot; : {
              &quot;shipmentConfirmations&quot; : [ {
                &quot;shipmentIdentifier&quot; : &quot;TestShipmentConfirmation202&quot;,
                &quot;shipmentConfirmationDate&quot; : &quot;2021-03-11T12:38:23.388Z&quot;,
                &quot;sellingParty&quot; : {
                  &quot;partyId&quot; : &quot;ABCD1&quot;
                },
                &quot;shipFromParty&quot; : {
                  &quot;partyId&quot; : &quot;EFGH1&quot;
                },
                &quot;shipToParty&quot; : {
                  &quot;partyId&quot; : &quot;JKL1&quot;
                },
                &quot;shipmentConfirmationType&quot; : &quot;Original&quot;,
                &quot;shippedItems&quot; : [ {
                  &quot;itemSequenceNumber&quot; : &quot;001&quot;,
                  &quot;shippedQuantity&quot; : {
                    &quot;amount&quot; : 100,
                    &quot;unitOfMeasure&quot; : &quot;Eaches&quot;
                  },
                  &quot;itemDetails&quot; : {
                    &quot;purchaseOrderNumber&quot; : &quot;TestOrder202&quot;
                  }
                }, {
                  &quot;itemSequenceNumber&quot; : &quot;002&quot;,
                  &quot;shippedQuantity&quot; : {
                    &quot;amount&quot; : 100,
                    &quot;unitOfMeasure&quot; : &quot;Cases&quot;,
                    &quot;totalWeight&quot; : {
                      &quot;amount&quot; : &quot;332.8&quot;,
                      &quot;unitOfMeasure&quot; : &quot;POUNDS&quot;
                    }
                  },
                  &quot;itemDetails&quot; : {
                    &quot;purchaseOrderNumber&quot; : &quot;TestOrder202&quot;
                  }
                } ]
              } ]
            }
          }
        }
      },
      &quot;response&quot; : {
        &quot;payload&quot; : {
          &quot;transactionId&quot; : &quot;20190905010908-8a3b6901-ef20-412f-9270-21c021796605&quot;
        }
      }
    }, {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;body&quot; : { }
        }
      },
      &quot;response&quot; : {
        &quot;payload&quot; : {
          &quot;transactionId&quot; : &quot;mock-TransactionId-20190905010908-8a3b6901-ef20-412f-9270-21c021796605&quot;
        }
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'submitShipmentConfirmations'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('VendorShipmentsApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->submitShipmentConfirmationsWithHttpInfo(...array_values($requestParams));

            // Assert the response code
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
     * Test case for submitShipments_202
     */
    public function testSubmitShipments202()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testSubmitShipments202', 'VendorShipmentsApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('VendorShipmentsApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'submitShipments'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->submitShipmentsWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(202, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 202);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for submitShipments_400
     */
    public function testSubmitShipments400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipments_403
     */
    public function testSubmitShipments403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipments_404
     */
    public function testSubmitShipments404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipments_413
     */
    public function testSubmitShipments413()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipments_415
     */
    public function testSubmitShipments415()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipments_429
     */
    public function testSubmitShipments429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipments_500
     */
    public function testSubmitShipments500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for submitShipments_503
     */
    public function testSubmitShipments503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
}
