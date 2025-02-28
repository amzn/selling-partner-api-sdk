<?php
/**
 * EventTest
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
use SpApi\Model\shipping\v2\Event;

/**
 * EventTest Class Doc Comment
 *
 * @category    Class
 * @description A tracking event.
 * @package     SpApi
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
        $enumInstance = new \SpApi\Model\shipping\v2\EventCode();
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
        
        $testValue = new \SpApi\Model\shipping\v2\Location();
        
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

    /**
     * Test attribute "shipment_type"
     */
    public function testPropertyShipmentType()
    {
        $enumInstance = new \SpApi\Model\shipping\v2\ShipmentType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setShipmentType($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentType());
    }
}
