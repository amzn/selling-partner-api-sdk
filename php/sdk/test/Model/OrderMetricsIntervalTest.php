<?php
/**
 * OrderMetricsIntervalTest
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
use SpApi\Model\sales\v1\OrderMetricsInterval;

/**
 * OrderMetricsIntervalTest Class Doc Comment
 *
 * @category    Class
 * @description Contains order metrics.
 * @package     SpApi
 */
class OrderMetricsIntervalTest extends TestCase
{

    private OrderMetricsInterval $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderMetricsInterval();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderMetricsInterval"
     */
    public function testOrderMetricsInterval()
    {
        $this->assertInstanceOf(OrderMetricsInterval::class, $this->model);
    }

    /**
     * Test attribute "interval"
     */
    public function testPropertyInterval()
    {
        $testValue = 'test';
        
        $this->model->setInterval($testValue);
        $this->assertEquals($testValue, $this->model->getInterval());
    }

    /**
     * Test attribute "unit_count"
     */
    public function testPropertyUnitCount()
    {
        $testValue = 123;
        
        $this->model->setUnitCount($testValue);
        $this->assertEquals($testValue, $this->model->getUnitCount());
    }

    /**
     * Test attribute "order_item_count"
     */
    public function testPropertyOrderItemCount()
    {
        $testValue = 123;
        
        $this->model->setOrderItemCount($testValue);
        $this->assertEquals($testValue, $this->model->getOrderItemCount());
    }

    /**
     * Test attribute "order_count"
     */
    public function testPropertyOrderCount()
    {
        $testValue = 123;
        
        $this->model->setOrderCount($testValue);
        $this->assertEquals($testValue, $this->model->getOrderCount());
    }

    /**
     * Test attribute "average_unit_price"
     */
    public function testPropertyAverageUnitPrice()
    {
        
        $testValue = new \SpApi\Model\sales\v1\Money();
        
        $this->model->setAverageUnitPrice($testValue);
        $this->assertEquals($testValue, $this->model->getAverageUnitPrice());
    }

    /**
     * Test attribute "total_sales"
     */
    public function testPropertyTotalSales()
    {
        
        $testValue = new \SpApi\Model\sales\v1\Money();
        
        $this->model->setTotalSales($testValue);
        $this->assertEquals($testValue, $this->model->getTotalSales());
    }
}
