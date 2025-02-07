<?php
/**
 * GetOrderBuyerInfoResponseTest
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
use OpenAPI\Client\Model\orders\v0\GetOrderBuyerInfoResponse;

/**
 * GetOrderBuyerInfoResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getOrderBuyerInfo&#x60; operation.
 * @package     OpenAPI\Client
 */
class GetOrderBuyerInfoResponseTest extends TestCase
{

    private GetOrderBuyerInfoResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetOrderBuyerInfoResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetOrderBuyerInfoResponse"
     */
    public function testGetOrderBuyerInfoResponse()
    {
        $this->assertInstanceOf(GetOrderBuyerInfoResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\orders\v0\OrderBuyerInfo();
        
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
