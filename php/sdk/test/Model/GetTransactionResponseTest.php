<?php
/**
 * GetTransactionResponseTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\vendor\transactionStatus\GetTransactionResponse;

/**
 * GetTransactionResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getTransaction operation.
 * @package     OpenAPI\Client
 */
class GetTransactionResponseTest extends TestCase
{

    private GetTransactionResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetTransactionResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetTransactionResponse"
     */
    public function testGetTransactionResponse()
    {
        $this->assertInstanceOf(GetTransactionResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\transactionStatus\TransactionStatus();
        
        $this->model->setPayload($testValue);
        $this->assertEquals($testValue, $this->model->getPayload());
    }

    /**
     * Test attribute "errors"
     */
    public function testPropertyErrors()
    {
        $testValue = [];
        
        $this->model->setErrors($testValue);
        $this->assertEquals($testValue, $this->model->getErrors());
    }
}
