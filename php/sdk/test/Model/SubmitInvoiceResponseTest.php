<?php
/**
 * SubmitInvoiceResponseTest
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
use OpenAPI\Client\Model\invoicing\v0\SubmitInvoiceResponse;

/**
 * SubmitInvoiceResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the submitInvoice operation.
 * @package     OpenAPI\Client
 */
class SubmitInvoiceResponseTest extends TestCase
{

    private SubmitInvoiceResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubmitInvoiceResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubmitInvoiceResponse"
     */
    public function testSubmitInvoiceResponse()
    {
        $this->assertInstanceOf(SubmitInvoiceResponse::class, $this->model);
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
