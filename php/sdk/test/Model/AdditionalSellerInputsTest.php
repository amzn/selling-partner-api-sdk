<?php
/**
 * AdditionalSellerInputsTest
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
use SpApi\Model\merchantFulfillment\v0\AdditionalSellerInputs;

/**
 * AdditionalSellerInputsTest Class Doc Comment
 *
 * @category    Class
 * @description An additional set of seller inputs required to purchase shipping.
 * @package     SpApi
 */
class AdditionalSellerInputsTest extends TestCase
{

    private AdditionalSellerInputs $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AdditionalSellerInputs();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AdditionalSellerInputs"
     */
    public function testAdditionalSellerInputs()
    {
        $this->assertInstanceOf(AdditionalSellerInputs::class, $this->model);
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
     * Test attribute "additional_seller_input"
     */
    public function testPropertyAdditionalSellerInput()
    {
        
        $testValue = new \SpApi\Model\merchantFulfillment\v0\AdditionalSellerInput();
        
        $this->model->setAdditionalSellerInput($testValue);
        $this->assertEquals($testValue, $this->model->getAdditionalSellerInput());
    }
}
