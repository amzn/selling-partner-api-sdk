<?php
/**
 * RemovalShipmentEventTest
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
use SpApi\Model\finances\v0\RemovalShipmentEvent;

/**
 * RemovalShipmentEventTest Class Doc Comment
 *
 * @category    Class
 * @description A removal shipment event for a removal order.
 * @package     SpApi
 */
class RemovalShipmentEventTest extends TestCase
{

    private RemovalShipmentEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RemovalShipmentEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RemovalShipmentEvent"
     */
    public function testRemovalShipmentEvent()
    {
        $this->assertInstanceOf(RemovalShipmentEvent::class, $this->model);
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
     * Test attribute "store_name"
     */
    public function testPropertyStoreName()
    {
        $testValue = 'test';
        
        $this->model->setStoreName($testValue);
        $this->assertEquals($testValue, $this->model->getStoreName());
    }

    /**
     * Test attribute "removal_shipment_item_list"
     */
    public function testPropertyRemovalShipmentItemList()
    {
        $testValue = [];
        
        $this->model->setRemovalShipmentItemList($testValue);
        $this->assertEquals($testValue, $this->model->getRemovalShipmentItemList());
    }
}
