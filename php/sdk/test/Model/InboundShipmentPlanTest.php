<?php
/**
 * InboundShipmentPlanTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\InboundShipmentPlan;

/**
 * InboundShipmentPlanTest Class Doc Comment
 *
 * @category    Class
 * @description Inbound shipment information used to create an inbound shipment. Returned by the createInboundShipmentPlan operation.
 * @package     OpenAPI\Client
 */
class InboundShipmentPlanTest extends TestCase
{

    private InboundShipmentPlan $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundShipmentPlan();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundShipmentPlan"
     */
    public function testInboundShipmentPlan()
    {
        $this->assertInstanceOf(InboundShipmentPlan::class, $this->model);
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
     * Test attribute "destination_fulfillment_center_id"
     */
    public function testPropertyDestinationFulfillmentCenterId()
    {
        $testValue = 'test';
        
        $this->model->setDestinationFulfillmentCenterId($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationFulfillmentCenterId());
    }

    /**
     * Test attribute "ship_to_address"
     */
    public function testPropertyShipToAddress()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\Address();
        
        $this->model->setShipToAddress($testValue);
        $this->assertEquals($testValue, $this->model->getShipToAddress());
    }

    /**
     * Test attribute "label_prep_type"
     */
    public function testPropertyLabelPrepType()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v0\LabelPrepType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setLabelPrepType($testValue);
        $this->assertEquals($testValue, $this->model->getLabelPrepType());
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
     * Test attribute "estimated_box_contents_fee"
     */
    public function testPropertyEstimatedBoxContentsFee()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\BoxContentsFeeDetails();
        
        $this->model->setEstimatedBoxContentsFee($testValue);
        $this->assertEquals($testValue, $this->model->getEstimatedBoxContentsFee());
    }
}
