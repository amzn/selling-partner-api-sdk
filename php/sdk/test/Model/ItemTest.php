<?php
/**
 * ItemTest
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
use SpApi\Model\catalogItems\v2022_04_01\Item;

/**
 * ItemTest Class Doc Comment
 *
 * @category    Class
 * @description An item in the Amazon catalog.
 * @package     SpApi
 */
class ItemTest extends TestCase
{

    private Item $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Item();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Item"
     */
    public function testItem()
    {
        $this->assertInstanceOf(Item::class, $this->model);
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
     * Test attribute "attributes"
     */
    public function testPropertyAttributes()
    {
        $testValue = array();
        
        $this->model->setAttributes($testValue);
        $this->assertEquals($testValue, $this->model->getAttributes());
    }

    /**
     * Test attribute "classifications"
     */
    public function testPropertyClassifications()
    {
        $testValue = [];
        
        $this->model->setClassifications($testValue);
        $this->assertEquals($testValue, $this->model->getClassifications());
    }

    /**
     * Test attribute "dimensions"
     */
    public function testPropertyDimensions()
    {
        $testValue = [];
        
        $this->model->setDimensions($testValue);
        $this->assertEquals($testValue, $this->model->getDimensions());
    }

    /**
     * Test attribute "identifiers"
     */
    public function testPropertyIdentifiers()
    {
        $testValue = [];
        
        $this->model->setIdentifiers($testValue);
        $this->assertEquals($testValue, $this->model->getIdentifiers());
    }

    /**
     * Test attribute "images"
     */
    public function testPropertyImages()
    {
        $testValue = [];
        
        $this->model->setImages($testValue);
        $this->assertEquals($testValue, $this->model->getImages());
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
     * Test attribute "relationships"
     */
    public function testPropertyRelationships()
    {
        $testValue = [];
        
        $this->model->setRelationships($testValue);
        $this->assertEquals($testValue, $this->model->getRelationships());
    }

    /**
     * Test attribute "sales_ranks"
     */
    public function testPropertySalesRanks()
    {
        $testValue = [];
        
        $this->model->setSalesRanks($testValue);
        $this->assertEquals($testValue, $this->model->getSalesRanks());
    }

    /**
     * Test attribute "summaries"
     */
    public function testPropertySummaries()
    {
        $testValue = [];
        
        $this->model->setSummaries($testValue);
        $this->assertEquals($testValue, $this->model->getSummaries());
    }

    /**
     * Test attribute "vendor_details"
     */
    public function testPropertyVendorDetails()
    {
        $testValue = [];
        
        $this->model->setVendorDetails($testValue);
        $this->assertEquals($testValue, $this->model->getVendorDetails());
    }
}
