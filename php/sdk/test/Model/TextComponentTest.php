<?php
/**
 * TextComponentTest
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
use SpApi\Model\aplusContent\v2020_11_01\TextComponent;

/**
 * TextComponentTest Class Doc Comment
 *
 * @category    Class
 * @description Rich text content.
 * @package     SpApi
 */
class TextComponentTest extends TestCase
{

    private TextComponent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TextComponent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TextComponent"
     */
    public function testTextComponent()
    {
        $this->assertInstanceOf(TextComponent::class, $this->model);
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

    /**
     * Test attribute "decorator_set"
     */
    public function testPropertyDecoratorSet()
    {
        $testValue = [];
        
        $this->model->setDecoratorSet($testValue);
        $this->assertEquals($testValue, $this->model->getDecoratorSet());
    }
}
