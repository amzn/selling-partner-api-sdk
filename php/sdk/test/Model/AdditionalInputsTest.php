<?php
/**
 * AdditionalInputsTest
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
use SpApi\Model\merchantFulfillment\v0\AdditionalInputs;

/**
 * AdditionalInputsTest Class Doc Comment
 *
 * @category    Class
 * @description Maps the additional seller input to the definition. The key to the map is the field name.
 * @package     SpApi
 */
class AdditionalInputsTest extends TestCase
{

    private AdditionalInputs $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AdditionalInputs();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AdditionalInputs"
     */
    public function testAdditionalInputs()
    {
        $this->assertInstanceOf(AdditionalInputs::class, $this->model);
    }

    /**
     * Test attribute "additional_input_field_name"
     */
    public function testPropertyAdditionalInputFieldName()
    {
        $testValue = 'test';
        
        $this->model->setAdditionalInputFieldName($testValue);
        $this->assertEquals($testValue, $this->model->getAdditionalInputFieldName());
    }

    /**
     * Test attribute "seller_input_definition"
     */
    public function testPropertySellerInputDefinition()
    {
        
        $testValue = new \SpApi\Model\merchantFulfillment\v0\SellerInputDefinition();
        
        $this->model->setSellerInputDefinition($testValue);
        $this->assertEquals($testValue, $this->model->getSellerInputDefinition());
    }
}
