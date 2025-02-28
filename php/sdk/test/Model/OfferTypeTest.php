<?php
/**
 * OfferTypeTest
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
use SpApi\Model\pricing\v0\OfferType;

/**
 * OfferTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Schema for an individual offer.
 * @package     SpApi
 */
class OfferTypeTest extends TestCase
{

    private OfferType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OfferType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OfferType"
     */
    public function testOfferType()
    {
        $this->assertInstanceOf(OfferType::class, $this->model);
    }

    /**
     * Test attribute "offer_type"
     */
    public function testPropertyOfferType()
    {
        $enumInstance = new \SpApi\Model\pricing\v0\OfferCustomerType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setOfferType($testValue);
        $this->assertEquals($testValue, $this->model->getOfferType());
    }

    /**
     * Test attribute "buying_price"
     */
    public function testPropertyBuyingPrice()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\PriceType();
        
        $this->model->setBuyingPrice($testValue);
        $this->assertEquals($testValue, $this->model->getBuyingPrice());
    }

    /**
     * Test attribute "regular_price"
     */
    public function testPropertyRegularPrice()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\MoneyType();
        
        $this->model->setRegularPrice($testValue);
        $this->assertEquals($testValue, $this->model->getRegularPrice());
    }

    /**
     * Test attribute "business_price"
     */
    public function testPropertyBusinessPrice()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\MoneyType();
        
        $this->model->setBusinessPrice($testValue);
        $this->assertEquals($testValue, $this->model->getBusinessPrice());
    }

    /**
     * Test attribute "quantity_discount_prices"
     */
    public function testPropertyQuantityDiscountPrices()
    {
        $testValue = [];
        
        $this->model->setQuantityDiscountPrices($testValue);
        $this->assertEquals($testValue, $this->model->getQuantityDiscountPrices());
    }

    /**
     * Test attribute "fulfillment_channel"
     */
    public function testPropertyFulfillmentChannel()
    {
        $testValue = 'test';
        
        $this->model->setFulfillmentChannel($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentChannel());
    }

    /**
     * Test attribute "item_condition"
     */
    public function testPropertyItemCondition()
    {
        $testValue = 'test';
        
        $this->model->setItemCondition($testValue);
        $this->assertEquals($testValue, $this->model->getItemCondition());
    }

    /**
     * Test attribute "item_sub_condition"
     */
    public function testPropertyItemSubCondition()
    {
        $testValue = 'test';
        
        $this->model->setItemSubCondition($testValue);
        $this->assertEquals($testValue, $this->model->getItemSubCondition());
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
}
