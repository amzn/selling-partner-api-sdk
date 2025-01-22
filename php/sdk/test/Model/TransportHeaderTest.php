<?php
/**
 * TransportHeaderTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\TransportHeader;

/**
 * TransportHeaderTest Class Doc Comment
 *
 * @category    Class
 * @description The shipping identifier, information about whether the shipment is by an Amazon-partnered carrier, and information about whether the shipment is Small Parcel or Less Than Truckload/Full Truckload (LTL/FTL).
 * @package     OpenAPI\Client
 */
class TransportHeaderTest extends TestCase
{

    private TransportHeader $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransportHeader();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransportHeader"
     */
    public function testTransportHeader()
    {
        $this->assertInstanceOf(TransportHeader::class, $this->model);
    }

    /**
     * Test attribute "seller_id"
     */
    public function testPropertySellerId()
    {
        $testValue = 'test';
        
        $this->model->setSellerId($testValue);
        $this->assertEquals($testValue, $this->model->getSellerId());
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
}
