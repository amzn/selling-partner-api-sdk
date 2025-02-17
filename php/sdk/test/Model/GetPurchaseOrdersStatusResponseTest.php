<?php
/**
 * GetPurchaseOrdersStatusResponseTest
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
use SpApi\Model\vendor\orders\v1\GetPurchaseOrdersStatusResponse;

/**
 * GetPurchaseOrdersStatusResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getPurchaseOrdersStatus operation.
 * @package     SpApi
 */
class GetPurchaseOrdersStatusResponseTest extends TestCase
{

    private GetPurchaseOrdersStatusResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetPurchaseOrdersStatusResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetPurchaseOrdersStatusResponse"
     */
    public function testGetPurchaseOrdersStatusResponse()
    {
        $this->assertInstanceOf(GetPurchaseOrdersStatusResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\vendor\orders\v1\OrderListStatus();
        
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
