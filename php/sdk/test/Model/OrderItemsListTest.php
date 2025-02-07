<?php
/**
 * OrderItemsListTest
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
use OpenAPI\Client\Model\orders\v0\OrderItemsList;

/**
 * OrderItemsListTest Class Doc Comment
 *
 * @category    Class
 * @description The order items list along with the order ID.
 * @package     OpenAPI\Client
 */
class OrderItemsListTest extends TestCase
{

    private OrderItemsList $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderItemsList();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderItemsList"
     */
    public function testOrderItemsList()
    {
        $this->assertInstanceOf(OrderItemsList::class, $this->model);
    }

    /**
     * Test attribute "order_items"
     */
    public function testPropertyOrderItems()
    {
        $testValue = [];
        
        $this->model->setOrderItems($testValue);
        $this->assertEquals($testValue, $this->model->getOrderItems());
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

    /**
     * Test attribute "amazon_order_id"
     */
    public function testPropertyAmazonOrderId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonOrderId());
    }
}
