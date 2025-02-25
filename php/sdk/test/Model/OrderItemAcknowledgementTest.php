<?php
/**
 * OrderItemAcknowledgementTest
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
use SpApi\Model\vendor\df\orders\v2021_12_28\OrderItemAcknowledgement;

/**
 * OrderItemAcknowledgementTest Class Doc Comment
 *
 * @category    Class
 * @description Details of an individual item within the order being acknowledged.
 * @package     SpApi
 */
class OrderItemAcknowledgementTest extends TestCase
{

    private OrderItemAcknowledgement $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderItemAcknowledgement();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderItemAcknowledgement"
     */
    public function testOrderItemAcknowledgement()
    {
        $this->assertInstanceOf(OrderItemAcknowledgement::class, $this->model);
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
     * Test attribute "acknowledged_quantity"
     */
    public function testPropertyAcknowledgedQuantity()
    {
        
        $testValue = new \SpApi\Model\vendor\df\orders\v2021_12_28\ItemQuantity();
        
        $this->model->setAcknowledgedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getAcknowledgedQuantity());
    }
}
