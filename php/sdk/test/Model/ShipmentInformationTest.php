<?php
/**
 * ShipmentInformationTest
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
use SpApi\Model\vendor\shipments\v1\ShipmentInformation;

/**
 * ShipmentInformationTest Class Doc Comment
 *
 * @category    Class
 * @description Shipment Information details for Label request.
 * @package     SpApi
 */
class ShipmentInformationTest extends TestCase
{

    private ShipmentInformation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentInformation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentInformation"
     */
    public function testShipmentInformation()
    {
        $this->assertInstanceOf(ShipmentInformation::class, $this->model);
    }

    /**
     * Test attribute "vendor_details"
     */
    public function testPropertyVendorDetails()
    {
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\VendorDetails();
        
        $this->model->setVendorDetails($testValue);
        $this->assertEquals($testValue, $this->model->getVendorDetails());
    }

    /**
     * Test attribute "buyer_reference_number"
     */
    public function testPropertyBuyerReferenceNumber()
    {
        $testValue = 'test';
        
        $this->model->setBuyerReferenceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getBuyerReferenceNumber());
    }

    /**
     * Test attribute "ship_to_party"
     */
    public function testPropertyShipToParty()
    {
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\PartyIdentification();
        
        $this->model->setShipToParty($testValue);
        $this->assertEquals($testValue, $this->model->getShipToParty());
    }

    /**
     * Test attribute "ship_from_party"
     */
    public function testPropertyShipFromParty()
    {
        
        $testValue = new \SpApi\Model\vendor\shipments\v1\PartyIdentification();
        
        $this->model->setShipFromParty($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromParty());
    }

    /**
     * Test attribute "warehouse_id"
     */
    public function testPropertyWarehouseId()
    {
        $testValue = 'test';
        
        $this->model->setWarehouseId($testValue);
        $this->assertEquals($testValue, $this->model->getWarehouseId());
    }

    /**
     * Test attribute "master_tracking_id"
     */
    public function testPropertyMasterTrackingId()
    {
        $testValue = 'test';
        
        $this->model->setMasterTrackingId($testValue);
        $this->assertEquals($testValue, $this->model->getMasterTrackingId());
    }

    /**
     * Test attribute "total_label_count"
     */
    public function testPropertyTotalLabelCount()
    {
        $testValue = 123;
        
        $this->model->setTotalLabelCount($testValue);
        $this->assertEquals($testValue, $this->model->getTotalLabelCount());
    }

    /**
     * Test attribute "ship_mode"
     */
    public function testPropertyShipMode()
    {
        $enumInstance = new ShipmentInformation();
        $allowedValues = $enumInstance->getShipModeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setShipMode($testValue);
        $this->assertEquals($testValue, $this->model->getShipMode());
    }
}
