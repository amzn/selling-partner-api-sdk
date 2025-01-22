<?php
/**
 * FulfillmentTimeTest
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
use OpenAPI\Client\Model\services\FulfillmentTime;

/**
 * FulfillmentTimeTest Class Doc Comment
 *
 * @category    Class
 * @description Input for fulfillment time details
 * @package     OpenAPI\Client
 */
class FulfillmentTimeTest extends TestCase
{

    private FulfillmentTime $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FulfillmentTime();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FulfillmentTime"
     */
    public function testFulfillmentTime()
    {
        $this->assertInstanceOf(FulfillmentTime::class, $this->model);
    }

    /**
     * Test attribute "start_time"
     */
    public function testPropertyStartTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setStartTime($testValue);
        $this->assertEquals($testValue, $this->model->getStartTime());
    }

    /**
     * Test attribute "end_time"
     */
    public function testPropertyEndTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEndTime($testValue);
        $this->assertEquals($testValue, $this->model->getEndTime());
    }
}
