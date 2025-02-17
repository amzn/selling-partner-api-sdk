<?php
/**
 * InvoicesAttributesTest
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
use SpApi\Model\invoices\v2024_06_19\InvoicesAttributes;

/**
 * InvoicesAttributesTest Class Doc Comment
 *
 * @category    Class
 * @description An object that contains the invoice attributes definition.
 * @package     SpApi
 */
class InvoicesAttributesTest extends TestCase
{

    private InvoicesAttributes $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InvoicesAttributes();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InvoicesAttributes"
     */
    public function testInvoicesAttributes()
    {
        $this->assertInstanceOf(InvoicesAttributes::class, $this->model);
    }

    /**
     * Test attribute "invoice_status_options"
     */
    public function testPropertyInvoiceStatusOptions()
    {
        $testValue = [];
        
        $this->model->setInvoiceStatusOptions($testValue);
        $this->assertEquals($testValue, $this->model->getInvoiceStatusOptions());
    }

    /**
     * Test attribute "invoice_type_options"
     */
    public function testPropertyInvoiceTypeOptions()
    {
        $testValue = [];
        
        $this->model->setInvoiceTypeOptions($testValue);
        $this->assertEquals($testValue, $this->model->getInvoiceTypeOptions());
    }

    /**
     * Test attribute "transaction_identifier_name_options"
     */
    public function testPropertyTransactionIdentifierNameOptions()
    {
        $testValue = [];
        
        $this->model->setTransactionIdentifierNameOptions($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionIdentifierNameOptions());
    }

    /**
     * Test attribute "transaction_type_options"
     */
    public function testPropertyTransactionTypeOptions()
    {
        $testValue = [];
        
        $this->model->setTransactionTypeOptions($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionTypeOptions());
    }
}
