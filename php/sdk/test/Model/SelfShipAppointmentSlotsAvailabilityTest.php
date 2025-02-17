<?php
/**
 * SelfShipAppointmentSlotsAvailabilityTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\SelfShipAppointmentSlotsAvailability;

/**
 * SelfShipAppointmentSlotsAvailabilityTest Class Doc Comment
 *
 * @category    Class
 * @description The self ship appointment time slots availability and an expiration date for which the slots can be scheduled.
 * @package     SpApi
 */
class SelfShipAppointmentSlotsAvailabilityTest extends TestCase
{

    private SelfShipAppointmentSlotsAvailability $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SelfShipAppointmentSlotsAvailability();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SelfShipAppointmentSlotsAvailability"
     */
    public function testSelfShipAppointmentSlotsAvailability()
    {
        $this->assertInstanceOf(SelfShipAppointmentSlotsAvailability::class, $this->model);
    }

    /**
     * Test attribute "expires_at"
     */
    public function testPropertyExpiresAt()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setExpiresAt($testValue);
        $this->assertEquals($testValue, $this->model->getExpiresAt());
    }

    /**
     * Test attribute "slots"
     */
    public function testPropertySlots()
    {
        $testValue = [];
        
        $this->model->setSlots($testValue);
        $this->assertEquals($testValue, $this->model->getSlots());
    }
}
