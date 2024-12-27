<?php
/**
 * AppointmentSlotTimeTest
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
use OpenAPI\Client\Model\fulfillmentinbound\AppointmentSlotTime;

/**
 * AppointmentSlotTimeTest Class Doc Comment
 *
 * @category    Class
 * @description An appointment slot time with start and end.
 * @package     OpenAPI\Client
 */
class AppointmentSlotTimeTest extends TestCase
{

    private AppointmentSlotTime $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AppointmentSlotTime();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AppointmentSlotTime"
     */
    public function testAppointmentSlotTime()
    {
        $this->assertInstanceOf(AppointmentSlotTime::class, $this->model);
    }

    /**
     * Test attribute "end_time"
     */
    public function testPropertyEndTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEndTime($testValue);
        $this->assertEquals($testValue, $this->model->getEndTime());
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
}
