<?php
/**
 * DistributionPackageTest
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
use SpApi\Model\awd\v2024_05_09\DistributionPackage;

/**
 * DistributionPackageTest Class Doc Comment
 *
 * @category    Class
 * @description Represents an AWD distribution package.
 * @package     SpApi
 */
class DistributionPackageTest extends TestCase
{

    private DistributionPackage $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DistributionPackage();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DistributionPackage"
     */
    public function testDistributionPackage()
    {
        $this->assertInstanceOf(DistributionPackage::class, $this->model);
    }

    /**
     * Test attribute "contents"
     */
    public function testPropertyContents()
    {
        
        $testValue = new \SpApi\Model\awd\v2024_05_09\DistributionPackageContents();
        
        $this->model->setContents($testValue);
        $this->assertEquals($testValue, $this->model->getContents());
    }

    /**
     * Test attribute "measurements"
     */
    public function testPropertyMeasurements()
    {
        
        $testValue = new \SpApi\Model\awd\v2024_05_09\MeasurementData();
        
        $this->model->setMeasurements($testValue);
        $this->assertEquals($testValue, $this->model->getMeasurements());
    }

    /**
     * Test attribute "type"
     */
    public function testPropertyType()
    {
        $enumInstance = new \SpApi\Model\awd\v2024_05_09\DistributionPackageType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setType($testValue);
        $this->assertEquals($testValue, $this->model->getType());
    }
}
