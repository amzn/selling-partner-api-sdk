<?php
/**
 * OperatingHoursTest
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
use OpenAPI\Client\Model\shipping\OperatingHours;

/**
 * OperatingHoursTest Class Doc Comment
 *
 * @category    Class
 * @description The hours in which the access point shall remain operational
 * @package     OpenAPI\Client
 */
class OperatingHoursTest extends TestCase
{

    private OperatingHours $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OperatingHours();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OperatingHours"
     */
    public function testOperatingHours()
    {
        $this->assertInstanceOf(OperatingHours::class, $this->model);
    }

    /**
     * Test attribute "closing_time"
     */
    public function testPropertyClosingTime()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\TimeOfDay();
        
        $this->model->setClosingTime($testValue);
        $this->assertEquals($testValue, $this->model->getClosingTime());
    }

    /**
     * Test attribute "opening_time"
     */
    public function testPropertyOpeningTime()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\TimeOfDay();
        
        $this->model->setOpeningTime($testValue);
        $this->assertEquals($testValue, $this->model->getOpeningTime());
    }

    /**
     * Test attribute "mid_day_closures"
     */
    public function testPropertyMidDayClosures()
    {
        $testValue = [];
        
        $this->model->setMidDayClosures($testValue);
        $this->assertEquals($testValue, $this->model->getMidDayClosures());
    }
}
