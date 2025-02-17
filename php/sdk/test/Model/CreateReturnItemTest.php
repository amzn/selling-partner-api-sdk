<?php
/**
 * CreateReturnItemTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\CreateReturnItem;

/**
 * CreateReturnItemTest Class Doc Comment
 *
 * @category    Class
 * @description An item that Amazon accepted for return.
 * @package     SpApi
 */
class CreateReturnItemTest extends TestCase
{

    private CreateReturnItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateReturnItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateReturnItem"
     */
    public function testCreateReturnItem()
    {
        $this->assertInstanceOf(CreateReturnItem::class, $this->model);
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
     * Test attribute "return_reason_code"
     */
    public function testPropertyReturnReasonCode()
    {
        $testValue = 'test';
        
        $this->model->setReturnReasonCode($testValue);
        $this->assertEquals($testValue, $this->model->getReturnReasonCode());
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
}
