<?php
/**
 * PropertyGroupTest
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
use SpApi\Model\productTypeDefinitions\v2020_09_01\PropertyGroup;

/**
 * PropertyGroupTest Class Doc Comment
 *
 * @category    Class
 * @description A property group represents a logical grouping of schema properties that can be used for display or informational purposes.
 * @package     SpApi
 */
class PropertyGroupTest extends TestCase
{

    private PropertyGroup $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PropertyGroup();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PropertyGroup"
     */
    public function testPropertyGroup()
    {
        $this->assertInstanceOf(PropertyGroup::class, $this->model);
    }

    /**
     * Test attribute "title"
     */
    public function testPropertyTitle()
    {
        $testValue = 'test';
        
        $this->model->setTitle($testValue);
        $this->assertEquals($testValue, $this->model->getTitle());
    }

    /**
     * Test attribute "description"
     */
    public function testPropertyDescription()
    {
        $testValue = 'test';
        
        $this->model->setDescription($testValue);
        $this->assertEquals($testValue, $this->model->getDescription());
    }

    /**
     * Test attribute "property_names"
     */
    public function testPropertyPropertyNames()
    {
        $testValue = [];
        
        $this->model->setPropertyNames($testValue);
        $this->assertEquals($testValue, $this->model->getPropertyNames());
    }
}
