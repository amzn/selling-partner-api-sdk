<?php
/**
 * TransactionInstrumentDetailsTest
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
use SpApi\Model\sellerWallet\v2024_03_01\TransactionInstrumentDetails;

/**
 * TransactionInstrumentDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description Details of the destination bank account in the transaction request.
 * @package     SpApi
 */
class TransactionInstrumentDetailsTest extends TestCase
{

    private TransactionInstrumentDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransactionInstrumentDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransactionInstrumentDetails"
     */
    public function testTransactionInstrumentDetails()
    {
        $this->assertInstanceOf(TransactionInstrumentDetails::class, $this->model);
    }

    /**
     * Test attribute "bank_account"
     */
    public function testPropertyBankAccount()
    {
        
        $testValue = new \SpApi\Model\sellerWallet\v2024_03_01\BankAccount();
        
        $this->model->setBankAccount($testValue);
        $this->assertEquals($testValue, $this->model->getBankAccount());
    }

    /**
     * Test attribute "bank_account_number"
     */
    public function testPropertyBankAccountNumber()
    {
        $testValue = 'test';
        
        $this->model->setBankAccountNumber($testValue);
        $this->assertEquals($testValue, $this->model->getBankAccountNumber());
    }
}
