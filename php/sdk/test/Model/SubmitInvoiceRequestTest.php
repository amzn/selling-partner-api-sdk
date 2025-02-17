<?php
/**
 * SubmitInvoiceRequestTest
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
use SpApi\Model\invoicing\v0\SubmitInvoiceRequest;

/**
 * SubmitInvoiceRequestTest Class Doc Comment
 *
 * @category    Class
 * @description The request schema for the submitInvoice operation.
 * @package     SpApi
 */
class SubmitInvoiceRequestTest extends TestCase
{

    private SubmitInvoiceRequest $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SubmitInvoiceRequest();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SubmitInvoiceRequest"
     */
    public function testSubmitInvoiceRequest()
    {
        $this->assertInstanceOf(SubmitInvoiceRequest::class, $this->model);
    }

    /**
     * Test attribute "invoice_content"
     */
    public function testPropertyInvoiceContent()
    {
        
        $testValue = new string();
        
        $this->model->setInvoiceContent($testValue);
        $this->assertEquals($testValue, $this->model->getInvoiceContent());
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
     * Test attribute "content_md5_value"
     */
    public function testPropertyContentMd5Value()
    {
        $testValue = 'test';
        
        $this->model->setContentMd5Value($testValue);
        $this->assertEquals($testValue, $this->model->getContentMd5Value());
    }
}
