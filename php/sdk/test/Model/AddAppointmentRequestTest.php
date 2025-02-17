<?php
/**
 * AddAppointmentRequestTest
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
use SpApi\Model\services\v1\AddAppointmentRequest;

/**
 * AddAppointmentRequestTest Class Doc Comment
 *
 * @category    Class
 * @description Input for add appointment operation.
 * @package     SpApi
 */
class AddAppointmentRequestTest extends TestCase
{

    private AddAppointmentRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AddAppointmentRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AddAppointmentRequest"
     */
    public function testAddAppointmentRequest()
    {
        $this->assertInstanceOf(AddAppointmentRequest::class, $this->model);
    }

    /**
     * Test attribute "appointment_time"
     */
    public function testPropertyAppointmentTime()
    {
        
        $testValue = new \SpApi\Model\services\v1\AppointmentTimeInput();
        
        $this->model->setAppointmentTime($testValue);
        $this->assertEquals($testValue, $this->model->getAppointmentTime());
    }
}
