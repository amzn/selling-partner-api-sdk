<?php
/**
 * InvoiceResponseTest
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
use SpApi\Model\messaging\v1\InvoiceResponse;

/**
 * InvoiceResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the sendInvoice operation.
 * @package     SpApi
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
