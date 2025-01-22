<?php
/**
 * PromiseTest
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
use OpenAPI\Client\Model\shipping\Promise;

/**
 * PromiseTest Class Doc Comment
 *
 * @category    Class
 * @description The time windows promised for pickup and delivery events.
 * @package     OpenAPI\Client
 */
class PromiseTest extends TestCase
{

    private Promise $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Promise();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Promise"
     */
    public function testPromise()
    {
        $this->assertInstanceOf(Promise::class, $this->model);
    }

    /**
     * Test attribute "delivery_window"
     */
    public function testPropertyDeliveryWindow()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\TimeWindow();
        
        $this->model->setDeliveryWindow($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryWindow());
    }

    /**
     * Test attribute "pickup_window"
     */
    public function testPropertyPickupWindow()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\TimeWindow();
        
        $this->model->setPickupWindow($testValue);
        $this->assertEquals($testValue, $this->model->getPickupWindow());
    }
}
