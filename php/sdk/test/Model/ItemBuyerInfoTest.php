<?php
/**
 * ItemBuyerInfoTest
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
use SpApi\Model\orders\v0\ItemBuyerInfo;

/**
 * ItemBuyerInfoTest Class Doc Comment
 *
 * @category    Class
 * @description A single item&#39;s buyer information.
 * @package     SpApi
 */
class ItemBuyerInfoTest extends TestCase
{

    private ItemBuyerInfo $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemBuyerInfo();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemBuyerInfo"
     */
    public function testItemBuyerInfo()
    {
        $this->assertInstanceOf(ItemBuyerInfo::class, $this->model);
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
