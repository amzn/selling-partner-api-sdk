<?php
/**
 * ContentModuleTest
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
use SpApi\Model\aplusContent\v2020_11_01\ContentModule;

/**
 * ContentModuleTest Class Doc Comment
 *
 * @category    Class
 * @description An A+ Content module. An A+ Content document is composed of content modules. The &#x60;contentModuleType&#x60; property selects which content module types to use.
 * @package     SpApi
 */
class ContentModuleTest extends TestCase
{

    private ContentModule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContentModule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContentModule"
     */
    public function testContentModule()
    {
        $this->assertInstanceOf(ContentModule::class, $this->model);
    }

    /**
     * Test attribute "content_module_type"
     */
    public function testPropertyContentModuleType()
    {
        $enumInstance = new \SpApi\Model\aplusContent\v2020_11_01\ContentModuleType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setContentModuleType($testValue);
        $this->assertEquals($testValue, $this->model->getContentModuleType());
    }

    /**
     * Test attribute "standard_company_logo"
     */
    public function testPropertyStandardCompanyLogo()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardCompanyLogoModule();
        
        $this->model->setStandardCompanyLogo($testValue);
        $this->assertEquals($testValue, $this->model->getStandardCompanyLogo());
    }

    /**
     * Test attribute "standard_comparison_table"
     */
    public function testPropertyStandardComparisonTable()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardComparisonTableModule();
        
        $this->model->setStandardComparisonTable($testValue);
        $this->assertEquals($testValue, $this->model->getStandardComparisonTable());
    }

    /**
     * Test attribute "standard_four_image_text"
     */
    public function testPropertyStandardFourImageText()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardFourImageTextModule();
        
        $this->model->setStandardFourImageText($testValue);
        $this->assertEquals($testValue, $this->model->getStandardFourImageText());
    }

    /**
     * Test attribute "standard_four_image_text_quadrant"
     */
    public function testPropertyStandardFourImageTextQuadrant()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardFourImageTextQuadrantModule();
        
        $this->model->setStandardFourImageTextQuadrant($testValue);
        $this->assertEquals($testValue, $this->model->getStandardFourImageTextQuadrant());
    }

    /**
     * Test attribute "standard_header_image_text"
     */
    public function testPropertyStandardHeaderImageText()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardHeaderImageTextModule();
        
        $this->model->setStandardHeaderImageText($testValue);
        $this->assertEquals($testValue, $this->model->getStandardHeaderImageText());
    }

    /**
     * Test attribute "standard_image_sidebar"
     */
    public function testPropertyStandardImageSidebar()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardImageSidebarModule();
        
        $this->model->setStandardImageSidebar($testValue);
        $this->assertEquals($testValue, $this->model->getStandardImageSidebar());
    }

    /**
     * Test attribute "standard_image_text_overlay"
     */
    public function testPropertyStandardImageTextOverlay()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardImageTextOverlayModule();
        
        $this->model->setStandardImageTextOverlay($testValue);
        $this->assertEquals($testValue, $this->model->getStandardImageTextOverlay());
    }

    /**
     * Test attribute "standard_multiple_image_text"
     */
    public function testPropertyStandardMultipleImageText()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardMultipleImageTextModule();
        
        $this->model->setStandardMultipleImageText($testValue);
        $this->assertEquals($testValue, $this->model->getStandardMultipleImageText());
    }

    /**
     * Test attribute "standard_product_description"
     */
    public function testPropertyStandardProductDescription()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardProductDescriptionModule();
        
        $this->model->setStandardProductDescription($testValue);
        $this->assertEquals($testValue, $this->model->getStandardProductDescription());
    }

    /**
     * Test attribute "standard_single_image_highlights"
     */
    public function testPropertyStandardSingleImageHighlights()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardSingleImageHighlightsModule();
        
        $this->model->setStandardSingleImageHighlights($testValue);
        $this->assertEquals($testValue, $this->model->getStandardSingleImageHighlights());
    }

    /**
     * Test attribute "standard_single_image_specs_detail"
     */
    public function testPropertyStandardSingleImageSpecsDetail()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardSingleImageSpecsDetailModule();
        
        $this->model->setStandardSingleImageSpecsDetail($testValue);
        $this->assertEquals($testValue, $this->model->getStandardSingleImageSpecsDetail());
    }

    /**
     * Test attribute "standard_single_side_image"
     */
    public function testPropertyStandardSingleSideImage()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardSingleSideImageModule();
        
        $this->model->setStandardSingleSideImage($testValue);
        $this->assertEquals($testValue, $this->model->getStandardSingleSideImage());
    }

    /**
     * Test attribute "standard_tech_specs"
     */
    public function testPropertyStandardTechSpecs()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardTechSpecsModule();
        
        $this->model->setStandardTechSpecs($testValue);
        $this->assertEquals($testValue, $this->model->getStandardTechSpecs());
    }

    /**
     * Test attribute "standard_text"
     */
    public function testPropertyStandardText()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardTextModule();
        
        $this->model->setStandardText($testValue);
        $this->assertEquals($testValue, $this->model->getStandardText());
    }

    /**
     * Test attribute "standard_three_image_text"
     */
    public function testPropertyStandardThreeImageText()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\StandardThreeImageTextModule();
        
        $this->model->setStandardThreeImageText($testValue);
        $this->assertEquals($testValue, $this->model->getStandardThreeImageText());
    }
}
