<?php
/**
 * EngineOutputTest
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
use SpApi\Model\vehicles\v2024_11_01\EngineOutput;

/**
 * EngineOutputTest Class Doc Comment
 *
 * @category    Class
 * @description Engine power output of vehicle.
 * @package     SpApi
 */
class EngineOutputTest extends TestCase
{

    private EngineOutput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new EngineOutput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "EngineOutput"
     */
    public function testEngineOutput()
    {
        $this->assertInstanceOf(EngineOutput::class, $this->model);
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

    /**
     * Test attribute "unit"
     */
    public function testPropertyUnit()
    {
        $enumInstance = new \SpApi\Model\vehicles\v2024_11_01\EngineOutputUnit();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setUnit($testValue);
        $this->assertEquals($testValue, $this->model->getUnit());
    }
}
