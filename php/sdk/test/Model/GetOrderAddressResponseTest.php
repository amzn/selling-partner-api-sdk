<?php
/**
 * GetOrderAddressResponseTest
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
use SpApi\Model\orders\v0\GetOrderAddressResponse;

/**
 * GetOrderAddressResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;getOrderAddress&#x60; operation.
 * @package     SpApi
 */
class GetOrderAddressResponseTest extends TestCase
{

    private GetOrderAddressResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetOrderAddressResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetOrderAddressResponse"
     */
    public function testGetOrderAddressResponse()
    {
        $this->assertInstanceOf(GetOrderAddressResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\orders\v0\OrderAddress();
        
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
