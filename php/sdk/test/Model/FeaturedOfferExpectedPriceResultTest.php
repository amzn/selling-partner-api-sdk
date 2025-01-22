<?php
/**
 * FeaturedOfferExpectedPriceResultTest
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
use OpenAPI\Client\Model\pricing\v2022_05_01\FeaturedOfferExpectedPriceResult;

/**
 * FeaturedOfferExpectedPriceResultTest Class Doc Comment
 *
 * @category    Class
 * @description The FOEP result data for the requested offer.
 * @package     OpenAPI\Client
 */
class FeaturedOfferExpectedPriceResultTest extends TestCase
{

    private FeaturedOfferExpectedPriceResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeaturedOfferExpectedPriceResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeaturedOfferExpectedPriceResult"
     */
    public function testFeaturedOfferExpectedPriceResult()
    {
        $this->assertInstanceOf(FeaturedOfferExpectedPriceResult::class, $this->model);
    }

    /**
     * Test attribute "featured_offer_expected_price"
     */
    public function testPropertyFeaturedOfferExpectedPrice()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v2022_05_01\FeaturedOfferExpectedPrice();
        
        $this->model->setFeaturedOfferExpectedPrice($testValue);
        $this->assertEquals($testValue, $this->model->getFeaturedOfferExpectedPrice());
    }

    /**
     * Test attribute "result_status"
     */
    public function testPropertyResultStatus()
    {
        $testValue = 'test';
        
        $this->model->setResultStatus($testValue);
        $this->assertEquals($testValue, $this->model->getResultStatus());
    }

    /**
     * Test attribute "competing_featured_offer"
     */
    public function testPropertyCompetingFeaturedOffer()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v2022_05_01\FeaturedOffer();
        
        $this->model->setCompetingFeaturedOffer($testValue);
        $this->assertEquals($testValue, $this->model->getCompetingFeaturedOffer());
    }

    /**
     * Test attribute "current_featured_offer"
     */
    public function testPropertyCurrentFeaturedOffer()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v2022_05_01\FeaturedOffer();
        
        $this->model->setCurrentFeaturedOffer($testValue);
        $this->assertEquals($testValue, $this->model->getCurrentFeaturedOffer());
    }
}
