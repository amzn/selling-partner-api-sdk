<?php
/**
 * PostContentDocumentRequestTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\aplusContent\v2020_11_01\PostContentDocumentRequest;

/**
 * PostContentDocumentRequestTest Class Doc Comment
 *
 * @category    Class
 * @description PostContentDocumentRequest
 * @package     OpenAPI\Client
 */
class PostContentDocumentRequestTest extends TestCase
{

    private PostContentDocumentRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PostContentDocumentRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PostContentDocumentRequest"
     */
    public function testPostContentDocumentRequest()
    {
        $this->assertInstanceOf(PostContentDocumentRequest::class, $this->model);
    }

    /**
     * Test attribute "content_document"
     */
    public function testPropertyContentDocument()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\v2020_11_01\ContentDocument();
        
        $this->model->setContentDocument($testValue);
        $this->assertEquals($testValue, $this->model->getContentDocument());
    }
}
