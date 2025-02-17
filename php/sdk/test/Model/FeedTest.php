<?php
/**
 * FeedTest
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
use SpApi\Model\feeds\v2021_06_30\Feed;

/**
 * FeedTest Class Doc Comment
 *
 * @category    Class
 * @description Detailed information about the feed.
 * @package     SpApi
 */
class FeedTest extends TestCase
{

    private Feed $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Feed();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Feed"
     */
    public function testFeed()
    {
        $this->assertInstanceOf(Feed::class, $this->model);
    }

    /**
     * Test attribute "feed_id"
     */
    public function testPropertyFeedId()
    {
        $testValue = 'test';
        
        $this->model->setFeedId($testValue);
        $this->assertEquals($testValue, $this->model->getFeedId());
    }

    /**
     * Test attribute "feed_type"
     */
    public function testPropertyFeedType()
    {
        $testValue = 'test';
        
        $this->model->setFeedType($testValue);
        $this->assertEquals($testValue, $this->model->getFeedType());
    }

    /**
     * Test attribute "marketplace_ids"
     */
    public function testPropertyMarketplaceIds()
    {
        $testValue = [];
        
        $this->model->setMarketplaceIds($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceIds());
    }

    /**
     * Test attribute "created_time"
     */
    public function testPropertyCreatedTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setCreatedTime($testValue);
        $this->assertEquals($testValue, $this->model->getCreatedTime());
    }

    /**
     * Test attribute "processing_status"
     */
    public function testPropertyProcessingStatus()
    {
        $enumInstance = new Feed();
        $allowedValues = $enumInstance->getProcessingStatusAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setProcessingStatus($testValue);
        $this->assertEquals($testValue, $this->model->getProcessingStatus());
    }

    /**
     * Test attribute "processing_start_time"
     */
    public function testPropertyProcessingStartTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setProcessingStartTime($testValue);
        $this->assertEquals($testValue, $this->model->getProcessingStartTime());
    }

    /**
     * Test attribute "processing_end_time"
     */
    public function testPropertyProcessingEndTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setProcessingEndTime($testValue);
        $this->assertEquals($testValue, $this->model->getProcessingEndTime());
    }

    /**
     * Test attribute "result_feed_document_id"
     */
    public function testPropertyResultFeedDocumentId()
    {
        $testValue = 'test';
        
        $this->model->setResultFeedDocumentId($testValue);
        $this->assertEquals($testValue, $this->model->getResultFeedDocumentId());
    }
}
