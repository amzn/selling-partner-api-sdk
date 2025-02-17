<?php
/**
 * ShipmentEventTest
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
use SpApi\Model\finances\v0\ShipmentEvent;

/**
 * ShipmentEventTest Class Doc Comment
 *
 * @category    Class
 * @description A shipment, refund, guarantee claim, or chargeback.
 * @package     SpApi
 */
class ShipmentEventTest extends TestCase
{

    private ShipmentEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentEvent"
     */
    public function testShipmentEvent()
    {
        $this->assertInstanceOf(ShipmentEvent::class, $this->model);
    }

    /**
     * Test attribute "amazon_order_id"
     */
    public function testPropertyAmazonOrderId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonOrderId());
    }

    /**
     * Test attribute "seller_order_id"
     */
    public function testPropertySellerOrderId()
    {
        $testValue = 'test';
        
        $this->model->setSellerOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerOrderId());
    }

    /**
     * Test attribute "marketplace_name"
     */
    public function testPropertyMarketplaceName()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceName($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceName());
    }

    /**
     * Test attribute "store_name"
     */
    public function testPropertyStoreName()
    {
        $testValue = 'test';
        
        $this->model->setStoreName($testValue);
        $this->assertEquals($testValue, $this->model->getStoreName());
    }

    /**
     * Test attribute "order_charge_list"
     */
    public function testPropertyOrderChargeList()
    {
        $testValue = [];
        
        $this->model->setOrderChargeList($testValue);
        $this->assertEquals($testValue, $this->model->getOrderChargeList());
    }

    /**
     * Test attribute "order_charge_adjustment_list"
     */
    public function testPropertyOrderChargeAdjustmentList()
    {
        $testValue = [];
        
        $this->model->setOrderChargeAdjustmentList($testValue);
        $this->assertEquals($testValue, $this->model->getOrderChargeAdjustmentList());
    }

    /**
     * Test attribute "shipment_fee_list"
     */
    public function testPropertyShipmentFeeList()
    {
        $testValue = [];
        
        $this->model->setShipmentFeeList($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentFeeList());
    }

    /**
     * Test attribute "shipment_fee_adjustment_list"
     */
    public function testPropertyShipmentFeeAdjustmentList()
    {
        $testValue = [];
        
        $this->model->setShipmentFeeAdjustmentList($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentFeeAdjustmentList());
    }

    /**
     * Test attribute "order_fee_list"
     */
    public function testPropertyOrderFeeList()
    {
        $testValue = [];
        
        $this->model->setOrderFeeList($testValue);
        $this->assertEquals($testValue, $this->model->getOrderFeeList());
    }

    /**
     * Test attribute "order_fee_adjustment_list"
     */
    public function testPropertyOrderFeeAdjustmentList()
    {
        $testValue = [];
        
        $this->model->setOrderFeeAdjustmentList($testValue);
        $this->assertEquals($testValue, $this->model->getOrderFeeAdjustmentList());
    }

    /**
     * Test attribute "direct_payment_list"
     */
    public function testPropertyDirectPaymentList()
    {
        $testValue = [];
        
        $this->model->setDirectPaymentList($testValue);
        $this->assertEquals($testValue, $this->model->getDirectPaymentList());
    }

    /**
     * Test attribute "posted_date"
     */
    public function testPropertyPostedDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPostedDate($testValue);
        $this->assertEquals($testValue, $this->model->getPostedDate());
    }

    /**
     * Test attribute "shipment_item_list"
     */
    public function testPropertyShipmentItemList()
    {
        $testValue = [];
        
        $this->model->setShipmentItemList($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentItemList());
    }

    /**
     * Test attribute "shipment_item_adjustment_list"
     */
    public function testPropertyShipmentItemAdjustmentList()
    {
        $testValue = [];
        
        $this->model->setShipmentItemAdjustmentList($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentItemAdjustmentList());
    }
}
