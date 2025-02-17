<?php
/**
 * SubmitInvoicesResponseTest
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
use SpApi\Model\vendor\invoices\v1\SubmitInvoicesResponse;

/**
 * SubmitInvoicesResponseTest Class Doc Comment
 *
 * @category    Class
 * @description The response schema for the submitInvoices operation.
 * @package     SpApi
 */
class SubmitInvoicesResponseTest extends TestCase
{

    private SubmitInvoicesResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubmitInvoicesResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubmitInvoicesResponse"
     */
    public function testSubmitInvoicesResponse()
    {
        $this->assertInstanceOf(SubmitInvoicesResponse::class, $this->model);
    }

    /**
     * Test attribute "payload"
     */
    public function testPropertyPayload()
    {
        
        $testValue = new \SpApi\Model\vendor\invoices\v1\TransactionId();
        
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
