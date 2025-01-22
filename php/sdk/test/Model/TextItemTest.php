<?php
/**
 * TextItemTest
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
use OpenAPI\Client\Model\aplusContent\TextItem;

/**
 * TextItemTest Class Doc Comment
 *
 * @category    Class
 * @description Rich positional text, usually presented as a collection of bullet points.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\aplusContent\TextComponent();
        
        $this->model->setText($testValue);
        $this->assertEquals($testValue, $this->model->getText());
    }
}
