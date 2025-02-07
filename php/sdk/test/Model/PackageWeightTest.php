<?php
/**
 * PackageWeightTest
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
use OpenAPI\Client\Model\awd\v2024_05_09\PackageWeight;

/**
 * PackageWeightTest Class Doc Comment
 *
 * @category    Class
 * @description Represents the weight of the package with a unit of measurement.
 * @package     OpenAPI\Client
 */
class PackageWeightTest extends TestCase
{

    private PackageWeight $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackageWeight();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackageWeight"
     */
    public function testPackageWeight()
    {
        $this->assertInstanceOf(PackageWeight::class, $this->model);
    }

    /**
     * Test attribute "unit_of_measurement"
     */
    public function testPropertyUnitOfMeasurement()
    {
        $enumInstance = new \OpenAPI\Client\Model\awd\v2024_05_09\WeightUnitOfMeasurement();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setUnitOfMeasurement($testValue);
        $this->assertEquals($testValue, $this->model->getUnitOfMeasurement());
    }

    /**
     * Test attribute "weight"
     */
    public function testPropertyWeight()
    {
        
        $testValue = new float();
        
        $this->model->setWeight($testValue);
        $this->assertEquals($testValue, $this->model->getWeight());
    }
}
