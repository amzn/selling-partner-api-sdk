<?php
/**
 * OrderItemStatusTest
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
use OpenAPI\Client\Model\vendor\orders\OrderItemStatus;

/**
 * OrderItemStatusTest Class Doc Comment
 *
 * @category    Class
 * @description Represents the current status of an order item, including acknowledgement and receiving details.
 * @package     OpenAPI\Client
 */
class OrderItemStatusTest extends TestCase
{

    private OrderItemStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderItemStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderItemStatus"
     */
    public function testOrderItemStatus()
    {
        $this->assertInstanceOf(OrderItemStatus::class, $this->model);
    }

    /**
     * Test attribute "item_sequence_number"
     */
    public function testPropertyItemSequenceNumber()
    {
        $testValue = 'test';
        
        $this->model->setItemSequenceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getItemSequenceNumber());
    }

    /**
     * Test attribute "buyer_product_identifier"
     */
    public function testPropertyBuyerProductIdentifier()
    {
        $testValue = 'test';
        
        $this->model->setBuyerProductIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerProductIdentifier());
    }

    /**
     * Test attribute "vendor_product_identifier"
     */
    public function testPropertyVendorProductIdentifier()
    {
        $testValue = 'test';
        
        $this->model->setVendorProductIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getVendorProductIdentifier());
    }

    /**
     * Test attribute "net_cost"
     */
    public function testPropertyNetCost()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\orders\Money();
        
        $this->model->setNetCost($testValue);
        $this->assertEquals($testValue, $this->model->getNetCost());
    }

    /**
     * Test attribute "list_price"
     */
    public function testPropertyListPrice()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\orders\Money();
        
        $this->model->setListPrice($testValue);
        $this->assertEquals($testValue, $this->model->getListPrice());
    }

    /**
     * Test attribute "ordered_quantity"
     */
    public function testPropertyOrderedQuantity()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\orders\OrderItemStatusOrderedQuantity();
        
        $this->model->setOrderedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getOrderedQuantity());
    }

    /**
     * Test attribute "acknowledgement_status"
     */
    public function testPropertyAcknowledgementStatus()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\orders\OrderItemStatusAcknowledgementStatus();
        
        $this->model->setAcknowledgementStatus($testValue);
        $this->assertEquals($testValue, $this->model->getAcknowledgementStatus());
    }

    /**
     * Test attribute "receiving_status"
     */
    public function testPropertyReceivingStatus()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\orders\OrderItemStatusReceivingStatus();
        
        $this->model->setReceivingStatus($testValue);
        $this->assertEquals($testValue, $this->model->getReceivingStatus());
    }
}
