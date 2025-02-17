<?php
/**
 * BusinessHoursTest
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
use SpApi\Model\orders\v0\BusinessHours;

/**
 * BusinessHoursTest Class Doc Comment
 *
 * @category    Class
 * @description Business days and hours when the destination is open for deliveries.
 * @package     SpApi
 */
class BusinessHoursTest extends TestCase
{

    private BusinessHours $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BusinessHours();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BusinessHours"
     */
    public function testBusinessHours()
    {
        $this->assertInstanceOf(BusinessHours::class, $this->model);
    }

    /**
     * Test attribute "day_of_week"
     */
    public function testPropertyDayOfWeek()
    {
        $enumInstance = new BusinessHours();
        $allowedValues = $enumInstance->getDayOfWeekAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setDayOfWeek($testValue);
        $this->assertEquals($testValue, $this->model->getDayOfWeek());
    }

    /**
     * Test attribute "open_intervals"
     */
    public function testPropertyOpenIntervals()
    {
        $testValue = [];
        
        $this->model->setOpenIntervals($testValue);
        $this->assertEquals($testValue, $this->model->getOpenIntervals());
    }
}
