<?php
/**
 * StandardProductDescriptionModuleTest
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
use SpApi\Model\aplusContent\v2020_11_01\StandardProductDescriptionModule;

/**
 * StandardProductDescriptionModuleTest Class Doc Comment
 *
 * @category    Class
 * @description Standard product description text.
 * @package     SpApi
 */
class StandardProductDescriptionModuleTest extends TestCase
{

    private StandardProductDescriptionModule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardProductDescriptionModule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardProductDescriptionModule"
     */
    public function testStandardProductDescriptionModule()
    {
        $this->assertInstanceOf(StandardProductDescriptionModule::class, $this->model);
    }

    /**
     * Test attribute "body"
     */
    public function testPropertyBody()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\ParagraphComponent();
        
        $this->model->setBody($testValue);
        $this->assertEquals($testValue, $this->model->getBody());
    }
}
