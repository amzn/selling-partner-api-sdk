<?php
/**
 * EventFilterTest
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
use SpApi\Model\notifications\v1\EventFilter;

/**
 * EventFilterTest Class Doc Comment
 *
 * @category    Class
 * @description A &#x60;notificationType&#x60; specific filter. This object contains all of the currently available filters and properties that you can use to define a &#x60;notificationType&#x60; specific filter.
 * @package     SpApi
 */
class EventFilterTest extends TestCase
{

    private EventFilter $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new EventFilter();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "EventFilter"
     */
    public function testEventFilter()
    {
        $this->assertInstanceOf(EventFilter::class, $this->model);
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
     * Test attribute "order_change_types"
     */
    public function testPropertyOrderChangeTypes()
    {
        $testValue = [];
        
        $this->model->setOrderChangeTypes($testValue);
        $this->assertEquals($testValue, $this->model->getOrderChangeTypes());
    }

    /**
     * Test attribute "event_filter_type"
     */
    public function testPropertyEventFilterType()
    {
        $enumInstance = new EventFilter();
        $allowedValues = $enumInstance->getEventFilterTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setEventFilterType($testValue);
        $this->assertEquals($testValue, $this->model->getEventFilterType());
    }
}
