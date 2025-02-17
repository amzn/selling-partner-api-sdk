<?php
/**
 * GetInvoiceStatusResponseTest
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
use SpApi\Model\invoicing\v0\GetInvoiceStatusResponse;

/**
 * GetInvoiceStatusResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the getInvoiceStatus operation.
 * @package     SpApi
 */
class GetInvoiceStatusResponseTest extends TestCase
{

    private GetInvoiceStatusResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetInvoiceStatusResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetInvoiceStatusResponse"
     */
    public function testGetInvoiceStatusResponse()
    {
        $this->assertInstanceOf(GetInvoiceStatusResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\invoicing\v0\ShipmentInvoiceStatusResponse();
        
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
