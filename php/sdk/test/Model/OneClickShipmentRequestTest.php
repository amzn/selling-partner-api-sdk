<?php
/**
 * OneClickShipmentRequestTest
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
use SpApi\Model\shipping\v2\OneClickShipmentRequest;

/**
 * OneClickShipmentRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the OneClickShipment operation. When the channelType is not Amazon, shipTo is required and when channelType is Amazon shipTo is ignored.
 * @package     SpApi
 */
class OneClickShipmentRequestTest extends TestCase
{

    private OneClickShipmentRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OneClickShipmentRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OneClickShipmentRequest"
     */
    public function testOneClickShipmentRequest()
    {
        $this->assertInstanceOf(OneClickShipmentRequest::class, $this->model);
    }

    /**
     * Test attribute "ship_to"
     */
    public function testPropertyShipTo()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Address();
        
        $this->model->setShipTo($testValue);
        $this->assertEquals($testValue, $this->model->getShipTo());
    }

    /**
     * Test attribute "ship_from"
     */
    public function testPropertyShipFrom()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Address();
        
        $this->model->setShipFrom($testValue);
        $this->assertEquals($testValue, $this->model->getShipFrom());
    }

    /**
     * Test attribute "return_to"
     */
    public function testPropertyReturnTo()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\Address();
        
        $this->model->setReturnTo($testValue);
        $this->assertEquals($testValue, $this->model->getReturnTo());
    }

    /**
     * Test attribute "ship_date"
     */
    public function testPropertyShipDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setShipDate($testValue);
        $this->assertEquals($testValue, $this->model->getShipDate());
    }

    /**
     * Test attribute "goods_owner"
     */
    public function testPropertyGoodsOwner()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\GoodsOwner();
        
        $this->model->setGoodsOwner($testValue);
        $this->assertEquals($testValue, $this->model->getGoodsOwner());
    }

    /**
     * Test attribute "packages"
     */
    public function testPropertyPackages()
    {
        $testValue = [];
        
        $this->model->setPackages($testValue);
        $this->assertEquals($testValue, $this->model->getPackages());
    }

    /**
     * Test attribute "value_added_services_details"
     */
    public function testPropertyValueAddedServicesDetails()
    {
        $testValue = [];
        
        $this->model->setValueAddedServicesDetails($testValue);
        $this->assertEquals($testValue, $this->model->getValueAddedServicesDetails());
    }

    /**
     * Test attribute "tax_details"
     */
    public function testPropertyTaxDetails()
    {
        $testValue = [];
        
        $this->model->setTaxDetails($testValue);
        $this->assertEquals($testValue, $this->model->getTaxDetails());
    }

    /**
     * Test attribute "channel_details"
     */
    public function testPropertyChannelDetails()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\ChannelDetails();
        
        $this->model->setChannelDetails($testValue);
        $this->assertEquals($testValue, $this->model->getChannelDetails());
    }

    /**
     * Test attribute "label_specifications"
     */
    public function testPropertyLabelSpecifications()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\RequestedDocumentSpecification();
        
        $this->model->setLabelSpecifications($testValue);
        $this->assertEquals($testValue, $this->model->getLabelSpecifications());
    }

    /**
     * Test attribute "service_selection"
     */
    public function testPropertyServiceSelection()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\ServiceSelection();
        
        $this->model->setServiceSelection($testValue);
        $this->assertEquals($testValue, $this->model->getServiceSelection());
    }

    /**
     * Test attribute "shipper_instruction"
     */
    public function testPropertyShipperInstruction()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\ShipperInstruction();
        
        $this->model->setShipperInstruction($testValue);
        $this->assertEquals($testValue, $this->model->getShipperInstruction());
    }

    /**
     * Test attribute "destination_access_point_details"
     */
    public function testPropertyDestinationAccessPointDetails()
    {
        
        $testValue = new \SpApi\Model\shipping\v2\AccessPointDetails();
        
        $this->model->setDestinationAccessPointDetails($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationAccessPointDetails());
    }
}
