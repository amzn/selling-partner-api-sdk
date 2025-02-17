<?php
/**
 * RegulatedInformationFieldTest
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
use SpApi\Model\orders\v0\RegulatedInformationField;

/**
 * RegulatedInformationFieldTest Class Doc Comment
 *
 * @category    Class
 * @description A field collected from the regulatory form.
 * @package     SpApi
 */
class RegulatedInformationFieldTest extends TestCase
{

    private RegulatedInformationField $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new RegulatedInformationField();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "RegulatedInformationField"
     */
    public function testRegulatedInformationField()
    {
        $this->assertInstanceOf(RegulatedInformationField::class, $this->model);
    }

    /**
     * Test attribute "field_id"
     */
    public function testPropertyFieldId()
    {
        $testValue = 'test';
        
        $this->model->setFieldId($testValue);
        $this->assertEquals($testValue, $this->model->getFieldId());
    }

    /**
     * Test attribute "field_label"
     */
    public function testPropertyFieldLabel()
    {
        $testValue = 'test';
        
        $this->model->setFieldLabel($testValue);
        $this->assertEquals($testValue, $this->model->getFieldLabel());
    }

    /**
     * Test attribute "field_type"
     */
    public function testPropertyFieldType()
    {
        $enumInstance = new RegulatedInformationField();
        $allowedValues = $enumInstance->getFieldTypeAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setFieldType($testValue);
        $this->assertEquals($testValue, $this->model->getFieldType());
    }

    /**
     * Test attribute "field_value"
     */
    public function testPropertyFieldValue()
    {
        $testValue = 'test';
        
        $this->model->setFieldValue($testValue);
        $this->assertEquals($testValue, $this->model->getFieldValue());
    }
}
