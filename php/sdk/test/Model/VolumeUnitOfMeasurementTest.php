<?php
/**
 * VolumeUnitOfMeasurementTest
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
use OpenAPI\Client\Model\awd\VolumeUnitOfMeasurement;

/**
 * VolumeUnitOfMeasurementTest Class Doc Comment
 *
 * @category    Class
 * @description Unit of measurement for the package volume.
 * @package     OpenAPI\Client
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
