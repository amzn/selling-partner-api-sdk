<?php
/**
 * SummaryTest
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
use SpApi\Model\pricing\v0\Summary;

/**
 * SummaryTest Class Doc Comment
 *
 * @category    Class
 * @description Contains price information about the product, including the LowestPrices and BuyBoxPrices, the ListPrice, the SuggestedLowerPricePlusShipping, and NumberOfOffers and NumberOfBuyBoxEligibleOffers.
 * @package     SpApi
 */
class SummaryTest extends TestCase
{

    private Summary $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Summary();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Summary"
     */
    public function testSummary()
    {
        $this->assertInstanceOf(Summary::class, $this->model);
    }

    /**
     * Test attribute "total_offer_count"
     */
    public function testPropertyTotalOfferCount()
    {
        $testValue = 123;
        
        $this->model->setTotalOfferCount($testValue);
        $this->assertEquals($testValue, $this->model->getTotalOfferCount());
    }

    /**
     * Test attribute "number_of_offers"
     */
    public function testPropertyNumberOfOffers()
    {
        $testValue = [];
        
        $this->model->setNumberOfOffers($testValue);
        $this->assertEquals($testValue, $this->model->getNumberOfOffers());
    }

    /**
     * Test attribute "lowest_prices"
     */
    public function testPropertyLowestPrices()
    {
        $testValue = [];
        
        $this->model->setLowestPrices($testValue);
        $this->assertEquals($testValue, $this->model->getLowestPrices());
    }

    /**
     * Test attribute "buy_box_prices"
     */
    public function testPropertyBuyBoxPrices()
    {
        $testValue = [];
        
        $this->model->setBuyBoxPrices($testValue);
        $this->assertEquals($testValue, $this->model->getBuyBoxPrices());
    }

    /**
     * Test attribute "list_price"
     */
    public function testPropertyListPrice()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\MoneyType();
        
        $this->model->setListPrice($testValue);
        $this->assertEquals($testValue, $this->model->getListPrice());
    }

    /**
     * Test attribute "competitive_price_threshold"
     */
    public function testPropertyCompetitivePriceThreshold()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\MoneyType();
        
        $this->model->setCompetitivePriceThreshold($testValue);
        $this->assertEquals($testValue, $this->model->getCompetitivePriceThreshold());
    }

    /**
     * Test attribute "suggested_lower_price_plus_shipping"
     */
    public function testPropertySuggestedLowerPricePlusShipping()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\MoneyType();
        
        $this->model->setSuggestedLowerPricePlusShipping($testValue);
        $this->assertEquals($testValue, $this->model->getSuggestedLowerPricePlusShipping());
    }

    /**
     * Test attribute "sales_rankings"
     */
    public function testPropertySalesRankings()
    {
        $testValue = [];
        
        $this->model->setSalesRankings($testValue);
        $this->assertEquals($testValue, $this->model->getSalesRankings());
    }

    /**
     * Test attribute "buy_box_eligible_offers"
     */
    public function testPropertyBuyBoxEligibleOffers()
    {
        $testValue = [];
        
        $this->model->setBuyBoxEligibleOffers($testValue);
        $this->assertEquals($testValue, $this->model->getBuyBoxEligibleOffers());
    }

    /**
     * Test attribute "offers_available_time"
     */
    public function testPropertyOffersAvailableTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setOffersAvailableTime($testValue);
        $this->assertEquals($testValue, $this->model->getOffersAvailableTime());
    }
}
