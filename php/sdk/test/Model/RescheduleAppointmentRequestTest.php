<?php
/**
 * RescheduleAppointmentRequestTest
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
use OpenAPI\Client\Model\services\RescheduleAppointmentRequest;

/**
 * RescheduleAppointmentRequestTest Class Doc Comment
 *
 * @category    Class
 * @description Input for rescheduled appointment operation.
 * @package     OpenAPI\Client
 */
class RescheduleAppointmentRequestTest extends TestCase
{

    private RescheduleAppointmentRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RescheduleAppointmentRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RescheduleAppointmentRequest"
     */
    public function testRescheduleAppointmentRequest()
    {
        $this->assertInstanceOf(RescheduleAppointmentRequest::class, $this->model);
    }

    /**
     * Test attribute "appointment_time"
     */
    public function testPropertyAppointmentTime()
    {
        
        $testValue = new \OpenAPI\Client\Model\services\AppointmentTimeInput();
        
        $this->model->setAppointmentTime($testValue);
        $this->assertEquals($testValue, $this->model->getAppointmentTime());
    }

    /**
     * Test attribute "reschedule_reason_code"
     */
    public function testPropertyRescheduleReasonCode()
    {
        $testValue = 'test';
        
        $this->model->setRescheduleReasonCode($testValue);
        $this->assertEquals($testValue, $this->model->getRescheduleReasonCode());
    }
}
