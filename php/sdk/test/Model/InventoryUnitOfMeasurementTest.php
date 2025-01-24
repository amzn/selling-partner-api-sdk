<?php
/**
 * InventoryUnitOfMeasurementTest
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
use OpenAPI\Client\Model\awd\InventoryUnitOfMeasurement;

/**
 * InventoryUnitOfMeasurementTest Class Doc Comment
 *
 * @category    Class
 * @description Unit of measurement for the inventory.
 * @package     OpenAPI\Client
 */
class InventoryUnitOfMeasurementTest extends TestCase
{

    private InventoryUnitOfMeasurement $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InventoryUnitOfMeasurement();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InventoryUnitOfMeasurement"
     */
    public function testInventoryUnitOfMeasurement()
    {
        $this->assertInstanceOf(InventoryUnitOfMeasurement::class, $this->model);
    }
}
