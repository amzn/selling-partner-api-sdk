<?php
/**
 * ShipmentStatusTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\orders\ShipmentStatus;

/**
 * ShipmentStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The shipment status to apply.
 * @package     OpenAPI\Client
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
