<?php
/**
 * PoaTest
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
use OpenAPI\Client\Model\services\Poa;

/**
 * PoaTest Class Doc Comment
 *
 * @category    Class
 * @description Proof of Appointment (POA) details.
 * @package     OpenAPI\Client
 */
class PoaTest extends TestCase
{

    private Poa $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Poa();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Poa"
     */
    public function testPoa()
    {
        $this->assertInstanceOf(Poa::class, $this->model);
    }

    /**
     * Test attribute "appointment_time"
     */
    public function testPropertyAppointmentTime()
    {
        
        $testValue = new \OpenAPI\Client\Model\services\AppointmentTime();
        
        $this->model->setAppointmentTime($testValue);
        $this->assertEquals($testValue, $this->model->getAppointmentTime());
    }

    /**
     * Test attribute "technicians"
     */
    public function testPropertyTechnicians()
    {
        $testValue = [];
        
        $this->model->setTechnicians($testValue);
        $this->assertEquals($testValue, $this->model->getTechnicians());
    }

    /**
     * Test attribute "uploading_technician"
     */
    public function testPropertyUploadingTechnician()
    {
        $testValue = 'test';
        
        $this->model->setUploadingTechnician($testValue);
        $this->assertEquals($testValue, $this->model->getUploadingTechnician());
    }

    /**
     * Test attribute "upload_time"
     */
    public function testPropertyUploadTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setUploadTime($testValue);
        $this->assertEquals($testValue, $this->model->getUploadTime());
    }

    /**
     * Test attribute "poa_type"
     */
    public function testPropertyPoaType()
    {
        $enumInstance = new Poa();
        $allowedValues = $enumInstance->getPoaTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setPoaType($testValue);
        $this->assertEquals($testValue, $this->model->getPoaType());
    }
}
