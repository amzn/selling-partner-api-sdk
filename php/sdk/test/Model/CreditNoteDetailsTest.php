<?php
/**
 * CreditNoteDetailsTest
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
use SpApi\Model\vendor\invoices\v1\CreditNoteDetails;

/**
 * CreditNoteDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description References required in order to process a credit note. This information is required only if InvoiceType is CreditNote.
 * @package     SpApi
 */
class CreditNoteDetailsTest extends TestCase
{

    private CreditNoteDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new CreditNoteDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "CreditNoteDetails"
     */
    public function testCreditNoteDetails()
    {
        $this->assertInstanceOf(CreditNoteDetails::class, $this->model);
    }

    /**
     * Test attribute "reference_invoice_number"
     */
    public function testPropertyReferenceInvoiceNumber()
    {
        $testValue = 'test';
        
        $this->model->setReferenceInvoiceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getReferenceInvoiceNumber());
    }

    /**
     * Test attribute "debit_note_number"
     */
    public function testPropertyDebitNoteNumber()
    {
        $testValue = 'test';
        
        $this->model->setDebitNoteNumber($testValue);
        $this->assertEquals($testValue, $this->model->getDebitNoteNumber());
    }

    /**
     * Test attribute "returns_reference_number"
     */
    public function testPropertyReturnsReferenceNumber()
    {
        $testValue = 'test';
        
        $this->model->setReturnsReferenceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getReturnsReferenceNumber());
    }

    /**
     * Test attribute "goods_return_date"
     */
    public function testPropertyGoodsReturnDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setGoodsReturnDate($testValue);
        $this->assertEquals($testValue, $this->model->getGoodsReturnDate());
    }

    /**
     * Test attribute "rma_id"
     */
    public function testPropertyRmaId()
    {
        $testValue = 'test';
        
        $this->model->setRmaId($testValue);
        $this->assertEquals($testValue, $this->model->getRmaId());
    }

    /**
     * Test attribute "coop_reference_number"
     */
    public function testPropertyCoopReferenceNumber()
    {
        $testValue = 'test';
        
        $this->model->setCoopReferenceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getCoopReferenceNumber());
    }

    /**
     * Test attribute "consignors_reference_number"
     */
    public function testPropertyConsignorsReferenceNumber()
    {
        $testValue = 'test';
        
        $this->model->setConsignorsReferenceNumber($testValue);
        $this->assertEquals($testValue, $this->model->getConsignorsReferenceNumber());
    }
}
