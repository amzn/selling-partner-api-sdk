<?php
/**
 * OfferTypeTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\pricingV0\OfferType;

/**
 * OfferTypeTest Class Doc Comment
 *
 * @category    Class
 * @description OfferType
 * @package     OpenAPI\Client
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
        $enumInstance = new \OpenAPI\Client\Model\pricingV0\OfferCustomerType();
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
        
        $testValue = new \OpenAPI\Client\Model\pricingV0\PriceType();
        
        $this->model->setBuyingPrice($testValue);
        $this->assertEquals($testValue, $this->model->getBuyingPrice());
    }

    /**
     * Test attribute "regular_price"
     */
    public function testPropertyRegularPrice()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricingV0\MoneyType();
        
        $this->model->setRegularPrice($testValue);
        $this->assertEquals($testValue, $this->model->getRegularPrice());
    }

    /**
     * Test attribute "business_price"
     */
    public function testPropertyBusinessPrice()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricingV0\MoneyType();
        
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
