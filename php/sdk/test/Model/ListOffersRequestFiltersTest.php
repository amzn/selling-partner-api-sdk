<?php
/**
 * ListOffersRequestFiltersTest
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
use OpenAPI\Client\Model\replenishment\ListOffersRequestFilters;

/**
 * ListOffersRequestFiltersTest Class Doc Comment
 *
 * @category    Class
 * @description Use these parameters to filter results. Any result must match all of the provided parameters. For any parameter that is an array, the result must match at least one element in the provided array.
 * @package     OpenAPI\Client
 */
class ListOffersRequestFiltersTest extends TestCase
{

    private ListOffersRequestFilters $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListOffersRequestFilters();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListOffersRequestFilters"
     */
    public function testListOffersRequestFilters()
    {
        $this->assertInstanceOf(ListOffersRequestFilters::class, $this->model);
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }

    /**
     * Test attribute "skus"
     */
    public function testPropertySkus()
    {
        $testValue = [];
        
        $this->model->setSkus($testValue);
        $this->assertEquals($testValue, $this->model->getSkus());
    }

    /**
     * Test attribute "asins"
     */
    public function testPropertyAsins()
    {
        $testValue = [];
        
        $this->model->setAsins($testValue);
        $this->assertEquals($testValue, $this->model->getAsins());
    }

    /**
     * Test attribute "eligibilities"
     */
    public function testPropertyEligibilities()
    {
        $testValue = [];
        
        $this->model->setEligibilities($testValue);
        $this->assertEquals($testValue, $this->model->getEligibilities());
    }

    /**
     * Test attribute "preferences"
     */
    public function testPropertyPreferences()
    {
        
        $testValue = new \OpenAPI\Client\Model\replenishment\Preference();
        
        $this->model->setPreferences($testValue);
        $this->assertEquals($testValue, $this->model->getPreferences());
    }

    /**
     * Test attribute "promotions"
     */
    public function testPropertyPromotions()
    {
        
        $testValue = new \OpenAPI\Client\Model\replenishment\Promotion();
        
        $this->model->setPromotions($testValue);
        $this->assertEquals($testValue, $this->model->getPromotions());
    }

    /**
     * Test attribute "program_types"
     */
    public function testPropertyProgramTypes()
    {
        $testValue = [];
        
        $this->model->setProgramTypes($testValue);
        $this->assertEquals($testValue, $this->model->getProgramTypes());
    }
}
