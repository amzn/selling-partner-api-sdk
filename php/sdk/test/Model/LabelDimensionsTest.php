<?php
/**
 * LabelDimensionsTest
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
use OpenAPI\Client\Model\merchantFulfillment\LabelDimensions;

/**
 * LabelDimensionsTest Class Doc Comment
 *
 * @category    Class
 * @description Dimensions for printing a shipping label.
 * @package     OpenAPI\Client
 */
class LabelDimensionsTest extends TestCase
{

    private LabelDimensions $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new LabelDimensions();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "LabelDimensions"
     */
    public function testLabelDimensions()
    {
        $this->assertInstanceOf(LabelDimensions::class, $this->model);
    }

    /**
     * Test attribute "length"
     */
    public function testPropertyLength()
    {
        $testValue = 1;
        
        $this->model->setLength($testValue);
        $this->assertEquals($testValue, $this->model->getLength());
    }

    /**
     * Test attribute "width"
     */
    public function testPropertyWidth()
    {
        $testValue = 1;
        
        $this->model->setWidth($testValue);
        $this->assertEquals($testValue, $this->model->getWidth());
    }

    /**
     * Test attribute "unit"
     */
    public function testPropertyUnit()
    {
        $enumInstance = new \OpenAPI\Client\Model\merchantFulfillment\UnitOfLength();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setUnit($testValue);
        $this->assertEquals($testValue, $this->model->getUnit());
    }
}
