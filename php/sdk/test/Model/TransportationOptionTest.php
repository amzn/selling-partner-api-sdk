<?php
/**
 * TransportationOptionTest
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
use OpenAPI\Client\Model\fulfillmentInbound\TransportationOption;

/**
 * TransportationOptionTest Class Doc Comment
 *
 * @category    Class
 * @description Contains information pertaining to a transportation option and the related carrier.
 * @package     OpenAPI\Client
 */
class TransportationOptionTest extends TestCase
{

    private TransportationOption $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransportationOption();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransportationOption"
     */
    public function testTransportationOption()
    {
        $this->assertInstanceOf(TransportationOption::class, $this->model);
    }

    /**
     * Test attribute "carrier"
     */
    public function testPropertyCarrier()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentInbound\Carrier();
        
        $this->model->setCarrier($testValue);
        $this->assertEquals($testValue, $this->model->getCarrier());
    }

    /**
     * Test attribute "carrier_appointment"
     */
    public function testPropertyCarrierAppointment()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentInbound\CarrierAppointment();
        
        $this->model->setCarrierAppointment($testValue);
        $this->assertEquals($testValue, $this->model->getCarrierAppointment());
    }

    /**
     * Test attribute "preconditions"
     */
    public function testPropertyPreconditions()
    {
        $testValue = [];
        
        $this->model->setPreconditions($testValue);
        $this->assertEquals($testValue, $this->model->getPreconditions());
    }

    /**
     * Test attribute "quote"
     */
    public function testPropertyQuote()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillmentInbound\Quote();
        
        $this->model->setQuote($testValue);
        $this->assertEquals($testValue, $this->model->getQuote());
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
     * Test attribute "shipping_mode"
     */
    public function testPropertyShippingMode()
    {
        $testValue = 'test';
        
        $this->model->setShippingMode($testValue);
        $this->assertEquals($testValue, $this->model->getShippingMode());
    }

    /**
     * Test attribute "shipping_solution"
     */
    public function testPropertyShippingSolution()
    {
        $testValue = 'test';
        
        $this->model->setShippingSolution($testValue);
        $this->assertEquals($testValue, $this->model->getShippingSolution());
    }

    /**
     * Test attribute "transportation_option_id"
     */
    public function testPropertyTransportationOptionId()
    {
        $testValue = 'test';
        
        $this->model->setTransportationOptionId($testValue);
        $this->assertEquals($testValue, $this->model->getTransportationOptionId());
    }
}
