<?php
/**
 * PriceTest
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
use OpenAPI\Client\Model\pricing\v0\Price;

/**
 * PriceTest Class Doc Comment
 *
 * @category    Class
 * @description Price
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
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $testValue = 'test';
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "seller_sku"
     */
    public function testPropertySellerSku()
    {
        $testValue = 'test';
        
        $this->model->setSellerSku($testValue);
        $this->assertEquals($testValue, $this->model->getSellerSku());
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
     * Test attribute "product"
     */
    public function testPropertyProduct()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricing\v0\Product();
        
        $this->model->setProduct($testValue);
        $this->assertEquals($testValue, $this->model->getProduct());
    }
}
