<?php
/**
 * PutTransportDetailsRequestTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\PutTransportDetailsRequest;

/**
 * PutTransportDetailsRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for a putTransportDetails operation.
 * @package     OpenAPI\Client
 */
class PutTransportDetailsRequestTest extends TestCase
{

    private PutTransportDetailsRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PutTransportDetailsRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PutTransportDetailsRequest"
     */
    public function testPutTransportDetailsRequest()
    {
        $this->assertInstanceOf(PutTransportDetailsRequest::class, $this->model);
    }

    /**
     * Test attribute "is_partnered"
     */
    public function testPropertyIsPartnered()
    {
        $testValue = true;
        
        $this->model->setIsPartnered($testValue);
        $this->assertEquals($testValue, $this->model->getIsPartnered());
    }

    /**
     * Test attribute "shipment_type"
     */
    public function testPropertyShipmentType()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillment\inbound\v0\ShipmentType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setShipmentType($testValue);
        $this->assertEquals($testValue, $this->model->getShipmentType());
    }

    /**
     * Test attribute "transport_details"
     */
    public function testPropertyTransportDetails()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\TransportDetailInput();
        
        $this->model->setTransportDetails($testValue);
        $this->assertEquals($testValue, $this->model->getTransportDetails());
    }
}
