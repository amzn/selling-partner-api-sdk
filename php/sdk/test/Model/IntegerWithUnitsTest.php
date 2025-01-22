<?php
/**
 * IntegerWithUnitsTest
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
use OpenAPI\Client\Model\aplusContent\IntegerWithUnits;

/**
 * IntegerWithUnitsTest Class Doc Comment
 *
 * @category    Class
 * @description A whole number dimension and its unit of measurement. For example, this can represent 100 pixels.
 * @package     OpenAPI\Client
 */
class IntegerWithUnitsTest extends TestCase
{

    private IntegerWithUnits $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new IntegerWithUnits();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "IntegerWithUnits"
     */
    public function testIntegerWithUnits()
    {
        $this->assertInstanceOf(IntegerWithUnits::class, $this->model);
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = 123;
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }

    /**
     * Test attribute "units"
     */
    public function testPropertyUnits()
    {
        $testValue = 'test';
        
        $this->model->setUnits($testValue);
        $this->assertEquals($testValue, $this->model->getUnits());
    }
}
