<?php
/**
 * WeightRangeTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\WeightRange;

/**
 * WeightRangeTest Class Doc Comment
 *
 * @category    Class
 * @description The range of weights that are allowed for a package.
 * @package     SpApi
 */
class WeightRangeTest extends TestCase
{

    private WeightRange $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new WeightRange();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "WeightRange"
     */
    public function testWeightRange()
    {
        $this->assertInstanceOf(WeightRange::class, $this->model);
    }

    /**
     * Test attribute "maximum"
     */
    public function testPropertyMaximum()
    {
        $testValue = 1;
        
        $this->model->setMaximum($testValue);
        $this->assertEquals($testValue, $this->model->getMaximum());
    }

    /**
     * Test attribute "minimum"
     */
    public function testPropertyMinimum()
    {
        $testValue = 1;
        
        $this->model->setMinimum($testValue);
        $this->assertEquals($testValue, $this->model->getMinimum());
    }

    /**
     * Test attribute "unit"
     */
    public function testPropertyUnit()
    {
        $enumInstance = new \SpApi\Model\fulfillment\inbound\v2024_03_20\UnitOfWeight();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setUnit($testValue);
        $this->assertEquals($testValue, $this->model->getUnit());
    }
}
