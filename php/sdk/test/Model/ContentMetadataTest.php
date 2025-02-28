<?php
/**
 * ContentMetadataTest
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
use SpApi\Model\aplusContent\v2020_11_01\ContentMetadata;

/**
 * ContentMetadataTest Class Doc Comment
 *
 * @category    Class
 * @description The A+ Content document&#39;s metadata.
 * @package     SpApi
 */
class ContentMetadataTest extends TestCase
{

    private ContentMetadata $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContentMetadata();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContentMetadata"
     */
    public function testContentMetadata()
    {
        $this->assertInstanceOf(ContentMetadata::class, $this->model);
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
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
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $enumInstance = new \SpApi\Model\aplusContent\v2020_11_01\ContentStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "badge_set"
     */
    public function testPropertyBadgeSet()
    {
        $testValue = [];
        
        $this->model->setBadgeSet($testValue);
        $this->assertEquals($testValue, $this->model->getBadgeSet());
    }

    /**
     * Test attribute "update_time"
     */
    public function testPropertyUpdateTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setUpdateTime($testValue);
        $this->assertEquals($testValue, $this->model->getUpdateTime());
    }
}
