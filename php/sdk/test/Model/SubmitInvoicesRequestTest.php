<?php
/**
 * SubmitInvoicesRequestTest
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
use OpenAPI\Client\Model\vendor\invoices\SubmitInvoicesRequest;

/**
 * SubmitInvoicesRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the submitInvoices operation.
 * @package     OpenAPI\Client
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
