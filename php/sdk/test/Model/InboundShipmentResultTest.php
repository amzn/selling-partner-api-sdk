<?php
/**
 * InboundShipmentResultTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\InboundShipmentResult;

/**
 * InboundShipmentResultTest Class Doc Comment
 *
 * @category    Class
 * @description Result of an inbound shipment operation
 * @package     OpenAPI\Client
 */
class InboundShipmentResultTest extends TestCase
{

    private InboundShipmentResult $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundShipmentResult();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundShipmentResult"
     */
    public function testInboundShipmentResult()
    {
        $this->assertInstanceOf(InboundShipmentResult::class, $this->model);
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
}
