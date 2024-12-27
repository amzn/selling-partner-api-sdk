<?php
/**
 * AdditionalSellerInputTest
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
use OpenAPI\Client\Model\merchantfulfillment\AdditionalSellerInput;

/**
 * AdditionalSellerInputTest Class Doc Comment
 *
 * @category    Class
 * @description Additional information required to purchase shipping.
 * @package     OpenAPI\Client
 */
class AdditionalSellerInputTest extends TestCase
{

    private AdditionalSellerInput $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AdditionalSellerInput();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AdditionalSellerInput"
     */
    public function testAdditionalSellerInput()
    {
        $this->assertInstanceOf(AdditionalSellerInput::class, $this->model);
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
     * Test attribute "value_as_string"
     */
    public function testPropertyValueAsString()
    {
        $testValue = 'test';
        
        $this->model->setValueAsString($testValue);
        $this->assertEquals($testValue, $this->model->getValueAsString());
    }

    /**
     * Test attribute "value_as_boolean"
     */
    public function testPropertyValueAsBoolean()
    {
        $testValue = true;
        
        $this->model->setValueAsBoolean($testValue);
        $this->assertEquals($testValue, $this->model->getValueAsBoolean());
    }

    /**
     * Test attribute "value_as_integer"
     */
    public function testPropertyValueAsInteger()
    {
        $testValue = 123;
        
        $this->model->setValueAsInteger($testValue);
        $this->assertEquals($testValue, $this->model->getValueAsInteger());
    }

    /**
     * Test attribute "value_as_timestamp"
     */
    public function testPropertyValueAsTimestamp()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setValueAsTimestamp($testValue);
        $this->assertEquals($testValue, $this->model->getValueAsTimestamp());
    }

    /**
     * Test attribute "value_as_address"
     */
    public function testPropertyValueAsAddress()
    {
        
        $testValue = new \OpenAPI\Client\Model\merchantfulfillment\Address();
        
        $this->model->setValueAsAddress($testValue);
        $this->assertEquals($testValue, $this->model->getValueAsAddress());
    }

    /**
     * Test attribute "value_as_weight"
     */
    public function testPropertyValueAsWeight()
    {
        
        $testValue = new \OpenAPI\Client\Model\merchantfulfillment\Weight();
        
        $this->model->setValueAsWeight($testValue);
        $this->assertEquals($testValue, $this->model->getValueAsWeight());
    }

    /**
     * Test attribute "value_as_dimension"
     */
    public function testPropertyValueAsDimension()
    {
        
        $testValue = new \OpenAPI\Client\Model\merchantfulfillment\Length();
        
        $this->model->setValueAsDimension($testValue);
        $this->assertEquals($testValue, $this->model->getValueAsDimension());
    }

    /**
     * Test attribute "value_as_currency"
     */
    public function testPropertyValueAsCurrency()
    {
        
        $testValue = new \OpenAPI\Client\Model\merchantfulfillment\CurrencyAmount();
        
        $this->model->setValueAsCurrency($testValue);
        $this->assertEquals($testValue, $this->model->getValueAsCurrency());
    }
}
