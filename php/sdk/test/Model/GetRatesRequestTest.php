<?php
/**
 * GetRatesRequestTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\shipping\GetRatesRequest;

/**
 * GetRatesRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the getRates operation. When the channelType is Amazon, the shipTo address is not required and will be ignored.
 * @package     OpenAPI\Client
 */
class GetRatesRequestTest extends TestCase
{

    private GetRatesRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetRatesRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetRatesRequest"
     */
    public function testGetRatesRequest()
    {
        $this->assertInstanceOf(GetRatesRequest::class, $this->model);
    }

    /**
     * Test attribute "ship_to"
     */
    public function testPropertyShipTo()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\Address();
        
        $this->model->setShipTo($testValue);
        $this->assertEquals($testValue, $this->model->getShipTo());
    }

    /**
     * Test attribute "ship_from"
     */
    public function testPropertyShipFrom()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\Address();
        
        $this->model->setShipFrom($testValue);
        $this->assertEquals($testValue, $this->model->getShipFrom());
    }

    /**
     * Test attribute "return_to"
     */
    public function testPropertyReturnTo()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\Address();
        
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
     * Test attribute "shipper_instruction"
     */
    public function testPropertyShipperInstruction()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\ShipperInstruction();
        
        $this->model->setShipperInstruction($testValue);
        $this->assertEquals($testValue, $this->model->getShipperInstruction());
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
     * Test attribute "value_added_services"
     */
    public function testPropertyValueAddedServices()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\ValueAddedServiceDetails();
        
        $this->model->setValueAddedServices($testValue);
        $this->assertEquals($testValue, $this->model->getValueAddedServices());
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
        
        $testValue = new \OpenAPI\Client\Model\shipping\ChannelDetails();
        
        $this->model->setChannelDetails($testValue);
        $this->assertEquals($testValue, $this->model->getChannelDetails());
    }

    /**
     * Test attribute "client_reference_details"
     */
    public function testPropertyClientReferenceDetails()
    {
        $testValue = [];
        
        $this->model->setClientReferenceDetails($testValue);
        $this->assertEquals($testValue, $this->model->getClientReferenceDetails());
    }

    /**
     * Test attribute "shipment_type"
     */
    public function testPropertyShipmentType()
    {
        $enumInstance = new \OpenAPI\Client\Model\shipping\ShipmentType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setShipmentType($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentType());
    }

    /**
     * Test attribute "destination_access_point_details"
     */
    public function testPropertyDestinationAccessPointDetails()
    {
        
        $testValue = new \OpenAPI\Client\Model\shipping\AccessPointDetails();
        
        $this->model->setDestinationAccessPointDetails($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationAccessPointDetails());
    }
}
