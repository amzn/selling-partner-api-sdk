<?php
/**
 * LowestPricedOfferTest
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
use SpApi\Model\pricing\v2022_05_01\LowestPricedOffer;

/**
 * LowestPricedOfferTest Class Doc Comment
 *
 * @category    Class
 * @description Describes the lowest priced offers for the specified item condition and offer type.
 * @package     SpApi
 */
class LowestPricedOfferTest extends TestCase
{

    private LowestPricedOffer $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LowestPricedOffer();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LowestPricedOffer"
     */
    public function testLowestPricedOffer()
    {
        $this->assertInstanceOf(LowestPricedOffer::class, $this->model);
    }

    /**
     * Test attribute "lowest_priced_offers_input"
     */
    public function testPropertyLowestPricedOffersInput()
    {
        
        $testValue = new \SpApi\Model\pricing\v2022_05_01\LowestPricedOffersInput();
        
        $this->model->setLowestPricedOffersInput($testValue);
        $this->assertEquals($testValue, $this->model->getLowestPricedOffersInput());
    }

    /**
     * Test attribute "offers"
     */
    public function testPropertyOffers()
    {
        $testValue = [];
        
        $this->model->setOffers($testValue);
        $this->assertEquals($testValue, $this->model->getOffers());
    }
}
