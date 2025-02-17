<?php
/**
 * AppointmentTest
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
use SpApi\Model\services\v1\Appointment;

/**
 * AppointmentTest Class Doc Comment
 *
 * @category    Class
 * @description The details of an appointment.
 * @package     SpApi
 */
class AppointmentTest extends TestCase
{

    private Appointment $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Appointment();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Appointment"
     */
    public function testAppointment()
    {
        $this->assertInstanceOf(Appointment::class, $this->model);
    }

    /**
     * Test attribute "appointment_id"
     */
    public function testPropertyAppointmentId()
    {
        $testValue = 'test';
        
        $this->model->setAppointmentId($testValue);
        $this->assertEquals($testValue, $this->model->getAppointmentId());
    }

    /**
     * Test attribute "appointment_status"
     */
    public function testPropertyAppointmentStatus()
    {
        $enumInstance = new Appointment();
        $allowedValues = $enumInstance->getAppointmentStatusAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setAppointmentStatus($testValue);
        $this->assertEquals($testValue, $this->model->getAppointmentStatus());
    }

    /**
     * Test attribute "appointment_time"
     */
    public function testPropertyAppointmentTime()
    {
        
        $testValue = new \SpApi\Model\services\v1\AppointmentTime();
        
        $this->model->setAppointmentTime($testValue);
        $this->assertEquals($testValue, $this->model->getAppointmentTime());
    }

    /**
     * Test attribute "assigned_technicians"
     */
    public function testPropertyAssignedTechnicians()
    {
        $testValue = [];
        
        $this->model->setAssignedTechnicians($testValue);
        $this->assertEquals($testValue, $this->model->getAssignedTechnicians());
    }

    /**
     * Test attribute "rescheduled_appointment_id"
     */
    public function testPropertyRescheduledAppointmentId()
    {
        $testValue = 'test';
        
        $this->model->setRescheduledAppointmentId($testValue);
        $this->assertEquals($testValue, $this->model->getRescheduledAppointmentId());
    }

    /**
     * Test attribute "poa"
     */
    public function testPropertyPoa()
    {
        
        $testValue = new \SpApi\Model\services\v1\Poa();
        
        $this->model->setPoa($testValue);
        $this->assertEquals($testValue, $this->model->getPoa());
    }
}
