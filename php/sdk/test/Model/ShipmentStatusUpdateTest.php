<?php
/**
 * ShipmentStatusUpdateTest
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
use SpApi\Model\vendor\df\shipping\v2021_12_28\ShipmentStatusUpdate;

/**
 * ShipmentStatusUpdateTest Class Doc Comment
 *
 * @category    Class
 * @description Represents an update to the status of a shipment.
 * @package     SpApi
 */
class ShipmentStatusUpdateTest extends TestCase
{

    private ShipmentStatusUpdate $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentStatusUpdate();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentStatusUpdate"
     */
    public function testShipmentStatusUpdate()
    {
        $this->assertInstanceOf(ShipmentStatusUpdate::class, $this->model);
    }

    /**
     * Test attribute "purchase_order_number"
     */
    public function testPropertyPurchaseOrderNumber()
    {
        $testValue = 'test';
        
        $this->model->setPurchaseOrderNumber($testValue);
        $this->assertEquals($testValue, $this->model->getPurchaseOrderNumber());
    }

    /**
     * Test attribute "selling_party"
     */
    public function testPropertySellingParty()
    {
        
        $testValue = new \SpApi\Model\vendor\df\shipping\v2021_12_28\PartyIdentification();
        
        $this->model->setSellingParty($testValue);
        $this->assertEquals($testValue, $this->model->getSellingParty());
    }

    /**
     * Test attribute "ship_from_party"
     */
    public function testPropertyShipFromParty()
    {
        
        $testValue = new \SpApi\Model\vendor\df\shipping\v2021_12_28\PartyIdentification();
        
        $this->model->setShipFromParty($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromParty());
    }

    /**
     * Test attribute "status_update_details"
     */
    public function testPropertyStatusUpdateDetails()
    {
        
        $testValue = new \SpApi\Model\vendor\df\shipping\v2021_12_28\StatusUpdateDetails();
        
        $this->model->setStatusUpdateDetails($testValue);
        $this->assertEquals($testValue, $this->model->getStatusUpdateDetails());
    }
}
