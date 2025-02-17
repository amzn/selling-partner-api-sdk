<?php
/**
 * TimeOfDayTest
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
use SpApi\Model\shipping\v2\TimeOfDay;

/**
 * TimeOfDayTest Class Doc Comment
 *
 * @category    Class
 * @description Denotes time of the day, used for defining opening or closing time of access points
 * @package     SpApi
 */
class TimeOfDayTest extends TestCase
{

    private TimeOfDay $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TimeOfDay();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TimeOfDay"
     */
    public function testTimeOfDay()
    {
        $this->assertInstanceOf(TimeOfDay::class, $this->model);
    }

    /**
     * Test attribute "hour_of_day"
     */
    public function testPropertyHourOfDay()
    {
        $testValue = 123;
        
        $this->model->setHourOfDay($testValue);
        $this->assertEquals($testValue, $this->model->getHourOfDay());
    }

    /**
     * Test attribute "minute_of_hour"
     */
    public function testPropertyMinuteOfHour()
    {
        $testValue = 123;
        
        $this->model->setMinuteOfHour($testValue);
        $this->assertEquals($testValue, $this->model->getMinuteOfHour());
    }

    /**
     * Test attribute "second_of_minute"
     */
    public function testPropertySecondOfMinute()
    {
        $testValue = 123;
        
        $this->model->setSecondOfMinute($testValue);
        $this->assertEquals($testValue, $this->model->getSecondOfMinute());
    }
}
