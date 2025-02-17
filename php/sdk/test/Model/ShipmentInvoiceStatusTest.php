<?php
/**
 * ShipmentInvoiceStatusTest
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
use SpApi\Model\invoicing\v0\ShipmentInvoiceStatus;

/**
 * ShipmentInvoiceStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The shipment invoice status.
 * @package     SpApi
 */
class ShipmentInvoiceStatusTest extends TestCase
{

    private ShipmentInvoiceStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentInvoiceStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentInvoiceStatus"
     */
    public function testShipmentInvoiceStatus()
    {
        $this->assertInstanceOf(ShipmentInvoiceStatus::class, $this->model);
    }
}
