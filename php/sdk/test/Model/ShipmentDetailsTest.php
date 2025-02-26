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
use SpApi\Model\vendor\df\orders\v2021_12_28\ShipmentDetails;

/**
 * ShipmentDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Shipment details required for the shipment.
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
     * Test attribute "is_priority_shipment"
     */
    public function testPropertyIsPriorityShipment()
    {
        $testValue = true;
        
        $this->model->setIsPriorityShipment($testValue);
        $this->assertEquals($testValue, $this->model->getIsPriorityShipment());
    }

    /**
     * Test attribute "is_scheduled_delivery_shipment"
     */
    public function testPropertyIsScheduledDeliveryShipment()
    {
        $testValue = true;
        
        $this->model->setIsScheduledDeliveryShipment($testValue);
        $this->assertEquals($testValue, $this->model->getIsScheduledDeliveryShipment());
    }

    /**
     * Test attribute "is_pslip_required"
     */
    public function testPropertyIsPslipRequired()
    {
        $testValue = true;
        
        $this->model->setIsPslipRequired($testValue);
        $this->assertEquals($testValue, $this->model->getIsPslipRequired());
    }

    /**
     * Test attribute "is_gift"
     */
    public function testPropertyIsGift()
    {
        $testValue = true;
        
        $this->model->setIsGift($testValue);
        $this->assertEquals($testValue, $this->model->getIsGift());
    }

    /**
     * Test attribute "ship_method"
     */
    public function testPropertyShipMethod()
    {
        $testValue = 'test';
        
        $this->model->setShipMethod($testValue);
        $this->assertEquals($testValue, $this->model->getShipMethod());
    }

    /**
     * Test attribute "shipment_dates"
     */
    public function testPropertyShipmentDates()
    {
        
        $testValue = new \SpApi\Model\vendor\df\orders\v2021_12_28\ShipmentDates();
        
        $this->model->setShipmentDates($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentDates());
    }

    /**
     * Test attribute "message_to_customer"
     */
    public function testPropertyMessageToCustomer()
    {
        $testValue = 'test';
        
        $this->model->setMessageToCustomer($testValue);
        $this->assertEquals($testValue, $this->model->getMessageToCustomer());
    }
}
