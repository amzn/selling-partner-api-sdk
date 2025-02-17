<?php
/**
 * GetFulfillmentOrderResultTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\GetFulfillmentOrderResult;

/**
 * GetFulfillmentOrderResultTest Class Doc Comment
 *
 * @category    Class
 * @description The request for the getFulfillmentOrder operation.
 * @package     SpApi
 */
class GetFulfillmentOrderResultTest extends TestCase
{

    private GetFulfillmentOrderResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetFulfillmentOrderResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetFulfillmentOrderResult"
     */
    public function testGetFulfillmentOrderResult()
    {
        $this->assertInstanceOf(GetFulfillmentOrderResult::class, $this->model);
    }

    /**
     * Test attribute "fulfillment_order"
     */
    public function testPropertyFulfillmentOrder()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\FulfillmentOrder();
        
        $this->model->setFulfillmentOrder($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentOrder());
    }

    /**
     * Test attribute "fulfillment_order_items"
     */
    public function testPropertyFulfillmentOrderItems()
    {
        $testValue = [];
        
        $this->model->setFulfillmentOrderItems($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentOrderItems());
    }

    /**
     * Test attribute "fulfillment_shipments"
     */
    public function testPropertyFulfillmentShipments()
    {
        $testValue = [];
        
        $this->model->setFulfillmentShipments($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentShipments());
    }

    /**
     * Test attribute "return_items"
     */
    public function testPropertyReturnItems()
    {
        $testValue = [];
        
        $this->model->setReturnItems($testValue);
        $this->assertEquals($testValue, $this->model->getReturnItems());
    }

    /**
     * Test attribute "return_authorizations"
     */
    public function testPropertyReturnAuthorizations()
    {
        $testValue = [];
        
        $this->model->setReturnAuthorizations($testValue);
        $this->assertEquals($testValue, $this->model->getReturnAuthorizations());
    }

    /**
     * Test attribute "payment_information"
     */
    public function testPropertyPaymentInformation()
    {
        $testValue = [];
        
        $this->model->setPaymentInformation($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentInformation());
    }
}
