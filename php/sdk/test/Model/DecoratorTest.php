<?php
/**
 * DecoratorTest
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
use OpenAPI\Client\Model\aplusContent\Decorator;

/**
 * DecoratorTest Class Doc Comment
 *
 * @category    Class
 * @description A decorator applied to a content string value in order to create rich text.
 * @package     OpenAPI\Client
 */
class DecoratorTest extends TestCase
{

    private Decorator $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Decorator();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Decorator"
     */
    public function testDecorator()
    {
        $this->assertInstanceOf(Decorator::class, $this->model);
    }

    /**
     * Test attribute "type"
     */
    public function testPropertyType()
    {
        $enumInstance = new \OpenAPI\Client\Model\aplusContent\DecoratorType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setType($testValue);
        $this->assertEquals($testValue, $this->model->getType());
    }

    /**
     * Test attribute "offset"
     */
    public function testPropertyOffset()
    {
        $testValue = 123;
        
        $this->model->setOffset($testValue);
        $this->assertEquals($testValue, $this->model->getOffset());
    }

    /**
     * Test attribute "length"
     */
    public function testPropertyLength()
    {
        $testValue = 123;
        
        $this->model->setLength($testValue);
        $this->assertEquals($testValue, $this->model->getLength());
    }

    /**
     * Test attribute "depth"
     */
    public function testPropertyDepth()
    {
        $testValue = 123;
        
        $this->model->setDepth($testValue);
        $this->assertEquals($testValue, $this->model->getDepth());
    }
}
