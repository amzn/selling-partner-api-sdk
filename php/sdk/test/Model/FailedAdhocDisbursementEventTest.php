<?php
/**
 * FailedAdhocDisbursementEventTest
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
use SpApi\Model\finances\v0\FailedAdhocDisbursementEvent;

/**
 * FailedAdhocDisbursementEventTest Class Doc Comment
 *
 * @category    Class
 * @description Failed ad hoc disbursement event list.
 * @package     SpApi
 */
class FailedAdhocDisbursementEventTest extends TestCase
{

    private FailedAdhocDisbursementEvent $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FailedAdhocDisbursementEvent();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FailedAdhocDisbursementEvent"
     */
    public function testFailedAdhocDisbursementEvent()
    {
        $this->assertInstanceOf(FailedAdhocDisbursementEvent::class, $this->model);
    }

    /**
     * Test attribute "funds_transfers_type"
     */
    public function testPropertyFundsTransfersType()
    {
        $testValue = 'test';
        
        $this->model->setFundsTransfersType($testValue);
        $this->assertEquals($testValue, $this->model->getFundsTransfersType());
    }

    /**
     * Test attribute "transfer_id"
     */
    public function testPropertyTransferId()
    {
        $testValue = 'test';
        
        $this->model->setTransferId($testValue);
        $this->assertEquals($testValue, $this->model->getTransferId());
    }

    /**
     * Test attribute "disbursement_id"
     */
    public function testPropertyDisbursementId()
    {
        $testValue = 'test';
        
        $this->model->setDisbursementId($testValue);
        $this->assertEquals($testValue, $this->model->getDisbursementId());
    }

    /**
     * Test attribute "payment_disbursement_type"
     */
    public function testPropertyPaymentDisbursementType()
    {
        $testValue = 'test';
        
        $this->model->setPaymentDisbursementType($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentDisbursementType());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $testValue = 'test';
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "transfer_amount"
     */
    public function testPropertyTransferAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setTransferAmount($testValue);
        $this->assertEquals($testValue, $this->model->getTransferAmount());
    }

    /**
     * Test attribute "posted_date"
     */
    public function testPropertyPostedDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setPostedDate($testValue);
        $this->assertEquals($testValue, $this->model->getPostedDate());
    }
}
