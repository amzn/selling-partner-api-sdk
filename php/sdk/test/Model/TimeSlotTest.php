<?php
/**
 * TimeSlotTest
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
use OpenAPI\Client\Model\easyship\TimeSlot;

/**
 * TimeSlotTest Class Doc Comment
 *
 * @category    Class
 * @description A time window to hand over an Easy Ship package to Amazon Logistics.
 * @package     OpenAPI\Client
 */
class TimeSlotTest extends TestCase
{

    private TimeSlot $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TimeSlot();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TimeSlot"
     */
    public function testTimeSlot()
    {
        $this->assertInstanceOf(TimeSlot::class, $this->model);
    }

    /**
     * Test attribute "slot_id"
     */
    public function testPropertySlotId()
    {
        $testValue = 'test';
        
        $this->model->setSlotId($testValue);
        $this->assertEquals($testValue, $this->model->getSlotId());
    }

    /**
     * Test attribute "start_time"
     */
    public function testPropertyStartTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setStartTime($testValue);
        $this->assertEquals($testValue, $this->model->getStartTime());
    }

    /**
     * Test attribute "end_time"
     */
    public function testPropertyEndTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEndTime($testValue);
        $this->assertEquals($testValue, $this->model->getEndTime());
    }

    /**
     * Test attribute "handover_method"
     */
    public function testPropertyHandoverMethod()
    {
        $enumInstance = new \OpenAPI\Client\Model\easyship\HandoverMethod();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setHandoverMethod($testValue);
        $this->assertEquals($testValue, $this->model->getHandoverMethod());
    }
}
