<?php
/**
 * GetFeedsResponseTest
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
use SpApi\Model\feeds\v2021_06_30\GetFeedsResponse;

/**
 * GetFeedsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Response schema.
 * @package     SpApi
 */
class GetFeedsResponseTest extends TestCase
{

    private GetFeedsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetFeedsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetFeedsResponse"
     */
    public function testGetFeedsResponse()
    {
        $this->assertInstanceOf(GetFeedsResponse::class, $this->model);
    }

    /**
     * Test attribute "feeds"
     */
    public function testPropertyFeeds()
    {
        $testValue = [];
        
        $this->model->setFeeds($testValue);
        $this->assertEquals($testValue, $this->model->getFeeds());
    }

    /**
     * Test attribute "next_token"
     */
    public function testPropertyNextToken()
    {
        $testValue = 'test';
        
        $this->model->setNextToken($testValue);
        $this->assertEquals($testValue, $this->model->getNextToken());
    }
}
