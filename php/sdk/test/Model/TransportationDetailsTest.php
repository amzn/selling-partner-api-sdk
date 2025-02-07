<?php
/**
 * TransportationDetailsTest
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
use OpenAPI\Client\Model\vendor\shipments\v1\TransportationDetails;

/**
 * TransportationDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Transportation details for this shipment.
 * @package     OpenAPI\Client
 */
class TransportationDetailsTest extends TestCase
{

    private TransportationDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransportationDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransportationDetails"
     */
    public function testTransportationDetails()
    {
        $this->assertInstanceOf(TransportationDetails::class, $this->model);
    }

    /**
     * Test attribute "ship_mode"
     */
    public function testPropertyShipMode()
    {
        $enumInstance = new TransportationDetails();
        $allowedValues = $enumInstance->getShipModeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setShipMode($testValue);
        $this->assertEquals($testValue, $this->model->getShipMode());
    }

    /**
     * Test attribute "transportation_mode"
     */
    public function testPropertyTransportationMode()
    {
        $enumInstance = new TransportationDetails();
        $allowedValues = $enumInstance->getTransportationModeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setTransportationMode($testValue);
        $this->assertEquals($testValue, $this->model->getTransportationMode());
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
     * Test attribute "estimated_delivery_date"
     */
    public function testPropertyEstimatedDeliveryDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEstimatedDeliveryDate($testValue);
        $this->assertEquals($testValue, $this->model->getEstimatedDeliveryDate());
    }

    /**
     * Test attribute "shipment_delivery_date"
     */
    public function testPropertyShipmentDeliveryDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setShipmentDeliveryDate($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentDeliveryDate());
    }

    /**
     * Test attribute "carrier_details"
     */
    public function testPropertyCarrierDetails()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\shipments\v1\CarrierDetails();
        
        $this->model->setCarrierDetails($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierDetails());
    }

    /**
     * Test attribute "bill_of_lading_number"
     */
    public function testPropertyBillOfLadingNumber()
    {
        $testValue = 'test';
        
        $this->model->setBillOfLadingNumber($testValue);
        $this->assertEquals($testValue, $this->model->getBillOfLadingNumber());
    }
}
