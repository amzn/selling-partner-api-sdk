<?php
/**
 * GetInvoicesDocumentResponseTest
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
use OpenAPI\Client\Model\invoices\v2024_06_19\GetInvoicesDocumentResponse;

/**
 * GetInvoicesDocumentResponseTest Class Doc Comment
 *
 * @category    Class
 * @description Success.
 * @package     OpenAPI\Client
 */
class GetInvoicesDocumentResponseTest extends TestCase
{

    private GetInvoicesDocumentResponse $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetInvoicesDocumentResponse();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetInvoicesDocumentResponse"
     */
    public function testGetInvoicesDocumentResponse()
    {
        $this->assertInstanceOf(GetInvoicesDocumentResponse::class, $this->model);
    }

    /**
     * Test attribute "invoices_document"
     */
    public function testPropertyInvoicesDocument()
    {
        
        $testValue = new \OpenAPI\Client\Model\invoices\v2024_06_19\InvoicesDocument();
        
        $this->model->setInvoicesDocument($testValue);
        $this->assertEquals($testValue, $this->model->getInvoicesDocument());
    }
}
