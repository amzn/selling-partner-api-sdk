<?php
/**
 * TransportShipmentMeasurementsTest
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
use SpApi\Model\vendor\shipments\v1\TransportShipmentMeasurements;

/**
 * TransportShipmentMeasurementsTest Class Doc Comment
 *
 * @category    Class
 * @description Shipment measurement details.
 * @package     SpApi
 */
class TransportShipmentMeasurementsTest extends TestCase
{

    private TransportShipmentMeasurements $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransportShipmentMeasurements();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransportShipmentMeasurements"
     */
    public function testTransportShipmentMeasurements()
    {
        $this->assertInstanceOf(TransportShipmentMeasurements::class, $this->model);
    }

    /**
     * Test attribute "total_carton_count"
     */
    public function testPropertyTotalCartonCount()
    {
        $testValue = 123;
        
        $this->model->setTotalCartonCount($testValue);
        $this->assertEquals($testValue, $this->model->getTotalCartonCount());
    }

    /**
     * Test attribute "total_pallet_stackable"
     */
    public function testPropertyTotalPalletStackable()
    {
        $testValue = 123;
        
        $this->model->setTotalPalletStackable($testValue);
        $this->assertEquals($testValue, $this->model->getTotalPalletStackable());
    }

    /**
     * Test attribute "total_pallet_non_stackable"
     */
    public function testPropertyTotalPalletNonStackable()
    {
        $testValue = 123;
        
        $this->model->setTotalPalletNonStackable($testValue);
        $this->assertEquals($testValue, $this->model->getTotalPalletNonStackable());
    }

    /**
     * Test attribute "shipment_weight"
     */
    public function testPropertyShipmentWeight()
    {
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\Weight();
        
        $this->model->setShipmentWeight($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentWeight());
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
}
