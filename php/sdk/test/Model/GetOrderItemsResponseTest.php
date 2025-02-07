<?php
/**
 * GetOrderItemsResponseTest
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
use OpenAPI\Client\Model\orders\v0\GetOrderItemsResponse;

/**
 * GetOrderItemsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getOrderItems&#x60; operation.
 * @package     OpenAPI\Client
 */
class GetOrderItemsResponseTest extends TestCase
{

    private GetOrderItemsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetOrderItemsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetOrderItemsResponse"
     */
    public function testGetOrderItemsResponse()
    {
        $this->assertInstanceOf(GetOrderItemsResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\orders\v0\OrderItemsList();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
