<?php
/**
 * TransferScheduleFailuresTest
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
use SpApi\Model\sellerWallet\v2024_03_01\TransferScheduleFailures;

/**
 * TransferScheduleFailuresTest Class Doc Comment
 *
 * @category    Class
 * @description The time of and reason for the transfer schedule failure.
 * @package     SpApi
 */
class TransferScheduleFailuresTest extends TestCase
{

    private TransferScheduleFailures $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransferScheduleFailures();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransferScheduleFailures"
     */
    public function testTransferScheduleFailures()
    {
        $this->assertInstanceOf(TransferScheduleFailures::class, $this->model);
    }

    /**
     * Test attribute "transfer_schedule_failure_date"
     */
    public function testPropertyTransferScheduleFailureDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setTransferScheduleFailureDate($testValue);
        $this->assertEquals($testValue, $this->model->getTransferScheduleFailureDate());
    }

    /**
     * Test attribute "transfer_schedule_failure_reason"
     */
    public function testPropertyTransferScheduleFailureReason()
    {
        $testValue = 'test';
        
        $this->model->setTransferScheduleFailureReason($testValue);
        $this->assertEquals($testValue, $this->model->getTransferScheduleFailureReason());
    }
}
