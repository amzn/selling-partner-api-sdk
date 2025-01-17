<?php
/**
 * InvoicesDocumentTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\invoices\InvoicesDocument;

/**
 * InvoicesDocumentTest Class Doc Comment
 *
 * @category    Class
 * @description An object that contains the &#x60;documentId&#x60; and an S3 pre-signed URL that you can use to download the specified file.
 * @package     OpenAPI\Client
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
