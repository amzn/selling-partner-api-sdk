<?php
/**
 * ShipmentStatusTest
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
use SpApi\Model\fulfillment\inbound\v0\ShipmentStatus;

/**
 * ShipmentStatusTest Class Doc Comment
 *
 * @category    Class
 * @description Indicates the status of the inbound shipment. When used with the createInboundShipment operation, WORKING is the only valid value. When used with the updateInboundShipment operation, possible values are WORKING, SHIPPED or CANCELLED.
 * @package     SpApi
 */
class ShipmentStatusTest extends TestCase
{

    private ShipmentStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentStatus"
     */
    public function testShipmentStatus()
    {
        $this->assertInstanceOf(ShipmentStatus::class, $this->model);
    }
}
