<?php
/**
 * OrderItemStatusOrderedQuantityTest
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
use OpenAPI\Client\Model\vendor\orders\OrderItemStatusOrderedQuantity;

/**
 * OrderItemStatusOrderedQuantityTest Class Doc Comment
 *
 * @category    Class
 * @description Ordered quantity information.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\vendor\orders\ItemQuantity();
        
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
