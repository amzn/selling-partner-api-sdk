<?php
/**
 * ShipmentInvoiceStatusResponseTest
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
use OpenAPI\Client\Model\invoicing\ShipmentInvoiceStatusResponse;

/**
 * ShipmentInvoiceStatusResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The shipment invoice status response.
 * @package     OpenAPI\Client
 */
class ShipmentInvoiceStatusResponseTest extends TestCase
{

    private ShipmentInvoiceStatusResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentInvoiceStatusResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentInvoiceStatusResponse"
     */
    public function testShipmentInvoiceStatusResponse()
    {
        $this->assertInstanceOf(ShipmentInvoiceStatusResponse::class, $this->model);
    }

    /**
     * Test attribute "shipments"
     */
    public function testPropertyShipments()
    {
        
        $testValue = new \OpenAPI\Client\Model\invoicing\ShipmentInvoiceStatusInfo();
        
        $this->model->setShipments($testValue);
        $this->assertEquals($testValue, $this->model->getShipments());
    }
}
