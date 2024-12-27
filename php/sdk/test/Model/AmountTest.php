<?php
/**
 * AmountTest
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
use OpenAPI\Client\Model\fulfillmentinboundv0\Amount;

/**
 * AmountTest Class Doc Comment
 *
 * @category    Class
 * @description The monetary value.
 * @package     OpenAPI\Client
 */
class AmountTest extends TestCase
{

    private Amount $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Amount();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Amount"
     */
    public function testAmount()
    {
        $this->assertInstanceOf(Amount::class, $this->model);
    }

    /**
     * Test attribute "currency_code"
     */
    public function testPropertyCurrencyCode()
    {
        $enumInstance = new \OpenAPI\Client\Model\fulfillmentinboundv0\CurrencyCode();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setCurrencyCode($testValue);
        $this->assertEquals($testValue, $this->model->getCurrencyCode());
    }

    /**
     * Test attribute "value"
     */
    public function testPropertyValue()
    {
        
        $testValue = new float();
        
        $this->model->setValue($testValue);
        $this->assertEquals($testValue, $this->model->getValue());
    }
}
