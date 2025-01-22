<?php
/**
 * GetSellingPartnerMetricsRequestTest
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
use OpenAPI\Client\Model\replenishment\GetSellingPartnerMetricsRequest;

/**
 * GetSellingPartnerMetricsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request body for the &#x60;getSellingPartnerMetrics&#x60; operation.
 * @package     OpenAPI\Client
 */
class GetSellingPartnerMetricsRequestTest extends TestCase
{

    private GetSellingPartnerMetricsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetSellingPartnerMetricsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetSellingPartnerMetricsRequest"
     */
    public function testGetSellingPartnerMetricsRequest()
    {
        $this->assertInstanceOf(GetSellingPartnerMetricsRequest::class, $this->model);
    }

    /**
     * Test attribute "aggregation_frequency"
     */
    public function testPropertyAggregationFrequency()
    {
        $enumInstance = new \OpenAPI\Client\Model\replenishment\AggregationFrequency();
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
        
        $testValue = new \OpenAPI\Client\Model\replenishment\TimeInterval();
        
        $this->model->setTimeInterval($testValue);
        $this->assertEquals($testValue, $this->model->getTimeInterval());
    }

    /**
     * Test attribute "metrics"
     */
    public function testPropertyMetrics()
    {
        $testValue = [];
        
        $this->model->setMetrics($testValue);
        $this->assertEquals($testValue, $this->model->getMetrics());
    }

    /**
     * Test attribute "time_period_type"
     */
    public function testPropertyTimePeriodType()
    {
        $enumInstance = new \OpenAPI\Client\Model\replenishment\TimePeriodType();
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
}
