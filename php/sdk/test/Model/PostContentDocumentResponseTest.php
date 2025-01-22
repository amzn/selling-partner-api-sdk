<?php
/**
 * PostContentDocumentResponseTest
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
use OpenAPI\Client\Model\aplusContent\PostContentDocumentResponse;

/**
 * PostContentDocumentResponseTest Class Doc Comment
 *
 * @category    Class
 * @description PostContentDocumentResponse
 * @package     OpenAPI\Client
 */
class PostContentDocumentResponseTest extends TestCase
{

    private PostContentDocumentResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PostContentDocumentResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PostContentDocumentResponse"
     */
    public function testPostContentDocumentResponse()
    {
        $this->assertInstanceOf(PostContentDocumentResponse::class, $this->model);
    }

    /**
     * Test attribute "warnings"
     */
    public function testPropertyWarnings()
    {
        $testValue = [];
        
        $this->model->setWarnings($testValue);
        $this->assertEquals($testValue, $this->model->getWarnings());
    }

    /**
     * Test attribute "content_reference_key"
     */
    public function testPropertyContentReferenceKey()
    {
        $testValue = 'test';
        
        $this->model->setContentReferenceKey($testValue);
        $this->assertEquals($testValue, $this->model->getContentReferenceKey());
    }
}
