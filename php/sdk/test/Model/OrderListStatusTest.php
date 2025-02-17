<?php
/**
 * OrderListStatusTest
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
use SpApi\Model\vendor\orders\v1\OrderListStatus;

/**
 * OrderListStatusTest Class Doc Comment
 *
 * @category    Class
 * @description A list of order statuses.
 * @package     SpApi
 */
class OrderListStatusTest extends TestCase
{

    private OrderListStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderListStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderListStatus"
     */
    public function testOrderListStatus()
    {
        $this->assertInstanceOf(OrderListStatus::class, $this->model);
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \SpApi\Model\vendor\orders\v1\Pagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }

    /**
     * Test attribute "orders_status"
     */
    public function testPropertyOrdersStatus()
    {
        $testValue = [];
        
        $this->model->setOrdersStatus($testValue);
        $this->assertEquals($testValue, $this->model->getOrdersStatus());
    }
}
