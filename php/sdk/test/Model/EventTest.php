<?php
/**
 * EventTest
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
use OpenAPI\Client\Model\shipping\Event;

/**
 * EventTest Class Doc Comment
 *
 * @category    Class
 * @description A tracking event.
 * @package     OpenAPI\Client
 */
class EventTest extends TestCase
{

    private Event $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Event();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Event"
     */
    public function testEvent()
    {
        $this->assertInstanceOf(Event::class, $this->model);
    }

    /**
     * Test attribute "event_code"
     */
    public function testPropertyEventCode()
    {
        $enumInstance = new \OpenAPI\Client\Model\shipping\EventCode();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setEventCode($testValue);
        $this->assertEquals($testValue, $this->model->getEventCode());
    }

    /**
     * Test attribute "location"
     */
    public function testPropertyLocation()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\Location();
        
        $this->model->setLocation($testValue);
        $this->assertEquals($testValue, $this->model->getLocation());
    }

    /**
     * Test attribute "event_time"
     */
    public function testPropertyEventTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEventTime($testValue);
        $this->assertEquals($testValue, $this->model->getEventTime());
    }
}
