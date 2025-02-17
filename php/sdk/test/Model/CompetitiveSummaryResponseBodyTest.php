<?php
/**
 * CompetitiveSummaryResponseBodyTest
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
use SpApi\Model\pricing\v2022_05_01\CompetitiveSummaryResponseBody;

/**
 * CompetitiveSummaryResponseBodyTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;competitiveSummaryResponse&#x60; body for a requested ASIN and &#x60;marketplaceId&#x60;.
 * @package     SpApi
 */
class CompetitiveSummaryResponseBodyTest extends TestCase
{

    private CompetitiveSummaryResponseBody $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CompetitiveSummaryResponseBody();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CompetitiveSummaryResponseBody"
     */
    public function testCompetitiveSummaryResponseBody()
    {
        $this->assertInstanceOf(CompetitiveSummaryResponseBody::class, $this->model);
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }

    /**
     * Test attribute "featured_buying_options"
     */
    public function testPropertyFeaturedBuyingOptions()
    {
        $testValue = [];
        
        $this->model->setFeaturedBuyingOptions($testValue);
        $this->assertEquals($testValue, $this->model->getFeaturedBuyingOptions());
    }

    /**
     * Test attribute "lowest_priced_offers"
     */
    public function testPropertyLowestPricedOffers()
    {
        $testValue = [];
        
        $this->model->setLowestPricedOffers($testValue);
        $this->assertEquals($testValue, $this->model->getLowestPricedOffers());
    }

    /**
     * Test attribute "reference_prices"
     */
    public function testPropertyReferencePrices()
    {
        $testValue = [];
        
        $this->model->setReferencePrices($testValue);
        $this->assertEquals($testValue, $this->model->getReferencePrices());
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
