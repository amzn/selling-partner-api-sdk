<?php
/**
 * GetInvoicesExportsResponseTest
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
use SpApi\Model\invoices\v2024_06_19\GetInvoicesExportsResponse;

/**
 * GetInvoicesExportsResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Success.
 * @package     SpApi
 */
class GetInvoicesExportsResponseTest extends TestCase
{

    private GetInvoicesExportsResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetInvoicesExportsResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetInvoicesExportsResponse"
     */
    public function testGetInvoicesExportsResponse()
    {
        $this->assertInstanceOf(GetInvoicesExportsResponse::class, $this->model);
    }

    /**
     * Test attribute "exports"
     */
    public function testPropertyExports()
    {
        $testValue = [];
        
        $this->model->setExports($testValue);
        $this->assertEquals($testValue, $this->model->getExports());
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
