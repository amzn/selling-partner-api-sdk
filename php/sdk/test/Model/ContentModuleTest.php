<?php
/**
 * ContentModuleTest
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
use OpenAPI\Client\Model\aplusContent\ContentModule;

/**
 * ContentModuleTest Class Doc Comment
 *
 * @category    Class
 * @description An A+ Content module. An A+ Content document is composed of content modules. The contentModuleType property selects which content module types to use.
 * @package     OpenAPI\Client
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
        $enumInstance = new \OpenAPI\Client\Model\aplusContent\ContentModuleType();
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
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardCompanyLogoModule();
        
        $this->model->setStandardCompanyLogo($testValue);
        $this->assertEquals($testValue, $this->model->getStandardCompanyLogo());
    }

    /**
     * Test attribute "standard_comparison_table"
     */
    public function testPropertyStandardComparisonTable()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardComparisonTableModule();
        
        $this->model->setStandardComparisonTable($testValue);
        $this->assertEquals($testValue, $this->model->getStandardComparisonTable());
    }

    /**
     * Test attribute "standard_four_image_text"
     */
    public function testPropertyStandardFourImageText()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardFourImageTextModule();
        
        $this->model->setStandardFourImageText($testValue);
        $this->assertEquals($testValue, $this->model->getStandardFourImageText());
    }

    /**
     * Test attribute "standard_four_image_text_quadrant"
     */
    public function testPropertyStandardFourImageTextQuadrant()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardFourImageTextQuadrantModule();
        
        $this->model->setStandardFourImageTextQuadrant($testValue);
        $this->assertEquals($testValue, $this->model->getStandardFourImageTextQuadrant());
    }

    /**
     * Test attribute "standard_header_image_text"
     */
    public function testPropertyStandardHeaderImageText()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardHeaderImageTextModule();
        
        $this->model->setStandardHeaderImageText($testValue);
        $this->assertEquals($testValue, $this->model->getStandardHeaderImageText());
    }

    /**
     * Test attribute "standard_image_sidebar"
     */
    public function testPropertyStandardImageSidebar()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardImageSidebarModule();
        
        $this->model->setStandardImageSidebar($testValue);
        $this->assertEquals($testValue, $this->model->getStandardImageSidebar());
    }

    /**
     * Test attribute "standard_image_text_overlay"
     */
    public function testPropertyStandardImageTextOverlay()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardImageTextOverlayModule();
        
        $this->model->setStandardImageTextOverlay($testValue);
        $this->assertEquals($testValue, $this->model->getStandardImageTextOverlay());
    }

    /**
     * Test attribute "standard_multiple_image_text"
     */
    public function testPropertyStandardMultipleImageText()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardMultipleImageTextModule();
        
        $this->model->setStandardMultipleImageText($testValue);
        $this->assertEquals($testValue, $this->model->getStandardMultipleImageText());
    }

    /**
     * Test attribute "standard_product_description"
     */
    public function testPropertyStandardProductDescription()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardProductDescriptionModule();
        
        $this->model->setStandardProductDescription($testValue);
        $this->assertEquals($testValue, $this->model->getStandardProductDescription());
    }

    /**
     * Test attribute "standard_single_image_highlights"
     */
    public function testPropertyStandardSingleImageHighlights()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardSingleImageHighlightsModule();
        
        $this->model->setStandardSingleImageHighlights($testValue);
        $this->assertEquals($testValue, $this->model->getStandardSingleImageHighlights());
    }

    /**
     * Test attribute "standard_single_image_specs_detail"
     */
    public function testPropertyStandardSingleImageSpecsDetail()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardSingleImageSpecsDetailModule();
        
        $this->model->setStandardSingleImageSpecsDetail($testValue);
        $this->assertEquals($testValue, $this->model->getStandardSingleImageSpecsDetail());
    }

    /**
     * Test attribute "standard_single_side_image"
     */
    public function testPropertyStandardSingleSideImage()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardSingleSideImageModule();
        
        $this->model->setStandardSingleSideImage($testValue);
        $this->assertEquals($testValue, $this->model->getStandardSingleSideImage());
    }

    /**
     * Test attribute "standard_tech_specs"
     */
    public function testPropertyStandardTechSpecs()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardTechSpecsModule();
        
        $this->model->setStandardTechSpecs($testValue);
        $this->assertEquals($testValue, $this->model->getStandardTechSpecs());
    }

    /**
     * Test attribute "standard_text"
     */
    public function testPropertyStandardText()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardTextModule();
        
        $this->model->setStandardText($testValue);
        $this->assertEquals($testValue, $this->model->getStandardText());
    }

    /**
     * Test attribute "standard_three_image_text"
     */
    public function testPropertyStandardThreeImageText()
    {
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\StandardThreeImageTextModule();
        
        $this->model->setStandardThreeImageText($testValue);
        $this->assertEquals($testValue, $this->model->getStandardThreeImageText());
    }
}
