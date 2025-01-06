<?php
/**
 * OrderListTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\vendorDfOrders\OrderList;

/**
 * OrderListTest Class Doc Comment
 *
 * @category    Class
 * @description A list of purchase orders.
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
        
        $testValue = new \OpenAPI\Client\Model\vendorDfOrders\Pagination();
        
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
