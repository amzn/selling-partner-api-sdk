<?php
/**
 * CreateFeedResponseTest
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
use OpenAPI\Client\Model\feeds\CreateFeedResponse;

/**
 * CreateFeedResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Response schema.
 * @package     OpenAPI\Client
 */
class CreateFeedResponseTest extends TestCase
{

    private CreateFeedResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateFeedResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateFeedResponse"
     */
    public function testCreateFeedResponse()
    {
        $this->assertInstanceOf(CreateFeedResponse::class, $this->model);
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
}
