<?php
/**
 * TransactionsPayloadTest
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
use SpApi\Model\finances\v2024_06_19\TransactionsPayload;

/**
 * TransactionsPayloadTest Class Doc Comment
 *
 * @category    Class
 * @description The payload for the &#x60;listTransactions&#x60; operation.
 * @package     SpApi
 */
class TransactionsPayloadTest extends TestCase
{

    private TransactionsPayload $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new TransactionsPayload();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "TransactionsPayload"
     */
    public function testTransactionsPayload()
    {
        $this->assertInstanceOf(TransactionsPayload::class, $this->model);
    }

    /**
     * Test attribute "next_token"
     */
    public function testPropertyNextToken()
    {
        $testValue = 'test';
        
        $this->model->setNextToken($testValue);
        $this->assertEquals($testValue, $this->model->getNextToken());
    }

    /**
     * Test attribute "transactions"
     */
    public function testPropertyTransactions()
    {
        $testValue = [];
        
        $this->model->setTransactions($testValue);
        $this->assertEquals($testValue, $this->model->getTransactions());
    }
}
