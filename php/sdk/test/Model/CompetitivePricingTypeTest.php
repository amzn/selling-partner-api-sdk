<?php
/**
 * CompetitivePricingTypeTest
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
use OpenAPI\Client\Model\pricing\v0\CompetitivePricingType;

/**
 * CompetitivePricingTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Competitive pricing information for the item.
 * @package     OpenAPI\Client
 */
class CompetitivePricingTypeTest extends TestCase
{

    private CompetitivePricingType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CompetitivePricingType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CompetitivePricingType"
     */
    public function testCompetitivePricingType()
    {
        $this->assertInstanceOf(CompetitivePricingType::class, $this->model);
    }

    /**
     * Test attribute "competitive_prices"
     */
    public function testPropertyCompetitivePrices()
    {
        $testValue = [];
        
        $this->model->setCompetitivePrices($testValue);
        $this->assertEquals($testValue, $this->model->getCompetitivePrices());
    }

    /**
     * Test attribute "number_of_offer_listings"
     */
    public function testPropertyNumberOfOfferListings()
    {
        $testValue = [];
        
        $this->model->setNumberOfOfferListings($testValue);
        $this->assertEquals($testValue, $this->model->getNumberOfOfferListings());
    }

    /**
     * Test attribute "trade_in_value"
     */
    public function testPropertyTradeInValue()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v0\MoneyType();
        
        $this->model->setTradeInValue($testValue);
        $this->assertEquals($testValue, $this->model->getTradeInValue());
    }
}
