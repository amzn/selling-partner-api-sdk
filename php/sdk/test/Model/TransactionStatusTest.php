<?php
/**
 * TransactionStatusTest
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
use SpApi\Model\vendor\df\transactions\v2021_12_28\TransactionStatus;

/**
 * TransactionStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the getTransactionStatus operation.
 * @package     SpApi
 */
class TransactionStatusTest extends TestCase
{

    private TransactionStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransactionStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransactionStatus"
     */
    public function testTransactionStatus()
    {
        $this->assertInstanceOf(TransactionStatus::class, $this->model);
    }

    /**
     * Test attribute "transaction_status"
     */
    public function testPropertyTransactionStatus()
    {
        
        $testValue = new \SpApi\Model\vendor\df\transactions\v2021_12_28\Transaction();
        
        $this->model->setTransactionStatus($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionStatus());
    }
}
