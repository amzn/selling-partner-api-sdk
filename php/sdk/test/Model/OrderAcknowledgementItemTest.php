<?php
/**
 * OrderAcknowledgementItemTest
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
use OpenAPI\Client\Model\vendor\orders\v1\OrderAcknowledgementItem;

/**
 * OrderAcknowledgementItemTest Class Doc Comment
 *
 * @category    Class
 * @description Details of the item being acknowledged.
 * @package     OpenAPI\Client
 */
class OrderAcknowledgementItemTest extends TestCase
{

    private OrderAcknowledgementItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderAcknowledgementItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderAcknowledgementItem"
     */
    public function testOrderAcknowledgementItem()
    {
        $this->assertInstanceOf(OrderAcknowledgementItem::class, $this->model);
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
     * Test attribute "amazon_product_identifier"
     */
    public function testPropertyAmazonProductIdentifier()
    {
        $testValue = 'test';
        
        $this->model->setAmazonProductIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonProductIdentifier());
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
     * Test attribute "ordered_quantity"
     */
    public function testPropertyOrderedQuantity()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\orders\v1\ItemQuantity();
        
        $this->model->setOrderedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getOrderedQuantity());
    }

    /**
     * Test attribute "net_cost"
     */
    public function testPropertyNetCost()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\orders\v1\Money();
        
        $this->model->setNetCost($testValue);
        $this->assertEquals($testValue, $this->model->getNetCost());
    }

    /**
     * Test attribute "list_price"
     */
    public function testPropertyListPrice()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\orders\v1\Money();
        
        $this->model->setListPrice($testValue);
        $this->assertEquals($testValue, $this->model->getListPrice());
    }

    /**
     * Test attribute "discount_multiplier"
     */
    public function testPropertyDiscountMultiplier()
    {
        $testValue = 'test';
        
        $this->model->setDiscountMultiplier($testValue);
        $this->assertEquals($testValue, $this->model->getDiscountMultiplier());
    }

    /**
     * Test attribute "item_acknowledgements"
     */
    public function testPropertyItemAcknowledgements()
    {
        $testValue = [];
        
        $this->model->setItemAcknowledgements($testValue);
        $this->assertEquals($testValue, $this->model->getItemAcknowledgements());
    }
}
