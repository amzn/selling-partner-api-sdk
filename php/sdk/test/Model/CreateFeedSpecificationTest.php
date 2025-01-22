<?php
/**
 * CreateFeedSpecificationTest
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
use OpenAPI\Client\Model\feeds\CreateFeedSpecification;

/**
 * CreateFeedSpecificationTest Class Doc Comment
 *
 * @category    Class
 * @description Information required to create the feed.
 * @package     OpenAPI\Client
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
