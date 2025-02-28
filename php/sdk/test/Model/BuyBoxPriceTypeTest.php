<?php
/**
 * BuyBoxPriceTypeTest
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
use SpApi\Model\pricing\v0\BuyBoxPriceType;

/**
 * BuyBoxPriceTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Schema for an individual buybox price.
 * @package     SpApi
 */
class BuyBoxPriceTypeTest extends TestCase
{

    private BuyBoxPriceType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BuyBoxPriceType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BuyBoxPriceType"
     */
    public function testBuyBoxPriceType()
    {
        $this->assertInstanceOf(BuyBoxPriceType::class, $this->model);
    }

    /**
     * Test attribute "condition"
     */
    public function testPropertyCondition()
    {
        $testValue = 'test';
        
        $this->model->setCondition($testValue);
        $this->assertEquals($testValue, $this->model->getCondition());
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
     * Test attribute "quantity_tier"
     */
    public function testPropertyQuantityTier()
    {
        $testValue = 123;
        
        $this->model->setQuantityTier($testValue);
        $this->assertEquals($testValue, $this->model->getQuantityTier());
    }

    /**
     * Test attribute "quantity_discount_type"
     */
    public function testPropertyQuantityDiscountType()
    {
        $enumInstance = new \SpApi\Model\pricing\v0\QuantityDiscountType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setQuantityDiscountType($testValue);
        $this->assertEquals($testValue, $this->model->getQuantityDiscountType());
    }

    /**
     * Test attribute "landed_price"
     */
    public function testPropertyLandedPrice()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\MoneyType();
        
        $this->model->setLandedPrice($testValue);
        $this->assertEquals($testValue, $this->model->getLandedPrice());
    }

    /**
     * Test attribute "listing_price"
     */
    public function testPropertyListingPrice()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\MoneyType();
        
        $this->model->setListingPrice($testValue);
        $this->assertEquals($testValue, $this->model->getListingPrice());
    }

    /**
     * Test attribute "shipping"
     */
    public function testPropertyShipping()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\MoneyType();
        
        $this->model->setShipping($testValue);
        $this->assertEquals($testValue, $this->model->getShipping());
    }

    /**
     * Test attribute "points"
     */
    public function testPropertyPoints()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\Points();
        
        $this->model->setPoints($testValue);
        $this->assertEquals($testValue, $this->model->getPoints());
    }

    /**
     * Test attribute "seller_id"
     */
    public function testPropertySellerId()
    {
        $testValue = 'test';
        
        $this->model->setSellerId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerId());
    }
}
