<?php
/**
 * ShipmentTransportationConfigurationTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ShipmentTransportationConfiguration;

/**
 * ShipmentTransportationConfigurationTest Class Doc Comment
 *
 * @category    Class
 * @description Details needed to generate the transportation options.
 * @package     OpenAPI\Client
 */
class ShipmentTransportationConfigurationTest extends TestCase
{

    private ShipmentTransportationConfiguration $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentTransportationConfiguration();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentTransportationConfiguration"
     */
    public function testShipmentTransportationConfiguration()
    {
        $this->assertInstanceOf(ShipmentTransportationConfiguration::class, $this->model);
    }

    /**
     * Test attribute "contact_information"
     */
    public function testPropertyContactInformation()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\ContactInformation();
        
        $this->model->setContactInformation($testValue);
        $this->assertEquals($testValue, $this->model->getContactInformation());
    }

    /**
     * Test attribute "freight_information"
     */
    public function testPropertyFreightInformation()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\FreightInformation();
        
        $this->model->setFreightInformation($testValue);
        $this->assertEquals($testValue, $this->model->getFreightInformation());
    }

    /**
     * Test attribute "pallets"
     */
    public function testPropertyPallets()
    {
        $testValue = [];
        
        $this->model->setPallets($testValue);
        $this->assertEquals($testValue, $this->model->getPallets());
    }

    /**
     * Test attribute "ready_to_ship_window"
     */
    public function testPropertyReadyToShipWindow()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\WindowInput();
        
        $this->model->setReadyToShipWindow($testValue);
        $this->assertEquals($testValue, $this->model->getReadyToShipWindow());
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
}
