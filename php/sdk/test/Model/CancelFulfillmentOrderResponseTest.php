<?php
/**
 * CancelFulfillmentOrderResponseTest
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
use OpenAPI\Client\Model\fulfillment\outbound\CancelFulfillmentOrderResponse;

/**
 * CancelFulfillmentOrderResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;cancelFulfillmentOrder&#x60; operation.
 * @package     OpenAPI\Client
 */
class CancelFulfillmentOrderResponseTest extends TestCase
{

    private CancelFulfillmentOrderResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CancelFulfillmentOrderResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CancelFulfillmentOrderResponse"
     */
    public function testCancelFulfillmentOrderResponse()
    {
        $this->assertInstanceOf(CancelFulfillmentOrderResponse::class, $this->model);
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
