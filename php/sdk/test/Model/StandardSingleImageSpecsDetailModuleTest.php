<?php
/**
 * StandardSingleImageSpecsDetailModuleTest
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
use SpApi\Model\aplusContent\v2020_11_01\StandardSingleImageSpecsDetailModule;

/**
 * StandardSingleImageSpecsDetailModuleTest Class Doc Comment
 *
 * @category    Class
 * @description A standard image with paragraphs, a bulleted list, and extra space for technical details.
 * @package     SpApi
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
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\TextComponent();
        
        $this->model->setHeadline($testValue);
        $this->assertEquals($testValue, $this->model->getHeadline());
    }

    /**
     * Test attribute "image"
     */
    public function testPropertyImage()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\ImageComponent();
        
        $this->model->setImage($testValue);
        $this->assertEquals($testValue, $this->model->getImage());
    }

    /**
     * Test attribute "description_headline"
     */
    public function testPropertyDescriptionHeadline()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\TextComponent();
        
        $this->model->setDescriptionHeadline($testValue);
        $this->assertEquals($testValue, $this->model->getDescriptionHeadline());
    }

    /**
     * Test attribute "description_block1"
     */
    public function testPropertyDescriptionBlock1()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardTextBlock();
        
        $this->model->setDescriptionBlock1($testValue);
        $this->assertEquals($testValue, $this->model->getDescriptionBlock1());
    }

    /**
     * Test attribute "description_block2"
     */
    public function testPropertyDescriptionBlock2()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardTextBlock();
        
        $this->model->setDescriptionBlock2($testValue);
        $this->assertEquals($testValue, $this->model->getDescriptionBlock2());
    }

    /**
     * Test attribute "specification_headline"
     */
    public function testPropertySpecificationHeadline()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\TextComponent();
        
        $this->model->setSpecificationHeadline($testValue);
        $this->assertEquals($testValue, $this->model->getSpecificationHeadline());
    }

    /**
     * Test attribute "specification_list_block"
     */
    public function testPropertySpecificationListBlock()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardHeaderTextListBlock();
        
        $this->model->setSpecificationListBlock($testValue);
        $this->assertEquals($testValue, $this->model->getSpecificationListBlock());
    }

    /**
     * Test attribute "specification_text_block"
     */
    public function testPropertySpecificationTextBlock()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardTextBlock();
        
        $this->model->setSpecificationTextBlock($testValue);
        $this->assertEquals($testValue, $this->model->getSpecificationTextBlock());
    }
}
