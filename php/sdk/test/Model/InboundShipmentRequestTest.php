<?php
/**
 * InboundShipmentRequestTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\InboundShipmentRequest;

/**
 * InboundShipmentRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for an inbound shipment.
 * @package     OpenAPI\Client
 */
class InboundShipmentRequestTest extends TestCase
{

    private InboundShipmentRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundShipmentRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundShipmentRequest"
     */
    public function testInboundShipmentRequest()
    {
        $this->assertInstanceOf(InboundShipmentRequest::class, $this->model);
    }

    /**
     * Test attribute "inbound_shipment_header"
     */
    public function testPropertyInboundShipmentHeader()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\InboundShipmentHeader();
        
        $this->model->setInboundShipmentHeader($testValue);
        $this->assertEquals($testValue, $this->model->getInboundShipmentHeader());
    }

    /**
     * Test attribute "inbound_shipment_items"
     */
    public function testPropertyInboundShipmentItems()
    {
        $testValue = [];
        
        $this->model->setInboundShipmentItems($testValue);
        $this->assertEquals($testValue, $this->model->getInboundShipmentItems());
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }
}
