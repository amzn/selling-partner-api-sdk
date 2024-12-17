<?php
/**
 * MoneyTest
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
use OpenAPI\Client\Model\orders\Money;

/**
 * MoneyTest Class Doc Comment
 *
 * @category    Class
 * @description The monetary value of the order.
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
     * Test attribute "amount"
     */
    public function testPropertyAmount()
    {
        $testValue = 'test';
        
        $this->model->setAmount($testValue);
        $this->assertEquals($testValue, $this->model->getAmount());
    }
}
