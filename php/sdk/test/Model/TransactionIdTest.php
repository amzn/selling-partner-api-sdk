<?php
/**
 * TransactionIdTest
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
use SpApi\Model\vendor\df\orders\v2021_12_28\TransactionId;

/**
 * TransactionIdTest Class Doc Comment
 *
 * @category    Class
 * @description Response containing the transaction ID.
 * @package     SpApi
 */
class TransactionIdTest extends TestCase
{

    private TransactionId $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransactionId();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransactionId"
     */
    public function testTransactionId()
    {
        $this->assertInstanceOf(TransactionId::class, $this->model);
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
}
