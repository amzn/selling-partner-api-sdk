<?php
/**
 * PrintOptionTest
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
use SpApi\Model\shipping\v2\PrintOption;

/**
 * PrintOptionTest Class Doc Comment
 *
 * @category    Class
 * @description The format options available for a label.
 * @package     SpApi
 */
class PrintOptionTest extends TestCase
{

    private PrintOption $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PrintOption();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PrintOption"
     */
    public function testPrintOption()
    {
        $this->assertInstanceOf(PrintOption::class, $this->model);
    }

    /**
     * Test attribute "supported_dpis"
     */
    public function testPropertySupportedDpis()
    {
        $testValue = [];
        
        $this->model->setSupportedDpis($testValue);
        $this->assertEquals($testValue, $this->model->getSupportedDpis());
    }

    /**
     * Test attribute "supported_page_layouts"
     */
    public function testPropertySupportedPageLayouts()
    {
        $testValue = [];
        
        $this->model->setSupportedPageLayouts($testValue);
        $this->assertEquals($testValue, $this->model->getSupportedPageLayouts());
    }

    /**
     * Test attribute "supported_file_joining_options"
     */
    public function testPropertySupportedFileJoiningOptions()
    {
        $testValue = [];
        
        $this->model->setSupportedFileJoiningOptions($testValue);
        $this->assertEquals($testValue, $this->model->getSupportedFileJoiningOptions());
    }

    /**
     * Test attribute "supported_document_details"
     */
    public function testPropertySupportedDocumentDetails()
    {
        $testValue = [];
        
        $this->model->setSupportedDocumentDetails($testValue);
        $this->assertEquals($testValue, $this->model->getSupportedDocumentDetails());
    }
}
