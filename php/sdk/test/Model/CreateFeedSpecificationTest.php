<?php
/**
 * CreateFeedSpecificationTest
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
use SpApi\Model\feeds\v2021_06_30\CreateFeedSpecification;

/**
 * CreateFeedSpecificationTest Class Doc Comment
 *
 * @category    Class
 * @description Information required to create the feed.
 * @package     SpApi
 */
class CreateFeedSpecificationTest extends TestCase
{

    private CreateFeedSpecification $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateFeedSpecification();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateFeedSpecification"
     */
    public function testCreateFeedSpecification()
    {
        $this->assertInstanceOf(CreateFeedSpecification::class, $this->model);
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
     * Test attribute "input_feed_document_id"
     */
    public function testPropertyInputFeedDocumentId()
    {
        $testValue = 'test';
        
        $this->model->setInputFeedDocumentId($testValue);
        $this->assertEquals($testValue, $this->model->getInputFeedDocumentId());
    }

    /**
     * Test attribute "feed_options"
     */
    public function testPropertyFeedOptions()
    {
        $testValue = array();
        
        $this->model->setFeedOptions($testValue);
        $this->assertEquals($testValue, $this->model->getFeedOptions());
    }
}
