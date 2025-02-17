<?php
/**
 * ReturnItemTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\ReturnItem;

/**
 * ReturnItemTest Class Doc Comment
 *
 * @category    Class
 * @description An item that Amazon accepted for return.
 * @package     SpApi
 */
class ReturnItemTest extends TestCase
{

    private ReturnItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ReturnItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ReturnItem"
     */
    public function testReturnItem()
    {
        $this->assertInstanceOf(ReturnItem::class, $this->model);
    }

    /**
     * Test attribute "seller_return_item_id"
     */
    public function testPropertySellerReturnItemId()
    {
        $testValue = 'test';
        
        $this->model->setSellerReturnItemId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerReturnItemId());
    }

    /**
     * Test attribute "seller_fulfillment_order_item_id"
     */
    public function testPropertySellerFulfillmentOrderItemId()
    {
        $testValue = 'test';
        
        $this->model->setSellerFulfillmentOrderItemId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerFulfillmentOrderItemId());
    }

    /**
     * Test attribute "amazon_shipment_id"
     */
    public function testPropertyAmazonShipmentId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonShipmentId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonShipmentId());
    }

    /**
     * Test attribute "seller_return_reason_code"
     */
    public function testPropertySellerReturnReasonCode()
    {
        $testValue = 'test';
        
        $this->model->setSellerReturnReasonCode($testValue);
        $this->assertEquals($testValue, $this->model->getSellerReturnReasonCode());
    }

    /**
     * Test attribute "return_comment"
     */
    public function testPropertyReturnComment()
    {
        $testValue = 'test';
        
        $this->model->setReturnComment($testValue);
        $this->assertEquals($testValue, $this->model->getReturnComment());
    }

    /**
     * Test attribute "amazon_return_reason_code"
     */
    public function testPropertyAmazonReturnReasonCode()
    {
        $testValue = 'test';
        
        $this->model->setAmazonReturnReasonCode($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonReturnReasonCode());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $enumInstance = new \SpApi\Model\fulfillment\outbound\v2020_07_01\FulfillmentReturnItemStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "status_changed_date"
     */
    public function testPropertyStatusChangedDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setStatusChangedDate($testValue);
        $this->assertEquals($testValue, $this->model->getStatusChangedDate());
    }

    /**
     * Test attribute "return_authorization_id"
     */
    public function testPropertyReturnAuthorizationId()
    {
        $testValue = 'test';
        
        $this->model->setReturnAuthorizationId($testValue);
        $this->assertEquals($testValue, $this->model->getReturnAuthorizationId());
    }

    /**
     * Test attribute "return_received_condition"
     */
    public function testPropertyReturnReceivedCondition()
    {
        $enumInstance = new \SpApi\Model\fulfillment\outbound\v2020_07_01\ReturnItemDisposition();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setReturnReceivedCondition($testValue);
        $this->assertEquals($testValue, $this->model->getReturnReceivedCondition());
    }

    /**
     * Test attribute "fulfillment_center_id"
     */
    public function testPropertyFulfillmentCenterId()
    {
        $testValue = 'test';
        
        $this->model->setFulfillmentCenterId($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentCenterId());
    }
}
