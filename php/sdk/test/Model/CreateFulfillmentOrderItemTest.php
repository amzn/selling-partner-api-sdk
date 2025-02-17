<?php
/**
 * CreateFulfillmentOrderItemTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\CreateFulfillmentOrderItem;

/**
 * CreateFulfillmentOrderItemTest Class Doc Comment
 *
 * @category    Class
 * @description Item information for creating a fulfillment order.
 * @package     SpApi
 */
class CreateFulfillmentOrderItemTest extends TestCase
{

    private CreateFulfillmentOrderItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreateFulfillmentOrderItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreateFulfillmentOrderItem"
     */
    public function testCreateFulfillmentOrderItem()
    {
        $this->assertInstanceOf(CreateFulfillmentOrderItem::class, $this->model);
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
     * Test attribute "per_unit_declared_value"
     */
    public function testPropertyPerUnitDeclaredValue()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\Money();
        
        $this->model->setPerUnitDeclaredValue($testValue);
        $this->assertEquals($testValue, $this->model->getPerUnitDeclaredValue());
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
}
