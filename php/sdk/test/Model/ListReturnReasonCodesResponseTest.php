<?php
/**
 * ListReturnReasonCodesResponseTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\ListReturnReasonCodesResponse;

/**
 * ListReturnReasonCodesResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;listReturnReasonCodes&#x60; operation.
 * @package     SpApi
 */
class ListReturnReasonCodesResponseTest extends TestCase
{

    private ListReturnReasonCodesResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListReturnReasonCodesResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListReturnReasonCodesResponse"
     */
    public function testListReturnReasonCodesResponse()
    {
        $this->assertInstanceOf(ListReturnReasonCodesResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\ListReturnReasonCodesResult();
        
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
