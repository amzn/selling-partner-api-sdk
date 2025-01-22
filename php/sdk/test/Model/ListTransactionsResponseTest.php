<?php
/**
 * ListTransactionsResponseTest
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
use OpenAPI\Client\Model\finances\v2024_06_19\ListTransactionsResponse;

/**
 * ListTransactionsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the &#x60;listTransactions&#x60; operation.
 * @package     OpenAPI\Client
 */
class ListTransactionsResponseTest extends TestCase
{

    private ListTransactionsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ListTransactionsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ListTransactionsResponse"
     */
    public function testListTransactionsResponse()
    {
        $this->assertInstanceOf(ListTransactionsResponse::class, $this->model);
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
