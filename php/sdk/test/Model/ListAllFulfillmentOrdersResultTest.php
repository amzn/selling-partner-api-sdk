<?php
/**
 * ListAllFulfillmentOrdersResultTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\ListAllFulfillmentOrdersResult;

/**
 * ListAllFulfillmentOrdersResultTest Class Doc Comment
 *
 * @category    Class
 * @description The request for the listAllFulfillmentOrders operation.
 * @package     SpApi
 */
class ListAllFulfillmentOrdersResultTest extends TestCase
{

    private ListAllFulfillmentOrdersResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListAllFulfillmentOrdersResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListAllFulfillmentOrdersResult"
     */
    public function testListAllFulfillmentOrdersResult()
    {
        $this->assertInstanceOf(ListAllFulfillmentOrdersResult::class, $this->model);
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
     * Test attribute "fulfillment_orders"
     */
    public function testPropertyFulfillmentOrders()
    {
        $testValue = [];
        
        $this->model->setFulfillmentOrders($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentOrders());
    }
}
