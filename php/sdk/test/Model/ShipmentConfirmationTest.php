<?php
/**
 * ShipmentConfirmationTest
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
use OpenAPI\Client\Model\vendor\df\shipping\ShipmentConfirmation;

/**
 * ShipmentConfirmationTest Class Doc Comment
 *
 * @category    Class
 * @description Represents the confirmation details of a shipment, including the purchase order number and other shipment details.
 * @package     OpenAPI\Client
 */
class ShipmentConfirmationTest extends TestCase
{

    private ShipmentConfirmation $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentConfirmation();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentConfirmation"
     */
    public function testShipmentConfirmation()
    {
        $this->assertInstanceOf(ShipmentConfirmation::class, $this->model);
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
     * Test attribute "shipment_details"
     */
    public function testPropertyShipmentDetails()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\df\shipping\ShipmentDetails();
        
        $this->model->setShipmentDetails($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentDetails());
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
     * Test attribute "items"
     */
    public function testPropertyItems()
    {
        $testValue = [];
        
        $this->model->setItems($testValue);
        $this->assertEquals($testValue, $this->model->getItems());
    }

    /**
     * Test attribute "containers"
     */
    public function testPropertyContainers()
    {
        $testValue = [];
        
        $this->model->setContainers($testValue);
        $this->assertEquals($testValue, $this->model->getContainers());
    }
}
