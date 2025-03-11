<?php
/**
 * TransactionTest
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
use SpApi\Model\vendor\df\transactions\v2021_12_28\Transaction;

/**
 * TransactionTest Class Doc Comment
 *
 * @category    Class
 * @description The transaction status details.
 * @package     SpApi
 */
class TransactionTest extends TestCase
{

    private Transaction $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Transaction();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Transaction"
     */
    public function testTransaction()
    {
        $this->assertInstanceOf(Transaction::class, $this->model);
    }

    /**
     * Test attribute "transaction_id"
     */
    public function testPropertyTransactionId()
    {
        $testValue = 'test';
        
        $this->model->setTransactionId($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionId());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $enumInstance = new Transaction();
        $allowedValues = $enumInstance->getStatusAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        
        $testValue = new \SpApi\Model\vendor\df\transactions\v2021_12_28\ErrorList();
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
