<?php
/**
 * ProductContextTest
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
use SpApi\Model\finances\v2024_06_19\ProductContext;

/**
 * ProductContextTest Class Doc Comment
 *
 * @category    Class
 * @description Additional information related to the product.
 * @package     SpApi
 */
class ProductContextTest extends TestCase
{

    private ProductContext $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ProductContext();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ProductContext"
     */
    public function testProductContext()
    {
        $this->assertInstanceOf(ProductContext::class, $this->model);
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
     * Test attribute "sku"
     */
    public function testPropertySku()
    {
        $testValue = 'test';
        
        $this->model->setSku($testValue);
        $this->assertEquals($testValue, $this->model->getSku());
    }

    /**
     * Test attribute "quantity_shipped"
     */
    public function testPropertyQuantityShipped()
    {
        $testValue = 123;
        
        $this->model->setQuantityShipped($testValue);
        $this->assertEquals($testValue, $this->model->getQuantityShipped());
    }

    /**
     * Test attribute "fulfillment_network"
     */
    public function testPropertyFulfillmentNetwork()
    {
        $testValue = 'test';
        
        $this->model->setFulfillmentNetwork($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentNetwork());
    }
}
