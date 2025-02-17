<?php
/**
 * AggregationFilterTest
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
use SpApi\Model\notifications\v1\AggregationFilter;

/**
 * AggregationFilterTest Class Doc Comment
 *
 * @category    Class
 * @description A filter used to select the aggregation time period at which to send notifications (for example: limit to one notification every five minutes for high frequency notifications).
 * @package     SpApi
 */
class AggregationFilterTest extends TestCase
{

    private AggregationFilter $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AggregationFilter();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AggregationFilter"
     */
    public function testAggregationFilter()
    {
        $this->assertInstanceOf(AggregationFilter::class, $this->model);
    }

    /**
     * Test attribute "aggregation_settings"
     */
    public function testPropertyAggregationSettings()
    {
        
        $testValue = new \SpApi\Model\notifications\v1\AggregationSettings();
        
        $this->model->setAggregationSettings($testValue);
        $this->assertEquals($testValue, $this->model->getAggregationSettings());
    }
}
