<?php
/**
 * PropertyGroupTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\producttypedefinitions\PropertyGroup;

/**
 * PropertyGroupTest Class Doc Comment
 *
 * @category    Class
 * @description A property group represents a logical grouping of schema properties that can be used for display or informational purposes.
 * @package     OpenAPI\Client
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
