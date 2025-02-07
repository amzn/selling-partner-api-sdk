<?php
/**
 * UploadsApiTest
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for Uploads
 *
 * The Uploads API lets you upload files that you can programmatically access using other Selling Partner APIs, such as the A+ Content API and the Messaging API.
 *
 * The version of the OpenAPI document: 2020-11-01
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
use OpenAPI\Client\Api\uploads\v2020_11_01\UploadsApi;
use OpenAPI\Client\ObjectSerializer;

/**
 * UploadsApiTest Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class UploadsApiTest extends BaseTestCase
{
    private UploadsApi $apiInstance;
    public function setUp(): void
    {
        parent::setUp();
        // Initialize parameter value specific to case
        $this->testHelper->setSpecificValue('UploadsApi', $this->getName());
        $this->apiInstance = new UploadsApi($this->config, null, null);
        // Change Time Format if it requires
        $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('UploadsApi');
        if ($specificTimeFormat) {
            ObjectSerializer::setDateTimeFormat($specificTimeFormat);
        }
    }

    /**
     * Test case for createUploadDestinationForResource_201
     */
    public function testCreateUploadDestinationForResource201()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testCreateUploadDestinationForResource201', 'UploadsApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('UploadsApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'createUploadDestinationForResource'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->createUploadDestinationForResourceWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(201, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 201);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for createUploadDestinationForResource_400
     */
    public function testCreateUploadDestinationForResource400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createUploadDestinationForResource_403
     */
    public function testCreateUploadDestinationForResource403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createUploadDestinationForResource_404
     */
    public function testCreateUploadDestinationForResource404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createUploadDestinationForResource_413
     */
    public function testCreateUploadDestinationForResource413()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createUploadDestinationForResource_415
     */
    public function testCreateUploadDestinationForResource415()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createUploadDestinationForResource_429
     */
    public function testCreateUploadDestinationForResource429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createUploadDestinationForResource_500
     */
    public function testCreateUploadDestinationForResource500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createUploadDestinationForResource_503
     */
    public function testCreateUploadDestinationForResource503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
}
