<?php
/**
 * AppointmentTimeInputTest
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
use SpApi\Model\services\v1\AppointmentTimeInput;

/**
 * AppointmentTimeInputTest Class Doc Comment
 *
 * @category    Class
 * @description The input appointment time details.
 * @package     SpApi
 */
class AppointmentTimeInputTest extends TestCase
{

    private AppointmentTimeInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AppointmentTimeInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AppointmentTimeInput"
     */
    public function testAppointmentTimeInput()
    {
        $this->assertInstanceOf(AppointmentTimeInput::class, $this->model);
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
     * Test attribute "duration_in_minutes"
     */
    public function testPropertyDurationInMinutes()
    {
        $testValue = 123;
        
        $this->model->setDurationInMinutes($testValue);
        $this->assertEquals($testValue, $this->model->getDurationInMinutes());
    }
}
