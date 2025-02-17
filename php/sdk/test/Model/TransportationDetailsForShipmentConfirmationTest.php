<?php
/**
 * TransportationDetailsForShipmentConfirmationTest
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
use SpApi\Model\vendor\shipments\v1\TransportationDetailsForShipmentConfirmation;

/**
 * TransportationDetailsForShipmentConfirmationTest Class Doc Comment
 *
 * @category    Class
 * @description Transportation details for this shipment.
 * @package     SpApi
 */
class TransportationDetailsForShipmentConfirmationTest extends TestCase
{

    private TransportationDetailsForShipmentConfirmation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransportationDetailsForShipmentConfirmation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransportationDetailsForShipmentConfirmation"
     */
    public function testTransportationDetailsForShipmentConfirmation()
    {
        $this->assertInstanceOf(TransportationDetailsForShipmentConfirmation::class, $this->model);
    }

    /**
     * Test attribute "carrier_scac"
     */
    public function testPropertyCarrierScac()
    {
        $testValue = 'test';
        
        $this->model->setCarrierScac($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierScac());
    }

    /**
     * Test attribute "carrier_shipment_reference_number"
     */
    public function testPropertyCarrierShipmentReferenceNumber()
    {
        $testValue = 'test';
        
        $this->model->setCarrierShipmentReferenceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierShipmentReferenceNumber());
    }

    /**
     * Test attribute "transportation_mode"
     */
    public function testPropertyTransportationMode()
    {
        $enumInstance = new TransportationDetailsForShipmentConfirmation();
        $allowedValues = $enumInstance->getTransportationModeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setTransportationMode($testValue);
        $this->assertEquals($testValue, $this->model->getTransportationMode());
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
