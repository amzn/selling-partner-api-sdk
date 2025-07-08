<?php
/**
 * ItemRelatedIdentifierTest
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
use SpApi\Model\finances\v2024_06_19\ItemRelatedIdentifier;

/**
 * ItemRelatedIdentifierTest Class Doc Comment
 *
 * @category    Class
 * @description Related business identifiers of the item.
 * @package     SpApi
 */
class ItemRelatedIdentifierTest extends TestCase
{

    private ItemRelatedIdentifier $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemRelatedIdentifier();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemRelatedIdentifier"
     */
    public function testItemRelatedIdentifier()
    {
        $this->assertInstanceOf(ItemRelatedIdentifier::class, $this->model);
    }

    /**
     * Test attribute "item_related_identifier_name"
     */
    public function testPropertyItemRelatedIdentifierName()
    {
        $enumInstance = new ItemRelatedIdentifier();
        $allowedValues = $enumInstance->getItemRelatedIdentifierNameAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setItemRelatedIdentifierName($testValue);
        $this->assertEquals($testValue, $this->model->getItemRelatedIdentifierName());
    }

    /**
     * Test attribute "item_related_identifier_value"
     */
    public function testPropertyItemRelatedIdentifierValue()
    {
        $testValue = 'test';
        
        $this->model->setItemRelatedIdentifierValue($testValue);
        $this->assertEquals($testValue, $this->model->getItemRelatedIdentifierValue());
    }
}
