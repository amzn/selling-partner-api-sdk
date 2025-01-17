<?php
/**
 * AplusContentApiTest
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

/**
 * Selling Partner API for A+ Content Management
 *
 * With the A+ Content API, you can build applications that help selling partners add rich marketing content to their Amazon product detail pages. A+ content helps selling partners share their brand and product story, which helps buyers make informed purchasing decisions. Selling partners assemble content by choosing from content modules and adding images and text.
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
use OpenAPI\Client\Api\AplusContentApi;
use OpenAPI\Client\ObjectSerializer;

/**
 * AplusContentApiTest Class Doc Comment
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */
class AplusContentApiTest extends BaseTestCase
{
    private AplusContentApi $apiInstance;
    public function setUp(): void
    {
        parent::setUp();
        // Initialize parameter value specific to case
        $this->testHelper->setSpecificValue('AplusContentApi', $this->getName());
        $this->apiInstance = new AplusContentApi($this->config, null, null);
        // Change Time Format if it requires
        $specificTimeFormat = $this->testHelper->getDateTimeFormatForCase('AplusContentApi');
        if ($specificTimeFormat) {
            ObjectSerializer::setDateTimeFormat($specificTimeFormat);
        }
    }

    /**
     * Test case for createContentDocument_200
     */
    public function testCreateContentDocument200()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testCreateContentDocument200', 'AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'createContentDocument'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->createContentDocumentWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for createContentDocument_400
     */
    public function testCreateContentDocument400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createContentDocument_401
     */
    public function testCreateContentDocument401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createContentDocument_403
     */
    public function testCreateContentDocument403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createContentDocument_404
     */
    public function testCreateContentDocument404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createContentDocument_429
     */
    public function testCreateContentDocument429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createContentDocument_500
     */
    public function testCreateContentDocument500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for createContentDocument_503
     */
    public function testCreateContentDocument503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getContentDocument_200
     */
    public function testGetContentDocument200()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testGetContentDocument200', 'AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'getContentDocument'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->getContentDocumentWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for getContentDocument_400
     */
    public function testGetContentDocument400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getContentDocument_401
     */
    public function testGetContentDocument401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getContentDocument_403
     */
    public function testGetContentDocument403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getContentDocument_404
     */
    public function testGetContentDocument404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getContentDocument_410
     */
    public function testGetContentDocument410()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getContentDocument_429
     */
    public function testGetContentDocument429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getContentDocument_500
     */
    public function testGetContentDocument500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for getContentDocument_503
     */
    public function testGetContentDocument503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for listContentDocumentAsinRelations_200
     */
    public function testListContentDocumentAsinRelations200()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testListContentDocumentAsinRelations200', 'AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'listContentDocumentAsinRelations'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->listContentDocumentAsinRelationsWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for listContentDocumentAsinRelations_400
     */
    public function testListContentDocumentAsinRelations400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for listContentDocumentAsinRelations_401
     */
    public function testListContentDocumentAsinRelations401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for listContentDocumentAsinRelations_403
     */
    public function testListContentDocumentAsinRelations403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for listContentDocumentAsinRelations_404
     */
    public function testListContentDocumentAsinRelations404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for listContentDocumentAsinRelations_410
     */
    public function testListContentDocumentAsinRelations410()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for listContentDocumentAsinRelations_429
     */
    public function testListContentDocumentAsinRelations429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for listContentDocumentAsinRelations_500
     */
    public function testListContentDocumentAsinRelations500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for listContentDocumentAsinRelations_503
     */
    public function testListContentDocumentAsinRelations503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentApprovalSubmission_200
     */
    public function testPostContentDocumentApprovalSubmission200()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testPostContentDocumentApprovalSubmission200', 'AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'postContentDocumentApprovalSubmission'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->postContentDocumentApprovalSubmissionWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for postContentDocumentApprovalSubmission_400
     */
    public function testPostContentDocumentApprovalSubmission400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentApprovalSubmission_401
     */
    public function testPostContentDocumentApprovalSubmission401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentApprovalSubmission_403
     */
    public function testPostContentDocumentApprovalSubmission403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentApprovalSubmission_404
     */
    public function testPostContentDocumentApprovalSubmission404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentApprovalSubmission_410
     */
    public function testPostContentDocumentApprovalSubmission410()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentApprovalSubmission_429
     */
    public function testPostContentDocumentApprovalSubmission429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentApprovalSubmission_500
     */
    public function testPostContentDocumentApprovalSubmission500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentApprovalSubmission_503
     */
    public function testPostContentDocumentApprovalSubmission503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentAsinRelations_200
     */
    public function testPostContentDocumentAsinRelations200()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testPostContentDocumentAsinRelations200', 'AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'postContentDocumentAsinRelations'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->postContentDocumentAsinRelationsWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for postContentDocumentAsinRelations_400
     */
    public function testPostContentDocumentAsinRelations400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentAsinRelations_401
     */
    public function testPostContentDocumentAsinRelations401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentAsinRelations_403
     */
    public function testPostContentDocumentAsinRelations403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentAsinRelations_404
     */
    public function testPostContentDocumentAsinRelations404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentAsinRelations_410
     */
    public function testPostContentDocumentAsinRelations410()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentAsinRelations_429
     */
    public function testPostContentDocumentAsinRelations429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentAsinRelations_500
     */
    public function testPostContentDocumentAsinRelations500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentAsinRelations_503
     */
    public function testPostContentDocumentAsinRelations503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentSuspendSubmission_200
     */
    public function testPostContentDocumentSuspendSubmission200()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testPostContentDocumentSuspendSubmission200', 'AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'postContentDocumentSuspendSubmission'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->postContentDocumentSuspendSubmissionWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for postContentDocumentSuspendSubmission_400
     */
    public function testPostContentDocumentSuspendSubmission400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentSuspendSubmission_401
     */
    public function testPostContentDocumentSuspendSubmission401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentSuspendSubmission_403
     */
    public function testPostContentDocumentSuspendSubmission403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentSuspendSubmission_404
     */
    public function testPostContentDocumentSuspendSubmission404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentSuspendSubmission_410
     */
    public function testPostContentDocumentSuspendSubmission410()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentSuspendSubmission_429
     */
    public function testPostContentDocumentSuspendSubmission429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentSuspendSubmission_500
     */
    public function testPostContentDocumentSuspendSubmission500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for postContentDocumentSuspendSubmission_503
     */
    public function testPostContentDocumentSuspendSubmission503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for searchContentDocuments_200
     */
    public function testSearchContentDocuments200()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testSearchContentDocuments200', 'AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'searchContentDocuments'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->searchContentDocumentsWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for searchContentDocuments_400
     */
    public function testSearchContentDocuments400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for searchContentDocuments_401
     */
    public function testSearchContentDocuments401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for searchContentDocuments_403
     */
    public function testSearchContentDocuments403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for searchContentDocuments_404
     */
    public function testSearchContentDocuments404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for searchContentDocuments_410
     */
    public function testSearchContentDocuments410()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for searchContentDocuments_429
     */
    public function testSearchContentDocuments429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for searchContentDocuments_500
     */
    public function testSearchContentDocuments500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for searchContentDocuments_503
     */
    public function testSearchContentDocuments503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for searchContentPublishRecords_200
     */
    public function testSearchContentPublishRecords200()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testSearchContentPublishRecords200', 'AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'searchContentPublishRecords'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->searchContentPublishRecordsWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for searchContentPublishRecords_400
     */
    public function testSearchContentPublishRecords400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for searchContentPublishRecords_401
     */
    public function testSearchContentPublishRecords401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for searchContentPublishRecords_403
     */
    public function testSearchContentPublishRecords403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for searchContentPublishRecords_404
     */
    public function testSearchContentPublishRecords404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for searchContentPublishRecords_429
     */
    public function testSearchContentPublishRecords429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for searchContentPublishRecords_500
     */
    public function testSearchContentPublishRecords500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for searchContentPublishRecords_503
     */
    public function testSearchContentPublishRecords503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for updateContentDocument_200
     */
    public function testUpdateContentDocument200()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testUpdateContentDocument200', 'AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'updateContentDocument'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->updateContentDocumentWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for updateContentDocument_400
     */
    public function testUpdateContentDocument400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for updateContentDocument_401
     */
    public function testUpdateContentDocument401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for updateContentDocument_403
     */
    public function testUpdateContentDocument403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for updateContentDocument_404
     */
    public function testUpdateContentDocument404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for updateContentDocument_410
     */
    public function testUpdateContentDocument410()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for updateContentDocument_429
     */
    public function testUpdateContentDocument429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for updateContentDocument_500
     */
    public function testUpdateContentDocument500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for updateContentDocument_503
     */
    public function testUpdateContentDocument503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for validateContentDocumentAsinRelations_200
     */
    public function testValidateContentDocumentAsinRelations200()
    {
        // Dynamic sandbox case
        try {
            // Skip test if it is in the skip list
            if ($this->testHelper->shouldSkipTest('testValidateContentDocumentAsinRelations200', 'AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            // Skip entire class
            if ($this->testHelper->shouldSkipTest('AplusContentApi')) {
                $this->assertTrue(true);
                return;
            }
            $result = $this->testHelper->buildRequestForDynamicSandBox(
                $this->apiInstance,
                'validateContentDocumentAsinRelations'
            );
            $requestParams = $result;

            // Act: Call API
            list($response, $statusCode, $headers) =
                $this->apiInstance->validateContentDocumentAsinRelationsWithHttpInfo(...array_values($requestParams));

            // Assert the response code
            $this->assertHttpStatusCode(200, $statusCode);
        } catch (ApiException $e) {
            $this->handleApiException($e, 200);
        } catch (\ReflectionException $e) {
            $this->fail("Reflection exception: " . $e->getMessage());
        }
    }
    /**
     * Test case for validateContentDocumentAsinRelations_400
     */
    public function testValidateContentDocumentAsinRelations400()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for validateContentDocumentAsinRelations_401
     */
    public function testValidateContentDocumentAsinRelations401()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for validateContentDocumentAsinRelations_403
     */
    public function testValidateContentDocumentAsinRelations403()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for validateContentDocumentAsinRelations_404
     */
    public function testValidateContentDocumentAsinRelations404()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for validateContentDocumentAsinRelations_429
     */
    public function testValidateContentDocumentAsinRelations429()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for validateContentDocumentAsinRelations_500
     */
    public function testValidateContentDocumentAsinRelations500()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
    /**
     * Test case for validateContentDocumentAsinRelations_503
     */
    public function testValidateContentDocumentAsinRelations503()
    {
        // Skip this test
        $this->markTestSkipped('Skip test for this operation.');
    }
}
