<?php
/**
 * PackageDimensionsTest
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
use SpApi\Model\awd\v2024_05_09\PackageDimensions;

/**
 * PackageDimensionsTest Class Doc Comment
 *
 * @category    Class
 * @description Dimensions of the package.
 * @package     SpApi
 */
class PackageDimensionsTest extends TestCase
{

    private PackageDimensions $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PackageDimensions();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PackageDimensions"
     */
    public function testPackageDimensions()
    {
        $this->assertInstanceOf(PackageDimensions::class, $this->model);
    }

    /**
     * Test attribute "height"
     */
    public function testPropertyHeight()
    {
        
        $testValue = new float();
        
        $this->model->setHeight($testValue);
        $this->assertEquals($testValue, $this->model->getHeight());
    }

    /**
     * Test attribute "length"
     */
    public function testPropertyLength()
    {
        
        $testValue = new float();
        
        $this->model->setLength($testValue);
        $this->assertEquals($testValue, $this->model->getLength());
    }

    /**
     * Test attribute "unit_of_measurement"
     */
    public function testPropertyUnitOfMeasurement()
    {
        $enumInstance = new \SpApi\Model\awd\v2024_05_09\DimensionUnitOfMeasurement();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setUnitOfMeasurement($testValue);
        $this->assertEquals($testValue, $this->model->getUnitOfMeasurement());
    }

    /**
     * Test attribute "width"
     */
    public function testPropertyWidth()
    {
        
        $testValue = new float();
        
        $this->model->setWidth($testValue);
        $this->assertEquals($testValue, $this->model->getWidth());
    }
}
