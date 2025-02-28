<?php
/**
 * PlainTextItemTest
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
use SpApi\Model\aplusContent\v2020_11_01\PlainTextItem;

/**
 * PlainTextItemTest Class Doc Comment
 *
 * @category    Class
 * @description Plain positional text that is used in collections of brief labels and descriptors.
 * @package     SpApi
 */
class PlainTextItemTest extends TestCase
{

    private PlainTextItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new PlainTextItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "PlainTextItem"
     */
    public function testPlainTextItem()
    {
        $this->assertInstanceOf(PlainTextItem::class, $this->model);
    }

    /**
     * Test attribute "position"
     */
    public function testPropertyPosition()
    {
        $testValue = 123;
        
        $this->model->setPosition($testValue);
        $this->assertEquals($testValue, $this->model->getPosition());
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = 'test';
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }
}
