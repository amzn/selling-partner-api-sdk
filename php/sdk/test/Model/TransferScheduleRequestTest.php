<?php
/**
 * TransferScheduleRequestTest
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
use SpApi\Model\sellerWallet\v2024_03_01\TransferScheduleRequest;

/**
 * TransferScheduleRequestTest Class Doc Comment
 *
 * @category    Class
 * @description Request body to initiate a scheduled transfer from a Seller Wallet bank account to another customer-defined bank account.
 * @package     SpApi
 */
class TransferScheduleRequestTest extends TestCase
{

    private TransferScheduleRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransferScheduleRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransferScheduleRequest"
     */
    public function testTransferScheduleRequest()
    {
        $this->assertInstanceOf(TransferScheduleRequest::class, $this->model);
    }

    /**
     * Test attribute "source_account_id"
     */
    public function testPropertySourceAccountId()
    {
        $testValue = 'test';
        
        $this->model->setSourceAccountId($testValue);
        $this->assertEquals($testValue, $this->model->getSourceAccountId());
    }

    /**
     * Test attribute "source_currency_code"
     */
    public function testPropertySourceCurrencyCode()
    {
        $testValue = 'test';
        
        $this->model->setSourceCurrencyCode($testValue);
        $this->assertEquals($testValue, $this->model->getSourceCurrencyCode());
    }

    /**
     * Test attribute "destination_account_id"
     */
    public function testPropertyDestinationAccountId()
    {
        $testValue = 'test';
        
        $this->model->setDestinationAccountId($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationAccountId());
    }

    /**
     * Test attribute "destination_transaction_instrument"
     */
    public function testPropertyDestinationTransactionInstrument()
    {
        
        $testValue = new \SpApi\Model\sellerWallet\v2024_03_01\TransactionInstrumentDetails();
        
        $this->model->setDestinationTransactionInstrument($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationTransactionInstrument());
    }

    /**
     * Test attribute "transaction_type"
     */
    public function testPropertyTransactionType()
    {
        $enumInstance = new \SpApi\Model\sellerWallet\v2024_03_01\TransactionType();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setTransactionType($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionType());
    }

    /**
     * Test attribute "transfer_schedule_information"
     */
    public function testPropertyTransferScheduleInformation()
    {
        
        $testValue = new \SpApi\Model\sellerWallet\v2024_03_01\TransferScheduleInformation();
        
        $this->model->setTransferScheduleInformation($testValue);
        $this->assertEquals($testValue, $this->model->getTransferScheduleInformation());
    }

    /**
     * Test attribute "payment_preference"
     */
    public function testPropertyPaymentPreference()
    {
        
        $testValue = new \SpApi\Model\sellerWallet\v2024_03_01\PaymentPreference();
        
        $this->model->setPaymentPreference($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentPreference());
    }

    /**
     * Test attribute "transfer_schedule_status"
     */
    public function testPropertyTransferScheduleStatus()
    {
        $enumInstance = new \SpApi\Model\sellerWallet\v2024_03_01\TransferScheduleStatus();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setTransferScheduleStatus($testValue);
        $this->assertEquals($testValue, $this->model->getTransferScheduleStatus());
    }
}
