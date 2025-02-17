<?php
/**
 * RemovalShipmentAdjustmentEventTest
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
use SpApi\Model\finances\v0\RemovalShipmentAdjustmentEvent;

/**
 * RemovalShipmentAdjustmentEventTest Class Doc Comment
 *
 * @category    Class
 * @description A financial adjustment event for FBA liquidated inventory. A positive value indicates money owed to Amazon by the buyer (for example, when the charge was incorrectly calculated as less than it should be). A negative value indicates a full or partial refund owed to the buyer (for example, when the buyer receives damaged items or fewer items than ordered).
 * @package     SpApi
 */
class RemovalShipmentAdjustmentEventTest extends TestCase
{

    private RemovalShipmentAdjustmentEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RemovalShipmentAdjustmentEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RemovalShipmentAdjustmentEvent"
     */
    public function testRemovalShipmentAdjustmentEvent()
    {
        $this->assertInstanceOf(RemovalShipmentAdjustmentEvent::class, $this->model);
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
     * Test attribute "adjustment_event_id"
     */
    public function testPropertyAdjustmentEventId()
    {
        $testValue = 'test';
        
        $this->model->setAdjustmentEventId($testValue);
        $this->assertEquals($testValue, $this->model->getAdjustmentEventId());
    }

    /**
     * Test attribute "merchant_order_id"
     */
    public function testPropertyMerchantOrderId()
    {
        $testValue = 'test';
        
        $this->model->setMerchantOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getMerchantOrderId());
    }

    /**
     * Test attribute "order_id"
     */
    public function testPropertyOrderId()
    {
        $testValue = 'test';
        
        $this->model->setOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getOrderId());
    }

    /**
     * Test attribute "transaction_type"
     */
    public function testPropertyTransactionType()
    {
        $testValue = 'test';
        
        $this->model->setTransactionType($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionType());
    }

    /**
     * Test attribute "removal_shipment_item_adjustment_list"
     */
    public function testPropertyRemovalShipmentItemAdjustmentList()
    {
        $testValue = [];
        
        $this->model->setRemovalShipmentItemAdjustmentList($testValue);
        $this->assertEquals($testValue, $this->model->getRemovalShipmentItemAdjustmentList());
    }
}
