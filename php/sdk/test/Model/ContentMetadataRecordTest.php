<?php
/**
 * ContentMetadataRecordTest
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
use OpenAPI\Client\Model\apluscontent\ContentMetadataRecord;

/**
 * ContentMetadataRecordTest Class Doc Comment
 *
 * @category    Class
 * @description The metadata for an A+ Content document, with additional information for content management.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\apluscontent\ContentMetadata();
        
        $this->model->setContentMetadata($testValue);
        $this->assertEquals($testValue, $this->model->getContentMetadata());
    }
}
