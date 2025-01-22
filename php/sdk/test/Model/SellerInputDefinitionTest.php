<?php
/**
 * SellerInputDefinitionTest
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
use OpenAPI\Client\Model\merchantFulfillment\SellerInputDefinition;

/**
 * SellerInputDefinitionTest Class Doc Comment
 *
 * @category    Class
 * @description Specifies characteristics that apply to a seller input.
 * @package     OpenAPI\Client
 */
class SellerInputDefinitionTest extends TestCase
{

    private SellerInputDefinition $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SellerInputDefinition();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SellerInputDefinition"
     */
    public function testSellerInputDefinition()
    {
        $this->assertInstanceOf(SellerInputDefinition::class, $this->model);
    }

    /**
     * Test attribute "is_required"
     */
    public function testPropertyIsRequired()
    {
        $testValue = true;
        
        $this->model->setIsRequired($testValue);
        $this->assertEquals($testValue, $this->model->getIsRequired());
    }

    /**
     * Test attribute "data_type"
     */
    public function testPropertyDataType()
    {
        $testValue = 'test';
        
        $this->model->setDataType($testValue);
        $this->assertEquals($testValue, $this->model->getDataType());
    }

    /**
     * Test attribute "constraints"
     */
    public function testPropertyConstraints()
    {
        $testValue = [];
        
        $this->model->setConstraints($testValue);
        $this->assertEquals($testValue, $this->model->getConstraints());
    }

    /**
     * Test attribute "input_display_text"
     */
    public function testPropertyInputDisplayText()
    {
        $testValue = 'test';
        
        $this->model->setInputDisplayText($testValue);
        $this->assertEquals($testValue, $this->model->getInputDisplayText());
    }

    /**
     * Test attribute "input_target"
     */
    public function testPropertyInputTarget()
    {
        $enumInstance = new \OpenAPI\Client\Model\merchantFulfillment\InputTargetType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setInputTarget($testValue);
        $this->assertEquals($testValue, $this->model->getInputTarget());
    }

    /**
     * Test attribute "stored_value"
     */
    public function testPropertyStoredValue()
    {
        
        $testValue = new \OpenAPI\Client\Model\merchantFulfillment\AdditionalSellerInput();
        
        $this->model->setStoredValue($testValue);
        $this->assertEquals($testValue, $this->model->getStoredValue());
    }

    /**
     * Test attribute "restricted_set_values"
     */
    public function testPropertyRestrictedSetValues()
    {
        $testValue = [];
        
        $this->model->setRestrictedSetValues($testValue);
        $this->assertEquals($testValue, $this->model->getRestrictedSetValues());
    }
}
