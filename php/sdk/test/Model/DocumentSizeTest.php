<?php
/**
 * DocumentSizeTest
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
use SpApi\Model\shipping\v2\DocumentSize;

/**
 * DocumentSizeTest Class Doc Comment
 *
 * @category    Class
 * @description The size dimensions of the label.
 * @package     SpApi
 */
class DocumentSizeTest extends TestCase
{

    private DocumentSize $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new DocumentSize();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "DocumentSize"
     */
    public function testDocumentSize()
    {
        $this->assertInstanceOf(DocumentSize::class, $this->model);
    }

    /**
     * Test attribute "width"
     */
    public function testPropertyWidth()
    {
        $testValue = 1;
        
        $this->model->setWidth($testValue);
        $this->assertEquals($testValue, $this->model->getWidth());
    }

    /**
     * Test attribute "length"
     */
    public function testPropertyLength()
    {
        $testValue = 1;
        
        $this->model->setLength($testValue);
        $this->assertEquals($testValue, $this->model->getLength());
    }

    /**
     * Test attribute "unit"
     */
    public function testPropertyUnit()
    {
        $enumInstance = new DocumentSize();
        $allowedValues = $enumInstance->getUnitAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setUnit($testValue);
        $this->assertEquals($testValue, $this->model->getUnit());
    }
}
