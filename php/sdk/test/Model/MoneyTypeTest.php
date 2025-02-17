<?php
/**
 * MoneyTypeTest
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
use SpApi\Model\productFees\v0\MoneyType;

/**
 * MoneyTypeTest Class Doc Comment
 *
 * @category    Class
 * @description MoneyType
 * @package     SpApi
 */
class MoneyTypeTest extends TestCase
{

    private MoneyType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new MoneyType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "MoneyType"
     */
    public function testMoneyType()
    {
        $this->assertInstanceOf(MoneyType::class, $this->model);
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
        $testValue = 1;
        
        $this->model->setAmount($testValue);
        $this->assertEquals($testValue, $this->model->getAmount());
    }
}
