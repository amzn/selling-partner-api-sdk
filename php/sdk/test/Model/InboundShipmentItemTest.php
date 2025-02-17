<?php
/**
 * InboundShipmentItemTest
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
use SpApi\Model\fulfillment\inbound\v0\InboundShipmentItem;

/**
 * InboundShipmentItemTest Class Doc Comment
 *
 * @category    Class
 * @description Item information for an inbound shipment. Submitted with a call to the createInboundShipment or updateInboundShipment operation.
 * @package     SpApi
 */
class InboundShipmentItemTest extends TestCase
{

    private InboundShipmentItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundShipmentItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundShipmentItem"
     */
    public function testInboundShipmentItem()
    {
        $this->assertInstanceOf(InboundShipmentItem::class, $this->model);
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
     * Test attribute "seller_sku"
     */
    public function testPropertySellerSku()
    {
        $testValue = 'test';
        
        $this->model->setSellerSku($testValue);
        $this->assertEquals($testValue, $this->model->getSellerSku());
    }

    /**
     * Test attribute "fulfillment_network_sku"
     */
    public function testPropertyFulfillmentNetworkSku()
    {
        $testValue = 'test';
        
        $this->model->setFulfillmentNetworkSku($testValue);
        $this->assertEquals($testValue, $this->model->getFulfillmentNetworkSku());
    }

    /**
     * Test attribute "quantity_shipped"
     */
    public function testPropertyQuantityShipped()
    {
        $testValue = 123;
        
        $this->model->setQuantityShipped($testValue);
        $this->assertEquals($testValue, $this->model->getQuantityShipped());
    }

    /**
     * Test attribute "quantity_received"
     */
    public function testPropertyQuantityReceived()
    {
        $testValue = 123;
        
        $this->model->setQuantityReceived($testValue);
        $this->assertEquals($testValue, $this->model->getQuantityReceived());
    }

    /**
     * Test attribute "quantity_in_case"
     */
    public function testPropertyQuantityInCase()
    {
        $testValue = 123;
        
        $this->model->setQuantityInCase($testValue);
        $this->assertEquals($testValue, $this->model->getQuantityInCase());
    }

    /**
     * Test attribute "release_date"
     */
    public function testPropertyReleaseDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setReleaseDate($testValue);
        $this->assertEquals($testValue, $this->model->getReleaseDate());
    }

    /**
     * Test attribute "prep_details_list"
     */
    public function testPropertyPrepDetailsList()
    {
        $testValue = [];
        
        $this->model->setPrepDetailsList($testValue);
        $this->assertEquals($testValue, $this->model->getPrepDetailsList());
    }
}
