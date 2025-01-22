<?php
/**
 * SubmitFulfillmentOrderStatusUpdateRequestTest
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
use OpenAPI\Client\Model\fulfillment\outbound\SubmitFulfillmentOrderStatusUpdateRequest;

/**
 * SubmitFulfillmentOrderStatusUpdateRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body schema for the &#x60;submitFulfillmentOrderStatusUpdate&#x60; operation.
 * @package     OpenAPI\Client
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
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\outbound\FulfillmentOrderStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setFulfillmentOrderStatus($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentOrderStatus());
    }
}
