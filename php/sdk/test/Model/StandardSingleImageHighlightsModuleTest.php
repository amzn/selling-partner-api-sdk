<?php
/**
 * StandardSingleImageHighlightsModuleTest
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
use OpenAPI\Client\Model\aplusContent\v2020_11_01\StandardSingleImageHighlightsModule;

/**
 * StandardSingleImageHighlightsModuleTest Class Doc Comment
 *
 * @category    Class
 * @description A standard image with several paragraphs and a bulleted list.
 * @package     OpenAPI\Client
 */
class StandardSingleImageHighlightsModuleTest extends TestCase
{

    private StandardSingleImageHighlightsModule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardSingleImageHighlightsModule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardSingleImageHighlightsModule"
     */
    public function testStandardSingleImageHighlightsModule()
    {
        $this->assertInstanceOf(StandardSingleImageHighlightsModule::class, $this->model);
    }

    /**
     * Test attribute "image"
     */
    public function testPropertyImage()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\v2020_11_01\ImageComponent();
        
        $this->model->setImage($testValue);
        $this->assertEquals($testValue, $this->model->getImage());
    }

    /**
     * Test attribute "headline"
     */
    public function testPropertyHeadline()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\v2020_11_01\TextComponent();
        
        $this->model->setHeadline($testValue);
        $this->assertEquals($testValue, $this->model->getHeadline());
    }

    /**
     * Test attribute "text_block1"
     */
    public function testPropertyTextBlock1()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\v2020_11_01\StandardTextBlock();
        
        $this->model->setTextBlock1($testValue);
        $this->assertEquals($testValue, $this->model->getTextBlock1());
    }

    /**
     * Test attribute "text_block2"
     */
    public function testPropertyTextBlock2()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\v2020_11_01\StandardTextBlock();
        
        $this->model->setTextBlock2($testValue);
        $this->assertEquals($testValue, $this->model->getTextBlock2());
    }

    /**
     * Test attribute "text_block3"
     */
    public function testPropertyTextBlock3()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\v2020_11_01\StandardTextBlock();
        
        $this->model->setTextBlock3($testValue);
        $this->assertEquals($testValue, $this->model->getTextBlock3());
    }

    /**
     * Test attribute "bulleted_list_block"
     */
    public function testPropertyBulletedListBlock()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\v2020_11_01\StandardHeaderTextListBlock();
        
        $this->model->setBulletedListBlock($testValue);
        $this->assertEquals($testValue, $this->model->getBulletedListBlock());
    }
}
