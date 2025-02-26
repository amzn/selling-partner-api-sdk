<?php
/**
 * ScheduledDeliveryShipmentTest
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
use SpApi\Model\vendor\df\orders\v2021_12_28\ScheduledDeliveryShipment;

/**
 * ScheduledDeliveryShipmentTest Class Doc Comment
 *
 * @category    Class
 * @description Dates for the scheduled delivery shipments.
 * @package     SpApi
 */
class ScheduledDeliveryShipmentTest extends TestCase
{

    private ScheduledDeliveryShipment $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ScheduledDeliveryShipment();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ScheduledDeliveryShipment"
     */
    public function testScheduledDeliveryShipment()
    {
        $this->assertInstanceOf(ScheduledDeliveryShipment::class, $this->model);
    }

    /**
     * Test attribute "scheduled_delivery_service_type"
     */
    public function testPropertyScheduledDeliveryServiceType()
    {
        $testValue = 'test';
        
        $this->model->setScheduledDeliveryServiceType($testValue);
        $this->assertEquals($testValue, $this->model->getScheduledDeliveryServiceType());
    }

    /**
     * Test attribute "earliest_nominated_delivery_date"
     */
    public function testPropertyEarliestNominatedDeliveryDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEarliestNominatedDeliveryDate($testValue);
        $this->assertEquals($testValue, $this->model->getEarliestNominatedDeliveryDate());
    }

    /**
     * Test attribute "latest_nominated_delivery_date"
     */
    public function testPropertyLatestNominatedDeliveryDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setLatestNominatedDeliveryDate($testValue);
        $this->assertEquals($testValue, $this->model->getLatestNominatedDeliveryDate());
    }
}
