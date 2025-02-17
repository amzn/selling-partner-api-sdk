<?php
/**
 * ItemIdentifierTest
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
use SpApi\Model\catalogItems\v2022_04_01\ItemIdentifier;

/**
 * ItemIdentifierTest Class Doc Comment
 *
 * @category    Class
 * @description Identifier associated with the item in the Amazon catalog, such as a UPC or EAN identifier.
 * @package     SpApi
 */
class ItemIdentifierTest extends TestCase
{

    private ItemIdentifier $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ItemIdentifier();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ItemIdentifier"
     */
    public function testItemIdentifier()
    {
        $this->assertInstanceOf(ItemIdentifier::class, $this->model);
    }

    /**
     * Test attribute "identifier_type"
     */
    public function testPropertyIdentifierType()
    {
        $testValue = 'test';
        
        $this->model->setIdentifierType($testValue);
        $this->assertEquals($testValue, $this->model->getIdentifierType());
    }

    /**
     * Test attribute "identifier"
     */
    public function testPropertyIdentifier()
    {
        $testValue = 'test';
        
        $this->model->setIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getIdentifier());
    }
}
