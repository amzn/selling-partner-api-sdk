<?php
/**
 * InvoicesDocumentTest
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
use SpApi\Model\invoices\v2024_06_19\InvoicesDocument;

/**
 * InvoicesDocumentTest Class Doc Comment
 *
 * @category    Class
 * @description An object that contains the &#x60;documentId&#x60; and an S3 pre-signed URL that you can use to download the specified file.
 * @package     SpApi
 */
class InvoicesDocumentTest extends TestCase
{

    private InvoicesDocument $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InvoicesDocument();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InvoicesDocument"
     */
    public function testInvoicesDocument()
    {
        $this->assertInstanceOf(InvoicesDocument::class, $this->model);
    }

    /**
     * Test attribute "invoices_document_id"
     */
    public function testPropertyInvoicesDocumentId()
    {
        $testValue = 'test';
        
        $this->model->setInvoicesDocumentId($testValue);
        $this->assertEquals($testValue, $this->model->getInvoicesDocumentId());
    }

    /**
     * Test attribute "invoices_document_url"
     */
    public function testPropertyInvoicesDocumentUrl()
    {
        $testValue = 'test';
        
        $this->model->setInvoicesDocumentUrl($testValue);
        $this->assertEquals($testValue, $this->model->getInvoicesDocumentUrl());
    }
}
