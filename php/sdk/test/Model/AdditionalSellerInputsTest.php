<?php
/**
 * AdditionalSellerInputsTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\merchantfulfillment\AdditionalSellerInputs;

/**
 * AdditionalSellerInputsTest Class Doc Comment
 *
 * @category    Class
 * @description An additional set of seller inputs required to purchase shipping.
 * @package     OpenAPI\Client
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
        
        $testValue = new \OpenAPI\Client\Model\merchantfulfillment\AdditionalSellerInput();
        
        $this->model->setAdditionalSellerInput($testValue);
        $this->assertEquals($testValue, $this->model->getAdditionalSellerInput());
    }
}
