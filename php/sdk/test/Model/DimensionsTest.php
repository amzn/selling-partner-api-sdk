<?php
/**
 * DimensionsTest
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
use OpenAPI\Client\Model\catalogItems\v2022_04_01\Dimensions;

/**
 * DimensionsTest Class Doc Comment
 *
 * @category    Class
 * @description Dimensions of an Amazon catalog item or item in its packaging.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\catalogItems\v2022_04_01\Dimension();
        
        $this->model->setHeight($testValue);
        $this->assertEquals($testValue, $this->model->getHeight());
    }

    /**
     * Test attribute "length"
     */
    public function testPropertyLength()
    {
        
        $testValue = new \OpenAPI\Client\Model\catalogItems\v2022_04_01\Dimension();
        
        $this->model->setLength($testValue);
        $this->assertEquals($testValue, $this->model->getLength());
    }

    /**
     * Test attribute "weight"
     */
    public function testPropertyWeight()
    {
        
        $testValue = new \OpenAPI\Client\Model\catalogItems\v2022_04_01\Dimension();
        
        $this->model->setWeight($testValue);
        $this->assertEquals($testValue, $this->model->getWeight());
    }

    /**
     * Test attribute "width"
     */
    public function testPropertyWidth()
    {
        
        $testValue = new \OpenAPI\Client\Model\catalogItems\v2022_04_01\Dimension();
        
        $this->model->setWidth($testValue);
        $this->assertEquals($testValue, $this->model->getWidth());
    }
}
