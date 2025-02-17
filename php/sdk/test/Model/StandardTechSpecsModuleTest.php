<?php
/**
 * StandardTechSpecsModuleTest
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
use SpApi\Model\aplusContent\v2020_11_01\StandardTechSpecsModule;

/**
 * StandardTechSpecsModuleTest Class Doc Comment
 *
 * @category    Class
 * @description The standard table of technical feature names and definitions.
 * @package     SpApi
 */
class StandardTechSpecsModuleTest extends TestCase
{

    private StandardTechSpecsModule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new StandardTechSpecsModule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "StandardTechSpecsModule"
     */
    public function testStandardTechSpecsModule()
    {
        $this->assertInstanceOf(StandardTechSpecsModule::class, $this->model);
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
     * Test attribute "specification_list"
     */
    public function testPropertySpecificationList()
    {
        $testValue = [];
        
        $this->model->setSpecificationList($testValue);
        $this->assertEquals($testValue, $this->model->getSpecificationList());
    }

    /**
     * Test attribute "table_count"
     */
    public function testPropertyTableCount()
    {
        $testValue = 123;
        
        $this->model->setTableCount($testValue);
        $this->assertEquals($testValue, $this->model->getTableCount());
    }
}
