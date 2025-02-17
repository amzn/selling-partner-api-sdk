<?php
/**
 * DimensionTest
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
use SpApi\Model\catalogItems\v2022_04_01\Dimension;

/**
 * DimensionTest Class Doc Comment
 *
 * @category    Class
 * @description Individual dimension value of an Amazon catalog item or item package.
 * @package     SpApi
 */
class DimensionTest extends TestCase
{

    private Dimension $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Dimension();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Dimension"
     */
    public function testDimension()
    {
        $this->assertInstanceOf(Dimension::class, $this->model);
    }

    /**
     * Test attribute "unit"
     */
    public function testPropertyUnit()
    {
        $testValue = 'test';
        
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
