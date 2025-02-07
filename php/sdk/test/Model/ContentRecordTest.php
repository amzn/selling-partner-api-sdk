<?php
/**
 * ContentRecordTest
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
use OpenAPI\Client\Model\aplusContent\v2020_11_01\ContentRecord;

/**
 * ContentRecordTest Class Doc Comment
 *
 * @category    Class
 * @description A content document with additional information for content management.
 * @package     OpenAPI\Client
 */
class ContentRecordTest extends TestCase
{

    private ContentRecord $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContentRecord();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContentRecord"
     */
    public function testContentRecord()
    {
        $this->assertInstanceOf(ContentRecord::class, $this->model);
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

    /**
     * Test attribute "content_metadata"
     */
    public function testPropertyContentMetadata()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\v2020_11_01\ContentMetadata();
        
        $this->model->setContentMetadata($testValue);
        $this->assertEquals($testValue, $this->model->getContentMetadata());
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
