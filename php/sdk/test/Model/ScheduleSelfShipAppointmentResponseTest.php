<?php
/**
 * ScheduleSelfShipAppointmentResponseTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\fulfillmentinbound\ScheduleSelfShipAppointmentResponse;

/**
 * ScheduleSelfShipAppointmentResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;scheduleSelfShipAppointment&#x60; response.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentinbound\SelfShipAppointmentDetails();
        
        $this->model->setSelfShipAppointmentDetails($testValue);
        $this->assertEquals($testValue, $this->model->getSelfShipAppointmentDetails());
    }
}
