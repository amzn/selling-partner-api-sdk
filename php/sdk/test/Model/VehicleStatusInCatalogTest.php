<?php
/**
 * VehicleStatusInCatalogTest
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
use SpApi\Model\vehicles\v2024_11_01\VehicleStatusInCatalog;

/**
 * VehicleStatusInCatalogTest Class Doc Comment
 *
 * @category    Class
 * @description Status of vehicle in Amazon&#39;s catalog.
 * @package     SpApi
 */
class VehicleStatusInCatalogTest extends TestCase
{

    private VehicleStatusInCatalog $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new VehicleStatusInCatalog();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "VehicleStatusInCatalog"
     */
    public function testVehicleStatusInCatalog()
    {
        $this->assertInstanceOf(VehicleStatusInCatalog::class, $this->model);
    }
}
