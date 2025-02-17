<?php
/**
 * VolumeUnitOfMeasurementTest
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
use SpApi\Model\awd\v2024_05_09\VolumeUnitOfMeasurement;

/**
 * VolumeUnitOfMeasurementTest Class Doc Comment
 *
 * @category    Class
 * @description Unit of measurement for the package volume.
 * @package     SpApi
 */
class VolumeUnitOfMeasurementTest extends TestCase
{

    private VolumeUnitOfMeasurement $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new VolumeUnitOfMeasurement();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "VolumeUnitOfMeasurement"
     */
    public function testVolumeUnitOfMeasurement()
    {
        $this->assertInstanceOf(VolumeUnitOfMeasurement::class, $this->model);
    }
}
