<?php
/**
 * OrderListTest
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
use OpenAPI\Client\Model\vendor\orders\OrderList;

/**
 * OrderListTest Class Doc Comment
 *
 * @category    Class
 * @description A list of orders returned as response.
 * @package     OpenAPI\Client
 */
class OrderListTest extends TestCase
{

    private OrderList $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderList();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderList"
     */
    public function testOrderList()
    {
        $this->assertInstanceOf(OrderList::class, $this->model);
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\orders\Pagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }

    /**
     * Test attribute "orders"
     */
    public function testPropertyOrders()
    {
        $testValue = [];
        
        $this->model->setOrders($testValue);
        $this->assertEquals($testValue, $this->model->getOrders());
    }
}
