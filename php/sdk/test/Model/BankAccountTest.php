<?php
/**
 * BankAccountTest
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
use SpApi\Model\sellerWallet\v2024_03_01\BankAccount;

/**
 * BankAccountTest Class Doc Comment
 *
 * @category    Class
 * @description Details of an Amazon Seller Wallet bank account. This account is used to hold the money that a Seller Wallet customer earns by selling items.
 * @package     SpApi
 */
class BankAccountTest extends TestCase
{

    private BankAccount $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new BankAccount();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "BankAccount"
     */
    public function testBankAccount()
    {
        $this->assertInstanceOf(BankAccount::class, $this->model);
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
     * Test attribute "account_holder_name"
     */
    public function testPropertyAccountHolderName()
    {
        $testValue = 'test';
        
        $this->model->setAccountHolderName($testValue);
        $this->assertEquals($testValue, $this->model->getAccountHolderName());
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
     * Test attribute "bank_name"
     */
    public function testPropertyBankName()
    {
        $testValue = 'test';
        
        $this->model->setBankName($testValue);
        $this->assertEquals($testValue, $this->model->getBankName());
    }

    /**
     * Test attribute "bank_account_ownership_type"
     */
    public function testPropertyBankAccountOwnershipType()
    {
        $enumInstance = new \SpApi\Model\sellerWallet\v2024_03_01\BankAccountOwnershipType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setBankAccountOwnershipType($testValue);
        $this->assertEquals($testValue, $this->model->getBankAccountOwnershipType());
    }

    /**
     * Test attribute "routing_number"
     */
    public function testPropertyRoutingNumber()
    {
        $testValue = 'test';
        
        $this->model->setRoutingNumber($testValue);
        $this->assertEquals($testValue, $this->model->getRoutingNumber());
    }

    /**
     * Test attribute "bank_number_format"
     */
    public function testPropertyBankNumberFormat()
    {
        $enumInstance = new \SpApi\Model\sellerWallet\v2024_03_01\BankNumberFormat();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setBankNumberFormat($testValue);
        $this->assertEquals($testValue, $this->model->getBankNumberFormat());
    }

    /**
     * Test attribute "account_country_code"
     */
    public function testPropertyAccountCountryCode()
    {
        $testValue = 'test';
        
        $this->model->setAccountCountryCode($testValue);
        $this->assertEquals($testValue, $this->model->getAccountCountryCode());
    }

    /**
     * Test attribute "account_currency"
     */
    public function testPropertyAccountCurrency()
    {
        $testValue = 'test';
        
        $this->model->setAccountCurrency($testValue);
        $this->assertEquals($testValue, $this->model->getAccountCurrency());
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
     * Test attribute "bank_account_holder_status"
     */
    public function testPropertyBankAccountHolderStatus()
    {
        $enumInstance = new \SpApi\Model\sellerWallet\v2024_03_01\BankAccountHolderStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setBankAccountHolderStatus($testValue);
        $this->assertEquals($testValue, $this->model->getBankAccountHolderStatus());
    }
}
