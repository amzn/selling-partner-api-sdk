<?php
/**
 * StandardImageSidebarModuleTest
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
use SpApi\Model\aplusContent\v2020_11_01\StandardImageSidebarModule;

/**
 * StandardImageSidebarModuleTest Class Doc Comment
 *
 * @category    Class
 * @description Two images, two paragraphs, and two bulleted lists. One image is smaller and displayed in the sidebar.
 * @package     SpApi
 */
class StandardImageSidebarModuleTest extends TestCase
{

    private StandardImageSidebarModule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardImageSidebarModule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardImageSidebarModule"
     */
    public function testStandardImageSidebarModule()
    {
        $this->assertInstanceOf(StandardImageSidebarModule::class, $this->model);
    }

    /**
     * Test attribute "headline"
     */
    public function testPropertyHeadline()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\TextComponent();
        
        $this->model->setHeadline($testValue);
        $this->assertEquals($testValue, $this->model->getHeadline());
    }

    /**
     * Test attribute "image_caption_block"
     */
    public function testPropertyImageCaptionBlock()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardImageCaptionBlock();
        
        $this->model->setImageCaptionBlock($testValue);
        $this->assertEquals($testValue, $this->model->getImageCaptionBlock());
    }

    /**
     * Test attribute "description_text_block"
     */
    public function testPropertyDescriptionTextBlock()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardTextBlock();
        
        $this->model->setDescriptionTextBlock($testValue);
        $this->assertEquals($testValue, $this->model->getDescriptionTextBlock());
    }

    /**
     * Test attribute "description_list_block"
     */
    public function testPropertyDescriptionListBlock()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardTextListBlock();
        
        $this->model->setDescriptionListBlock($testValue);
        $this->assertEquals($testValue, $this->model->getDescriptionListBlock());
    }

    /**
     * Test attribute "sidebar_image_text_block"
     */
    public function testPropertySidebarImageTextBlock()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardImageTextBlock();
        
        $this->model->setSidebarImageTextBlock($testValue);
        $this->assertEquals($testValue, $this->model->getSidebarImageTextBlock());
    }

    /**
     * Test attribute "sidebar_list_block"
     */
    public function testPropertySidebarListBlock()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardTextListBlock();
        
        $this->model->setSidebarListBlock($testValue);
        $this->assertEquals($testValue, $this->model->getSidebarListBlock());
    }
}
