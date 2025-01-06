<?php
/**
 * AppIntegrationsApiTest
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * The Selling Partner API for third party application integrations.
 *
 * With the AppIntegrations API v2024-04-01, you can send notifications to Amazon Selling Partners and display the notifications in Seller Central.
 *
 * The version of the OpenAPI document: 2024-04-01
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
use OpenAPI\Client\Api\AppIntegrationsApi;
use OpenAPI\Client\Test\TestHelper;
use SpApi\AuthAndAuth\LWAAuthorizationCredentials;
use OpenAPI\Client\ObjectSerializer;
use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('../../../sdk');
$dotenv->load();

/**
 * AppIntegrationsApiTest Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class AppIntegrationsApiTest extends TestCase
{
    private AppIntegrationsApi $apiInstance;
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
        $this->apiInstance = new AppIntegrationsApi($config, null, null);
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
     * Test case for createNotification_200
     */
    public function testCreateNotification200()
    {
        try {
            // Skip test if it is in the skip list
             if ($this->testHelper->shouldSkipTest('testCreateNotification200', 'AppIntegrationsApi')) {
                $this->assertTrue(true);
                return;
            }
            $jsonSchema = '{
  &quot;description&quot; : &quot;Successful creation of notification with the identifier captured in response.&quot;,
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
        &quot;$ref&quot; : &quot;#/components/schemas/CreateNotificationResponse&quot;
      },
      &quot;example&quot; : {
        &quot;notificationId&quot; : &quot;0cf25616-f68c-4eba-a5d3-6823b61506c0&quot;
      }
    }
  },
  &quot;x-amzn-api-sandbox&quot; : {
    &quot;static&quot; : [ {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;body&quot; : {
            &quot;value&quot; : {
              &quot;templateId&quot; : &quot;PRICE_CHANGE&quot;,
              &quot;marketplaceId&quot; : &quot;ATVPDKIKX0DER&quot;,
              &quot;notificationParameters&quot; : { }
            }
          }
        }
      },
      &quot;response&quot; : {
        &quot;notificationId&quot; : &quot;0cf25616-f68c-4eba-a5d3-6823b61506c0&quot;
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'createNotification'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('AppIntegrationsApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->createNotificationWithHttpInfo(...array_values($requestParams));

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
     * Test case for createNotification_400
     */
    public function testCreateNotification400()
    {
        try {
            // Skip test if it is in the skip list
             if ($this->testHelper->shouldSkipTest('testCreateNotification400', 'AppIntegrationsApi')) {
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
              &quot;templateId&quot; : &quot;BAD_TEMPLATE_ID&quot;,
              &quot;marketplaceId&quot; : &quot;ATVPDKIKX0DER&quot;,
              &quot;notificationParameters&quot; : { }
            }
          }
        }
      },
      &quot;response&quot; : {
        &quot;errors&quot; : [ {
          &quot;code&quot; : &quot;InvalidInput&quot;,
          &quot;message&quot; : &quot;Invalid Template Identifier(templateId)&quot;,
          &quot;details&quot; : &quot;&#39;BAD_TEMPLATE_ID&#39; is an invalid templateId&quot;
        } ]
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'createNotification'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('AppIntegrationsApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->createNotificationWithHttpInfo(...array_values($requestParams));

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
     * Test case for createNotification_401
     */
    public function testCreateNotification401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createNotification_403
     */
    public function testCreateNotification403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createNotification_404
     */
    public function testCreateNotification404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createNotification_413
     */
    public function testCreateNotification413()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createNotification_415
     */
    public function testCreateNotification415()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createNotification_429
     */
    public function testCreateNotification429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createNotification_500
     */
    public function testCreateNotification500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createNotification_503
     */
    public function testCreateNotification503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for deleteNotifications_204
     */
    public function testDeleteNotifications204()
    {
        try {
            // Skip test if it is in the skip list
             if ($this->testHelper->shouldSkipTest('testDeleteNotifications204', 'AppIntegrationsApi')) {
                $this->assertTrue(true);
                return;
            }
            $jsonSchema = '{
  &quot;description&quot; : &quot;Successfully processed the deleteNotifications request.&quot;,
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
      &quot;example&quot; : {
        &quot;templateId&quot; : &quot;PRICE_CHANGE&quot;,
        &quot;deletionReason&quot; : &quot;INCORRECT_RECIPIENT&quot;
      }
    }
  },
  &quot;x-amzn-api-sandbox&quot; : {
    &quot;static&quot; : [ {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;body&quot; : {
            &quot;value&quot; : {
              &quot;templateId&quot; : &quot;PRICE_CHANGE&quot;,
              &quot;deletionReason&quot; : &quot;INCORRECT_RECIPIENT&quot;
            }
          }
        }
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'deleteNotifications'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('AppIntegrationsApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->deleteNotificationsWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(204, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 204, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 204);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for deleteNotifications_400
     */
    public function testDeleteNotifications400()
    {
        try {
            // Skip test if it is in the skip list
             if ($this->testHelper->shouldSkipTest('testDeleteNotifications400', 'AppIntegrationsApi')) {
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
              &quot;templateId&quot; : &quot;PRICE_CHANGE_INVALID&quot;,
              &quot;deletionReason&quot; : &quot;INCORRECT_RECIPIENT&quot;
            }
          }
        }
      },
      &quot;response&quot; : {
        &quot;errors&quot; : [ {
          &quot;code&quot; : &quot;InvalidInput&quot;,
          &quot;message&quot; : &quot;Invalid Template Id(templateId)&quot;,
          &quot;details&quot; : &quot;&#39;PRICE_CHANGE_INVALID&#39; is an invalid templateId&quot;
        } ]
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'deleteNotifications'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('AppIntegrationsApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->deleteNotificationsWithHttpInfo(...array_values($requestParams));

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
     * Test case for deleteNotifications_413
     */
    public function testDeleteNotifications413()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for deleteNotifications_403
     */
    public function testDeleteNotifications403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for deleteNotifications_404
     */
    public function testDeleteNotifications404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for deleteNotifications_415
     */
    public function testDeleteNotifications415()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for deleteNotifications_429
     */
    public function testDeleteNotifications429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for deleteNotifications_500
     */
    public function testDeleteNotifications500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for deleteNotifications_503
     */
    public function testDeleteNotifications503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for recordActionFeedback_204
     */
    public function testRecordActionFeedback204()
    {
        try {
            // Skip test if it is in the skip list
             if ($this->testHelper->shouldSkipTest('testRecordActionFeedback204', 'AppIntegrationsApi')) {
                $this->assertTrue(true);
                return;
            }
            $jsonSchema = '{
  &quot;description&quot; : &quot;Successfully processed the recordActionFeedback request.&quot;,
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
      &quot;example&quot; : {
        &quot;feedbackActionCode&quot; : &quot;SELLER_ACTION_COMPLETED&quot;
      }
    }
  },
  &quot;x-amzn-api-sandbox&quot; : {
    &quot;static&quot; : [ {
      &quot;request&quot; : {
        &quot;parameters&quot; : {
          &quot;notificationId&quot; : {
            &quot;value&quot; : &quot;0cf25616-f68c-1234-a5d3-6823b61506c0&quot;
          },
          &quot;body&quot; : {
            &quot;value&quot; : {
              &quot;feedbackActionCode&quot; : &quot;SELLER_ACTION_COMPLETED&quot;
            }
          }
        }
      },
      &quot;response&quot; : { }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'recordActionFeedback'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('AppIntegrationsApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->recordActionFeedbackWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(204, $statusCode);

            // Handle different response codes
            $this->handleResponse($response, $statusCode, 204, $expectedResponse);
        } catch (ApiException $e) {
            $this->handleApiException($e, 204);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for recordActionFeedback_400
     */
    public function testRecordActionFeedback400()
    {
        try {
            // Skip test if it is in the skip list
             if ($this->testHelper->shouldSkipTest('testRecordActionFeedback400', 'AppIntegrationsApi')) {
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
          &quot;notificationId&quot; : {
            &quot;value&quot; : &quot;0cf25616-f68c-a5d3-6823b61506c0&quot;
          },
          &quot;body&quot; : {
            &quot;value&quot; : {
              &quot;feedbackActionCode&quot; : &quot;SELLER_ACTION_COMPLETED&quot;
            }
          }
        }
      },
      &quot;response&quot; : {
        &quot;errors&quot; : [ {
          &quot;code&quot; : &quot;InvalidInput&quot;,
          &quot;message&quot; : &quot;Invalid notificationId&quot;,
          &quot;details&quot; : &quot;&#39;0cf25616-f68c-a5d3-6823b61506c0&#39; is an invalid notificationId&quot;
        } ]
      }
    } ]
  }
}';
            $result = $this->testHelper->extractRequestAndResponse(
                $this->apiInstance,
                $jsonSchema,
                'recordActionFeedback'
            );
            $requestParams = $result['requestParams'];
            $expectedResponse = $result['expectedResponse'];

            // Change Time Format if it requires
            $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('AppIntegrationsApi');
            if ($specificTimeFormat) {
                ObjectSerializer::setDateTimeFormat($specificTimeFormat);
            }

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->recordActionFeedbackWithHttpInfo(...array_values($requestParams));

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
     * Test case for recordActionFeedback_413
     */
    public function testRecordActionFeedback413()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for recordActionFeedback_401
     */
    public function testRecordActionFeedback401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for recordActionFeedback_403
     */
    public function testRecordActionFeedback403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for recordActionFeedback_404
     */
    public function testRecordActionFeedback404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for recordActionFeedback_415
     */
    public function testRecordActionFeedback415()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for recordActionFeedback_429
     */
    public function testRecordActionFeedback429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for recordActionFeedback_500
     */
    public function testRecordActionFeedback500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for recordActionFeedback_503
     */
    public function testRecordActionFeedback503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
}
