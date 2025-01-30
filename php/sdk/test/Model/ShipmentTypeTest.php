<?php
/**
 * ShipmentTypeTest
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
use OpenAPI\Client\Model\shipping\ShipmentType;

/**
 * ShipmentTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Shipment type.
 * @package     OpenAPI\Client
 */
class ShipmentTypeTest extends TestCase
{

    private ShipmentType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ShipmentType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ShipmentType"
     */
    public function testShipmentType()
    {
        $this->assertInstanceOf(ShipmentType::class, $this->model);
    }
}
