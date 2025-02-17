<?php
/**
 * CarrierAccountInputTest
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
use SpApi\Model\shipping\v2\CarrierAccountInput;

/**
 * CarrierAccountInputTest Class Doc Comment
 *
 * @category    Class
 * @description Info About CarrierAccountInput
 * @package     SpApi
 */
class CarrierAccountInputTest extends TestCase
{

    private CarrierAccountInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CarrierAccountInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CarrierAccountInput"
     */
    public function testCarrierAccountInput()
    {
        $this->assertInstanceOf(CarrierAccountInput::class, $this->model);
    }

    /**
     * Test attribute "description_localization_key"
     */
    public function testPropertyDescriptionLocalizationKey()
    {
        $testValue = 'test';
        
        $this->model->setDescriptionLocalizationKey($testValue);
        $this->assertEquals($testValue, $this->model->getDescriptionLocalizationKey());
    }

    /**
     * Test attribute "name"
     */
    public function testPropertyName()
    {
        $testValue = 'test';
        
        $this->model->setName($testValue);
        $this->assertEquals($testValue, $this->model->getName());
    }

    /**
     * Test attribute "group_name"
     */
    public function testPropertyGroupName()
    {
        $testValue = 'test';
        
        $this->model->setGroupName($testValue);
        $this->assertEquals($testValue, $this->model->getGroupName());
    }

    /**
     * Test attribute "input_type"
     */
    public function testPropertyInputType()
    {
        $enumInstance = new \SpApi\Model\shipping\v2\InputType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setInputType($testValue);
        $this->assertEquals($testValue, $this->model->getInputType());
    }

    /**
     * Test attribute "is_mandatory"
     */
    public function testPropertyIsMandatory()
    {
        $testValue = true;
        
        $this->model->setIsMandatory($testValue);
        $this->assertEquals($testValue, $this->model->getIsMandatory());
    }

    /**
     * Test attribute "is_confidential"
     */
    public function testPropertyIsConfidential()
    {
        $testValue = true;
        
        $this->model->setIsConfidential($testValue);
        $this->assertEquals($testValue, $this->model->getIsConfidential());
    }

    /**
     * Test attribute "is_hidden"
     */
    public function testPropertyIsHidden()
    {
        $testValue = true;
        
        $this->model->setIsHidden($testValue);
        $this->assertEquals($testValue, $this->model->getIsHidden());
    }

    /**
     * Test attribute "validation_metadata"
     */
    public function testPropertyValidationMetadata()
    {
        $testValue = [];
        
        $this->model->setValidationMetadata($testValue);
        $this->assertEquals($testValue, $this->model->getValidationMetadata());
    }
}
