<?php
/**
 * FulfillmentShipmentTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\FulfillmentShipment;

/**
 * FulfillmentShipmentTest Class Doc Comment
 *
 * @category    Class
 * @description Delivery and item information for a shipment in a fulfillment order.
 * @package     SpApi
 */
class FulfillmentShipmentTest extends TestCase
{

    private FulfillmentShipment $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FulfillmentShipment();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FulfillmentShipment"
     */
    public function testFulfillmentShipment()
    {
        $this->assertInstanceOf(FulfillmentShipment::class, $this->model);
    }

    /**
     * Test attribute "amazon_shipment_id"
     */
    public function testPropertyAmazonShipmentId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonShipmentId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonShipmentId());
    }

    /**
     * Test attribute "fulfillment_center_id"
     */
    public function testPropertyFulfillmentCenterId()
    {
        $testValue = 'test';
        
        $this->model->setFulfillmentCenterId($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentCenterId());
    }

    /**
     * Test attribute "fulfillment_shipment_status"
     */
    public function testPropertyFulfillmentShipmentStatus()
    {
        $enumInstance = new FulfillmentShipment();
        $allowedValues = $enumInstance->getFulfillmentShipmentStatusAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setFulfillmentShipmentStatus($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentShipmentStatus());
    }

    /**
     * Test attribute "shipping_date"
     */
    public function testPropertyShippingDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setShippingDate($testValue);
        $this->assertEquals($testValue, $this->model->getShippingDate());
    }

    /**
     * Test attribute "estimated_arrival_date"
     */
    public function testPropertyEstimatedArrivalDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEstimatedArrivalDate($testValue);
        $this->assertEquals($testValue, $this->model->getEstimatedArrivalDate());
    }

    /**
     * Test attribute "shipping_notes"
     */
    public function testPropertyShippingNotes()
    {
        $testValue = [];
        
        $this->model->setShippingNotes($testValue);
        $this->assertEquals($testValue, $this->model->getShippingNotes());
    }

    /**
     * Test attribute "fulfillment_shipment_item"
     */
    public function testPropertyFulfillmentShipmentItem()
    {
        $testValue = [];
        
        $this->model->setFulfillmentShipmentItem($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentShipmentItem());
    }

    /**
     * Test attribute "fulfillment_shipment_package"
     */
    public function testPropertyFulfillmentShipmentPackage()
    {
        $testValue = [];
        
        $this->model->setFulfillmentShipmentPackage($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentShipmentPackage());
    }
}
