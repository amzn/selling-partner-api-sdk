<?php
/**
 * StandardImageCaptionBlockTest
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
use OpenAPI\Client\Model\aplusContent\StandardImageCaptionBlock;

/**
 * StandardImageCaptionBlockTest Class Doc Comment
 *
 * @category    Class
 * @description The A+ Content standard image and caption block.
 * @package     OpenAPI\Client
 */
class StandardImageCaptionBlockTest extends TestCase
{

    private StandardImageCaptionBlock $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardImageCaptionBlock();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardImageCaptionBlock"
     */
    public function testStandardImageCaptionBlock()
    {
        $this->assertInstanceOf(StandardImageCaptionBlock::class, $this->model);
    }

    /**
     * Test attribute "image"
     */
    public function testPropertyImage()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\ImageComponent();
        
        $this->model->setImage($testValue);
        $this->assertEquals($testValue, $this->model->getImage());
    }

    /**
     * Test attribute "caption"
     */
    public function testPropertyCaption()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\TextComponent();
        
        $this->model->setCaption($testValue);
        $this->assertEquals($testValue, $this->model->getCaption());
    }
}
