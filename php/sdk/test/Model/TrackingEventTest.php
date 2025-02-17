<?php
/**
 * TrackingEventTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\TrackingEvent;

/**
 * TrackingEventTest Class Doc Comment
 *
 * @category    Class
 * @description Information for tracking package deliveries.
 * @package     SpApi
 */
class TrackingEventTest extends TestCase
{

    private TrackingEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TrackingEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TrackingEvent"
     */
    public function testTrackingEvent()
    {
        $this->assertInstanceOf(TrackingEvent::class, $this->model);
    }

    /**
     * Test attribute "event_date"
     */
    public function testPropertyEventDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEventDate($testValue);
        $this->assertEquals($testValue, $this->model->getEventDate());
    }

    /**
     * Test attribute "event_address"
     */
    public function testPropertyEventAddress()
    {
        
        $testValue = new \SpApi\Model\fulfillment\outbound\v2020_07_01\TrackingAddress();
        
        $this->model->setEventAddress($testValue);
        $this->assertEquals($testValue, $this->model->getEventAddress());
    }

    /**
     * Test attribute "event_code"
     */
    public function testPropertyEventCode()
    {
        $enumInstance = new \SpApi\Model\fulfillment\outbound\v2020_07_01\EventCode();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setEventCode($testValue);
        $this->assertEquals($testValue, $this->model->getEventCode());
    }

    /**
     * Test attribute "event_description"
     */
    public function testPropertyEventDescription()
    {
        $testValue = 'test';
        
        $this->model->setEventDescription($testValue);
        $this->assertEquals($testValue, $this->model->getEventDescription());
    }
}
