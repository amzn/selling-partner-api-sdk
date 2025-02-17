<?php
/**
 * AppointmentSlotReportTest
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
use SpApi\Model\services\v1\AppointmentSlotReport;

/**
 * AppointmentSlotReportTest Class Doc Comment
 *
 * @category    Class
 * @description Availability information as per the service context queried.
 * @package     SpApi
 */
class AppointmentSlotReportTest extends TestCase
{

    private AppointmentSlotReport $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AppointmentSlotReport();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AppointmentSlotReport"
     */
    public function testAppointmentSlotReport()
    {
        $this->assertInstanceOf(AppointmentSlotReport::class, $this->model);
    }

    /**
     * Test attribute "scheduling_type"
     */
    public function testPropertySchedulingType()
    {
        $enumInstance = new AppointmentSlotReport();
        $allowedValues = $enumInstance->getSchedulingTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setSchedulingType($testValue);
        $this->assertEquals($testValue, $this->model->getSchedulingType());
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
     * Test attribute "appointment_slots"
     */
    public function testPropertyAppointmentSlots()
    {
        $testValue = [];
        
        $this->model->setAppointmentSlots($testValue);
        $this->assertEquals($testValue, $this->model->getAppointmentSlots());
    }
}
