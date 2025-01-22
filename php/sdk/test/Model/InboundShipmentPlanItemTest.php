<?php
/**
 * InboundShipmentPlanItemTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\InboundShipmentPlanItem;

/**
 * InboundShipmentPlanItemTest Class Doc Comment
 *
 * @category    Class
 * @description Item information used to create an inbound shipment. Returned by the createInboundShipmentPlan operation.
 * @package     OpenAPI\Client
 */
class InboundShipmentPlanItemTest extends TestCase
{

    private InboundShipmentPlanItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundShipmentPlanItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundShipmentPlanItem"
     */
    public function testInboundShipmentPlanItem()
    {
        $this->assertInstanceOf(InboundShipmentPlanItem::class, $this->model);
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
     * Test attribute "quantity"
     */
    public function testPropertyQuantity()
    {
        $testValue = 123;
        
        $this->model->setQuantity($testValue);
        $this->assertEquals($testValue, $this->model->getQuantity());
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
