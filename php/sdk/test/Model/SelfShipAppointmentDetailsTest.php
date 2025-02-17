<?php
/**
 * SelfShipAppointmentDetailsTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\SelfShipAppointmentDetails;

/**
 * SelfShipAppointmentDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Appointment details for carrier pickup or fulfillment center appointments.
 * @package     SpApi
 */
class SelfShipAppointmentDetailsTest extends TestCase
{

    private SelfShipAppointmentDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SelfShipAppointmentDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SelfShipAppointmentDetails"
     */
    public function testSelfShipAppointmentDetails()
    {
        $this->assertInstanceOf(SelfShipAppointmentDetails::class, $this->model);
    }

    /**
     * Test attribute "appointment_id"
     */
    public function testPropertyAppointmentId()
    {
        $testValue = 1;
        
        $this->model->setAppointmentId($testValue);
        $this->assertEquals($testValue, $this->model->getAppointmentId());
    }

    /**
     * Test attribute "appointment_slot_time"
     */
    public function testPropertyAppointmentSlotTime()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\AppointmentSlotTime();
        
        $this->model->setAppointmentSlotTime($testValue);
        $this->assertEquals($testValue, $this->model->getAppointmentSlotTime());
    }

    /**
     * Test attribute "appointment_status"
     */
    public function testPropertyAppointmentStatus()
    {
        $testValue = 'test';
        
        $this->model->setAppointmentStatus($testValue);
        $this->assertEquals($testValue, $this->model->getAppointmentStatus());
    }
}
