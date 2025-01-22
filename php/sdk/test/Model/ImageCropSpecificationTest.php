<?php
/**
 * ImageCropSpecificationTest
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
use OpenAPI\Client\Model\aplusContent\ImageCropSpecification;

/**
 * ImageCropSpecificationTest Class Doc Comment
 *
 * @category    Class
 * @description The instructions for optionally cropping an image. If no cropping is desired, set the dimensions to the original image size. If the image is cropped and no offset values are provided, then the coordinates of the top left corner of the cropped image, relative to the original image, are defaulted to (0,0).
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\ImageDimensions();
        
        $this->model->setSize($testValue);
        $this->assertEquals($testValue, $this->model->getSize());
    }

    /**
     * Test attribute "offset"
     */
    public function testPropertyOffset()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\ImageOffsets();
        
        $this->model->setOffset($testValue);
        $this->assertEquals($testValue, $this->model->getOffset());
    }
}
