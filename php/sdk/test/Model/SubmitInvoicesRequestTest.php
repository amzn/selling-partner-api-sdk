<?php
/**
 * SubmitInvoicesRequestTest
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
use SpApi\Model\vendor\invoices\v1\SubmitInvoicesRequest;

/**
 * SubmitInvoicesRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the submitInvoices operation.
 * @package     SpApi
 */
class SubmitInvoicesRequestTest extends TestCase
{

    private SubmitInvoicesRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubmitInvoicesRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubmitInvoicesRequest"
     */
    public function testSubmitInvoicesRequest()
    {
        $this->assertInstanceOf(SubmitInvoicesRequest::class, $this->model);
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
}
