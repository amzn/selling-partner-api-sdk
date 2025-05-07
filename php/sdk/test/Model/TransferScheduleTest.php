<?php
/**
 * TransferScheduleTest
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
use SpApi\Model\sellerWallet\v2024_03_01\TransferSchedule;

/**
 * TransferScheduleTest Class Doc Comment
 *
 * @category    Class
 * @description Transfer schedule details and historical details related to it.
 * @package     SpApi
 */
class TransferScheduleTest extends TestCase
{

    private TransferSchedule $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransferSchedule();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransferSchedule"
     */
    public function testTransferSchedule()
    {
        $this->assertInstanceOf(TransferSchedule::class, $this->model);
    }

    /**
     * Test attribute "transfer_schedule_id"
     */
    public function testPropertyTransferScheduleId()
    {
        $testValue = 'test';
        
        $this->model->setTransferScheduleId($testValue);
        $this->assertEquals($testValue, $this->model->getTransferScheduleId());
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
     * Test attribute "transaction_source_account"
     */
    public function testPropertyTransactionSourceAccount()
    {
        
        $testValue = new \SpApi\Model\sellerWallet\v2024_03_01\TransactionAccount();
        
        $this->model->setTransactionSourceAccount($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionSourceAccount());
    }

    /**
     * Test attribute "transaction_destination_account"
     */
    public function testPropertyTransactionDestinationAccount()
    {
        
        $testValue = new \SpApi\Model\sellerWallet\v2024_03_01\TransactionAccount();
        
        $this->model->setTransactionDestinationAccount($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionDestinationAccount());
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
     * Test attribute "transfer_schedule_failures"
     */
    public function testPropertyTransferScheduleFailures()
    {
        $testValue = [];
        
        $this->model->setTransferScheduleFailures($testValue);
        $this->assertEquals($testValue, $this->model->getTransferScheduleFailures());
    }
}
