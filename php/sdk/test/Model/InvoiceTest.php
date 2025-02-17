<?php
/**
 * InvoiceTest
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
use SpApi\Model\invoices\v2024_06_19\Invoice;

/**
 * InvoiceTest Class Doc Comment
 *
 * @category    Class
 * @description Provides detailed information about an invoice.
 * @package     SpApi
 */
class InvoiceTest extends TestCase
{

    private Invoice $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Invoice();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Invoice"
     */
    public function testInvoice()
    {
        $this->assertInstanceOf(Invoice::class, $this->model);
    }

    /**
     * Test attribute "date"
     */
    public function testPropertyDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setDate($testValue);
        $this->assertEquals($testValue, $this->model->getDate());
    }

    /**
     * Test attribute "error_code"
     */
    public function testPropertyErrorCode()
    {
        $testValue = 'test';
        
        $this->model->setErrorCode($testValue);
        $this->assertEquals($testValue, $this->model->getErrorCode());
    }

    /**
     * Test attribute "external_invoice_id"
     */
    public function testPropertyExternalInvoiceId()
    {
        $testValue = 'test';
        
        $this->model->setExternalInvoiceId($testValue);
        $this->assertEquals($testValue, $this->model->getExternalInvoiceId());
    }

    /**
     * Test attribute "gov_response"
     */
    public function testPropertyGovResponse()
    {
        $testValue = 'test';
        
        $this->model->setGovResponse($testValue);
        $this->assertEquals($testValue, $this->model->getGovResponse());
    }

    /**
     * Test attribute "id"
     */
    public function testPropertyId()
    {
        $testValue = 'test';
        
        $this->model->setId($testValue);
        $this->assertEquals($testValue, $this->model->getId());
    }

    /**
     * Test attribute "invoice_type"
     */
    public function testPropertyInvoiceType()
    {
        $testValue = 'test';
        
        $this->model->setInvoiceType($testValue);
        $this->assertEquals($testValue, $this->model->getInvoiceType());
    }

    /**
     * Test attribute "series"
     */
    public function testPropertySeries()
    {
        $testValue = 'test';
        
        $this->model->setSeries($testValue);
        $this->assertEquals($testValue, $this->model->getSeries());
    }

    /**
     * Test attribute "status"
     */
    public function testPropertyStatus()
    {
        $testValue = 'test';
        
        $this->model->setStatus($testValue);
        $this->assertEquals($testValue, $this->model->getStatus());
    }

    /**
     * Test attribute "transaction_ids"
     */
    public function testPropertyTransactionIds()
    {
        $testValue = [];
        
        $this->model->setTransactionIds($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionIds());
    }

    /**
     * Test attribute "transaction_type"
     */
    public function testPropertyTransactionType()
    {
        $testValue = 'test';
        
        $this->model->setTransactionType($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionType());
    }
}
