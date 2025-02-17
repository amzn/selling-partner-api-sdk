<?php
/**
 * OrderItemStatusOrderedQuantityTest
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
use SpApi\Model\vendor\orders\v1\OrderItemStatusOrderedQuantity;

/**
 * OrderItemStatusOrderedQuantityTest Class Doc Comment
 *
 * @category    Class
 * @description Ordered quantity information.
 * @package     SpApi
 */
class OrderItemStatusOrderedQuantityTest extends TestCase
{

    private OrderItemStatusOrderedQuantity $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderItemStatusOrderedQuantity();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderItemStatusOrderedQuantity"
     */
    public function testOrderItemStatusOrderedQuantity()
    {
        $this->assertInstanceOf(OrderItemStatusOrderedQuantity::class, $this->model);
    }

    /**
     * Test attribute "ordered_quantity"
     */
    public function testPropertyOrderedQuantity()
    {
        
        $testValue = new \SpApi\Model\vendor\orders\v1\ItemQuantity();
        
        $this->model->setOrderedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getOrderedQuantity());
    }

    /**
     * Test attribute "ordered_quantity_details"
     */
    public function testPropertyOrderedQuantityDetails()
    {
        $testValue = [];
        
        $this->model->setOrderedQuantityDetails($testValue);
        $this->assertEquals($testValue, $this->model->getOrderedQuantityDetails());
    }
}
