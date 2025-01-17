<?php
/**
 * ShipmentTypeTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v0\ShipmentType;

/**
 * ShipmentTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Specifies the carrier shipment type in a putTransportDetails request.
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
