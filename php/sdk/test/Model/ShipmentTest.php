<?php
/**
 * ShipmentTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\Shipment;

/**
 * ShipmentTest Class Doc Comment
 *
 * @category    Class
 * @description Contains information pertaining to a shipment in an inbound plan.
 * @package     SpApi
 */
class ShipmentTest extends TestCase
{

    private Shipment $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Shipment();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Shipment"
     */
    public function testShipment()
    {
        $this->assertInstanceOf(Shipment::class, $this->model);
    }

    /**
     * Test attribute "amazon_reference_id"
     */
    public function testPropertyAmazonReferenceId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonReferenceId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonReferenceId());
    }

    /**
     * Test attribute "contact_information"
     */
    public function testPropertyContactInformation()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\ContactInformation();
        
        $this->model->setContactInformation($testValue);
        $this->assertEquals($testValue, $this->model->getContactInformation());
    }

    /**
     * Test attribute "dates"
     */
    public function testPropertyDates()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\Dates();
        
        $this->model->setDates($testValue);
        $this->assertEquals($testValue, $this->model->getDates());
    }

    /**
     * Test attribute "destination"
     */
    public function testPropertyDestination()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\ShipmentDestination();
        
        $this->model->setDestination($testValue);
        $this->assertEquals($testValue, $this->model->getDestination());
    }

    /**
     * Test attribute "freight_information"
     */
    public function testPropertyFreightInformation()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\FreightInformation();
        
        $this->model->setFreightInformation($testValue);
        $this->assertEquals($testValue, $this->model->getFreightInformation());
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }

    /**
     * Test attribute "placement_option_id"
     */
    public function testPropertyPlacementOptionId()
    {
        $testValue = 'test';
        
        $this->model->setPlacementOptionId($testValue);
        $this->assertEquals($testValue, $this->model->getPlacementOptionId());
    }

    /**
     * Test attribute "selected_delivery_window"
     */
    public function testPropertySelectedDeliveryWindow()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\SelectedDeliveryWindow();
        
        $this->model->setSelectedDeliveryWindow($testValue);
        $this->assertEquals($testValue, $this->model->getSelectedDeliveryWindow());
    }

    /**
     * Test attribute "selected_transportation_option_id"
     */
    public function testPropertySelectedTransportationOptionId()
    {
        $testValue = 'test';
        
        $this->model->setSelectedTransportationOptionId($testValue);
        $this->assertEquals($testValue, $this->model->getSelectedTransportationOptionId());
    }

    /**
     * Test attribute "self_ship_appointment_details"
     */
    public function testPropertySelfShipAppointmentDetails()
    {
        $testValue = [];
        
        $this->model->setSelfShipAppointmentDetails($testValue);
        $this->assertEquals($testValue, $this->model->getSelfShipAppointmentDetails());
    }

    /**
     * Test attribute "shipment_confirmation_id"
     */
    public function testPropertyShipmentConfirmationId()
    {
        $testValue = 'test';
        
        $this->model->setShipmentConfirmationId($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentConfirmationId());
    }

    /**
     * Test attribute "shipment_id"
     */
    public function testPropertyShipmentId()
    {
        $testValue = 'test';
        
        $this->model->setShipmentId($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentId());
    }

    /**
     * Test attribute "source"
     */
    public function testPropertySource()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\ShipmentSource();
        
        $this->model->setSource($testValue);
        $this->assertEquals($testValue, $this->model->getSource());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $testValue = 'test';
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "tracking_details"
     */
    public function testPropertyTrackingDetails()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\TrackingDetails();
        
        $this->model->setTrackingDetails($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingDetails());
    }
}
