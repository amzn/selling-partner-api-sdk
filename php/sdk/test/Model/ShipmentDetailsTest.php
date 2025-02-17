<?php
/**
 * ShipmentDetailsTest
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
use SpApi\Model\vendor\df\shipping\v2021_12_28\ShipmentDetails;

/**
 * ShipmentDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Details about a shipment.
 * @package     SpApi
 */
class ShipmentDetailsTest extends TestCase
{

    private ShipmentDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentDetails"
     */
    public function testShipmentDetails()
    {
        $this->assertInstanceOf(ShipmentDetails::class, $this->model);
    }

    /**
     * Test attribute "shipped_date"
     */
    public function testPropertyShippedDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setShippedDate($testValue);
        $this->assertEquals($testValue, $this->model->getShippedDate());
    }

    /**
     * Test attribute "shipment_status"
     */
    public function testPropertyShipmentStatus()
    {
        $enumInstance = new ShipmentDetails();
        $allowedValues = $enumInstance->getShipmentStatusAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setShipmentStatus($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentStatus());
    }

    /**
     * Test attribute "is_priority_shipment"
     */
    public function testPropertyIsPriorityShipment()
    {
        $testValue = true;
        
        $this->model->setIsPriorityShipment($testValue);
        $this->assertEquals($testValue, $this->model->getIsPriorityShipment());
    }

    /**
     * Test attribute "vendor_order_number"
     */
    public function testPropertyVendorOrderNumber()
    {
        $testValue = 'test';
        
        $this->model->setVendorOrderNumber($testValue);
        $this->assertEquals($testValue, $this->model->getVendorOrderNumber());
    }

    /**
     * Test attribute "estimated_delivery_date"
     */
    public function testPropertyEstimatedDeliveryDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEstimatedDeliveryDate($testValue);
        $this->assertEquals($testValue, $this->model->getEstimatedDeliveryDate());
    }
}
