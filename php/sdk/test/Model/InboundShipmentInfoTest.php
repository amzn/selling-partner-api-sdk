<?php
/**
 * InboundShipmentInfoTest
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
use SpApi\Model\fulfillment\inbound\v0\InboundShipmentInfo;

/**
 * InboundShipmentInfoTest Class Doc Comment
 *
 * @category    Class
 * @description Information about the seller&#39;s inbound shipments. Returned by the listInboundShipments operation.
 * @package     SpApi
 */
class InboundShipmentInfoTest extends TestCase
{

    private InboundShipmentInfo $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundShipmentInfo();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundShipmentInfo"
     */
    public function testInboundShipmentInfo()
    {
        $this->assertInstanceOf(InboundShipmentInfo::class, $this->model);
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
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v0\Address();
        
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
     * Test attribute "shipment_status"
     */
    public function testPropertyShipmentStatus()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v0\ShipmentStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setShipmentStatus($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentStatus());
    }

    /**
     * Test attribute "label_prep_type"
     */
    public function testPropertyLabelPrepType()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v0\LabelPrepType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setLabelPrepType($testValue);
        $this->assertEquals($testValue, $this->model->getLabelPrepType());
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
     * Test attribute "confirmed_need_by_date"
     */
    public function testPropertyConfirmedNeedByDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setConfirmedNeedByDate($testValue);
        $this->assertEquals($testValue, $this->model->getConfirmedNeedByDate());
    }

    /**
     * Test attribute "box_contents_source"
     */
    public function testPropertyBoxContentsSource()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v0\BoxContentsSource();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setBoxContentsSource($testValue);
        $this->assertEquals($testValue, $this->model->getBoxContentsSource());
    }

    /**
     * Test attribute "estimated_box_contents_fee"
     */
    public function testPropertyEstimatedBoxContentsFee()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v0\BoxContentsFeeDetails();
        
        $this->model->setEstimatedBoxContentsFee($testValue);
        $this->assertEquals($testValue, $this->model->getEstimatedBoxContentsFee());
    }
}
