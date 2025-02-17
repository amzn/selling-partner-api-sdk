<?php
/**
 * InvoiceDetailsTest
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
use SpApi\Model\shipping\v2\InvoiceDetails;

/**
 * InvoiceDetailsTest Class Doc Comment
 *
 * @category    Class
 * @description The invoice details for charges associated with the goods in the package. Only applies to certain regions.
 * @package     SpApi
 */
class InvoiceDetailsTest extends TestCase
{

    private InvoiceDetails $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InvoiceDetails();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InvoiceDetails"
     */
    public function testInvoiceDetails()
    {
        $this->assertInstanceOf(InvoiceDetails::class, $this->model);
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
}
