<?php
/**
 * GetSelfShipAppointmentSlotsResponseTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\GetSelfShipAppointmentSlotsResponse;

/**
 * GetSelfShipAppointmentSlotsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The &#x60;getSelfShipAppointmentSlots&#x60; response.
 * @package     OpenAPI\Client
 */
class GetSelfShipAppointmentSlotsResponseTest extends TestCase
{

    private GetSelfShipAppointmentSlotsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetSelfShipAppointmentSlotsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetSelfShipAppointmentSlotsResponse"
     */
    public function testGetSelfShipAppointmentSlotsResponse()
    {
        $this->assertInstanceOf(GetSelfShipAppointmentSlotsResponse::class, $this->model);
    }

    /**
     * Test attribute "pagination"
     */
    public function testPropertyPagination()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Pagination();
        
        $this->model->setPagination($testValue);
        $this->assertEquals($testValue, $this->model->getPagination());
    }

    /**
     * Test attribute "self_ship_appointment_slots_availability"
     */
    public function testPropertySelfShipAppointmentSlotsAvailability()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\SelfShipAppointmentSlotsAvailability();
        
        $this->model->setSelfShipAppointmentSlotsAvailability($testValue);
        $this->assertEquals($testValue, $this->model->getSelfShipAppointmentSlotsAvailability());
    }
}
