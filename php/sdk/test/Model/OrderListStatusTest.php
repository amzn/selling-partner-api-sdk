<?php
/**
 * OrderListStatusTest
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
use OpenAPI\Client\Model\vendor\orders\OrderListStatus;

/**
 * OrderListStatusTest Class Doc Comment
 *
 * @category    Class
 * @description A list of order statuses.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\vendor\orders\Pagination();
        
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
