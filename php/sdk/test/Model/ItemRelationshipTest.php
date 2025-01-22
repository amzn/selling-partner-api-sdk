<?php
/**
 * ItemRelationshipTest
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
use OpenAPI\Client\Model\catalogItems\ItemRelationship;

/**
 * ItemRelationshipTest Class Doc Comment
 *
 * @category    Class
 * @description Relationship details for an Amazon catalog item.
 * @package     OpenAPI\Client
 */
class ItemRelationshipTest extends TestCase
{

    private ItemRelationship $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemRelationship();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemRelationship"
     */
    public function testItemRelationship()
    {
        $this->assertInstanceOf(ItemRelationship::class, $this->model);
    }

    /**
     * Test attribute "child_asins"
     */
    public function testPropertyChildAsins()
    {
        $testValue = [];
        
        $this->model->setChildAsins($testValue);
        $this->assertEquals($testValue, $this->model->getChildAsins());
    }

    /**
     * Test attribute "parent_asins"
     */
    public function testPropertyParentAsins()
    {
        $testValue = [];
        
        $this->model->setParentAsins($testValue);
        $this->assertEquals($testValue, $this->model->getParentAsins());
    }

    /**
     * Test attribute "variation_theme"
     */
    public function testPropertyVariationTheme()
    {
        
        $testValue = new \OpenAPI\Client\Model\catalogItems\ItemVariationTheme();
        
        $this->model->setVariationTheme($testValue);
        $this->assertEquals($testValue, $this->model->getVariationTheme());
    }

    /**
     * Test attribute "type"
     */
    public function testPropertyType()
    {
        $enumInstance = new ItemRelationship();
        $allowedValues = $enumInstance->getTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setType($testValue);
        $this->assertEquals($testValue, $this->model->getType());
    }
}
