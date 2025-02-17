<?php
/**
 * InboundShipmentTest
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
use SpApi\Model\awd\v2024_05_09\InboundShipment;

/**
 * InboundShipmentTest Class Doc Comment
 *
 * @category    Class
 * @description Represents an AWD inbound shipment.
 * @package     SpApi
 */
class InboundShipmentTest extends TestCase
{

    private InboundShipment $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundShipment();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundShipment"
     */
    public function testInboundShipment()
    {
        $this->assertInstanceOf(InboundShipment::class, $this->model);
    }

    /**
     * Test attribute "carrier_code"
     */
    public function testPropertyCarrierCode()
    {
        
        $testValue = new \SpApi\Model\awd\v2024_05_09\CarrierCode();
        
        $this->model->setCarrierCode($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierCode());
    }

    /**
     * Test attribute "created_at"
     */
    public function testPropertyCreatedAt()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setCreatedAt($testValue);
        $this->assertEquals($testValue, $this->model->getCreatedAt());
    }

    /**
     * Test attribute "destination_address"
     */
    public function testPropertyDestinationAddress()
    {
        
        $testValue = new \SpApi\Model\awd\v2024_05_09\Address();
        
        $this->model->setDestinationAddress($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationAddress());
    }

    /**
     * Test attribute "external_reference_id"
     */
    public function testPropertyExternalReferenceId()
    {
        $testValue = 'test';
        
        $this->model->setExternalReferenceId($testValue);
        $this->assertEquals($testValue, $this->model->getExternalReferenceId());
    }

    /**
     * Test attribute "order_id"
     */
    public function testPropertyOrderId()
    {
        $testValue = 'test';
        
        $this->model->setOrderId($testValue);
        $this->assertEquals($testValue, $this->model->getOrderId());
    }

    /**
     * Test attribute "origin_address"
     */
    public function testPropertyOriginAddress()
    {
        
        $testValue = new \SpApi\Model\awd\v2024_05_09\Address();
        
        $this->model->setOriginAddress($testValue);
        $this->assertEquals($testValue, $this->model->getOriginAddress());
    }

    /**
     * Test attribute "received_quantity"
     */
    public function testPropertyReceivedQuantity()
    {
        $testValue = [];
        
        $this->model->setReceivedQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getReceivedQuantity());
    }

    /**
     * Test attribute "ship_by"
     */
    public function testPropertyShipBy()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setShipBy($testValue);
        $this->assertEquals($testValue, $this->model->getShipBy());
    }

    /**
     * Test attribute "shipment_container_quantities"
     */
    public function testPropertyShipmentContainerQuantities()
    {
        $testValue = [];
        
        $this->model->setShipmentContainerQuantities($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentContainerQuantities());
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
     * Test attribute "shipment_sku_quantities"
     */
    public function testPropertyShipmentSkuQuantities()
    {
        $testValue = [];
        
        $this->model->setShipmentSkuQuantities($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentSkuQuantities());
    }

    /**
     * Test attribute "destination_region"
     */
    public function testPropertyDestinationRegion()
    {
        $testValue = 'test';
        
        $this->model->setDestinationRegion($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationRegion());
    }

    /**
     * Test attribute "shipment_status"
     */
    public function testPropertyShipmentStatus()
    {
        $enumInstance = new \SpApi\Model\awd\v2024_05_09\InboundShipmentStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setShipmentStatus($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentStatus());
    }

    /**
     * Test attribute "tracking_id"
     */
    public function testPropertyTrackingId()
    {
        $testValue = 'test';
        
        $this->model->setTrackingId($testValue);
        $this->assertEquals($testValue, $this->model->getTrackingId());
    }

    /**
     * Test attribute "updated_at"
     */
    public function testPropertyUpdatedAt()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setUpdatedAt($testValue);
        $this->assertEquals($testValue, $this->model->getUpdatedAt());
    }

    /**
     * Test attribute "warehouse_reference_id"
     */
    public function testPropertyWarehouseReferenceId()
    {
        $testValue = 'test';
        
        $this->model->setWarehouseReferenceId($testValue);
        $this->assertEquals($testValue, $this->model->getWarehouseReferenceId());
    }
}
