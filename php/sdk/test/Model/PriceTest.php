<?php
/**
 * PriceTest
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
use OpenAPI\Client\Model\pricing\Price;

/**
 * PriceTest Class Doc Comment
 *
 * @category    Class
 * @description The schema for item&#39;s price information, including listing price, shipping price, and Amazon Points.
 * @package     OpenAPI\Client
 */
class PriceTest extends TestCase
{

    private Price $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Price();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Price"
     */
    public function testPrice()
    {
        $this->assertInstanceOf(Price::class, $this->model);
    }

    /**
     * Test attribute "listing_price"
     */
    public function testPropertyListingPrice()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\MoneyType();
        
        $this->model->setListingPrice($testValue);
        $this->assertEquals($testValue, $this->model->getListingPrice());
    }

    /**
     * Test attribute "shipping_price"
     */
    public function testPropertyShippingPrice()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\MoneyType();
        
        $this->model->setShippingPrice($testValue);
        $this->assertEquals($testValue, $this->model->getShippingPrice());
    }

    /**
     * Test attribute "points"
     */
    public function testPropertyPoints()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\Points();
        
        $this->model->setPoints($testValue);
        $this->assertEquals($testValue, $this->model->getPoints());
    }
}
