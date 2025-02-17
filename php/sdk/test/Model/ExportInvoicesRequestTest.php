<?php
/**
 * ExportInvoicesRequestTest
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
use SpApi\Model\invoices\v2024_06_19\ExportInvoicesRequest;

/**
 * ExportInvoicesRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The information required to create the export request.
 * @package     SpApi
 */
class ExportInvoicesRequestTest extends TestCase
{

    private ExportInvoicesRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ExportInvoicesRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ExportInvoicesRequest"
     */
    public function testExportInvoicesRequest()
    {
        $this->assertInstanceOf(ExportInvoicesRequest::class, $this->model);
    }

    /**
     * Test attribute "date_end"
     */
    public function testPropertyDateEnd()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setDateEnd($testValue);
        $this->assertEquals($testValue, $this->model->getDateEnd());
    }

    /**
     * Test attribute "date_start"
     */
    public function testPropertyDateStart()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setDateStart($testValue);
        $this->assertEquals($testValue, $this->model->getDateStart());
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
     * Test attribute "file_format"
     */
    public function testPropertyFileFormat()
    {
        $enumInstance = new \SpApi\Model\invoices\v2024_06_19\FileFormat();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setFileFormat($testValue);
        $this->assertEquals($testValue, $this->model->getFileFormat());
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
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
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
     * Test attribute "statuses"
     */
    public function testPropertyStatuses()
    {
        $testValue = [];
        
        $this->model->setStatuses($testValue);
        $this->assertEquals($testValue, $this->model->getStatuses());
    }

    /**
     * Test attribute "transaction_identifier"
     */
    public function testPropertyTransactionIdentifier()
    {
        
        $testValue = new \SpApi\Model\invoices\v2024_06_19\TransactionIdentifier();
        
        $this->model->setTransactionIdentifier($testValue);
        $this->assertEquals($testValue, $this->model->getTransactionIdentifier());
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
