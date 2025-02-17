<?php
/**
 * FeaturedOfferExpectedPriceTest
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
use SpApi\Model\pricing\v2022_05_01\FeaturedOfferExpectedPrice;

/**
 * FeaturedOfferExpectedPriceTest Class Doc Comment
 *
 * @category    Class
 * @description The item price at or below which the target offer may be featured.
 * @package     SpApi
 */
class FeaturedOfferExpectedPriceTest extends TestCase
{

    private FeaturedOfferExpectedPrice $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeaturedOfferExpectedPrice();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeaturedOfferExpectedPrice"
     */
    public function testFeaturedOfferExpectedPrice()
    {
        $this->assertInstanceOf(FeaturedOfferExpectedPrice::class, $this->model);
    }

    /**
     * Test attribute "listing_price"
     */
    public function testPropertyListingPrice()
    {
        
        $testValue = new \SpApi\Model\pricing\v2022_05_01\MoneyType();
        
        $this->model->setListingPrice($testValue);
        $this->assertEquals($testValue, $this->model->getListingPrice());
    }

    /**
     * Test attribute "points"
     */
    public function testPropertyPoints()
    {
        
        $testValue = new \SpApi\Model\pricing\v2022_05_01\Points();
        
        $this->model->setPoints($testValue);
        $this->assertEquals($testValue, $this->model->getPoints());
    }
}
