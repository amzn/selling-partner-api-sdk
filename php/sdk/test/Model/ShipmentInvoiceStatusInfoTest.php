<?php
/**
 * ShipmentInvoiceStatusInfoTest
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
use SpApi\Model\invoicing\v0\ShipmentInvoiceStatusInfo;

/**
 * ShipmentInvoiceStatusInfoTest Class Doc Comment
 *
 * @category    Class
 * @description The shipment invoice status information.
 * @package     SpApi
 */
class ShipmentInvoiceStatusInfoTest extends TestCase
{

    private ShipmentInvoiceStatusInfo $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentInvoiceStatusInfo();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentInvoiceStatusInfo"
     */
    public function testShipmentInvoiceStatusInfo()
    {
        $this->assertInstanceOf(ShipmentInvoiceStatusInfo::class, $this->model);
    }

    /**
     * Test attribute "amazon_shipment_id"
     */
    public function testPropertyAmazonShipmentId()
    {
        $testValue = 'test';
        
        $this->model->setAmazonShipmentId($testValue);
        $this->assertEquals($testValue, $this->model->getAmazonShipmentId());
    }

    /**
     * Test attribute "invoice_status"
     */
    public function testPropertyInvoiceStatus()
    {
        $enumInstance = new \SpApi\Model\invoicing\v0\ShipmentInvoiceStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setInvoiceStatus($testValue);
        $this->assertEquals($testValue, $this->model->getInvoiceStatus());
    }
}
