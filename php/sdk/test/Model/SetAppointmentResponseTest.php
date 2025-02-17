<?php
/**
 * SetAppointmentResponseTest
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
use SpApi\Model\services\v1\SetAppointmentResponse;

/**
 * SetAppointmentResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Response schema for the &#x60;addAppointmentForServiceJobByServiceJobId&#x60; and &#x60;rescheduleAppointmentForServiceJobByServiceJobId&#x60; operations.
 * @package     SpApi
 */
class SetAppointmentResponseTest extends TestCase
{

    private SetAppointmentResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SetAppointmentResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SetAppointmentResponse"
     */
    public function testSetAppointmentResponse()
    {
        $this->assertInstanceOf(SetAppointmentResponse::class, $this->model);
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
     * Test attribute "warnings"
     */
    public function testPropertyWarnings()
    {
        $testValue = [];
        
        $this->model->setWarnings($testValue);
        $this->assertEquals($testValue, $this->model->getWarnings());
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
