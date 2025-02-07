<?php
/**
 * FulfillmentAvailabilityTest
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
use OpenAPI\Client\Model\listings\items\v2021_08_01\FulfillmentAvailability;

/**
 * FulfillmentAvailabilityTest Class Doc Comment
 *
 * @category    Class
 * @description The fulfillment availability details for the listings item.
 * @package     OpenAPI\Client
 */
class FulfillmentAvailabilityTest extends TestCase
{

    private FulfillmentAvailability $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FulfillmentAvailability();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FulfillmentAvailability"
     */
    public function testFulfillmentAvailability()
    {
        $this->assertInstanceOf(FulfillmentAvailability::class, $this->model);
    }

    /**
     * Test attribute "fulfillment_channel_code"
     */
    public function testPropertyFulfillmentChannelCode()
    {
        $testValue = 'test';
        
        $this->model->setFulfillmentChannelCode($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentChannelCode());
    }

    /**
     * Test attribute "quantity"
     */
    public function testPropertyQuantity()
    {
        $testValue = 123;
        
        $this->model->setQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getQuantity());
    }
}
