<?php
/**
 * InboundShipmentStatusTest
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
use OpenAPI\Client\Model\awd\v2024_05_09\InboundShipmentStatus;

/**
 * InboundShipmentStatusTest Class Doc Comment
 *
 * @category    Class
 * @description Possible shipment statuses used by shipments.
 * @package     OpenAPI\Client
 */
class InboundShipmentStatusTest extends TestCase
{

    private InboundShipmentStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundShipmentStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundShipmentStatus"
     */
    public function testInboundShipmentStatus()
    {
        $this->assertInstanceOf(InboundShipmentStatus::class, $this->model);
    }
}
