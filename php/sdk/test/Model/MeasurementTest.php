<?php
/**
 * MeasurementTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\orders\Measurement;

/**
 * MeasurementTest Class Doc Comment
 *
 * @category    Class
 * @description Measurement information for an order item.
 * @package     OpenAPI\Client
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
