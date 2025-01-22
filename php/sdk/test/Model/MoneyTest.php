<?php
/**
 * MoneyTest
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
use OpenAPI\Client\Model\fulfillment\outbound\Money;

/**
 * MoneyTest Class Doc Comment
 *
 * @category    Class
 * @description An amount of money, including units in the form of currency.
 * @package     OpenAPI\Client
 */
class MoneyTest extends TestCase
{

    private Money $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Money();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Money"
     */
    public function testMoney()
    {
        $this->assertInstanceOf(Money::class, $this->model);
    }

    /**
     * Test attribute "currency_code"
     */
    public function testPropertyCurrencyCode()
    {
        $testValue = 'test';
        
        $this->model->setCurrencyCode($testValue);
        $this->assertEquals($testValue, $this->model->getCurrencyCode());
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
