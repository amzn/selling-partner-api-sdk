<?php
/**
 * ShipmentTypeTest
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
use SpApi\Model\shipping\v2\ShipmentType;

/**
 * ShipmentTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Shipment type.
 * @package     SpApi
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
