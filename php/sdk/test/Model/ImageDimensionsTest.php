<?php
/**
 * ImageDimensionsTest
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
use SpApi\Model\aplusContent\v2020_11_01\ImageDimensions;

/**
 * ImageDimensionsTest Class Doc Comment
 *
 * @category    Class
 * @description The dimensions that extend from the top left corner of the image (this applies to cropped and uncropped images). &#x60;ImageDimensions&#x60; units must be in pixels.
 * @package     SpApi
 */
class ImageDimensionsTest extends TestCase
{

    private ImageDimensions $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ImageDimensions();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ImageDimensions"
     */
    public function testImageDimensions()
    {
        $this->assertInstanceOf(ImageDimensions::class, $this->model);
    }

    /**
     * Test attribute "width"
     */
    public function testPropertyWidth()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\IntegerWithUnits();
        
        $this->model->setWidth($testValue);
        $this->assertEquals($testValue, $this->model->getWidth());
    }

    /**
     * Test attribute "height"
     */
    public function testPropertyHeight()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\IntegerWithUnits();
        
        $this->model->setHeight($testValue);
        $this->assertEquals($testValue, $this->model->getHeight());
    }
}
