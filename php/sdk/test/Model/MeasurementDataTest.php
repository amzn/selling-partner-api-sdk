<?php
/**
 * MeasurementDataTest
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
use SpApi\Model\awd\v2024_05_09\MeasurementData;

/**
 * MeasurementDataTest Class Doc Comment
 *
 * @category    Class
 * @description Package weight and dimension.
 * @package     SpApi
 */
class MeasurementDataTest extends TestCase
{

    private MeasurementData $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new MeasurementData();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "MeasurementData"
     */
    public function testMeasurementData()
    {
        $this->assertInstanceOf(MeasurementData::class, $this->model);
    }

    /**
     * Test attribute "dimensions"
     */
    public function testPropertyDimensions()
    {
        
        $testValue = new \SpApi\Model\awd\v2024_05_09\PackageDimensions();
        
        $this->model->setDimensions($testValue);
        $this->assertEquals($testValue, $this->model->getDimensions());
    }

    /**
     * Test attribute "volume"
     */
    public function testPropertyVolume()
    {
        
        $testValue = new \SpApi\Model\awd\v2024_05_09\PackageVolume();
        
        $this->model->setVolume($testValue);
        $this->assertEquals($testValue, $this->model->getVolume());
    }

    /**
     * Test attribute "weight"
     */
    public function testPropertyWeight()
    {
        
        $testValue = new \SpApi\Model\awd\v2024_05_09\PackageWeight();
        
        $this->model->setWeight($testValue);
        $this->assertEquals($testValue, $this->model->getWeight());
    }
}
