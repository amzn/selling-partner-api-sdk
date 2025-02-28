<?php
/**
 * CompetitivePriceTypeTest
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
use SpApi\Model\pricing\v0\CompetitivePriceType;

/**
 * CompetitivePriceTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Schema for competitive pricing information
 * @package     SpApi
 */
class CompetitivePriceTypeTest extends TestCase
{

    private CompetitivePriceType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CompetitivePriceType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CompetitivePriceType"
     */
    public function testCompetitivePriceType()
    {
        $this->assertInstanceOf(CompetitivePriceType::class, $this->model);
    }

    /**
     * Test attribute "competitive_price_id"
     */
    public function testPropertyCompetitivePriceId()
    {
        $testValue = 'test';
        
        $this->model->setCompetitivePriceId($testValue);
        $this->assertEquals($testValue, $this->model->getCompetitivePriceId());
    }

    /**
     * Test attribute "price"
     */
    public function testPropertyPrice()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\PriceType();
        
        $this->model->setPrice($testValue);
        $this->assertEquals($testValue, $this->model->getPrice());
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
     * Test attribute "subcondition"
     */
    public function testPropertySubcondition()
    {
        $testValue = 'test';
        
        $this->model->setSubcondition($testValue);
        $this->assertEquals($testValue, $this->model->getSubcondition());
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
     * Test attribute "seller_id"
     */
    public function testPropertySellerId()
    {
        $testValue = 'test';
        
        $this->model->setSellerId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerId());
    }

    /**
     * Test attribute "belongs_to_requester"
     */
    public function testPropertyBelongsToRequester()
    {
        $testValue = true;
        
        $this->model->setBelongsToRequester($testValue);
        $this->assertEquals($testValue, $this->model->getBelongsToRequester());
    }
}
