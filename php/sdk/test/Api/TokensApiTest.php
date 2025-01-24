<?php
/**
 * TokensApiTest
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Tokens
 *
 * The Selling Partner API for Tokens provides a secure way to access a customer's PII (Personally Identifiable Information). You can call the Tokens API to get a Restricted Data Token (RDT) for one or more restricted resources that you specify. The RDT authorizes subsequent calls to restricted operations that correspond to the restricted resources that you specified.  For more information, see the [Tokens API Use Case Guide](doc:tokens-api-use-case-guide).
 *
 * The version of the OpenAPI document: 2021-03-01
 * Generated by: https://openapi-generator.tech
 * Generator version: 7.9.0
 */

/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Please update the test case below to test the endpoint.
 */

namespace OpenAPI\Client\Test\Api;

use OpenAPI\Client\ApiException;
use OpenAPI\Client\Api\TokensApi;
use OpenAPI\Client\ObjectSerializer;

/**
 * TokensApiTest Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class TokensApiTest extends BaseTestCase
{
    private TokensApi $apiInstance;
    public function setUp(): void
    {
        parent::setUp();
        // Initialize parameter value specific to case
        $this->testHelper->setSpecificValue('TokensApi', $this->getName());
        $this->apiInstance = new TokensApi($this->config, null, null);
        // Change Time Format if it requires
        $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('TokensApi');
        if ($specificTimeFormat) {
            ObjectSerializer::setDateTimeFormat($specificTimeFormat);
        }
    }

    /**
     * Test case for createRestrictedDataToken_200
     */
    public function testCreateRestrictedDataToken200()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testCreateRestrictedDataToken200', 'TokensApi')) {
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
        &quot;$ref&quot; : &quot;#/components/schemas/CreateRestrictedDataTokenResponse&quot;
      }
    }
  },
  &quot;x-amzn-api-sandbox&quot; : {
    &quot;static&quot; : [ {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;body&quot; : {
            &quot;value&quot; : {
              &quot;targetApplication&quot; : &quot;amzn1.sellerapps.app.target-application&quot;,
              &quot;restrictedResources&quot; : [ {
                &quot;method&quot; : &quot;GET&quot;,
                &quot;path&quot; : &quot;/orders/v0/orders/{orderId}/address&quot;
              } ]
            }
          }
        }
      },
      &quot;response&quot; : {
        &quot;restrictedDataToken&quot; : &quot;Atz.sprdt|IQEBLjAsAhRmHjNgHpi0U-Dme37rR6CuUpSR&quot;,
        &quot;expiresIn&quot; : 3600
      }
    }, {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;body&quot; : {
            &quot;value&quot; : {
              &quot;restrictedResources&quot; : [ {
                &quot;method&quot; : &quot;GET&quot;,
                &quot;path&quot; : &quot;/orders/v0/orders/943-12-123434/address&quot;
              } ]
            }
          }
        }
      },
      &quot;response&quot; : {
        &quot;restrictedDataToken&quot; : &quot;Atz.sprdt|AODFNESLjAsAhRmHjNgHpi0U-Dme37rR6CuUpSR&quot;,
        &quot;expiresIn&quot; : 3600
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'createRestrictedDataToken'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('TokensApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->createRestrictedDataTokenWithHttpInfo(...array_values($requestParams));

            // Assert the response code
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
     * Test case for createRestrictedDataToken_400
     */
    public function testCreateRestrictedDataToken400()
    {
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testCreateRestrictedDataToken400', 'TokensApi')) {
                $this->assertTrue(true);
                return;
            }
            $jsonSchema = '{
  &quot;description&quot; : &quot;Request has missing or invalid parameters and cannot be parsed.&quot;,
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
        &quot;$ref&quot; : &quot;#/components/schemas/ErrorList&quot;
      }
    }
  },
  &quot;x-amzn-api-sandbox&quot; : {
    &quot;static&quot; : [ {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;body&quot; : {
            &quot;value&quot; : {
              &quot;targetApplication&quot; : &quot;amzn1.sellerapps.app.target-application&quot;,
              &quot;restrictedResources&quot; : [ {
                &quot;method&quot; : &quot;&quot;,
                &quot;path&quot; : &quot;/orders/v1/orders/902-1845936-5435065/address&quot;
              } ]
            }
          }
        }
      },
      &quot;response&quot; : {
        &quot;errors&quot; : [ {
          &quot;code&quot; : &quot;InvalidRequest&quot;,
          &quot;message&quot; : &quot;Request is missing or has invalid parameters&quot;,
          &quot;details&quot; : &quot;Resource not provided.&quot;
        } ]
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'createRestrictedDataToken'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('TokensApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->createRestrictedDataTokenWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(400, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 400, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 400);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for createRestrictedDataToken_401
     */
    public function testCreateRestrictedDataToken401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createRestrictedDataToken_403
     */
    public function testCreateRestrictedDataToken403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createRestrictedDataToken_404
     */
    public function testCreateRestrictedDataToken404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createRestrictedDataToken_415
     */
    public function testCreateRestrictedDataToken415()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createRestrictedDataToken_429
     */
    public function testCreateRestrictedDataToken429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createRestrictedDataToken_500
     */
    public function testCreateRestrictedDataToken500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createRestrictedDataToken_503
     */
    public function testCreateRestrictedDataToken503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
}
