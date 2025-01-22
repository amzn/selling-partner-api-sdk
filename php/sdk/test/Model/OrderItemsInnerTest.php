<?php
/**
 * OrderItemsInnerTest
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
use OpenAPI\Client\Model\orders\OrderItemsInner;

/**
 * OrderItemsInnerTest Class Doc Comment
 *
 * @category    Class
 * @description OrderItemsInner
 * @package     OpenAPI\Client
 */
class OrderItemsInnerTest extends TestCase
{

    private OrderItemsInner $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderItemsInner();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderItemsInner"
     */
    public function testOrderItemsInner()
    {
        $this->assertInstanceOf(OrderItemsInner::class, $this->model);
    }

    /**
     * Test attribute "order_item_id"
     */
    public function testPropertyOrderItemId()
    {
        $testValue = 'test';
        
        $this->model->setOrderItemId($testValue);
        $this->assertEquals($testValue, $this->model->getOrderItemId());
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
