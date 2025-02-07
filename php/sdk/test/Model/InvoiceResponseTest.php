<?php
/**
 * InvoiceResponseTest
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
use OpenAPI\Client\Model\messaging\v1\InvoiceResponse;

/**
 * InvoiceResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the sendInvoice operation.
 * @package     OpenAPI\Client
 */
class InvoiceResponseTest extends TestCase
{

    private InvoiceResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InvoiceResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InvoiceResponse"
     */
    public function testInvoiceResponse()
    {
        $this->assertInstanceOf(InvoiceResponse::class, $this->model);
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
