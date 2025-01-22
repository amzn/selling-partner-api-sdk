<?php
/**
 * TransportContentTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\TransportContent;

/**
 * TransportContentTest Class Doc Comment
 *
 * @category    Class
 * @description Inbound shipment information, including carrier details, shipment status, and the workflow status for a request for shipment with an Amazon-partnered carrier.
 * @package     OpenAPI\Client
 */
class TransportContentTest extends TestCase
{

    private TransportContent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransportContent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransportContent"
     */
    public function testTransportContent()
    {
        $this->assertInstanceOf(TransportContent::class, $this->model);
    }

    /**
     * Test attribute "transport_header"
     */
    public function testPropertyTransportHeader()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\TransportHeader();
        
        $this->model->setTransportHeader($testValue);
        $this->assertEquals($testValue, $this->model->getTransportHeader());
    }

    /**
     * Test attribute "transport_details"
     */
    public function testPropertyTransportDetails()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\TransportDetailOutput();
        
        $this->model->setTransportDetails($testValue);
        $this->assertEquals($testValue, $this->model->getTransportDetails());
    }

    /**
     * Test attribute "transport_result"
     */
    public function testPropertyTransportResult()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v0\TransportResult();
        
        $this->model->setTransportResult($testValue);
        $this->assertEquals($testValue, $this->model->getTransportResult());
    }
}
