<?php
/**
 * GetInvoicesResponseTest
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
use SpApi\Model\invoices\v2024_06_19\GetInvoicesResponse;

/**
 * GetInvoicesResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Success.
 * @package     SpApi
 */
class GetInvoicesResponseTest extends TestCase
{

    private GetInvoicesResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetInvoicesResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetInvoicesResponse"
     */
    public function testGetInvoicesResponse()
    {
        $this->assertInstanceOf(GetInvoicesResponse::class, $this->model);
    }

    /**
     * Test attribute "invoices"
     */
    public function testPropertyInvoices()
    {
        $testValue = [];
        
        $this->model->setInvoices($testValue);
        $this->assertEquals($testValue, $this->model->getInvoices());
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
}
