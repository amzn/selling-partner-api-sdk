<?php
/**
 * OfferProgramConfigurationPromotionsTest
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
use SpApi\Model\replenishment\v2022_11_07\OfferProgramConfigurationPromotions;

/**
 * OfferProgramConfigurationPromotionsTest Class Doc Comment
 *
 * @category    Class
 * @description An object which represents all promotions applied to an offer.
 * @package     SpApi
 */
class OfferProgramConfigurationPromotionsTest extends TestCase
{

    private OfferProgramConfigurationPromotions $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OfferProgramConfigurationPromotions();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OfferProgramConfigurationPromotions"
     */
    public function testOfferProgramConfigurationPromotions()
    {
        $this->assertInstanceOf(OfferProgramConfigurationPromotions::class, $this->model);
    }

    /**
     * Test attribute "selling_partner_funded_base_discount"
     */
    public function testPropertySellingPartnerFundedBaseDiscount()
    {
        
        $testValue = new \SpApi\Model\replenishment\v2022_11_07\OfferProgramConfigurationPromotionsDiscountFunding();
        
        $this->model->setSellingPartnerFundedBaseDiscount($testValue);
        $this->assertEquals($testValue, $this->model->getSellingPartnerFundedBaseDiscount());
    }

    /**
     * Test attribute "selling_partner_funded_tiered_discount"
     */
    public function testPropertySellingPartnerFundedTieredDiscount()
    {
        
        $testValue = new \SpApi\Model\replenishment\v2022_11_07\OfferProgramConfigurationPromotionsDiscountFunding();
        
        $this->model->setSellingPartnerFundedTieredDiscount($testValue);
        $this->assertEquals($testValue, $this->model->getSellingPartnerFundedTieredDiscount());
    }

    /**
     * Test attribute "amazon_funded_base_discount"
     */
    public function testPropertyAmazonFundedBaseDiscount()
    {
        
        $testValue = new \SpApi\Model\replenishment\v2022_11_07\OfferProgramConfigurationPromotionsDiscountFunding();
        
        $this->model->setAmazonFundedBaseDiscount($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonFundedBaseDiscount());
    }

    /**
     * Test attribute "amazon_funded_tiered_discount"
     */
    public function testPropertyAmazonFundedTieredDiscount()
    {
        
        $testValue = new \SpApi\Model\replenishment\v2022_11_07\OfferProgramConfigurationPromotionsDiscountFunding();
        
        $this->model->setAmazonFundedTieredDiscount($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonFundedTieredDiscount());
    }
}
