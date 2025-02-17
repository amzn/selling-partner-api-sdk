<?php
/**
 * CurrencyTest
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
use SpApi\Model\finances\v0\Currency;

/**
 * CurrencyTest Class Doc Comment
 *
 * @category    Class
 * @description A currency type and amount.
 * @package     SpApi
 */
class CurrencyTest extends TestCase
{

    private Currency $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Currency();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Currency"
     */
    public function testCurrency()
    {
        $this->assertInstanceOf(Currency::class, $this->model);
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
     * Test attribute "currency_amount"
     */
    public function testPropertyCurrencyAmount()
    {
        $testValue = 1;
        
        $this->model->setCurrencyAmount($testValue);
        $this->assertEquals($testValue, $this->model->getCurrencyAmount());
    }
}
