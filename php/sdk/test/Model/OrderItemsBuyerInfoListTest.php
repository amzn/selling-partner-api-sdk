<?php
/**
 * OrderItemsBuyerInfoListTest
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
use SpApi\Model\orders\v0\OrderItemsBuyerInfoList;

/**
 * OrderItemsBuyerInfoListTest Class Doc Comment
 *
 * @category    Class
 * @description A single order item&#39;s buyer information list with the order ID.
 * @package     SpApi
 */
class OrderItemsBuyerInfoListTest extends TestCase
{

    private OrderItemsBuyerInfoList $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderItemsBuyerInfoList();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderItemsBuyerInfoList"
     */
    public function testOrderItemsBuyerInfoList()
    {
        $this->assertInstanceOf(OrderItemsBuyerInfoList::class, $this->model);
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
