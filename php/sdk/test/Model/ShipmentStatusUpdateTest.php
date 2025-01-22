<?php
/**
 * ShipmentStatusUpdateTest
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
use OpenAPI\Client\Model\vendor\df\shipping\ShipmentStatusUpdate;

/**
 * ShipmentStatusUpdateTest Class Doc Comment
 *
 * @category    Class
 * @description Represents an update to the status of a shipment.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\vendor\df\shipping\PartyIdentification();
        
        $this->model->setSellingParty($testValue);
        $this->assertEquals($testValue, $this->model->getSellingParty());
    }

    /**
     * Test attribute "ship_from_party"
     */
    public function testPropertyShipFromParty()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\df\shipping\PartyIdentification();
        
        $this->model->setShipFromParty($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromParty());
    }

    /**
     * Test attribute "status_update_details"
     */
    public function testPropertyStatusUpdateDetails()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\df\shipping\StatusUpdateDetails();
        
        $this->model->setStatusUpdateDetails($testValue);
        $this->assertEquals($testValue, $this->model->getStatusUpdateDetails());
    }
}
