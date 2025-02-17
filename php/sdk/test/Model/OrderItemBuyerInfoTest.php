<?php
/**
 * OrderItemBuyerInfoTest
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
use SpApi\Model\orders\v0\OrderItemBuyerInfo;

/**
 * OrderItemBuyerInfoTest Class Doc Comment
 *
 * @category    Class
 * @description A single order item&#39;s buyer information.
 * @package     SpApi
 */
class OrderItemBuyerInfoTest extends TestCase
{

    private OrderItemBuyerInfo $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OrderItemBuyerInfo();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OrderItemBuyerInfo"
     */
    public function testOrderItemBuyerInfo()
    {
        $this->assertInstanceOf(OrderItemBuyerInfo::class, $this->model);
    }

    /**
     * Test attribute "order_item_id"
     */
    public function testPropertyOrderItemId()
    {
        $testValue = 'test';
        
        $this->model->setOrderItemId($testValue);
        $this->assertEquals($testValue, $this->model->getOrderItemId());
    }

    /**
     * Test attribute "buyer_customized_info"
     */
    public function testPropertyBuyerCustomizedInfo()
    {
        
        $testValue = new \SpApi\Model\orders\v0\BuyerCustomizedInfoDetail();
        
        $this->model->setBuyerCustomizedInfo($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerCustomizedInfo());
    }

    /**
     * Test attribute "gift_wrap_price"
     */
    public function testPropertyGiftWrapPrice()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Money();
        
        $this->model->setGiftWrapPrice($testValue);
        $this->assertEquals($testValue, $this->model->getGiftWrapPrice());
    }

    /**
     * Test attribute "gift_wrap_tax"
     */
    public function testPropertyGiftWrapTax()
    {
        
        $testValue = new \SpApi\Model\orders\v0\Money();
        
        $this->model->setGiftWrapTax($testValue);
        $this->assertEquals($testValue, $this->model->getGiftWrapTax());
    }

    /**
     * Test attribute "gift_message_text"
     */
    public function testPropertyGiftMessageText()
    {
        $testValue = 'test';
        
        $this->model->setGiftMessageText($testValue);
        $this->assertEquals($testValue, $this->model->getGiftMessageText());
    }

    /**
     * Test attribute "gift_wrap_level"
     */
    public function testPropertyGiftWrapLevel()
    {
        $testValue = 'test';
        
        $this->model->setGiftWrapLevel($testValue);
        $this->assertEquals($testValue, $this->model->getGiftWrapLevel());
    }
}
