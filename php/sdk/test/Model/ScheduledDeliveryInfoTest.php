<?php
/**
 * ScheduledDeliveryInfoTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\ScheduledDeliveryInfo;

/**
 * ScheduledDeliveryInfoTest Class Doc Comment
 *
 * @category    Class
 * @description Delivery information for a scheduled delivery. This is only available in the JP marketplace.
 * @package     SpApi
 */
class ScheduledDeliveryInfoTest extends TestCase
{

    private ScheduledDeliveryInfo $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ScheduledDeliveryInfo();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ScheduledDeliveryInfo"
     */
    public function testScheduledDeliveryInfo()
    {
        $this->assertInstanceOf(ScheduledDeliveryInfo::class, $this->model);
    }

    /**
     * Test attribute "delivery_time_zone"
     */
    public function testPropertyDeliveryTimeZone()
    {
        $testValue = 'test';
        
        $this->model->setDeliveryTimeZone($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryTimeZone());
    }

    /**
     * Test attribute "delivery_windows"
     */
    public function testPropertyDeliveryWindows()
    {
        $testValue = [];
        
        $this->model->setDeliveryWindows($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryWindows());
    }
}
