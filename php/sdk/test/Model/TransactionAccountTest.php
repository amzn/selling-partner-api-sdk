<?php
/**
 * TransactionAccountTest
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
use SpApi\Model\sellerWallet\v2024_03_01\TransactionAccount;

/**
 * TransactionAccountTest Class Doc Comment
 *
 * @category    Class
 * @description Details of the bank account involved in transaction.
 * @package     SpApi
 */
class TransactionAccountTest extends TestCase
{

    private TransactionAccount $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransactionAccount();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransactionAccount"
     */
    public function testTransactionAccount()
    {
        $this->assertInstanceOf(TransactionAccount::class, $this->model);
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
     * Test attribute "bank_account_holder_name"
     */
    public function testPropertyBankAccountHolderName()
    {
        $testValue = 'test';
        
        $this->model->setBankAccountHolderName($testValue);
        $this->assertEquals($testValue, $this->model->getBankAccountHolderName());
    }

    /**
     * Test attribute "bank_name"
     */
    public function testPropertyBankName()
    {
        $testValue = 'test';
        
        $this->model->setBankName($testValue);
        $this->assertEquals($testValue, $this->model->getBankName());
    }

    /**
     * Test attribute "bank_account_number_format"
     */
    public function testPropertyBankAccountNumberFormat()
    {
        $enumInstance = new \SpApi\Model\sellerWallet\v2024_03_01\BankAccountNumberFormat();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setBankAccountNumberFormat($testValue);
        $this->assertEquals($testValue, $this->model->getBankAccountNumberFormat());
    }

    /**
     * Test attribute "bank_account_number_tail"
     */
    public function testPropertyBankAccountNumberTail()
    {
        $testValue = 'test';
        
        $this->model->setBankAccountNumberTail($testValue);
        $this->assertEquals($testValue, $this->model->getBankAccountNumberTail());
    }

    /**
     * Test attribute "bank_account_country_code"
     */
    public function testPropertyBankAccountCountryCode()
    {
        $testValue = 'test';
        
        $this->model->setBankAccountCountryCode($testValue);
        $this->assertEquals($testValue, $this->model->getBankAccountCountryCode());
    }

    /**
     * Test attribute "bank_account_currency"
     */
    public function testPropertyBankAccountCurrency()
    {
        $testValue = 'test';
        
        $this->model->setBankAccountCurrency($testValue);
        $this->assertEquals($testValue, $this->model->getBankAccountCurrency());
    }
}
