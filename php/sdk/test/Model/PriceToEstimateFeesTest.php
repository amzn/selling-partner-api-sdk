<?php
/**
 * PriceToEstimateFeesTest
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
use SpApi\Model\productFees\v0\PriceToEstimateFees;

/**
 * PriceToEstimateFeesTest Class Doc Comment
 *
 * @category    Class
 * @description Price information for an item, used to estimate fees.
 * @package     SpApi
 */
class PriceToEstimateFeesTest extends TestCase
{

    private PriceToEstimateFees $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PriceToEstimateFees();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PriceToEstimateFees"
     */
    public function testPriceToEstimateFees()
    {
        $this->assertInstanceOf(PriceToEstimateFees::class, $this->model);
    }

    /**
     * Test attribute "listing_price"
     */
    public function testPropertyListingPrice()
    {
        
        $testValue = new \SpApi\Model\productFees\v0\MoneyType();
        
        $this->model->setListingPrice($testValue);
        $this->assertEquals($testValue, $this->model->getListingPrice());
    }

    /**
     * Test attribute "shipping"
     */
    public function testPropertyShipping()
    {
        
        $testValue = new \SpApi\Model\productFees\v0\MoneyType();
        
        $this->model->setShipping($testValue);
        $this->assertEquals($testValue, $this->model->getShipping());
    }

    /**
     * Test attribute "points"
     */
    public function testPropertyPoints()
    {
        
        $testValue = new \SpApi\Model\productFees\v0\Points();
        
        $this->model->setPoints($testValue);
        $this->assertEquals($testValue, $this->model->getPoints());
    }
}
