<?php
/**
 * TextItemTest
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
use SpApi\Model\aplusContent\v2020_11_01\TextItem;

/**
 * TextItemTest Class Doc Comment
 *
 * @category    Class
 * @description Rich positional text that is usually presented as a collection of bullet points.
 * @package     SpApi
 */
class TextItemTest extends TestCase
{

    private TextItem $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TextItem();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TextItem"
     */
    public function testTextItem()
    {
        $this->assertInstanceOf(TextItem::class, $this->model);
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
     * Test attribute "text"
     */
    public function testPropertyText()
    {
        
        $testValue = new \SpApi\Model\aplusContent\v2020_11_01\TextComponent();
        
        $this->model->setText($testValue);
        $this->assertEquals($testValue, $this->model->getText());
    }
}
