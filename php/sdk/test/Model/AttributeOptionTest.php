<?php
/**
 * AttributeOptionTest
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
use OpenAPI\Client\Model\invoices\AttributeOption;

/**
 * AttributeOptionTest Class Doc Comment
 *
 * @category    Class
 * @description The definition of the attribute option.
 * @package     OpenAPI\Client
 */
class AttributeOptionTest extends TestCase
{

    private AttributeOption $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AttributeOption();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AttributeOption"
     */
    public function testAttributeOption()
    {
        $this->assertInstanceOf(AttributeOption::class, $this->model);
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
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        $testValue = 'test';
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }
}
