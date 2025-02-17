<?php
/**
 * ProductTypeDefinitionTest
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
use SpApi\Model\productTypeDefinitions\v2020_09_01\ProductTypeDefinition;

/**
 * ProductTypeDefinitionTest Class Doc Comment
 *
 * @category    Class
 * @description A product type definition represents the attributes and data requirements for a product type in the Amazon catalog. Product type definitions are used interchangeably between the Selling Partner API for Listings Items, Selling Partner API for Catalog Items, and JSON-based listings feeds in the Selling Partner API for Feeds.
 * @package     SpApi
 */
class ProductTypeDefinitionTest extends TestCase
{

    private ProductTypeDefinition $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ProductTypeDefinition();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ProductTypeDefinition"
     */
    public function testProductTypeDefinition()
    {
        $this->assertInstanceOf(ProductTypeDefinition::class, $this->model);
    }

    /**
     * Test attribute "meta_schema"
     */
    public function testPropertyMetaSchema()
    {
        
        $testValue = new \SpApi\Model\productTypeDefinitions\v2020_09_01\SchemaLink();
        
        $this->model->setMetaSchema($testValue);
        $this->assertEquals($testValue, $this->model->getMetaSchema());
    }

    /**
     * Test attribute "schema"
     */
    public function testPropertySchema()
    {
        
        $testValue = new \SpApi\Model\productTypeDefinitions\v2020_09_01\SchemaLink();
        
        $this->model->setSchema($testValue);
        $this->assertEquals($testValue, $this->model->getSchema());
    }

    /**
     * Test attribute "requirements"
     */
    public function testPropertyRequirements()
    {
        $enumInstance = new ProductTypeDefinition();
        $allowedValues = $enumInstance->getRequirementsAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setRequirements($testValue);
        $this->assertEquals($testValue, $this->model->getRequirements());
    }

    /**
     * Test attribute "requirements_enforced"
     */
    public function testPropertyRequirementsEnforced()
    {
        $enumInstance = new ProductTypeDefinition();
        $allowedValues = $enumInstance->getRequirementsEnforcedAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setRequirementsEnforced($testValue);
        $this->assertEquals($testValue, $this->model->getRequirementsEnforced());
    }

    /**
     * Test attribute "property_groups"
     */
    public function testPropertyPropertyGroups()
    {
        $testValue = array();
        
        $this->model->setPropertyGroups($testValue);
        $this->assertEquals($testValue, $this->model->getPropertyGroups());
    }

    /**
     * Test attribute "locale"
     */
    public function testPropertyLocale()
    {
        $testValue = 'test';
        
        $this->model->setLocale($testValue);
        $this->assertEquals($testValue, $this->model->getLocale());
    }

    /**
     * Test attribute "marketplace_ids"
     */
    public function testPropertyMarketplaceIds()
    {
        $testValue = [];
        
        $this->model->setMarketplaceIds($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceIds());
    }

    /**
     * Test attribute "product_type"
     */
    public function testPropertyProductType()
    {
        $testValue = 'test';
        
        $this->model->setProductType($testValue);
        $this->assertEquals($testValue, $this->model->getProductType());
    }

    /**
     * Test attribute "display_name"
     */
    public function testPropertyDisplayName()
    {
        $testValue = 'test';
        
        $this->model->setDisplayName($testValue);
        $this->assertEquals($testValue, $this->model->getDisplayName());
    }

    /**
     * Test attribute "product_type_version"
     */
    public function testPropertyProductTypeVersion()
    {
        
        $testValue = new \SpApi\Model\productTypeDefinitions\v2020_09_01\ProductTypeVersion();
        
        $this->model->setProductTypeVersion($testValue);
        $this->assertEquals($testValue, $this->model->getProductTypeVersion());
    }
}
