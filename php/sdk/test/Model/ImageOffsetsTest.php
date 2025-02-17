<?php
/**
 * ImageOffsetsTest
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
use SpApi\Model\aplusContent\v2020_11_01\ImageOffsets;

/**
 * ImageOffsetsTest Class Doc Comment
 *
 * @category    Class
 * @description The top left corner of the cropped image, specified in the original image&#39;s coordinate space.
 * @package     SpApi
 */
class ImageOffsetsTest extends TestCase
{

    private ImageOffsets $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ImageOffsets();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ImageOffsets"
     */
    public function testImageOffsets()
    {
        $this->assertInstanceOf(ImageOffsets::class, $this->model);
    }

    /**
     * Test attribute "x"
     */
    public function testPropertyX()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\IntegerWithUnits();
        
        $this->model->setX($testValue);
        $this->assertEquals($testValue, $this->model->getX());
    }

    /**
     * Test attribute "y"
     */
    public function testPropertyY()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\IntegerWithUnits();
        
        $this->model->setY($testValue);
        $this->assertEquals($testValue, $this->model->getY());
    }
}
