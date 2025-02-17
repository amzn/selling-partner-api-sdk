<?php
/**
 * PublishRecordTest
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
use SpApi\Model\aplusContent\v2020_11_01\PublishRecord;

/**
 * PublishRecordTest Class Doc Comment
 *
 * @category    Class
 * @description The full context for an A+ Content publishing event.
 * @package     SpApi
 */
class PublishRecordTest extends TestCase
{

    private PublishRecord $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PublishRecord();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PublishRecord"
     */
    public function testPublishRecord()
    {
        $this->assertInstanceOf(PublishRecord::class, $this->model);
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }

    /**
     * Test attribute "locale"
     */
    public function testPropertyLocale()
    {
        $testValue = 'test';
        
        $this->model->setLocale($testValue);
        $this->assertEquals($testValue, $this->model->getLocale());
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }

    /**
     * Test attribute "content_type"
     */
    public function testPropertyContentType()
    {
        $enumInstance = new \SpApi\Model\aplusContent\v2020_11_01\ContentType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setContentType($testValue);
        $this->assertEquals($testValue, $this->model->getContentType());
    }

    /**
     * Test attribute "content_sub_type"
     */
    public function testPropertyContentSubType()
    {
        $testValue = 'test';
        
        $this->model->setContentSubType($testValue);
        $this->assertEquals($testValue, $this->model->getContentSubType());
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
