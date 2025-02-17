<?php
/**
 * OrdersListTest
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
use SpApi\Model\orders\v0\OrdersList;

/**
 * OrdersListTest Class Doc Comment
 *
 * @category    Class
 * @description A list of orders along with additional information to make subsequent API calls.
 * @package     SpApi
 */
class OrdersListTest extends TestCase
{

    private OrdersList $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrdersList();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrdersList"
     */
    public function testOrdersList()
    {
        $this->assertInstanceOf(OrdersList::class, $this->model);
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
     * Test attribute "last_updated_before"
     */
    public function testPropertyLastUpdatedBefore()
    {
        $testValue = 'test';
        
        $this->model->setLastUpdatedBefore($testValue);
        $this->assertEquals($testValue, $this->model->getLastUpdatedBefore());
    }

    /**
     * Test attribute "created_before"
     */
    public function testPropertyCreatedBefore()
    {
        $testValue = 'test';
        
        $this->model->setCreatedBefore($testValue);
        $this->assertEquals($testValue, $this->model->getCreatedBefore());
    }
}
