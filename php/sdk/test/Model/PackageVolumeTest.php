<?php
/**
 * PackageVolumeTest
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
use SpApi\Model\awd\v2024_05_09\PackageVolume;

/**
 * PackageVolumeTest Class Doc Comment
 *
 * @category    Class
 * @description Represents the volume of the package with a unit of measurement.
 * @package     SpApi
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
        $enumInstance = new \SpApi\Model\awd\v2024_05_09\VolumeUnitOfMeasurement();
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
