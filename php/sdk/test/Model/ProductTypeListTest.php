<?php
/**
 * ProductTypeListTest
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
use SpApi\Model\productTypeDefinitions\v2020_09_01\ProductTypeList;

/**
 * ProductTypeListTest Class Doc Comment
 *
 * @category    Class
 * @description A list of Amazon product types with definitions available.
 * @package     SpApi
 */
class ProductTypeListTest extends TestCase
{

    private ProductTypeList $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ProductTypeList();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ProductTypeList"
     */
    public function testProductTypeList()
    {
        $this->assertInstanceOf(ProductTypeList::class, $this->model);
    }

    /**
     * Test attribute "product_types"
     */
    public function testPropertyProductTypes()
    {
        $testValue = [];
        
        $this->model->setProductTypes($testValue);
        $this->assertEquals($testValue, $this->model->getProductTypes());
    }

    /**
     * Test attribute "product_type_version"
     */
    public function testPropertyProductTypeVersion()
    {
        $testValue = 'test';
        
        $this->model->setProductTypeVersion($testValue);
        $this->assertEquals($testValue, $this->model->getProductTypeVersion());
    }
}
