<?php
/**
 * ImageComponentTest
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
use SpApi\Model\aplusContent\v2020_11_01\ImageComponent;

/**
 * ImageComponentTest Class Doc Comment
 *
 * @category    Class
 * @description A reference to an image, hosted in the A+ Content media library.
 * @package     SpApi
 */
class ImageComponentTest extends TestCase
{

    private ImageComponent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ImageComponent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ImageComponent"
     */
    public function testImageComponent()
    {
        $this->assertInstanceOf(ImageComponent::class, $this->model);
    }

    /**
     * Test attribute "upload_destination_id"
     */
    public function testPropertyUploadDestinationId()
    {
        $testValue = 'test';
        
        $this->model->setUploadDestinationId($testValue);
        $this->assertEquals($testValue, $this->model->getUploadDestinationId());
    }

    /**
     * Test attribute "image_crop_specification"
     */
    public function testPropertyImageCropSpecification()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\ImageCropSpecification();
        
        $this->model->setImageCropSpecification($testValue);
        $this->assertEquals($testValue, $this->model->getImageCropSpecification());
    }

    /**
     * Test attribute "alt_text"
     */
    public function testPropertyAltText()
    {
        $testValue = 'test';
        
        $this->model->setAltText($testValue);
        $this->assertEquals($testValue, $this->model->getAltText());
    }
}
