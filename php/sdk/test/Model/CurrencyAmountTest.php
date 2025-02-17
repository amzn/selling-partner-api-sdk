<?php
/**
 * CurrencyAmountTest
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
use SpApi\Model\merchantFulfillment\v0\CurrencyAmount;

/**
 * CurrencyAmountTest Class Doc Comment
 *
 * @category    Class
 * @description Currency type and amount.
 * @package     SpApi
 */
class CurrencyAmountTest extends TestCase
{

    private CurrencyAmount $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CurrencyAmount();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CurrencyAmount"
     */
    public function testCurrencyAmount()
    {
        $this->assertInstanceOf(CurrencyAmount::class, $this->model);
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
        
        $testValue = new float();
        
        $this->model->setAmount($testValue);
        $this->assertEquals($testValue, $this->model->getAmount());
    }
}
