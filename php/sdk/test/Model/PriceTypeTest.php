<?php
/**
 * PriceTypeTest
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
use SpApi\Model\pricing\v0\PriceType;

/**
 * PriceTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Schema for item&#39;s price information, including listing price, shipping price, and Amazon points.
 * @package     SpApi
 */
class PriceTypeTest extends TestCase
{

    private PriceType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PriceType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PriceType"
     */
    public function testPriceType()
    {
        $this->assertInstanceOf(PriceType::class, $this->model);
    }

    /**
     * Test attribute "landed_price"
     */
    public function testPropertyLandedPrice()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\MoneyType();
        
        $this->model->setLandedPrice($testValue);
        $this->assertEquals($testValue, $this->model->getLandedPrice());
    }

    /**
     * Test attribute "listing_price"
     */
    public function testPropertyListingPrice()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\MoneyType();
        
        $this->model->setListingPrice($testValue);
        $this->assertEquals($testValue, $this->model->getListingPrice());
    }

    /**
     * Test attribute "shipping"
     */
    public function testPropertyShipping()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\MoneyType();
        
        $this->model->setShipping($testValue);
        $this->assertEquals($testValue, $this->model->getShipping());
    }

    /**
     * Test attribute "points"
     */
    public function testPropertyPoints()
    {
        
        $testValue = new \SpApi\Model\pricing\v0\Points();
        
        $this->model->setPoints($testValue);
        $this->assertEquals($testValue, $this->model->getPoints());
    }
}
