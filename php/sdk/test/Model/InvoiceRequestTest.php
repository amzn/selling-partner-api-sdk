<?php
/**
 * InvoiceRequestTest
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
use OpenAPI\Client\Model\messaging\InvoiceRequest;

/**
 * InvoiceRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the sendInvoice operation.
 * @package     OpenAPI\Client
 */
class InvoiceRequestTest extends TestCase
{

    private InvoiceRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InvoiceRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InvoiceRequest"
     */
    public function testInvoiceRequest()
    {
        $this->assertInstanceOf(InvoiceRequest::class, $this->model);
    }

    /**
     * Test attribute "attachments"
     */
    public function testPropertyAttachments()
    {
        $testValue = [];
        
        $this->model->setAttachments($testValue);
        $this->assertEquals($testValue, $this->model->getAttachments());
    }
}
