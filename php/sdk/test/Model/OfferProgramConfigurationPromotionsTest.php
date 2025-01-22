<?php
/**
 * OfferProgramConfigurationPromotionsTest
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
use OpenAPI\Client\Model\replenishment\OfferProgramConfigurationPromotions;

/**
 * OfferProgramConfigurationPromotionsTest Class Doc Comment
 *
 * @category    Class
 * @description An object which represents all promotions applied to an offer.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\replenishment\OfferProgramConfigurationPromotionsDiscountFunding();
        
        $this->model->setSellingPartnerFundedBaseDiscount($testValue);
        $this->assertEquals($testValue, $this->model->getSellingPartnerFundedBaseDiscount());
    }

    /**
     * Test attribute "selling_partner_funded_tiered_discount"
     */
    public function testPropertySellingPartnerFundedTieredDiscount()
    {
        
        $testValue = new \OpenAPI\Client\Model\replenishment\OfferProgramConfigurationPromotionsDiscountFunding();
        
        $this->model->setSellingPartnerFundedTieredDiscount($testValue);
        $this->assertEquals($testValue, $this->model->getSellingPartnerFundedTieredDiscount());
    }

    /**
     * Test attribute "amazon_funded_base_discount"
     */
    public function testPropertyAmazonFundedBaseDiscount()
    {
        
        $testValue = new \OpenAPI\Client\Model\replenishment\OfferProgramConfigurationPromotionsDiscountFunding();
        
        $this->model->setAmazonFundedBaseDiscount($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonFundedBaseDiscount());
    }

    /**
     * Test attribute "amazon_funded_tiered_discount"
     */
    public function testPropertyAmazonFundedTieredDiscount()
    {
        
        $testValue = new \OpenAPI\Client\Model\replenishment\OfferProgramConfigurationPromotionsDiscountFunding();
        
        $this->model->setAmazonFundedTieredDiscount($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonFundedTieredDiscount());
    }
}
