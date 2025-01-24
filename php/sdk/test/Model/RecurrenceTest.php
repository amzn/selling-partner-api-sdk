<?php
/**
 * RecurrenceTest
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
use OpenAPI\Client\Model\services\Recurrence;

/**
 * RecurrenceTest Class Doc Comment
 *
 * @category    Class
 * @description Repeated occurrence of an event in a time range.
 * @package     OpenAPI\Client
 */
class RecurrenceTest extends TestCase
{

    private Recurrence $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Recurrence();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Recurrence"
     */
    public function testRecurrence()
    {
        $this->assertInstanceOf(Recurrence::class, $this->model);
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
     * Test attribute "days_of_week"
     */
    public function testPropertyDaysOfWeek()
    {
        $testValue = [];
        
        $this->model->setDaysOfWeek($testValue);
        $this->assertEquals($testValue, $this->model->getDaysOfWeek());
    }

    /**
     * Test attribute "days_of_month"
     */
    public function testPropertyDaysOfMonth()
    {
        $testValue = [];
        
        $this->model->setDaysOfMonth($testValue);
        $this->assertEquals($testValue, $this->model->getDaysOfMonth());
    }
}
