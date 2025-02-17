<?php
/**
 * ValidationMetadataTest
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
use SpApi\Model\shipping\v2\ValidationMetadata;

/**
 * ValidationMetadataTest Class Doc Comment
 *
 * @category    Class
 * @description ValidationMetadata Details
 * @package     SpApi
 */
class ValidationMetadataTest extends TestCase
{

    private ValidationMetadata $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ValidationMetadata();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ValidationMetadata"
     */
    public function testValidationMetadata()
    {
        $this->assertInstanceOf(ValidationMetadata::class, $this->model);
    }

    /**
     * Test attribute "error_message"
     */
    public function testPropertyErrorMessage()
    {
        $testValue = 'test';
        
        $this->model->setErrorMessage($testValue);
        $this->assertEquals($testValue, $this->model->getErrorMessage());
    }

    /**
     * Test attribute "validation_strategy"
     */
    public function testPropertyValidationStrategy()
    {
        $testValue = 'test';
        
        $this->model->setValidationStrategy($testValue);
        $this->assertEquals($testValue, $this->model->getValidationStrategy());
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
