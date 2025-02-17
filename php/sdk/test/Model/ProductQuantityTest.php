<?php
/**
 * ProductQuantityTest
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
use SpApi\Model\awd\v2024_05_09\ProductQuantity;

/**
 * ProductQuantityTest Class Doc Comment
 *
 * @category    Class
 * @description Represents a product with the SKU details and the corresponding quantity.
 * @package     SpApi
 */
class ProductQuantityTest extends TestCase
{

    private ProductQuantity $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ProductQuantity();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ProductQuantity"
     */
    public function testProductQuantity()
    {
        $this->assertInstanceOf(ProductQuantity::class, $this->model);
    }

    /**
     * Test attribute "attributes"
     */
    public function testPropertyAttributes()
    {
        $testValue = [];
        
        $this->model->setAttributes($testValue);
        $this->assertEquals($testValue, $this->model->getAttributes());
    }

    /**
     * Test attribute "quantity"
     */
    public function testPropertyQuantity()
    {
        $testValue = 123;
        
        $this->model->setQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getQuantity());
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
     * Test attribute "expiration"
     */
    public function testPropertyExpiration()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setExpiration($testValue);
        $this->assertEquals($testValue, $this->model->getExpiration());
    }

    /**
     * Test attribute "prep_details"
     */
    public function testPropertyPrepDetails()
    {
        
        $testValue = new \SpApi\Model\awd\v2024_05_09\PrepDetails();
        
        $this->model->setPrepDetails($testValue);
        $this->assertEquals($testValue, $this->model->getPrepDetails());
    }
}
