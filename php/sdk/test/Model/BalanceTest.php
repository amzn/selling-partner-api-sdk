<?php
/**
 * BalanceTest
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
use SpApi\Model\sellerWallet\v2024_03_01\Balance;

/**
 * BalanceTest Class Doc Comment
 *
 * @category    Class
 * @description The balance amount in the Amazon Seller Wallet bank account.
 * @package     SpApi
 */
class BalanceTest extends TestCase
{

    private Balance $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Balance();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Balance"
     */
    public function testBalance()
    {
        $this->assertInstanceOf(Balance::class, $this->model);
    }

    /**
     * Test attribute "account_id"
     */
    public function testPropertyAccountId()
    {
        $testValue = 'test';
        
        $this->model->setAccountId($testValue);
        $this->assertEquals($testValue, $this->model->getAccountId());
    }

    /**
     * Test attribute "balance_type"
     */
    public function testPropertyBalanceType()
    {
        $enumInstance = new \SpApi\Model\sellerWallet\v2024_03_01\BalanceType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setBalanceType($testValue);
        $this->assertEquals($testValue, $this->model->getBalanceType());
    }

    /**
     * Test attribute "balance_amount"
     */
    public function testPropertyBalanceAmount()
    {
        $testValue = 1;
        
        $this->model->setBalanceAmount($testValue);
        $this->assertEquals($testValue, $this->model->getBalanceAmount());
    }

    /**
     * Test attribute "balance_currency"
     */
    public function testPropertyBalanceCurrency()
    {
        $testValue = 'test';
        
        $this->model->setBalanceCurrency($testValue);
        $this->assertEquals($testValue, $this->model->getBalanceCurrency());
    }

    /**
     * Test attribute "last_update_date"
     */
    public function testPropertyLastUpdateDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setLastUpdateDate($testValue);
        $this->assertEquals($testValue, $this->model->getLastUpdateDate());
    }
}
