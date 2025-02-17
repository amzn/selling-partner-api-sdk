<?php
/**
 * FeaturedOfferExpectedPriceResponseBodyTest
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
use SpApi\Model\pricing\v2022_05_01\FeaturedOfferExpectedPriceResponseBody;

/**
 * FeaturedOfferExpectedPriceResponseBodyTest Class Doc Comment
 *
 * @category    Class
 * @description The FOEP response data for a requested SKU.
 * @package     SpApi
 */
class FeaturedOfferExpectedPriceResponseBodyTest extends TestCase
{

    private FeaturedOfferExpectedPriceResponseBody $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeaturedOfferExpectedPriceResponseBody();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeaturedOfferExpectedPriceResponseBody"
     */
    public function testFeaturedOfferExpectedPriceResponseBody()
    {
        $this->assertInstanceOf(FeaturedOfferExpectedPriceResponseBody::class, $this->model);
    }

    /**
     * Test attribute "offer_identifier"
     */
    public function testPropertyOfferIdentifier()
    {
        
        $testValue = new \SpApi\Model\pricing\v2022_05_01\OfferIdentifier();
        
        $this->model->setOfferIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getOfferIdentifier());
    }

    /**
     * Test attribute "featured_offer_expected_price_results"
     */
    public function testPropertyFeaturedOfferExpectedPriceResults()
    {
        $testValue = [];
        
        $this->model->setFeaturedOfferExpectedPriceResults($testValue);
        $this->assertEquals($testValue, $this->model->getFeaturedOfferExpectedPriceResults());
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
