<?php
/**
 * TransportationOptionTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\TransportationOption;

/**
 * TransportationOptionTest Class Doc Comment
 *
 * @category    Class
 * @description Contains information pertaining to a transportation option and the related carrier.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\Carrier();
        
        $this->model->setCarrier($testValue);
        $this->assertEquals($testValue, $this->model->getCarrier());
    }

    /**
     * Test attribute "carrier_appointment"
     */
    public function testPropertyCarrierAppointment()
    {
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\CarrierAppointment();
        
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
        
        $testValue = new \SpApi\Model\fulfillment\inbound\v2024_03_20\Quote();
        
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
