<?php
/**
 * ShipmentDatesTest
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
use SpApi\Model\vendor\df\orders\v2021_12_28\ShipmentDates;

/**
 * ShipmentDatesTest Class Doc Comment
 *
 * @category    Class
 * @description Shipment dates.
 * @package     SpApi
 */
class ShipmentDatesTest extends TestCase
{

    private ShipmentDates $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentDates();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentDates"
     */
    public function testShipmentDates()
    {
        $this->assertInstanceOf(ShipmentDates::class, $this->model);
    }

    /**
     * Test attribute "required_ship_date"
     */
    public function testPropertyRequiredShipDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setRequiredShipDate($testValue);
        $this->assertEquals($testValue, $this->model->getRequiredShipDate());
    }

    /**
     * Test attribute "promised_delivery_date"
     */
    public function testPropertyPromisedDeliveryDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPromisedDeliveryDate($testValue);
        $this->assertEquals($testValue, $this->model->getPromisedDeliveryDate());
    }
}
