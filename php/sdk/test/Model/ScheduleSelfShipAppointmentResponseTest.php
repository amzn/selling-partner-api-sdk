<?php
/**
 * ScheduleSelfShipAppointmentResponseTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\ScheduleSelfShipAppointmentResponse;

/**
 * ScheduleSelfShipAppointmentResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;scheduleSelfShipAppointment&#x60; response.
 * @package     SpApi
 */
class ScheduleSelfShipAppointmentResponseTest extends TestCase
{

    private ScheduleSelfShipAppointmentResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ScheduleSelfShipAppointmentResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ScheduleSelfShipAppointmentResponse"
     */
    public function testScheduleSelfShipAppointmentResponse()
    {
        $this->assertInstanceOf(ScheduleSelfShipAppointmentResponse::class, $this->model);
    }

    /**
     * Test attribute "self_ship_appointment_details"
     */
    public function testPropertySelfShipAppointmentDetails()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\SelfShipAppointmentDetails();
        
        $this->model->setSelfShipAppointmentDetails($testValue);
        $this->assertEquals($testValue, $this->model->getSelfShipAppointmentDetails());
    }
}
