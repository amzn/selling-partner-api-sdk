<?php
/**
 * InvoiceDetailTest
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
use SpApi\Model\vendor\df\payments\v1\InvoiceDetail;

/**
 * InvoiceDetailTest Class Doc Comment
 *
 * @category    Class
 * @description Represents the details of an invoice, including invoice number, date, parties involved, payment terms, totals, taxes, charges, and line items.
 * @package     SpApi
 */
class InvoiceDetailTest extends TestCase
{

    private InvoiceDetail $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InvoiceDetail();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InvoiceDetail"
     */
    public function testInvoiceDetail()
    {
        $this->assertInstanceOf(InvoiceDetail::class, $this->model);
    }

    /**
     * Test attribute "invoice_number"
     */
    public function testPropertyInvoiceNumber()
    {
        $testValue = 'test';
        
        $this->model->setInvoiceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getInvoiceNumber());
    }

    /**
     * Test attribute "invoice_date"
     */
    public function testPropertyInvoiceDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setInvoiceDate($testValue);
        $this->assertEquals($testValue, $this->model->getInvoiceDate());
    }

    /**
     * Test attribute "reference_number"
     */
    public function testPropertyReferenceNumber()
    {
        $testValue = 'test';
        
        $this->model->setReferenceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getReferenceNumber());
    }

    /**
     * Test attribute "remit_to_party"
     */
    public function testPropertyRemitToParty()
    {
        
        $testValue = new \SpApi\Model\vendor\df\payments\v1\PartyIdentification();
        
        $this->model->setRemitToParty($testValue);
        $this->assertEquals($testValue, $this->model->getRemitToParty());
    }

    /**
     * Test attribute "ship_from_party"
     */
    public function testPropertyShipFromParty()
    {
        
        $testValue = new \SpApi\Model\vendor\df\payments\v1\PartyIdentification();
        
        $this->model->setShipFromParty($testValue);
        $this->assertEquals($testValue, $this->model->getShipFromParty());
    }

    /**
     * Test attribute "bill_to_party"
     */
    public function testPropertyBillToParty()
    {
        
        $testValue = new \SpApi\Model\vendor\df\payments\v1\PartyIdentification();
        
        $this->model->setBillToParty($testValue);
        $this->assertEquals($testValue, $this->model->getBillToParty());
    }

    /**
     * Test attribute "ship_to_country_code"
     */
    public function testPropertyShipToCountryCode()
    {
        $testValue = 'test';
        
        $this->model->setShipToCountryCode($testValue);
        $this->assertEquals($testValue, $this->model->getShipToCountryCode());
    }

    /**
     * Test attribute "payment_terms_code"
     */
    public function testPropertyPaymentTermsCode()
    {
        $testValue = 'test';
        
        $this->model->setPaymentTermsCode($testValue);
        $this->assertEquals($testValue, $this->model->getPaymentTermsCode());
    }

    /**
     * Test attribute "invoice_total"
     */
    public function testPropertyInvoiceTotal()
    {
        
        $testValue = new \SpApi\Model\vendor\df\payments\v1\Money();
        
        $this->model->setInvoiceTotal($testValue);
        $this->assertEquals($testValue, $this->model->getInvoiceTotal());
    }

    /**
     * Test attribute "tax_totals"
     */
    public function testPropertyTaxTotals()
    {
        $testValue = [];
        
        $this->model->setTaxTotals($testValue);
        $this->assertEquals($testValue, $this->model->getTaxTotals());
    }

    /**
     * Test attribute "additional_details"
     */
    public function testPropertyAdditionalDetails()
    {
        $testValue = [];
        
        $this->model->setAdditionalDetails($testValue);
        $this->assertEquals($testValue, $this->model->getAdditionalDetails());
    }

    /**
     * Test attribute "charge_details"
     */
    public function testPropertyChargeDetails()
    {
        $testValue = [];
        
        $this->model->setChargeDetails($testValue);
        $this->assertEquals($testValue, $this->model->getChargeDetails());
    }

    /**
     * Test attribute "items"
     */
    public function testPropertyItems()
    {
        $testValue = [];
        
        $this->model->setItems($testValue);
        $this->assertEquals($testValue, $this->model->getItems());
    }
}
