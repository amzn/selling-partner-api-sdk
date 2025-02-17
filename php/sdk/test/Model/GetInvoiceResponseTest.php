<?php
/**
 * GetInvoiceResponseTest
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
use SpApi\Model\invoices\v2024_06_19\GetInvoiceResponse;

/**
 * GetInvoiceResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Success.
 * @package     SpApi
 */
class GetInvoiceResponseTest extends TestCase
{

    private GetInvoiceResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetInvoiceResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetInvoiceResponse"
     */
    public function testGetInvoiceResponse()
    {
        $this->assertInstanceOf(GetInvoiceResponse::class, $this->model);
    }

    /**
     * Test attribute "invoice"
     */
    public function testPropertyInvoice()
    {
        
        $testValue = new \SpApi\Model\invoices\v2024_06_19\Invoice();
        
        $this->model->setInvoice($testValue);
        $this->assertEquals($testValue, $this->model->getInvoice());
    }
}
