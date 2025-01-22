<?php
/**
 * TransactionReferenceTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\vendor\df\payments\TransactionReference;

/**
 * TransactionReferenceTest Class Doc Comment
 *
 * @category    Class
 * @description Response containing the transaction ID.
 * @package     OpenAPI\Client
 */
class TransactionReferenceTest extends TestCase
{

    private TransactionReference $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransactionReference();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransactionReference"
     */
    public function testTransactionReference()
    {
        $this->assertInstanceOf(TransactionReference::class, $this->model);
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
