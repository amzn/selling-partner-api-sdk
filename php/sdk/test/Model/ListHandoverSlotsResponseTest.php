<?php
/**
 * ListHandoverSlotsResponseTest
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
use OpenAPI\Client\Model\easyship\ListHandoverSlotsResponse;

/**
 * ListHandoverSlotsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;listHandoverSlots&#x60; operation.
 * @package     OpenAPI\Client
 */
class ListHandoverSlotsResponseTest extends TestCase
{

    private ListHandoverSlotsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListHandoverSlotsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListHandoverSlotsResponse"
     */
    public function testListHandoverSlotsResponse()
    {
        $this->assertInstanceOf(ListHandoverSlotsResponse::class, $this->model);
    }

    /**
     * Test attribute "amazon_order_id"
     */
    public function testPropertyAmazonOrderId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonOrderId());
    }

    /**
     * Test attribute "time_slots"
     */
    public function testPropertyTimeSlots()
    {
        $testValue = [];
        
        $this->model->setTimeSlots($testValue);
        $this->assertEquals($testValue, $this->model->getTimeSlots());
    }
}
