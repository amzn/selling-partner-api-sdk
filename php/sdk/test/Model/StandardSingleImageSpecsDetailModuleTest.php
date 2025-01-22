<?php
/**
 * StandardSingleImageSpecsDetailModuleTest
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
use OpenAPI\Client\Model\aplusContent\StandardSingleImageSpecsDetailModule;

/**
 * StandardSingleImageSpecsDetailModuleTest Class Doc Comment
 *
 * @category    Class
 * @description A standard image with paragraphs and a bulleted list, and extra space for technical details.
 * @package     OpenAPI\Client
 */
class StandardSingleImageSpecsDetailModuleTest extends TestCase
{

    private StandardSingleImageSpecsDetailModule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardSingleImageSpecsDetailModule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardSingleImageSpecsDetailModule"
     */
    public function testStandardSingleImageSpecsDetailModule()
    {
        $this->assertInstanceOf(StandardSingleImageSpecsDetailModule::class, $this->model);
    }

    /**
     * Test attribute "headline"
     */
    public function testPropertyHeadline()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\TextComponent();
        
        $this->model->setHeadline($testValue);
        $this->assertEquals($testValue, $this->model->getHeadline());
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
     * Test attribute "description_headline"
     */
    public function testPropertyDescriptionHeadline()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\TextComponent();
        
        $this->model->setDescriptionHeadline($testValue);
        $this->assertEquals($testValue, $this->model->getDescriptionHeadline());
    }

    /**
     * Test attribute "description_block1"
     */
    public function testPropertyDescriptionBlock1()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardTextBlock();
        
        $this->model->setDescriptionBlock1($testValue);
        $this->assertEquals($testValue, $this->model->getDescriptionBlock1());
    }

    /**
     * Test attribute "description_block2"
     */
    public function testPropertyDescriptionBlock2()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardTextBlock();
        
        $this->model->setDescriptionBlock2($testValue);
        $this->assertEquals($testValue, $this->model->getDescriptionBlock2());
    }

    /**
     * Test attribute "specification_headline"
     */
    public function testPropertySpecificationHeadline()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\TextComponent();
        
        $this->model->setSpecificationHeadline($testValue);
        $this->assertEquals($testValue, $this->model->getSpecificationHeadline());
    }

    /**
     * Test attribute "specification_list_block"
     */
    public function testPropertySpecificationListBlock()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardHeaderTextListBlock();
        
        $this->model->setSpecificationListBlock($testValue);
        $this->assertEquals($testValue, $this->model->getSpecificationListBlock());
    }

    /**
     * Test attribute "specification_text_block"
     */
    public function testPropertySpecificationTextBlock()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardTextBlock();
        
        $this->model->setSpecificationTextBlock($testValue);
        $this->assertEquals($testValue, $this->model->getSpecificationTextBlock());
    }
}
