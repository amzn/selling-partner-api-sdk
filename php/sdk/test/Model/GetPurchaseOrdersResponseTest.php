<?php
/**
 * GetPurchaseOrdersResponseTest
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
use OpenAPI\Client\Model\vendorOrders\GetPurchaseOrdersResponse;

/**
 * GetPurchaseOrdersResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getPurchaseOrders operation.
 * @package     OpenAPI\Client
 */
class GetPurchaseOrdersResponseTest extends TestCase
{

    private GetPurchaseOrdersResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetPurchaseOrdersResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetPurchaseOrdersResponse"
     */
    public function testGetPurchaseOrdersResponse()
    {
        $this->assertInstanceOf(GetPurchaseOrdersResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendorOrders\OrderList();
        
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
