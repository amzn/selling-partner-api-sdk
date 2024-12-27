<?php
/**
 * PostContentDocumentAsinRelationsRequestTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\apluscontent\PostContentDocumentAsinRelationsRequest;

/**
 * PostContentDocumentAsinRelationsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description PostContentDocumentAsinRelationsRequest
 * @package     OpenAPI\Client
 */
class PostContentDocumentAsinRelationsRequestTest extends TestCase
{

    private PostContentDocumentAsinRelationsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PostContentDocumentAsinRelationsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PostContentDocumentAsinRelationsRequest"
     */
    public function testPostContentDocumentAsinRelationsRequest()
    {
        $this->assertInstanceOf(PostContentDocumentAsinRelationsRequest::class, $this->model);
    }

    /**
     * Test attribute "asin_set"
     */
    public function testPropertyAsinSet()
    {
        $testValue = [];
        
        $this->model->setAsinSet($testValue);
        $this->assertEquals($testValue, $this->model->getAsinSet());
    }
}
