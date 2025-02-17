<?php
/**
 * ContentMetadataRecordTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\aplusContent\v2020_11_01\ContentMetadataRecord;

/**
 * ContentMetadataRecordTest Class Doc Comment
 *
 * @category    Class
 * @description The metadata for an A+ Content document, with additional information for content management.
 * @package     SpApi
 */
class ContentMetadataRecordTest extends TestCase
{

    private ContentMetadataRecord $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContentMetadataRecord();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContentMetadataRecord"
     */
    public function testContentMetadataRecord()
    {
        $this->assertInstanceOf(ContentMetadataRecord::class, $this->model);
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
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\ContentMetadata();
        
        $this->model->setContentMetadata($testValue);
        $this->assertEquals($testValue, $this->model->getContentMetadata());
    }
}
