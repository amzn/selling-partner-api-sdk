<?php
/**
 * ListOfferMetricsRequestFiltersTest
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
use SpApi\Model\replenishment\v2022_11_07\ListOfferMetricsRequestFilters;

/**
 * ListOfferMetricsRequestFiltersTest Class Doc Comment
 *
 * @category    Class
 * @description Use these parameters to filter results. Any result must match all provided parameters. For any parameter that is an array, the result must match at least one element in the provided array.
 * @package     SpApi
 */
class ListOfferMetricsRequestFiltersTest extends TestCase
{

    private ListOfferMetricsRequestFilters $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListOfferMetricsRequestFilters();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListOfferMetricsRequestFilters"
     */
    public function testListOfferMetricsRequestFilters()
    {
        $this->assertInstanceOf(ListOfferMetricsRequestFilters::class, $this->model);
    }

    /**
     * Test attribute "aggregation_frequency"
     */
    public function testPropertyAggregationFrequency()
    {
        $enumInstance = new \SpApi\Model\replenishment\v2022_11_07\AggregationFrequency();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setAggregationFrequency($testValue);
        $this->assertEquals($testValue, $this->model->getAggregationFrequency());
    }

    /**
     * Test attribute "time_interval"
     */
    public function testPropertyTimeInterval()
    {
        
        $testValue = new \SpApi\Model\replenishment\v2022_11_07\TimeInterval();
        
        $this->model->setTimeInterval($testValue);
        $this->assertEquals($testValue, $this->model->getTimeInterval());
    }

    /**
     * Test attribute "time_period_type"
     */
    public function testPropertyTimePeriodType()
    {
        $enumInstance = new \SpApi\Model\replenishment\v2022_11_07\TimePeriodType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setTimePeriodType($testValue);
        $this->assertEquals($testValue, $this->model->getTimePeriodType());
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
     * Test attribute "program_types"
     */
    public function testPropertyProgramTypes()
    {
        $testValue = [];
        
        $this->model->setProgramTypes($testValue);
        $this->assertEquals($testValue, $this->model->getProgramTypes());
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
}
