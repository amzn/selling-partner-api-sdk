<?php
/**
 * GetPurchaseOrderResponseTest
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
use OpenAPI\Client\Model\vendor\orders\GetPurchaseOrderResponse;

/**
 * GetPurchaseOrderResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getPurchaseOrder operation.
 * @package     OpenAPI\Client
 */
class GetPurchaseOrderResponseTest extends TestCase
{

    private GetPurchaseOrderResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetPurchaseOrderResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetPurchaseOrderResponse"
     */
    public function testGetPurchaseOrderResponse()
    {
        $this->assertInstanceOf(GetPurchaseOrderResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\orders\Order();
        
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
