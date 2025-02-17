<?php
/**
 * DimensionsTest
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
use SpApi\Model\catalogItems\v2022_04_01\Dimensions;

/**
 * DimensionsTest Class Doc Comment
 *
 * @category    Class
 * @description Dimensions of an Amazon catalog item or item in its packaging.
 * @package     SpApi
 */
class DimensionsTest extends TestCase
{

    private Dimensions $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Dimensions();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Dimensions"
     */
    public function testDimensions()
    {
        $this->assertInstanceOf(Dimensions::class, $this->model);
    }

    /**
     * Test attribute "height"
     */
    public function testPropertyHeight()
    {
        
        $testValue = new \SpApi\Model\catalogItems\v2022_04_01\Dimension();
        
        $this->model->setHeight($testValue);
        $this->assertEquals($testValue, $this->model->getHeight());
    }

    /**
     * Test attribute "length"
     */
    public function testPropertyLength()
    {
        
        $testValue = new \SpApi\Model\catalogItems\v2022_04_01\Dimension();
        
        $this->model->setLength($testValue);
        $this->assertEquals($testValue, $this->model->getLength());
    }

    /**
     * Test attribute "weight"
     */
    public function testPropertyWeight()
    {
        
        $testValue = new \SpApi\Model\catalogItems\v2022_04_01\Dimension();
        
        $this->model->setWeight($testValue);
        $this->assertEquals($testValue, $this->model->getWeight());
    }

    /**
     * Test attribute "width"
     */
    public function testPropertyWidth()
    {
        
        $testValue = new \SpApi\Model\catalogItems\v2022_04_01\Dimension();
        
        $this->model->setWidth($testValue);
        $this->assertEquals($testValue, $this->model->getWidth());
    }
}
