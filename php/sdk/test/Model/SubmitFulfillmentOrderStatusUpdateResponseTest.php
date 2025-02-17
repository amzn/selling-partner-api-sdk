<?php
/**
 * SubmitFulfillmentOrderStatusUpdateResponseTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\SubmitFulfillmentOrderStatusUpdateResponse;

/**
 * SubmitFulfillmentOrderStatusUpdateResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;SubmitFulfillmentOrderStatusUpdate&#x60; operation.
 * @package     SpApi
 */
class SubmitFulfillmentOrderStatusUpdateResponseTest extends TestCase
{

    private SubmitFulfillmentOrderStatusUpdateResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubmitFulfillmentOrderStatusUpdateResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubmitFulfillmentOrderStatusUpdateResponse"
     */
    public function testSubmitFulfillmentOrderStatusUpdateResponse()
    {
        $this->assertInstanceOf(SubmitFulfillmentOrderStatusUpdateResponse::class, $this->model);
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
