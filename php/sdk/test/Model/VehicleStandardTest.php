<?php
/**
 * VehicleStandardTest
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
use SpApi\Model\vehicles\v2024_11_01\VehicleStandard;

/**
 * VehicleStandardTest Class Doc Comment
 *
 * @category    Class
 * @description Standard followed to uniquely identify a vehicle.
 * @package     SpApi
 */
class VehicleStandardTest extends TestCase
{

    private VehicleStandard $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new VehicleStandard();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "VehicleStandard"
     */
    public function testVehicleStandard()
    {
        $this->assertInstanceOf(VehicleStandard::class, $this->model);
    }
}
