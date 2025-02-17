<?php
/**
 * ShipmentMeasurementsTest
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
use SpApi\Model\vendor\shipments\v1\ShipmentMeasurements;

/**
 * ShipmentMeasurementsTest Class Doc Comment
 *
 * @category    Class
 * @description Shipment measurement details.
 * @package     SpApi
 */
class ShipmentMeasurementsTest extends TestCase
{

    private ShipmentMeasurements $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentMeasurements();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentMeasurements"
     */
    public function testShipmentMeasurements()
    {
        $this->assertInstanceOf(ShipmentMeasurements::class, $this->model);
    }

    /**
     * Test attribute "gross_shipment_weight"
     */
    public function testPropertyGrossShipmentWeight()
    {
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\Weight();
        
        $this->model->setGrossShipmentWeight($testValue);
        $this->assertEquals($testValue, $this->model->getGrossShipmentWeight());
    }

    /**
     * Test attribute "shipment_volume"
     */
    public function testPropertyShipmentVolume()
    {
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\Volume();
        
        $this->model->setShipmentVolume($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentVolume());
    }

    /**
     * Test attribute "carton_count"
     */
    public function testPropertyCartonCount()
    {
        $testValue = 123;
        
        $this->model->setCartonCount($testValue);
        $this->assertEquals($testValue, $this->model->getCartonCount());
    }

    /**
     * Test attribute "pallet_count"
     */
    public function testPropertyPalletCount()
    {
        $testValue = 123;
        
        $this->model->setPalletCount($testValue);
        $this->assertEquals($testValue, $this->model->getPalletCount());
    }
}
