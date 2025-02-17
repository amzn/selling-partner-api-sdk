<?php
/**
 * FulfillmentPreviewShipmentTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\FulfillmentPreviewShipment;

/**
 * FulfillmentPreviewShipmentTest Class Doc Comment
 *
 * @category    Class
 * @description Delivery and item information for a shipment in a fulfillment order preview.
 * @package     SpApi
 */
class FulfillmentPreviewShipmentTest extends TestCase
{

    private FulfillmentPreviewShipment $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FulfillmentPreviewShipment();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FulfillmentPreviewShipment"
     */
    public function testFulfillmentPreviewShipment()
    {
        $this->assertInstanceOf(FulfillmentPreviewShipment::class, $this->model);
    }

    /**
     * Test attribute "earliest_ship_date"
     */
    public function testPropertyEarliestShipDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEarliestShipDate($testValue);
        $this->assertEquals($testValue, $this->model->getEarliestShipDate());
    }

    /**
     * Test attribute "latest_ship_date"
     */
    public function testPropertyLatestShipDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setLatestShipDate($testValue);
        $this->assertEquals($testValue, $this->model->getLatestShipDate());
    }

    /**
     * Test attribute "earliest_arrival_date"
     */
    public function testPropertyEarliestArrivalDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setEarliestArrivalDate($testValue);
        $this->assertEquals($testValue, $this->model->getEarliestArrivalDate());
    }

    /**
     * Test attribute "latest_arrival_date"
     */
    public function testPropertyLatestArrivalDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setLatestArrivalDate($testValue);
        $this->assertEquals($testValue, $this->model->getLatestArrivalDate());
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
     * Test attribute "fulfillment_preview_items"
     */
    public function testPropertyFulfillmentPreviewItems()
    {
        $testValue = [];
        
        $this->model->setFulfillmentPreviewItems($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentPreviewItems());
    }
}
