<?php
/**
 * PackageVolumeTest
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
use OpenAPI\Client\Model\awd\PackageVolume;

/**
 * PackageVolumeTest Class Doc Comment
 *
 * @category    Class
 * @description Represents the volume of the package with a unit of measurement.
 * @package     OpenAPI\Client
 */
class PackageVolumeTest extends TestCase
{

    private PackageVolume $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackageVolume();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackageVolume"
     */
    public function testPackageVolume()
    {
        $this->assertInstanceOf(PackageVolume::class, $this->model);
    }

    /**
     * Test attribute "unit_of_measurement"
     */
    public function testPropertyUnitOfMeasurement()
    {
        $enumInstance = new \OpenAPI\Client\Model\awd\VolumeUnitOfMeasurement();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setUnitOfMeasurement($testValue);
        $this->assertEquals($testValue, $this->model->getUnitOfMeasurement());
    }

    /**
     * Test attribute "volume"
     */
    public function testPropertyVolume()
    {
        
        $testValue = new float();
        
        $this->model->setVolume($testValue);
        $this->assertEquals($testValue, $this->model->getVolume());
    }
}
