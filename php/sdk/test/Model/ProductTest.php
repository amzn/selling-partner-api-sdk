<?php
/**
 * ProductTest
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
use OpenAPI\Client\Model\pricingV0\Product;

/**
 * ProductTest Class Doc Comment
 *
 * @category    Class
 * @description An item.
 * @package     OpenAPI\Client
 */
class ProductTest extends TestCase
{

    private Product $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Product();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Product"
     */
    public function testProduct()
    {
        $this->assertInstanceOf(Product::class, $this->model);
    }

    /**
     * Test attribute "identifiers"
     */
    public function testPropertyIdentifiers()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricingV0\IdentifierType();
        
        $this->model->setIdentifiers($testValue);
        $this->assertEquals($testValue, $this->model->getIdentifiers());
    }

    /**
     * Test attribute "attribute_sets"
     */
    public function testPropertyAttributeSets()
    {
        $testValue = [];
        
        $this->model->setAttributeSets($testValue);
        $this->assertEquals($testValue, $this->model->getAttributeSets());
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
     * Test attribute "competitive_pricing"
     */
    public function testPropertyCompetitivePricing()
    {
        
        $testValue = new \OpenAPI\Client\Model\pricingV0\CompetitivePricingType();
        
        $this->model->setCompetitivePricing($testValue);
        $this->assertEquals($testValue, $this->model->getCompetitivePricing());
    }

    /**
     * Test attribute "sales_rankings"
     */
    public function testPropertySalesRankings()
    {
        $testValue = [];
        
        $this->model->setSalesRankings($testValue);
        $this->assertEquals($testValue, $this->model->getSalesRankings());
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
