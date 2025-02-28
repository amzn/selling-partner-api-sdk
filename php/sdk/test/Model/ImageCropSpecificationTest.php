<?php
/**
 * ImageCropSpecificationTest
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
use SpApi\Model\aplusContent\v2020_11_01\ImageCropSpecification;

/**
 * ImageCropSpecificationTest Class Doc Comment
 *
 * @category    Class
 * @description The instructions for optionally cropping an image. If you don&#39;t want to crop the image, set the dimensions to the original image size. If the image is cropped and you don&#39;t include offset values, the coordinates of the top left corner of the cropped image are set to (0,0) by default.
 * @package     SpApi
 */
class ImageCropSpecificationTest extends TestCase
{

    private ImageCropSpecification $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ImageCropSpecification();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ImageCropSpecification"
     */
    public function testImageCropSpecification()
    {
        $this->assertInstanceOf(ImageCropSpecification::class, $this->model);
    }

    /**
     * Test attribute "size"
     */
    public function testPropertySize()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\ImageDimensions();
        
        $this->model->setSize($testValue);
        $this->assertEquals($testValue, $this->model->getSize());
    }

    /**
     * Test attribute "offset"
     */
    public function testPropertyOffset()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\ImageOffsets();
        
        $this->model->setOffset($testValue);
        $this->assertEquals($testValue, $this->model->getOffset());
    }
}
