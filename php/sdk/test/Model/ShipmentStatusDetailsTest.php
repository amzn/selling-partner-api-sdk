<?php
/**
 * ShipmentStatusDetailsTest
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
use OpenAPI\Client\Model\vendor\shipments\ShipmentStatusDetails;

/**
 * ShipmentStatusDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Shipment Status details.
 * @package     OpenAPI\Client
 */
class ShipmentStatusDetailsTest extends TestCase
{

    private ShipmentStatusDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentStatusDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentStatusDetails"
     */
    public function testShipmentStatusDetails()
    {
        $this->assertInstanceOf(ShipmentStatusDetails::class, $this->model);
    }

    /**
     * Test attribute "shipment_status"
     */
    public function testPropertyShipmentStatus()
    {
        $enumInstance = new ShipmentStatusDetails();
        $allowedValues = $enumInstance->getShipmentStatusAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setShipmentStatus($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentStatus());
    }

    /**
     * Test attribute "shipment_status_date"
     */
    public function testPropertyShipmentStatusDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setShipmentStatusDate($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentStatusDate());
    }
}
