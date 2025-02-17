<?php
/**
 * SubmitFulfillmentOrderStatusUpdateRequestTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\SubmitFulfillmentOrderStatusUpdateRequest;

/**
 * SubmitFulfillmentOrderStatusUpdateRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body schema for the &#x60;submitFulfillmentOrderStatusUpdate&#x60; operation.
 * @package     SpApi
 */
class SubmitFulfillmentOrderStatusUpdateRequestTest extends TestCase
{

    private SubmitFulfillmentOrderStatusUpdateRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubmitFulfillmentOrderStatusUpdateRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubmitFulfillmentOrderStatusUpdateRequest"
     */
    public function testSubmitFulfillmentOrderStatusUpdateRequest()
    {
        $this->assertInstanceOf(SubmitFulfillmentOrderStatusUpdateRequest::class, $this->model);
    }

    /**
     * Test attribute "fulfillment_order_status"
     */
    public function testPropertyFulfillmentOrderStatus()
    {
        $enumInstance = new \SpApi\Model\fulfillment\outbound\v2020_07_01\FulfillmentOrderStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setFulfillmentOrderStatus($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentOrderStatus());
    }
}
