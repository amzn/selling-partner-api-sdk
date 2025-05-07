<?php
/**
 * TransactionInitiationRequestTest
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
use SpApi\Model\sellerWallet\v2024_03_01\TransactionInitiationRequest;

/**
 * TransactionInitiationRequestTest Class Doc Comment
 *
 * @category    Class
 * @description Request body to initiate a transaction from a Seller Wallet bank account to another customer-defined bank account.
 * @package     SpApi
 */
class TransactionInitiationRequestTest extends TestCase
{

    private TransactionInitiationRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransactionInitiationRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransactionInitiationRequest"
     */
    public function testTransactionInitiationRequest()
    {
        $this->assertInstanceOf(TransactionInitiationRequest::class, $this->model);
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
     * Test attribute "destination_account_id"
     */
    public function testPropertyDestinationAccountId()
    {
        $testValue = 'test';
        
        $this->model->setDestinationAccountId($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationAccountId());
    }

    /**
     * Test attribute "description"
     */
    public function testPropertyDescription()
    {
        $testValue = 'test';
        
        $this->model->setDescription($testValue);
        $this->assertEquals($testValue, $this->model->getDescription());
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
     * Test attribute "destination_account_holder_address"
     */
    public function testPropertyDestinationAccountHolderAddress()
    {
        
        $testValue = new \SpApi\Model\sellerWallet\v2024_03_01\AccountHolderAddress();
        
        $this->model->setDestinationAccountHolderAddress($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationAccountHolderAddress());
    }

    /**
     * Test attribute "source_amount"
     */
    public function testPropertySourceAmount()
    {
        
        $testValue = new \SpApi\Model\sellerWallet\v2024_03_01\Currency();
        
        $this->model->setSourceAmount($testValue);
        $this->assertEquals($testValue, $this->model->getSourceAmount());
    }

    /**
     * Test attribute "transfer_rate_details"
     */
    public function testPropertyTransferRateDetails()
    {
        
        $testValue = new \SpApi\Model\sellerWallet\v2024_03_01\TransferRatePreview();
        
        $this->model->setTransferRateDetails($testValue);
        $this->assertEquals($testValue, $this->model->getTransferRateDetails());
    }

    /**
     * Test attribute "request_time"
     */
    public function testPropertyRequestTime()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setRequestTime($testValue);
        $this->assertEquals($testValue, $this->model->getRequestTime());
    }
}
