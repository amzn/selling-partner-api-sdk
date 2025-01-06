<?php
/**
 * ShipmentScheduleTest
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
use OpenAPI\Client\Model\vendorDfShipping\ShipmentSchedule;

/**
 * ShipmentScheduleTest Class Doc Comment
 *
 * @category    Class
 * @description Details about the estimated delivery window.
 * @package     OpenAPI\Client
 */
class ShipmentScheduleTest extends TestCase
{

    private ShipmentSchedule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentSchedule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentSchedule"
     */
    public function testShipmentSchedule()
    {
        $this->assertInstanceOf(ShipmentSchedule::class, $this->model);
    }

    /**
     * Test attribute "estimated_delivery_date_time"
     */
    public function testPropertyEstimatedDeliveryDateTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEstimatedDeliveryDateTime($testValue);
        $this->assertEquals($testValue, $this->model->getEstimatedDeliveryDateTime());
    }

    /**
     * Test attribute "appt_window_start_date_time"
     */
    public function testPropertyApptWindowStartDateTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setApptWindowStartDateTime($testValue);
        $this->assertEquals($testValue, $this->model->getApptWindowStartDateTime());
    }

    /**
     * Test attribute "appt_window_end_date_time"
     */
    public function testPropertyApptWindowEndDateTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setApptWindowEndDateTime($testValue);
        $this->assertEquals($testValue, $this->model->getApptWindowEndDateTime());
    }
}
