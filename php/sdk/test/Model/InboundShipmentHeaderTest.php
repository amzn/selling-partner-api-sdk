<?php
/**
 * InboundShipmentHeaderTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\InboundShipmentHeader;

/**
 * InboundShipmentHeaderTest Class Doc Comment
 *
 * @category    Class
 * @description Inbound shipment information used to create and update inbound shipments.
 * @package     OpenAPI\Client
 */
class InboundShipmentHeaderTest extends TestCase
{

    private InboundShipmentHeader $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundShipmentHeader();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundShipmentHeader"
     */
    public function testInboundShipmentHeader()
    {
        $this->assertInstanceOf(InboundShipmentHeader::class, $this->model);
    }

    /**
     * Test attribute "shipment_name"
     */
    public function testPropertyShipmentName()
    {
        $testValue = 'test';
        
        $this->model->setShipmentName($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentName());
    }

    /**
     * Test attribute "ship_from_address"
     */
    public function testPropertyShipFromAddress()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\Address();
        
        $this->model->setShipFromAddress($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromAddress());
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
     * Test attribute "are_cases_required"
     */
    public function testPropertyAreCasesRequired()
    {
        $testValue = true;
        
        $this->model->setAreCasesRequired($testValue);
        $this->assertEquals($testValue, $this->model->getAreCasesRequired());
    }

    /**
     * Test attribute "shipment_status"
     */
    public function testPropertyShipmentStatus()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v0\ShipmentStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setShipmentStatus($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentStatus());
    }

    /**
     * Test attribute "label_prep_preference"
     */
    public function testPropertyLabelPrepPreference()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v0\LabelPrepPreference();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setLabelPrepPreference($testValue);
        $this->assertEquals($testValue, $this->model->getLabelPrepPreference());
    }

    /**
     * Test attribute "intended_box_contents_source"
     */
    public function testPropertyIntendedBoxContentsSource()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v0\IntendedBoxContentsSource();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setIntendedBoxContentsSource($testValue);
        $this->assertEquals($testValue, $this->model->getIntendedBoxContentsSource());
    }
}
