<?php
/**
 * LowestPricedOfferTest
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
use OpenAPI\Client\Model\pricing\v2022_05_01\LowestPricedOffer;

/**
 * LowestPricedOfferTest Class Doc Comment
 *
 * @category    Class
 * @description Describes the lowest priced offers for the specified item condition and offer type.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\pricing\v2022_05_01\LowestPricedOffersInput();
        
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
