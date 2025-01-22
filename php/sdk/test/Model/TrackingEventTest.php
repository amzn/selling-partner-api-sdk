<?php
/**
 * TrackingEventTest
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
use OpenAPI\Client\Model\fulfillment\outbound\TrackingEvent;

/**
 * TrackingEventTest Class Doc Comment
 *
 * @category    Class
 * @description Information for tracking package deliveries.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\outbound\TrackingAddress();
        
        $this->model->setEventAddress($testValue);
        $this->assertEquals($testValue, $this->model->getEventAddress());
    }

    /**
     * Test attribute "event_code"
     */
    public function testPropertyEventCode()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\outbound\EventCode();
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
