<?php
/**
 * FeaturedOfferTest
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
use SpApi\Model\pricing\v2022_05_01\FeaturedOffer;

/**
 * FeaturedOfferTest Class Doc Comment
 *
 * @category    Class
 * @description Schema for &#x60;currentFeaturedOffer&#x60; or &#x60;competingFeaturedOffer&#x60;.
 * @package     SpApi
 */
class FeaturedOfferTest extends TestCase
{

    private FeaturedOffer $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeaturedOffer();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeaturedOffer"
     */
    public function testFeaturedOffer()
    {
        $this->assertInstanceOf(FeaturedOffer::class, $this->model);
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
     * Test attribute "condition"
     */
    public function testPropertyCondition()
    {
        $enumInstance = new \SpApi\Model\pricing\v2022_05_01\Condition();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setCondition($testValue);
        $this->assertEquals($testValue, $this->model->getCondition());
    }

    /**
     * Test attribute "price"
     */
    public function testPropertyPrice()
    {
        
        $testValue = new \SpApi\Model\pricing\v2022_05_01\Price();
        
        $this->model->setPrice($testValue);
        $this->assertEquals($testValue, $this->model->getPrice());
    }
}
