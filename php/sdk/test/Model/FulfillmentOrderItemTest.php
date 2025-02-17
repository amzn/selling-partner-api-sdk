<?php
/**
 * FulfillmentOrderItemTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\FulfillmentOrderItem;

/**
 * FulfillmentOrderItemTest Class Doc Comment
 *
 * @category    Class
 * @description Item information for a fulfillment order.
 * @package     SpApi
 */
class FulfillmentOrderItemTest extends TestCase
{

    private FulfillmentOrderItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FulfillmentOrderItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FulfillmentOrderItem"
     */
    public function testFulfillmentOrderItem()
    {
        $this->assertInstanceOf(FulfillmentOrderItem::class, $this->model);
    }

    /**
     * Test attribute "seller_sku"
     */
    public function testPropertySellerSku()
    {
        $testValue = 'test';
        
        $this->model->setSellerSku($testValue);
        $this->assertEquals($testValue, $this->model->getSellerSku());
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
     * Test attribute "quantity"
     */
    public function testPropertyQuantity()
    {
        $testValue = 123;
        
        $this->model->setQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getQuantity());
    }

    /**
     * Test attribute "gift_message"
     */
    public function testPropertyGiftMessage()
    {
        $testValue = 'test';
        
        $this->model->setGiftMessage($testValue);
        $this->assertEquals($testValue, $this->model->getGiftMessage());
    }

    /**
     * Test attribute "displayable_comment"
     */
    public function testPropertyDisplayableComment()
    {
        $testValue = 'test';
        
        $this->model->setDisplayableComment($testValue);
        $this->assertEquals($testValue, $this->model->getDisplayableComment());
    }

    /**
     * Test attribute "fulfillment_network_sku"
     */
    public function testPropertyFulfillmentNetworkSku()
    {
        $testValue = 'test';
        
        $this->model->setFulfillmentNetworkSku($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentNetworkSku());
    }

    /**
     * Test attribute "order_item_disposition"
     */
    public function testPropertyOrderItemDisposition()
    {
        $testValue = 'test';
        
        $this->model->setOrderItemDisposition($testValue);
        $this->assertEquals($testValue, $this->model->getOrderItemDisposition());
    }

    /**
     * Test attribute "cancelled_quantity"
     */
    public function testPropertyCancelledQuantity()
    {
        $testValue = 123;
        
        $this->model->setCancelledQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getCancelledQuantity());
    }

    /**
     * Test attribute "unfulfillable_quantity"
     */
    public function testPropertyUnfulfillableQuantity()
    {
        $testValue = 123;
        
        $this->model->setUnfulfillableQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getUnfulfillableQuantity());
    }

    /**
     * Test attribute "estimated_ship_date"
     */
    public function testPropertyEstimatedShipDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEstimatedShipDate($testValue);
        $this->assertEquals($testValue, $this->model->getEstimatedShipDate());
    }

    /**
     * Test attribute "estimated_arrival_date"
     */
    public function testPropertyEstimatedArrivalDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEstimatedArrivalDate($testValue);
        $this->assertEquals($testValue, $this->model->getEstimatedArrivalDate());
    }

    /**
     * Test attribute "per_unit_price"
     */
    public function testPropertyPerUnitPrice()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\Money();
        
        $this->model->setPerUnitPrice($testValue);
        $this->assertEquals($testValue, $this->model->getPerUnitPrice());
    }

    /**
     * Test attribute "per_unit_tax"
     */
    public function testPropertyPerUnitTax()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\Money();
        
        $this->model->setPerUnitTax($testValue);
        $this->assertEquals($testValue, $this->model->getPerUnitTax());
    }

    /**
     * Test attribute "per_unit_declared_value"
     */
    public function testPropertyPerUnitDeclaredValue()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\Money();
        
        $this->model->setPerUnitDeclaredValue($testValue);
        $this->assertEquals($testValue, $this->model->getPerUnitDeclaredValue());
    }
}
