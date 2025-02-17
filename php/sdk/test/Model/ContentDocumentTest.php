<?php
/**
 * ContentDocumentTest
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
use SpApi\Model\aplusContent\v2020_11_01\ContentDocument;

/**
 * ContentDocumentTest Class Doc Comment
 *
 * @category    Class
 * @description The A+ Content document. This is the enhanced content that is published to product detail pages.
 * @package     SpApi
 */
class ContentDocumentTest extends TestCase
{

    private ContentDocument $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContentDocument();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContentDocument"
     */
    public function testContentDocument()
    {
        $this->assertInstanceOf(ContentDocument::class, $this->model);
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }

    /**
     * Test attribute "content_type"
     */
    public function testPropertyContentType()
    {
        $enumInstance = new \SpApi\Model\aplusContent\v2020_11_01\ContentType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setContentType($testValue);
        $this->assertEquals($testValue, $this->model->getContentType());
    }

    /**
     * Test attribute "content_sub_type"
     */
    public function testPropertyContentSubType()
    {
        $testValue = 'test';
        
        $this->model->setContentSubType($testValue);
        $this->assertEquals($testValue, $this->model->getContentSubType());
    }

    /**
     * Test attribute "locale"
     */
    public function testPropertyLocale()
    {
        $testValue = 'test';
        
        $this->model->setLocale($testValue);
        $this->assertEquals($testValue, $this->model->getLocale());
    }

    /**
     * Test attribute "content_module_list"
     */
    public function testPropertyContentModuleList()
    {
        $testValue = [];
        
        $this->model->setContentModuleList($testValue);
        $this->assertEquals($testValue, $this->model->getContentModuleList());
    }
}
