<?php
/**
 * AggregationSettingsTest
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
use OpenAPI\Client\Model\notifications\AggregationSettings;

/**
 * AggregationSettingsTest Class Doc Comment
 *
 * @category    Class
 * @description A container that holds all of the necessary properties to configure the aggregation of notifications.
 * @package     OpenAPI\Client
 */
class AggregationSettingsTest extends TestCase
{

    private AggregationSettings $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AggregationSettings();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AggregationSettings"
     */
    public function testAggregationSettings()
    {
        $this->assertInstanceOf(AggregationSettings::class, $this->model);
    }

    /**
     * Test attribute "aggregation_time_period"
     */
    public function testPropertyAggregationTimePeriod()
    {
        $enumInstance = new \OpenAPI\Client\Model\notifications\AggregationTimePeriod();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setAggregationTimePeriod($testValue);
        $this->assertEquals($testValue, $this->model->getAggregationTimePeriod());
    }
}
