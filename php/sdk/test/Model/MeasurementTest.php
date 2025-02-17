<?php
/**
 * MeasurementTest
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
use SpApi\Model\orders\v0\Measurement;

/**
 * MeasurementTest Class Doc Comment
 *
 * @category    Class
 * @description Measurement information for an order item.
 * @package     SpApi
 */
class MeasurementTest extends TestCase
{

    private Measurement $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Measurement();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Measurement"
     */
    public function testMeasurement()
    {
        $this->assertInstanceOf(Measurement::class, $this->model);
    }

    /**
     * Test attribute "unit"
     */
    public function testPropertyUnit()
    {
        $enumInstance = new Measurement();
        $allowedValues = $enumInstance->getUnitAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setUnit($testValue);
        $this->assertEquals($testValue, $this->model->getUnit());
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = 1;
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }
}
